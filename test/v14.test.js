import { test } from "node:test";
import assert from "node:assert/strict";
import { ringkasanData, eksporData, formatEkspor, hapusDataPribadi, aturOpsi, batasData } from "../lib/v14/privasi.js";
import { tiketBuat, tiketAmbil, tiketBalas, tiketTutup, tiketMilik, faqTambah, faqCari } from "../lib/v14/tiket.js";
import { asetSimpan, asetAmbil, asetHapus, asetTag, asetCari, kontenSimpan, kontenAmbil } from "../lib/v14/aset.js";
import { siaranJadwalkan, siaranAmbil, siaranTandaiKirim, siaranHapus, siaranList, siaranRiwayat } from "../lib/v14/siaran.js";
import { laporanBulanan, trenPerintah, statistikAnggota, statistikJam, ringkasanBot, formatRingkasan } from "../lib/v14/analitik.js";
import { apresiasiTambah, apresiasiPapan, salamPersonal, ceritaLanjut, ceritaBaca, ceritaReset, rekomendasiPerintah } from "../lib/v14/sosial.js";
import { namaMerek, namaGrup, caption, hashtag, tagline, judulAlternatif, dialogPendek, suratPendek } from "../lib/v14/kreatif.js";
import { glosarium, artiPeribahasa, latihanHitung, teoriSingkat, petaRumus, hafalanCek, rangkumPelajaran } from "../lib/v14/edukasi.js";
import { portofolio, dividen, obligasi, emasSimulasi, sahamSimulasi, kursSimulasi, infoMataUang, inflasi, warisanSimulasi } from "../lib/v14/ekonomi.js";
import { timBuat, timGabung, skorTim, tebakUrutan, cocokanUrutan, kartuTaruhan, papanSkorHarian } from "../lib/v14/game.js";
import { bootInfo, stateInfo, formatBoot, backupInkremental, dbEkspor, dbImprInfo, logLevel, ketersediaan } from "../lib/v14/owner.js";

test("privasi merangkum dan menghapus data", () => {
	const u = { riwayat: ["a"], catatan: { x: "y" }, koleksi: ["k"], aiRiwayat: [{ pertanyaan: "q" }] };
	const r = ringkasanData(u);
	assert.equal(r.riwayat, 1);
	assert.match(formatEkspor(eksporData(u)), /Data Pribadi/);
	assert.equal(aturOpsi(u, "memori", true).memori, true);
	assert.equal(batasData(9999), 1000);
	hapusDataPribadi(u);
	assert.equal(ringkasanData(u).riwayat, 0);
});

test("tiket menyimpan balasan dan FAQ", () => {
	const db = {};
	const t = tiketBuat(db, "a@s.whatsapp.net", "bantuan");
	assert.equal(tiketBalas(tiketAmbil(db, t.id), "sudah dicek").balasan.length, 1);
	assert.equal(tiketTutup(tiketAmbil(db, t.id)).status, "tutup");
	assert.equal(tiketMilik(db, "a@s.whatsapp.net").length, 1);
	faqTambah(db, "apa itu Rynn", "bot WhatsApp");
	assert.equal(faqCari(db, "Rynn").length, 1);
});

test("aset dan konten menyimpan serta mencari", () => {
	const u = {};
	assert.ok(asetSimpan(u, "Judul", "Isi"));
	assert.equal(asetAmbil(u, "judul").isi, "Isi");
	assert.ok(asetTag(u, "judul", "penting"));
	assert.equal(asetCari(u, "penting").length, 1);
	assert.equal(asetHapus(u, "judul"), true);
	const db = {};
	assert.ok(kontenSimpan(db, "g", "sapa", "halo"));
	assert.equal(kontenAmbil(db, "g", "sapa"), "halo");
});

test("siaran mengelola antrean dan riwayat", () => {
	const db = {};
	const s = siaranJadwalkan(db, "g", "halo grup");
	assert.equal(siaranList(db, "g").length, 1);
	siaranTandaiKirim(siaranAmbil(db, s.id));
	assert.equal(siaranRiwayat(db, "g").length, 1);
	assert.equal(siaranHapus(db, s.id), true);
});

