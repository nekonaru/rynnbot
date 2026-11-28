import { test } from "node:test";
import assert from "node:assert/strict";
import { aturanBuat, aturanAmbil, aturanHapus, aturanMatikan, aturanUji, filterTambah, filterHapus } from "../lib/v15/aturan.js";
import { tambahPoin, papanPoin, hadiahTambah, hadiahTukar, transferPoin } from "../lib/v15/poin.js";
import { tokoBuka, tokoTambah, tokoBeli, lelangBuat, lelangTawar, lelangTutup } from "../lib/v15/toko.js";
import { reputasiBeri, papanReputasi, tepercayaTambah, tepercayaHapus } from "../lib/v15/reputasi.js";
import { kursusBuat, kursusMulai, kursusLanjut, kursusSelesai, sertifikat, materiTambah, materiCari } from "../lib/v15/kursus.js";
import { keputusanBuat, keputusanAmbil, keputusanUbah, keputusanArsip, notulenBanding, simpanNotulenVersi } from "../lib/v15/keputusan.js";
import { proyekBuat, proyekTugas, proyekAmbil, proyekSelesai, proyekPapan, proyekArsip } from "../lib/v15/proyekgrup.js";
import { cariLintas, arsipTanggal, arsipRingkas, cadanganBuat, cadanganList } from "../lib/v15/arsip.js";
import { teksRapi, teksBalik, teksUlang, teksPotong, teksBersih, keHeksa, dariHeksa, teksBanding } from "../lib/v15/teks.js";
import { kunciPerintah, lepasKunci, butuhPin, cocokPin, logKeamanan } from "../lib/v15/keamanan.js";
import { paketBuat, paketTambah, paketHapus, wallpaperTeks, kartuPos } from "../lib/v15/media.js";
import { penggunaAktif, grupAktif, daftarCooldown, daftarAkses, rollbackInfo, alasanBlacklist } from "../lib/v15/owner.js";

test("aturan dan filter bekerja", () => {
	const db = {};
	assert.ok(aturanBuat(db, "g", "sapa", "halo", "hai"));
	assert.equal(aturanUji(db, "g", "halo dunia").nama, "sapa");
	assert.equal(aturanMatikan(db, "g", "sapa", false).aktif, false);
	assert.equal(aturanUji(db, "g", "halo"), null);
	assert.ok(aturanAmbil(db, "g", "sapa"));
	assert.equal(aturanHapus(db, "g", "sapa"), true);
	assert.ok(filterTambah(db, "g", "spam"));
	assert.equal(filterHapus(db, "g", "spam"), true);
});

test("poin dan hadiah terpadu", () => {
	const db = { users: { a: {}, b: {} } };
	assert.equal(tambahPoin(db.users.a, 100, "quiz"), 100);
	assert.equal(papanPoin(db)[0].jid, "a");
	assert.ok(hadiahTambah(db, "stiker", 50));
	assert.ok(hadiahTukar(db.users.a, db, "stiker"));
	assert.equal(db.users.a.poin, 50);
	db.users.a.poin = 10;
	assert.equal(transferPoin(db, db.users.a, "b@s.whatsapp.net", 20), false);
	db.users.a.poin = 20;
	assert.equal(transferPoin(db, db.users.a, "b@s.whatsapp.net", 20), true);
});

test("toko dan lelang simulasi", () => {
	const db = {};
	assert.ok(tokoBuka(db, "g", "warung"));
	const toko = db.toko.warung;
	assert.equal(tokoTambah(toko, "kopi", 5000), true);
	const u = { money: 10000 };
	assert.ok(tokoBeli(toko, u, "kopi"));
	const l = lelangBuat(db, "g", "buku");
	assert.equal(lelangTawar(l, "a@s.whatsapp.net", 100), true);
	assert.equal(lelangTutup(l).nominal, 100);
});

