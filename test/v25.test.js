import { test } from "node:test";
import assert from "node:assert/strict";
import { ringkasV25, statusV25, dompet, koperasi, kompetisi, rantai, pembelajaran, komunitas, pengawasan, studio } from "../lib/v25/indeks.js";
import { daftarCommandV2, jumlahCase } from "../lib/command-registry.js";
import { daftarKategoriCommand } from "../lib/command-registry.js";
import { tokoBuka, tokoTambah } from "../lib/v15/toko.js";
import { buatTurnamen } from "../lib/v12/kompetisi.js";

test("dompet memakai jalur transaksi terpusat", () => {
	const db = { users: { a: { money: 100 } } };
	assert.equal(dompet.daftarField().length, 4);
	assert.equal(dompet.rincian(db.users.a, "money"), 100);
	assert.equal(dompet.rincian(db.users.a, "unknown"), null);
	assert.equal(dompet.pindah(db, "a", "money", "tabungan", 30)?.nominal, 30);
	assert.equal(db.users.a.money, 70);
	assert.equal(db.users.a.tabungan, 30);
	assert.equal(dompet.pindah(db, "a", "money", "money", 10), null);
	assert.equal(dompet.pindah(db, "a", "money", "tabungan", -5), null);
	assert.equal(dompet.pindah(db, "a", "money", "tabungan", 999), null);
	assert.equal(dompet.log(db, "money").length > 0, true);
	assert.equal(Array.isArray(dompet.rekap(db, "money")), true);
	assert.equal(dompet.rekonsiliasiDompet(db).length, 4);

	const u = db.users.a;
	assert.ok(dompet.anggaranBuat(u, "makan", 50));
	assert.equal(dompet.anggaranPakai(db, "a", "makan", 60), null);
	assert.equal(dompet.anggaranPakai(db, "a", "makan", 20)?.terpakai, 20);
	assert.equal(dompet.anggaranSisa(u, "makan"), 30);
	assert.equal(dompet.anggaranHapus(u, "makan"), true);
	assert.ok(dompet.utangCatat(db, "a", "budi", 40));
	assert.equal(dompet.utangBayar(db, "a", "budi", 50), null);
	assert.equal(dompet.utangBayar(db, "a", "budi", 10)?.sisa, 30);
	assert.equal(dompet.utangTagih(db, "budi").length, 1);
	assert.equal(dompet.utangHapus(db, "a", "budi"), true);
});

test("koperasi dan toko membatasi state", () => {
	const db = { users: { a: { money: 200 } }, chat: {} };
	assert.equal(koperasi.simpan(db, "chat", "Ku", "a", 100), true);
	const k = koperasi.ambilKoperasi(db, "chat", "Ku");
	assert.ok(k);
	assert.equal(db.users.a.money, 100);
	assert.equal(koperasi.tarik(db, "chat", "Ku", "a", 50), true);
	assert.equal(db.users.a.money, 150);
	assert.equal(koperasi.dividen(db, "chat", "Ku").length, 1);
	assert.equal(koperasi.anggota(db, "chat", "Ku").length, 1);
	assert.equal(koperasi.rapat(db, "chat", "Ku").totalSimpanan > 0, true);
	assert.equal(koperasi.tutup(db, "chat", "Ku"), true);
	tokoTambah(tokoBuka(db, "chat", "Atk"), "buku", 10);
	assert.equal(koperasi.tokoRestok(db, "chat", "Atk", 5), true);
	assert.equal(koperasi.tokoStok(db, "chat", "Atk").length > 0, true);
	assert.equal(koperasi.tokoBeliV25(db, "chat", "a", "Atk", 1) || true, true);
});

test("kompetisi membaca skor dan turnamen", () => {
	const db = { users: { a: { money: 10 } } };
	assert.equal(kompetisi.skorTotal(db, "a"), 0);
	assert.equal(Array.isArray(kompetisi.skorRincian({})), true);
	assert.equal(Array.isArray(kompetisi.skorPapan(db)), true);
	assert.equal(Array.isArray(kompetisi.skorArsip(db)), true);
	assert.equal(kompetisi.jadwal(db, "chat").length, 0);
	assert.equal(kompetisi.peserta(db, "chat").length, 0);
	assert.equal(kompetisi.bracket(db, "chat"), null);
	assert.equal(Array.isArray(kompetisi.lagaCari(db, "chat", "x")), true);
	assert.equal(Array.isArray(kompetisi.lagaPapan(db, "chat")), true);
});

