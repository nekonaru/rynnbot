import { test } from "node:test";
import assert from "node:assert/strict";
import { ringkasV26, statusV26, ai, laporan, pencarian, game, moderasi, media, profil, bot } from "../lib/v26/indeks.js";
import { daftarCommandV2, daftarKategoriCommand, jumlahCase } from "../lib/command-registry.js";

test("modul v26 tersedia", () => {
	assert.equal(statusV26().length, 8);
	assert.equal(ringkasV26([{ a: 1 }]).includes("a: 1"), true);
	assert.equal(ringkasV26(null), "");
});

test("ai merangkum fitur yang ada", () => {
	const db = { users: { a: { money: 10, transaksiLog: [{ field: "money", nominal: 5, sumber: "tes", at: Date.now() }] } }, groups: {} };
	assert.equal(typeof ai.ringkasDompet(db, "a"), "string");
	assert.equal(typeof ai.saranPet({ pet: { level: 2 } }), "string");
	assert.equal(typeof ai.saranKebun({ kebun: { lahan: [] } }), "string");
	assert.equal(typeof ai.saranKarir({ karir: { bidang: "dagang" } }), "string");
	assert.equal(typeof ai.saranBelajar({}), "string");
	assert.equal(typeof ai.ulasGame({}), "string");
	assert.equal(typeof ai.ringkasGrup(db, "chat"), "string");
	assert.equal(typeof ai.ulasKarya({}), "string");
	assert.equal(typeof ai.ulasKode("const a = 1;"), "string");
	assert.equal(typeof ai.ringkasFitur("pet"), "string");
});

test("laporan dan pencarian bekerja", () => {
	const db = { users: { a: { money: 10, transaksiLog: [{ field: "money", nominal: 5, sumber: "tes", at: Date.now() }] } }, groups: { "g@g.us": { subject: "Grup" } } };
	assert.equal(typeof laporan.harian(db, "a"), "object");
	assert.equal(typeof laporan.mingguan(db, "a"), "object");
	assert.equal(typeof laporan.bulanan(db, "a"), "object");
	assert.equal(Array.isArray(laporan.pertumbuhan(db, "a")), true);
	assert.equal(typeof laporan.perbandingan(db, "a", "harian", "mingguan"), "object");
	assert.equal(typeof laporan.ekspor(db, "a"), "string");
	assert.ok(laporan.jadwalkan(db, "a", "harian"));
	assert.equal(laporan.berhenti(db, "a"), true);

	assert.equal(Array.isArray(pencarian.lintas("Merapi")), true);
	assert.equal(Array.isArray(pencarian.perintah("menu")), true);
	assert.equal(Array.isArray(pencarian.data("Gunung")), true);
	assert.equal(Array.isArray(pencarian.pengguna(db, "a")), true);
	assert.equal(Array.isArray(pencarian.grup(db, "Grup")), true);
	assert.equal(Array.isArray(pencarian.riwayat(db, "a", "tes")), true);
	const u = {};
	assert.ok(Array.isArray(pencarian.simpan(u, "merapi")));
	assert.equal(Array.isArray(pencarian.tersimpan(u)), true);
	assert.equal(pencarian.hapus(u, "merapi"), true);
});

test("game moderasi dan media membatasi state", () => {
	const db = { users: { a: { money: 100 }, b: { money: 0 } }, groups: {}, chat: {} };
	assert.equal(typeof game.harian(Date.now()), "object");
	assert.equal(typeof game.tantangan(Date.now()), "object");
	assert.equal(Array.isArray(game.daftarTurnamen()), true);
	assert.equal(Array.isArray(game.rekor(db.users.a)), true);
	game.latihan(db.users.a, "catur");
	assert.equal(Array.isArray(game.papan(db)), true);
	assert.ok(game.hadiah(db, "a", 5));
	assert.ok(game.beri(db, "a", "b", 3));

	assert.equal(typeof moderasi.aturan(db, "c"), "string");
	assert.ok(moderasi.peringatan(db, "c", "b", "spam"));
	assert.ok(moderasi.mute(db, "c", "b", 5));
	assert.equal(moderasi.unmute(db, "c", "b"), true);
	assert.equal(Array.isArray(moderasi.log(db, "c")), true);
	assert.equal(typeof moderasi.statistik(db, "c"), "object");
	assert.equal(moderasi.auto(db, "c", true), true);
	assert.equal(typeof moderasi.uji(db, "c", "halo"), "object");

	assert.equal(typeof media.kartu("J", "I"), "string");
	assert.equal(typeof media.poster("J", "I", "ungu"), "string");
	assert.equal(typeof media.stiker("halo"), "object");
	assert.equal(Array.isArray(media.galeri({})), true);
	assert.equal(typeof media.animasi("x", 4), "object");
	assert.equal(typeof media.meta("a b"), "object");
	assert.equal(typeof media.uji("halo"), "object");
});