test("analitik merangkum metrik yang tersedia", () => {
	const hit = { totalcmd: 30, todaycmd: 5, jam07: 2, rumus: 10 };
	assert.equal(laporanBulanan(hit).entri.length > 0, true);
	assert.ok(trenPerintah(hit, { rumus: 20 }).turun.length > 0);
	assert.equal(statistikAnggota({ users: { a: {} } }, [{ id: "a" }, "b"]).filter((x) => x.aktif).length, 1);
	assert.equal(statistikJam(hit).length, 1);
	assert.match(formatRingkasan(ringkasanBot({ users: { a: {} }, set: {}, hit })), /Pengguna/);
});

test("sosial menyimpan apresiasi dan cerita", () => {
	const db = {};
	apresiasiTambah(db, "g", "a", "b", "terima kasih");
	assert.equal(apresiasiPapan(db, "g").length, 1);
	assert.match(salamPersonal("6281@s.whatsapp.net"), /6281/);
	assert.equal(ceritaLanjut(db, "g", "awal").length, 1);
	assert.equal(ceritaBaca(db, "g").length, 1);
	assert.equal(ceritaReset(db, "g"), true);
	assert.ok(rekomendasiPerintah([{ command: "rumus" }, { command: "xp" }], ["rumus"]).length > 0);
});

test("kreatif menghasilkan teks dari template", () => {
	assert.ok(namaMerek("rynn"));
	assert.ok(namaGrup("cerah"));
	assert.match(caption("halo"), /Rynn/);
	assert.equal(hashtag("belajar").length, 3);
	assert.equal(tagline("Rynn").length, 3);
	assert.equal(judulAlternatif("cerita").length, 3);
	assert.match(dialogPendek("belajar"), /A:/);
	assert.match(suratPendek("Ani", "semangat"), /Ani/);
});

test("edukasi memakai data lokal", () => {
	assert.equal(glosarium([{ kata: "apel" }], "ape").length, 1);
	assert.equal(artiPeribahasa([{ pepatah: "air beriak", arti: "banyak bicara" }], "air").length, 1);
	assert.ok(latihanHitung([{ q: "1+1" }]));
	assert.match(teoriSingkat("fpb"), /FPB/);
	assert.equal(petaRumus([{ kategori: "fisika", nama: "kecepatan" }], "fisika").length, 1);
	assert.equal(hafalanCek([{ pertanyaan: "apel" }], "apel"), true);
	assert.equal(rangkumPelajaran({ pelajaran: "isi" }, "pelajaran").length, 1);
});

test("ekonomi simulasi menghitung nilai", () => {
	assert.ok(portofolio({ money: 100, tabungan: 50 }).saldo === 100);
	assert.equal(dividen(100000, 5).hasil, 5000);
	assert.equal(obligasi(100000, 30).bunga, 9000);
	assert.equal(emasSimulasi(2).nilai, 2000000);
	assert.equal(sahamSimulasi("contoh", 2).nilai, 20000);
	assert.equal(kursSimulasi("usd", { usd: 16000 }).nilai, 16000);
	assert.equal(inflasi(100000, 10).setelah, 90909);
	assert.equal(warisanSimulasi(100000, 4).perBagian, 25000);
});

test("game lanjutan mengelola tim dan taruhan", () => {
	const db = {};
	assert.ok(timBuat(db, "g", "tim a", "a"));
	assert.ok(timGabung(db, "tim a", "b"));
	assert.equal(skorTim(db, "tim a").anggota.length, 2);
	const angka = tebakUrutan();
	assert.equal(angka.length, 4);
	assert.equal(cocokanUrutan(angka.join(""), angka), true);
	assert.ok(kartuTaruhan({ money: 1000 }, 100));
	assert.ok(papanSkorHarian({ quiz: 3 }).length > 0);
});