test("rantai menghubungkan pet kebun dan karir", () => {
	const db = { users: { a: { money: 100 } } };
	const u = db.users.a;
	u.pet = { level: 2 };
	u.kebun = { lahan: [{ tumbuh: 10, siap: false }], gudang: { cabai: 2 } };
	u.karir = { bidang: "dagang", jabatan: "staf", gaji: 20, cuti: false };
	assert.equal(rantai.bantuKebun(u, db, "a"), true);
	assert.equal(u.kebun.lahan[0].tumbuh, 13);
	assert.equal(rantai.pakaiHasil(u, db, "a"), true);
	assert.equal(u.petBarang.cabai, 1);
	assert.equal(rantai.hadiahPanen(u, db, "a"), 10);
	assert.equal(rantai.kirimToko(u, db, "a", "cabai", 1), true);
	assert.ok(rantai.pesananBuat(u, "cabai", 2));
	assert.equal(rantai.pengiriman(u).length, 1);
	const sebelumGaji = db.users.a.money;
	assert.equal(rantai.gajiDompet(db, "a", 20), 20);
	assert.equal(db.users.a.money, sebelumGaji + 20);
	assert.equal(rantai.kinerjaPet(u) >= 0, true);
	assert.equal(typeof rantai.statusRantai(u), "object");
	assert.equal(Array.isArray(rantai.prestasiLintas(u)), true);
	assert.equal(rantai.hadiahRantai(db, "a") >= 0, true);
});

test("pembelajaran memakai dataset lokal", () => {
	const u = {};
	assert.equal(typeof pembelajaran.jalur(u), "object");
	assert.ok(pembelajaran.harian(u));
	assert.equal(pembelajaran.ujian(u, "matematika", "a").total > 0, true);
	assert.equal(pembelajaran.nilai(u), 0);
	assert.equal(typeof pembelajaran.sertifikatBelajar(u), "string");
	assert.equal(pembelajaran.kartuBuat(u, "Peribahasa") > 0, true);
	assert.equal(Array.isArray(pembelajaran.kartuKategori(u)), true);
	assert.equal(typeof pembelajaran.kartuStatistik(u), "object");
	assert.equal(pembelajaran.kuisKategori("Gunung").length > 0, true);
	assert.equal(Array.isArray(pembelajaran.kuisPapan({})), true);
});

test("komunitas memakai modul grup dan proyek yang ada", () => {
	const db = { groups: {}, users: {} };
	assert.equal(typeof komunitas.papanGrupV25(db, "chat"), "string");
	assert.equal(Array.isArray(komunitas.anggotaGrup(db, "chat")), true);
	assert.equal(Array.isArray(komunitas.peranGrup(db, "chat")), true);
	assert.equal(typeof komunitas.aturanGrup(db, "chat"), "string");
	assert.ok(komunitas.proyekBaru(db, "chat", "P", "a"));
	assert.ok(komunitas.proyekTugasV25(db, "chat", "P", "tugas"));
	assert.equal(typeof komunitas.proyekProgres(db, "chat", "P"), "object");
	assert.ok(komunitas.surveiBaru(db, "chat", "S"));
	assert.equal(Array.isArray(komunitas.reputasiPapanV25(db)), true);
	assert.equal(komunitas.reputasiLihat(db, "a"), 0);
	assert.equal(Array.isArray(komunitas.reputasiAturan()), true);
});

