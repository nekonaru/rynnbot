import { test } from "node:test";
import assert from "node:assert/strict";
import { daftarJenis, daftarMakanan, daftarObat, adopsi, gantiNama, beriMakan, minum, main, latih, istirahat, mandi, obat, beliBarang, evolusi, statusPet, papanPet, lepasPet } from "../lib/v22/pet.js";
import { daftarBenih, daftarHasil, buatKebun, beliBenih, tanam, rawat, cekHama, panen, jualHasil, olah, perluas, ternak, panenTernak, statusKebun, papanKebun, bongkar } from "../lib/v22/kebun.js";
import { daftarBidang, daftarKeahlian, pilihBidang, ambilTugas, kerjakan, lembur, ambilGaji, belajar, sertifikat, promosi, pindahBidang, statusKarir, papanKarir, cuti, pensiun } from "../lib/v22/karir.js";
import { buat, ambil, isi, aturJenis, aturTarget, terbitkan, daftarAktif, sematkan, tutup, inbox, bacaInbox, hapusInbox, bersihInbox, belumDibaca, simpanTemplat, ambilTemplat, ringkasPengumuman } from "../lib/v22/pengumuman.js";

test("hewan peliharaan dari adopsi sampai evolusi", () => {
	const u = { money: 100 };
	assert.ok(daftarJenis().includes("kucing"));
	assert.ok(daftarMakanan().length > 0 && daftarObat().length > 0);
	assert.ok(adopsi(u, "kucing"));
	assert.ok(gantiNama(u, "Mimi"));
	assert.equal(beliBarang(u, "wortel"), 8);
	assert.ok(beriMakan(u, "wortel"));
	assert.ok(minum(u));
	assert.ok(main(u));
	assert.ok(latih(u));
	assert.ok(istirahat(u));
	assert.ok(mandi(u));
	assert.equal(beliBarang(u, "vitamin"), 10);
	assert.ok(obat(u, "vitamin"));
	u.pet.level = 5;
	assert.ok(evolusi(u));
	assert.match(statusPet(u.pet), /Mimi/);
	assert.equal(papanPet({ users: { a: u } }).length, 1);
	assert.ok(lepasPet(u));
});

test("kebun dari tanam sampai panen dan jual", () => {
	const u = { money: 200 };
	assert.ok(daftarBenih().length && daftarHasil().length);
	assert.ok(buatKebun(u, "Kebun"));
	assert.ok(beliBenih(u, "cabai", 2));
	assert.ok(tanam(u, "cabai", 1));
	for (let i = 0; i < 7; i++) rawat(u, 1, "siram");
	assert.equal(panen(u, 1), "cabai");
	assert.ok(jualHasil(u, "cabai", 1) > 0);
	assert.ok(beliBenih(u, "cabai", 3));
	assert.ok(tanam(u, "cabai", 2));
	for (let i = 0; i < 7; i++) rawat(u, 2, "siram");
	panen(u, 2);
	assert.ok(beliBenih(u, "cabai", 1));
	assert.ok(tanam(u, "cabai", 2));
	for (let i = 0; i < 7; i++) rawat(u, 2, "siram");
	panen(u, 2);
	assert.equal(olah(u, "cabai"), "saus");
	assert.ok(perluas(u));
	assert.ok(ternak(u, "ayam"));
	assert.ok(panenTernak(u).includes("telur"));
	assert.match(statusKebun(u.kebun), /Kebun/);
	assert.equal(papanKebun({ users: { a: u } }).length, 1);
	assert.ok(cekHama(u, 1) === null || typeof cekHama(u, 1).ada === "boolean");
	assert.ok(bongkar(u));
});

test("karier dari bidang sampai promosi", () => {
	const u = {};
	assert.ok(daftarBidang().length && daftarKeahlian().length);
	assert.ok(pilihBidang(u, "teknologi"));
	const t = ambilTugas(u);
	assert.ok(kerjakan(u, t.id));
	assert.ok(lembur(u) > 0);
	assert.ok(ambilGaji(u) > 0);
	assert.ok(belajar(u, "analisis"));
	assert.equal(belajar(u, "analisis"), 2);
	assert.equal(belajar(u, "analisis"), 3);
	assert.equal(sertifikat(u, "analisis"), "analisis");
	u.karir.kinerja = 20;
	assert.equal(promosi(u), "staf");
	assert.ok(pindahBidang(u, "pendidikan"));
	assert.match(statusKarir(u.karir), /pendidikan/);
	u.karir.kinerja = 5;
	assert.equal(papanKarir({ users: { a: u } }).length, 1);
	assert.ok(cuti(u, true));
	assert.ok(pensiun(u));
});