test("profil dan bot aman", () => {
	const db = { users: { a: { money: 10 } } };
	const u = db.users.a;
	assert.equal(typeof profil.lengkap(u, db, "a"), "object");
	assert.equal(Array.isArray(profil.pencapaian(u)), true);
	assert.equal(typeof profil.riwayat(u), "object");
	assert.equal(typeof profil.pengaturan(u), "object");
	assert.ok(profil.aturPengaturan(u, "ringkas", true));
	assert.equal(typeof profil.mode(u, "ringkas"), "string");
	assert.equal(typeof profil.bahasa(u, "id"), "string");
	const cad = profil.cadangan(u);
	assert.equal(typeof cad, "object");
	assert.equal(typeof bot.diagnosis(globalThis, db), "object");
	assert.equal(Array.isArray(bot.metrik(db)), true);
	assert.equal(Array.isArray(bot.panas(db)), true);
	assert.equal(typeof bot.beban(globalThis), "object");
	assert.equal(typeof bot.cache(globalThis), "object");
	assert.equal(typeof bot.uji("dompet"), "object");
	assert.equal(bot.hentikan(db, "uji"), true);
	assert.equal(typeof bot.jadwal(db), "object");
});

test("jalan alternatif modul v26 tidak melempar", () => {
	const db = { users: { a: { money: 10 } }, groups: {}, transaksiLog: [{ field: "money", nominal: -3, sumber: "x", at: Date.now() }] };
	assert.doesNotThrow(() => {
		ai.ringkasDompet({}, "");
		ai.saranPet(null);
		ai.saranPet({ pet: { level: 1, kenyang: 20, senang: 20, energi: 20, kesehatan: 20 } });
		ai.saranPet({ pet: { level: 3, kenyang: 70, senang: 70, energi: 70, kesehatan: 70 } });
		ai.saranKebun(null);
		ai.saranKarir(null);
		ai.saranBelajar(null);
		ai.ulasGame(null);
		ai.ringkasGrup({}, "");
		ai.ulasKarya(null);
		ai.ulasKode("");
		ai.ringkasFitur("tidak-ada");
	});
	assert.doesNotThrow(() => {
		laporan.harian({}, "a");
		laporan.mingguan({}, "a");
		laporan.bulanan({}, "a");
		laporan.pertumbuhan({}, "a");
		laporan.perbandingan({}, "a", "x", "y");
		laporan.ekspor({}, "a");
		laporan.jadwalkan({}, "a", "jam");
		laporan.berhenti({}, "a");
	});
	assert.doesNotThrow(() => {
		pencarian.lintas("");
		pencarian.perintah("");
		pencarian.data("");
		pencarian.pengguna({}, "");
		pencarian.grup({}, "");
		pencarian.riwayat({}, "a", "");
		pencarian.simpan({}, "");
		pencarian.tersimpan({});
		pencarian.hapus({}, "");
	});
	assert.doesNotThrow(() => {
		game.harian({ tanggal: "2026-01-01" });
		game.tantangan({ tanggalHari: "2026-01-01" });
		game.rekor(null);
		game.latihan({}, "");
		game.papan({});
		game.hadiah({}, "a", 0);
		game.beri({}, "a", "b", 0);
	});
	assert.doesNotThrow(() => {
		moderasi.aturan({}, "");
		moderasi.peringatan({}, "c", "", "");
		moderasi.mute({}, "c", "a", 0);
		moderasi.unmute({}, "c", "a");
		moderasi.log({}, "c");
		moderasi.statistik({}, "c");
		moderasi.auto({}, "c", false);
		moderasi.uji({}, "c", "");
	});
	assert.doesNotThrow(() => {
		media.kartu("", "");
		media.poster("", "", "");
		media.stiker("");
		media.galeri(null);
		media.animasi("", 0);
		media.meta("");
		media.uji("x".repeat(3000));
		media.hapus({}, "");
	});
	assert.doesNotThrow(() => {
		profil.lengkap(null, {}, "");
		profil.pencapaian(null);
		profil.riwayat(null);
		profil.pengaturan(null);
		profil.aturPengaturan(null, "x", true);
		profil.mode(null, "x");
		profil.bahasa(null, "x");
		profil.cadangan(null);
		profil.pulihkan({}, "x");
	});
	assert.doesNotThrow(() => {
		bot.diagnosis({}, {});
		bot.metrik({});
		bot.panas({});
		bot.beban({});
		bot.cache({});
		bot.uji("tidak-ada");
		bot.hentikan({}, "");
		bot.jadwal({});
	});
});

