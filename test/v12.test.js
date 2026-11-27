import { test } from "node:test";
import assert from "node:assert/strict";
import { WARNA, UKURAN, BATAS } from "../lib/design-token.js";
import { potongBalasan, bangunRespons, formatHalaman, formatKosong, formatKonfirmasi, formatError } from "../lib/respons.js";
import { ketikDulu, bilahProgres, tahapProgres, teksStikerAnimasi } from "../lib/animasi.js";
import { buatTurnamen, tambahPeserta, catatHasil, tetapkanJuara, arsipTurnamen, ligaBuat, ligaAmbil, ligaTransfer, ligaJadwal, klasemen, ingatPertandingan, formatTurnamen, formatKlasemen } from "../lib/v12/kompetisi.js";
import { bagiAcak, timSeimbang, beriNama, rotasiTim, formatGrup } from "../lib/v12/kelompok.js";
import { investasiHarian, grafikTabungan, jadwalUtang, riwayatDompet, pasarSimulasi, formatPasar, sisaAnggaran } from "../lib/v12/ekonomi.js";
import { kartuHarian, kuisAdaptif, petaMateri, formatPeta, rangkumCatatan } from "../lib/v12/belajar.js";
import { agendaMinggu, rekapAbsen, hasilPoll, ringkasRapat, tugasTambah, tugasSelesai, formatTugas, skorModerasi } from "../lib/v12/produktivitas.js";
import { kartuWarna, posterTeks, kartuUcapan, komikPendek, galeri, stikerAnimasiSpec } from "../lib/v12/media.js";
import { promptGaya, aiRiwayat, bandingkan, kuotaAi } from "../lib/v12/ai.js";
import { health, formatHealth, metrik, logRingkas, modeHemat, cacheInfo } from "../lib/v12/owner.js";
import { bukaPanel, tutupPanel, panelAktif } from "../src/dashboard/panel.js";

test("token desain mengikuti identitas Rynn", () => {
	assert.equal(WARNA.ungu, "#6D5AE6");
	assert.equal(WARNA.oranye, "#FF9E5E");
	assert.equal(UKURAN.perHalaman, 8);
	assert.ok(BATAS.konfirmasiMs > 0);
});

test("renderer memotong dan menyusun balasan", () => {
	const potongan = potongBalasan("a".repeat(3000));
	assert.ok(potongan.length > 1);
	assert.match(potongan[0], /\(\d\/\d\)/);
	const teks = bangunRespons({ judul: "Judul", isi: "Isi", catatan: "Catatan" });
	assert.match(teks, /\*Judul\*/);
	assert.match(teks, /_Catatan_/);
	assert.match(formatHalaman(["a", "b"], 1, 1), /1\. a/);
	assert.match(formatKosong(), /kosong/);
	assert.match(formatKonfirmasi({ token: "ABC" }), /ABC/);
	assert.match(formatError("salah", "coba lagi"), /coba lagi/);
});

test("animasi menghasilkan progress dan typing tanpa efek bila dimatikan", async () => {
	assert.match(bilahProgres(5, 10), /50%/);
	assert.match(tahapProgres(1), /33%/);
	assert.match(teksStikerAnimasi("rynn"), /rynn/);
	let dipanggil = 0;
	await ketikDulu({ sendPresenceUpdate: async () => dipanggil++ }, "chat", { aktif: false, ms: 0 });
	assert.equal(dipanggil, 0);
});

test("kompetisi menyimpan peserta, hasil, juara, dan liga", () => {
	const db = {};
	const t = buatTurnamen(db, "g", "Liga Kelas", "double", ["@a", "@b"]);
	assert.equal(t.mode, "double");
	assert.equal(t.seed.length, 2);
	assert.ok(tambahPeserta(db, "g", "@c"));
	assert.ok(catatHasil(db, "g", "c", "a"));
	tetapkanJuara(db, "g", "c");
	assert.equal(arsipTurnamen(db, "g")[0].juara, "c");
	const l = ligaBuat(db, "g", "Liga");
	l.anggota.a = ["x"];
	l.anggota.b = [];
	ligaTransfer(db, "g", "a", "b", "x");
	assert.deepEqual(l.anggota.b, ["x"]);
	ligaJadwal(db, "g", "Tim B", "19:00");
	l.skor.a = 3;
	assert.equal(klasemen(l)[0][0], "a");
	assert.ok(ingatPertandingan(db, "g", "A", "19:00").length > 0);
	assert.match(formatTurnamen(t, (x) => x), /Liga Kelas/);
	assert.match(formatKlasemen(l), /3 poin/);
});

