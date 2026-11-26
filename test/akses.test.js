import { test } from "node:test";
import assert from "node:assert/strict";
import { cekAkses, aturAkses, matikanPerintah, hidupkanPerintah, aturCooldown } from "../lib/access.js";

test("akses role", () => {
	const db = { access: {} };
	aturAkses(db, "rumus", "premium");
	assert.equal(cekAkses({ db, chat: "c", sender: "s", command: "rumus", isCreator: false, isAdmin: false, isPremium: false, isVip: false }).ok, false);
	assert.equal(cekAkses({ db, chat: "c", sender: "s", command: "rumus", isCreator: false, isAdmin: false, isPremium: true, isVip: false }).ok, true);
	assert.equal(cekAkses({ db, chat: "c", sender: "s", command: "rumus", isCreator: true, isAdmin: false, isPremium: false, isVip: false }).ok, true);
	assert.equal(aturAkses(db, "x", "ngawur"), false);
});

test("matikan dan hidupkan perintah", () => {
	const db = { set: {} };
	matikanPerintah(db, "grup", "rumus");
	assert.equal(cekAkses({ db, chat: "grup", sender: "s", command: "rumus", isCreator: false, isAdmin: false, isPremium: false, isVip: false }).ok, false);
	assert.equal(cekAkses({ db, chat: "grup", sender: "s", command: "rumus", isCreator: false, isAdmin: true, isPremium: false, isVip: false }).ok, true);
	hidupkanPerintah(db, "grup", "rumus");
	assert.equal(cekAkses({ db, chat: "grup", sender: "s", command: "rumus", isCreator: false, isAdmin: false, isPremium: false, isVip: false }).ok, true);
});

test("cooldown per perintah", () => {
	const db = { cooldowns: {} };
	aturCooldown(db, "rumus", 5);
	assert.equal(aturCooldown(db, "x", -1), false);
	const opsi = { db, chat: "c", sender: "s", command: "rumus", isCreator: false, isAdmin: false, isPremium: false, isVip: false };
	assert.equal(cekAkses(opsi).ok, true);
	const lagi = cekAkses(opsi);
	assert.equal(lagi.ok, false);
	assert.match(lagi.alasan, /Tunggu/);
});
