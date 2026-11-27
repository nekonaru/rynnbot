import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cekAkses } from "../lib/access.js";
import { tandaiQuest } from "../lib/quest.js";
import { akarKuadrat, luasBangun } from "../lib/geometri.js";
import { jalankanBerkunci, jumlahAntrean } from "../lib/antrian.js";
import { statistikRumus } from "../lib/rumus/index.js";
import { similarity, extractUrl } from "../lib/function.js";

test("akses admin dan owner dapat diberikan", () => {
	const db = { access: { a: "admin", b: "owner" }, set: {}, cooldowns: {} };
	assert.equal(cekAkses({ db, chat: "c", sender: "s", command: "a", isCreator: false, isAdmin: true, isPremium: false, isVip: false }).ok, true);
	assert.equal(cekAkses({ db, chat: "c", sender: "s", command: "a", isCreator: false, isAdmin: false, isPremium: false, isVip: false }).ok, false);
	assert.equal(cekAkses({ db, chat: "c", sender: "s", command: "b", isCreator: false, isAdmin: true, isPremium: false, isVip: false }).ok, false);
});

test("quest memakai tanggal lokal, bukan UTC", () => {
	const kode = `
		import { tandaiQuest } from "./lib/quest.js";
		const Asli = global.Date;
		const tetap = new Asli("2026-11-28T17:30:00Z");
		global.Date = class extends Asli {
			constructor(...arg) { super(...(arg.length ? arg : [tetap.getTime()])); }
		};
		const db = { users: {} };
		tandaiQuest(db, "s", "harian");
		console.log(db.users.s.quest.tanggal);
	`;
	const hasil = spawnSync(process.execPath, ["--input-type=module", "-e", kode], {
		cwd: process.cwd(),
		encoding: "utf8",
		env: { ...process.env, TZ: "Asia/Jakarta" },
	});
	assert.equal(hasil.status, 0, hasil.stderr);
	assert.equal(hasil.stdout.trim(), "2026-11-29");
});

test("akar imajiner bernilai positif untuk a negatif", () => {
	const h = akarKuadrat(-1, 0, -1);
	assert.equal(h.tipe, "kompleks");
	assert.equal(h.imajiner, 1);
});

test("luas persegi panjang dua kata diterima", () => {
	assert.equal(luasBangun("persegi panjang", 3, 4).hasil, 12);
});

test("antrean menjalankan satu tugas per kunci", async () => {
	const urutan = [];
	const a = jalankanBerkunci("k", async () => {
		urutan.push("mulai-a");
		await new Promise((r) => setTimeout(r, 10));
		urutan.push("selesai-a");
	});
	const b = jalankanBerkunci("k", async () => urutan.push("b"));
	await Promise.all([a, b]);
	assert.deepEqual(urutan, ["mulai-a", "selesai-a", "b"]);
	assert.equal(jumlahAntrean(), 0);
});

test("antrean tidak memicu unhandled rejection", async () => {
	const tertangkap = [];
	const dengar = (e) => tertangkap.push(e);
	process.on("unhandledRejection", dengar);
	const gagal = jalankanBerkunci("x", async () => {
		throw new Error("sengaja");
	});
	await assert.rejects(gagal, /sengaja/);
	await new Promise((r) => setImmediate(r));
	process.off("unhandledRejection", dengar);
	assert.equal(tertangkap.length, 0);
});

test("statistik rumus konsisten dan cache stabil", () => {
	const a = statistikRumus();
	const b = statistikRumus();
	assert.equal(a.total, b.total);
	assert.ok(a.total > 10000);
	assert.equal(Object.values(a.perKategori).reduce((n, x) => n + x, 0), a.total);
});

test("similarity dan extractUrl tetap benar setelah optimasi", () => {
	assert.equal(similarity("halo", "halo"), 1);
	assert.ok(similarity("halo", "hallo") >= 0.8);
	assert.equal(extractUrl("buka https://example.com sekarang"), "https://example.com");
	assert.equal(extractUrl("kosong"), null);
});
