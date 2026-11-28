import { test } from "node:test";
import assert from "node:assert/strict";
import { xpDari, progresLevel, kartuProfil, beriBadge, hapusBadge } from "../lib/v13/akun.js";
import { rekeningBuat, rekeningPindah, arisanBuat, arisanBayar, arisanRekap, skorKredit, klaimAsuransi, pajakSimulasi, grafikKategori } from "../lib/v13/ekonomi.js";
import { guildBuat, guildGabung, guildKeluar, guildPapan, rekomendasiTeman, kartuPerkenalan, statistikKomunitas } from "../lib/v13/komunitas.js";
import { sudokuBuat, sudokuIsi, formatSudoku, game2048Baru, gerak2048, kartuIngatan, tebakTokoh, riddleAi, hadiahGamePass } from "../lib/v13/game.js";
import { kosakataHarian, cariKosakata, panduanEjaan, panduanTatabahasa, pantunBuatan, puisiBuatan, cariResep, tantanganRumus } from "../lib/v13/edukasi.js";
import { targetBuat, targetTambah, formatTarget, proyekBuat, proyekTambah, proyekStatus, formatPapan, cariCatatan, beriTagCatatan } from "../lib/v13/produktivitas.js";
import { daftarAdmin, tambahAdmin, aturPeraturan, formatPeraturan, tambahDomainAman, statistikSpam, kartuGrup, aktivitasGrup } from "../lib/v13/grup.js";
import { spesifikasiStikerTeks, spesifikasiFotoProfil, kartuUndangan, posterUcapan, diagramLingkaran, tabelDua } from "../lib/v13/media.js";
import { aturMemori, hapusMemori, tambahMemori, aturPersona, personaPrompt, promptDebat, promptRangkum, promptReviewKode, promptRencana, batasAi } from "../lib/v13/ai.js";
import { relayStatus, deployStatus, verifikasiBackup, restoreDiff, sesiList, migrasiInfo, databaseInfoPenuh, logEkspor, aturRateLimit, blokirDomain, alasanMaintenance, auditEkspor } from "../lib/v13/owner.js";

test("akun menghitung XP, level, dan lencana", () => {
	const u = { skorBelajar: 8, koleksi: ["a", "b"] };
	assert.equal(xpDari(u), 10);
	const p = progresLevel(10);
	assert.equal(p.level, 2);
	assert.equal(p.sisa, 10);
	assert.match(kartuProfil(u, "free", ["pemula"]), /pemula/);
	assert.deepEqual(beriBadge(u, "pemula"), ["pemula"]);
	assert.equal(beriBadge(u, "pemula"), null);
	assert.deepEqual(hapusBadge(u, "pemula"), []);
});

test("ekonomi simulasi menghitung rekening dan arisan", () => {
	const u = { money: 1000 };
	assert.ok(rekeningBuat(u, "liburan"));
	assert.ok(rekeningPindah(u, "liburan", 300));
	assert.equal(u.money, 700);
	assert.equal(u.rekening.liburan, 300);
	const db = {};
	const a = arisanBuat(db, "g", "Kelas", 50000);
	arisanBayar(a, "a@s.whatsapp.net");
	assert.equal(arisanRekap(a, ["a@s.whatsapp.net", "b@s.whatsapp.net"])[1].bayar, 0);
	assert.ok(skorKredit({ tabungan: 50000 }) >= 60);
	assert.equal(klaimAsuransi(1000, 1500).dibayar, 1000);
	assert.equal(pajakSimulasi(100000, 10).pajak, 10000);
	assert.ok(grafikKategori([{ kategori: "makan", nominal: 10000 }]).length > 0);
});

test("guild menyimpan anggota dan rekomendasi teman", () => {
	const db = {};
	assert.ok(guildBuat(db, "Rynn", "g"));
	assert.ok(guildGabung(db, "Rynn", "a"));
	assert.equal(guildPapan(db)[0].jumlah, 1);
	assert.ok(guildKeluar(db, "Rynn", "a"));
	assert.equal(rekomendasiTeman(["a", "b"], "a")[0], "b");
	assert.match(kartuPerkenalan("Andi", "suka buku"), /Andi/);
	assert.equal(statistikKomunitas({ users: { a: {} } }, [1, 2]).pengguna, 1);
});

