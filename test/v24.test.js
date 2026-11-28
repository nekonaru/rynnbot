import { test } from "node:test";
import assert from "node:assert/strict";
import * as indeks from "../lib/v24/indeks.js";
import { daftarCommandV2, jumlahCase } from "../lib/command-registry.js";
import { bangunIndeksMenu } from "../lib/menu-builder.js";

const { penjadwal, event, aturan, workflow, templat, orkestrasi } = indeks;

test("penjadwal mengelola tugas internal", () => {
	const db = {};
	assert.equal(penjadwal.daftarTugas(db).length, 4);
	assert.equal(penjadwal.jedaTugas(db, "sweeper-state", true).jeda, true);
	assert.equal(penjadwal.ambilTugas(db, "sweeper-state").jeda, true);
	assert.equal(penjadwal.jedaTugas(db, "sweeper-state", false).jeda, false);
	assert.equal(penjadwal.aktifTugas(db, "cleanup-temp", false).aktif, false);
	assert.equal(penjadwal.aktifTugas(db, "cleanup-temp", true).aktif, true);
	assert.equal(penjadwal.catatJalan(db, "tidak-ada"), null);
	const t = penjadwal.catatJalan(db, "rotasi-backup", false);
	assert.equal(t.jalan, 1);
	assert.equal(penjadwal.tugasGagal(db).length, 1);
	for (let i = 0; i < 30; i++) penjadwal.catatJalan(db, "rotasi-backup", true);
	assert.equal(penjadwal.riwayatTugas(db, "rotasi-backup").length, 10);
});

test("event memakai daftar tertutup dan mode kering", () => {
	const db = {};
	assert.equal(event.daftarEvent().includes("user_baru"), true);
	assert.equal(event.daftarAksi().includes("eval"), false);
	assert.equal(event.pasang(db, "user_baru", "eval"), null);
	const a = event.pasang(db, "user_baru", "balas_teks", "halo");
	assert.ok(a?.id);
	assert.equal(event.lihat(db, "user_baru").length, 1);
	const kering = event.jalankan(db, "user_baru", true);
	assert.equal(kering[0].kering, true);
	assert.equal(event.riwayat(db).length, 0);
	event.jalankan(db, "user_baru", false);
	assert.equal(event.riwayat(db).length, 1);
	assert.equal(event.setAktif(db, a.id, false).aktif, false);
	assert.equal(event.jalankan(db, "user_baru", true).length, 0);
	assert.equal(event.lepas(db, a.id), true);
});

test("aturan menolak operator dan aksi asing", () => {
	const db = {};
	assert.ok(aturan.buat(db, "Sambut"));
	assert.equal(aturan.buat(db, "sambut"), null);
	assert.equal(aturan.aturSyarat(db, "sambut", "peristiwa", "eval", "user_baru"), null);
	assert.ok(aturan.aturSyarat(db, "sambut", "peristiwa", "sama", "user_baru"));
	assert.equal(aturan.aturAksi(db, "sambut", "eval", "x"), null);
	assert.ok(aturan.aturAksi(db, "sambut", "balas_teks", "halo"));
	assert.equal(aturan.validasi(db, "sambut").lengkap, true);
	assert.equal(aturan.setAktif(db, "sambut", true).aktif, true);
	assert.equal(aturan.uji(db, "sambut", { peristiwa: "user_baru" }).cocok, true);
	assert.equal(aturan.uji(db, "sambut", { peristiwa: "lain" }).cocok, false);
	assert.ok(aturan.aturSyarat(db, "sambut", "skor", "lebih", "10"));
	assert.equal(aturan.uji(db, "sambut", { skor: "12" }).cocok, true);
	assert.equal(aturan.daftar(db).length, 1);
	assert.equal(aturan.hapus(db, "sambut"), true);
});

test("workflow menjaga urutan langkah", () => {
	const db = {};
	assert.ok(workflow.buat(db, "Rutin"));
	assert.equal(workflow.tambahLangkah(db, "rutin", "eval"), null);
	workflow.tambahLangkah(db, "rutin", "catat_log", "satu");
	workflow.tambahLangkah(db, "rutin", "balas_teks", "dua");
	assert.equal(workflow.urutLangkah(db, "rutin", "1 1"), null);
	assert.equal(workflow.urutLangkah(db, "rutin", "2 1")[0].nilai, "dua");
	const kering = workflow.jalankan(db, "rutin", true);
	assert.equal(kering[0].kering, true);
	assert.equal(workflow.status(db, "rutin").posisi, 0);
	workflow.jalankan(db, "rutin", false);
	assert.equal(workflow.status(db, "rutin").posisi, 2);
	assert.equal(workflow.daftar(db).length, 1);
	assert.equal(workflow.hapus(db, "rutin"), true);
});

test("templat membuat aturan yang valid", () => {
	const db = {};
	assert.ok(templat.daftarTemplat(db).length >= 4);
	const a = templat.pakaiTemplat(db, "cleanup-state");
	assert.ok(a);
	assert.equal(aturan.validasi(db, a.nama).lengkap, true);
	assert.ok(templat.simpanTemplat(db, a.nama, "buatan"));
	assert.ok(templat.ambilTemplat(db, "buatan"));
	assert.equal(templat.hapusTemplat(db, "buatan"), true);
});

