import { test } from "node:test";
import assert from "node:assert/strict";
import { daftarPaket, pilihPaket, paketAktif, bandingPaket, batasPaket } from "../lib/v16/paket.js";
import { undangBuat, undangPakai, undangMilik, referralPapan, hadiahReferral } from "../lib/v16/undang.js";
import { artikelBuat, artikelAmbil, artikelIsi, artikelHapus, artikelCari, seriLanjut } from "../lib/v16/artikel.js";
import { surveiBuat, surveiAmbil, surveiOpsi, surveiJawab, surveiHasil, surveiTutup } from "../lib/v16/survei.js";
import { koperasiBuat, koperasiGabung, koperasiSetor, koperasiPinjam, koperasiRekap, koperasiTutup } from "../lib/v16/koperasi.js";
import { inventarisBuat, inventarisTambah, inventarisPakai, inventarisJual, inventarisCari, avatarBuat, avatarPakai } from "../lib/v16/inventaris.js";
import { papanUmum, papanPoin, papanKuis, papanGame, papanGrup, papanKontribusi, formatPapan } from "../lib/v16/papan.js";
import { eksporPaket, simpanPaket, ambilPaket, imporPaket, bandingPaket as bandingPaketData, hapusPaket } from "../lib/v16/pindah.js";
import { cekDataset, duplikatDataset, kosongDataset, ukuranDataset, laporanSehat, perbaikiDuplikat } from "../lib/v16/sehat.js";
import { daftarMode, pakaiMode, modeSekarang, flagFitur, aturFitur, aktifFitur } from "../lib/v16/mode.js";
import { konstitusiBuat, konstitusiPasal, konstitusiSetuju, tandaTangan, cekTandaTangan } from "../lib/v16/konstitusi.js";
import { aksesMatriks, aturLimit, bersihkanState, memoriPeta, eventLog, catatEvent, jadwalKerja } from "../lib/v16/owner.js";

test("paket simulasi memilih dan membandingkan", () => {
	const u = {};
	assert.equal(daftarPaket().length, 3);
	assert.equal(pilihPaket(u, "plus").nama, "Plus");
	assert.equal(paketAktif(u).nama, "Plus");
	assert.equal(batasPaket(u), 50);
	assert.ok(bandingPaket("dasar", "pro"));
});

test("undang dan referral", () => {
	const db = {};
	const k = undangBuat(db, "a@s.whatsapp.net");
	assert.equal(undangPakai(db, k.kode, "b@s.whatsapp.net").dipakai.length, 1);
	assert.equal(undangPakai(db, k.kode, "b@s.whatsapp.net"), null);
	assert.equal(undangMilik(db, "a@s.whatsapp.net").length, 1);
	assert.equal(referralPapan(db)[0].jumlah, 1);
	assert.equal(hadiahReferral(5), "lencana perak");
});

test("artikel dan seri", () => {
	const u = {};
	const a = artikelBuat(u, "Judul");
	assert.ok(artikelIsi(artikelAmbil(u, a.id), "Isi"));
	assert.equal(seriLanjut(a, "bab satu"), 1);
	assert.equal(artikelCari(u, "judul").length, 1);
	assert.equal(artikelHapus(u, a.id), true);
});

test("survei mencatat jawaban", () => {
	const db = {};
	const s = surveiBuat(db, "g", "Pilihan");
	assert.ok(surveiOpsi(s, "A"));
	assert.ok(surveiJawab(s, "a@s.whatsapp.net", "A"));
	assert.equal(surveiHasil(surveiAmbil(db, s.id))[0][1], 1);
	assert.equal(surveiTutup(s), true);
});

test("koperasi simulasi", () => {
	const db = {};
	const k = koperasiBuat(db, "g", "Bersama");
	assert.ok(koperasiGabung(k, "a@s.whatsapp.net"));
	assert.ok(koperasiSetor(k, "a@s.whatsapp.net", 100));
	assert.ok(koperasiPinjam(k, "a@s.whatsapp.net", 50));
	assert.equal(koperasiRekap(k)[0].pinjaman, 50);
	assert.equal(koperasiTutup(k), true);
});

test("inventaris dan avatar", () => {
	const u = {};
	assert.ok(inventarisBuat(u, "kotak"));
	assert.ok(inventarisTambah(u, "kotak", "buku"));
	assert.ok(inventarisPakai(u, "buku"));
	assert.equal(inventarisCari(u, "buku").length, 1);
	assert.ok(inventarisJual(u, "buku"));
	assert.ok(avatarBuat(u, "kucing"));
	assert.equal(avatarPakai(u, "kucing").nama, "kucing");
});

test("papan peringkat", () => {
	const db = { users: { a: { poin: 5, skorBelajar: 2 } }, set: { "g@g.us": { admin: ["a@s.whatsapp.net"] } } };
	assert.equal(papanUmum(db).length, 1);
	assert.equal(papanPoin(db).length, 1);
	assert.equal(papanKuis(db).length, 1);
	assert.equal(papanGame(db, { quiz: 3 }).length, 1);
	assert.equal(papanGrup(db, "g@g.us").length, 1);
	assert.equal(papanKontribusi(db).length, 0);
	assert.match(formatPapan(papanPoin(db)), /a:/);
});