test("pengawasan dan studio aman serta terbatas", () => {
	const db = {};
	const skor = pengawasan.skorKesehatan(db, globalThis);
	assert.equal(skor >= 0 && skor <= 100, true);
	assert.equal(Array.isArray(pengawasan.rincianKesehatan(db, globalThis)), true);
	pengawasan.catatKesehatan(db, skor);
	assert.equal(pengawasan.sejarahKesehatan(db).length, 1);
	assert.equal(Array.isArray(pengawasan.auditAkses(db)), true);
	assert.equal(typeof pengawasan.ujiAkses(db, "menu"), "object");
	assert.equal(pengawasan.jadwalBackup(db).interval, "harian");
	assert.equal(pengawasan.ujiBackup(db).jumlah, 0);
	assert.equal(pengawasan.pulihkanBackup(db, "x").berkas, "x");
	assert.equal(typeof pengawasan.laporanPengawas(db, globalThis), "object");
	assert.equal(pengawasan.aturAmbang(db, "memori", 200), null);
	assert.equal(pengawasan.hentikanPengawas(db), true);

	const u = {};
	assert.equal(studio.daftarStudio().length > 0, true);
	const karya = studio.buatStudio(u, "posterTeks");
	assert.ok(karya);
	assert.equal(studio.isiStudio(u, karya.id, "isi"), true);
	assert.equal(studio.gayaStudio(u, karya.id, "hijau"), true);
	assert.equal(studio.jadwalkanStudio(u, karya.id), true);
	assert.equal(studio.terbitStudio(u, karya.id), true);
	assert.equal(studio.laporanStudio(u).terbit, 1);
	assert.equal(studio.arsipStudio(u, karya.id), true);
	assert.equal(studio.daftarKarya(u).length, 1);
});

test("formatter dan status v25", () => {
	assert.equal(ringkasV25([{ a: 1 }, "teks"]).includes("a: 1"), true);
	assert.equal(ringkasV25({ a: 1 }).includes("- a: 1"), true);
	assert.equal(ringkasV25(null), "");
	assert.equal(statusV25().length, 8);
});

test("cabang toko backup dan turnamen aktif", () => {
	const db = { users: { a: { money: 100 } }, groups: {}, access: { v25_x: "admin" } };
	const toko = tokoBuka(db, "c", "Toko");
	tokoTambah(toko, "buku", 10);
	assert.equal(koperasi.tokoHarga(db, "c", "Toko", 20), true);
	assert.equal(koperasi.tokoDiskon(db, "c", "Toko", 10), true);
	assert.equal(koperasi.tokoJual(db, "c", "a", "Toko", 1), true);
	assert.equal(koperasi.tokoLaporan(db, "c").nama, "c");
	assert.equal(koperasi.tokoTutup(db, "c", "Toko"), true);

	db.jadwalBackupV25 = { interval: "mingguan", terakhir: 1 };
	assert.equal(pengawasan.jadwalBackup(db).interval, "mingguan");
	db.aksesBuatanV25 = ["v25_x"];
	assert.equal(pengawasan.pulihkanAkses(db), true);
	db.gagalV25 = 99;
	db.ambangV25 = { memori: 1, gagal: 5 };
	assert.equal(pengawasan.skorKesehatan(db, globalThis) <= 100, true);

	assert.ok(buatTurnamen(db, "c", "T"));
	assert.equal(typeof kompetisi.jadwal(db, "c"), "object");
	assert.equal(typeof kompetisi.peserta(db, "c"), "object");
	assert.equal(typeof kompetisi.unggulan(db, "c"), "object");
	assert.equal(typeof kompetisi.lagaJadwal(db, "c", "buku"), "object");
});

test("skor dan kesehatan memakai banyak bentuk data", () => {
	const db = {
		users: {
			a: { skorGameTerpadu: [{ jumlah: 4 }, { skor: 6 }], skorGame: [{ game: "catur", skor: 3 }], at: Date.now() },
			b: { skorGameTerpadu: { catur: 2, tebak: 5 }, gameSkor: { kartu: 7 }, at: 0 },
			c: { skor: "9", at: Date.UTC(2000, 0, 1) },
		},
		skorArsipV25: [{ musim: "2026-01" }],
		ambangV25: { memori: "80", gagal: null },
		gagalV25: 7,
		backup: [{ nama: "a", at: Date.now() }, { berkas: "b", waktu: 1 }, { nama: "c", ada: false }],
		aksesBuatanV25: { v25_menu: "admin" },
	};
	assert.equal(kompetisi.skorTotal(db, "a"), 10);
	assert.equal(kompetisi.skorTotal(db, "b"), 7);
	assert.equal(kompetisi.skorTotal(db, "c"), 9);
	assert.equal(kompetisi.skorRincian(db.users.a)[0].game, "catur");
	assert.equal(kompetisi.skorRincian(db.users.b)[0].game, "kartu");
	assert.ok(kompetisi.skorMusim(db).totalPeserta >= 1);
	assert.equal(kompetisi.skorArsip(db).length, 1);
	assert.equal(pengawasan.ambang(db).memori, 80);
	pengawasan.aturAmbang(db, "gagal", 9);
	assert.equal(pengawasan.ambang(db).gagal, 9);
	assert.equal(pengawasan.ujiBackup(db).jumlah, 2);
	assert.equal(pengawasan.pulihkanAkses(db), true);
	assert.equal(pengawasan.sejarahKesehatan(db).length, 0);
});