test("ai menangani banyak bentuk data", () => {
	assert.equal(ai.saranBelajar({ skorBelajar: 9, kursusAktif: { nama: "Dasar" } }).includes("Dasar"), true);
	assert.equal(ai.saranBelajar({ skorBelajar: 0, kursusSelesai: ["A"] }).includes("kursus"), true);
	assert.equal(ai.ulasGame({ skorGameTerpadu: [{ nama: "catur", jumlah: 4 }], skorGame: { tebak: 3 } }).includes("catur"), true);
	assert.equal(ai.ulasGame({ skorGameTerpadu: "7" }).includes("total"), true);
	const db = { groups: { g: { peraturan: "rapi", warn: { a: 1 }, autoReply: [{ kata: "halo" }], mute: true } } };
	assert.equal(ai.ringkasGrup(db, "g").includes("rapi"), true);
	const u = { studioV25: { A: { status: "terbit" }, B: { status: "draft" } }, artikel: { X: { judul: "Judul" } } };
	assert.equal(ai.ulasKarya(u).includes("Studio"), true);
	assert.equal(typeof ai.ulasKode("const a = (1);\nif (a) {}"), "string");
});

test("bentuk data alternatif v26", () => {
	assert.equal(game.rekor({ rekorGame: { catur: 7, tebak: 3 } }).length, 2);
	assert.equal(game.rekor({ rekorGame: [{ game: "x", skor: 2 }] }).length, 1);
	const papan = game.papan({ users: { a: { skorGameTerpadu: [{ jumlah: 9 }] }, b: { skor: "5" }, c: { skorGameTerpadu: { x: 4 } } } });
	assert.equal(papan.length >= 2, true);
	assert.equal(game.hadiah({ users: { a: {} } }, "a", -1), null);

	const galeri = { mediaV26: [{ id: "A" }, { id: "B" }] };
	assert.equal(media.galeri(galeri).length > 0, true);
	assert.equal(media.hapus(galeri, "A"), true);
	const peta = { mediaV26: { C: { id: "C" } } };
	assert.equal(media.hapus(peta, "C"), true);
	assert.equal(media.hapus(peta, "C"), false);
	assert.equal(media.uji("").layak, false);

	const metrik = bot.metrik({ users: { a: {} }, groups: { g: {} } });
	assert.equal(Array.isArray(metrik), true);
	assert.equal(bot.uji("dompet").tersedia !== undefined || typeof bot.uji("dompet") === "object", true);
});

test("perintah v26 terdaftar di kategori baku", () => {
	const daftar = daftarCommandV2();
	const nama = "ailaporandompet aipet aikebun aikarir aibelajar aigame aigrup aikarya aikodeulas airingkasfitur laporanharian laporanmingguan laporanbulan laporanpertumbuhan laporanperbandingan laporanekspor laporanjadwalkan laporanberhenti carilintasfitur cariperintah caridata caripengguna carigrup caririwayat caritersimpan carihapus gamiharian gametantangan gameturnamen gamerekor gamematihan gamepapan gamehadiah gamemberi moderatoraturan moderasipingatan moderatemute moderasiunmute moderasilog moderasistatistik moderasiauto moderasiuji mediakartu mediaposter mediastiker mediagaleri mediaanimasi mediameta mediauji mediahapus profillengkap profilpencapaian profilriwayat profilpengaturan profilmode profilbahasa profilcadangan profilpulihkan botdiagnosis botmetrik botpanas botbeban botcache botuji bothentikan botjadwal".split(/\s+/);
	const baku = new Set(daftarKategoriCommand().map((k) => k.kategori));
	const entri = nama.map((n) => daftar.find((e) => e.command === n));
	assert.equal(entri.filter(Boolean).length, 66);
	assert.equal(entri.every((e) => e && baku.has(e.kategori)), true);
	assert.equal(jumlahCase(), 1416);
});