test("portabilitas data", () => {
	const u = { catatan: { a: "isi" }, aset: { b: { isi: "x" } }, koleksi: ["k"] };
	const p = eksporPaket(u);
	assert.ok(simpanPaket(u, p).length > 0);
	assert.ok(ambilPaket(u, p.kode));
	assert.ok(imporPaket({}, p));
	assert.ok(bandingPaketData(u, p));
	assert.equal(hapusPaket(u, p.kode), true);
});

test("validasi dataset", () => {
	assert.equal(cekDataset({ a: 1 }, "x").jumlah, 1);
	assert.deepEqual(duplikatDataset(["a", "a"]), ["a"]);
	assert.equal(kosongDataset([null, "a"]), 1);
	assert.equal(ukuranDataset({ a: [1, 2] }).a, 2);
	assert.equal(laporanSehat([cekDataset({ a: 1 }, "x")]).length, 1);
	assert.equal(perbaikiDuplikat(["a", "a"]).dihapus, 1);
});

test("mode dan penanda fitur", () => {
	const g = {};
	const db = {};
	assert.ok(daftarMode().includes("ringkas"));
	assert.equal(pakaiMode(g, "ringkas").nama, "Ringkas");
	assert.equal(modeSekarang(g).nama, "Ringkas");
	assert.ok(flagFitur(db, "beta"));
	assert.ok(aturFitur(db, "beta", true));
	assert.equal(aktifFitur(db, "beta"), true);
});

test("konstitusi dan tanda tangan", () => {
	const db = {};
	const k = konstitusiBuat(db, "g", "Aturan");
	assert.equal(konstitusiPasal(k, "pasal satu").versi, 2);
	assert.ok(konstitusiSetuju(k, "a@s.whatsapp.net"));
	const t = tandaTangan("halo");
	assert.equal(cekTandaTangan(t, "halo"), true);
	assert.equal(cekTandaTangan(t, "dunia"), false);
});

test("owner diagnostik", () => {
	const db = { access: { rumus: "free" }, eventLog: [] };
	assert.equal(aksesMatriks(db).length, 1);
	assert.equal(aturLimit(db, 20), 20);
	assert.equal(bersihkanState({ transferPending: new Map() }), 0);
	assert.ok(memoriPeta().heap >= 0);
	catatEvent(db, "cek");
	assert.equal(eventLog(db).length, 1);
	assert.ok(Object.keys(jadwalKerja({})).length === 3);
});

test("cabang invalid ditangani", () => {
	assert.equal(pilihPaket({}, "x"), null);
	assert.equal(undangPakai({}, "x", "a"), null);
	assert.deepEqual(undangMilik({}), []);
	assert.equal(artikelAmbil({}, "x"), null);
	assert.equal(artikelIsi(null, "x"), null);
	assert.equal(artikelHapus({}, "x"), false);
	assert.deepEqual(artikelCari({}, "x"), []);
	assert.equal(seriLanjut(null, "x"), null);
	assert.equal(surveiAmbil({}, "x"), null);
	assert.equal(surveiOpsi(null, "x"), null);
	assert.equal(surveiJawab(null, "a", "x"), false);
	assert.deepEqual(surveiHasil(null), []);
	assert.equal(surveiTutup(null), false);
	assert.equal(koperasiBuat({}, "g", ""), null);
	assert.equal(koperasiGabung(null, "a"), null);
	assert.equal(koperasiSetor(null, "a", 1), false);
	assert.equal(koperasiPinjam(null, "a", 1), false);
	assert.deepEqual(koperasiRekap(null), []);
	assert.equal(koperasiTutup(null), false);
	assert.equal(inventarisBuat({}, ""), null);
	assert.equal(inventarisTambah({}, "x", "y"), null);
	assert.equal(inventarisPakai({}, "x"), null);
	assert.equal(inventarisJual({}, "x"), null);
	assert.deepEqual(inventarisCari({}, "x"), []);
	assert.equal(avatarBuat({}, ""), null);
	assert.equal(avatarPakai({}, "x"), null);
	assert.deepEqual(papanGame({}), []);
	assert.deepEqual(formatPapan([]), "");
	assert.equal(ambilPaket({}, "x"), null);
	assert.equal(imporPaket({}, null), false);
	assert.equal(bandingPaketData({}, null), null);
	assert.equal(hapusPaket({}, "x"), false);
	assert.deepEqual(duplikatDataset(null), []);
	assert.deepEqual(kosongDataset(null), []);
	assert.equal(perbaikiDuplikat(null), null);
	assert.equal(pakaiMode({}, "x"), null);
	assert.equal(flagFitur({}, ""), null);
	assert.equal(aturFitur({}, "x", true), false);
	assert.equal(konstitusiPasal(null, "x"), null);
	assert.equal(konstitusiSetuju(null, "a"), false);
	assert.equal(aturLimit({}, -1), null);
});