test("pengumuman sampai kotak masuk", () => {
	const db = {};
	const p = buat(db, "Rapat");
	assert.ok(isi(db, p.id, "Isi rapat"));
	assert.ok(aturJenis(db, p.id, "acara"));
	assert.ok(aturTarget(db, p.id, "semua"));
	assert.ok(sematkan(db, p.id).penting);
	const jid = "6281@s.whatsapp.net";
	db.users = { [jid]: {} };
	assert.ok(terbitkan(db, p.id, [jid]));
	assert.equal(daftarAktif(db).length, 1);
	assert.equal(inbox(db, jid).length, 1);
	assert.equal(belumDibaca(db, jid), 1);
	assert.ok(bacaInbox(db, jid, p.id));
	assert.equal(belumDibaca(db, jid), 0);
	assert.ok(simpanTemplat(db, "halo", "Halo semua"));
	assert.equal(ambilTemplat(db, "halo"), "Halo semua");
	assert.match(ringkasPengumuman(daftarAktif(db)), /Rapat/);
	assert.ok(hapusInbox(db, jid, p.id));
	assert.ok(bersihInbox(db, jid));
	assert.ok(tutup(db, p.id));
});

test("input invalid ditolak", () => {
	const u = {};
	assert.equal(adopsi(u, ""), null);
	assert.equal(buatKebun(u, "x") && buatKebun(u, "y"), null);
	assert.equal(pilihBidang(u, ""), null);
	const db = {};
	assert.equal(buat(db, "").id.length > 0, true);
	assert.equal(ambil(db, "XX"), null);
});

test("regresi review v22", () => {
	const u = { money: 100 };
	assert.ok(buatKebun(u, "K"));
	assert.equal(beliBenih(u, "cabai", -5), null);
	assert.equal(jualHasil(u, "cabai", -5), null);
	assert.equal(u.money, 100);

	assert.ok(pilihBidang(u, "teknologi"));
	assert.ok(ambilGaji(u));
	assert.equal(ambilGaji(u), null, "gaji tidak boleh diambil dua kali");

	const k = { karir: { bidang: "dagang", cuti: false } };
	assert.ok(cuti(k, true));
	assert.ok(cuti(k, false), "cuti harus bisa dibatalkan");

	const belum = { money: 50 };
	assert.equal(beliBarang(belum, "wortel"), 8);
	assert.equal(belum.pet, undefined, "beli barang tidak boleh membuat hewan");
	assert.ok(adopsi(belum, "kucing"));
	assert.ok(beriMakan(belum, "WORTEL"), "huruf besar harus diterima");

	const db = {};
	const p = buat(db, "X");
	isi(db, p.id, "isi");
	aturTarget(db, p.id, "grup", "g@g.us");
	const jid = "6281@s.whatsapp.net";
	db.users = { [jid]: {}, "6282@s.whatsapp.net": {} };
	assert.ok(terbitkan(db, p.id, [jid]));
	assert.equal(terbitkan(db, p.id, [jid]), null, "terbit ulang ditolak");
	assert.equal(inbox(db, "6282@s.whatsapp.net").length, 0, "target grup dibatasi");
});

test("cabang invalid empat pilar", () => {
	const u = {};
	assert.equal(gantiNama(u, ""), null);
	assert.equal(beriMakan(u, "x"), null);
	assert.equal(minum(u), null);
	assert.equal(main(u), null);
	assert.equal(latih(u), null);
	assert.equal(istirahat(u), null);
	assert.equal(mandi(u), null);
	assert.equal(obat(u, "x"), null);
	assert.equal(beliBarang(u, "x"), null);
	assert.equal(evolusi(u), null);
	assert.equal(statusPet(null), null);
	assert.equal(lepasPet(u), false);

	assert.equal(beliBenih(u, "x"), null);
	assert.equal(tanam(u, "x", 1), null);
	assert.equal(rawat(u, 1, "x"), null);
	assert.equal(cekHama(u, 1), null);
	assert.equal(panen(u, 1), null);
	assert.equal(jualHasil(u, "x"), null);
	assert.equal(olah(u, "x"), null);
	assert.equal(perluas(u), null);
	assert.equal(ternak(u, "x"), null);
	assert.equal(panenTernak(u), null);
	assert.equal(statusKebun(null), null);
	assert.equal(bongkar(u), false);

	assert.equal(ambilTugas(u), null);
	assert.equal(kerjakan(u, "XX"), null);
	assert.equal(lembur(u), null);
	assert.equal(ambilGaji(u), null);
	assert.equal(belajar(u, "x"), null);
	assert.equal(sertifikat(u, "x"), null);
	assert.equal(promosi(u), null);
	assert.equal(pindahBidang(u, "x"), null);
	assert.equal(statusKarir(null), null);
	assert.equal(cuti(u, true), false);
	assert.equal(pensiun(u), false);

	const p = {};
	assert.equal(isi(p, "XX", "x"), null);
	assert.equal(aturJenis(p, "XX", "x"), null);
	assert.equal(aturTarget(p, "XX", "x"), null);
	assert.equal(terbitkan(p, "XX", []), null);
	assert.equal(sematkan(p, "XX"), null);
	assert.equal(tutup(p, "XX"), false);
	assert.equal(inbox(p, "a").length, 0);
	assert.equal(bacaInbox(p, "a", "XX"), null);
	assert.equal(hapusInbox(p, "a", "XX"), false);
	assert.equal(bersihInbox(p, "a"), false);
	assert.equal(belumDibaca(p, "a"), 0);
	assert.equal(simpanTemplat(p, "", "x"), null);
	assert.equal(ambilTemplat(p, "x"), null);
	assert.equal(ringkasPengumuman([]), "(belum ada)");
});
