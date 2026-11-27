import { test } from "node:test";
import assert from "node:assert/strict";
import { formatDaftar, daftarHalaman } from "../lib/daftar.js";
import { statistikRumus, daftarKategori } from "../lib/rumus/index.js";
import { PANTUN_V6, PUISI_V6, HANGMAN_V6, FAKTA_HITUNG, SOAL_V6 } from "../lib/data-v6.js";

test("renderer daftar menaruh acak di atas dan membagi halaman", () => {
	const data = Array.from({ length: 30 }, (_, i) => ({ nama: `Item ${i + 1}`, info: `Info ${i + 1}` }));
	const teks = formatDaftar({ judul: "Contoh", data, halaman: 2 });
	assert.match(teks, /\*Contoh \(30\)\*/);
	assert.match(teks, /Acak:/);
	assert.match(teks, /13\. \*Item 13\*/);
	assert.match(teks, /Halaman 2\/3/);
	assert.equal(daftarHalaman(data, 9).halaman, 3);
});

test("ekspansi data v6 valid", () => {
	assert.ok(PANTUN_V6.length >= 200);
	assert.ok(PANTUN_V6.every((p) => p.split("\n").length === 4));
	assert.ok(PUISI_V6.length >= 100);
	assert.ok(HANGMAN_V6.length >= 200);
	assert.ok(HANGMAN_V6.every((w) => /^[a-z]+$/.test(w)));
	assert.ok(FAKTA_HITUNG.includes("2 + 3 = 5"));
	assert.ok(SOAL_V6.matematika.length >= 150);
	assert.ok(SOAL_V6.matematika.every((s) => s.o.length === 4 && s.a === 1));
});

test("rumus v6 bertambah banyak kategori", () => {
	const s = statistikRumus();
	assert.ok(s.total > 2500, `total ${s.total}`);
	assert.ok(s.kategori >= 35, `kategori ${s.kategori}`);
	assert.ok(daftarKategori().some((k) => k.kategori === "bilangan kompleks"));
});