test("kelompok membagi dan memutar tim", () => {
	const g = bagiAcak(["a", "b", "c", "d", "e", "f"], 3);
	assert.equal(g.length, 3);
	assert.equal(g.flat().length, 6);
	const t = timSeimbang(["a", "b", "c", "d"], 2);
	assert.equal(t.length, 2);
	const bernama = beriNama(g, "Tim");
	assert.equal(bernama[0].nama, "Tim 1");
	assert.ok(rotasiTim(t));
	assert.match(formatGrup(bernama), /Tim 1/);
});

test("ekonomi simulasi menghitung nilai dan grafik", () => {
	const u = { investasi: { pokok: 1000, sejak: Date.now() - 86400000 } };
	const h = investasiHarian(u);
	assert.equal(h.hari, 1);
	assert.equal(h.nilai, 1010);
	assert.match(grafikTabungan(500, 1000), /50%/);
	assert.ok(jadwalUtang(100, "besok").dicatat);
	assert.equal(riwayatDompet({ uangLog: ["a", "b"] }).length, 2);
	assert.equal(formatPasar(pasarSimulasi(1)).split("\n").length, 6);
	assert.equal(sisaAnggaran({ anggaran: { a: 100 }, pengeluaran: [{ nominal: 40 }] }).sisa, 60);
});

test("belajar memilih kartu dan kuis adaptif", () => {
	const kartu = [{ pertanyaan: "a" }, { pertanyaan: "b" }];
	assert.ok(kartuHarian(kartu, 86400000));
	assert.equal(kuisAdaptif([{ q: 1 }, { q: 2 }], 6).q, 2);
	assert.equal(formatPeta(petaMateri({ a: [1, 2] })), "- a: 2 soal");
	assert.deepEqual(rangkumCatatan([{ isi: "x" }]), ["x"]);
});

test("produktivitas mengagenda dan menghitung tugas", () => {
	const sekarang = Date.now();
	const acara = [{ nama: "dekat", tanggal: new Date(sekarang + 3600000).toISOString() }];
	assert.equal(agendaMinggu(acara, sekarang).length, 1);
	assert.equal(rekapAbsen({ "g:2026-01-01": ["a", "b"] }, "2026-01-01"), 2);
	const h = hasilPoll({ pilihan: ["ya", "tidak"], vote: ["ya", "ya"] });
	assert.equal(h[0][1], 2);
	assert.ok(ringkasRapat({ notulen: ["a"] }).length > 0);
	let tugas = tugasTambah([], "belajar");
	tugas = tugasSelesai(tugas, tugas[0].id);
	assert.match(formatTugas(tugas), /\[v\]/);
	assert.ok(skorModerasi({ warning: 1, antilink: true }) >= 2);
});

test("media menghasilkan kartu dan komik", () => {
	assert.equal(kartuWarna("Biru", "#6D5AE6").nama, "Biru");
	assert.match(posterTeks("Judul", "Isi"), /Judul/);
	assert.match(kartuUcapan("Ani", "Semangat"), /Ani/);
	assert.match(komikPendek("a", "b", "c"), /3\./);
	assert.match(galeri([{ nama: "kucing" }]), /kucing/);
	assert.equal(stikerAnimasiSpec("rynn", 99).frame, 16);
});

test("AI wrapper menghasilkan prompt dan kuota", () => {
	assert.match(promptGaya("singkat", "lingkungan"), /lingkungan/);
	assert.match(aiRiwayat([{ pertanyaan: "x" }]), /x/);
	assert.match(bandingkan("a", "b"), /Versi A/);
	assert.equal(kuotaAi(45).sisa, 5);
});

test("owner menghasilkan ringkasan tanpa secret", () => {
	const h = health(global);
	assert.equal(h.status, "aktif");
	assert.match(formatHealth(h), /Health Bot/);
	assert.ok(Array.isArray(metrik({ hit: { rumus: 3 } })));
	assert.match(logRingkas([{ aksi: "backup" }]), /backup/);
	assert.equal(modeHemat(true).aktif, true);
	assert.equal(cacheInfo(new Map([["a", 1]])), 1);
});

test("panel lokal melayani health dan berkas statis", async () => {
	const info = bukaPanel({ port: 7789, db: { users: { a: {} }, hit: { rumus: 2 } } });
	assert.equal(panelAktif(), true);
	const oke = await fetch(`http://127.0.0.1:${info.port}/api/health?token=${info.token}`);
	const json = await oke.json();
	assert.equal(json.status, "aktif");
	assert.equal(json.user, 1);
	const gagal = await fetch(`http://127.0.0.1:${info.port}/api/health?token=salah`);
	assert.equal(gagal.status, 401);
	const html = await fetch(`http://127.0.0.1:${info.port}/`);
	assert.match(await html.text(), /Rynn Panel/);
	assert.equal(tutupPanel(), true);
	assert.equal(panelAktif(), false);
});