test("orkestrasi membaca manifest dan registry", async () => {
	const semua = orkestrasi.daftarModul();
	assert.ok(semua.length >= 11);
	assert.equal(semua.every((m) => m.ada), true);
	const s = orkestrasi.statusModul();
	assert.equal(s.sehat, s.total);
	assert.equal(orkestrasi.ambilModul("penjadwal").berkas, "lib/v24/penjadwal.js");
	assert.equal(orkestrasi.ambilModul("penjadwal").jumlahPerintah, 10);
	assert.equal(orkestrasi.ambilModul("orkestrasi").jumlahPerintah, 6);
	assert.equal(orkestrasi.urutanModul().length, semua.length);
	assert.ok(orkestrasi.ketergantungan().some((x) => x.includes("registry")));
	assert.ok(orkestrasi.ringkasModul().every((x) => x.startsWith("- ")));
	const uji = await orkestrasi.ujiModul("aturan");
	assert.equal(uji.sehat, true);
	assert.ok(uji.ekspor > 0);
});

test("indeks otomasi menggabungkan seluruh subsystem", () => {
	const db = {};
	const r = indeks.ringkasan(db);
	assert.equal(r.tugas, 4);
	assert.equal(r.templat, 4);
	assert.equal(indeks.batas().aturan, 30);
	assert.equal(indeks.izin().includes("jalankan_tugas"), true);
	assert.equal(indeks.validasi(db).masalah.length, 0);
	const a = templat.pakaiTemplat(db, "cleanup-state");
	assert.equal(indeks.validasi(db).masalah.length, 0);
	assert.equal(indeks.kering(db).jumlah >= 0, true);
	for (let i = 0; i < 120; i++) indeks.catatAudit(db, "uji", String(i));
	assert.equal(indeks.audit(db).length, 20);
	assert.equal(db.otomasiAudit.length, 100);
	const h = indeks.hentikanSemua(db);
	assert.equal(h.tugas, 4);
	assert.equal(aturan.ambil(db, a.nama).aktif, false);
});

test("batas jumlah aturan workflow dan templat ditegakkan", () => {
	const db = {};
	for (let i = 0; i < 35; i++) aturan.buat(db, "aturan-" + i);
	assert.equal(Object.keys(db.aturanOtomasi).length, 30);
	assert.equal(aturan.daftar(db).length, 30);
	assert.equal(aturan.buat(db, "lebih"), null);
	for (let i = 0; i < 35; i++) workflow.buat(db, "workflow-" + i);
	assert.equal(workflow.daftar(db).length, 30);
	assert.equal(templat.simpanTemplat(db, "tidak-ada", "cleanup-state"), null);
	aturan.hapus(db, "aturan-0");
	const a = aturan.buat(db, "sumber-templat");
	aturan.aturSyarat(db, a.nama, "peristiwa", "sama", "pesan");
	aturan.aturAksi(db, a.nama, "catat_log", "satu");
	assert.equal(templat.simpanTemplat(db, a.nama, "cleanup-state"), null);
	assert.ok(templat.simpanTemplat(db, a.nama, "buatan"));
	assert.equal(templat.simpanTemplat(db, a.nama, "buatan"), null);
	assert.equal(templat.hapusTemplat(db, "cleanup-state"), false);
	assert.ok(templat.hapusTemplat(db, "buatan"));
});

test("eksekutor otomasi mencatat aksi nyata", () => {
	const db = {};
	event.pasang(db, "user_baru", "catat_log", "sambut");
	assert.equal(indeks.jalankanEventNyata(db, "user_baru").length, 1);
	assert.equal(db.eventRiwayat.length, 1);
	assert.equal(db.otomasiLog.length, 1);
	const a = aturan.buat(db, "tanda");
	aturan.aturSyarat(db, "tanda", "peristiwa", "sama", "pesan");
	aturan.aturAksi(db, "tanda", "tandai_user", "ditandai");
	assert.equal(indeks.evaluasiAturanNyata(db, { peristiwa: "pesan", sender: "1@s.whatsapp.net" }).length, 0);
	aturan.setAktif(db, "tanda", true);
	assert.equal(indeks.evaluasiAturanNyata(db, { peristiwa: "pesan", sender: "1@s.whatsapp.net" }).length, 1);
	assert.equal(db.users["1@s.whatsapp.net"].tandaOtomasi, true);
});

test("perintah v24 terdaftar sebagai owner", () => {
	const daftar = daftarCommandV2();
	const nama = "tugasdaftar tugasinfo tugasstatus tugasjeda tugaslanjut tugasjalankan tugasnonaktif tugasaktifkan tugasriwayat tugasgagal eventlist eventpasang eventlihat eventlepas eventmatikan eventhidupkan eventuji eventriwayat aturanbaru aturanketika aturanmaka aturanuji aturanaktif aturanlist aturandetail aturanhapus workflowbaru workflowlangkah workflowurut workflowjalankan workflowuji workflowstatus workflowlist workflowhapus templatlist templatpakai templatsimpan templatlihat templathapus otomasivalidasi otomasikering otomasibatas otomasiizin otomasiaudit otomasistop orkestrasistatus orkestrasimodul orkestrasiinfo orkestrasiuji orkestrasiuru orkestrasiketergantungan".split(/\s+/);
	const baru = nama.map((c) => daftar.find((e) => e.command === c));
	assert.equal(baru.filter(Boolean).length, 51);
	assert.equal(baru.every((e) => e?.role === "owner" && e?.kategori === "OWNER"), true);
	assert.equal(jumlahCase(), 1237);
	assert.match(bangunIndeksMenu(), /owner/i);
});