test("game baru menghasilkan papan dan state valid", () => {
	const p = sudokuBuat("mudah");
	assert.equal(p.length, 4);
	assert.ok(formatSudoku(p).includes("."));
	assert.ok(sudokuIsi(p, 0, 0, 3));
	const g = game2048Baru();
	const gerak = gerak2048(g, "kiri");
	assert.equal(gerak.length, 4);
	assert.equal(gerak2048(g, "salah"), null);
	assert.equal(kartuIngatan(8).length, 8);
	assert.ok(tebakTokoh());
	assert.ok(riddleAi(["a? b", "c? d"]));
	assert.equal(hadiahGamePass(7), "lencana mingguan");
});

test("edukasi memakai data dan template aman", () => {
	assert.ok(kosakataHarian(["a", "b"], 86400000));
	assert.equal(cariKosakata(["apel"], "ape")[0], "apel");
	assert.match(panduanEjaan("e"), /Ejaan/);
	assert.match(panduanTatabahasa("subjek"), /subjek/);
	assert.match(pantunBuatan("belajar"), /belajar/);
	assert.match(puisiBuatan("harapan"), /harapan/);
	assert.equal(cariResep([{ nama: "nasi", bahan: "beras" }], "beras").length, 1);
	assert.ok(tantanganRumus([{ id: 1 }]));
});

