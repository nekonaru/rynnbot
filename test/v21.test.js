import { test } from "node:test";
import assert from "node:assert/strict";
import { daftarCommandV2, daftarKategoriCommand } from "../lib/command-registry.js";
import { kategoriDariNama, bangunMenu, ringkasanKategori } from "../lib/menu-builder.js";

const BAKU = ["UMUM", "BOT", "GRUP", "EKONOMI", "GAME", "TURNAMEN", "EDUKASI", "AI", "MEDIA", "PENCARIAN", "KOMUNITAS", "STATISTIK", "KEAMANAN", "OWNER"];

test("semua kategori mengikuti taksonomi baku", () => {
	const kategori = daftarKategoriCommand().map((k) => k.kategori);
	assert.deepEqual([...kategori].sort(), [...BAKU].sort());
});

test("tidak ada penumpukan ekstrem", () => {
	for (const k of daftarKategoriCommand()) assert.ok(k.jumlah <= 200, `${k.kategori}: ${k.jumlah}`);
});

test("alias kategori lama tetap dikenal", () => {
	assert.equal(kategoriDariNama("edukasi"), "EDUKASI");
	assert.equal(kategoriDariNama("liga"), "TURNAMEN");
	assert.equal(kategoriDariNama("cari"), "PENCARIAN");
	assert.equal(kategoriDariNama("owner"), "OWNER");
	assert.equal(kategoriDariNama("pencarian"), "PENCARIAN");
	assert.equal(kategoriDariNama("quotes"), "GAME");
});

test("submenu dibangun dari kategori baku", () => {
	const teks = bangunMenu("EKONOMI", "❯", ".");
	assert.match(teks, /EKONOMI/);
	assert.ok(teks.split("\n").length > 2);
	assert.match(ringkasanKategori(), /EKONOMI/);
});

test("setiap perintah punya contoh dan kategori", () => {
	for (const e of daftarCommandV2().filter((x) => !x.hidden)) {
		assert.ok(e.contoh?.startsWith("."), e.command);
		assert.ok(BAKU.includes(e.kategori), e.command);
	}
});
