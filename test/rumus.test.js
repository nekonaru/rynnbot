import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import { daftarKategori, halamanRumus, cariRumus, rumusAcak, rumusDetail, statistikRumus, formatRumus, semuaEntriRumus } from "../lib/rumus/index.js";
import { daftarCommand, cariCommand, infoCommand, jumlahCase } from "../lib/command-registry.js";
import { API_COMMANDS } from "../lib/api-commands.js";

test("sistem rumus memiliki banyak entri dan kategori", () => {
	const s = statistikRumus();
	assert.ok(s.total > 1000, `total rumus ${s.total}`);
	assert.ok(s.kategori >= 20, `kategori ${s.kategori}`);
	assert.ok(daftarKategori().every((k) => k.jumlah > 0));
});

test("id rumus unik dan field lengkap", () => {
	const semua = semuaEntriRumus();
	const ids = semua.map((r) => r.id);
	assert.equal(new Set(ids).size, ids.length, "id duplikat");
	for (const r of semua) {
		assert.ok(r.nama && r.rumus && r.variabel && r.kategori && r.subkategori);
		assert.match(r.id, /^[A-Z]{3}-\d{4}$/);
	}
});

test("pencarian, halaman, detail, dan rumus acak", () => {
	const hasil = cariRumus("energi kinetik");
	assert.ok(hasil.length > 0);
	assert.ok(hasil.some((r) => r.rumus.includes("1/2 m v^2")));
	const hal = halamanRumus("matematika", 2);
	assert.equal(hal.halaman, 2);
	assert.ok(hal.entri.length > 0);
	const detail = rumusDetail(hal.entri[0].id);
	assert.equal(detail.nama, hal.entri[0].nama);
	assert.match(formatRumus(detail), /ID:/);
	assert.ok(rumusAcak("fisika"));
	assert.equal(rumusAcak("kategori-tidak-ada"), null);
});

test("registry perintah konsisten dengan case handler", () => {
	const sumber = fs.readFileSync("handler.js", "utf8");
	const cases = new Set([...sumber.matchAll(/^\t\t\tcase\s+["']([a-z0-9_]+)["']:/gm)].map((m) => m[1]));
	const daftar = daftarCommand();
	for (const e of daftar) assert.ok(cases.has(e.command), `perintah menu ${e.command} tanpa case`);
	assert.equal(jumlahCase(), cases.size);
	assert.ok(cariCommand("rumus").length > 0);
	assert.equal(infoCommand("rumus").kategori, "EDUKASI");
});

test("perintah lokal tidak diblokir oleh gate API", () => {
	for (const lokal of ["rumus", "statistik", "pecahan", "matriks", "kalkulasi"]) assert.ok(!API_COMMANDS.has(lokal), `${lokal} tidak boleh masuk daftar API`);
	for (const api of ["ai", "hitung", "lirik", "ytmp3"]) assert.ok(API_COMMANDS.has(api), `${api} harus masuk daftar API`);
});