test("produktivitas mengelola target dan proyek", () => {
	const u = {};
	assert.ok(targetBuat(u, "baca", 20));
	targetTambah(u, "baca", 5);
	assert.match(formatTarget(u.target), /5\/20/);
	assert.ok(proyekBuat(u, "Web"));
	proyekTambah(u, "desain");
	const id = u.proyek.tugas[0].id;
	assert.ok(proyekStatus(u, id, "done"));
	assert.match(formatPapan(u.proyek), /DONE/);
	const catatan = { belajar: "besok baca buku" };
	assert.equal(cariCatatan(catatan, "buku").length, 1);
	assert.match(beriTagCatatan(catatan, "belajar", "penting"), /#penting/);
});

test("grup mengelola admin, peraturan, dan domain", () => {
	const db = { set: { g: {} }, groups: { g: {} } };
	global.owner = ["1@s.whatsapp.net"];
	assert.ok(daftarAdmin(db, "g", ["1@s.whatsapp.net"]).length > 0);
	assert.ok(tambahAdmin(db, "g", "2@s.whatsapp.net"));
	aturPeraturan(db, "g", "link", "dilarang");
	assert.match(formatPeraturan(db, "g"), /dilarang/);
	assert.ok(tambahDomainAman(db, "https://contoh.com/path"));
	assert.ok(statistikSpam({ spam: 2 }) >= 2);
	assert.match(kartuGrup("g", db, { participants: [1, 2] }), /Kartu Grup/);
	assert.ok(aktivitasGrup({ rumus: 3 }).length > 0);
});

test("media menghasilkan spesifikasi dan kartu", () => {
	assert.equal(spesifikasiStikerTeks("halo").teks, "halo");
	assert.equal(spesifikasiFotoProfil("Rynn").ukuran, 512);
	assert.match(kartuUndangan("Rapat", "2026-12-01"), /Rapat/);
	assert.match(posterUcapan("Ani", "Semangat"), /Ani/);
	assert.ok(diagramLingkaran([1, 2, 3]).length === 3);
	assert.equal(tabelDua(["a=1", "b=2"]).length, 2);
});

test("AI wrapper mengatur memori dan prompt", () => {
	const u = {};
	assert.equal(aturMemori(u, true), true);
	assert.equal(tambahMemori(u, "halo").length, 1);
	assert.equal(hapusMemori(u).length, 0);
	assert.equal(aturPersona(u, "guru"), "guru");
	assert.match(personaPrompt("guru"), /guru/);
	assert.match(promptDebat("topik"), /pro dan kontra/);
	assert.match(promptRangkum("teks"), /lima poin/);
	assert.match(promptReviewKode("kode"), /tiga saran/);
	assert.match(promptRencana("tugas"), /lima langkah/);
	assert.equal(batasAi(45).sisa, 5);
});

test("cabang invalid dan batas atas ditangani", () => {
	assert.equal(rekeningBuat({ rekening: { a: 0 } }, "a"), null);
	assert.equal(rekeningPindah({ money: 0, rekening: { a: 0 } }, "a", 5), null);
	assert.equal(arisanBuat({}, "g", "", 10), null);
	assert.equal(arisanBayar(null, "a"), null);
	assert.ok(skorKredit({ utang: 5000 }) >= 0);
	assert.equal(klaimAsuransi(1000, 0), null);
	assert.equal(pajakSimulasi(-1), null);
	assert.deepEqual(grafikKategori([]), []);
	assert.equal(guildBuat({ guild: { a: {} } }, "a", "g"), null);
	assert.equal(guildGabung({ guild: { a: { anggota: ["x"] } } }, "a", "x"), null);
	assert.equal(guildKeluar({ guild: {} }, "y", "x"), null);
	assert.deepEqual(guildPapan({}), []);
	assert.equal(sudokuBuat("sulit").flat().filter((n) => n === 0).length, 8);
	assert.equal(sudokuIsi([[1]], 9, 0, 1), null);
	assert.ok(gerak2048(game2048Baru(), "atas"));
	assert.ok(gerak2048(game2048Baru(), "bawah"));
	assert.ok(gerak2048(game2048Baru(), "kanan"));
	assert.equal(kartuIngatan(99).length, 12);
	assert.equal(kosakataHarian([], 0), null);
	assert.match(panduanEjaan("zzz"), /pedoman/);
	assert.match(panduanTatabahasa("zzz"), /tidak ditemukan/);
	assert.deepEqual(cariResep([], "x"), []);
	assert.equal(tantanganRumus([]), null);
	assert.equal(targetBuat({}, "", 1), null);
	assert.equal(targetTambah({}, "x", 1), null);
	assert.equal(proyekStatus({}, "x", "done"), null);
	assert.deepEqual(cariCatatan({}, "x"), []);
	assert.equal(beriTagCatatan({}, "x", "y"), null);
	assert.equal(tambahAdmin({ set: { g: { admin: ["x"] } } }, "g", "x"), null);
	assert.equal(tambahDomainAman({ domainAman: ["x"] }, "x"), null);
	assert.equal(aturRateLimit("x"), null);
	assert.equal(blokirDomain(["x"], "x"), null);
});

test("owner menghasilkan ringkasan tanpa secret", () => {
	assert.equal(relayStatus(true).aktif, true);
	assert.equal(deployStatus({ version: "12.0.0" }).versi, "12.0.0");
	const fs = { existsSync: () => true };
	assert.equal(verifikasiBackup(["/a"], fs)[0].ada, true);
	assert.equal(restoreDiff("x", { users: {} }).userSaatIni, 0);
	assert.equal(sesiList(["a"]).length, 1);
	assert.equal(migrasiInfo({ version: 2 }).versiSesudah, 3);
	assert.equal(databaseInfoPenuh({ users: {}, set: {} }, {}).tipe, "lokal");
	assert.equal(logEkspor([{ aksi: "x" }]).length, 1);
	assert.equal(aturRateLimit(3), 3);
	assert.equal(aturRateLimit(-1), null);
	assert.ok(blokirDomain([], "https://contoh.com"));
	assert.equal(alasanMaintenance("perbaikan"), "perbaikan");
	assert.equal(auditEkspor([{ aksi: "x", waktu: 1 }]).length, 1);
});
