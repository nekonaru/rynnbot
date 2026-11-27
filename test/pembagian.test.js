import { test } from "node:test";
import assert from "node:assert/strict";
import { bagiKelompok, bagiTim, ukuranTimGame, formatPembagian } from "../lib/pembagian.js";
import { buatBracket, catatMenang, formatBracket } from "../lib/turnamen.js";
import { denganCache, bersihkanCache } from "../lib/cache.js";

test("bagi kelompok menghitung sisa dan distribusi", () => {
	const hasil = bagiKelompok(38, 5);
	assert.deepEqual(hasil.distribusi, [8, 8, 8, 7, 7]);
	assert.equal(hasil.perKelompok, 7);
	assert.equal(hasil.sisa, 3);
	assert.equal(bagiKelompok(5, 10), null);
	assert.match(formatPembagian(hasil), /Sisa: 3/);
});

test("ukuran tim game dikenal", () => {
	assert.equal(ukuranTimGame("Mobile Legend"), 5);
	assert.equal(ukuranTimGame("PUBG"), 4);
	assert.equal(ukuranTimGame("free fire"), 4);
	assert.equal(ukuranTimGame("game aneh"), null);
	const t = bagiTim(20, 5);
	assert.equal(t.jumlahTim, 4);
	assert.equal(t.sisa, 0);
	assert.equal(t.formasi, "5v5");
});

test("bracket single elimination sampai juara", () => {
	const b = buatBracket(["A", "B", "C", "D"]);
	assert.equal(b.babak.length, 2);
	assert.equal(catatMenang(b, 1, 0, "A").selesai, false);
	assert.equal(catatMenang(b, 1, 1, "C").selesai, false);
	const akhir = catatMenang(b, 2, 0, "A");
	assert.equal(akhir.selesai, true);
	assert.equal(akhir.juara, "A");
	assert.match(formatBracket(b), /Juara: \*A\*/);
});

test("bracket menolak pemenang invalid", () => {
	const b = buatBracket(["A", "B", "C", "D"]);
	assert.equal(catatMenang(b, 1, 0, "Z").ok, false);
	assert.equal(catatMenang(b, 1, 5, "A").ok, false);
});

test("cache mengembalikan nilai yang sama sebelum kedaluwarsa", () => {
	bersihkanCache();
	let panggil = 0;
	const hasil = () => denganCache("x", 60000, () => ++panggil);
	assert.equal(hasil(), 1);
	assert.equal(hasil(), 1);
	assert.equal(panggil, 1);
});