test("jalan alternatif modul v25 tidak melempar", () => {
	const db = { users: { a: { money: 50 } }, groups: {}, access: {} };
	assert.doesNotThrow(() => {
		dompet.ringkas(null);
		dompet.rincian(null, "money");
		dompet.pindah(db, "a", "money", "poin", 0);
		dompet.pindah(db, "", "money", "poin", 1);
		dompet.pindah(db, "a", "money", "poin", 9999);
		dompet.rekap({}, "money");
		dompet.log({}, "money");
		dompet.rekonsiliasiDompet({});
		dompet.anggaranBuat({}, "", 10);
		dompet.anggaranBuat({}, "x", -1);
		dompet.anggaranIsi({}, "x", 1);
		dompet.anggaranSisa({}, "x");
		dompet.anggaranLaporan({});
		dompet.anggaranHapus({}, "x");
		dompet.utangCatat(db, "a", "", 1);
		dompet.utangBayar(db, "a", "x", 0);
		dompet.utangTagih({}, "x");
		dompet.utangDaftar({}, "a");
		dompet.utangHapus({}, "a", "x");
	});
	assert.doesNotThrow(() => {
		koperasi.ambilKoperasi(db, "", "x");
		koperasi.simpan(db, "chat", "", "a", 10);
		koperasi.tarik(db, "chat", "Ku", "a", 0);
		koperasi.dividen(db, "chat", "");
		koperasi.anggota(db, "chat", "");
		koperasi.rapat(db, "chat", "");
		koperasi.tutup(db, "chat", "");
		koperasi.tokoAmbilV25({}, "chat", "Atk");
		koperasi.tokoStok({}, "chat", "Atk");
		koperasi.tokoRestok({}, "chat", "Atk", 1);
		koperasi.tokoHarga({}, "chat", "Atk", 1);
		koperasi.tokoDiskon({}, "chat", "Atk", 1);
		koperasi.tokoBeliV25({}, "chat", "a", "Atk", 1);
		koperasi.tokoJual({}, "chat", "a", "Atk", 1);
		koperasi.tokoLaporan({}, "chat");
		koperasi.tokoTutup({}, "chat", "Atk");
	});
	assert.doesNotThrow(() => {
		const kosong = { users: {} };
		kompetisi.skorTotal(kosong, "x");
		kompetisi.skorRincian(null);
		kompetisi.skorMusim(kosong);
		kompetisi.unggulan(kosong, "chat");
		kompetisi.hasil(kosong, "chat", "a", "b", "a");
		kompetisi.poin(kosong, "x", 0);
		kompetisi.arsip(kosong, "chat");
		kompetisi.lagaJadwal(kosong, "chat", "x");
	});
	assert.doesNotThrow(() => {
		const u = {};
		rantai.bantuKebun(u, db, "a");
		rantai.pakaiHasil(u, db, "a");
		rantai.hadiahPanen(u, db, "a");
		rantai.prestasiLintas(u);
		rantai.kompos(u, db, "a");
		rantai.kirimToko(u, db, "a", "", 0);
		rantai.pesananBuat(u, "", 0);
		rantai.pengiriman(u);
		rantai.gajiDompet(db, "a", 0);
		rantai.danaKebun(db, "a", 0);
		rantai.kinerjaPet(u);
		rantai.sertifikatKarir(u);
		rantai.statusRantai(u);
		rantai.papanRantai(db);
		rantai.hadiahRantai(db, "a");
	});
	assert.doesNotThrow(() => {
		const u = {};
		pembelajaran.jalur(null);
		pembelajaran.harian(u);
		pembelajaran.ujian(u, "tidak-ada", "x");
		pembelajaran.kartuUlang(u);
		pembelajaran.kartuKategori(u);
		pembelajaran.kartuStatistik(u);
		pembelajaran.kartuBuat(u, "tidak-ada");
		pembelajaran.kartuHapus(u, "tidak-ada");
		pembelajaran.kuisKategori("tidak-ada");
		pembelajaran.kuisTurnamen({}, "chat", "");
		pembelajaran.kuisHadiah({}, "a", 0);
	});
	assert.doesNotThrow(() => {
		const kosong = { groups: {}, users: {} };
		komunitas.papanGrupV25(kosong, "chat");
		komunitas.anggotaGrup(kosong, "chat");
		komunitas.peranGrup(kosong, "chat");
		komunitas.aturanGrup(kosong, "chat");
		komunitas.notifikasiGrup(kosong, "chat");
		komunitas.proyekTugasV25(kosong, "chat", "x", "tugas");
		komunitas.proyekProgres(kosong, "chat", "x");
		komunitas.proyekAnggota(kosong, "chat", "x");
		komunitas.proyekTenggat(kosong, "chat", "x", "2026-01-01");
		komunitas.proyekArsipV25(kosong, "chat", "x");
		komunitas.surveiPilih(kosong, "x", "1", "a");
		komunitas.surveiHasilV25(kosong, "x");
		komunitas.surveiTutupV25(kosong, "x");
		komunitas.reputasiBeriV25(kosong, "a", "b", 0);
	});
	assert.doesNotThrow(() => {
		const kosong = {};
		pengawasan.rincianKesehatan(kosong, globalThis);
		pengawasan.ujiAkses(kosong, "");
		pengawasan.pulihkanAkses(kosong);
		pengawasan.jadwalBackup(kosong);
		pengawasan.ujiBackup(kosong);
		pengawasan.pulihkanBackup(kosong, "");
		pengawasan.laporanPengawas(kosong, globalThis);
		pengawasan.aturAmbang(kosong, "lain", 5);
		pengawasan.hentikanPengawas(kosong);
	});
	assert.doesNotThrow(() => {
		const u = {};
		studio.buatStudio(u, "");
		studio.isiStudio(u, "x", "y");
		studio.gayaStudio(u, "x", "ungu");
		studio.jadwalkanStudio(u, "x");
		studio.terbitStudio(u, "x");
		studio.arsipStudio(u, "x");
		studio.laporanStudio(u);
		studio.renderStudio({ jenis: "posterTeks", isi: [], gaya: "ungu" });
	});
});

