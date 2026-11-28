import { test } from "node:test";
import assert from "node:assert/strict";
import { pasangSweeperState } from "../lib/handler/state-sweeper.js";
import { hitungLevel, formatAchievement, formatLevel, formatLevelboard } from "../lib/handler/progres.js";
import { parsePasanganGrafik, formatGrafik, statistikTeks, formatPanjangTeks } from "../lib/handler/teks-lanjut.js";
import { detailUmur, formatUmurDetail } from "../lib/handler/waktu.js";

test("sweeper membersihkan state kedaluwarsa", () => {
	const g = { quizState: new Map() };
	g.quizState.set("lama", { at: Date.now() - 3600000 });
	g.quizState.set("baru", { at: Date.now() });
	pasangSweeperState({ globalObj: g, batasMenit: 15, intervalMenit: 600 });
	assert.equal(g.quizState.has("lama"), false);
	assert.equal(g.quizState.has("baru"), true);
	clearInterval(g._stateSweeper);
});

test("sweeper membersihkan state objek kedaluwarsa", () => {
	const g = { riddleState: { lama: { at: Date.now() - 3600000 }, baru: { at: Date.now() } } };
	pasangSweeperState({ globalObj: g, batasMenit: 15, intervalMenit: 600 });
	assert.equal("lama" in g.riddleState, false);
	assert.equal("baru" in g.riddleState, true);
	clearInterval(g._stateSweeper);
});

test("progres menghitung level dan pencapaian", () => {
	const u = { skorBelajar: 5, soal: { benar: 2 }, koleksi: ["a", "b", "c", "d", "e"] };
	assert.deepEqual(hitungLevel(u), { skor: 12, level: 3 });
	assert.match(formatLevel(u), /Level: \*3\*/);
	assert.match(formatAchievement(u, true), /Turnamen/);
	assert.match(formatLevelboard({ a: u }), /level 3/);
});

test("utilitas teks lanjut memformat grafik dan panjang", () => {
	const pasangan = parsePasanganGrafik("kopi=8, teh=4, susu=6");
	assert.equal(pasangan.length, 3);
	assert.match(formatGrafik(pasangan, (v, m, p) => "#".repeat(Math.round((v / m) * p))), /kopi/);
	assert.deepEqual(statistikTeks("halo dunia"), { karakter: 10, kata: 2, tanpaSpasi: 9 });
	assert.match(formatPanjangTeks("halo dunia"), /Kata: 2/);
});

test("detail umur menolak tanggal masa depan", () => {
	const hasil = detailUmur("2000-01-01", new Date("2026-01-01").getTime());
	assert.ok(hasil.tahun >= 25);
	assert.equal(detailUmur("2099-01-01"), null);
	assert.match(formatUmurDetail({ tahun: 1, bulan: 2, minggu: 3, hari: 4 }), /Tahun: 1/);
});