test("cabang invalid dan batas ditangani", () => {
	assert.equal(aturOpsi({}, "x", true).x, true);
	assert.equal(batasData(0), 50);
	assert.equal(tiketAmbil({}, "x"), null);
	assert.equal(tiketBalas(null, "x"), null);
	assert.equal(tiketTutup(null), null);
	assert.equal(asetSimpan({}, "", "x"), null);
	assert.equal(asetAmbil({}, "x"), null);
	assert.equal(asetHapus({}, "x"), false);
	assert.equal(asetTag({}, "x", "y"), null);
	assert.deepEqual(asetCari({}, "x"), []);
	assert.equal(kontenSimpan({}, "g", "", "x"), null);
	assert.equal(kontenAmbil({}, "g", "x"), null);
	assert.equal(siaranAmbil({}, "x"), null);
	assert.equal(siaranTandaiKirim(null), null);
	assert.equal(siaranHapus({}, "x"), false);
	assert.deepEqual(siaranList({}, "g"), []);
	assert.deepEqual(siaranRiwayat({}, "g"), []);
	assert.equal(laporanBulanan({}).entri.length, 0);
	assert.ok(trenPerintah({}, {}).naik.length === 0);
	assert.deepEqual(statistikJam({}), []);
	assert.ok(rekomendasiPerintah([], []).length === 0);
	assert.equal(ceritaLanjut({}, "g", ""), null);
	assert.equal(ceritaReset({}, "g"), true);
	assert.equal(glosarium([], "x").length, 0);
	assert.equal(artiPeribahasa([], "x").length, 0);
	assert.equal(latihanHitung([]), null);
	assert.match(teoriSingkat("x"), /tidak ditemukan/);
	assert.deepEqual(petaRumus([], "x"), []);
	assert.equal(hafalanCek([], "x"), false);
	assert.deepEqual(rangkumPelajaran({}, "x"), []);
	assert.equal(dividen(-1), null);
	assert.equal(obligasi(0, 0), null);
	assert.equal(emasSimulasi(-1), null);
	assert.equal(sahamSimulasi("x", 0), null);
	assert.equal(kursSimulasi("x", {}), null);
	assert.equal(inflasi(-1, -1), null);
	assert.equal(warisanSimulasi(0, 0), null);
	assert.equal(timBuat({}, "g", "", "a"), null);
	assert.equal(timGabung({}, "x", "a"), null);
	assert.equal(skorTim({}, "x"), null);
	assert.equal(cocokanUrutan("1234", [1, 2, 3, 4]), true);
	assert.equal(cocokanUrutan("9999", "12"), false);
	assert.equal(kartuTaruhan({ money: 0 }, 1), null);
	assert.deepEqual(papanSkorHarian({}), []);
	assert.equal(stateInfo(5).jumlah, 0);
	assert.equal(logLevel("x"), null);
});

test("perbaikan review: validasi, total, privasi, dan mata uang", () => {
	assert.equal(kartuTaruhan({ money: 100 }, NaN), null);
	const hit = {};
	for (let i = 1; i <= 20; i++) hit["rumus" + i] = 1;
	assert.equal(laporanBulanan(hit).total, 20);
	const u = { aset: { a: {} }, flashcard: [1], rekening: { b: 2 }, investasi: { pokok: 1 }, emasGram: 1, sahamLot: 1 };
	const e = eksporData(u);
	assert.equal(Object.keys(e.aset).length, 1);
	assert.equal(e.flashcard.length, 1);
	hapusDataPribadi(u);
	assert.equal(u.aset, undefined);
	const m = infoMataUang("USD", [["USD", "Dolar", "$", "Amerika"]]);
	assert.equal(m.nama, "Dolar");
});

test("owner menghasilkan ringkasan tanpa secret", () => {
	assert.ok(bootInfo().node);
	assert.match(formatBoot(bootInfo()), /Boot/);
	assert.equal(stateInfo(new Map([["a", 1]])).jumlah, 1);
	assert.equal(backupInkremental({ users: {} }).user, 0);
	assert.equal(dbEkspor({ users: {}, set: {} }).user, 0);
	assert.ok(dbImprInfo("x", { users: {} }).berkas);
	assert.equal(logLevel("debug"), "debug");
	assert.equal(logLevel("x"), null);
	assert.ok(ketersediaan({}).database);
});