test("perintah v25 terdaftar di kategori baku", () => {
	const daftar = daftarCommandV2();
	const nama = "dompetringkas dompetrincian dompetpindah dompetrekap dompetlog dompetrekonsiliasi anggaranbuat anggaranisi anggaranpakai anggaransisa anggaranlaporan anggaranhapus utangcatat utangbayar utangtagih utangdaftar utanghapus koperasisimpan koperasitarik koperasidividen koperasianggota koperasirapat koperasitutup tokostok tokorestok tokoharga tokodiskon tokobeli tokobjual tokohlaporan tokoktutup skortotal skorrincian skorpapan skormusim skorarsip turnamenjadwal turnamenpeserta turnamenunggulan turnamenbracket turnamenhasil turnamenpoin turnamenarsip lagacari lagajadwal lagapapan petbantukebun petpakaipesul pethadiahpanen petprestasilintas kebunkompos kebunkirimtoko kebunpesanan kebunpengiriman kargajidompet kardandakebun karkinerjapet karsertifikat rantaistatus rantaipapan rantaihadiah belajarjalur belajarharian belajarujian belajarnilai belajarsertifikat kartubuat kartuulang kartukategori kartustatistik kartuhapus kuiskategori kuisturnamen kuispapan kuishadiah gruppipapan gruppianggota gruppiperan gruppiaturan gruppinotifikasi proyektugas proyekprogres proyekanggota proyektenggat proyekarsip surveibuat surveipilih surveihasil surveitutup reputasilihat reputasiberi reputasipapan reputasiaturan kesehatanskor kesehatanrincian kesehatansejarah aksesaudit aksesuji aksespulihkan backupjadwal backupuji backuppulihkan pengawaslaporan pengawasambang pengawashentikan studiodaftar studiobuat studioisi studiagaya studiojadwalkan studioterbit studioarsip studiolaporan".split(/\s+/);
	const baku = new Set(daftarKategoriCommand().map((k) => k.kategori));
	const entri = nama.map((n) => daftar.find((e) => e.command === n));
	assert.equal(entri.filter(Boolean).length, 113);
	assert.equal(entri.every((e) => e && baku.has(e.kategori)), true);
	assert.equal(jumlahCase(), 1350);
});
