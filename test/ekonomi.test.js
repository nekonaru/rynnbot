import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";
import { buy, transfer, addMoney, addLimit, daily, gameMerampok, gameBegal } from "../lib/game.js";

fs.unwatchFile(path.resolve("settings.js"));

const buat = (saldo = 100000, limit = 100) => ({
	users: {
		"saya": { money: saldo, limit, lastclaim: 0 },
		"kamu@s.whatsapp.net": { money: 0, limit: 0, lastclaim: 0 },
	},
});
const pesan = (sender = "saya", args = [], mention = null) => ({
	sender, args, prefix: ".", command: "buy", mentionedJid: mention ? [mention] : [], quoted: null,
	balasan: [], reply(s) { this.balasan.push(String(s)); },
});

test("buy menolak jumlah negatif, nol, dan bukan bilangan", async () => {
	const db = buat(100000);
	let m = pesan("saya", ["limit", "-100"]);
	await buy(m, m.args, db);
	assert.equal(db.users.saya.money, 100000, "uang tidak boleh bertambah dari jumlah negatif");
	assert.equal(db.users.saya.limit, 100);
	assert.match(m.balasan[0], /bilangan bulat/);

	m = pesan("saya", ["limit", "0"]);
	await buy(m, m.args, db);
	assert.equal(db.users.saya.money, 100000);

	m = pesan("saya", ["limit", "abc"]);
	await buy(m, m.args, db);
	assert.equal(db.users.saya.money, 100000);
});

test("buy berhasil membeli limit", async () => {
	const db = buat(100000, 10);
	const m = pesan("saya", ["limit", "3"]);
	await buy(m, m.args, db);
	assert.equal(db.users.saya.limit, 13);
	assert.equal(db.users.saya.money, 98500);
});

test("transfer menolak target pendek dan jumlah negatif", async () => {
	const db = buat(1000, 50);
	let m = pesan("saya", ["uang", "a", "50"]);
	await transfer(m, m.args, db);
	assert.ok(!/Berhasil/.test(m.balasan[0]));
	assert.equal(db.users.saya.money, 1000);

	m = pesan("saya", ["uang", "123", "-50"]);
	await transfer(m, m.args, db);
	assert.equal(db.users.saya.money, 1000);
});

test("transfer uang berhasil dengan mention", async () => {
	const db = buat(1000, 50);
	const m = pesan("saya", ["uang", "@kamu", "100"], "kamu@s.whatsapp.net");
	await transfer(m, m.args, db);
	assert.equal(db.users.saya.money, 900);
	assert.equal(db.users["kamu@s.whatsapp.net"].money, 100);
});

test("addMoney dan addLimit mengabaikan nilai invalid", () => {
	const db = buat(1000, 50);
	addMoney("-500", "saya", db);
	addMoney("abc", "saya", db);
	addLimit("-10", "saya", db);
	assert.equal(db.users.saya.money, 1000);
	assert.equal(db.users.saya.limit, 50);
	addMoney("250", "saya", db);
	assert.equal(db.users.saya.money, 1250);
});

test("daily bisa diklaim saat lastclaim belum ada", async () => {
	const db = buat(0, 0);
	delete db.users.saya.lastclaim;
	const m = pesan();
	await daily(m, db);
	assert.equal(db.users.saya.money, 10000);
	assert.equal(db.users.saya.limit, 10);
});

const pesanGrup = (target) => ({
	sender: "saya", isGroup: true, mentionedJid: target ? [target] : [], quoted: null,
	chat: "grp", prefix: ".", command: "rampok", balasan: [], reply(s) { this.balasan.push(String(s)); return { key: "k" }; },
});

test("merampok bisa dijalankan pemain baru dan tidak memotong limit saat gagal", async () => {
	const db = buat(0, 10);
	db.users["kamu@s.whatsapp.net"].money = 20000;
	delete db.users.saya.lastrampok;
	let m = pesanGrup(null);
	await gameMerampok(m, db);
	assert.match(m.balasan[0], /Tag salah satu/);
	assert.equal(db.users.saya.limit, 10, "limit tidak boleh dipotong saat target belum ada");

	m = pesanGrup("kamu@s.whatsapp.net");
	await gameMerampok(m, db);
	assert.equal(db.users.saya.limit, 9);
	assert.ok(db.users.saya.money > 0);
	assert.ok(db.users.saya.lastrampok > 0);

	const sebelum = db.users.saya.limit;
	m = pesanGrup("kamu@s.whatsapp.net");
	await gameMerampok(m, db);
	assert.match(m.balasan[0], /sudah merampok/i);
	assert.equal(db.users.saya.limit, sebelum, "cooldown tidak boleh memotong limit");
});

test("begal tidak memotong limit saat masih cooldown", async () => {
	const db = buat(0, 10);
	db.users.saya.lastbegal = Date.now();
	const conn = { decodeJid: async () => "bot@s.whatsapp.net" };
	const m = pesanGrup();
	await gameBegal(conn, m, db);
	assert.match(m.balasan[0], /Silahkan tunggu/);
	assert.equal(db.users.saya.limit, 10);
});
