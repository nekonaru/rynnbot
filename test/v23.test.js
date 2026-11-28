import { test } from "node:test";
import assert from "node:assert/strict";
import { datasetV23, ambilDataset, cariDataset, totalV23 } from "../lib/data-v23/indeks.js";
import { bangunIndeksMenu, bangunAllMenu, bangunMenu, kategoriDariNama } from "../lib/menu-builder.js";

test("dataset v23 memiliki metadata lengkap", () => {
	const semua = datasetV23();
	assert.ok(semua.length >= 20);
	for (const d of semua) {
		assert.ok(d.nama && d.kelas && d.sumber, d.nama);
		assert.ok(["fakta", "kreatif", "turunan"].includes(d.kelas), d.nama);
		assert.ok(d.jumlah > 0, d.nama);
	}
	assert.equal(totalV23(), semua.reduce((n, d) => n + d.jumlah, 0));
});

test("dataset kreatif dan turunan memiliki jumlah besar", () => {
	assert.ok(ambilDataset("Templat surat").jumlah >= 150);
	assert.ok(ambilDataset("Resep").jumlah >= 100);
	assert.ok(ambilDataset("Sinonim").jumlah >= 100);
	assert.ok(ambilDataset("Singkatan").jumlah >= 100);
});

test("pencarian lintas dataset bekerja", () => {
	assert.equal(ambilDataset("Tidak ada"), null);
	assert.equal(ambilDataset("gunung").nama, "Gunung");
	const hasil = cariDataset("Merapi");
	assert.ok(hasil.some((x) => x.dataset === "Gunung"));
});

test("indeks menu menampilkan kategori baku", () => {
	const indeks = bangunIndeksMenu("❯", ".");
	assert.match(indeks, /KATEGORI MENU/);
	assert.match(indeks, /ekonomi/i);
	assert.match(indeks, /allmenu/);
	const semua = bangunAllMenu("❯", ".");
	assert.match(semua, /INDEKS KATEGORI/);
	assert.match(semua, /OWNER/);
	assert.match(bangunMenu("EKONOMI", "❯", "."), /EKONOMI/);
	assert.equal(kategoriDariNama("edukasi"), "EDUKASI");
});
