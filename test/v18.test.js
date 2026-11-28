import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { aman, ada, daftarAman } from "../lib/path-aman.js";
import { redaksi, formatLog, catatLog, hapusLogPengirim } from "../lib/log-terstruktur.js";
import { ubahSaldo } from "../lib/transaksi.js";
import { transferPoin } from "../lib/v15/poin.js";

test("path aman menolak traversals dan jalur absolut", () => {
	const root = process.cwd();
	assert.equal(aman("../rahasia", root), null);
	assert.equal(aman("C:\\Windows\\system32", root), null);
	assert.equal(aman(".env", root), null);
	assert.ok(aman("database/temp/contoh.txt", root));
	assert.equal(ada("package.json", root), path.join(root, "package.json"));
	assert.ok(Array.isArray(daftarAman(".", root)));
});

test("log terstruktur meredaksi kunci sensitif", () => {
	const r = redaksi({ apiKey: "rahasia", token: "abc", pesan: "halo" });
	assert.equal(r.apiKey, "[diredaksi]");
	assert.equal(r.token, "[diredaksi]");
	assert.equal(r.pesan, "halo");
	const l = formatLog({ perintah: "rumus", pengirim: "6281@s.whatsapp.net", pesan: "apiKey=rahasia" });
	assert.ok(!l.includes("rahasia"));
	assert.ok(!formatLog({ pesan: "Authorization: Bearer sk-abc123secret" }).includes("sk-abc123secret"));
	assert.ok(!formatLog({ pesan: '{"apiKey":"sk-live-SECRETVALUE"}' }).includes("SECRETVALUE"));
	assert.equal(redaksi({ pwd: "x", cookie: "session=y" }).pwd, "[diredaksi]");
	const db = {};
	catatLog(db, { perintah: "rumus", pengirim: "a@s.whatsapp.net" });
	assert.equal(hapusLogPengirim(db, "a@s.whatsapp.net"), 1);
});

test("transaksi membuat db.users bila belum ada", () => {
	const db = {};
	assert.ok(ubahSaldo(db, "a@s.whatsapp.net", "money", 10));
	assert.equal(db.users["a@s.whatsapp.net"].money, 10);
	assert.equal(ubahSaldo(db, "b@s.whatsapp.net", "money", NaN), null);
});

test("transfer poin memakai jalur transaksi", () => {
	const db = { users: { a: { poin: 20 }, b: { poin: 0 } } };
	assert.equal(transferPoin(db, "a", "b", 5), true);
	assert.equal(db.users.a.poin, 15);
	assert.equal(db.users.b.poin, 5);
	assert.equal(transferPoin(db, db.users.a, "b", 5), true);
});

test("dokumen perintah dihasilkan dari registry", () => {
	const berkas = path.join(process.cwd(), "docs", "COMMANDS.md");
	assert.ok(fs.existsSync(berkas));
	const isi = fs.readFileSync(berkas, "utf8");
	assert.match(isi, /Daftar Perintah Rynn/);
	assert.match(isi, /Total \d+ perintah/);
});