test("reputasi dan tepercaya", () => {
	const db = {};
	assert.equal(reputasiBeri(db, "a", "b@s.whatsapp.net", 2), 2);
	assert.equal(reputasiBeri(db, "a", "b@s.whatsapp.net", 2), null);
	assert.equal(papanReputasi(db)[0][1], 2);
	assert.ok(tepercayaTambah(db, "b@s.whatsapp.net"));
	assert.equal(tepercayaHapus(db, "b@s.whatsapp.net"), true);
});

test("kursus mini dan materi", () => {
	const db = {};
	assert.ok(kursusBuat(db, "dasar", ["awal", "tengah", "akhir"]));
	const u = {};
	assert.equal(kursusMulai(u, db, "dasar").langkah, "awal");
	assert.equal(kursusLanjut(u, db).langkah, "tengah");
	assert.ok(kursusSelesai(u));
	assert.match(sertifikat("dasar"), /Sertifikat/);
	assert.ok(materiTambah(db, "aljabar", "isi"));
	assert.equal(materiCari(db, "aljabar").length, 1);
});

test("keputusan dan notulen versi", () => {
	const db = { groups: { g: {} } };
	const k = keputusanBuat(db, "g", "Rapat");
	assert.equal(keputusanUbah(keputusanAmbil(db, "g", k.id), "isi baru").versi, 2);
	assert.equal(keputusanArsip(k).arsip, true);
	const list = simpanNotulenVersi(db, "g", "notulen");
	assert.equal(list.length, 1);
	assert.ok(notulenBanding(db, "g", list[0].id, list[0].id));
});

test("proyek grup", () => {
	const db = {};
	const p = proyekBuat(db, "g", "Web", "a@s.whatsapp.net");
	const t = proyekTugas(p, "desain");
	assert.ok(proyekAmbil(p, t.id, "b@s.whatsapp.net"));
	assert.ok(proyekSelesai(p, t.id));
	assert.equal(proyekPapan(p)[2].tugas.length, 1);
	assert.equal(proyekArsip(p), true);
});

test("arsip dan cadangan", () => {
	const u = {
		catatan: { belajar: "halo dunia" },
		aset: { foto: { isi: "halo" } },
		tiket: [{ id: "ABC", judul: "halo" }],
		riwayat: [{ tanggal: "2026-01-01" }],
	};
	assert.ok(cariLintas(u, "halo").length > 0);
	assert.equal(arsipTanggal(u, "2026-01-01").length, 1);
	assert.equal(arsipRingkas(u).catatan, 1);
	assert.equal(cadanganList([cadanganBuat(u)]).length, 1);
});

test("utilitas teks lanjutan", () => {
	assert.equal(teksRapi("halo   dunia ,  ya"), "halo dunia, ya");
	assert.equal(teksBalik("abc"), "cba");
	assert.equal(teksUlang("ab", 3), "ababab");
	assert.equal(teksPotong("halo dunia", 4), "halo");
	assert.equal(teksBersih("halo\u0000dunia"), "halodunia");
	const h = keHeksa("halo");
	assert.equal(dariHeksa(h), "halo");
	assert.match(teksBanding("a", "ab"), /Panjang B: 2/);
});

test("keamanan perintah memakai hash", () => {
	const u = {};
	assert.equal(kunciPerintah(u, "transfer", "1234"), true);
	assert.equal(butuhPin(u, "transfer"), true);
	assert.equal(cocokPin(u, "transfer", "9999"), false);
	assert.equal(cocokPin(u, "transfer", "1234"), true);
	assert.equal(lepasKunci(u, "transfer"), true);
	assert.equal(logKeamanan({}, "cek").length, 1);
});

test("cabang invalid ditangani", () => {
	assert.equal(aturanBuat({}, "g", "", "x", "y"), null);
	assert.equal(aturanBuat({ aturan: { g: { a: {} } } }, "g", "a", "x", "y"), null);
	assert.equal(aturanAmbil({}, "g", "x"), null);
	assert.equal(aturanHapus({}, "g", "x"), false);
	assert.equal(aturanMatikan({}, "g", "x", false), null);
	assert.equal(aturanUji({}, "g", "x"), null);
	assert.equal(filterTambah({}, "g", ""), null);
	assert.equal(filterHapus({}, "g", "x"), false);
	assert.equal(tambahPoin({}, 0, "x"), null);
	assert.deepEqual(papanPoin({}), []);
	assert.equal(hadiahTambah({}, "x", 0), null);
	assert.equal(hadiahTukar({}, {}, "x"), null);
	assert.equal(tokoBuka({}, "g", ""), null);
	assert.equal(tokoTambah(null, "x", 1), false);
	assert.equal(tokoBeli(null, {}, "x"), null);
	assert.equal(lelangTawar(null, "a", 1), false);
	assert.equal(lelangTutup(null), null);
	assert.equal(reputasiBeri({}, "a", "x", 9), null);
	assert.deepEqual(papanReputasi({}), []);
	assert.equal(tepercayaTambah({}, null), null);
	assert.equal(tepercayaHapus({}, "x"), false);
	assert.equal(kursusBuat({}, "x", []), null);
	assert.equal(kursusMulai({}, {}, "x"), null);
	assert.equal(kursusLanjut({}, {}), null);
	assert.equal(kursusSelesai({}), null);
	assert.ok(materiTambah({}, "", "x") === null);
	assert.deepEqual(materiCari({}, "x"), []);
	assert.equal(keputusanAmbil({}, "g", "x"), null);
	assert.equal(keputusanUbah(null, "x"), null);
	assert.equal(keputusanArsip(null), null);
	assert.equal(notulenBanding({}, "g", "a", "b"), null);
	assert.equal(proyekBuat({}, "g", "", "a"), null);
	assert.equal(proyekTugas(null, "x"), null);
	assert.equal(proyekAmbil(null, "x", "a"), null);
	assert.equal(proyekSelesai(null, "x"), null);
	assert.deepEqual(proyekPapan(null), []);
	assert.equal(proyekArsip(null), false);
	assert.deepEqual(cariLintas({}, "x"), []);
	assert.deepEqual(arsipTanggal({}, "x"), []);
	assert.equal(teksUlang("a", 0), null);
	assert.equal(teksPotong("a", 0), null);
	assert.equal(dariHeksa("zz"), null);
	assert.equal(kunciPerintah({}, "x", "abc"), false);
	assert.equal(kunciPerintah({}, "x", "1234"), true);
	assert.equal(cocokPin({}, "x", "1234"), true);
	assert.equal(lepasKunci({}, "x"), false);
	assert.equal(paketBuat({}, ""), null);
	assert.equal(paketTambah({}, "x", "y"), null);
	assert.equal(paketHapus({}, "x"), false);
	assert.deepEqual(penggunaAktif({}), []);
	assert.deepEqual(grupAktif({}), []);
	assert.deepEqual(daftarCooldown({}), []);
	assert.deepEqual(daftarAkses({}), []);
});

test("media tambahan dan owner", () => {
	const u = {};
	assert.ok(paketBuat(u, "lucu"));
	assert.ok(paketTambah(u, "lucu", "stiker1"));
	assert.equal(paketHapus(u, "lucu"), true);
	assert.match(wallpaperTeks("halo"), /WALLPAPER/);
	assert.match(kartuPos("Ani", "hai"), /Ani/);
	const db = { users: { a: { poin: 5 } }, set: { "g@g.us": {} }, hit: {}, cooldowns: { rumus: 5 }, access: { rumus: "free" } };
	assert.equal(penggunaAktif(db).length, 1);
	assert.equal(grupAktif(db).length, 1);
	assert.equal(daftarCooldown(db).length, 1);
	assert.equal(daftarAkses(db).length, 1);
	assert.ok(rollbackInfo("v14.0.0", db).tag);
	assert.ok(alasanBlacklist(db, "1", "spam")["1"]);
});
