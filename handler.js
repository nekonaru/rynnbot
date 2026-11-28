import "./settings.js";
import { ringkasV26, statusV26, ai as aiV26, laporan as laporanV26, pencarian as pencarianV26, game as gameV26, moderasi as moderasiV26, media as mediaV26, profil as profilV26, bot as botV26 } from "./lib/v26/indeks.js";
import { ringkasV25, statusV25, dompet as dompetV25, koperasi as koperasiV25, kompetisi as kompetisiV25, rantai as rantaiV25, pembelajaran as pembelajaranV25, komunitas as komunitasV25, pengawasan as pengawasanV25, studio as studioV25 } from "./lib/v25/indeks.js";
import { ringkasan as otomasiRingkasan, validasi as otomasiValidasi, kering as otomasiKering, batas as otomasiBatas, izin as otomasiIzin, catatAudit as otomasiCatat, audit as otomasiAudit, hentikanSemua as otomasiHentikan, penjadwal, event as eventOtomasi, aturan as aturanOtomasi, workflow as workflowOtomasi, templat as templatOtomasi, orkestrasi, jalankanEventNyata, evaluasiAturanNyata } from "./lib/v24/indeks.js";
import { datasetV23, ambilDataset, cariDataset, totalV23 } from "./lib/data-v23/indeks.js";
import { daftarJenis, daftarMakanan, daftarObat, adopsi, gantiNama, beriMakan, minum, main, latih, istirahat, mandi, obat, beliBarang, evolusi, statusPet, papanPet, lepasPet } from "./lib/v22/pet.js";
import { daftarBenih, daftarHasil, buatKebun, beliBenih, tanam, rawat, cekHama, panen, jualHasil, olah, perluas, ternak, panenTernak, statusKebun, papanKebun, bongkar } from "./lib/v22/kebun.js";
import { daftarBidang, daftarKeahlian, pilihBidang, ambilTugas, kerjakan, lembur, ambilGaji, belajar, sertifikat as sertifikatKarir, promosi, pindahBidang, statusKarir, papanKarir, cuti, pensiun } from "./lib/v22/karir.js";
import { buat as buatPengumuman, ambil as ambilPengumuman, isi as isiPengumuman, aturJenis, aturTarget, terbitkan, daftarAktif, sematkan, tutup, inbox, bacaInbox, hapusInbox, bersihInbox, belumDibaca, simpanTemplat, ambilTemplat, ringkasPengumuman } from "./lib/v22/pengumuman.js";
import { normJid, catatJuara, papanJuara, beriPoinJuara, klasemenLigaDariMesin, skorGameTerpadu, aktivitasTerpadu, formatJadwal, ringkasanJuara } from "./lib/v20/integrasi.js";
import { buatKejuaraan, catatHasil as catatHasilMesin, klasemen as klasemenMesin, jadwalkan as jadwalkanMesin, formatRingkas as formatRingkasMesin, formatKlasemen as formatKlasemenMesin, pertandinganTersedia } from "./lib/turnamen-mesin.js";
import { catatLog } from "./lib/log-terstruktur.js";
import { aman as pathAman, daftarAman } from "./lib/path-aman.js";
import { cocokJawaban } from "./lib/game-jawaban.js";
import { ubahSaldo, pindahSaldo, riwayatTransaksi, rekonsiliasi } from "./lib/transaksi.js";
import { daftarPaket, pilihPaket, paketAktif, bandingPaket, batasPaket } from "./lib/v16/paket.js";
import { undangBuat, undangPakai, undangMilik, referralPapan, hadiahReferral } from "./lib/v16/undang.js";
import { artikelBuat, artikelAmbil, artikelIsi, artikelHapus, artikelCari, seriLanjut } from "./lib/v16/artikel.js";
import { surveiBuat, surveiAmbil, surveiOpsi, surveiJawab, surveiHasil, surveiTutup } from "./lib/v16/survei.js";
import { koperasiBuat, koperasiGabung, koperasiSetor, koperasiPinjam, koperasiRekap, koperasiTutup } from "./lib/v16/koperasi.js";
import { inventarisBuat, inventarisTambah, inventarisPakai, inventarisJual, inventarisCari, avatarBuat, avatarPakai } from "./lib/v16/inventaris.js";
import { papanUmum, papanPoin as papanPoinV2, papanKuis, papanGame, papanGrup, papanKontribusi, formatPapan as formatPapanV2 } from "./lib/v16/papan.js";
import { eksporPaket, simpanPaket, ambilPaket, imporPaket, bandingPaket as bandingPaketData, hapusPaket } from "./lib/v16/pindah.js";
import { cekDataset, duplikatDataset, kosongDataset, ukuranDataset, laporanSehat, perbaikiDuplikat } from "./lib/v16/sehat.js";
import { daftarMode, pakaiMode, modeSekarang, flagFitur, aturFitur, aktifFitur } from "./lib/v16/mode.js";
import { konstitusiBuat, konstitusiPasal, konstitusiSetuju, tandaTangan, cekTandaTangan } from "./lib/v16/konstitusi.js";
import { aksesMatriks, aturLimit, bersihkanState, memoriPeta, eventLog, catatEvent, jadwalKerja } from "./lib/v16/owner.js";
import { aturanBuat, aturanAmbil, aturanHapus, aturanMatikan, aturanUji, filterTambah, filterHapus } from "./lib/v15/aturan.js";
import { tambahPoin, papanPoin, hadiahTambah, hadiahTukar, transferPoin } from "./lib/v15/poin.js";
import { tokoBuka, tokoTambah, tokoBeli, lelangBuat, lelangTawar, lelangTutup } from "./lib/v15/toko.js";
import { reputasiBeri, papanReputasi, tepercayaTambah, tepercayaHapus } from "./lib/v15/reputasi.js";
import { kursusBuat, kursusMulai, kursusLanjut, kursusSelesai, sertifikat, materiTambah, materiCari } from "./lib/v15/kursus.js";
import { keputusanBuat, keputusanAmbil, keputusanUbah, keputusanArsip, notulenBanding, simpanNotulenVersi } from "./lib/v15/keputusan.js";
import { proyekBuat as proyekGrupBuat, proyekTugas, proyekAmbil, proyekSelesai, proyekPapan, proyekArsip } from "./lib/v15/proyekgrup.js";
import { cariLintas, arsipTanggal, arsipRingkas, cadanganBuat, cadanganList, cadanganPulihkan } from "./lib/v15/arsip.js";
import { teksRapi, teksBalik, teksUlang, teksPotong, teksBersih, keHeksa, dariHeksa, teksBanding } from "./lib/v15/teks.js";
import { kunciPerintah, lepasKunci, butuhPin, cocokPin, logKeamanan } from "./lib/v15/keamanan.js";
import { paketBuat, paketTambah, paketHapus, wallpaperTeks, kartuPos } from "./lib/v15/media.js";
import { penggunaAktif, grupAktif, daftarCooldown, daftarAkses, rollbackInfo, alasanBlacklist } from "./lib/v15/owner.js";
import { ringkasanData, eksporData, formatEkspor, hapusDataPribadi, aturOpsi, batasData } from "./lib/v14/privasi.js";
import { tiketBuat, tiketAmbil, tiketBalas, tiketTutup, tiketMilik, faqTambah, faqCari } from "./lib/v14/tiket.js";
import { asetSimpan, asetAmbil, asetHapus, asetTag, asetCari, kontenSimpan, kontenAmbil } from "./lib/v14/aset.js";
import { siaranJadwalkan, siaranAmbil, siaranTandaiKirim, siaranHapus, siaranList, siaranRiwayat } from "./lib/v14/siaran.js";
import { laporanBulanan, trenPerintah, statistikAnggota, statistikJam, ringkasanBot, formatRingkasan } from "./lib/v14/analitik.js";
import { apresiasiTambah, apresiasiPapan, salamPersonal, ceritaLanjut, ceritaBaca, ceritaReset, rekomendasiPerintah } from "./lib/v14/sosial.js";
import { namaMerek, namaGrup, caption, hashtag, tagline, judulAlternatif, dialogPendek, suratPendek } from "./lib/v14/kreatif.js";
import { glosarium, artiPeribahasa, latihanHitung, teoriSingkat, petaRumus, hafalanCek, rangkumPelajaran } from "./lib/v14/edukasi.js";
import { portofolio, dividen, obligasi, emasSimulasi, sahamSimulasi, kursSimulasi, infoMataUang, inflasi, warisanSimulasi } from "./lib/v14/ekonomi.js";
import { timBuat, timGabung, skorTim, tebakUrutan, cocokanUrutan, kartuTaruhan, papanSkorHarian } from "./lib/v14/game.js";
import { bootInfo, stateInfo, formatBoot, backupInkremental, dbEkspor, dbImprInfo, logLevel, ketersediaan } from "./lib/v14/owner.js";
import { xpDari, progresLevel, kartuProfil, beriBadge, hapusBadge } from "./lib/v13/akun.js";
import { rekeningBuat, rekeningPindah, arisanBuat, arisanBayar, arisanRekap, skorKredit, klaimAsuransi, pajakSimulasi, grafikKategori } from "./lib/v13/ekonomi.js";
import { guildBuat, guildGabung, guildKeluar, guildPapan, rekomendasiTeman, kartuPerkenalan, statistikKomunitas } from "./lib/v13/komunitas.js";
import { sudokuBuat, sudokuIsi, formatSudoku, game2048Baru, gerak2048, kartuIngatan, tebakTokoh, riddleAi, hadiahGamePass } from "./lib/v13/game.js";
import { kosakataHarian, cariKosakata, panduanEjaan, panduanTatabahasa, pantunBuatan, puisiBuatan, cariResep, tantanganRumus } from "./lib/v13/edukasi.js";
import { targetBuat, targetTambah, formatTarget, proyekBuat, proyekTambah, proyekStatus, formatPapan, cariCatatan, beriTagCatatan } from "./lib/v13/produktivitas.js";
import { daftarAdmin, tambahAdmin, aturPeraturan, formatPeraturan, tambahDomainAman, statistikSpam, kartuGrup, aktivitasGrup } from "./lib/v13/grup.js";
import { spesifikasiStikerTeks, spesifikasiFotoProfil, kartuUndangan, posterUcapan, diagramLingkaran, tabelDua } from "./lib/v13/media.js";
import { aturMemori, hapusMemori, tambahMemori, aturPersona, personaPrompt, promptDebat, promptRangkum, promptReviewKode, promptRencana, batasAi } from "./lib/v13/ai.js";
import { relayStatus, deployStatus, verifikasiBackup, restoreDiff, sesiList, migrasiInfo, databaseInfoPenuh, logEkspor, aturRateLimit, blokirDomain, alasanMaintenance, auditEkspor } from "./lib/v13/owner.js";
import { kirimRespons, formatKosong } from "./lib/respons.js";
import { ketikDulu, tahapProgres, teksStikerAnimasi } from "./lib/animasi.js";
import { buatTurnamen, turnamenAktif, tambahPeserta, catatHasil, tetapkanJuara, arsipTurnamen, ingatPertandingan, ligaBuat, ligaAmbil, ligaTransfer, ligaJadwal, formatTurnamen, formatKlasemen } from "./lib/v12/kompetisi.js";
import { bagiAcak, timSeimbang, beriNama, rotasiTim, formatGrup } from "./lib/v12/kelompok.js";
import { investasiHarian, grafikTabungan, jadwalUtang, riwayatDompet, pasarSimulasi, formatPasar, sisaAnggaran } from "./lib/v12/ekonomi.js";
import { kartuHarian, kuisAdaptif, petaMateri, formatPeta, rangkumCatatan } from "./lib/v12/belajar.js";
import { agendaMinggu, rekapAbsen, hasilPoll, ringkasRapat, tugasTambah, tugasSelesai, formatTugas, skorModerasi } from "./lib/v12/produktivitas.js";
import { kartuWarna, posterTeks, kartuUcapan, komikPendek, galeri, stikerAnimasiSpec } from "./lib/v12/media.js";
import { promptGaya, bandingkan, kuotaAi } from "./lib/v12/ai.js";
import { health, formatHealth, metrik, logRingkas, modeHemat, cacheInfo } from "./lib/v12/owner.js";
import { bukaPanel, tutupPanel } from "./src/dashboard/panel.js";
import { pasangSweeperState } from "./lib/handler/state-sweeper.js";
import { formatAchievement, formatLevel, formatLevelboard } from "./lib/handler/progres.js";
import { parsePasanganGrafik, formatGrafik, formatPanjangTeks } from "./lib/handler/teks-lanjut.js";
import { detailUmur, formatUmurDetail } from "./lib/handler/waktu.js";
import { FAKTA, PUISI, PANTUN, SOAL, PERIBAHASA, NAMA_BAYI_COWO, NAMA_BAYI_CEWE, SUKU, KULINER, RESEP, LAGU_DAERAH, WISATA, WAYANG, PROVINSI, NEGARA, UNSUR, PLANET, HANGMAN_KATA, MBTI_PERTANYAAN, MBTI_TIPES, hitungMBTI, BAHASA, cariBahasa, DANAU, GUNUNG, PULAU, SUNGAI, HARI_BERSEJARAH, cariHari, hariHariIni, KOTA_WAKTU, cariKota, waktuDi, SURAT, cariSurat, FAUNA, FLORA, daftarKategori, daftarSubkategori, halamanRumus, cariRumus, rumusAcak, rumusDetail, statistikRumus, formatRumus, semuaRumus, API_COMMANDS, SEJARAH, TOKOH, OLAHRAGA, SINGKATAN, SINONIM, ANTONIM, MATAUANG, BUDAYA, siapkanData } from "./lib/data-state.js";
import { logInfo } from "./src/cli/helpers.js";
import fs from "fs";
import os from "os";
import util from "util";
import path from "path";
import chalk from "chalk";
import webp from "node-webpmux";
import { Chess } from "chess.js";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { performance } from "perf_hooks";
import { exec, execSync } from "child_process";
import { parsePhoneNumber } from "awesome-phonenumber";
import { generateWAMessageContent, jidNormalizedUser, getContentType, areJidsSameUser } from "baileys";

import { UguuSe } from "./lib/uploader.js";
import TicTacToe from "./lib/tictactoe.js";
import { werewolf } from "./lib/werewolf.js";
import templateMenu from "./lib/template_menu.js";
import { angkaKeKata, toRoman, fromRoman, rot13, morseEncode, morseDecode, binaryEncode, binaryDecode, hexEncode, hexDecode, ZODIAC, zodiacFor, convertUnit, cap } from "./lib/util-lokal.js";
import { parseBulat, fpb, kpk, faktorPrima, isPrima, pembagiTerkecil, isPalindrom, isAnagram, formatRupiah, hitungDiskon, cicilanAnuitas, hitungBmi, siklusTidur, uuidV4, akar, faktorial, formatBigInt, isoWeek, selisihHari, fibonacci, primaAntara, statistik, sederhanakanPecahan, progres } from "./lib/kalkulator.js";
import { kataBilangan, ucapanWaktu, hurufKe, angkaKeHuruf } from "./lib/bilangan.js";
import { bilah, formatTanggal, formatWaktu, potongTeks, hitungKata } from "./lib/teks.js";
import { bagiKelompok, bagiTim, ukuranTimGame, formatPembagian } from "./lib/pembagian.js";
import { buatBracket, catatMenang, formatBracket, buatBracketDouble, formatBracketDouble } from "./lib/turnamen.js";
import { denganCache, bersihkanCache } from "./lib/cache.js";
import { hashTeks, urlEncode, urlDecode, validasiJson } from "./lib/devutils.js";
import { luasBangun, volumeBangun, akarKuadrat } from "./lib/geometri.js";
import { deretAritmetika, deretGeometri, linearSatu, persenDari, persenPerubahan } from "./lib/deret.js";
import { det2, invers2, kali2, transpose2 } from "./lib/matriks.js";
import { dotVektor, crossVektor, panjangVektor, kompleksTambah, kompleksKurang, kompleksKali, kompleksBagi, kompleksKonjugat, kompleksModulus } from "./lib/vektor-kompleks.js";
import { formatUptime, laporanDiagnosa } from "./lib/diagnosa.js";
import { dariBasis, konversiBasis } from "./lib/basis.js";
import { slug } from "./lib/slug.js";
import { daftarCommand, daftarKategoriCommand, cariCommand, infoCommand, jumlahCase } from "./lib/command-registry.js";
import { cekAkses, aturAkses, matikanPerintah, hidupkanPerintah, aturCooldown } from "./lib/access.js";
import { lihatQuest, tandaiQuest, klaimQuest } from "./lib/quest.js";
import { bangunMenu, bangunIndeksMenu, kategoriDariNama, ringkasanKategori } from "./lib/menu-builder.js";
import { formatDaftar } from "./lib/daftar.js";
import { tulisAudit, bacaAudit } from "./lib/audit.js";
import { FIRST_SETUP_MARKER, firstSetupStates, firstSetupStepText, sendFirstSetupIntro } from './src/setup-wizard.js';
import { ytMp3, ytMp4Stream } from "./lib/scraper.js";
import { GroupUpdate, LoadDataBase, extractNativeFlowResponseId } from "./src/message.js";
import { CloneBot, StopCloneBot, ListCloneBot } from "./src/clonebot.js";
import { toAudio, toPTT, toGif, toImage } from "./lib/converter.js";
import { cmdAdd, cmdAddHit, addExpired, getPosition, getExpired, getStatus, checkStatus } from "./src/database.js";
import { rdGame, iGame, gameSlot, gameCasinoSolo, gameSamgongSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addMoney, transfer, Cangkulan, SnakeLadder, getChessAI } from "./lib/game.js";
import {
	getRandom,
	getBuffer,
	fetchJson,
	runtime,
	clockString,
	sleep,
	isUrl,
	extractUrl,
	formatDate,
	formatp,
	generateProfilePicture,
	errorCache,
	antiSpam,
	runUpdate,
	updateSettings,
	parseMention,
	fixBytes,
	similarity,
	pickRandom,
	encodeToLetters,
	tarBackup,
	rotateBackups,
} from "./lib/function.js";

// Pembersih state dipindah ke lib/handler/state-sweeper.js.
pasangSweeperState();

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const timez = Intl.supportedValuesOf("timeZone");

async function handleSetupWizard(sock, m) {
	if (m.isGroup || !m.isCreator) return false;
	const sender = m.sender;
	const state = firstSetupStates.get(sender);

	// Perintah batal / setup ulang selalu diterima
	const text = typeof m.text === "string" ? m.text.trim() : "";
	if (/^\.?setupbot$/i.test(text)) {
		firstSetupStates.set(sender, "nama");
		await sendFirstSetupIntro(sock, sender);
		return true;
	}
	if (!state) return false;

	if (!text) {
		await m.reply("Balas dengan teks, ya. Ketik *batal* untuk berhenti.");
		return true;
	}
	if (/^batal$/i.test(text)) {
		firstSetupStates.delete(sender);
		await m.reply(`Setup dihentikan. Fitur download & AI belum bisa dipakai karena Naze API key belum diisi.\n\nKetik *.setupbot* kapan pun untuk melanjutkan.`);
		return true;
	}

	const t = text.trim();
	const isSkip = /^skip$/i.test(t);

	if (state === "nama") {
		if (!isSkip) await updateSettings({ filePath: settingsPath, author: t });
		firstSetupStates.set(sender, "botname");
		await m.reply(isSkip ? "⚙️ Bawaan *nama author* dipakai." : `✅ Author diubah menjadi *${t}*`);
		await m.reply(firstSetupStepText("botname", null));
		return true;
	}
	if (state === "botname") {
		if (!isSkip) await updateSettings({ filePath: settingsPath, botname: t });
		firstSetupStates.set(sender, "packname");
		await m.reply(isSkip ? "⚙️ Bawaan *nama bot* dipakai." : `✅ Nama bot diubah menjadi *${t}*`);
		await m.reply(firstSetupStepText("packname", null));
		return true;
	}
	if (state === "packname") {
		if (!isSkip) await updateSettings({ filePath: settingsPath, packname: t });
		firstSetupStates.set(sender, "owner");
		await m.reply(isSkip ? "⚙️ Bawaan *nama paket stiker* dipakai." : `✅ Paket stiker diubah menjadi *${t}*`);
		await m.reply(firstSetupStepText("owner", null));
		return true;
	}
	if (state === "owner") {
		if (!isSkip) {
			const nums = t.split(",").map((n) => n.replace(/\D/g, "")).filter(Boolean);
			if (nums.length === 0 || nums.some((n) => n.length < 8 || n.length > 16)) {
				await m.reply("❌ Format salah. Kirim nomor pisah koma (misalnya *6282173282591, 628123456789*), atau *skip* untuk tetap memakai yang sekarang.");
				return true;
			}
			await updateSettings({ filePath: settingsPath, owner: nums });
			await m.reply(`✅ Owner diubah menjadi *${nums.join(", ")}*`);
		} else {
			await m.reply("⚙️ Owner bawaan dipakai.");
		}
		firstSetupStates.set(sender, "apikey");
		await m.reply(firstSetupStepText("apikey", null));
		return true;
	}
	if (state === "apikey") {
		if (!/^nz-[A-Za-z0-9]{6,}$/.test(t)) {
			await m.reply("❌ Key tidak valid. Key Naze diawali *nz-* (contoh: *nz-abc123def*). Coba lagi, atau ketik *batal* untuk berhenti.");
			return true;
		}
		await updateSettings({ filePath: settingsPath, apikey: t });
		firstSetupStates.set(sender, "neosantara");
		await m.reply("✅ Naze API key tersimpan di *.env* (tidak pernah ter-commit).");
		await m.reply(firstSetupStepText("neosantara", null));
		return true;
	}
	if (state === "neosantara") {
		if (isSkip) {
			await m.reply("⚙️ Fitur Neosantara AI dilewati.");
		} else {
			if (!/^nsk_[A-Za-z0-9]{6,}$/.test(t)) {
				await m.reply("❌ Key tidak valid. Key Neosantara diawali *nsk_*. Coba lagi, atau ketik *skip* untuk melewati.");
				return true;
			}
			await updateSettings({ filePath: settingsPath, neosantara: t });
			await m.reply("✅ Neosantara API key tersimpan.");
		}
		// Selesai
		firstSetupStates.delete(sender);
		try { fs.writeFileSync(FIRST_SETUP_MARKER, "1"); } catch {}
		await m.reply(
			`*✅ Setup selesai!*\n\n` +
			`Bot siap dipakai. Ketik *.allmenu* untuk melihat semua perintah.\n\n` +
			`Ketik *.setupbot* kapan pun untuk mengubah konfigurasi.\n` +
			`Jangan pernah bagikan API key kamu ke siapa pun.`,
		);
		return true;
	}
	return true;
}
const menfesTimeouts = new Map();
const settingsPath = fs.existsSync(path.join(__dirname, "settings.js")) ? path.join(__dirname, "settings.js") : path.join(process.cwd(), "settings.js");
let canvasModule = null;

/*
 * Awalnya berbasis Hitori Bot karya Nazedev (https://github.com/nazedev/hitori)
 * Dirombak total untuk proyek Rynn (https://github.com/nekonaru/rynnbot)
 */

try {
	canvasModule = await import("@napi-rs/canvas");
	canvasModule.GlobalFonts.registerFromPath("./src/nulis/font/Indie-Flower.ttf", "Indie Flower");
	logInfo("Fast Mode (Canvas) Active 🚀");
} catch (error) {
	logInfo("Canvas not found. Fallback PureImage Active 🐢");
}

const readmore = String.fromCharCode(8206).repeat(999);
const almost = 0.66;
let _badWordsCache = null;
function getBadWordsLower() {
	return (_badWordsCache ??= (global.badWords || []).map((v) => v.toLowerCase()));
}

let casesArray = null;
function getCasesArray() {
	if (!casesArray) {
		if (global.db?.cases) {
			casesArray = global.db.cases;
		} else {
			const fileContent = fs.readFileSync(__filename, "utf-8");
			casesArray = [...fileContent.matchAll(/case\s+['"]([^'"]+)['"]/g)].map((match) => match[1]);
		}
	}
	return casesArray;
}

// Metadata case dibentuk sekali per array, bukan tiap pesan.
const metaCaseCache = new WeakMap();
function metaCases(daftar) {
	let hasil = metaCaseCache.get(daftar);
	if (!hasil) {
		hasil = { set: new Set(daftar), daftar: daftar.map((c) => ({ asli: c, kecil: c.toLowerCase() })) };
		metaCaseCache.set(daftar, hasil);
	}
	return hasil;
}

const datasetV16 = (nama) => ({
	peribahasa: PERIBAHASA, fakta: FAKTA, soal: Object.values(SOAL).flat(), resep: Array.isArray(RESEP) ? RESEP : Object.values(RESEP || {}), hangman: HANGMAN_KATA, rumus: semuaRumus(),
}[String(nama || "").toLowerCase()] || []);

const sock = async (sock, m, store) => {
	await siapkanData();
	let ownerNumber = global.owner || [];
	try {
		if (!global.db) global.db = {};
		if (!global.db.cases) global.db.cases = getCasesArray();
		const cases = global.db.cases;
	const meta = metaCases(cases);
	const casesSet = meta.set;
	const daftarCase = meta.daftar;

		await LoadDataBase(sock, m);

		const botNumber = sock.user?.id ? sock.decodeJid(sock.user.id) : "";
		const db = global.db;
		const mess = global.mess || {};

		const sewa = db.sewa || [];
		const premium = db.premium || [];
		const set = (db.set && db.set[botNumber]) || {};

		let suit = db.game?.suit || {};
		let chess = db.game?.chess || {};
		let chat_ai = db.game?.chat_ai || {};
		let menfes = db.game?.menfes || {};
		let tekateki = db.game?.tekateki || {};
		let tictactoe = db.game?.tictactoe || {};
		let tebaklirik = db.game?.tebaklirik || {};
		let kuismath = db.game?.kuismath || {};
		let cangkulan = db.game?.cangkulan || {};
		let tebaklagu = db.game?.tebaklagu || {};
		let tebakkata = db.game?.tebakkata || {};
		let family100 = db.game?.family100 || {};
		let susunkata = db.game?.susunkata || {};
		let tebakbom = db.game?.tebakbom || {};
		let ulartangga = db.game?.ulartangga || {};
		let tebakkimia = db.game?.tebakkimia || {};
		let caklontong = db.game?.caklontong || {};
		let tebakangka = db.game?.tebakangka || {};
		let tebaknegara = db.game?.tebaknegara || {};
		let tebakgambar = db.game?.tebakgambar || {};
		let tebakbendera = db.game?.tebakbendera || {};

		if (!set._cachedOwner || set._cachedBot !== botNumber) {
			set.owner = [...new Set([...(global.owner || []), botNumber ? botNumber.split("@")[0] : "", ...(set?.owner || [])])].filter(Boolean);
			set._cachedOwner = set.owner;
			set._cachedBot = botNumber;
		}
		ownerNumber = set.owner;

		await GroupUpdate(sock, m, store);

		const nativeFlowId = m.nativeFlowId || extractNativeFlowResponseId(m.msg, m.message);

		let body =
			(m.type === "conversation"
				? m.message.conversation
				: m.type == "imageMessage"
					? m.message.imageMessage.caption
					: m.type == "videoMessage"
						? m.message.videoMessage.caption
						: m.type == "extendedTextMessage"
							? m.message.extendedTextMessage.text
							: m.type == "reactionMessage"
								? m.message.reactionMessage.text
								: m.type == "buttonsResponseMessage"
									? m.message.buttonsResponseMessage.selectedButtonId
									: m.type == "listResponseMessage"
										? m.message.listResponseMessage.singleSelectReply.selectedRowId
										: m.type == "templateButtonReplyMessage"
											? m.message.templateButtonReplyMessage.selectedId
											: m.type == "interactiveResponseMessage" || m.msg?.nativeFlowResponseMessage || m.message?.interactiveResponseMessage?.nativeFlowResponseMessage
												? nativeFlowId || m.body || ""
												: m.type == "messageContextInfo"
													? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || ""
													: m.type == "editedMessage"
														? m.message.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.editedMessage?.message?.protocolMessage?.editedMessage?.conversation || ""
														: m.type == "protocolMessage"
															? m.message.protocolMessage?.editedMessage?.extendedTextMessage?.text ||
																m.message.protocolMessage?.editedMessage?.conversation ||
																m.message.protocolMessage?.editedMessage?.imageMessage?.caption ||
																m.message.protocolMessage?.editedMessage?.videoMessage?.caption ||
																""
															: "") ||
			m.body ||
			"";

		const isButtonResponse = Boolean(
			m.button ||
			m.type === "buttonsResponseMessage" ||
			m.type === "templateButtonReplyMessage" ||
			m.type === "listResponseMessage" ||
			m.type === "interactiveResponseMessage" ||
			m.msg?.selectedButtonId ||
			m.msg?.selectedId ||
			m.msg?.singleSelectReply?.selectedRowId ||
			m.msg?.nativeFlowResponseMessage ||
			m.message?.buttonsResponseMessage ||
			m.message?.templateButtonReplyMessage ||
			m.message?.listResponseMessage ||
			m.message?.interactiveResponseMessage ||
			nativeFlowId,
		);

		if (isButtonResponse) {
			const isGroup = Boolean(m.isGroup || m.chat?.endsWith("@g.us"));
			const botPn = sock.user?.id ? sock.decodeJid(sock.user.id) : "";
			const botLid = sock.user?.lid ? sock.decodeJid(sock.user.lid) : "";
			const resolvedBotLid = botLid && sock.findJidByLid ? sock.findJidByLid(botLid, store, true) : "";
			const quotedParticipant = m.msg?.contextInfo?.participant || m.quoted?.key?.participant || m.quoted?.sender;
			const resolvedQuoted = quotedParticipant ? (sock.findJidByLid ? sock.findJidByLid(quotedParticipant, store, true) : null) || quotedParticipant : "";

			const botQuoted = Boolean(
				!isGroup ||
				m.msg?.contextInfo?.fromMe ||
				m.msg?.contextInfo?.isFromMe ||
				m.quoted?.fromMe ||
				(isButtonResponse && !quotedParticipant) ||
				(quotedParticipant &&
					((botPn && (areJidsSameUser(quotedParticipant, botPn) || areJidsSameUser(resolvedQuoted, botPn))) ||
						(botLid && (areJidsSameUser(quotedParticipant, botLid) || areJidsSameUser(resolvedQuoted, botLid))) ||
						(resolvedBotLid && (areJidsSameUser(quotedParticipant, resolvedBotLid) || areJidsSameUser(resolvedQuoted, resolvedBotLid))))),
			);

			if (!botQuoted) return;
		}

		const buttonId = m.button?.id || nativeFlowId || m.msg?.selectedButtonId || m.msg?.selectedId || m.msg?.singleSelectReply?.selectedRowId;
		if (isButtonResponse && buttonId) {
			body = buttonId;
		}

		const budy = typeof m.text == "string" ? m.text : "";
		const isCreator = ownerNumber.some((owner) => {
			const ownerJid = owner.includes("@") ? owner : owner + "@s.whatsapp.net";
			const findJid = sock.findJidByLid(jidNormalizedUser(ownerJid), store, true);
			if (!findJid) return false;
			return findJid === m.sender || findJid === jidNormalizedUser(m.sender) || findJid === sock.findJidByLid(m.sender, store, true);
		});
		m.isCreator = isCreator;
		// Wizard setup pertama (first pairing): owner diarahkan sebelum perintah lain diproses
		if (await handleSetupWizard(sock, m)) return;
		const symbolMatch = body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi);
		const emojiMatch = body.match(/^[\uD800-\uDBFF][\uDC00-\uDFFF]/gi);
		const listMatch = (global.listprefix || []).find((a) => body?.startsWith(a));
		const detectedPrefix = symbolMatch ? symbolMatch[0] : emojiMatch ? emojiMatch[0] : listMatch;
		let prefix = isCreator ? detectedPrefix || set.authorPrefix : set.multiprefix ? detectedPrefix || "¿" : listMatch || "¿";
		let isCmd = body.startsWith(prefix);
		let args = [];
		let command = "";

		if (isCmd) {
			command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase();
			args = body.trim().split(/ +/).slice(1);
		} else if (isButtonResponse && body) {
			isCmd = true;
			const cleanBody = detectedPrefix ? body.slice(detectedPrefix.length).trim() : body.trim();
			command = cleanBody.split(/ +/).shift().toLowerCase();
			args = cleanBody.split(/ +/).slice(1);
		}

			const filter = db?.filterKata?.[m.chat] || [];
			if (filter.some((k) => budy.toLowerCase().includes(k))) return;
			const aturan = aturanUji(db, m.chat, budy);
			if (aturan) return m.reply(aturan.balasan);
		if (!isCmd && m.isGroup && !m.key.fromMe && budy) {
			const atur = global.db?.groups?.[m.chat]?.autoReply || [];
			const cocok = atur.find((x) => budy.toLowerCase().includes(x.kata));
			if (cocok) return m.reply(cocok.balasan);
		}

		if (global.maintenance && !isCreator && isCmd) return m.reply(global.maintenancePesan || "Bot sedang dalam perbaikan. Silakan coba lagi nanti.");
		if (isCmd && !isCreator && Array.isArray(global.db?.globalBlacklist) && global.db.globalBlacklist.includes(command)) return m.reply(`Perintah .${command} sedang dinonaktifkan owner.`);

		const quoted = m.quoted ? m.quoted : m;
		const text = (global.q = args.join(" "));
		const otomasiHasil = [
			...jalankanEventNyata(db, isCmd ? "perintah" : "pesan", { sender: m.sender, chat: m.chat }),
			...evaluasiAturanNyata(db, { peristiwa: isCmd ? "perintah" : "pesan", command, role: isCreator ? "owner" : "semua", teks: budy, pengirim: m.sender, grup: m.chat }),
		];
		for (const a of otomasiHasil) if (a.tipe === "balas") m.reply(a.teks);
		const mime = (quoted.msg || quoted).mimetype || "";
		const qmsg = quoted.msg || quoted;
		const author = (set.author = global.author || "Nekonaruu");
		const packname = (set.packname = global.packname || "Bot WhatsApp");
		const botname = (set.botname = global.botname || "Rynn");
		const badWordsLower = getBadWordsLower();
		const now_dt = new Date();
		const tz_opt = { timeZone: global.timezone };
		const locale_day = now_dt.toLocaleDateString(global.locale, { ...tz_opt, weekday: "long" });
		const date = now_dt.toLocaleDateString("en-GB", tz_opt);
		const date_time = now_dt.toLocaleTimeString("en-GB", { ...tz_opt, hour12: false });
		const ucapanWaktu =
			date_time < "05:00:00"
				? "Selamat Pagi 🌉"
				: date_time < "11:00:00"
					? "Selamat Pagi 🌄"
					: date_time < "15:00:00"
						? "Selamat Siang 🏙"
						: date_time < "18:00:00"
							? "Selamat Sore 🌅"
							: date_time < "19:00:00"
								? "Selamat Sore 🌃"
								: date_time < "23:59:00"
									? "Selamat Malam 🌌"
									: "Selamat Malam 🌌";
		const time = Date.now();
		const time_now = new Date();
		const setv = pickRandom(global.listv);

		const isVip = isCreator || (db.users[m.sender] ? db.users[m.sender].vip : false);
		const isBan = isCreator || (db.users[m.sender] ? db.users[m.sender].ban : false);
		const isLimit = isCreator || (db.users[m.sender] ? db.users[m.sender].limit > 0 : false);
		const isPremium = isCreator || checkStatus(m.sender, premium) || false;
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false;

		let _fkontak;
		const fkontak = {
			get key() {
				return (_fkontak ??= {
					key: {
						remoteJid: "0@s.whatsapp.net",
						participant: "0@s.whatsapp.net",
						fromMe: false,
						id: "Rynn",
					},
					message: {
						contactMessage: {
							displayName: m.pushName || author,
							vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
							sendEphemeral: true,
						},
					},
				}).key;
			},
			get message() {
				return (_fkontak ??= {
					key: {
						remoteJid: "0@s.whatsapp.net",
						participant: "0@s.whatsapp.net",
						fromMe: false,
						id: "Rynn",
					},
					message: {
						contactMessage: {
							displayName: m.pushName || author,
							vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
							sendEphemeral: true,
						},
					},
				}).message;
			},
		};

		// Auto Set Bio
		if (set.autobio) {
			if (new Date() * 1 - set.status > 60000) {
				await sock.updateProfileStatus(`${sock.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`).catch((e) => {});
				set.status = new Date() * 1;
			}
		}

		// Set Mode
		if (!isCreator) {
			if (set.grouponly === set.privateonly) {
				if (!sock.public && !m.key.fromMe) return;
			} else if (set.grouponly) {
				if (!m.isGroup) return;
			} else if (set.privateonly) {
				if (m.isGroup) return;
			}

			// Whitelist Chats
			if (set.whitelistonly && sock.public && set.whitelist.length > 0 && !set.whitelist.includes(m.chat)) return;
		}

		// Auto Read
		if (m.message && m.key.remoteJid !== "status@broadcast") {
			if ((set.autoread && sock.public) || isCreator) {
				sock.readMessages([m.key]);
				if (set.log)
					console.log(
						chalk.black(
							chalk.whiteBright("[CHAT]:"),
							chalk.greenBright(`${locale_day} ${date} (${date_time})`),
							chalk.hex("#AF26EB")(m.key.id) + "\n" + chalk.hex("#00EAD3")(budy || m.type) + "\n" + chalk.cyanBright("[FROM]:"),
							chalk.yellowBright(m.pushName || (isCreator ? "Bot" : "Anonim")),
							chalk.hex("#FF449F")(m.sender.split("@")[0]),
							chalk.hex("#FF5700")(m.isGroup ? m.metadata.subject : m.chat.endsWith("@newsletter") ? "Newsletter" : "Private Chat"),
							chalk.blueBright("(" + m.chat + ")"),
						),
					);
				else
					console.log(
						chalk.black(
							chalk.bgWhite("[CHAT]:"),
							chalk.bgGreen(`${locale_day} ${date} (${date_time})`),
							chalk.bgHex("#AF26EB")(m.key.id) + "\n" + chalk.bgHex("#00EAD3")(budy || m.type) + "\n" + chalk.bgCyanBright("[FROM]:"),
							chalk.bgYellow(m.pushName || (isCreator ? "Bot" : "Anonim")),
							chalk.bgHex("#FF449F")(m.sender),
							chalk.bgHex("#FF5700")(m.isGroup ? m.metadata.subject : m.chat.endsWith("@newsletter") ? "Newsletter" : "Private Chat"),
							chalk.bgBlue("(" + m.chat + ")"),
						),
					);
			}
		}

		// Filter event type
		if (m.eventType && m.eventType !== "notify") return;

		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return;
			}

			// Anti Hidetag
			if (!m.key.fromMe && m.mentionedJid?.length === m.metadata.participants?.length && db.groups[m.chat].antihidetag && !isCreator && m.isBotAdmin && !m.isAdmin) {
				await sock.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.id,
						participant: m.sender,
					},
				});
				await m.reply("*Anti Hidetag Sedang Aktif❗*");
			}

			// Anti Tag Sw
			if (!m.key.fromMe && db.groups[m.chat].antitagsw && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (m.type === "groupStatusMentionMessage" || m.message?.groupStatusMentionMessage || m.message?.protocolMessage?.type === 25 || (Object.keys(m.message).length === 1 && Object.keys(m.message)[0] === "messageContextInfo")) {
					if (!db.groups[m.chat].tagsw[m.sender]) {
						db.groups[m.chat].tagsw[m.sender] = 1;
						await m.reply(`Grup ini terdeteksi ditandai dalam Status WhatsApp\n@${m.sender.split("@")[0]}, mohon untuk tidak menandai grup dalam status WhatsApp\nPeringatan ${db.groups[m.chat].tagsw[m.sender]}/5, akan dikick sewaktu waktu❗`);
					} else if (db.groups[m.chat].tagsw[m.sender] >= 5) {
						await sock.groupParticipantsUpdate(m.chat, [m.sender], "remove").catch((err) => m.reply(global.mess.fail));
						await m.reply(`@${m.sender.split("@")[0]} telah dikeluarkan dari grup\nKarena menandai grup dalam status WhatsApp sebanyak 5x`);
						delete db.groups[m.chat].tagsw[m.sender];
					} else {
						db.groups[m.chat].tagsw[m.sender] += 1;
						await m.reply(`Grup ini terdeteksi ditandai dalam Status WhatsApp\n@${m.sender.split("@")[0]}, mohon untuk tidak menandai grup dalam status WhatsApp\nPeringatan ${db.groups[m.chat].tagsw[m.sender]}/5, akan dikick sewaktu waktu❗`);
					}
				}
			}

			// Anti Toxic
			if (!m.key.fromMe && db.groups[m.chat].antitoxic && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (
					budy
						.toLowerCase()
						.split(/\s+/)
						.some((word) => badWordsLower.includes(word))
				) {
					await sock.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender,
						},
					});
					await sock.relayMessage(
						m.chat,
						{
							extendedTextMessage: {
								text: `Terdeteksi @${m.sender.split("@")[0]} Berkata Toxic\nMohon gunakan bahasa yang sopan.`,
								contextInfo: {
									mentionedJid: [m.key.participantAlt || m.sender],
									isForwarded: true,
									forwardingScore: 1,
									quotedMessage: { conversation: "*Anti Toxic❗*" },
									...m.key,
								},
							},
						},
						{},
					);
				}
			}

			// Anti Delete
			if (m.type === "protocolMessage" && m.msg?.type === 0 && db.groups[m.chat].antidelete /*&& !isCreator && m.isBotAdmin && !m.isAdmin*/) {
				if (store?.messages?.[m.chat]?.array) {
					const chats = global.loadMessage(m.chat, m.msg.key.id) || store.messages[m.chat].array.find((a) => a?.key?.id === m.msg.key.id);
					if (!chats?.message) return;
					const msgType = Object.keys(chats.message)[0];
					const msgContent = chats.message[msgType];
					if (msgContent.fileSha256 && msgContent.mediaKey) {
						msgContent.mediaKey = fixBytes(msgContent.mediaKey);
						msgContent.fileSha256 = fixBytes(msgContent.fileSha256);
						msgContent.fileEncSha256 = fixBytes(msgContent.fileEncSha256);
					}
					if (msgType !== "conversation")
						msgContent.contextInfo = {
							mentionedJid: chats.key.participant ? [chats.key.participant] : [],
							isForwarded: true,
							forwardingScore: 1,
							quotedMessage: { conversation: "*Anti Delete❗*" },
							...chats.key,
						};
					const pesan =
						msgType === "conversation"
							? {
									extendedTextMessage: {
										text: msgContent,
										contextInfo: {
											mentionedJid: chats.key.participant ? [chats.key.participant] : [],
											isForwarded: true,
											forwardingScore: 1,
											quotedMessage: { conversation: "*Anti Delete❗*" },
											...chats.key,
										},
									},
								}
							: { [msgType]: msgContent };
					await sock.relayMessage(m.chat, pesan, {});
				}
			}

			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match("chat.whatsapp.com/")) {
					await sock.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender,
						},
					});
					await sock.relayMessage(
						m.chat,
						{
							extendedTextMessage: {
								text: `Terdeteksi @${m.sender.split("@")[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`,
								contextInfo: {
									mentionedJid: [m.key.participantAlt || m.sender],
									isForwarded: true,
									forwardingScore: 1,
									quotedMessage: { conversation: "*Anti Link❗*" },
									...m.key,
								},
							},
						},
						{},
					);
				}
			}

			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 4500) {
					await sock.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender,
						},
					});
					await sock.relayMessage(
						m.chat,
						{
							extendedTextMessage: {
								text: `Terdeteksi @${m.sender.split("@")[0]} Mengirim Virtex..`,
								contextInfo: {
									mentionedJid: [m.key.participantAlt || m.sender],
									isForwarded: true,
									forwardingScore: 1,
									quotedMessage: { conversation: "*Anti Virtex❗*" },
									...m.key,
								},
							},
						},
						{},
					);
					await sock.groupParticipantsUpdate(m.chat, [m.sender], "remove");
				}
				if (m.msg?.nativeFlowMessage?.messageParamsJson?.length > 3500) {
					await sock.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender,
						},
					});
					await sock.relayMessage(
						m.chat,
						{
							extendedTextMessage: {
								text: `Terdeteksi @${m.sender.split("@")[0]} Mengirim Bug..`,
								contextInfo: {
									mentionedJid: [m.key.participantAlt || m.sender],
									isForwarded: true,
									forwardingScore: 1,
									quotedMessage: { conversation: "*Anti Bug❗*" },
									...m.key,
								},
							},
						},
						{},
					);
					await sock.groupParticipantsUpdate(m.chat, [m.sender], "remove");
				}
			}
		}

		// Filter Bot & Ban
		if (m.isBot) return;
		if (isBan && !isCreator) return;

		// Filter Set Api Key: hanya perintah yang benar-benar memakai API yang diblokir.
		// Perintah lokal (.rumus, .statistik, .kalkulator, dan sebagainya) tetap jalan tanpa key.
		if (isCmd && API_COMMANDS.has(command) && command !== "setapikey") {
			const currentKey = global.APIKeys && global.APIs ? global.APIKeys[global.APIs.naze] : "";
			if (!currentKey || currentKey === "YOUR_API_KEY" || !currentKey?.startsWith("nz-")) {
				return m.reply("Apikey Naze belum di-set.\nIsi NAZE_API_KEY di file .env (lihat .env.example), atau gunakan perintah\n.setapikey key_nya\n\nAmbil key di : https://naze.dev/profile");
			}
		}

		// Mengetik & Anti Spam & Hit
		if (sock.public && isCmd) {
			if (set.autotyping && !global.modeHemat && modeSekarang(global).typing) {
				await ketikDulu(sock, m.chat, { teks: typeof budy === "string" ? budy : "" });
			}
			if (!global.db.spamDeteksi) global.db.spamDeteksi = 0;
			if (global.rateLimitDetik > 0 && isCmd) {
				global.rateLimitState = global.rateLimitState || new Map();
				const kunciRate = m.chat + ":" + m.sender;
				const terakhirRate = global.rateLimitState.get(kunciRate) || 0;
				if (Date.now() - terakhirRate < global.rateLimitDetik * 1000) return m.reply(`Tunggu ${global.rateLimitDetik} detik sebelum perintah berikutnya.`);
				global.rateLimitState.set(kunciRate, Date.now());
				if (global.rateLimitState.size > 5000) global.rateLimitState.clear();
			}
			if (set.antispam && antiSpam.isFiltered(m.sender)) {
				global.db.spamDeteksi++;
				console.log(chalk.bgRed("[ SPAM ] : "), chalk.black(chalk.bgHex("#1CFFF7")(`From -> ${m.sender}`), chalk.bgHex("#E015FF")(` In ${m.isGroup ? m.chat : "Private Chat"}`)));
				return m.reply("「 ❗ 」Beri Jeda 5 Detik Per Command Kak");
			}

			// Kontrol akses per perintah: role, perintah dimatikan, dan cooldown.
			if (isCmd && command && !isCreator) {
				const cek = cekAkses({ db, chat: m.chat, sender: m.sender, command, isCreator, isAdmin: Boolean(m.isAdmin), isPremium, isVip });
				if (!cek.ok) return m.reply(cek.alasan);
			}
			if (isCmd && command && db.featureFlag && Object.prototype.hasOwnProperty.call(db.featureFlag, command) && !aktifFitur(db, command)) {
				return m.reply(`Fitur .${command} sedang tidak aktif.`);
			}
			if (isCmd && command && butuhPin(db.users[m.sender], command)) {
				const pin = (budy || "").match(/(?:^|\s)(?:pin|#)(\d{4,6})(?:\s|$)/i)?.[1];
				if (!pin || !cocokPin(db.users[m.sender], command, pin)) {
					logKeamanan(db, `pin gagal: ${command}`);
					return m.reply(`Perintah .${command} dikunci. Tambahkan pin <PIN> di akhir perintah.`);
				}
			}
			if (casesSet.has(command)) {
				cmdAdd(db.hit);
				cmdAddHit(db.hit, command);
				catatEvent(db, command);
				if (!db.users[m.sender]) db.users[m.sender] = {};
				if (db.users[m.sender]?.opsiPrivasi?.riwayat === false) return;
				catatLog(db, { level: "info", perintah: command, pengirim: m.sender });
				const riwayat = db.users[m.sender].riwayat || [];
				riwayat.push(command);
				db.users[m.sender].riwayat = riwayat.slice(-20);
				const tanggal = new Date().toISOString().slice(0, 10);
				const perTanggal = db.users[m.sender].riwayatTanggal || {};
				(perTanggal[tanggal] ||= []).push(command);
				perTanggal[tanggal] = perTanggal[tanggal].slice(-20);
				db.users[m.sender].riwayatTanggal = Object.fromEntries(Object.entries(perTanggal).slice(-30));
				const kategori = infoCommand(command)?.kategori || "";
				if (command === "daily") tandaiQuest(db, m.sender, "harian");
				else if (kategori === "EDUKASI") tandaiQuest(db, m.sender, "edukasi");
				else if (kategori === "GAME") tandaiQuest(db, m.sender, "game");
			}

			if (command && set.didyoumean) {
				const cmdInput = command.toLowerCase();
				let isCommandValid = casesSet.has(command);
				if (!isCommandValid) {
					let matches = [];
					for (const c of daftarCase) {
						let cmdTarget = c.kecil;
						let sim = similarity(cmdInput, cmdTarget);
						let lengthDiff = Math.abs(cmdInput.length - cmdTarget.length);
						let isStartsWith = cmdTarget.startsWith(cmdInput);
						if (((sim >= almost && lengthDiff <= 3) || isStartsWith) && cmdInput !== cmdTarget) {
							matches.push({
								name: c.asli,
								score: isStartsWith ? parseInt(sim * 100) + 10 : parseInt(sim * 100),
							});
						}
					}
					if (matches.length > 0) {
						matches.sort((a, b) => b.score - a.score);
						let topMatches = matches.slice(0, 5);
						let replyText = `Command Tidak Ditemukan!\nMungkin yang kamu maksud:\n`;
						for (let i = 0; i < topMatches.length; i++) {
							let finalScore = topMatches[i].score > 99 ? 99 : topMatches[i].score;
							replyText += `- ${prefix + topMatches[i].name} (Similarity: ${finalScore}%)\n`;
						}
						return m.reply(replyText.trim());
					}
				}
			}
		}

		if (isCmd && !isCreator) antiSpam.addFilter(m.sender);

		// Cmd Media
		let fileSha256;
		if (m.isMedia && m.msg.fileSha256 && db.cmd && m.msg.fileSha256.toString("base64") in db.cmd) {
			let hash = db.cmd[m.msg.fileSha256.toString("base64")];
			fileSha256 = hash.text;
		}

		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ["Wa'alaikumusalam", "Wa'alaikumusalam wr wb", "Wa'alaikumusalam Warohmatulahi Wabarokatuh"];
			m.reply(pickRandom(jwb_salam));
		}

		// TicTacToe
		let room = Object.values(tictactoe).find((room) => room.id && room.game && room.state && room.id.startsWith("tictactoe") && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == "PLAYING");
		if (room) {
			let now = Date.now();
			if (now - (room.lastMove || now) > 5 * 60 * 1000) {
				m.reply("Game Tic-Tac-Toe dibatalkan karena tidak ada aktivitas selama 5 menit.");
				delete tictactoe[room.id];
				return;
			}
			room.lastMove = now;
			let ok,
				isWin = false,
				isTie = false,
				isSurrender = false;
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return;
			isSurrender = !/^[1-9]$/.test(m.text);
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return true;
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply(
					{
						"-3": "Game telah berakhir",
						"-2": "Tidak valid",
						"-1": "Posisi Invalid",
						0: "Posisi Invalid",
					}[ok],
				);
				return true;
			}
			if (m.sender === room.game.winner) isWin = true;
			else if (room.game.board === 511) isTie = true;
			if (!(room.game instanceof TicTacToe)) {
				room.game = Object.assign(new TicTacToe(room.game.playerX, room.game.playerO), room.game);
			}
			let arr = room.game.render().map(
				(v) =>
					({
						X: "❌",
						O: "⭕",
						1: "1️⃣",
						2: "2️⃣",
						3: "3️⃣",
						4: "4️⃣",
						5: "5️⃣",
						6: "6️⃣",
						7: "7️⃣",
						8: "8️⃣",
						9: "9️⃣",
					})[v],
			);
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX;
				isWin = true;
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner;
			if (isWin) {
				db.users[m.sender].limit += 3;
				db.users[m.sender].money += 3000;
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join("")}\n${arr.slice(3, 6).join("")}\n${arr.slice(6).join("")}\n\n${isWin ? `@${winner.split("@")[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${["❌", "⭕"][1 * room.game._currentTurn]} (@${room.game.currentTurn.split("@")[0]})`}\n❌: @${room.game.playerX.split("@")[0]}\n⭕: @${room.game.playerO.split("@")[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`;
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat) room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
			if (room.x !== room.o) await sock.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m });
			await sock.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m });
			if (isTie || isWin) delete tictactoe[room.id];
		}

		// Suit PvP
		let roof = Object.values(suit).find((roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender));
		if (roof) {
			let now = Date.now();
			let win = "",
				tie = false;
			if (now - (roof.lastMove || now) > 3 * 60 * 1000) {
				m.reply("Game Suit dibatalkan karena tidak ada aktivitas selama 3 menit.");
				delete suit[roof.id];
				return;
			}
			roof.lastMove = now;
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == "wait") {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(`@${roof.p2.split("@")[0]} menolak suit,\nsuit dibatalkan`);
					delete suit[roof.id];
					return !0;
				}
				roof.status = "play";
				roof.asal = m.chat;
				m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split("@")[0]} dan @${roof.p2.split("@")[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split("@")[0]}`);
				if (!roof.pilih) sock.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m });
				if (!roof.pilih2) sock.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m });
			}
			let jwb = m.sender == roof.p,
				jwb2 = m.sender == roof.p2;
			let g = /gunting/i,
				b = /batu/i,
				k = /kertas/i,
				reg = /^(gunting|batu|kertas)/i;

			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ""}`);
				if (!roof.pilih2)
					sock.sendMessage(roof.p2, {
						text: "_Lawan sudah memilih_\nSekarang giliran kamu",
					});
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
				roof.text2 = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ""}`);
				if (!roof.pilih)
					sock.sendMessage(roof.p, {
						text: "_Lawan sudah memilih_\nSekarang giliran kamu",
					});
			}
			let stage = roof.pilih;
			let stage2 = roof.pilih2;
			if (roof.pilih && roof.pilih2) {
				if (b.test(stage) && g.test(stage2)) win = roof.p;
				else if (b.test(stage) && k.test(stage2)) win = roof.p2;
				else if (g.test(stage) && k.test(stage2)) win = roof.p;
				else if (g.test(stage) && b.test(stage2)) win = roof.p2;
				else if (k.test(stage) && b.test(stage2)) win = roof.p;
				else if (k.test(stage) && g.test(stage2)) win = roof.p2;
				else if (stage == stage2) tie = true;
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3;
				db.users[roof.p == win ? roof.p : roof.p2].money += tie ? 0 : 3000;
				sock.sendMessage(
					roof.asal,
					{
						text: `_*Hasil Suit*_${tie ? "\nSERI" : ""}\n\n@${roof.p.split("@")[0]} (${roof.text}) ${tie ? "" : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split("@")[0]} (${roof.text2}) ${tie ? "" : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(),
						mentions: [roof.p, roof.p2],
					},
					{ quoted: m },
				);
				delete suit[roof.id];
			}
		}

		// Tebak Bomb
		let pilih = "🌀",
			bomb = "💣";
		if (m.sender in tebakbom) {
			if (!/^(10|[1-9])$/i.test(body) && !isCmd && !isCreator) return !0;
			let index = parseInt(body) - 1;
			if (tebakbom[m.sender].petak[index] === 1 || tebakbom[m.sender].petak[index] === 3) return !0;
			if (tebakbom[m.sender].petak[index] === 2) {
				tebakbom[m.sender].petak[index] = 3;
				tebakbom[m.sender].board[index] = bomb;
				tebakbom[m.sender].pick++;
				m.react("❌");
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					m.react("😂");
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa.join("")}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[index] === 0) {
				tebakbom[m.sender].petak[index] = 1;
				tebakbom[m.sender].board[index] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].money += 6000;
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa.join("")}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Money 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa.join("")}\nBomb : ${tebakbom[m.sender].bomb}`);
			}
		}

		// Game
		const games = {
			tebaklirik,
			tekateki,
			tebaklagu,
			tebakkata,
			kuismath,
			susunkata,
			tebakkimia,
			caklontong,
			tebakangka,
			tebaknegara,
			tebakgambar,
			tebakbendera,
		};
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if ((!isCmd || isCreator) && m.quoted && id == m.quoted.id) {
				if (game[m.chat + id]?.jawaban) {
					if (gameName == "kuismath") {
						let jawaban = game[m.chat + id].jawaban;
						const difficultyMap = {
							noob: 1,
							easy: 1.5,
							medium: 2.5,
							hard: 4,
							extreme: 5,
							impossible: 6,
							impossible2: 7,
						};
						let randMoney = difficultyMap[kuismath[m.chat + id].mode];
						if (!isNaN(budy)) {
							if (budy.toLowerCase() == jawaban) {
								db.users[m.sender].money += randMoney * 1000;
								await m.reply(`Jawaban Benar 🎉\nBonus Money 💰 *+${randMoney * 1000}*`);
								delete kuismath[m.chat + id];
							} else m.reply("*Jawaban Salah!*");
						}
					} else {
						let jawaban = game[m.chat + id].jawaban;
						let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? similarity(budy.toLowerCase(), jawaban) >= almost : budy.toLowerCase() == jawaban;
						let bonus = gameName == "caklontong" ? 9999 : gameName == "tebaklirik" ? 4299 : gameName == "susunkata" ? 2989 : 3499;
						if (jawabBenar) {
							db.users[m.sender].money += bonus * 1;
							await m.reply(`Jawaban Benar 🎉\nBonus Money 💰 *+${bonus}*`);
							delete game[m.chat + id];
						} else m.reply("*Jawaban Salah!*");
					}
				}
			}
		}

		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat];
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, "");
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks);
				if (!isSurender) {
					let index = room.jawaban.findIndex((v) => v.toLowerCase().replace(/[^\w\s\-]+/, "") === teks);
					if (index === -1) return m.reply("Jawaban Salah!");
					if (room.terjawab[index]) return !0;
					room.terjawab[index] = m.sender;
				}
				let isWin = room.terjawab.length === room.terjawab.filter((v) => v).length;
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find((v) => v.includes(" ")) ? `(beberapa Jawaban Terdapat Spasi)` : ""}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? "Menyerah!" : ""}\n${Array.from(
					room.jawaban,
					(jawaban, index) => {
						return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? "@" + room.terjawab[index].split("@")[0] : ""}`.trim() : false;
					},
				)
					.filter((v) => v)
					.join("\n")}\n${isSurender ? "" : `Perfect Player`}`.trim();
				m.reply(caption);
				if (isWin || isSurender) delete family100[m.chat];
			}
		}

		// Chess
		const validPromotions = {
			q: "q",
			queen: "q",
			menteri: "q",
			r: "r",
			rook: "r",
			benteng: "r",
			b: "b",
			bishop: "b",
			gajah: "b",
			mentri: "b",
			n: "n",
			knight: "n",
			kuda: "n",
		};
		if ((!isCmd || isCreator) && m.sender in chess) {
			if (m.quoted && chess[m.sender].id == m.quoted.id && chess[m.sender].turn == m.sender && chess[m.sender].botMode) {
				if (!(chess[m.sender] instanceof Chess) || (chess[m.sender]._board && chess[m.sender]._board.some((v) => v === null))) {
					const savedData = chess[m.sender];
					chess[m.sender] = new Chess(savedData._fen || undefined);
					Object.assign(chess[m.sender], {
						id: savedData.id,
						turn: savedData.turn,
						botMode: savedData.botMode,
						time: savedData.time,
						_fen: savedData._fen,
					});
				}
				if (chess[m.sender].isCheckmate() || chess[m.sender].isDraw() || chess[m.sender].isGameOver()) {
					const status = chess[m.sender].isCheckmate() ? "Checkmate" : chess[m.sender].isDraw() ? "Draw" : "Game Over";
					delete chess[m.sender];
					return m.reply(`♟Game ${status}\nPermainan dihentikan`);
				}
				const [from, to, promotion] = budy.toLowerCase().split(" ");
				if (!from || !to || from.length !== 2 || to.length !== 2) return m.reply("Format salah! Gunakan: e2 e4\nAtau: c7 c8 q (untuk promosi)");
				const promo = validPromotions[promotion] || "q";
				try {
					chess[m.sender].move({ from, to, promotion: promo });
				} catch (e) {
					if (chess[m.sender].isCheck()) {
						return m.reply(`⚠️ Langkah Tidak Valid @${m.sender.split("@")[0]}!\n\nRaja tim kamu sedang di-SKAK! Fokus selamatkan raja dulu.`);
					}
					return m.reply("Langkah Tidak Valid!");
				}

				if (chess[m.sender].isGameOver()) {
					delete chess[m.sender];
					return m.reply(`♟Permainan Selesai\nPemenang: @${m.sender.split("@")[0]}`);
				}
				const aiResult = await getChessAI(chess[m.sender].fen(), 12);
				let botMove = null;
				if (aiResult) {
					try {
						botMove = chess[m.sender].move({ from: aiResult.from, to: aiResult.to, promotion: aiResult.promotion });
					} catch (e) {}
				}
				if (!botMove) {
					const moves = chess[m.sender].moves({ verbose: true });
					botMove = moves[Math.floor(Math.random() * moves.length)];
					chess[m.sender].move(botMove);
				}
				chess[m.sender]._fen = chess[m.sender].fen();
				chess[m.sender].time = Date.now();

				if (chess[m.sender].isGameOver()) {
					delete chess[m.sender];
					return m.reply(`♟Permainan Selesai\nPemenang: BOT`);
				}
				const evalCaption = aiResult ? `\n📊 Evaluasi: ${aiResult.scoreText}\n💡 Info AI: ${aiResult.evalText}\n` : "";
				const encodedFen = encodeURI(chess[m.sender]._fen);
				const boardUrls = [
					`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,
					`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,
					`https://chessboardimage.com/${encodedFen}.png`,
					`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765`,
					`https://fen2image.chessvision.ai/${encodedFen}/`,
				];
				for (let url of boardUrls) {
					try {
						const { data } = { data: await fetchBoardBuffer(url) };
						let { key } = await m.reply({
							image: data,
							caption: `♟️CHESS GAME (vs BOT)\n\nLangkahmu: ${from} → ${to}\nLangkah bot: ${botMove.from} → ${botMove.to}\n${evalCaption}\nGiliranmu berikutnya!\nExample: e2 e4\nKetik .chess hint untuk saran langkah!`,
							mentions: [m.sender],
						});
						if (chess[m.sender] && key) chess[m.sender].id = key.id;
						break;
					} catch (e) {}
				}
			} else if (chess[m.sender].time && Date.now() - chess[m.sender].time >= 3600000) {
				delete chess[m.sender];
				return m.reply(`♟Waktu Habis!\nPermainan dihentikan`);
			}
		}
		if (m.isGroup && (!isCmd || isCreator) && m.chat in chess) {
			if (m.quoted && chess[m.chat].id == m.quoted.id && [chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) {
				if (!(chess[m.chat] instanceof Chess) || (chess[m.chat]._board && chess[m.chat]._board.some((v) => v === null))) {
					const savedData = chess[m.chat];
					chess[m.chat] = new Chess(savedData._fen || undefined);
					Object.assign(chess[m.chat], {
						id: savedData.id,
						turn: savedData.turn,
						player1: savedData.player1,
						player2: savedData.player2,
						start: savedData.start,
						acc: savedData.acc,
						time: savedData.time,
						_fen: savedData._fen,
					});
				}
				if (chess[m.chat].isCheckmate() || chess[m.chat].isDraw() || chess[m.chat].isGameOver()) {
					const status = chess[m.chat].isCheckmate() ? "Checkmate" : chess[m.chat].isDraw() ? "Draw" : "Game Over";
					delete chess[m.chat];
					return m.reply(`♟Game ${status}\nPermainan dihentikan`);
				}
				const [from, to, promotion] = budy.toLowerCase().split(" ");
				if (!from || !to || from.length !== 2 || to.length !== 2) return m.reply("Format salah! Gunakan: e2 e4\nAtau: c7 c8 q (untuk promosi)");
				if ([chess[m.chat].player1, chess[m.chat].player2].includes(m.sender) && chess[m.chat].turn === m.sender) {
					const promo = validPromotions[promotion] || "q";
					try {
						chess[m.chat].move({ from, to, promotion: promo });
					} catch (e) {
						if (chess[m.chat].isCheck()) {
							return m.reply(`⚠️ Langkah Tidak Valid @${m.sender.split("@")[0]}!\n\nRaja tim kamu sedang di-SKAK! Fokus selamatkan raja dulu.`);
						}
						return m.reply("Langkah Tidak Valid!");
					}
					chess[m.chat].time = Date.now();
					chess[m.chat]._fen = chess[m.chat].fen();
					const isPlayer2 = chess[m.chat].player2 === m.sender;
					const nextPlayer = isPlayer2 ? chess[m.chat].player1 : chess[m.chat].player2;
					const encodedFen = encodeURI(chess[m.chat]._fen);
					const boardUrls = [
						`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside${!isPlayer2 ? "&flip=true" : ""}`,
						`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${!isPlayer2 ? "&flip=true" : ""}`,
						`https://chessboardimage.com/${encodedFen}${!isPlayer2 ? "-flip" : ""}.png`,
						`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765${!isPlayer2 ? "&orientation=black" : ""}`,
						`https://fen2image.chessvision.ai/${encodedFen}/${!isPlayer2 ? "?pov=black" : ""}`,
					];
					for (let url of boardUrls) {
						try {
							const { data } = { data: await fetchBoardBuffer(url) };
							let { key } = await m.reply({
								image: data,
								caption: `♟️CHESS GAME\n\nGiliran: @${nextPlayer.split("@")[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`,
								mentions: [nextPlayer],
							});
							chess[m.chat].turn = nextPlayer;
							if (chess[m.chat] && key) chess[m.chat].id = key.id;
							break;
						} catch (e) {}
					}
				}
			} else if (chess[m.chat].time && Date.now() - chess[m.chat].time >= 3600000) {
				delete chess[m.chat];
				return m.reply(`♟Waktu Habis!\nPermainan dihentikan`);
			}
		}

		// Ular Tangga
		if (m.isGroup && (!isCmd || isCreator) && m.chat in ulartangga) {
			if (m.quoted && ulartangga[m.chat].id == m.quoted.id) {
				if (!(ulartangga[m.chat] instanceof SnakeLadder)) {
					ulartangga[m.chat] = Object.assign(new SnakeLadder(ulartangga[m.chat]), ulartangga[m.chat]);
				}
				if (/^(roll|kocok)/i.test(budy.toLowerCase())) {
					const player = ulartangga[m.chat].players.findIndex((a) => a.id == m.sender);
					if (ulartangga[m.chat].turn !== player) return m.reply("Bukan Giliranmu!");
					const roll = ulartangga[m.chat].rollDice();
					await m.reply(`https://raw.githubusercontent.com/nazedev/database/master/games/images/dice/roll-${roll}.webp`);
					ulartangga[m.chat].nextTurn();
					ulartangga[m.chat].players[player].move += roll;
					if (ulartangga[m.chat].players[player].move > 100) ulartangga[m.chat].players[player].move = 100 - (ulartangga[m.chat].players[player].move - 100);
					let teks = `🐍🪜Warna: ${["Merah", "Biru Muda", "Kuning", "Hijau", "Ungu", "Jingga", "Biru Tua", "Putih"][player]} -> ${ulartangga[m.chat].players[player].move}\n`;
					if (Object.keys(ulartangga[m.chat].map.move).includes(ulartangga[m.chat].players[player].move.toString())) {
						teks += ulartangga[m.chat].players[player].move > ulartangga[m.chat].map.move[ulartangga[m.chat].players[player].move] ? "Kamu Termakan Ular!\n" : "Kamu Naik Tangga\n";
						ulartangga[m.chat].players[player].move = ulartangga[m.chat].map.move[ulartangga[m.chat].players[player].move];
					}
					const newMap = await ulartangga[m.chat].drawBoard(ulartangga[m.chat].map.url, ulartangga[m.chat].players);
					if (ulartangga[m.chat].players[player].move === 100) {
						teks += `@${m.sender.split("@")[0]} Menang\nHadiah:\n- Limit + 50\n- Money + 100.000`;
						addLimit(50, m.sender, db);
						addMoney(100000, m.sender, db);
						delete ulartangga[m.chat];
						return m.reply({
							image: newMap,
							caption: teks,
							mentions: [m.sender],
						});
					}
					let { key } = await m.reply({
						image: newMap,
						caption: teks + `Giliran: @${ulartangga[m.chat].players[ulartangga[m.chat].turn].id.split("@")[0]}`,
						mentions: [m.sender, ulartangga[m.chat].players[ulartangga[m.chat].turn].id],
					});
					if (ulartangga[m.chat] && key) ulartangga[m.chat].id = key.id;
				} else m.reply("Example: roll/kocok");
			} else if (ulartangga[m.chat].time && Date.now() - ulartangga[m.chat].time >= 7200000) {
				delete ulartangga[m.chat];
				return m.reply(`🐍🪜Waktu Habis!\nPermainan dihentikan`);
			}
		}

		// Werewolf 🐺
		if (global.db.game.werewolf[m.chat] && body.includes(global.db.game.werewolf[m.chat].createat)) {
			const pix = global.db.game.werewolf[m.chat].players.findIndex((p) => p.id === m.sender);
			if (pix !== -1 && body.includes(`@${global.db.game.werewolf[m.chat].players[pix].id.split("@")[0]}`)) {
				const player = global.db.game.werewolf[m.chat].players.splice(pix, 1)[0];
				global.db.game.werewolf[m.chat].eliminated.push(player);
				await sock.sendMessage(
					m.chat,
					{ text: `\`[ TERDETEKSI REVEAL ROLE ]\`\n\n*👤 Player:* @${player.id.split("@")[0]}\n*🎭 Role:* ${global.db.game.werewolf[m.chat].roles[player.id]}\n\nKamu terdeteksi reveal role dan akan di eliminasi oleh moderator.`, mentions: [player.id] },
					{ quoted: m },
				);
			}
		}

		// Menfes & Room Ai
		if (!m.isGroup && (!isCmd || isCreator)) {
			if (menfes[m.sender] && m.key.remoteJid !== "status@broadcast" && m.msg) {
				m.react("✈");
				if (m.type !== "conversation")
					m.msg.contextInfo = {
						isForwarded: true,
						forwardingScore: 1,
						quotedMessage: {
							conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : "Seseorang"}*`,
						},
						key: {
							remoteJid: "0@s.whatsapp.net",
							fromMe: false,
							participant: "0@s.whatsapp.net",
						},
					};
				const pesan =
					m.type === "conversation"
						? {
								extendedTextMessage: {
									text: m.msg,
									contextInfo: {
										isForwarded: true,
										forwardingScore: 1,
										quotedMessage: {
											conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : "Seseorang"}*`,
										},
										key: {
											remoteJid: "0@s.whatsapp.net",
											fromMe: false,
											participant: "0@s.whatsapp.net",
										},
									},
								},
							}
						: { [m.type]: m.msg };
				await sock.relayMessage(menfes[m.sender].tujuan, pesan, {});
			}
			if (chat_ai[m.sender] && m.key.remoteJid !== "status@broadcast") {
				if (!/^(del((room|c|hat)ai)|>|<$)$/i.test(command) && budy) {
					chat_ai[m.sender].push({ role: "user", content: budy });
					if (chat_ai[m.sender].length > 20) chat_ai[m.sender].shift();
					let hasil;
					try {
						hasil = await fetchApi(
							"/ai/chat4",
							{
								messages: chat_ai[m.sender],
								prompt: budy,
							},
							{ method: "POST" },
						);
					} catch (e) {
						hasil = "Gagal Mengambil Respon, Website sedang gangguan";
					}
					const response = hasil?.result?.message || "Maaf, saya tidak mengerti.";
					chat_ai[m.sender].push({ role: "assistant", content: response });
					if (chat_ai[m.sender].length > 20) chat_ai[m.sender].shift();
					await m.reply(response);
				}
			}
		}

		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
		for (let jid of mentionUser) {
			let user = db.users[jid];
			if (!user) continue;
			let afkTime = user.afkTime;
			if (!afkTime || afkTime < 0) continue;
			let reason = user.afkReason || "";
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? "dengan alasan " + reason : "tanpa alasan"}\nSelama ${clockString(new Date() - afkTime)}`.trim());
		}
		if (db.users[m.sender] && db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender];
			m.reply(`@${m.sender.split("@")[0]} berhenti AFK${user.afkReason ? " setelah " + user.afkReason : ""}\nSelama ${clockString(new Date() - user.afkTime)}`);
			user.afkTime = -1;
			user.afkReason = "";
		}

		switch (fileSha256 || command) {
			// Tempat Add Case
			case "shutdown":
			case "off":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					m.reply(`*[BOT] Process Shutdown...*`).then(() => {
						process.exit(0);
					});
				}
				break;
			case "update":
			case "upgrade":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					m.reply("*[BOT] Memproses update...*\nTunggu sampai proses selesai, lalu bot akan memulai ulang otomatis.").then(async () => {
						try {
							const hasil = await runUpdate();
							const bisaRestart = typeof process.send === "function";
							if (hasil !== false) {
								const pesan = bisaRestart
									? "*Update selesai.* Bot memulai ulang dengan versi terbaru..."
									: "*Update selesai.* Silakan mulai ulang bot secara manual (npm start).";
								m.reply(pesan).then(() => {
									if (bisaRestart) {
										setTimeout(() => {
											process.exit(1);
										}, 1500);
									}
								});
							} else {
								m.reply("*Update gagal.* Bot tetap memakai versi lama. Cek log konsol.");
							}
						} catch (e) {
							m.reply("*Update gagal.* Cek log konsol.");
						}
					});
				}
				break;
			case "setbio":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply(global.mess.text);
					sock.setStatus(text);
					m.reply(`*Bio telah di ganti menjadi ${text}*`);
				}
				break;
			case "setppbot":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!/image/.test(quoted.type)) return m.reply(`Reply Image With Caption ${prefix + command}`);
					let media = await quoted.download();
					let { img } = await generateProfilePicture(media, text.length > 0 ? null : 512);
					await sock.query({
						tag: "iq",
						attrs: {
							to: "@s.whatsapp.net",
							type: "set",
							xmlns: "w:profile:picture",
						},
						content: [{ tag: "picture", attrs: { type: "image" }, content: img }],
					});
					m.reply(global.mess.done);
				}
				break;
			case "delppbot":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					await sock.removeProfilePicture(sock.user.id);
					m.reply(global.mess.done);
				}
				break;
			case "version":
			case "versi":
			case "v":
				{
					const pkg = require("./package.json");
					m.reply(`Version : ${pkg.version}`);
				}
				break;
			case "setmenuimage":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let imageUrl = "";
					if (quoted && /image/.test(quoted.type)) {
						let mediaBuffer = await quoted.download();
						let uploadRes = await UguuSe(mediaBuffer, "jpg");
						imageUrl = uploadRes.url;
					} else {
						const teksnya = text ? text : m.quoted ? m.quoted.text : null;
						if (teksnya && (teksnya.startsWith("http://") || teksnya.startsWith("https://"))) {
							imageUrl = teksnya.trim();
						}
					}
					if (imageUrl) {
						await updateSettings({
							filePath: settingsPath,
							menuImage: imageUrl,
						});
						m.reply("Berhasil! Gambar menu telah diubah ke:\n" + imageUrl);
					} else {
						m.reply(`Kirim URL gambar yang valid atau reply sebuah gambar dengan caption ${prefix + command}`);
					}
				}
				break;
			case "addprefix":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await updateSettings({
							filePath: settingsPath,
							addPrefix: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} textnya`);
				}
				break;
			case "delprefix":
			case "removeprefix":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await updateSettings({
							filePath: settingsPath,
							removePrefix: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} textnya`);
				}
				break;
			case "listprefix":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					m.reply("List Prefix :\n" + global.listprefix.map((a) => "- " + a).join("\n"));
				}
				break;
			case "addtoxic":
			case "addbadword":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await updateSettings({
							filePath: settingsPath,
							addBadword: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} textnya`);
				}
				break;
			case "deltoxic":
			case "delbadword":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await updateSettings({
							filePath: settingsPath,
							removeBadword: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} textnya`);
				}
				break;
			case "listtoxic":
			case "listbadword":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					m.reply("List Bad Words :\n" + global.badWords.map((a) => "- " + a).join("\n"));
				}
				break;
			case "join":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply("Masukkan Link Group!");
					const urlWa = extractUrl(text, "chat.whatsapp.com");
					if (!urlWa || !urlWa.includes("whatsapp.com")) return m.reply("Link Invalid!");
					const result = urlWa.match(/chat\.whatsapp\.com\/([0-9A-Za-z]+)/);
					if (!result) return m.reply("Link Invalid❗");
					m.reply(global.mess.wait);
					await sock.groupAcceptInvite(result[1]).catch((res) => {
						if (res.data == 400) return m.reply("Grup Tidak Di Temukan❗");
						if (res.data == 401) return m.reply("Bot Di Kick Dari Grup Tersebut❗");
						if (res.data == 409) return m.reply("Bot Sudah Join Di Grup Tersebut❗");
						if (res.data == 410) return m.reply("Url Grup Telah Di Setel Ulang❗");
						if (res.data == 500) return m.reply("Grup Penuh❗");
					});
				}
				break;
			case "leave":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					await sock
						.groupLeave(m.chat)
						.then(() =>
							sock.sendFromOwner(ownerNumber, "Sukses Keluar Dari Grup", m, {
								contextInfo: { isForwarded: true },
							}),
						)
						.catch((e) => {});
				}
				break;
			case "clearchat":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					await sock
						.chatModify(
							{
								delete: true,
								lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }],
							},
							m.chat,
						)
						.catch((e) => m.reply("Gagal Menghapus Chat!"));
					m.reply(global.mess.done);
				}
				break;
			case "getmsgstore":
			case "storemsg":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let [teks1, teks2] = text.split`|`;
					if (teks1 && teks2) {
						const msgnya = await global.loadMessage(teks1, teks2);
						if (msgnya?.message) await sock.relayMessage(m.chat, msgnya.message, {});
						else m.reply("Pesan Tidak Ditemukan!");
					} else m.reply(`Example: ${prefix + command} 123xxx@g.us|3EB0xxx`);
				}
				break;
			case "blokir":
			case "block":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, "") + "@s.whatsapp.net" : m.quoted?.sender) : m.chat;
						await sock
							.updateBlockStatus(numbersOnly, "block")
							.then((a) => m.reply(global.mess.done))
							.catch((err) => m.reply(global.mess.fail));
					} else m.reply(`Example: ${prefix + command} 62xxx`);
				}
				break;
			case "listblock":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let anu = await sock.fetchBlocklist();
					m.reply(`Total Block : ${anu.length}\n` + anu.map((v) => "• " + v.replace(/@.+/, "")).join`\n`);
				}
				break;
			case "openblokir":
			case "unblokir":
			case "openblock":
			case "unblock":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, "") + "@s.whatsapp.net" : m.quoted?.sender) : m.chat;
						await sock
							.updateBlockStatus(numbersOnly, "unblock")
							.then((a) => m.reply(global.mess.done))
							.catch((err) => m.reply(global.mess.fail));
					} else m.reply(`Example: ${prefix + command} 62xxx`);
				}
				break;
			case "ban":
			case "banned":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text && !m.quoted && (!m.mentionedJid || !m.mentionedJid[0])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx`);
					const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
					const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
					if (db.users[nmrnya] && !db.users[nmrnya].ban) {
						db.users[nmrnya].ban = true;
						m.reply(global.mess.done);
					} else m.reply("User tidak terdaftar di database!");
				}
				break;
			case "unban":
			case "unbanned":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text && !m.quoted && (!m.mentionedJid || !m.mentionedJid[0])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx`);
					const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
					const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
					if (db.users[nmrnya] && db.users[nmrnya].ban) {
						db.users[nmrnya].ban = false;
						m.reply(global.mess.done);
					} else m.reply("User tidak terdaftar di database!");
				}
				break;
			case "mute":
			case "unmute":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!m.isGroup) return m.reply(global.mess.group);
					if (command == "mute") {
						db.groups[m.chat].mute = true;
						m.reply("Bot Telah Di Mute Di Grup Ini!");
					} else if (command == "unmute") {
						db.groups[m.chat].mute = false;
						m.reply(global.mess.done + " Unmute");
					}
				}
				break;
			case "whitelist":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply(`*Format Salah!*\n\nContoh penggunaan:\n- ${prefix + command} user list\n- ${prefix + command} user add 1,3\n- ${prefix + command} user del 1\n- ${prefix + command} group add 1,2\n- ${prefix + command} clear`);
					const botNumber = await sock.decodeJid(sock.user.id);
					if (!global.db.set[botNumber].whitelist) global.db.set[botNumber].whitelist = [];
					let whitelistArray = global.db.set[botNumber].whitelist;
					let type = args[0] ? args[0].toLowerCase() : "";
					let action = args[1] ? args[1].toLowerCase() : "";
					let targetNumbers = args[2];
					if (type === "user" || type === "group" || ["gc", "group", "grup"].includes(type)) {
						let dbTarget = type === "user" ? global.db.users : global.db.groups;
						let keys = Object.keys(dbTarget);
						if (keys.length === 0) return m.reply(`Belum ada data ${type} di database.`);
						if (action === "list") {
							let listText = `*Daftar ${type === "user" ? "User" : "Group"}:*\n\n`;
							keys.forEach((jid, index) => {
								let status = whitelistArray.includes(jid) ? "✅" : "❌";
								listText += `${index + 1}. ${type === "user" ? global.store?.contacts?.[jid]?.name || "-" : global.store?.groupMetadata?.[jid]?.subject || "-"} [${status}]\n- (${jid})\n`;
							});
							listText += `\n*Cara Penggunaan:*\nTambah: ${prefix + command} ${type} add 1,2,3\nHapus: ${prefix + command} ${type} del 1,2`;
							return m.reply(listText);
						} else if (action === "add" || action === "del" || action === "delete") {
							if (!targetNumbers) return m.reply(`Masukkan nomor urutnya!\nContoh: ${prefix + command} ${type} ${action} 1,2`);
							let processed = [];
							let inputNumbers = targetNumbers.split(",");
							for (let num of inputNumbers) {
								let index = parseInt(num.trim()) - 1;
								if (!isNaN(index) && keys[index]) {
									let targetJid = keys[index];
									if (action === "add") {
										if (!whitelistArray.includes(targetJid)) {
											whitelistArray.push(targetJid);
											processed.push(targetJid);
										}
									} else {
										let wlIndex = whitelistArray.indexOf(targetJid);
										if (wlIndex !== -1) {
											whitelistArray.splice(wlIndex, 1);
											processed.push(targetJid);
										}
									}
								}
							}
							if (processed.length > 0) {
								let statusText = action === "add" ? "menambahkan ke" : "menghapus dari";
								m.reply(`Sukses ${statusText} whitelist!\n\n*Total: ${processed.length} ${type}*\n- ${processed.join("\n- ")}`);
							} else {
								let failText = action === "add" ? "sudah ada di whitelist" : "tidak ada di whitelist";
								m.reply(`Gagal diproses. Pastikan angka sesuai di *${prefix + command} ${type} list* dan data target ${failText}.`);
							}
						} else m.reply(`Kirim dengan format yang benar.\nContoh:\n- ${prefix + command} ${type} add 1,2,3\n- ${prefix + command} ${type} del 1,2\n- ${prefix + command} ${type} list`);
					} else if (type === "clear") {
						global.db.set[botNumber].whitelist = [];
						m.reply("Semua data whitelist berhasil dihapus secara permanen!");
					} else m.reply(`Tipe tidak valid! Gunakan 'user', 'group', atau 'clear'.\nContoh: ${prefix + command} user list`);
				}
				break;
			case "addowner":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text && !m.quoted && (!m.mentionedJid || !m.mentionedJid[0])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx`);
					const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
					const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
					const onWa = await sock.onWhatsApp(nmrnya);
					if (!onWa.length > 0) return m.reply(global.mess.onWa);
					if (set?.owner) {
						if (set.owner.find((a) => nmrnya.includes(a))) return m.reply("Nomer Tersebut Sudah Ada Di Owner!");
						set.owner.push(nmrnya.split("@")[0]);
						await updateSettings({
							filePath: settingsPath,
							owner: set.owner,
						});
					}
					m.reply(global.mess.done);
				}
				break;
			case "delowner":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text && !m.quoted && (!m.mentionedJid || !m.mentionedJid[0])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx`);
					const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
					const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
					const onWa = await sock.onWhatsApp(nmrnya);
					if (!onWa.length > 0) return m.reply(global.mess.onWa);
					if (botNumber === nmrnya) return m.reply("Nomer Bot Tidak Boleh dihapus dari owner!");
					let list = set.owner;
					const index = list.findIndex((o) => o === nmrnya.split("@")[0]);
					if (index === -1) return m.reply("Owner tidak ditemukan di daftar!");
					list.splice(index, 1);
					await updateSettings({
						filePath: settingsPath,
						owner: set.owner,
					});
					m.reply(global.mess.done);
				}
				break;
			case "adduang":
			case "addmoney":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 1000`);
					if (args[1].length > 15) return m.reply("Jumlah Money Maksimal 15 digit angka!");
					const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/\D/g, "") ? args[0].replace(/\D/g, "") + "@s.whatsapp.net" : args[0].trim()) : m.quoted?.sender;
					const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
					const onWa = await sock.onWhatsApp(nmrnya);
					if (!onWa.length > 0) return m.reply(global.mess.onWa);
					if (db.users[nmrnya] && db.users[nmrnya].money >= 0) {
						addMoney(args[1], nmrnya, db);
						m.reply(global.mess.done);
					} else m.reply("User tidak terdaftar di database!");
				}
				break;
			case "addlimit":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`);
					if (args[1].length > 10) return m.reply("Jumlah Limit Maksimal 10 digit angka!");
					const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/\D/g, "") ? args[0].replace(/\D/g, "") + "@s.whatsapp.net" : args[0].trim()) : m.quoted?.sender;
					const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
					const onWa = await sock.onWhatsApp(nmrnya);
					if (!onWa.length > 0) return m.reply(global.mess.onWa);
					if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
						addLimit(args[1], nmrnya, db);
						m.reply(global.mess.done);
					} else m.reply("User tidak terdaftar di database!");
				}
				break;
			case "listpc":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let anu = Object.keys(store.messages).filter((a) => a.endsWith(".net") || a.endsWith("lid"));
					let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`;
					if (anu.length === 0) return m.reply(teks);
					for (let i of anu) {
						if (store.messages?.[i]?.array?.length) {
							let nama = await sock.getName(i);
							teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split("@")[0]}\n${setv} *Chat :* https://wa.me/${i.split("@")[0]}\n\n=====================\n\n`;
						}
					}
					await m.reply(teks);
				}
				break;
			case "listgc":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let anu = Object.keys(store.messages).filter((a) => a.endsWith("@g.us"));
					let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`;
					if (anu.length === 0) return m.reply(teks);
					for (let i of anu) {
						let metadata;
						try {
							metadata = store.groupMetadata[i];
						} catch (e) {
							metadata = store.groupMetadata[i] = await sock.groupMetadata(i).catch((e) => ({ ...store.groupMetadata[i] }));
						}
						teks += metadata?.subject
							? `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.ownerPn ? `@${metadata.ownerPn.split("@")[0]}` : "-"}\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${new Date(metadata.creation * 1000).toLocaleString("en-GB", { timeZone: global.timezone }).replace(",", "")}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
							: "";
					}
					await m.reply(teks);
				}
				break;
			case "creategc":
			case "buatgc":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply(`Example:\n${prefix + command} *Nama Gc*`);
					try {
						let group = await sock.groupCreate(q, [m.sender]);
						let res = await sock.groupInviteCode(group.id);
						await m.reply(`*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${group.subject}*\nSegera Masuk dalam 30 detik\nAgar menjadi Admin`, { detectLink: true });
						await sleep(30000);
						await sock.groupParticipantsUpdate(group.id, [m.sender], "promote").catch((e) => {});
						await sock.sendMessage(group.id, { text: global.mess.done }).catch((e) => {});
					} catch (e) {
						console.log(e);
						m.reply("Gagal membuat grup atau grup sudah tidak tersedia.");
					}
				}
				break;
			case "addsewa":
			case "sewa":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply(`Example:\n${prefix + command} https://chat.whatsapp.com/xxx | waktu\n${prefix + command} https://chat.whatsapp.com/xxx | 30 hari`);
					let [teks1, teks2] = text.split("|")?.map((x) => x.trim()) || [];
					const urlWa = extractUrl(teks1, "chat.whatsapp.com");
					if (!urlWa || !urlWa.includes("chat.whatsapp.com/")) return m.reply("Link Invalid!");
					const urlny = urlWa.match(/chat\.whatsapp\.com\/([0-9A-Za-z]+)/);
					if (!urlny) return m.reply("Link Invalid❗");
					try {
						await sock.groupAcceptInvite(urlny[1]);
					} catch (e) {
						if (e.data == 400) return m.reply("Grup Tidak Di Temukan❗");
						if (e.data == 401) return m.reply("Bot Di Kick Dari Grup Tersebut❗");
						if (e.data == 410) return m.reply("Url Grup Telah Di Setel Ulang❗");
						if (e.data == 500) return m.reply("Grup Penuh❗");
					}
					await sock
						.groupGetInviteInfo(urlny[1])
						.then((a) => {
							addExpired(
								{
									url: urlny[1],
									expired: (teks2?.replace(/[^0-9]/g, "") || 30) + "d",
									id: a.id,
								},
								sewa,
							);
							m.reply("Sukses Menambahkan Sewa Selama " + (teks2?.replace(/[^0-9]/g, "") || 30) + " hari\nOtomatis Keluar Saat Waktu Habis!");
						})
						.catch((e) => m.reply("Gagal Menambahkan Sewa!"));
				}
				break;
			case "delsewa":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply(`Example:\n${prefix + command} https://chat.whatsapp.com/xxxx\n Or \n${prefix + command} id_group@g.us`);
					let urlny;
					if (text.includes("chat.whatsapp.com/")) {
						urlny = text.match(/chat\.whatsapp\.com\/([0-9A-Za-z]+)/)[1];
					} else if (/@g\.us$/.test(text)) {
						urlny = text.trim();
					} else {
						return m.reply("Format tidak valid❗");
					}
					if (checkStatus(urlny, sewa)) {
						await m.reply(global.mess.done);
						await sock.groupLeave(getStatus(urlny, sewa).id).catch((e) => {});
						sewa.splice(getPosition(urlny, sewa), 1);
					} else m.reply(`${text} Tidak Terdaftar Di Database\nExample:\n${prefix + command} https://chat.whatsapp.com/xxxx\n Or \n${prefix + command} id_group@g.us`);
				}
				break;
			case "listsewa":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let txt = `*------「 LIST SEWA 」------*\n\n`;
					for (let s of sewa) {
						txt += `➸ *ID*: ${s.id}\n➸ *Url*: https://chat.whatsapp.com/${s.url}\n➸ *Expired*: ${formatDate(s.expired)}\n\n`;
					}
					m.reply(txt);
				}
				break;
			case "addpr":
			case "addprem":
			case "addpremium":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text && !m.quoted && (!m.mentionedJid || !m.mentionedJid[0])) return m.reply(`Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split("@")[0]}|30 hari`);
					let [teks1, teks2] = text ? text.split("|").map((x) => x.trim()) : [];
					const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : teks1 ? (teks1.replace(/\D/g, "") ? teks1.replace(/\D/g, "") + "@s.whatsapp.net" : teks1.trim()) : m.quoted?.sender;
					const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
					const onWa = await sock.onWhatsApp(nmrnya);
					if (!onWa.length > 0) return m.reply(global.mess.onWa);
					if (teks2) {
						if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
							addExpired({ id: nmrnya, expired: teks2.replace(/[^0-9]/g, "") + "d" }, premium);
							m.reply(`Sukses ${command} @${nmrnya.split("@")[0]} Selama ${teks2}`);
							db.users[nmrnya].limit += db.users[nmrnya].vip ? global.limit.vip : global.limit.premium;
							db.users[nmrnya].money += db.users[nmrnya].vip ? global.money.vip : global.money.premium;
						} else m.reply("Nomer tidak terdaftar di BOT !\nPastikan Nomer Pernah Menggunakan BOT!");
					} else m.reply(`Masukkan waktunya!\Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split("@")[0]}|30d\n_d = day_`);
				}
				break;
			case "delpr":
			case "delprem":
			case "delpremium":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text && !m.quoted && (!m.mentionedJid || !m.mentionedJid[0])) return m.reply(`Example:\n${prefix + command} @tag`);
					const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
					const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
					if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
						if (checkStatus(nmrnya, premium)) {
							premium.splice(getPosition(nmrnya, premium), 1);
							m.reply(`Sukses ${command} @${nmrnya.split("@")[0]}`);
							db.users[nmrnya].limit += db.users[nmrnya].vip ? global.limit.vip : global.limit.free;
							db.users[nmrnya].money += db.users[nmrnya].vip ? global.money.vip : global.money.free;
						} else m.reply(`User @${nmrnya.split("@")[0]} Bukan Premium❗`);
					} else m.reply("Nomer tidak terdaftar di BOT !");
				}
				break;
			case "listpr":
			case "listprem":
			case "listpremium":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let txt = `*------「 LIST PREMIUM 」------*\n\n`;
					for (let userprem of premium) {
						txt += `➸ *Nomer*: @${userprem.id.split("@")[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Money*: ${db.users[userprem.id].money.toLocaleString("id-ID")}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`;
					}
					m.reply(txt);
				}
				break;
			case "upsw":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const statusJidList = Object.keys(db.users);
					const backgroundColor =
						"#" +
						Math.floor(Math.random() * 16777215)
							.toString(16)
							.padStart(6, "0");
					try {
						if (quoted.isMedia) {
							let media = await sock.downloadAndSaveMediaMessage(qmsg);
							try {
								if (/image|video/.test(quoted.mime)) {
									await sock.sendMessage(
										"status@broadcast",
										{
											[`${quoted.mime.split("/")[0]}`]: { url: media },
											caption: text || m.quoted?.body || "",
										},
										{ statusJidList, broadcast: true },
									);
									m.react("✅");
								} else if (/audio/.test(quoted.mime)) {
									await sock.sendMessage(
										"status@broadcast",
										{
											audio: { url: media },
											mimetype: "audio/mp4",
											ptt: true,
										},
										{ backgroundColor, statusJidList, broadcast: true },
									);
									m.react("✅");
								} else m.reply("Only Support video/audio/image/text");
							} finally {
								if (fs.existsSync(media)) fs.unlinkSync(media);
							}
						} else if (quoted.text) {
							await sock.sendMessage(
								"status@broadcast",
								{ text: text || m.quoted?.body || "" },
								{
									textArgb: 0xffffffff,
									font: Math.floor(Math.random() * 9),
									backgroundColor,
									statusJidList,
									broadcast: true,
								},
							);
							m.react("✅");
						} else m.reply("Only Support video/audio/image/text");
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;
			case "addcase":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text || !text.startsWith("case")) return m.reply("Masukkan Casenya!");
					fs.readFile(__filename, "utf8", (err, data) => {
						if (err) {
							console.error("Terjadi kesalahan saat membaca file:", err);
							return;
						}
						const posisi = data.indexOf("case '19rujxl1e':");
						if (posisi !== -1) {
							const codeBaru = data.slice(0, posisi) + "\n" + `${text}` + "\n" + data.slice(posisi);
							fs.writeFile(__filename, codeBaru, "utf8", (err) => {
								if (err) {
									m.reply("Terjadi kesalahan saat menulis file: ", err);
								} else m.reply(global.mess.done);
							});
						} else m.reply(global.mess.fail);
					});
				}
				break;
			case "getcase":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply("Masukkan Nama Casenya!");
					try {
						const getCase = (cases) => {
							return (
								"case" +
								`'${cases}'` +
								fs
									.readFileSync(__filename)
									.toString()
									.split("case '" + cases + "'")[1]
									.split("break")[0] +
								"break"
							);
						};
						m.reply(`${getCase(text)}`);
					} catch (e) {
						m.reply(`case ${text} tidak ditemukan!`);
					}
				}
				break;
			case "delcase":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply("Masukkan Nama Casenya!");
					fs.readFile(__filename, "utf8", (err, data) => {
						if (err) {
							console.error("Terjadi kesalahan saat membaca file:", err);
							return;
						}
						const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, "g");
						const modifiedData = data.replace(regex, "");
						fs.writeFile(__filename, modifiedData, "utf8", (err) => {
							if (err) {
								console.log(err);
								m.reply(global.mess.fail);
							} else m.reply(global.mess.done);
						});
					});
				}
				break;
			case "backup":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					rotateBackups("./backup", 5);
					switch (args[0]) {
						case "all":
							try {
								fs.rmSync("./database/backup_all.tar.gz", { force: true });
							} catch {}
							let bekup = "./database/backup_all.tar.gz";
							tarBackup("./", bekup)
								.then(() => {
									return m.reply({
										document: fs.readFileSync(bekup),
										mimetype: "application/gzip",
										fileName: "backup_all.tar.gz",
									});
								})
								.catch((e) => m.reply("Gagal backup: ", +e));
							break;
						case "auto":
							if (set.autobackup) return m.reply("Sudah Aktif Sebelumnya!");
							set.autobackup = true;
							m.reply("Sukses Mengaktifkan Auto Backup");
							break;
						case "session":
							if (/^(mongodb|mysql|postgres|postgresql)/i.test(global.database?.path || "")) return m.reply("Backup session untuk database remote belum didukung.");
							{
								const dbPath = global.database?.path || "rynn-session";
								const credsFile = path.join(dbPath, "creds.json");
								if (!fs.existsSync(credsFile)) return m.reply("File kredensial sesi tidak ditemukan di " + credsFile);
								await m.reply({
									document: fs.readFileSync(credsFile),
									mimetype: "application/json",
									fileName: "creds.json",
								});
							}
							break;
						case "database":
							{
								const tglnya = new Date().toISOString().replace(/[:.]/g, "-");
								const dbPath = global.database?.path || "rynn-session";
								const isRemote = /^(mongodb|mysql|postgres|postgresql)/i.test(dbPath);
								let datanya = "./database/backup_database.json";
								try {
									if (isRemote) {
										fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), "utf-8");
									} else {
										datanya = path.join(process.cwd(), "database", dbPath + ".json");
										if (!fs.existsSync(datanya)) {
											fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), "utf-8");
										}
									}
									await m.reply({
										document: fs.readFileSync(datanya),
										mimetype: "application/json",
										fileName: tglnya + "_database.json",
									});
								} catch (e) {
									console.error("[backup]", e);
									m.reply("Gagal membuat backup database.");
								}
							}
							break;
						case "jadwal":
							{
								const jam = args[1];
								if (!/^\d{1,2}:\d{2}$/.test(jam || "")) return m.reply("Contoh: .backup jadwal 03:00");
								global.backupJam = jam;
								tulisAudit(db, m.sender, `backup jadwal ${jam}`);
								return m.reply(`Jadwal backup dicatat ${jam}. Eksekusi mengikuti cron harian bot.`);
							}
						default:
							m.reply("Gunakan perintah:\n- backup all\n- backup auto\n- backup session\n- backup database\n- backup jadwal <HH:MM>");
					}
				}
				break;
			case "getsession":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const dbPath = global.database?.path || "rynn-session";
					if (/^(mongodb|mysql|postgres|postgresql)/i.test(dbPath)) return m.reply("Backup session untuk database remote belum didukung.");
					const credsFile = path.join(dbPath, "creds.json");
					if (!fs.existsSync(credsFile)) return m.reply("File kredensial sesi tidak ditemukan di " + credsFile);
					await m.reply({
						document: fs.readFileSync(credsFile),
						mimetype: "application/json",
						fileName: "creds.json",
					});
				}
				break;
				break;
			case "deletesession":
			case "delsession":
				{
					if (!isCreator) return m.reply(global.mess.owner);
						const dbPath2 = global.database?.path || 'rynn-session';
					const isRemote2 = /^(mongodb|mysql|postgres|postgresql)/i.test(dbPath2);
					if (isRemote2) return m.reply('Hapus session untuk database remote belum didukung.');
					fs.readdir(dbPath2, async function (err, files) {
						if (err) {
							console.error("Tidak bisa memindai direktori: " + err);
							return m.reply("Tidak bisa memindai direktori: " + err);
						}
						let filteredArray = await files.filter((item) => ["session-", "pre-key", "sender-key", "app-state"].some((ext) => item.startsWith(ext)));
						let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`;
						if (filteredArray.length == 0) return m.reply(teks);
						filteredArray.map(function (e, i) {
							teks += i + 1 + `. ${e}\n`;
						});
						if (text && text == "true") {
							let { key } = await m.reply("Menghapus Session File..");
							await filteredArray.forEach(function (file) {
											fs.unlinkSync(path.join(dbPath2, file));
							});
							sleep(2000);
							m.reply("Berhasil Menghapus Semua Sampah Session", { edit: key });
						} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`);
					});
				}
				break;
			case "deletesampah":
			case "delsampah":
			case "deletetemp":
			case "deltemp":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					fs.readdir("./database/temp", async function (err, files) {
						if (err) {
							console.error("Tidak bisa memindai direktori: " + err);
							return m.reply("Tidak bisa memindai direktori: " + err);
						}
						let filteredArray = await files.filter((item) => ["gif", "png", "bin", "mp3", "mp4", "jpg", "webp", "webm", "opus", "jpeg"].some((ext) => item.endsWith(ext)));
						let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`;
						if (filteredArray.length == 0) return m.reply(teks);
						filteredArray.map(function (e, i) {
							teks += i + 1 + `. ${e}\n`;
						});
						if (text && text == "true") {
							let { key } = await m.reply("Menghapus Sampah File..");
							await filteredArray.forEach(function (file) {
								fs.unlinkSync("./database/temp/" + file);
							});
							sleep(2000);
							m.reply("Berhasil Menghapus Semua Sampah", { edit: key });
						} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`);
					});
				}
				break;
			case "setmessbot":
			case "setbotmessages":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const res = await fetchJson("https://raw.githubusercontent.com/nazedev/database/refs/heads/master/bot/lang.json");
					if (res.some((a) => a.lang === text)) {
						const selectedLang = res.find((a) => a.lang === text);
						await updateSettings({
							filePath: settingsPath,
							newMess: selectedLang.messages,
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} en\n*List Lang :*\n${res.map((a) => "- " + a.lang).join("\n")}`);
				}
				break;
			case "setlimitbot":
			case "setbotlimit":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (["free", "premium", "vip"].includes(args[0]) && !isNaN(args[1])) {
						await updateSettings({
							filePath: settingsPath,
							setLimitRole: { role: args[0], value: Number(args[1]) },
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} premium 10000\n*List Membership :*\n- free ${global.limit.free}\n- premium ${global.limit.premium}\n- vip ${global.limit.vip}`);
				}
				break;
			case "setmoneybot":
			case "setbotmoney":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (["free", "premium", "vip"].includes(args[0]) && !isNaN(args[1])) {
						await updateSettings({
							filePath: settingsPath,
							setMoneyRole: { role: args[0], value: Number(args[1]) },
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} premium 10000\n*List Membership :*\n- free ${global.money.free}\n- premium ${global.money.premium}\n- vip ${global.money.vip}`);
				}
				break;
			case "setnamebot":
			case "setbotname":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await updateSettings({
							filePath: settingsPath,
							botname: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} Rynn`);
				}
				break;
			case "setpacknamebot":
			case "setbotpackname":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await updateSettings({
							filePath: settingsPath,
							packname: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} By Rynn`);
				}
				break;
			case "setauthorbot":
			case "setbotauthor":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await updateSettings({
							filePath: settingsPath,
							author: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} Nekonaruu`);
				}
				break;
			case "setlocale":
			case "setlocalebot":
			case "setbotlocale":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						try {
							Intl.DateTimeFormat(teksnya);
						} catch {
							return m.reply("Locale tidak valid. Contoh yang benar: id, en, ja, dll.");
						}
						await updateSettings({
							filePath: settingsPath,
							locale: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} en`);
				}
				break;
			case "settimezone":
			case "settimezonebot":
			case "setbottimezone":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						if (!timez.includes(teksnya)) return m.reply("Timezone List:\n" + timez.map((a) => "- " + a).join("\n"));
						await updateSettings({
							filePath: settingsPath,
							timezone: teksnya.trim(),
						});
						m.reply(global.mess.done);
					} else m.reply(`Example: ${prefix + command} Asia/Jakarta`);
				}
				break;
			case "setapikey":
			case "setbotapikey":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply("Mana apikey nya?");
					if (args[0]?.toLowerCase() == "neo") {
						if (!args[1]?.startsWith("nsk_")) return m.reply("Apikey Tidak Valid!\nAmbil Apikey di : https://app.neosantara.xyz/api-keys");
						let old_key = global.APIKeys[global.APIs.neosantara];
						await updateSettings({
							filePath: settingsPath,
							neosantara: args[1].trim(),
						});
						const mask = (k) => (!k ? "-" : String(k).slice(0, 5) + "*****"); m.reply(`*Apikey Neosantara diganti (${mask(old_key)} -> ${mask(args[1].trim())})*`);
					} else {
						if (!text.startsWith("nz-")) return m.reply("Apikey Tidak Valid!\nAmbil Apikey di : https://naze.dev/profile");
						let old_key = global.APIKeys[global.APIs.naze];
						await updateSettings({
							filePath: settingsPath,
							apikey: text.trim(),
						});
						const mask = (k) => (!k ? "-" : String(k).slice(0, 5) + "*****"); m.reply(`*Apikey Naze diganti (${mask(old_key)} -> ${mask(text.trim())})*`);
					}
				}
				break;
			case "sc":
			case "script":
				{
					await m.reply(`https://github.com/nekonaru/rynnbot\nIni source codenya`, {
						title: author,
						body: "Subscribe My YouTube",
						...(global.fake.thumbnail ? { thumbnail: global.fake.thumbnail } : {}),
						mediaType: 2,
						mediaUrl: global.my.yt,
						sourceUrl: global.my.yt,
						contextInfo: {
							forwardingScore: 10,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: global.my.ch,
								serverMessageId: null,
								newsletterName: "Join For More Info",
							},
						},
					});
				}
				break;
			case "donasi":
			case "donate":
				{
					m.reply(`Dukung Rynn supaya terus dikembangkan:\n\n☕ Saweria: https://saweria.co/nekonaruu\n💰 Sociabuzz: https://sociabuzz.com/nekonaru/donate\n🎁 Bagibagi: https://bagibagi.co/Nekonaru\n🐙 GitHub Sponsors: https://github.com/sponsors/nekonaru`);
				}
				break;
			case "author":
				{
					m.reply(`*Author & Proyek Rynn*\n\nPembuat: Nekonaruu (github.com/nekonaru)\nRepositori: https://github.com/nekonaru/rynnbot\nLisensi: MIT\n\nDukungan:\nGitHub Sponsors: https://github.com/sponsors/nekonaru\nSaweria: https://saweria.co/nekonaruu\nSociabuzz: https://sociabuzz.com/nekonaru/donate\nBagibagi: https://bagibagi.co/Nekonaru\n\nChannel WhatsApp: ${global.my.ch}\nKetik .donasi untuk semua dukungan.`);
				}
				break;
			case "repo":
				{
					m.reply(`Repositori Rynn:\nhttps://github.com/nekonaru/rynnbot\n\nRilis dan catatan pembaruan:\nhttps://github.com/nekonaru/rynnbot/releases`);
				}
				break;
			case "channel":
				{
					m.reply(`Channel WhatsApp resmi Rynn:\n${global.my.ch}`);
				}
				break;

			// Group Menu
			case "add":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (text || m.quoted || (m.mentionedJid && m.mentionedJid[0])) {
						const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
						const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
						try {
							await sock.groupParticipantsUpdate(m.chat, [nmrnya], "add").then(async (res) => {
								for (let i of res) {
									let invv = await sock.groupInviteCode(m.chat);
									const statusMessages = {
										200: `Berhasil menambahkan @${nmrnya.split("@")[0]} ke grup!`,
										401: "Dia Memblokir Bot!",
										409: "Dia Sudah Join!",
										500: "Grup Penuh!",
									};
									if (statusMessages[i.status]) {
										return m.reply(statusMessages[i.status]);
									} else if (i.status == 408) {
										await m.reply(`@${nmrnya.split("@")[0]} Baru-Baru Saja Keluar Dari Grub Ini!\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${nmrnya.replace(/\D/g, "")}\nMelalui Jalur Pribadi`);
										await m
											.reply(`${"https://chat.whatsapp.com/" + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split("@")[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, {
												detectLink: true,
												chat: nmrnya,
												quoted: fkontak,
											})
											.catch((err) => m.reply("Gagal Mengirim Undangan!"));
									} else if (i.status == 403) {
										let a = i.content.content[0].attrs;
										await sock.sendGroupInviteV4(m.chat, nmrnya, a.code, a.expiration, m.metadata.subject, `Admin: @${m.sender.split("@")[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, null, { mentions: [m.sender] });
										await m.reply(`@${nmrnya.split("@")[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${nmrnya.replace(/\D/g, "")}\nMelalui Jalur Pribadi`);
									} else m.reply("Gagal Add User\nStatus : " + i.status);
								}
							});
						} catch (e) {
							m.reply(global.mess.fail);
						}
					} else m.reply(`Example: ${prefix + command} 62xxx`);
				}
				break;
			case "kick":
			case "dor":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (text || m.quoted || (m.mentionedJid && m.mentionedJid[0])) {
						const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
						const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
						await sock.groupParticipantsUpdate(m.chat, [nmrnya], "remove").catch((err) => m.reply(global.mess.fail));
					} else m.reply(`Example: ${prefix + command} 62xxx`);
				}
				break;
			case "promote":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (text || m.quoted || (m.mentionedJid && m.mentionedJid[0])) {
						const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
						const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
						await sock.groupParticipantsUpdate(m.chat, [nmrnya], "promote").catch((err) => m.reply(global.mess.fail));
					} else m.reply(`Example: ${prefix + command} 62xxx`);
				}
				break;
			case "demote":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (text || m.quoted || (m.mentionedJid && m.mentionedJid[0])) {
						const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
						const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
						await sock.groupParticipantsUpdate(m.chat, [nmrnya], "demote").catch((err) => m.reply(global.mess.fail));
					} else m.reply(`Example: ${prefix + command} 62xxx`);
				}
				break;
			case "warn":
			case "warning":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (text || m.quoted || (m.mentionedJid && m.mentionedJid[0])) {
						const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
						const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
						if (!db.groups[m.chat].warn[nmrnya]) {
							db.groups[m.chat].warn[nmrnya] = 1;
							m.reply("Warning 1/4, akan dikick sewaktu waktu❗");
						} else if (db.groups[m.chat].warn[nmrnya] >= 3) {
							await sock.groupParticipantsUpdate(m.chat, [nmrnya], "remove").catch((err) => m.reply(global.mess.fail));
							delete db.groups[m.chat].warn[nmrnya];
						} else {
							db.groups[m.chat].warn[nmrnya] += 1;
							m.reply(`Warning ${db.groups[m.chat].warn[nmrnya]}/4, akan dikick sewaktu waktu❗`);
						}
					} else m.reply(`Example: ${prefix + command} 62xxx`);
				}
				break;
			case "unwarn":
			case "delwarn":
			case "unwarning":
			case "delwarning":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (text || m.quoted || (m.mentionedJid && m.mentionedJid[0])) {
						const target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender ? m.quoted.sender : text ? (text.replace(/\D/g, "") ? text.replace(/\D/g, "") + "@s.whatsapp.net" : text.trim()) : null;
						const nmrnya = target?.endsWith("@lid") ? sock.findJidByLid(target, store, true) : target;
						if (db.groups[m.chat]?.warn?.[nmrnya]) {
							delete db.groups[m.chat].warn[nmrnya];
							m.reply("Berhasil Menghapus Warning!");
						}
					} else m.reply(`Example: ${prefix + command} 62xxx`);
				}
				break;
			case "setname":
			case "setnamegc":
			case "setsubject":
			case "setsubjectgc":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await sock.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply(global.mess.fail));
					} else m.reply(`Example: ${prefix + command} textnya`);
				}
				break;
			case "setdesc":
			case "setdescgc":
			case "setdesk":
			case "setdeskgc":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (text || m.quoted) {
						const teksnya = text ? text : m.quoted.text;
						await sock.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply(global.mess.fail));
					} else m.reply(`Example: ${prefix + command} textnya`);
				}
				break;
			case "setppgroups":
			case "setppgrup":
			case "setppgc":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (!m.quoted) return m.reply("Reply Gambar yang mau dipasang di Profile Bot");
					if (!/image/.test(quoted.type)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`);
					let media = await quoted.download();
					let { img } = await generateProfilePicture(media, text.length > 0 ? null : 512);
					await sock.query({
						tag: "iq",
						attrs: {
							target: m.chat,
							to: "@s.whatsapp.net",
							type: "set",
							xmlns: "w:profile:picture",
						},
						content: [{ tag: "picture", attrs: { type: "image" }, content: img }],
					});
					m.reply(global.mess.done);
				}
				break;
			case "delete":
			case "del":
			case "d":
				{
					if (!m.quoted) return m.reply(global.mess.quoted);
					await sock.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: m.isBotAdmin ? false : true,
							id: m.quoted.id,
							participant: m.quoted.sender,
						},
					});
				}
				break;
			case "pin":
			case "unpin":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					await sock.sendMessage(m.chat, {
						pin: {
							type: command == "pin" ? 1 : 0,
							time: 2592000,
							key: m.quoted ? m.quoted.key : m.key,
						},
					});
				}
				break;
			case "linkgroup":
			case "linkgrup":
			case "linkgc":
			case "urlgroup":
			case "urlgrup":
			case "urlgc":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					let response = await sock.groupInviteCode(m.chat);
					await m.reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${(store.groupMetadata[m.chat] ? store.groupMetadata[m.chat] : (store.groupMetadata[m.chat] = await sock.groupMetadata(m.chat).catch((e) => ({ ...store.groupMetadata[m.chat] })))).subject}`, {
						detectLink: true,
					});
				}
				break;
			case "revoke":
			case "newlink":
			case "newurl":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					await sock
						.groupRevokeInvite(m.chat)
						.then((a) => {
							m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`);
						})
						.catch((err) => m.reply(global.mess.fail));
				}
				break;
			case "group":
			case "grup":
			case "gc":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					let set = db.groups[m.chat];
					switch (args[0]?.toLowerCase()) {
						case "close":
						case "open":
							await sock.groupSettingUpdate(m.chat, args[0] == "close" ? "announcement" : "not_announcement").then((a) => m.reply(`*Sukses ${args[0] == "open" ? "Membuka" : "Menutup"} Group*`));
							break;
						case "join":
							const _list = await sock.groupRequestParticipantsList(m.chat).then((a) => a.map((b) => b.jid));
							if (/(a(p|pp|cc)|(ept|rove))|true|ok/i.test(args[1]) && _list.length > 0) {
								await sock.groupRequestParticipantsUpdate(m.chat, _list, "approve").catch((e) => m.react("❌"));
							} else if (/reject|false|no/i.test(args[1]) && _list.length > 0) {
								await sock.groupRequestParticipantsUpdate(m.chat, _list, "reject").catch((e) => m.react("❌"));
							} else m.reply(`List Request Join :\n${_list.length > 0 ? "- @" + _list.join("\n- @").split("@")[0] : "*Nothing*"}\nExample : ${prefix + command} join acc/reject`);
							break;
						case "pesansementara":
						case "disappearing":
							if (/90|7|1|24|on/i.test(args[1])) {
								sock.sendMessage(m.chat, {
									disappearingMessagesInChat: /90/i.test(args[1]) ? 7776000 : /7/i.test(args[1]) ? 604800 : 86400,
								});
							} else if (/0|off|false/i.test(args[1])) {
								sock.sendMessage(m.chat, { disappearingMessagesInChat: 0 });
							} else m.reply("Silahkan Pilih :\n90 hari, 7 hari, 1 hari, off");
							break;
						case "antilink":
						case "antivirtex":
						case "antidelete":
						case "welcome":
						case "antitoxic":
						case "waktusholat":
						case "nsfw":
						case "antihidetag":
						case "setinfo":
						case "antitagsw":
						case "leave":
						case "promote":
						case "demote":
							if (/on|true/i.test(args[1])) {
								if (set[args[0]]) return m.reply("*Sudah Aktif Sebelumnya*");
								set[args[0]] = true;
								m.reply("*Sukses Mengubah ke Aktif*");
							} else if (/off|false/i.test(args[1])) {
								set[args[0]] = false;
								m.reply("*Sukses Mengubah ke Nonaktif*");
							} else m.reply(`❗${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`);
							break;
						case "setwelcome":
						case "setleave":
						case "setpromote":
						case "setdemote":
							if (args[1]) {
								set.text[args[0]] = args.slice(1).join(" ");
								m.reply(`Sukses Mengubah ${args[0].split("set")[1]} Menjadi:\n${set.text[args[0]]}`);
							} else
								m.reply(
									`Example:\n${prefix + command} ${args[0]} Isi Pesannya\n\nMisal Dengan tag:\n${prefix + command} ${args[0]} Kepada @\nMaka akan Menjadi:\nKepada @0\n\nMisal dengan Tag admin:\n${prefix + command} ${args[0]} Dari @admin untuk @\nMaka akan Menjadi:\nDari @${m.sender.split("@")[0]} untuk @0\n\nMisal dengan Nama grup:\n${prefix + command} ${args[0]} Dari @admin untuk @ di @subject\nMaka akan Menjadi:\nDari @${m.sender.split("@")[0]} untuk @0 di ${m.metadata.subject}`,
									{ mentions: ["0@s.whatsapp.net"] },
								);
							break;
						default:
							m.reply(
								`Settings Group ${m.metadata.subject}\n- open\n- close\n- join acc/reject\n- disappearing 90/7/1/off\n- antilink on/off ${set.antilink ? "🟢" : "🔴"}\n- antivirtex on/off ${set.antivirtex ? "🟢" : "🔴"}\n- antidelete on/off ${set.antidelete ? "🟢" : "🔴"}\n- welcome on/off ${set.welcome ? "🟢" : "🔴"}\n- leave on/off ${set.leave ? "🟢" : "🔴"}\n- promote on/off ${set.promote ? "🟢" : "🔴"}\n- demote on/off ${set.demote ? "🟢" : "🔴"}\n- setinfo on/off ${set.setinfo ? "🟢" : "🔴"}\n- nsfw on/off ${set.nsfw ? "🟢" : "🔴"}\n- waktusholat on/off ${set.waktusholat ? "🟢" : "🔴"}\n- antihidetag on/off ${set.antihidetag ? "🟢" : "🔴"}\n- antitoxic on/off ${set.antitoxic ? "🟢" : "🔴"}\n- antitagsw on/off ${set.antitagsw ? "🟢" : "🔴"}\n\n- setwelcome _textnya_\n- setleave _textnya_\n- setpromote _textnya_\n- setdemote _textnya_\n\nExample:\n${prefix + command} antilink off`,
							);
					}
				}
				break;
			case "tagall":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					let setv = pickRandom(global.listv);
					let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ""}\n\n`;
					let participants = m.metadata?.participants || [];
					if (participants.length === 0) return m.reply("Data member grup tidak tersedia! Harap coba lagi nanti.");
					for (let mem of participants) {
						const memPn = mem.phoneNumber || mem.id || "";
						teks += `${setv} @${memPn.split("@")[0]}\n`;
					}
					await m.reply(teks, {
						mentions: participants.map((a) => a.phoneNumber || a.id).filter(Boolean),
					});
				}
				break;
			case "hidetag":
			case "h":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					let participants = m.metadata?.participants || [];
					if (participants.length === 0) return m.reply("Data member grup tidak tersedia! Harap coba lagi nanti.");
					await m.reply(q ? q : "", {
						mentions: participants.map((a) => a.phoneNumber || a.id).filter(Boolean),
					});
				}
				break;
			case "totag":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					if (!m.quoted) return m.reply(global.mess.quoted);
					delete m.quoted.chat;
					let participants = m.metadata?.participants || [];
					if (participants.length === 0) return m.reply("Data member grup tidak tersedia! Harap coba lagi nanti.");
					await sock.sendMessage(m.chat, {
						forward: m.quoted.fakeObj(),
						mentions: participants.map((a) => a.phoneNumber || a.id).filter(Boolean),
					});
				}
				break;
			case "listonline":
			case "liston":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
					if (!store.presences || !store.presences[id]) return m.reply("Sedang Tidak ada yang online!");
					const groupPresences = store.presences[id];
					const metadata = store.groupMetadata[id];
					let list_online = [];
					if (metadata && metadata.participants) {
						for (const p of metadata.participants) {
							if (groupPresences[p.id]) {
								list_online.push(p.phoneNumber || p.id);
							}
						}
					}
					if (!list_online.includes(botNumber)) {
						list_online.push(botNumber);
					}
					if (list_online.length === 0) return m.reply("Sedang tidak ada yang online!");
					let textReply = "*List Online:*\n\n" + list_online.map((v) => setv + " @" + (v ? v.split("@")[0] : "")).join("\n");
					await m.reply(textReply, { mentions: list_online }).catch(() => m.reply("Gagal menampilkan list online.."));
				}
				break;
			case "totalpesan":
			case "totalchat":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!m.isAdmin) return m.reply(global.mess.admin);
					if (!m.isBotAdmin) return m.reply(global.mess.botAdmin);
					let messageCount = {};
					let messages = store?.messages[m.chat]?.array || [];
					let participants = (m?.metadata?.participants?.map((p) => p.phoneNumber || p.id) || store?.messages[m.chat]?.array?.map((p) => p.key.participantAlt) || []).filter((p) => p);
					messages.forEach((mes) => {
						if (mes.key?.participantAlt && mes.message) {
							messageCount[mes.key.participantAlt] = (messageCount[mes.key.participantAlt] || 0) + 1;
						}
					});
					let totalMessages = Object.values(messageCount).reduce((a, b) => a + b, 0);
					let date = new Date().toLocaleDateString("id-ID");
					let zeroMessageUsers = participants.filter((user) => !messageCount[user]).map((user) => `- @${user.replace(/[^0-9]/g, "")}`);
					let messageList = Object.entries(messageCount).map(([sender, count], index) => `${index + 1}. @${sender.replace(/[^0-9]/g, "")}: ${count} Pesan`);
					let result = `Total Pesan ${totalMessages} dari ${participants.length} anggota\nPada tanggal ${date}:\n${messageList.join("\n")}\n\nNote: ${text.length > 0 ? `\n${zeroMessageUsers.length > 0 ? `Sisa Anggota yang tidak mengirim pesan (Sider):\n${zeroMessageUsers.join("\n")}` : "Semua anggota sudah mengirim pesan!"}` : `\nCek Sider? ${prefix + command} --sider`}`;
					m.reply(result);
				}
				break;

			// Bot Menu
			case "owner":
			case "listowner":
				{
					await sock.sendContact(m.chat, ownerNumber, m);
				}
				break;
			case "profile":
			case "cek":
				{
					const infoUser = db.users[m.sender];
					await m.reply(
						`*👤Profile @${m.sender.split("@")[0]} :*\n🐋User Bot : ${infoUser ? "True" : "False"}\n🔥User : ${isVip ? "VIP" : isPremium ? "PREMIUM" : "FREE"}${isPremium ? `\n⏳Expired : ${checkStatus(m.sender, premium) ? formatDate(getExpired(m.sender, db.premium)) : "-"}` : ""}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.money.toLocaleString("id-ID") : "0"}`,
					);
				}
				break;
			case "leaderboard":
				{
					const entries = Object.entries(db.users)
						.sort((a, b) => b[1].money - a[1].money)
						.slice(0, 10)
						.map((entry) => entry[0]);
					let teksnya = "╭──❍「 *LEADERBOARD* 」❍\n";
					for (let i = 0; i < entries.length; i++) {
						teksnya += `│• ${i + 1}. @${entries[i].split("@")[0]}\n│• Balance : ${db.users[entries[i]].money.toLocaleString("id-ID")}\n│\n`;
					}
					m.reply(teksnya + "╰──────❍");
				}
				break;
			case "req":
			case "request":
				{
					if (!text) return m.reply("Mau Request apa ke Owner?");
					await m.reply(`*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_`);
					await sock.sendFromOwner(ownerNumber, `Pesan Dari : @${m.sender.split("@")[0]}\nUntuk Owner\n\nRequest ${text}`, m, {
						contextInfo: { mentionedJid: [m.sender], isForwarded: true },
					});
				}
				break;
			case "totalfitur":
				{
					const total = (
						fs
							.readFileSync(__filename)
							.toString()
							.match(/case "/g) || []
					).length;
					m.reply(`Total Fitur : ${total}`);
				}
				break;
			case "daily":
			case "claim":
				{
					daily(m, db);
				}
				break;
			case "transfer":
			case "tf":
				{
					transfer(m, args, db);
				}
				break;
			case "buy":
				{
					buy(m, args, db);
				}
				break;
			case "react":
				{
					sock.sendMessage(m.chat, {
						react: { text: args[0], key: m.quoted ? m.quoted.key : m.key },
					});
				}
				break;
			case "tagme":
				{
					m.reply(`@${m.sender.split("@")[0]}`, { mentions: [m.sender] });
				}
				break;
			case "runtime":
			case "tes":
			case "bot":
				{
					if (!args[0] && !args[1]) return m.reply(`*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`);
					switch (args[0]) {
						case "mode":
						case "public":
						case "self":
							if (!isCreator) return m.reply(global.mess.owner);
							if (args[1] == "public" || args[1] == "all") {
								if (sock.public && set.grouponly && set.privateonly) return m.reply("*Sudah Aktif Sebelumnya*");
								sock.public = set.public = true;
								set.grouponly = true;
								set.privateonly = true;
								m.reply("*Sukses Mengubah ke Mode Publik*");
							} else if (args[1] == "self") {
								set.grouponly = false;
								set.privateonly = false;
								sock.public = set.public = false;
								m.reply("*Sukses Mengubah ke Mode Diri Sendiri*");
							} else if (args[1] == "group") {
								set.grouponly = true;
								set.privateonly = false;
								m.reply("*Sukses Mengubah ke Hanya Grup*");
							} else if (args[1] == "private") {
								set.grouponly = false;
								set.privateonly = true;
								m.reply("*Sukses Mengubah ke Hanya Private*");
							} else m.reply("Mode self/public/group/private/all");
							break;
						case "log":
						case "anticall":
						case "autobio":
						case "autoread":
						case "autotyping":
						case "readsw":
						case "multiprefix":
						case "antispam":
						case "didyoumean":
							if (!isCreator) return m.reply(global.mess.owner);
							if (args[1] == "on") {
								if (set[args[0]]) return m.reply("*Sudah Aktif Sebelumnya*");
								set[args[0]] = true;
								m.reply("*Sukses Mengubah ke Aktif*");
							} else if (args[1] == "off") {
								set[args[0]] = false;
								m.reply("*Sukses Mengubah ke Nonaktif*");
							} else m.reply(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`);
							break;
						case "set":
						case "settings":
							let settingsBot = Object.entries(set)
								.map(([key, value]) => {
									let list =
										key == "status"
											? new Date(value).toLocaleString("id-ID", {
													hour: "2-digit",
													minute: "2-digit",
													second: "2-digit",
												})
											: typeof value === "boolean"
												? value
													? "on🟢"
													: "off🔴"
												: typeof value === "object"
													? `\n${value.map((a) => "- " + a).join("\n")}`
													: value;
									return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
								})
								.join("\n");
							m.reply(`Settings Bot @${botNumber.split("@")[0]}\n${settingsBot}\n\nExample: ${prefix + command} mode`);
							break;
						case "author":
						case "authorprefix":
							if (!isCreator) return m.reply(global.mess.owner);
							if (args[1] == "on") {
								set.authorPrefix = ".";
								m.reply(global.mess.done);
							} else if (args[1] == "off") {
								set.authorPrefix = "";
								m.reply(global.mess.done);
							} else m.reply(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`);
							break;
						case "whitelist":
						case "whitelistmode":
							if (!isCreator) return m.reply(global.mess.owner);
							if (args[1] == "on") {
								set.whitelistonly = true;
								m.reply("*Sukses Mengubah ke Mode Whitelist*");
							} else if (args[1] == "off") {
								set.whitelistonly = false;
								m.reply("*Sukses Mengubah ke Mode Normal*");
							} else m.reply("Whitelist on/off");
							break;
						default: {
							let menuList = `*⚙️ PENGATURAN BOT ⚙️*
					
Select Bot Settings:

*👥 Mode Penggunaan:*
- Mode Bot : *${prefix + command} mode [public/self/group/private]*
- Whitelist Mode : *${prefix + command} whitelist [on/off]*

*🎛️ Fitur Otomatis (on/off):*
- Anti Call : *${prefix + command} anticall [on/off]*
- Anti Spam : *${prefix + command} antispam [on/off]*
- Auto Bio : *${prefix + command} autobio [on/off]*
- Auto Read : *${prefix + command} autoread [on/off]*
- Auto Typing : *${prefix + command} autotyping [on/off]*
- Read Status/SW : *${prefix + command} readsw [on/off]*

*🛠️ System Settings:*
- Multi Prefix : *${prefix + command} multiprefix [on/off]*
- Did You Mean : *${prefix + command} didyoumean [on/off]*
- Log Console : *${prefix + command} log [on/off]*
- Author Prefix : *${prefix + command} author [on/off]*

*📊 Info & Status:*
- Cek Semua Setting : *${prefix + command} set*
- Cek Runtime Bot : *${prefix + command}*`;
							if (args[0] || args[1]) m.reply(menuList);
						}
					}
				}
				break;
			case "ping":
			case "botstatus":
			case "statusbot":
				{
					const used = process.memoryUsage();
					const cpus = os.cpus().map((cpu) => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce(
						(last, cpu, _, { length }) => {
							last.total += cpu.total;
							last.speed += cpu.speed / length;
							last.times.user += cpu.times.user;
							last.times.nice += cpu.times.nice;
							last.times.sys += cpu.times.sys;
							last.times.idle += cpu.times.idle;
							last.times.irq += cpu.times.irq;
							return last;
						},
						{
							speed: 0,
							total: 0,
							times: {
								user: 0,
								nice: 0,
								sys: 0,
								idle: 0,
								irq: 0,
							},
						},
					);
					let timestamp = performance.now();
					let latensi = performance.now() - timestamp;
					let neww = performance.now();
					let oldd = performance.now();
					let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used)
						.map((key, _, arr) => `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(used[key])}`)
						.join("\n")}\n\n${
						cpus[0]
							? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
									.map((type) => `- *${(type + "*").padEnd(6)}: ${((100 * cpu.times[type]) / cpu.total).toFixed(2)}%`)
									.join("\n")}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus
									.map(
										(cpu, i) =>
											`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
												.map((type) => `- *${(type + "*").padEnd(6)}: ${((100 * cpu.times[type]) / cpu.total).toFixed(2)}%`)
												.join("\n")}`,
									)
									.join("\n\n")}`
							: ""
					}`.trim();
					m.reply(respon);
				}
				break;
			case "speedtest":
			case "speed":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					m.reply("Testing Speed...");
					const cp = require("child_process");
					const { promisify } = require("util");
					const exec = promisify(cp.exec).bind(cp);
					try {
						await exec("python3 --version");
					} catch {
						return m.reply("Fitur speedtest butuh Python 3 terpasang di server. `python3 speed.py --share`");
					}
					try {
						const { stdout, stderr } = await exec("python3 speed.py --share");
						if (stdout.trim()) m.reply(stdout);
						if (stderr.trim()) m.reply(stderr);
					} catch (e) {
						console.log("[speedtest]", e);
						m.reply(global.mess.fail);
					}
				}
				break;
			case "afk":
				{
					let user = db.users[m.sender];
					user.afkTime = +new Date();
					user.afkReason = text;
					m.reply(`@${m.sender.split("@")[0]} Telah Afk${text ? ": " + text : ""}`);
				}
				break;
			case "readviewonce":
			case "readviewone":
			case "rvo":
				{
					if (!m.quoted) return m.reply(global.mess.quoted);
					try {
						if (m.quoted.msg.viewOnce) {
							delete m.quoted.chat;
							m.quoted.msg.viewOnce = false;
							await m.reply({ forward: m.quoted });
						} else m.reply(`Reply view once message\nExample: ${prefix + command}`);
					} catch (e) {
						m.reply("Media Tidak Valid!");
					}
				}
				break;
			case "inspect":
				{
					if (!text) return m.reply("Masukkan Link Grup atau Saluran!");
					let _grup = /chat.whatsapp.com\/([\w\d]*)/;
					let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/;
					if (_grup.test(text)) {
						await sock
							.groupGetInviteInfo(text.match(_grup)[1])
							.then((_g) => {
								let teks = `*[ INFORMATION GROUP ]*\n\nName Group: ${_g.subject}\nGroup ID: ${_g.id}\nCreate At: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? "\nCreate By: " + _g.owner : ""}\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${"`" + _g.descId + "`"}\nDescription: ${_g.desc}\nParticipants:\n`;
								_g.participants.forEach((a) => {
									teks += a.admin ? `- Admin: @${a.id.split("@")[0]} [${a.admin}]\n` : "";
								});
								m.reply(teks);
							})
							.catch((e) => {
								if ([400, 406].includes(e.data)) return m.reply("Grup Tidak Di Temukan❗");
								if (e.data == 401) return m.reply("Bot Di Kick Dari Grup Tersebut❗");
								if (e.data == 410) return m.reply("Url Grup Telah Di Setel Ulang❗");
							});
					} else if (_saluran.test(text) || text.endsWith("@newsletter")) {
						const channelId = _saluran.test(text) ? text.match(_saluran)[1] : text;
						await sock
							.newsletterMsg(channelId)
							.then((n) => {
								m.reply(
									`*[ INFORMATION CHANNEL ]*\n\nID: ${n.id}\nState: ${n.state.type}\nName: ${n.thread_metadata.name.text}\nCreate At: ${new Date(n.thread_metadata.creation_time * 1000).toLocaleString()}\nSubscriber: ${n.thread_metadata.subscribers_count}\nVerification: ${n.thread_metadata.verification}\nDescription: ${n.thread_metadata.description.text}\n`,
								);
							})
							.catch((e) => m.reply("Saluran Tidak Di Temukan❗"));
					} else m.reply("Hanya Support Url Grup atau Saluran!");
				}
				break;
			case "addmsg":
				{
					if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Disave Di Database");
					if (!text) return m.reply(`Example : ${prefix + command} file name`);
					let msgs = db.database;
					if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`);
					msgs[text.toLowerCase()] = m.quoted;
					delete msgs[text.toLowerCase()].chat;
					m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`);
				}
				break;
			case "delmsg":
			case "deletemsg":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!text) return m.reply("Nama msg yg mau di delete?");
					let msgs = db.database;
					if (text == "allmsg") {
						db.database = {};
						m.reply("Berhasil menghapus seluruh msg dari list pesan");
					} else {
						if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`);
						delete msgs[text.toLowerCase()];
						m.reply(`Berhasil menghapus '${text}' dari list pesan`);
					}
				}
				break;
			case "getmsg":
				{
					if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`);
					let msgs = db.database;
					if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`);
					await sock.relayMessage(m.chat, msgs[text.toLowerCase()], {});
				}
				break;
			case "listmsg":
				{
					let seplit = Object.entries(db.database).map(([nama, isi]) => {
						return { nama, message: getContentType(isi) };
					});
					let teks = "「 LIST DATABASE 」\n\n";
					for (let i of seplit) {
						teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, "")}\n───────────────\n`;
					}
					m.reply(teks);
				}
				break;
			case "setcmd":
			case "addcmd":
				{
					if (!m.quoted) return m.reply(global.mess.quoted);
					if (!m.quoted.fileSha256) return m.reply("SHA256 Hash Missing!");
					if (!text) return m.reply(`Example : ${prefix + command} CMD Name`);
					let hash = m.quoted.fileSha256.toString("base64");
					if (global.db.cmd[hash] && global.db.cmd[hash].locked) return m.reply("Kamu tidak punya izin untuk mengubah perintah sticker ini");
					global.db.cmd[hash] = {
						creator: m.sender,
						locked: false,
						at: +new Date(),
						text,
					};
					m.reply(global.mess.done);
				}
				break;
			case "delcmd":
				{
					if (!m.quoted) return m.reply(global.mess.quoted);
					if (!m.quoted.fileSha256) return m.reply("SHA256 Hash Missing!");
					let hash = m.quoted.fileSha256.toString("base64");
					if (global.db.cmd[hash] && global.db.cmd[hash].locked) return m.reply("Kamu tidak punya izin untuk mengubah perintah sticker ini");
					if (!isCreator && global.db.cmd[hash] && global.db.cmd[hash].creator !== m.sender) return m.reply("Hanya pembuat perintah ini atau owner yang bisa menghapus");
					delete global.db.cmd[hash];
					m.reply(global.mess.done);
				}
				break;
			case "listcmd":
				{
					let teks = `*List Hash*\nInfo: *bold* hash is Locked\n${Object.entries(global.db.cmd)
						.map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`)
						.join("\n")}`.trim();
					sock.sendText(m.chat, teks, m);
				}
				break;
			case "lockcmd":
			case "unlockcmd":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!m.quoted) return m.reply(global.mess.quoted);
					if (!m.quoted.fileSha256) return m.reply("SHA256 Hash Missing!");
					let hash = m.quoted.fileSha256.toString("base64");
					if (!(hash in global.db.cmd)) return m.reply("Kamu tidak punya izin untuk mengubah perintah sticker ini");
					global.db.cmd[hash].locked = !/^un/i.test(command);
				}
				break;
			case "q":
			case "quoted":
				{
					if (!m.quoted) return m.reply(global.mess.quoted);
					if (text) {
						delete m.quoted.chat;
						await m.reply({ forward: m.quoted });
					} else {
						try {
							const anu = await m.getQuotedObj();
							if (!anu) return m.reply("Format Tidak Tersedia!");
							if (!anu.quoted) return m.reply("Pesan Yang Anda Reply Tidak Mengandung Reply");
							await sock.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {});
						} catch (e) {
							return m.reply("Format Tidak Tersedia!");
						}
					}
				}
				break;
			case "confes":
			case "confess":
			case "menfes":
			case "menfess":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (m.isGroup) return m.reply(global.mess.private);
					if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`);
					if (!text) return m.reply(`Example : ${prefix + command} 62xxxx|Nama Samaran`);
					let [teks1, teks2] = text.split`|`;
					if (teks1) {
						const tujuan = teks1.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
						const onWa = await sock.onWhatsApp(tujuan);
						if (!onWa.length > 0) return m.reply(global.mess.onWa);
						menfes[m.sender] = {
							tujuan: tujuan,
							nama: teks2 ? teks2 : "Orang",
						};
						menfes[tujuan] = {
							tujuan: m.sender,
							nama: "Penerima",
						};
						const timeout = setTimeout(() => {
							if (menfes[m.sender]) {
								m.reply(`_Waktu ${command} habis_`);
								delete menfes[m.sender];
							}
							if (menfes[tujuan]) {
								sock.sendMessage(tujuan, { text: `_Waktu ${command} habis_` });
								delete menfes[tujuan];
							}
							menfesTimeouts.delete(m.sender);
							menfesTimeouts.delete(tujuan);
						}, 600000);
						menfesTimeouts.set(m.sender, timeout);
						menfesTimeouts.set(tujuan, timeout);
						sock.sendMessage(tujuan, {
							text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`,
						});
						m.reply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`);
						setLimit(m, db);
					} else m.reply(`Masukkan Nomernya!\nExample : ${prefix + command} 62xxxx|Nama Samaran`);
				}
				break;
			case "delconfes":
			case "delconfess":
			case "delmenfes":
			case "delmenfess":
				{
					if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split("del")[1]}!`);
					let anu = menfes[m.sender];
					if (menfesTimeouts.has(m.sender)) {
						clearTimeout(menfesTimeouts.get(m.sender));
						menfesTimeouts.delete(m.sender);
					}
					if (menfesTimeouts.has(anu.tujuan)) {
						clearTimeout(menfesTimeouts.get(anu.tujuan));
						menfesTimeouts.delete(anu.tujuan);
					}
					sock.sendMessage(anu.tujuan, {
						text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : "Seseorang"}`,
					});
					m.reply(`Sukses Mengakhiri Sesi ${command.split("del")[1]}!`);
					delete menfes[anu.tujuan];
					delete menfes[m.sender];
				}
				break;
			case "cai":
			case "roomai":
			case "chatai":
			case "autoai":
				{
					if (m.isGroup) return m.reply(global.mess.private);
					if (chat_ai[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`);
					if (!text) return m.reply(`Example: ${prefix + command} halo ngab\nWith Prompt: ${prefix + command} halo ngab|Kamu adalah assisten yang siap membantu dalam hal apapun yang ku minta.\n\nUntuk Menghapus room: ${prefix + "del" + command}`);
					let [teks1, teks2] = text.split`|`;
					chat_ai[m.sender] = [
						{ role: "system", content: teks2 || "" },
						{ role: "user", content: text.split`|` ? teks1 : text || "" },
					];
					let hasil = await fetchApi(
						"/ai/chat4",
						{
							messages: chat_ai[m.sender],
							prompt: budy,
						},
						{ method: "POST" },
					);
					const response = hasil?.result?.message || "Maaf, saya tidak mengerti.";
					chat_ai[m.sender].push({ role: "assistant", content: response });
					await m.reply(response);
				}
				break;
			case "delcai":
			case "delroomai":
			case "delchatai":
			case "delautoai":
				{
					if (!chat_ai[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split("del")[1]}!`);
					m.reply(`Sukses Mengakhiri Sesi ${command.split("del")[1]}!`);
					delete chat_ai[m.sender];
				}
				break;
			case "jadibot":
			case "clonebot":
			case "clone":
				{
					if (!isPremium) return m.reply(global.mess.prem);
					if (!isLimit) return m.reply(global.mess.limit);
					const userJid = m.sender?.endsWith("@lid") ? sock.findJidByLid(m.sender, store, true) : m.sender;
					const nmrnya = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : userJid;
					const onWa = await sock.onWhatsApp(nmrnya);
					if (!onWa.length > 0) return m.reply(global.mess.onWa);
					await CloneBot(sock, nmrnya, m, store);
					m.reply(`Gunakan ${prefix}stopclonebot\nUntuk Berhenti`);
					setLimit(m, db);
				}
				break;
			case "stopjadibot":
			case "deljadibot":
			case "stopclonebot":
			case "delclonebot":
			case "stopclone":
				{
					const userJid = m.sender?.endsWith("@lid") ? sock.findJidByLid(m.sender, store, true) : m.sender;
					const nmrnya = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : userJid;
					const onWa = await sock.onWhatsApp(nmrnya);
					if (!onWa.length > 0) return m.reply(global.mess.onWa);
					await StopCloneBot(sock, nmrnya, m);
				}
				break;
			case "listjadibot":
			case "listclonebot":
			case "listclone":
				{
					ListCloneBot(sock, m);
				}
				break;

			// Tools Menu
			case "fetch":
			case "get":
				{
					if (!isPremium) return m.reply(global.mess.prem);
					if (!isLimit) return m.reply(global.mess.limit);
					const urlToFetch = extractUrl(text);
					if (!urlToFetch || !/^https?:\/\//.test(urlToFetch)) return m.reply("Awali dengan http:// atau https:// dan pastikan URL valid");
					try {
						const res = await fetch(urlToFetch);
						const contentType = res.headers.get("content-type") || "";
						if (!/text|json|html|plain/.test(contentType)) {
							await m.reply(text);
						} else {
							const textData = await res.text();
							m.reply(util.format(textData));
						}
						setLimit(m, db);
					} catch (e) {
						m.reply(String(e));
					}
				}
				break;
			case "toaud":
			case "toaudio":
				{
					if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`);
					m.react("⏳");
					try {
						let mediaStream = await sock.downloadMediaMessageStream(qmsg);
						let audioStream = toAudio(mediaStream);
						await m.reply({ audio: { stream: audioStream }, mimetype: "audio/mpeg" });
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;
			case "tomp3":
				{
					if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`);
					m.react("⏳");
					try {
						let mediaStream = await sock.downloadMediaMessageStream(qmsg);
						let audioStream = toAudio(mediaStream);
						await m.reply({
							document: { stream: audioStream },
							mimetype: "audio/mpeg",
							fileName: `Convert By Rynn.mp3`,
						});
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;
			case "tovn":
			case "toptt":
			case "tovoice":
				{
					if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`);
					m.react("⏳");
					try {
						let mediaStream = await sock.downloadMediaMessageStream(qmsg);
						let audioStream = toPTT(mediaStream);
						await m.reply({
							audio: { stream: audioStream },
							mimetype: "audio/ogg; codecs=opus",
							ptt: true,
						});
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;
			case "togif":
				{
					if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`);
					m.react("⏳");
					try {
						let mediaStream = await sock.downloadMediaMessageStream(qmsg);
						let gifStream = toGif(mediaStream);
						await m.reply({
							video: { stream: gifStream },
							gifPlayback: true,
							caption: global.mess.done,
							gifAttribution: pickRandom(["TENOR", "GIPHY"]),
						});
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;
			case "toimage":
			case "toimg":
				{
					if (!/webp|video|image/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`);
					m.react("⏳");
					try {
						let mediaStream = await sock.downloadMediaMessageStream(qmsg);
						let imageStream = toImage(mediaStream);
						await m.reply({ image: { stream: imageStream }, caption: global.mess.done });
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;
			case "toptv":
				{
					if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`);
					if ((m.quoted ? m.quoted.type : m.type) === "videoMessage") {
						m.react("⏳");
						let media = await sock.downloadAndSaveMediaMessage(qmsg);
						try {
							const message = await generateWAMessageContent({ video: { url: media } }, { upload: sock.waUploadToServer });
							await sock.relayMessage(m.chat, { ptvMessage: message.videoMessage }, {});
						} finally {
							if (fs.existsSync(media)) fs.unlinkSync(media);
						}
					} else m.reply("Reply Video Yang Mau Di Ubah Ke PTV Message!");
				}
				break;
			case "tourl":
				{
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						m.react("⏳");
						let mediaBuffer;
						try {
							mediaBuffer = await sock.downloadMediaMessage(qmsg);
						} catch (e) {
							return m.reply("❌ Gagal mendownload media. Pastikan pesan media tidak expired atau coba kirim ulang.");
						}
						try {
							let anu = await UguuSe(mediaBuffer, mime.split("/")[1] || "bin");
							m.reply("Url : " + anu.url);
						} catch (e) {
							m.reply(global.mess.fail);
						}
					} else m.reply(global.mess.media);
				}
				break;
			case "texttospech":
			case "tts":
			case "tospech":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply("Mana text yg mau diubah menjadi audio?");
					let anu;
					try {
						anu = await fetchApi("/tools/tts", { text }, { stream: true });
						m.reply({ audio: { url: anu }, ptt: true, mimetype: "audio/mpeg" });
						setLimit(m, db);
					} finally {
						if (anu && fs.existsSync(anu)) fs.unlinkSync(anu);
					}
				}
				break;
			case "translate":
			case "tr":
				{
					if (text && text == "list") {
						let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
						m.reply(list_tr);
					} else {
						if (!m.quoted && (!text || !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`);
						let lang = args[0] ? args[0] : global.locale;
						let teks = args[1] ? args.slice(1).join(" ") : m.quoted.text;
						try {
							let hasil = await fetchApi("/tools/translate", {
								text: teks,
								lang,
							});
							m.reply(`To : ${lang}\n${hasil.result.translate}`);
						} catch (e) {
							m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`);
						}
					}
				}
				break;
			case "toqr":
			case "qr":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`);
					m.react("⏳");
					let anu;
					try {
						anu = await fetchApi("/tools/to-qr", { data: text }, { stream: true });
						await m.reply({ image: { url: anu }, caption: "Nih Bro" });
						setLimit(m, db);
					} finally {
						if (anu && fs.existsSync(anu)) fs.unlinkSync(anu);
					}
				}
				break;
			case "tohd":
			case "remini":
			case "hd":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (/image/.test(mime)) {
						m.react("⏳");
						let hasil;
						let media = await sock.downloadAndSaveMediaMessage(qmsg);
						try {
							const form = new FormData();
							form.append("buffer", new Blob([fs.readFileSync(media)], { type: "image/jpeg" }), "image.jpg");
							hasil = await fetchApi("/tools/remini", form, { stream: true });
							await m.reply({
								image: { url: hasil },
								caption: global.mess.done,
							});
							setLimit(m, db);
							if (media && fs.existsSync(media)) fs.unlinkSync(media);
							if (hasil && fs.existsSync(hasil)) fs.unlinkSync(hasil);
						} catch (e) {
							if (hasil && fs.existsSync(hasil)) fs.unlinkSync(hasil);
							let ran = `./database/temp/${getRandom(".jpg")}`;
							const scaleFactor = isNaN(parseInt(text)) ? 4 : parseInt(text) < 10 ? parseInt(text) : 4;
							exec(`ffmpeg -i "${media}" -vf "scale=iw*${scaleFactor}:ih*${scaleFactor}:flags=lanczos" -q:v 1 "${ran}"`, async (err, stderr, stdout) => {
								try {
									if (err) return m.reply(global.mess.fail);
									await sock.sendMessage(m.chat, { image: { url: ran }, caption: global.mess.done }, { quoted: m });
									setLimit(m, db);
								} catch (e) {
									console.log(e);
								} finally {
									if (ran && fs.existsSync(ran)) fs.unlinkSync(ran);
									if (media && fs.existsSync(media)) fs.unlinkSync(media);
								}
							});
						}
					} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`);
				}
				break;
			case "dehaze":
			case "colorize":
			case "colorfull":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (/image/.test(mime)) {
						let hasil;
						let media = await sock.downloadAndSaveMediaMessage(qmsg);
						try {
							const form = new FormData();
							form.append("buffer", new Blob([fs.readFileSync(media)], { type: "image/jpeg" }), "image.jpg");
							hasil = await fetchApi("/tools/recolor", form, { stream: true });
							await m.reply({
								image: { url: hasil },
								caption: global.mess.done,
							});
							setLimit(m, db);
						} finally {
							if (hasil && fs.existsSync(hasil)) fs.unlinkSync(hasil);
							if (media && fs.existsSync(media)) fs.unlinkSync(media);
						}
					} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`);
				}
				break;
			case "hitamkan":
			case "toblack":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (/image/.test(mime)) {
						let hasil;
						let media = await sock.downloadAndSaveMediaMessage(qmsg);
						try {
							const form = new FormData();
							form.append("style", "superblack");
							form.append("buffer", new Blob([fs.readFileSync(media)], { type: "image/jpeg" }), "image.jpg");
							hasil = await fetchApi("/create/skin-tone", form, {
								stream: true,
							});
							await m.reply({
								image: { url: hasil },
								caption: global.mess.done,
							});
							setLimit(m, db);
						} finally {
							if (hasil && fs.existsSync(hasil)) fs.unlinkSync(hasil);
							if (media && fs.existsSync(media)) fs.unlinkSync(media);
						}
					} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`);
				}
				break;
			case "ssweb":
				{
					if (!isPremium) return m.reply(global.mess.prem);
					if (!text) return m.reply(`Example: ${prefix + command} https://github.com/nekonaru/rynnbot`);
					let anu = "https://" + text.replace(/^https?:\/\//, "");
					let hasil;
					try {
						hasil = await fetchApi("/tools/ss", { url: anu }, { stream: true });
						await m.reply({ image: { url: hasil }, caption: global.mess.done });
						setLimit(m, db);
					} finally {
						if (hasil && fs.existsSync(hasil)) fs.unlinkSync(hasil);
					}
				}
				break;
			case "readmore":
				{
					let teks1 = text.split`|`[0] ? text.split`|`[0] : "";
					let teks2 = text.split`|`[1] ? text.split`|`[1] : "";
					m.reply(teks1 + readmore + teks2);
				}
				break;
			case "getexif":
				{
					if (!m.quoted) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`);
					if (!/sticker|webp/.test(quoted.type)) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`);
					const img = new webp.Image();
					await img.load(await m.quoted.download());
					if (!img.exif) return m.reply("Stiker ini tidak memiliki metadata/EXIF sama sekali.");
					try {
						const exifData = JSON.parse(img.exif.slice(22).toString());
						m.reply(util.format(exifData));
					} catch (e) {
						m.reply(`Stiker memiliki EXIF, tapi formatnya bukan JSON yang valid:\n\n${img.exif.toString()}`);
					}
				}
				break;
			case "cuaca":
			case "weather":
				{
					if (!text) return m.reply(`Example: ${prefix + command} jakarta`);
					try {
						let { result: data } = await fetchApi("/tools/cuaca", {
							city: text,
						});
						m.reply(
							`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`,
						);
					} catch (e) {
						m.reply("Kota Tidak Di Temukan!");
					}
				}
				break;
			case "sticker":
			case "stiker":
			case "s":
			case "stickergif":
			case "stikergif":
			case "sgif":
			case "stickerwm":
			case "swm":
			case "curi":
			case "colong":
			case "take":
			case "stickergifwm":
			case "sgifwm":
				{
					if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`);
					let mediaStream = await sock.downloadMediaMessageStream(qmsg);
					let teks1 = text.split`|`[0] ? text.split`|`[0] : packname;
					let teks2 = text.split`|`[1] ? text.split`|`[1] : author;
					if (/image|webp/.test(mime)) {
						m.react("⏳");
						await sock.sendAsSticker(m.chat, mediaStream, m, {
							mime,
							packname: teks1,
							author: teks2,
						});
					} else if (/video/.test(mime)) {
						if (qmsg.seconds > 11) return m.reply("Maksimal 10 detik!");
						m.react("⏳");
						await sock.sendAsSticker(m.chat, mediaStream, m, {
							mime,
							packname: teks1,
							author: teks2,
						});
					} else m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`);
				}
				break;
			case "smeme":
			case "stickmeme":
			case "stikmeme":
			case "stickermeme":
			case "stikermeme":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`);
					if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`);
					m.react("⏳");
					let atas = text.split`|`[0] ? text.split`|`[0] : "-";
					let bawah = text.split`|`[1] ? text.split`|`[1] : "-";
					let mediaBuffer;
					try {
						mediaBuffer = await sock.downloadMediaMessage(qmsg);
					} catch (e) {
						return m.reply("❌ Gagal mendownload media. Pastikan pesan media tidak expired atau coba kirim ulang.");
					}
					try {
						let mem = await UguuSe(mediaBuffer, mime.split("/")[1] || "bin");
						let smeme = await fetchApi("/create/meme2", { url: mem.url, text: atas, text2: bawah }, { stream: true });
						await sock.sendAsSticker(m.chat, smeme, m, { mime, packname, author });
						setLimit(m, db);
					} catch (e) {
						console.log(e);
						m.reply(global.mess.fail);
					}
				}
				break;
			case "emojimix":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} 😅+🤔`);
					let [emoji1, emoji2] = text.split`+`;
					if (!emoji1 && !emoji2) return m.reply(`Example: ${prefix + command} 😅+🤔`);
					let { result } = await fetchApi("/tools/emojimix", {
						emoji1,
						emoji2,
					});
					if (result.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`);
					for (let res of result) {
						await sock.sendAsSticker(m.chat, res.url, m, { packname, author });
					}
					setLimit(m, db);
				}
				break;
			case "iqc":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
					m.react("⏳");
					let queryText = text ? text : m.quoted.text;
					if (queryText.length >= 200) return m.reply("Max 200 Length!");
					let res;
					try {
						res = await fetchApi("/create/iqc", { text: queryText }, { stream: true });
						await m.reply({ image: { url: res }, caption: global.mess.done });
						setLimit(m, db);
					} finally {
						if (res && fs.existsSync(res)) fs.unlinkSync(res);
					}
				}
				break;
			case "qc":
			case "quote":
			case "fakechat":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text && !m.quoted) return m.reply(`Kirim / reply pesan untuk *${prefix + command}*`);
					try {
						let medianya;
						let quotedMedianya;
						let mediaPath;
						let quotedMediaPath;
						let ppUrl = await sock.profilePictureUrl(m.sender, "image").catch(() => "https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg");
						const senderName = m.pushName || store.contacts?.[m.sender]?.name || "+" + m.sender.split("@")[0];
						const quotedName = store.contacts?.[m.quoted?.sender]?.name || "+" + (m.quoted?.sender || "").split("@")[0];
						try {
							if (m.isMedia) {
								mediaPath = await sock.downloadAndSaveMediaMessage(m);
								medianya = await UguuSe(mediaPath);
							}
							if (m.quoted?.isMedia) {
								quotedMediaPath = await sock.downloadAndSaveMediaMessage(m.quoted);
								quotedMedianya = await UguuSe(quotedMediaPath);
							}
							const payload = {
								type: "quote",
								format: "png",
								backgroundColor: "#FFFFFF",
								width: 512,
								height: 768,
								scale: 2,
								messages: [
									{
										entities: [],
										...(medianya?.url ? { media: { url: medianya.url } } : {}),
										avatar: true,
										from: {
											id: 1,
											name: senderName,
											photo: {
												url: ppUrl,
											},
										},
										text,
										replyMessage: m.quoted
											? {
													name: quotedName || "",
													text: m.quoted.text || "",
													...(quotedMedianya?.url ? { media: { url: quotedMedianya.url } } : {}),
													chatId: Math.floor(Math.random() * 9999999),
												}
											: {},
									},
								],
							};
							let res = await fetchApi("/create/qc", payload, {
								method: "POST",
								buffer: true,
							});
							await sock.sendAsSticker(m.chat, Buffer.from(res, "base64"), m, {
								packname,
								author,
							});
							setLimit(m, db);
						} finally {
							if (mediaPath && fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
							if (quotedMediaPath && fs.existsSync(quotedMediaPath)) fs.unlinkSync(quotedMediaPath);
						}
					} catch (e) {
						console.log(e);
						m.reply(global.mess.fail);
					}
				}
				break;
			case "brat":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
					let queryText = text ? text : m.quoted.text;
					if (queryText.length >= 200) return m.reply("Max 200 Length!");
					try {
						let res = await fetchApi("/create/brat", { text: queryText }, { stream: true });
						await sock.sendAsSticker(m.chat, res, m);
						setLimit(m, db);
					} catch (e) {
						try {
							let res = await fetchApi("/create/brat3", { text: queryText }, { stream: true });
							await sock.sendAsSticker(m.chat, res, m);
							setLimit(m, db);
						} catch (e) {
							console.log(e);
							m.reply(global.mess.fail);
						}
					}
				}
				break;
			case "bratvid":
			case "bratvideo":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
					m.react("⏳");
					const teks = (m.quoted ? m.quoted.text : text).split(" ");
					if (teks.length >= 200) return m.reply("Max 200 Length!");
					const tempDir = path.join(process.cwd(), "database/temp");
					const framePaths = [];
					const fileListPath = path.join(tempDir, `${time + "-" + m.sender}.txt`);
					const outputVideoPath = path.join(tempDir, `${time + "-" + m.sender}-output.mp4`);
					try {
						for (let i = 0; i < teks.length; i++) {
							const currentText = teks.slice(0, i + 1).join(" ");
							const framePath = path.join(tempDir, `${time + "-" + m.sender + i}.mp4`);
							try {
								let res = await fetchApi("/create/brat2", { text: currentText }, { stream: framePath });
								framePaths.push(res);
							} catch (e) {
								let res = await fetchApi("/create/brat4", { text: currentText }, { stream: framePath });
								framePaths.push(res);
							}
						}
						let fileListContent = "";
						for (let i = 0; i < framePaths.length; i++) {
							fileListContent += `file '${framePaths[i]}'\n`;
							fileListContent += `duration 0.5\n`;
						}
						fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
						fileListContent += `duration 3\n`;
						fs.writeFileSync(fileListPath, fileListContent);
						await new Promise((resolve, reject) => exec(`ffmpeg -y -f concat -safe 0 -i "${fileListPath}" -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 "${outputVideoPath}"`, (err) => (err ? reject(err) : resolve())));
						await sock.sendAsSticker(m.chat, outputVideoPath, m, {
							packname,
							author,
						});
						setLimit(m, db);
					} catch (e) {
						console.log(e);
						m.reply(global.mess.fail);
					} finally {
						framePaths.forEach((filePath) => {
							if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
						});
						if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
						if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
					}
				}
				break;
			case "wasted":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (/jpg|jpeg|png/.test(mime)) {
						m.react("⏳");
						let hasil;
						let media = await sock.downloadAndSaveMediaMessage(qmsg);
						try {
							const form = new FormData();
							form.append("buffer", new Blob([fs.readFileSync(media)], { type: "image/jpeg" }), "image.jpg");
							hasil = await fetchApi("/create/wasted", form, { stream: true });
							await sock.sendMedia(m.chat, hasil, "", "Nih Bro", m);
							setLimit(m, db);
						} finally {
							if (hasil && fs.existsSync(hasil)) fs.unlinkSync(hasil);
							if (media && fs.existsSync(media)) fs.unlinkSync(media);
						}
					} else m.reply(global.mess.media);
				}
				break;
			case "trigger":
			case "triggered":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (/jpg|jpeg|png/.test(mime)) {
						m.react("⏳");
						let hasil;
						let media = await sock.downloadAndSaveMediaMessage(qmsg);
						try {
							const form = new FormData();
							form.append("buffer", new Blob([fs.readFileSync(media)], { type: "image/jpeg" }), "image.jpg");
							hasil = await fetchApi("/create/triggered", form, {
								stream: true,
							});
							await sock.sendMedia(m.chat, hasil, "", global.mess.done, m);
							setLimit(m, db);
						} finally {
							if (hasil && fs.existsSync(hasil)) fs.unlinkSync(hasil);
							if (media && fs.existsSync(media)) fs.unlinkSync(media);
						}
					} else m.reply(global.mess.media);
				}
				break;
			case "nulis":
				{
					m.reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`);
				}
				break;
			case "nuliskanan":
			case "nuliskiri":
			case "foliokanan":
			case "foliokiri":
				{
					if (!isLimit) return m.reply(mess.limit);
					if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`);
					m.react("⏳");
					if (canvasModule) {
						const { createCanvas, loadImage } = canvasModule;
						const isFolio = command.includes("folio");
						const isKanan = command.includes("kanan");
						const folder = isFolio ? "folio" : "buku";
						const posisi = isKanan ? "kanan" : "kiri";
						const inputFile = `./src/nulis/images/${folder}/sebelum${posisi}.jpg`;
						const maxLines = isFolio ? 38 : 31;
						const maxWordsPerLine = isFolio ? 17 : 9;
						const regexWords = new RegExp(`(\\S+\\s*){1,${maxWordsPerLine}}`, "g");
						const splitText = text.replace(regexWords, "$&\n");
						const lines = splitText.split("\n").slice(0, maxLines);
						let startX = 140,
							startY = 156,
							lineHeight = 8.7;
						if (command === "nuliskanan") {
							startX = 128;
							((startY = 136), (lineHeight = 10.5));
						}
						if (command === "foliokiri") {
							startX = 48;
							((startY = 200), (lineHeight = 12));
						}
						if (command === "foliokanan") {
							startX = 89;
							((startY = 168), (lineHeight = 11));
						}
						let image = null,
							canvas = null,
							ctx = null,
							buffer = null;
						try {
							image = await loadImage(inputFile);
							canvas = createCanvas(image.width, image.height);
							ctx = canvas.getContext("2d");
							ctx.drawImage(image, 0, 0, image.width, image.height);
							ctx.font = '27px "Indie Flower"';
							ctx.fillStyle = "#1e1e1e";
							ctx.textBaseline = "top";
							const baseLineHeight = 27 + lineHeight;
							let currentY = startY;
							for (const line of lines) {
								ctx.fillText(line, startX, currentY);
								currentY += baseLineHeight;
							}
							buffer = await canvas.encode("png");
							await m.reply({
								image: buffer,
								caption: "Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ",
							});
							setLimit(m, db);
						} catch (err) {
							console.error("Error saat membuat gambar nulis:", err);
							m.reply("Terjadi kesalahan pada sistem saat memproses gambar.");
						} finally {
							if (canvas) {
								canvas.width = 0;
								canvas.height = 0;
							}
							((image = null), (canvas = null), (ctx = null), (buffer = null));
						}
					} else {
						const config = {
							nuliskiri: {
								lines: 31,
								words: 9,
								path: "buku/sebelumkiri.jpg",
								out: `buku_setelahkiri_${Date.now()}.jpg`,
								size: "960x1280",
								space: "12.4",
								coord: "+140+123",
							},
							nuliskanan: {
								lines: 31,
								words: 9,
								path: "buku/sebelumkanan.jpg",
								out: `buku_setelahkanan_${Date.now()}.jpg`,
								size: "960x1280",
								space: "14.2",
								coord: "+131+105",
							},
							foliokiri: {
								lines: 38,
								words: 17,
								path: "folio/sebelumkiri.jpg",
								out: `folio_setelahkiri_${Date.now()}.jpg`,
								size: "1720x1280",
								space: "15.6",
								coord: "+48+165",
							},
							foliokanan: {
								lines: 38,
								words: 17,
								path: "folio/sebelumkanan.jpg",
								out: `folio_setelahkanan_${Date.now()}.jpg`,
								size: "1720x1280",
								space: "14.9",
								coord: "+89+170",
							},
						}[command];
						const regexWords = new RegExp(`(\\S+\\s*){1,${config.words}}`, "g");
						const splitText = text.replace(regexWords, "$&\n");
						const inputImg = `./src/nulis/images/${config.path}`;
						const outputImg = `./database/temp/${config.out}`;
						try {
							const PImage = await import("pureimage");
							const font = PImage.registerFont("./src/nulis/font/Indie-Flower.ttf", "Indie Flower");
							font.loadSync();

							const stream = fs.createReadStream(inputImg);
							const image = await PImage.decodeJPEGFromStream(stream);
							const canvas = PImage.make(image.width, image.height);
							const ctx = canvas.getContext("2d");
							ctx.drawImage(image, 0, 0, image.width, image.height);

							ctx.font = '23px "Indie Flower"';
							ctx.fillStyle = "#1e1e1e";
							ctx.textBaseline = "top";

							const [_, xStr, yStr] = config.coord.match(/\+(\d+)\+(\d+)/) || [null, "0", "0"];
							const startX = parseInt(xStr, 10);
							let currentY = parseFloat(yStr);
							const baseLineHeight = 23 + parseFloat(config.space);

							const linesToDraw = splitText.split("\n").slice(0, config.lines);
							for (const line of linesToDraw) {
								ctx.fillText(line, startX, currentY);
								currentY += baseLineHeight;
							}

							const outStream = fs.createWriteStream(outputImg);
							await new Promise((resolve, reject) => {
								PImage.encodeJPEGToStream(canvas, outStream).then(resolve).catch(reject);
							});

							const imageBuffer = fs.readFileSync(outputImg);
							await m.reply({
								image: imageBuffer,
								caption: "Jangan Malas Lord. Jadilah siswa yang rajin ಠ_ಠ",
							});
							setLimit(m, db);
						} catch (error) {
							console.error(error);
							m.reply(mess.error);
						} finally {
							if (fs.existsSync(outputImg)) fs.unlinkSync(outputImg);
						}
					}
				}
				break;
			case "bass":
			case "blown":
			case "deep":
			case "earrape":
			case "fast":
			case "fat":
			case "nightcore":
			case "reverse":
			case "robot":
			case "slow":
			case "smooth":
			case "tupai":
				{
					try {
						let set;
						if (/bass/.test(command)) set = "-af equalizer=f=54:width_type=o:width=2:g=20";
						if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
						if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
						if (/earrape/.test(command)) set = "-af volume=12";
						if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
						if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
						if (/nightcore/.test(command)) set = "-filter:a atempo=1.06,asetrate=44100*1.25";
						if (/reverse/.test(command)) set = '-filter_complex "areverse"';
						if (/robot/.test(command)) set = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
						if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
						if (/smooth/.test(command)) set = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
						if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
						if (/audio/.test(mime)) {
							m.react("⏳");
							let media = await sock.downloadAndSaveMediaMessage(qmsg);
							let ran = `./database/temp/${getRandom(".mp3")}`;
							exec(`ffmpeg -i "${media}" ${set} "${ran}"`, async (err, stderr, stdout) => {
								try {
									if (err) return m.reply(global.mess.fail);
									await m.reply({
										audio: { url: ran },
										mimetype: "audio/mpeg",
									});
								} finally {
									if (fs.existsSync(media)) fs.unlinkSync(media);
									if (fs.existsSync(ran)) fs.unlinkSync(ran);
								}
							});
						} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`);
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;
			case "tinyurl":
			case "shorturl":
			case "shortlink":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text || !isUrl(text)) return m.reply(`Example: ${prefix + command} https://github.com/nekonaru/rynnbot`);
					let hasil = await fetchApi("/other/tinyurl", { url: text });
					m.reply("Url : " + hasil.result);
					setLimit(m, db);
				}
				break;
			case "git":
			case "gitclone":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!args[0]) return m.reply(`Example: ${prefix + command} https://github.com/nekonaru/rynnbot`);
					const urlGit = extractUrl(text, "github.com");
					if (!urlGit || !urlGit.includes("github.com")) return m.reply("Gunakan Url Github!");
					let [, user, repo] = urlGit.match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
					try {
						m.reply({
							document: {
								url: `https://api.github.com/repos/${user}/${repo}/zipball`,
							},
							fileName: repo + ".zip",
							mimetype: "application/zip",
						}).catch((e) => m.reply(global.mess.error));
						setLimit(m, db);
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;

			// Ai Menu
			case "ai":
			case "google":
			case "bard":
			case "gemini":
				{
					if (!text) return m.reply(`Example: ${prefix + command} query`);
					try {
						let hasil = await fetchApi("/ai/chat2", {
							query: text,
						});
						m.reply(hasil.result.message);
					} catch (e) {
						m.reply(pickRandom(["Fitur Ai sedang bermasalah!", "Tidak dapat terhubung ke ai!", "Sistem Ai sedang sibuk sekarang!", "Fitur sedang tidak dapat digunakan!"]));
					}
				}
				break;
			case "archipelago":
			case "grok":
			case "glm":
			case "claude":
				{
					if (!global.APIKeys[global.APIs.neosantara]) return m.reply("Apikey Neosantara belum di-set.\nIsi NEOSANTARA_API_KEY di file .env, atau gunakan perintah .setapikey neo key_nya");
					if (!text) return m.reply("Halo! Ada yang bisa dibantu hari ini?");
					try {
						let model;
						if (command == "glm") model = "glm-4.7-flash";
						if (command == "claude") model = "claude-3-haiku";
						if (command == "archipelago") model = "archipelago-70b";
						if (command == "grok") model = "grok-4.1-fast-non-reasoning";

						const response = await fetchApi(
							"/chat/completions",
							{
								model,
								messages: [{ role: "user", content: text }],
							},
							{
								api: 2,
								method: "POST",
								headers: {
									Authorization: `Bearer ${global.APIKeys[global.APIs.neosantara]}`,
								},
							},
						);
						await m.reply(response.choices[0].message.content);
					} catch (e) {
						m.reply("Waduh, ada kendala pas nanya ke Neosantara nih.");
					}
				}
				break;
			case "deepseek":
			case "r1":
				{
					if (!global.APIKeys[global.APIs.neosantara]) return m.reply("Apikey Neosantara belum di-set.\nIsi NEOSANTARA_API_KEY di file .env, atau gunakan perintah .setapikey neo key_nya");
					if (!text) return m.reply("Halo! Ada yang bisa dibantu hari ini?");
					m.reply("Tunggu bentar, lagi mikir... 🧠");
					try {
						const response = await fetchApi(
							"/chat/completions",
							{
								model: "deepseek-r1",
								messages: [{ role: "user", content: text }],
								thinking: { type: "enabled", budget_tokens: 2048 },
							},
							{
								api: 2,
								method: "POST",
								headers: {
									Authorization: `Bearer ${global.APIKeys[global.APIs.neosantara]}`,
								},
							},
						);
						const result = response.choices[0].message;
						const thought = result.reasoning_content ? `*Proses Mikir:*\n_${result.reasoning_content}_` : "";
						await m.reply(thought + result.content);
					} catch (e) {
						console.log(e);
						m.reply("Waduh, ada kendala pas nanya ke Neosantara nih.");
					}
				}
				break;

			// Search Menu
			case "gimage":
			case "bingimg":
				{
					if (!text) return m.reply(`Example: ${prefix + command} query`);
					try {
						let anu = await fetchApi("/search/google", { query: text });
						let una = pickRandom(anu.result);
						await m.reply({
							image: {
								url: una.pagemap?.cse_thumbnail?.[0]?.src || una.pagemap?.cse_image?.[0].src || una.pagemap?.metatags?.[0]?.["og:image"],
							},
							caption: "Hasil Pencarian " + text + "\nTitle: " + una.title + "\nSnippet: " + una.snippet + "\nSource: " + una.link || una.formattedUrl,
						});
						setLimit(m, db);
					} catch (e) {
						m.reply("Pencarian Tidak Ditemukan!");
					}
				}
				break;
			case "play":
			case "ytplay":
			case "yts":
			case "ytsearch":
			case "youtubesearch":
				{
					if (!text) return m.reply(`Example: ${prefix + command} dj komang`);
					const queryYts = extractUrl(text, "youtu") || text;
					m.react("⏳");
					try {
						const yts = (await import("yt-search")).default;
						const res = await yts.search(queryYts);
						const hasil = pickRandom(res.all);
						const teksnya = `*📍Title:* ${hasil.title || "Tidak tersedia"}\n*✏Description:* ${hasil.description || "Tidak tersedia"}\n*🌟Channel:* ${hasil.author?.name || "Tidak tersedia"}\n*⏳Duration:* ${hasil.seconds || "Tidak tersedia"} second (${hasil.timestamp || "Tidak tersedia"})\n*🔎Source:* ${hasil.url || "Tidak tersedia"}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
						await m.reply({
							image: { url: hasil.thumbnail },
							caption: teksnya,
						});
					} catch (e) {
						try {
							const res = await fetchApi("/search/youtube", { query: queryYts });
							const hasil = pickRandom(res.result.items);
							const teksnya = `*📍Title:* ${hasil.snippet.title || "Tidak tersedia"}\n*✏Description:* ${hasil.snippet.description || "Tidak tersedia"}\n*🌟Channel:* ${hasil.snippet.channelTitle || "Tidak tersedia"}\n*⏳Duration:* ${hasil.duration || "Tidak tersedia"}\n*🔎Source:* https://youtu.be/${hasil.id.videoId || "Tidak tersedia"}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
							await m.reply({
								image: { url: hasil.snippet.thumbnails.medium.url },
								caption: teksnya,
							});
						} catch (e) {
							m.reply("Post not available!");
						}
					}
				}
				break;
			case "pixiv":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} hu tao`);
					try {
						m.react("⏳");
						const res = await fetchApi("/search/pixiv", { query: text });
						let hasil = pickRandom(res.result.body.illusts);
						const response = await fetch(hasil.url_big || hasil.url, {
							headers: { referer: "https://www.pixiv.net" },
						});
						const image = Buffer.from(await response.arrayBuffer());
						m.reply({
							image,
							caption: `Title: ${hasil.title}\nAuthor: ${hasil.author_details.user_name}`,
						});
						setLimit(m, db);
					} catch (e) {
						console.log(e);
						m.reply("Post not available!");
					}
				}
				break;
			case "pinterest":
			case "pint":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} hu tao`);
					try {
						const res = await fetchApi("/search/pinterest", { query: text });
						const hasil = pickRandom(res.result);
						const image = await getBuffer(hasil);
						await m.reply({ image, caption: "Hasil dari: " + text });
						setLimit(m, db);
					} catch (e) {
						m.reply("Pencarian tidak ditemukan!");
					}
				}
				break;
			case "wallpaper":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} hu tao`);
					try {
						let anu = await fetchApi("/search/pinterest", { query: text });
						if (anu.length < 1) {
							m.reply("Post not available!");
						} else {
							let result = pickRandom(anu.result);
							await m.reply({
								image: { url: result.urls.original },
								caption: `*Media Url :* ${result.pin}${result.description ? "\n*Description :* " + result.description : ""}`,
							});
							setLimit(m, db);
						}
					} catch (e) {
						m.reply("Server wallpaper sedang offline!");
					}
				}
				break;
			case "ringtone":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} black rover`);
					try {
						let anu = await fetchApi("/search/meloboom", { query: text });
						let result = pickRandom(anu.result.data);
						await m.reply({
							audio: {
								url: anu.result.populated.media[result.media.audio[0]].url,
							},
							fileName: result.slug + ".mp3",
							mimetype: "audio/mpeg",
						});
						setLimit(m, db);
					} catch (e) {
						m.reply("Audio tidak ditemukan!");
					}
				}
				break;
			case "npm":
			case "npmjs":
				{
					if (!text) return m.reply(`Example: ${prefix + command} api`);
					try {
						let anu = await fetchApi("/search/npm", { query: text });
						if (anu.result.objects.length > 1) return m.reply("Pencarian Tidak di temukan");
						let txt = anu.result.objects.map(({ package: pkg }) => {
							return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`;
						}).join`\n\n`;
						m.reply(txt);
					} catch (e) {
						m.reply("Pencarian Tidak di temukan");
					}
				}
				break;
			case "style":
				{
					if (!text) return m.reply(`Example: ${prefix + command} Nekonaruu`);
					let anu = await fetchApi("/tools/styletext", { text });
					let txt = anu.result.map((a) => `*${a.name}*\n${a.result}`).join`\n\n`;
					m.reply(txt);
				}
				break;
			case "spotify":
			case "spotifysearch":
				{
					if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`);
					const querySp = extractUrl(text, "spotify.com") || text;
					try {
						let hasil = await fetchApi("/search/spotify", { query: querySp });
						let txt = hasil.result.tracks.map((a) => {
							return `*Title : ${a.name}*\n- Artist : ${a.artists.map((art) => art.name).join(", ")}\n- Url : ${a.url}`;
						}).join`\n\n`;
						m.reply(txt);
					} catch (e) {
						m.reply("Hasil Tidak Ditemukan!");
					}
				}
				break;
			case "tenor":
				{
					if (!text) return m.reply(`Example: ${prefix + command} alone`);
					try {
						const anu = await fetchApi("/search/tenor", { query: text });
						const hasil = pickRandom(anu.result);
						await m.reply({
							video: { url: hasil.media[0].mp4.url },
							caption: `👀 *Media:* ${hasil.url}\n📋 *Description:* ${hasil.content_description}\n🔛 *Url:* ${hasil.itemurl}`,
							gifPlayback: true,
							gifAttribution: 2,
						});
					} catch (e) {
						m.reply("Hasil Tidak Ditemukan!");
					}
				}
				break;
			case "urban":
				{
					if (!text) return m.reply(`Example: ${prefix + command} alone`);
					try {
						const anu = await fetchJson("https://api.urbandictionary.com/v0/define?term=" + text);
						const hasil = pickRandom(anu.list);
						await m.reply(`${hasil.definition}\n\nSumber: ${hasil.permalink}`);
					} catch (e) {
						m.reply("Hasil Tidak Ditemukan!");
					}
				}
				break;

			// Stalker Menu
			case "wastalk":
			case "whatsappstalk":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} @tag / 628xxx`);
					try {
						let num = m.quoted?.sender || m.mentionedJid?.[0] || text;
						if (!num) return m.reply(`Example : ${prefix + command} @tag / 628xxx`);
						num = num.replace(/\D/g, "") + "@s.whatsapp.net";
						if (!(await sock.onWhatsApp(num))[0]?.exists) return m.reply("Nomer tidak terdaftar di WhatsApp!");
						let img = await sock.profilePictureUrl(num, "image").catch((_) => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60");
						let bio = await sock.fetchStatus(num).catch((_) => {});
						let name = await sock.getName(num);
						let business = await sock.getBusinessProfile(num);
						let parsed = parsePhoneNumber(`+${num.split("@")[0]}`);
						let format = parsed.number ? parsed.number.international : num.split("@")[0];
						let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
						let country = parsed.regionCode ? regionNames.of(parsed.regionCode) : "Unknown";
						let wea = `WhatsApp Stalk\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : "-"}\n*° Format Number :* ${format}\n*° Url Api :* wa.me/${num.split("@")[0]}\n*° Mentions :* @${num.split("@")[0]}\n*° Status :* ${bio?.status || "-"}\n*° Date Status :* ${bio?.setAt ? new Date(bio.setAt).toLocaleDateString(global.locale, { year: "numeric", month: "long", day: "numeric" }) : "-"}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : "-"}\n*° Email :* ${business.email ? business.email : "-"}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : "-"}\n*° Timeone :* ${business.business_hours?.timezone ? business.business_hours.timezone : "-"}\n*° Description* : ${business.description ? business.description : "-"}` : "*Standard WhatsApp Account*"}`;
						img ? await sock.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea);
					} catch (e) {
						console.error(e);
						m.reply("Nomer Tidak ditemukan!");
					}
				}
				break;
			case "ghstalk":
			case "githubstalk":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} usernamenya`);
					try {
						const res = await fetchJson("https://api.github.com/users/" + text);
						m.reply({
							image: { url: res.avatar_url },
							caption: `*Username :* ${res.login}\n*Nickname :* ${res.name || "Tidak ada"}\n*Bio :* ${res.bio || "Tidak ada"}\n*ID :* ${res.id}\n*Node ID :* ${res.node_id}\n*Type :* ${res.type}\n*Admin :* ${res.admin ? "Ya" : "Tidak"}\n*Company :* ${res.company || "Tidak ada"}\n*Blog :* ${res.blog || "Tidak ada"}\n*Location :* ${res.location || "Tidak ada"}\n*Email :* ${res.email || "Tidak ada"}\n*Public Repo :* ${res.public_repos}\n*Public Gists :* ${res.public_gists}\n*Followers :* ${res.followers}\n*Following :* ${res.following}\n*Created At :* ${res.created_at} *Updated At :* ${res.updated_at}`,
						});
					} catch (e) {
						m.reply("Username Tidak ditemukan!");
					}
				}
				break;

			// Downloader Menu
			case "ytmp3":
			case "ytaudio":
			case "ytplayaudio":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} url_youtube`);
					const urlYt = extractUrl(text, "youtu");
					if (!urlYt || !urlYt.includes("youtu")) return m.reply("Url Tidak Mengandung Result Dari Youtube!");
					m.react("⏳");
					try {
						const hasil = await ytMp3(urlYt);
						await m.reply({
							audio: { url: hasil.result },
							mimetype: "audio/mpeg",
						});
						setLimit(m, db);
					} catch (e) {
						try {
							const { result: hasil } = await fetchApi("/download/youtube", {
								url: urlYt,
							});
							await m.reply({
								audio: { url: hasil.download },
								mimetype: "audio/mpeg",
							});
							setLimit(m, db);
						} catch (e) {
							console.log("[ytmp3]", e);
							m.reply("Gagal mengunduh audio. Video mungkin privat, dihapus, atau server sedang bermasalah.");
						}
					}
				}
				break;
			case "ytmp4":
			case "ytvideo":
			case "ytplayvideo":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} url_youtube`);
					const urlYt = extractUrl(text, "youtu");
					if (!urlYt || !urlYt.includes("youtu")) return m.reply("Url Tidak Mengandung Result Dari Youtube!");
					m.react("⏳");
					try {
						const hasil = await ytMp4Stream(urlYt);
						await m.reply({
							video: { stream: hasil.stream },
							mimetype: hasil.mimeType || "video/mp4",
							caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ""}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}`,
						});
						setLimit(m, db);
					} catch (e) {
						try {
							const { result: hasil } = await fetchApi("/download/youtube", {
								url: urlYt,
								format: "1080",
							});
							await m.reply({
								document: { url: hasil.download },
								mimetype: "video/mp4",
								fileName: `${hasil.title || Date.now()}.mp4`,
								caption: `*📍Title:* ${hasil.title}\n*✏Quality:* ${hasil.quality ? hasil.quality : ""}\n*⏳Duration:* ${hasil.duration}`,
							});
							setLimit(m, db);
						} catch (e) {
							console.log("[ytmp4]", e);
							m.reply("Gagal mengunduh video. Video mungkin privat, dihapus, atau server sedang bermasalah.");
						}
					}
				}
				break;
			case "ig":
			case "instagram":
			case "instadl":
			case "igdown":
			case "igdl":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} url_instagram`);
					const urlIg = extractUrl(text, "instagram.com");
					if (!urlIg || !urlIg.includes("instagram.com")) return m.reply("Url Tidak Mengandung Result Dari Instagram!");
					m.react("⏳");
					try {
						let hasil = await fetchApi("/download/instagram2", { url: urlIg });
						if (hasil.result?.media?.length > 1) {
							await sock.sendAlbumMessage(
								m.chat,
								{
									album: hasil.result.media.map((a) => (a.type === "video" ? { video: { url: a.url } } : { image: { url: a.url } })),
									caption: hasil.result.title,
								},
								{ quoted: m },
							);
						} else if (hasil.result?.media?.length == 1) {
							await sock.sendFileUrl(m.chat, hasil.result.media[0].url, `*📍Title:* ${hasil.result.title}`, m);
						} else {
							m.reply("Media Tidak ditemukan!");
						}
						setLimit(m, db);
					} catch (e) {
						console.log("[instagram]", e);
						m.reply("Gagal mengunduh media Instagram. Media mungkin privat, dihapus, atau server sedang bermasalah.");
					}
				}
				break;
			case "tiktok":
			case "tiktokdown":
			case "ttdown":
			case "ttdl":
			case "tt":
			case "ttmp4":
			case "ttvideo":
			case "tiktokmp4":
			case "tiktokvideo":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`);
					const urlTt = extractUrl(text, "tiktok.com");
					if (!urlTt || !urlTt.includes("tiktok.com")) return m.reply("Url Tidak Mengandung Result Dari Tiktok!");
					try {
						const hasil = await fetchApi("/download/tiktok", { url: urlTt });
						m.react("⏳");
						let caption_text = `*📍Title:* ${hasil.result.desc || "-"}\n*🕓Create At:* ${hasil.result.create_time}\n*🎃Author:* ${hasil.result.author.nickname} (@${hasil.result.author.unique_id})`;
						if (hasil.result.download.type == "video") {
							await m.reply({
								video: {
									url: hasil.result.download?.video?.nowm_hd || hasil.result.download?.video?.nowm,
								},
								caption: caption_text,
							});
						} else if (hasil.result.download.type == "images") {
							await sock.sendAlbumMessage(
								m.chat,
								{
									album: hasil.result.download.images.map((a) => ({
										image: { url: a.url },
									})),
									caption: `*📍Title:* ${hasil.result.desc || "-"}\n*🕓Create At:* ${hasil.result.create_time}\n*🎃Author:* ${hasil.result.author.nickname} (@${hasil.result.author.unique_id})`,
								},
								{ quoted: m },
							);
						} else {
							return m.reply("Url Tidak Valid!");
						}

						if (hasil.result.download?.music) {
							await m.reply({ audio: { url: hasil.result.download.music }, mimetype: "audio/mpeg" });
						}

						setLimit(m, db);
					} catch (e) {
						console.log("[tiktok]", e);
						m.reply("Gagal mengunduh TikTok. Video mungkin privat, dihapus, atau server sedang bermasalah.");
					}
				}
				break;
			case "ttmp3":
			case "tiktokmp3":
			case "ttaudio":
			case "tiktokaudio":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`);
					const urlTt = extractUrl(text, "tiktok.com");
					if (!urlTt || !urlTt.includes("tiktok.com")) return m.reply("Url Tidak Mengandung Result Dari Tiktok!");
					try {
						const hasil = await fetchApi("/download/tiktok", { url: urlTt });
						m.react("⏳");
						await m.reply({
							audio: { url: hasil.result.download.music },
							mimetype: "audio/mpeg",
						});
						setLimit(m, db);
					} catch (e) {
						console.log("[tiktok-mp3]", e);
						m.reply("Gagal mengunduh audio TikTok. Video mungkin privat, dihapus, atau server sedang bermasalah.");
					}
				}
				break;
			case "fb":
			case "fbdl":
			case "fbdown":
			case "facebook":
			case "facebookdl":
			case "facebookdown":
			case "fbdownload":
			case "fbmp4":
			case "fbvideo":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} url_facebook`);
					const urlFb = extractUrl(text, "facebook.com") || extractUrl(text, "fb.watch");
					if (!urlFb || (!urlFb.includes("facebook.com") && !urlFb.includes("fb.watch"))) return m.reply("Url Tidak Mengandung Result Dari Facebook!");
					try {
						const hasil = await fetchApi("/download/facebook", { url: urlFb });
						if (!hasil.result.hd && !hasil.result.sd) {
							m.reply("Video Tidak ditemukan!");
						} else {
							m.react("⏳");
							await sock.sendFileUrl(m.chat, hasil.result.hd || hasil.result.sd, `*🎐Title:* ${hasil.result.title}`, m);
						}
						setLimit(m, db);
					} catch (e) {
						console.log("[facebook]", e);
						m.reply("Gagal mengunduh video Facebook. Video mungkin privat, dihapus, atau server sedang bermasalah.");
					}
				}
				break;
			case "mediafire":
			case "mf":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`);
					const urlMf = extractUrl(text, "mediafire.com");
					if (!urlMf || !urlMf.includes("mediafire.com")) return m.reply("Url Invalid!");
					try {
						let { result: res } = await fetchApi("/download/mediafire", {
							url: urlMf,
						});
						await sock.sendMedia(m.chat, res.link, res.filename, `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${res.filename}\n*${setv} Size* : ${res.size}`, m);
						setLimit(m, db);
					} catch (e) {
						m.reply(global.mess.fail);
					}
				}
				break;
			case "spotifydl":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
					const urlSp = extractUrl(text, "open.spotify.com");
					if (!urlSp || !urlSp.includes("open.spotify.com/track")) return m.reply("Url Invalid!");
					try {
						const { result: hasil } = await fetchApi("/download/spotify", {
							url: urlSp,
						});
						if (!hasil || !hasil.url) {
							return m.reply("❌ Gagal mengunduh lagu dari Spotify. Pastikan link valid atau coba lagi nanti.");
						}
						m.react("⏳");
						await sock.sendMessage(
							m.chat,
							{
								audio: { url: hasil.url },
								mimetype: "audio/mpeg",
							},
							{ quoted: m },
						);
						setLimit(m, db);
					} catch (e) {
						console.log(e);
						m.reply(global.mess.fail);
					}
				}
				break;

			// Quotes Menu
			case "motivasi":
				{
					const hasil = await fetchApi("/random/motivasi");
					m.reply(hasil.result);
				}
				break;
			case "bijak":
				{
					const hasil = await fetchApi("/random/bijak");
					m.reply(hasil.result);
				}
				break;
			case "dare":
				{
					const hasil = await fetchApi("/random/dare");
					m.reply(hasil.result);
				}
				break;
			case "quotes":
				{
					const { result: hasil } = await fetchApi("/random/quotes");
					m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`);
				}
				break;
			case "truth":
				{
					const hasil = await fetchApi("/random/truth");
					m.reply(`_${hasil.result}_`);
				}
				break;
			case "renungan":
				{
					const hasil = await fetchApi("/random/renungan");
					m.reply(hasil.result, {
						contextInfo: {
							forwardingScore: 10,
							isForwarded: true,
						},
					});
				}
				break;
			case "bucin":
				{
					const hasil = await fetchApi("/random/bucin");
					m.reply(hasil.result);
				}
				break;

			// Random Menu
			case "coffe":
			case "kopi":
				{
					try {
						await sock.sendFileUrl(m.chat, "https://coffee.alexflipnote.dev/random", "☕ Random Coffe", m);
					} catch (e) {
						try {
							const anu = await fetchJson("https://api.sampleapis.com/coffee/hot");
							await sock.sendFileUrl(m.chat, pickRandom(anu).image, "☕ Random Coffe", m);
						} catch (e) {
							m.reply("Server Sedang Offline!");
						}
					}
				}
				break;

			// Anime Menu
			case "waifu":
			case "neko":
				{
					try {
						if (!isNsfw && text === "nsfw") return m.reply("Filter Nsfw Sedang Aktif!");
						const res = await fetchJson("https://api.waifu.pics/" + (text === "nsfw" ? "nsfw" : "sfw") + "/" + command);
						await sock.sendFileUrl(m.chat, res.url, "Random Waifu", m);
						setLimit(m, db);
					} catch (e) {
						m.reply("Server sedang offline!");
					}
				}
				break;

			// Fun Menu
			case "dadu":
				{
					let ddsa = [
						{ url: "https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png", no: 1 },
						{ url: "https://telegra.ph/file/797f86e444755282374ef.png", no: 2 },
						{ url: "https://telegra.ph/file/970d2a7656ada7c579b69.png", no: 3 },
						{ url: "https://telegra.ph/file/0470d295e00ebe789fb4d.png", no: 4 },
						{ url: "https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png", no: 5 },
						{ url: "https://telegra.ph/file/99dcd999991a79f9ba0c0.png", no: 6 },
					];
					let media = pickRandom(ddsa);
					try {
						await sock.sendAsSticker(m.chat, media.url, m, {
							packname,
							author,
							isAvatar: 1,
						});
					} catch (e) {
						let anu = await fetch(media.url);
						let una = Buffer.from(await anu.arrayBuffer());
						await sock.sendAsSticker(m.chat, una, m, {
							packname,
							author,
							isAvatar: 1,
						});
					}
				}
				break;
			case "halah":
			case "hilih":
			case "huluh":
			case "heleh":
			case "holoh":
				{
					if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`);
					let ter = command[1].toLowerCase();
					let tex = m.quoted ? (m.quoted.text ? m.quoted.text : q ? q : m.text) : q ? q : m.text;
					m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()));
				}
				break;
			case "bisakah":
				{
					if (!text) return m.reply(`Example : ${prefix + command} saya menang?`);
					let bisa = ["Bisa", "Coba Saja", "Pasti Bisa", "Mungkin Saja", "Tidak Bisa", "Tidak Mungkin", "Coba Ulangi", "Ngimpi kah?", "yakin bisa?"];
					let keh = bisa[Math.floor(Math.random() * bisa.length)];
					m.reply(`*Bisakah ${text}*\nJawab : ${keh}`);
				}
				break;
			case "apakah":
				{
					if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`);
					let apa = ["Iya", "Tidak", "Bisa Jadi", "Coba Ulangi", "Mungkin Saja", "Mungkin Tidak", "Mungkin Iya", "Ntahlah"];
					let kah = apa[Math.floor(Math.random() * apa.length)];
					m.reply(`*${command} ${text}*\nJawab : ${kah}`);
				}
				break;
			case "kapan":
			case "kapankah":
				{
					if (!text) return m.reply(`Example : ${prefix + command} saya menang?`);
					let kapan = [
						"Besok",
						"Lusa",
						"Nanti",
						"4 Hari Lagi",
						"5 Hari Lagi",
						"6 Hari Lagi",
						"1 Minggu Lagi",
						"2 Minggu Lagi",
						"3 Minggu Lagi",
						"1 Bulan Lagi",
						"2 Bulan Lagi",
						"3 Bulan Lagi",
						"4 Bulan Lagi",
						"5 Bulan Lagi",
						"6 Bulan Lagi",
						"1 Tahun Lagi",
						"2 Tahun Lagi",
						"3 Tahun Lagi",
						"4 Tahun Lagi",
						"5 Tahun Lagi",
						"6 Tahun Lagi",
						"1 Abad lagi",
						"3 Hari Lagi",
						"Bulan Depan",
						"Ntahlah",
						"Tidak Akan Pernah",
					];
					let koh = kapan[Math.floor(Math.random() * kapan.length)];
					m.reply(`*${command} ${text}*\nJawab : ${koh}`);
				}
				break;
			case "siapa":
			case "siapakah":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!text) return m.reply(`Example : ${prefix + command} jawa?`);
					let member = (store.groupMetadata?.[m.chat]?.participants || m.metadata?.participants || []).map((a) => a.phoneNumber || a.id).filter(Boolean);
					if (member.length === 0) return m.reply("Data member grup tidak tersedia! Harap coba lagi nanti.");
					let siapakh = pickRandom(member);
					m.reply(`@${siapakh ? siapakh.split("@")[0] : ""}`);
				}
				break;
			case "tanyakerang":
			case "kerangajaib":
			case "kerang":
				{
					if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`);
					let krng = ["Mungkin suatu hari", "Tidak juga", "Tidak keduanya", "Kurasa tidak", "Ya", "Tidak", "Coba tanya lagi", "Tidak ada"];
					let jwb = pickRandom(krng);
					m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`);
				}
				break;
			case "cekmati":
				{
					if (!text) return m.reply(`Example : ${prefix + command} nama lu`);
					let teksnya = encodeToLetters(text);
					let data = await fetch(`https://api.agify.io/?name=${teksnya}`)
						.then((res) => res.json())
						.catch((e) => ({ age: null }));
					let consistentAge = 0;
					for (let i = 0; i < teksnya.length; i++) consistentAge += teksnya.charCodeAt(i);
					let finalAge = data.age == null ? (consistentAge % 90) + 20 : data.age;
					let nameDisplay = m.mentionedJid && m.mentionedJid.length > 0 ? `@${m.mentionedJid[0].split("@")[0]}` : text;
					m.reply(`Nama : ${nameDisplay}\n*Mati Pada Umur :* ${finalAge} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`);
				}
				break;
			case "ceksifat":
				{
					let sifat_a = [
						"Bijak",
						"Sabar",
						"Kreatif",
						"Humoris",
						"Mudah bergaul",
						"Mandiri",
						"Setia",
						"Jujur",
						"Dermawan",
						"Idealis",
						"Adil",
						"Sopan",
						"Tekun",
						"Rajin",
						"Pemaaf",
						"Murah hati",
						"Ceria",
						"Percaya diri",
						"Penyayang",
						"Disiplin",
						"Optimis",
						"Berani",
						"Bersyukur",
						"Bertanggung jawab",
						"Bisa diandalkan",
						"Tenang",
						"Kalem",
						"Logis",
					];
					let sifat_b = [
						"Sombong",
						"Minder",
						"Pendendam",
						"Sensitif",
						"Perfeksionis",
						"Caper",
						"Pelit",
						"Egois",
						"Pesimis",
						"Penyendiri",
						"Manipulatif",
						"Labil",
						"Penakut",
						"Vulgar",
						"Tidak setia",
						"Pemalas",
						"Kasar",
						"Rumit",
						"Boros",
						"Keras kepala",
						"Tidak bijak",
						"Pembelot",
						"Serakah",
						"Tamak",
						"Penggosip",
						"Rasis",
						"Ceroboh",
						"Intoleran",
					];
					let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : "@" + m.sender.split("@")[0]}${text && m.mentionedJid ? "" : `\n│• Nama : *${text ? text : m.pushName}*` || "\n│• Nama : *Tanpa Nama*"}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`;
					m.reply(teks);
				}
				break;
			case "cekkhodam":
				{
					if (!text) return m.reply(`Example : ${prefix + command} nama lu`);
					try {
						const { result: hasil } = await fetchApi("/primbon/cekkhodam");
						m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`);
					} catch (e) {
						m.reply(pickRandom(["Dokter Indosiar", "Sigit Rendang", "Ustadz Sinetron", "Bocil epep"]));
					}
				}
				break;
			case "rate":
			case "nilai":
				{
					m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`);
				}
				break;
			case "jodohku":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					let member = (store.groupMetadata?.[m.chat]?.participants || m.metadata?.participants || []).map((a) => a.phoneNumber || a.id).filter(Boolean);
					if (member.length === 0) return m.reply("Data member grup tidak tersedia! Harap coba lagi nanti.");
					let jodoh = pickRandom(member);
					m.reply(`👫Jodoh mu adalah\n@${m.sender.split("@")[0]} ❤ @${jodoh ? jodoh.split("@")[0] : "0"}`);
				}
				break;
			case "jadian":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					let member = (store.groupMetadata?.[m.chat]?.participants || m.metadata?.participants || []).map((a) => a.phoneNumber || a.id).filter(Boolean);
					if (member.length === 0) return m.reply("Data member grup tidak tersedia! Harap coba lagi nanti.");
					let jadian1 = pickRandom(member);
					let jadian2 = pickRandom(member);
					m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1 ? jadian1.split("@")[0] : ""} ❤ @${jadian2 ? jadian2.split("@")[0] : ""}`);
				}
				break;
			case "fitnah":
				{
					let [teks1, teks2, teks3] = text.split`|`;
					if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`);
					let ftelo = {
						key: {
							fromMe: false,
							participant: teks3.replace(/[^0-9]/g, "") + "@s.whatsapp.net",
							...(m.isGroup
								? { remoteJid: m.chat }
								: {
										remoteJid: teks3.replace(/[^0-9]/g, "") + "@s.whatsapp.net",
									}),
						},
						message: { conversation: teks1 },
					};
					sock.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
				}
				break;
			case "coba":
				{
					let anu = ["Aku Monyet", "Aku Kera", "Aku Tolol", "Aku Kaya", "Aku Dewa", "Aku Anjing", "Aku Dongo", "Aku Raja", "Aku Sultan", "Aku Baik", "Aku Hitam", "Aku Suki"];
					await sock.sendButtonMsg(m.chat, {
						text: "Semoga Hoki😹",
						buttons: [
							{
								buttonId: "teshoki",
								buttonText: { displayText: "\n" + pickRandom(anu) },
								type: 1,
							},
							{
								buttonId: "cobacoba",
								buttonText: { displayText: "\n" + pickRandom(anu) },
								type: 1,
							},
						],
					});
				}
				break;

			// Game Menu
			case "slot":
				{
					await gameSlot(sock, m, db);
				}
				break;
			case "casino":
				{
					await gameCasinoSolo(sock, m, prefix, db);
				}
				break;
			case "samgong":
			case "kartu":
				{
					await gameSamgongSolo(sock, m, db);
				}
				break;
			case "rampok":
			case "merampok":
				{
					await gameMerampok(m, db);
				}
				break;
			case "begal":
				{
					await gameBegal(sock, m, db);
				}
				break;
			case "suitpvp":
			case "suit":
				{
					if (Object.values(suit).find((roof) => roof.id.startsWith("suit") && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Selesaikan suit mu yang sebelumnya`);
					if (!m.mentionedJid || !m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nExample : ${prefix}suit @${ownerNumber[0]}`, m.chat, { mentions: [ownerNumber[0] + "@s.whatsapp.net"] });
					if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`);
					if (Object.values(suit).find((roof) => roof.id.startsWith("suit") && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`);
					let caption = `_*SUIT PvP*_\n\n@${m.sender.split("@")[0]} menantang @${m.mentionedJid[0].split("@")[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split("@")[0]} untuk ketik terima/tolak`;
					let id = "suit_" + Date.now();
					suit[id] = {
						chat: caption,
						id: id,
						p: m.sender,
						p2: m.mentionedJid[0],
						status: "wait",
						poin: 10,
						poin_lose: 10,
						timeout: 3 * 60 * 1000,
					};
					m.reply(caption);
					await sleep(3 * 60 * 1000);
					if (suit[id]) {
						m.reply(`_Waktu suit habis_`);
						delete suit[id];
					}
				}
				break;
			case "delsuit":
			case "deletesuit":
				{
					let roomnya = Object.values(suit).find((roof) => roof.id.startsWith("suit") && [roof.p, roof.p2].includes(m.sender));
					if (!roomnya) return m.reply(`Kamu sedang tidak berada di room suit !`);
					delete suit[roomnya.id];
					m.reply(`Berhasil delete session room suit !`);
				}
				break;
			case "ttc":
			case "ttt":
			case "tictactoe":
				{
					if (Object.values(tictactoe).find((room) => room.id.startsWith("tictactoe") && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
					let room = Object.values(tictactoe).find((room) => room.state === "WAITING" && (text ? room.name === text : true));
					if (room) {
						m.reply("Partner ditemukan!");
						room.o = m.chat;
						room.game.playerO = m.sender;
						room.state = "PLAYING";
						if (!(room.game instanceof TicTacToe)) {
							room.game = Object.assign(new TicTacToe(room.game.playerX, room.game.playerO), room.game);
						}
						let arr = room.game.render().map((v) => {
							return {
								X: "❌",
								O: "⭕",
								1: "1️⃣",
								2: "2️⃣",
								3: "3️⃣",
								4: "4️⃣",
								5: "5️⃣",
								6: "6️⃣",
								7: "7️⃣",
								8: "8️⃣",
								9: "9️⃣",
							}[v];
						});
						let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join("")}\n${arr.slice(3, 6).join("")}\n${arr.slice(6).join("")}\n\nMenunggu @${room.game.currentTurn.split("@")[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`;
						if (room.x !== room.o) await sock.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m });
						await sock.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m });
					} else {
						room = {
							id: "tictactoe-" + +new Date(),
							x: m.chat,
							o: "",
							game: new TicTacToe(m.sender, "o"),
							state: "WAITING",
						};
						if (text) room.name = text;
						sock.sendMessage(
							m.chat,
							{
								text: "Menunggu partner" + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ""),
								mentions: m.mentionedJid,
							},
							{ quoted: m },
						);
						tictactoe[room.id] = room;
						await sleep(300000);
						if (tictactoe[room.id]) {
							m.reply(`_Waktu ${command} habis_`);
							delete tictactoe[room.id];
						}
					}
				}
				break;
			case "delttc":
			case "delttt":
				{
					let roomnya = Object.values(tictactoe).find((room) => room.id.startsWith("tictactoe") && [room.game.playerX, room.game.playerO].includes(m.sender));
					if (!roomnya) return m.reply(`Kamu sedang tidak berada di room tictactoe !`);
					delete tictactoe[roomnya.id];
					m.reply(`Berhasil delete session room tictactoe !`);
				}
				break;
			case "tebakbom":
				{
					if (tebakbom[m.sender]) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					tebakbom[m.sender] = {
						petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
						board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
						bomb: 3,
						lolos: 7,
						pick: 0,
						nyawa: ["❤️", "❤️", "❤️"],
					};
					await m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
					await sleep(120000);
					if (tebakbom[m.sender]) {
						m.reply(`_Waktu ${command} habis_`);
						delete tebakbom[m.sender];
					}
				}
				break;
			case "tekateki":
				{
					if (iGame(tekateki, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/tekateki");
					let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`);
					tekateki[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(tekateki, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + tekateki[m.chat + key.id].jawaban);
						delete tekateki[m.chat + key.id];
					}
				}
				break;
			case "tebaklirik":
				{
					if (iGame(tebaklirik, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/tebaklirik");
					let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`);
					tebaklirik[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id,
					};
					await sleep(90000);
					if (rdGame(tebaklirik, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + tebaklirik[m.chat + key.id].jawaban);
						delete tebaklirik[m.chat + key.id];
					}
				}
				break;
			case "tebakkata":
				{
					if (iGame(tebakkata, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/tebakkata");
					let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`);
					tebakkata[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(tebakkata, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + tebakkata[m.chat + key.id].jawaban);
						delete tebakkata[m.chat + key.id];
					}
				}
				break;
			case "family100":
				{
					if (family100.hasOwnProperty(m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/family100");
					let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`);
					family100[m.chat] = {
						soal: hasil.soal,
						jawaban: hasil.jawaban,
						terjawab: Array.from(hasil.jawaban, () => false),
						id: key.id,
					};
					await sleep(300000);
					if (family100.hasOwnProperty(m.chat)) {
						m.reply("Waktu Habis\nJawaban:\n- " + family100[m.chat].jawaban.join("\n- "));
						delete family100[m.chat];
					}
				}
				break;
			case "susunkata":
				{
					if (iGame(susunkata, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/susunkata");
					let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`);
					susunkata[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(susunkata, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + susunkata[m.chat + key.id].jawaban);
						delete susunkata[m.chat + key.id];
					}
				}
				break;
			case "tebakkimia":
				{
					if (iGame(tebakkimia, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/tebakkimia");
					let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`);
					tebakkimia[m.chat + key.id] = {
						jawaban: hasil.lambang.toLowerCase(),
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(tebakkimia, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + tebakkimia[m.chat + key.id].jawaban);
						delete tebakkimia[m.chat + key.id];
					}
				}
				break;
			case "caklontong":
				{
					if (iGame(caklontong, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/caklontong");
					let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`);
					caklontong[m.chat + key.id] = {
						...hasil,
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(caklontong, m.chat, key.id)) {
						m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`);
						delete caklontong[m.chat + key.id];
					}
				}
				break;
			case "tebaknegara":
				{
					if (iGame(tebaknegara, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/tebaknegara");
					let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`);
					tebaknegara[m.chat + key.id] = {
						jawaban: hasil.negara.toLowerCase(),
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(tebaknegara, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + tebaknegara[m.chat + key.id].jawaban);
						delete tebaknegara[m.chat + key.id];
					}
				}
				break;
			case "tebakgambar":
				{
					if (iGame(tebakgambar, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/tebakgambar");
					let { key } = await sock.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m);
					tebakgambar[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(tebakgambar, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + tebakgambar[m.chat + key.id].jawaban);
						delete tebakgambar[m.chat + key.id];
					}
				}
				break;
			case "tebakbendera":
				{
					if (iGame(tebakbendera, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/games/tebakbendera");
					let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`);
					tebakbendera[m.chat + key.id] = {
						jawaban: hasil.negara.toLowerCase(),
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(tebakbendera, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + tebakbendera[m.chat + key.id].jawaban);
						delete tebakbendera[m.chat + key.id];
					}
				}
				break;
			case "tebakangka":
			case "butawarna":
			case "colorblind":
				{
					if (iGame(tebakangka, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					const { result: hasil } = await fetchApi("/random/color-blind");
					let { key } = await m.reply({
						image: { url: hasil.color_blind[0] },
						caption: `Pilih Jawaban Yang Benar!\nLevel : ${hasil.lv}\nPilihan: ${[hasil.number, ...hasil.similar].sort(() => Math.random() - 0.5).join(", ")}`,
					});
					tebakangka[m.chat + key.id] = {
						jawaban: hasil.number,
						id: key.id,
					};
					await sleep(60000);
					if (rdGame(tebakangka, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + tebakangka[m.chat + key.id].jawaban);
						delete tebakangka[m.chat + key.id];
					}
				}
				break;
			case "kuismath":
			case "math":
				{
					const { genMath, modes } = await import("./lib/math.js");
					const inputMode = ["noob", "easy", "medium", "hard", "extreme", "impossible", "impossible2"];
					if (iGame(kuismath, m.chat)) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
					if (!text) return m.reply(`Mode: ${Object.keys(modes).join(" | ")}\nExample penggunaan: ${prefix}math medium`);
					if (!inputMode.includes(text.toLowerCase())) return m.reply("Mode tidak ditemukan!");
					let result = await genMath(text.toLowerCase());
					let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`);
					kuismath[m.chat + key.id] = {
						jawaban: result.jawaban,
						mode: text.toLowerCase(),
						id: key.id,
					};
					await sleep(result.waktu);
					if (rdGame(kuismath, m.chat, key.id)) {
						m.reply("Waktu Habis\nJawaban: " + kuismath[m.chat + key.id].jawaban);
						delete kuismath[m.chat + key.id];
					}
				}
				break;
			case "ulartangga":
			case "snakeladder":
			case "ut":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (ulartangga[m.chat] && !(ulartangga[m.chat] instanceof SnakeLadder)) {
						ulartangga[m.chat] = Object.assign(new SnakeLadder(ulartangga[m.chat]), ulartangga[m.chat]);
					}
					switch (args[0]) {
						case "create":
						case "join":
							if (ulartangga[m.chat]) {
								if (Object.keys(ulartangga[m.chat].players).length > 8) return m.reply(`Jumlah Pemain Sudah Maksimal\nSilahkan Memulai Permainan\n${prefix + command} start`);
								if (ulartangga[m.chat].players.some((a) => a.id == m.sender)) return m.reply("Kamu Sudah Bergabung!");
								ulartangga[m.chat].players.push({ id: m.sender, move: 0 });
								m.reply("Sukses Join Sesi Game");
							} else {
								ulartangga[m.chat] = new SnakeLadder({
									id: m.chat,
									host: m.sender,
								});
								ulartangga[m.chat].players.push({ id: m.sender, move: 0 });
								ulartangga[m.chat].time = Date.now();
								m.reply("Sukses Membuat Sesi Game");
							}
							break;
						case "start":
							if (!ulartangga[m.chat]) return m.reply("Tidak Ada Sesi Yang Sedang Berlangsung!");
							if (ulartangga[m.chat].players.length < 2) return m.reply("Jumlah Pemain Kurang!\nMinimal 2 Pemain!");
							if (ulartangga[m.chat].start) return m.reply("Sesi Sudah dimulai Sejak Awal!");
							if (ulartangga[m.chat].host !== m.sender) return m.reply(`Hanya Pembuat Room @${ulartangga[m.chat].host.split("@")[0]} yang bisa Memulai Sessi!`);
							let { key } = await m.reply({
								image: { url: ulartangga[m.chat].map.url },
								caption: `🐍🪜GAME ULAR TANGGA\n\n${ulartangga[m.chat].players.map((p, i) => `- @${p.id.split("@")[0]} (Pion ${["Merah", "Biru Muda", "Kuning", "Hijau", "Ungu", "Jingga", "Biru Tua", "Putih"][i]})`).join("\n")}\n\nGiliran: @${m.sender.split("@")[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: roll/kocok`,
								mentions: ulartangga[m.chat].players.map((p) => p.id),
							});
							if (ulartangga[m.chat] && key) ulartangga[m.chat].id = key.id;
							ulartangga[m.chat].start = true;
							break;
						case "leave":
							if (!ulartangga[m.chat]) return m.reply("Tidak Ada Sesi Yang Sedang Berlangsung!");
							if (!ulartangga[m.chat].players.some((a) => a.id == m.sender)) return m.reply("Kamu Bukan Pemain!");
							const player = ulartangga[m.chat].players.findIndex((a) => a.id == m.sender);
							if (ulartangga[m.chat].start) return m.reply("Game Sudah dimulai!\nTidak Bisa Keluar Sekarang");
							if (ulartangga[m.chat].players.length < 1 || ulartangga[m.chat].host === m.sender) {
								m.reply(ulartangga[m.chat].host === m.sender ? "Host Meninggalkan Permainan\nPermainan dihentikan!" : "Pemain Kurang Dari 1, Permainan dihentikan!");
								delete ulartangga[m.chat];
								break;
							}
							ulartangga[m.chat].players.splice(player, 1);
							m.reply("Sukses Meninggalkan Permainan");
							break;
						case "end":
							if (!ulartangga[m.chat]) return m.reply("Tidak Ada Sesi Yang Sedang Berlangsung!");
							if (ulartangga[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${ulartangga[m.chat].host.split("@")[0]} yang bisa Menghapus Sessi!`);
							delete ulartangga[m.chat];
							m.reply("Berhasil Menghapus Sesi Game");
							break;
						default:
							m.reply(`🐍🪜GAME ULARTANGGA\nCommand: ${prefix + command} <command>\n- create\n- join\n- start\n- leave\n- end`);
					}
				}
				break;
			case "chess":
			case "catur":
			case "ct":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (chess[m.chat] && (!(chess[m.chat] instanceof Chess) || (chess[m.chat]._board && chess[m.chat]._board.some((v) => v === null)))) {
						const savedData = chess[m.chat];
						chess[m.chat] = new Chess(savedData._fen || undefined);
						Object.assign(chess[m.chat], {
							id: savedData.id,
							turn: savedData.turn,
							player1: savedData.player1,
							player2: savedData.player2,
							start: savedData.start,
							acc: savedData.acc,
							botMode: savedData.botMode,
							time: savedData.time,
							_fen: savedData._fen,
						});
					}
					switch (args[0]) {
						case "start":
							if (!chess[m.chat]) return m.reply("Tidak Ada Sesi Yang Sedang Berlangsung!");
							if (!chess[m.chat].acc) return m.reply("Pemain Tidak Lengkap!");
							if (chess[m.chat].player1 !== m.sender) return m.reply("Hanya Pemain Utama Yang bisa Memulai!");
							if (chess[m.chat].turn !== m.sender && !chess[m.chat].start) {
								const encodedFen = encodeURI(chess[m.chat]._fen);
								let boardUrls = [
									`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,
									`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,
									`https://chessboardimage.com/${encodedFen}.png`,
									`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}`,
									`https://fen2image.chessvision.ai/${encodedFen}`,
								];
								for (let url of boardUrls) {
									try {
										const { data } = { data: await fetchBoardBuffer(url) };
										let { key } = await m.reply({
											image: data,
											caption: `♟️${command.toUpperCase()} GAME\n\nGiliran: @${m.sender.split("@")[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`,
											mentions: [m.sender],
										});
										chess[m.chat].start = true;
										chess[m.chat].turn = m.sender;
										if (chess[m.chat] && key) chess[m.chat].id = key.id;
										return;
									} catch (e) {}
								}
								if (!chess[m.chat].key) {
									m.reply(`Gagal Memulai Permainan!\nGagal Mengirim Papan Permainan!`);
								}
							} else if ([chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) {
								const isPlayer2 = chess[m.chat].player2 === m.sender;
								const nextPlayer = isPlayer2 ? chess[m.chat].player1 : chess[m.chat].player2;
								const encodedFen = encodeURI(chess[m.chat]._fen);
								const boardUrls = [
									`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside${!isPlayer2 ? "&flip=true" : ""}`,
									`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${!isPlayer2 ? "&flip=true" : ""}`,
									`https://chessboardimage.com/${encodedFen}${!isPlayer2 ? "-flip" : ""}.png`,
									`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765${!isPlayer2 ? "&orientation=black" : ""}`,
									`https://fen2image.chessvision.ai/${encodedFen}/${!isPlayer2 ? "?pov=black" : ""}`,
								];
								for (let url of boardUrls) {
									try {
										chess[m.chat].turn = chess[m.chat].turn === m.sender ? m.sender : nextPlayer;
										const { data } = { data: await fetchBoardBuffer(url) };
										let { key } = await m.reply({
											image: data,
											caption: `♟️CHESS GAME\n\nGiliran: @${chess[m.chat].turn.split("@")[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`,
											mentions: [chess[m.chat].turn],
										});
										if (chess[m.chat] && key) chess[m.chat].id = key.id;
										break;
									} catch (e) {}
								}
							}
							break;
						case "join":
							if (chess[m.chat]) {
								if (chess[m.chat].player1 !== m.sender) {
									if (chess[m.chat].acc) return m.reply(`Pemain Sudah Terisi\nSilahkan Coba Lagi Nanti`);
									let teks = chess[m.chat].player2 === m.sender ? "TerimaKasih Sudah Mau Bergabung" : `Karena @${chess[m.chat].player2.split("@")[0]} Tidak Merespon\nAkan digantikan Oleh @${m.sender.split("@")[0]}`;
									chess[m.chat].player2 = m.sender;
									chess[m.chat].acc = true;
									m.reply(`${teks}\nSilahkan @${chess[m.chat].player1.split("@")[0]} Untuk Memulai Game (${prefix + command} start)`);
								} else m.reply(`Kamu Sudah Bergabung\nBiarkan Orang Lain Menjadi Lawanmu!`);
							} else m.reply("Tidak Ada Sesi Yang Sedang Berlangsung!");
							break;
						case "end":
						case "leave":
							if (chess[m.chat]) {
								if (![chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) return m.reply("Hanya Pemain yang Bisa Menghentikan Permainan!");
								delete chess[m.chat];
								m.reply("Sukses Menghapus Sesi Game");
							} else m.reply("Tidak Ada Sesi Yang Sedang Berlangsung!");
							break;
						case "hint":
						case "saran":
							{
								const activeChess = chess[m.sender] || chess[m.chat];
								if (!activeChess) return m.reply("Tidak Ada Sesi Game Yang Sedang Berlangsung!");
								const fen = activeChess.fen ? activeChess.fen() : activeChess._fen;
								m.reply("⏳ Menganalisis langkah terbaik dari Stockfish AI...");
								const ai = await getChessAI(fen, 12);
								if (ai && ai.from && ai.to) {
									m.reply(`💡 *Saran Langkah Terbaik (Hint)*\n\n- Langkah: *${ai.from} → ${ai.to}*\n- Info: ${ai.evalText}\n- Evaluasi Posisi: ${ai.scoreText}`);
								} else {
									m.reply("Gagal mendapatkan saran langkah saat ini.");
								}
							}
							break;
						case "eval":
						case "evaluasi":
						case "analisis":
						case "analis":
							{
								const activeChess = chess[m.sender] || chess[m.chat];
								if (!activeChess) return m.reply("Tidak Ada Sesi Game Yang Sedang Berlangsung!");
								const fen = activeChess.fen ? activeChess.fen() : activeChess._fen;
								m.reply("⏳ Mengevaluasi posisi catur dengan Stockfish AI...");
								const ai = await getChessAI(fen, 14);
								if (ai) {
									m.reply(`📊 *Evaluasi Posisi Catur*\n\n- Skor: *${ai.scoreText}*\n- Peluang Menang: Putih ${ai.winChance}% | Hitam ${100 - ai.winChance}%\n- Detail: ${ai.evalText}`);
								} else {
									m.reply("Gagal mendapatkan evaluasi posisi saat ini.");
								}
							}
							break;
						case "bot":
						case "computer":
							if (chess[m.sender]) {
								delete chess[m.sender];
								return m.reply("Sukses Menghapus Sesi vs BOT");
							} else {
								chess[m.sender] = new Chess();
								chess[m.sender]._fen = chess[m.sender].fen();
								chess[m.sender].turn = m.sender;
								chess[m.sender].botMode = true;
								chess[m.sender].time = Date.now();
								const encodedFen = encodeURI(chess[m.sender]._fen);
								const boardUrls = [
									`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,
									`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,
									`https://chessboardimage.com/${encodedFen}.png`,
									`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765`,
									`https://fen2image.chessvision.ai/${encodedFen}/`,
								];
								for (let url of boardUrls) {
									try {
										const { data } = { data: await fetchBoardBuffer(url) };
										let { key } = await m.reply({
											image: data,
											caption: `♟️CHESS GAME\n\nGiliran: @${chess[m.sender].turn.split("@")[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`,
											mentions: [chess[m.sender].turn],
										});
										if (chess[m.sender] && key) chess[m.sender].id = key.id;
										break;
									} catch (e) {}
								}
							}
							break;
						default:
							if (/^@?\d+$/.test(args[0])) {
								if (chess[m.chat]) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
								if (!m.mentionedJid || m.mentionedJid.length < 1) return m.reply("Tag Orang yang Mau diajak Bermain!");
								chess[m.chat] = new Chess();
								chess[m.chat]._fen = chess[m.chat].fen();
								chess[m.chat].player1 = m.sender;
								chess[m.chat].player2 = m.mentionedJid ? m.mentionedJid[0] : null;
								chess[m.chat].time = Date.now();
								chess[m.chat].turn = null;
								chess[m.chat].acc = false;
								m.reply(`♟️${command.toUpperCase()} GAME\n\n@${m.sender.split("@")[0]} Menantang @${m.mentionedJid[0].split("@")[0]}\nUntuk Bergabung ${prefix + command} join`);
							} else {
								m.reply(`♟️${command.toUpperCase()} GAME\n\nExample: ${prefix + command} @tag/number\n- start\n- leave\n- join\n- computer\n- hint (saran langkah)\n- eval (evaluasi posisi)\n- end`);
							}
					}
				}
				break;
			case "ww":
			case "werewolf":
				{
					await werewolf(sock, prefix, m, args);
				}
				break;
			case "cangkulan":
			case "ck":
				{
					const normalizeCard = (str) =>
						String(str)
							.replace(/\uFE0F|\s/g, "")
							.trim()
							.toLowerCase();
					if (cangkulan[m.chat] && !(cangkulan[m.chat] instanceof Cangkulan)) {
						cangkulan[m.chat] = Object.assign(new Cangkulan(cangkulan[m.chat]), cangkulan[m.chat]);
					}
					let session = null;
					for (const id in cangkulan) {
						if (cangkulan[id].players?.find((p) => p.id === m.sender)) {
							session = cangkulan[id];
							break;
						}
					}
					if (session && !(session instanceof Cangkulan)) {
						session = Object.assign(new Cangkulan(session), session);
						cangkulan[session.id] = session;
					}
					const sendCardPrompt = async (playerId, headerText, sess) => {
						const p = sess.players.find((x) => x.id === playerId);
						if (!p || !p.cards.length) return;
						const hasStart = Object.keys(sess.startCard).length > 0;
						const buttons = p.cards.map((c) => ({
							name: "quick_reply",
							buttonParamsJson: JSON.stringify({
								display_text: `${c.rank}${c.suit}`,
								id: `.${command} play ${c.rank}${c.suit}`,
							}),
						}));
						if (hasStart && !sess.hasMatching(playerId)) {
							buttons.push({
								name: "quick_reply",
								buttonParamsJson: JSON.stringify({
									display_text: "🍺 Minum",
									id: `.${command} minum`,
								}),
							});
						}
						await sock.sendListMsg(
							playerId,
							{
								text: headerText,
								footer: `Kartumu (${p.cards.length}): ${p.cards.map((c) => c.rank + c.suit).join(", ")}`,
								buttons,
							},
							{ quoted: m },
						);
					};

					const endGame = async (sess) => {
						const loser = sess.players[0];
						const winnerList = sess.winner.length ? sess.winner.map((w, i) => `${i + 1}. @${w.id.split("@")[0]}`).join("\n") : "-";
						await sock.sendText(sess.id, `🃏 *GAME CANGKULAN SELESAI!* 🃏\n\n` + `🏆 *Urutan Pemenang:*\n${winnerList}\n\n` + `💀 *Pecundang:* @${loser?.id.split("@")[0] ?? "?"}`, m);
						delete cangkulan[sess.id];
					};

					const finalizeRound = async (sess) => {
						if (!sess.isRoundComplete()) return false;
						const resultMsg = sess.resolveRound();
						if (!resultMsg) return false;
						await sock.sendText(sess.id, resultMsg, m);
						for (let i = sess.players.length - 1; i >= 0; i--) {
							const p = sess.players[i];
							if (p.cards.length === 0) {
								sess.winner.push({ id: p.id });
								sess.players.splice(i, 1);
								const rank = sess.winner.length;
								await sock.sendText(sess.id, `🎉 @${p.id.split("@")[0]} mengeluarkan semua kartu! Posisi ke-${rank}! 🏆`, m);
							}
						}
						if (sess.players.length <= 1) {
							await endGame(sess);
							return true;
						}
						if (!sess.players.find((p) => p.id === sess.leader)) {
							sess.leader = sess.players[0].id;
						}
						await sleep(500);
						await sendCardPrompt(sess.leader, `🃏 Giliranmu memulai ronde baru!\nMainkan kartu pertama:`, sess);
						return true;
					};

					switch (args[0]) {
						case "create":
						case "join":
							{
								if (!m.isGroup) return m.reply(mess.group);
								if (cangkulan[m.chat]?.players?.some((a) => a.id === m.sender)) return m.reply("❌ Kamu sudah bergabung di sesi ini!");
								if (session) return m.reply("❌ Kamu sudah ada di sesi grup lain! Keluar dulu sebelum join di sini.");
								if (cangkulan[m.chat]) {
									if (cangkulan[m.chat].started) return m.reply("❌ Game sudah berjalan! Tunggu sesi berikutnya.");
									if (cangkulan[m.chat].players.length >= 10) return m.reply(`❌ Pemain sudah penuh (maks 10).\nMulai dengan: ${prefix + command} start`);
									cangkulan[m.chat].players.push({ id: m.sender, cards: [] });
									m.reply(`✅ *Berhasil join Game Cangkulan!*\n` + `👥 Total pemain: ${cangkulan[m.chat].players.length}\n` + `Tunggu host memulai: ${prefix + command} start`);
								} else {
									cangkulan[m.chat] = new Cangkulan({
										id: m.chat,
										host: m.sender,
									});
									cangkulan[m.chat].players.push({ id: m.sender, cards: [] });
									m.reply(`✅ *Room Cangkulan berhasil dibuat!*\n` + `Ajak teman: ${prefix + command} join\n` + `Mulai game: ${prefix + command} start`);
								}
							}
							break;

						case "start":
							{
								if (!m.isGroup) return m.reply(mess.group);
								if (!cangkulan[m.chat]) return m.reply(`❌ Belum ada sesi. Buat dulu: ${prefix + command} create`);
								if (cangkulan[m.chat].host !== m.sender) return m.reply(`❌ Hanya host @${cangkulan[m.chat].host.split("@")[0]} yang bisa memulai!`);
								if (cangkulan[m.chat].players.length < 2) return m.reply("❌ Minimal 2 pemain!");
								if (cangkulan[m.chat].started) return m.reply("❌ Game sudah dimulai!");
								cangkulan[m.chat].distributeCards();
								const sess = cangkulan[m.chat];
								await m.reply(
									`🃏 *GAME CANGKULAN DIMULAI!* ♦️\n\n` +
										`📌 Start Card: ${sess.startCard.rank}${sess.startCard.suit}\n` +
										`📦 Sisa Deck: ${sess.deck.length} kartu\n` +
										`🎯 Leader: @${sess.leader.split("@")[0]}\n\n` +
										`👥 *Pemain:*\n` +
										sess.players.map((p) => `• @${p.id.split("@")[0]} (${p.cards.length} kartu)`).join("\n") +
										`\n\nCek private chat untuk kartumu! 👇\n` +
										`wa.me/${botNumber.split("@")[0]}`,
								);

								for (const p of sess.players) {
									await sleep(400);
									const isLeader = p.id === sess.leader;
									await sendCardPrompt(
										p.id,
										isLeader
											? `🃏 Game dimulai! Kamu adalah 🎯 Leader ronde pertama.\nStart Card: ${sess.startCard.rank}${sess.startCard.suit}\nMainkan kartu suit ${sess.startCard.suit} untuk memulai!`
											: `🃏 Game dimulai!\nStart Card: ${sess.startCard.rank}${sess.startCard.suit}\nMainkan kartu suit ${sess.startCard.suit} atau tekan Minum jika tidak ada.`,
										sess,
									);
								}
							}
							break;

						case "minum":
						case "hit":
							{
								if (!session) return m.reply("❌ Tidak ada sesi aktif!");
								if (!session.started) return m.reply("❌ Game belum dimulai!");
								if (!session.players.some((a) => a.id === m.sender)) return m.reply("❌ Kamu belum bergabung!");
								if (!Object.keys(session.startCard).length) return m.reply("⏳ Belum ada Start Card! Tunggu leader memulai ronde.");
								if (session.submitCard.some((s) => s.id === m.sender) || session.skip.includes(m.sender)) return m.reply("❌ Kamu sudah bermain di ronde ini!");
								if (session.hasMatching(m.sender)) {
									return m.reply(`❌ Kamu masih punya kartu suit *${session.startCard.suit}*!\n` + `Mainkan dulu sebelum minum.`);
								}
								const player = session.players.find((p) => p.id === m.sender);

								if (session.deck.length > 0) {
									const newCard = session.deck.shift();
									player.cards.push(newCard);
									await sock.sendText(session.id, `@${m.sender.split("@")[0]} minum 🍺 dan mengambil kartu dari deck! (sisa deck: ${session.deck.length})`, m);
									await sleep(400);
									await sendCardPrompt(m.sender, `🃏 Kartumu setelah minum:\nStart Card: ${session.startCard.rank}${session.startCard.suit}`, session);
								} else {
									await sock.sendText(session.id, `⚠️ @${m.sender.split("@")[0]} terpaksa skip karena deck kosong. Waspada hukuman kartu meja!`, m);
									if (!session.skip.includes(m.sender)) session.skip.push(m.sender);
									await finalizeRound(session);
								}
							}
							break;

						case "play":
							{
								if (!session) return m.reply("❌ Tidak ada sesi aktif!");
								if (!session.started) return m.reply("❌ Game belum dimulai!");
								if (!session.players.some((a) => a.id === m.sender)) return m.reply("❌ Kamu belum bergabung!");
								if (!args[1]) return m.reply(`❌ Format: ${prefix + command} play <kartu>\nContoh: ${prefix + command} play 3♥️`);
								if (session.submitCard.some((s) => s.id === m.sender) || session.skip.includes(m.sender)) return m.reply("❌ Kamu sudah bermain di ronde ini!");
								const player = session.players.find((p) => p.id === m.sender);
								const idx = player.cards.findIndex((c) => normalizeCard(c.rank + c.suit) === normalizeCard(args[1]));
								if (idx === -1) return m.reply("❌ Kartu tidak valid atau tidak ada di tanganmu!");
								const card = player.cards[idx];
								const hasStartCard = Object.keys(session.startCard).length > 0;
								if (hasStartCard) {
									if (card.suit !== session.startCard.suit) {
										if (session.hasMatching(m.sender)) {
											return m.reply(`❌ Harus memainkan kartu suit *${session.startCard.suit}*!`);
										}
										return m.reply(`❌ Kartu tidak sesuai suit *${session.startCard.suit}*!\n` + `Karena tidak punya kartu cocok, gunakan: ${prefix + command} minum`);
									}
								} else {
									if (m.sender !== session.leader) {
										return m.reply(`⏳ Tunggu dulu! Hanya 🎯 @${session.leader.split("@")[0]} (leader) yang bisa memulai ronde baru.`);
									}
								}
								player.cards.splice(idx, 1);
								session.secondDeck.push(card);
								session.submitCard.push({ id: m.sender, card });
								await m.reply(`✅ Kamu memainkan *${card.rank}${card.suit}*`);
								if (!hasStartCard) {
									session.startCard = card;
									await sock.sendText(session.id, `🎯 @${m.sender.split("@")[0]} memulai ronde dengan *${card.rank}${card.suit}*\n` + `Semua pemain harus memainkan kartu suit *${card.suit}*!`, m);
									for (const s of session.players) {
										if (s.id === session.leader) continue;
										await sleep(300);
										await sendCardPrompt(s.id, `🃏 Ronde baru dimulai!\nStart Card: *${card.rank}${card.suit}*\nMainkan kartu suit ${card.suit} atau tekan Minum.`, session);
									}
									await finalizeRound(session);
									return;
								}
								await sock.sendText(session.id, `@${m.sender.split("@")[0]} memainkan *${card.rank}${card.suit}* (sisa: ${player.cards.length} kartu)`, m);
								await finalizeRound(session);
							}
							break;

						case "info":
							{
								const infoSess = session || cangkulan[m.chat];
								if (!infoSess) return m.reply("❌ Tidak ada sesi aktif!");
								if (!infoSess.players.some((a) => a.id === m.sender)) return m.reply("❌ Kamu belum bergabung!");
								const hasStart = Object.keys(infoSess.startCard).length > 0;
								const startStr = hasStart ? `${infoSess.startCard.rank}${infoSess.startCard.suit}` : "-";
								const playerList = infoSess.players
									.map((p, i) => {
										let tag = "";
										if (p.id === infoSess.host) tag += " 👑HOST";
										if (p.id === infoSess.leader) tag += " 🎯Leader";
										return `${i + 1}. @${p.id.split("@")[0]}${tag} - ${p.cards.length} kartu`;
									})
									.join("\n");

								let msg =
									`🃏 *INFO GAME CANGKULAN* ♦️\n` +
									`┏━━━━━━━━━━━━━━━━━━\n` +
									`👥 Pemain : ${infoSess.players.length}\n` +
									`👑 Host : @${infoSess.host.split("@")[0]}\n` +
									`🎯 Leader : ${infoSess.leader ? "@" + infoSess.leader.split("@")[0] : "-"}\n` +
									`📊 Status : ${infoSess.started ? "🟢 Berjalan" : "🔴 Belum Mulai"}\n` +
									`🃏 Start Card: ${startStr}\n` +
									`📦 Sisa Deck: ${infoSess.deck.length} kartu\n` +
									`┗━━━━━━━━━━━━━━━━━━\n` +
									`*Daftar Pemain:*\n${playerList}`;

								if (!m.isGroup) {
									const myCards =
										infoSess.players
											.find((p) => p.id === m.sender)
											?.cards?.map((c) => c.rank + c.suit)
											.join(", ") || "-";
									msg += `\n┏━━━━━━━━━━━━━━━━━━\n*Kartu kamu:*\n${myCards}`;
								}
								if (infoSess.winner.length) {
									msg += `\n┏━━━━━━━━━━━━━━━━━━\n` + `*🏆 Sudah Menang:*\n` + infoSess.winner.map((w, i) => `${i + 1}. @${w.id.split("@")[0]}`).join("\n");
								}
								m.reply(msg);
							}
							break;

						case "deck":
							{
								const deckSess = session || cangkulan[m.chat];
								if (!deckSess) return m.reply("❌ Tidak ada sesi aktif!");
								if (!deckSess.players.some((a) => a.id === m.sender)) return m.reply("❌ Kamu belum bergabung!");
								const submittedNow = deckSess.submitCard.length ? deckSess.submitCard.map((s) => `@${s.id.split("@")[0]}: ${s.card.rank}${s.card.suit}`).join(", ") : "-";
								const skipNow = deckSess.skip.length ? deckSess.skip.map((s) => `@${s.split("@")[0]}`).join(", ") : "-";
								const lastCards =
									deckSess.secondDeck
										.slice(-10)
										.map((c) => c.rank + c.suit)
										.join(", ") || "-";
								m.reply(
									`🃏 *INFO DECK* ♦️\n` +
										`┏━━━━━━━━━━━━━━━━━━\n` +
										`📦 Sisa Deck : ${deckSess.deck.length} kartu\n` +
										`🔄 Kartu Terpakai: ${deckSess.secondDeck.length} kartu\n` +
										`┗━━━━━━━━━━━━━━━━━━\n` +
										`*Ronde Ini:*\n` +
										`▶️ Submit : ${submittedNow}\n` +
										`⏩ Skip : ${skipNow}\n` +
										`┏━━━━━━━━━━━━━━━━━━\n` +
										`*10 Kartu Terakhir:*\n${lastCards}`,
								);
							}
							break;

						case "end":
							{
								if (!m.isGroup) return m.reply(mess.group);
								if (!cangkulan[m.chat]) return m.reply("❌ Tidak ada sesi aktif!");
								if (cangkulan[m.chat].host !== m.sender) return m.reply(`❌ Hanya host @${cangkulan[m.chat].host.split("@")[0]} yang bisa menghapus sesi!`);
								delete cangkulan[m.chat];
								m.reply("🗑️ Sesi Game Cangkulan telah dihapus.");
							}
							break;

						default: {
							m.reply(
								`🃏 *GAME CANGKULAN* ♦️\n\n` +
									`*Cara Main:*\n` +
									`Mainkan kartu dengan suit yang sama dengan Start Card.\n` +
									`Tidak punya? Tekan Minum 🍺 - ambil kartu penalti & skip ronde.\n` +
									`Pemain pertama yang habis kartunya menang!\n\n` +
									`*Commands:*\n` +
									`• \`${prefix + command} create\` - Buat room baru\n` +
									`• \`${prefix + command} join\` - Gabung room\n` +
									`• \`${prefix + command} start\` - Mulai game (host)\n` +
									`• \`${prefix + command} play\` _kartu_ - Main kartu (cth: play 3♥️)\n` +
									`• \`${prefix + command} minum\` - Minum & skip ronde\n` +
									`• \`${prefix + command} info\` - Info game & pemain\n` +
									`• \`${prefix + command} deck\` - Info deck & ronde ini\n` +
									`• \`${prefix + command} end\` - Hapus sesi (host)\n\n` +
									`*Suit:* ♥️ ♦️ ♣️ ♠️`,
							);
						}
					}
				}
				break;

			// Menu
			case "menu":
				{
					if (args[0] == "set") {
						if (!isCreator) return m.reply(mess.owner);
						if (["1", "2", "3", "4"].includes(args[1])) {
							set.template = parseInt(args[1], 10);
							m.reply(`Sukses Mengubah Template Menu\nTemplate : ${set.template == 1 ? "Button Menu" : set.template == 2 ? "List Menu" : set.template == 3 ? "Document Menu" : set.template == 4 ? "Location Menu" : "Button Menu"}`);
						} else m.reply(`Template Menu:\n- 1 (Button Menu)\n- 2 (List Menu)\n- 3 (Document Menu)\n- 4 (Location Menu)\n\nExample: ${prefix + command} set 1`);
					} else if ((args[0] || "").toLowerCase() === "list" || (args[0] || "").toLowerCase() === "indeks") {
						return m.reply(bangunIndeksMenu(setv, prefix));
					} else if (args[0]) {
						const k = args[0].toLowerCase();
						const submenu = kategoriDariNama(k);
						const teks = submenu ? bangunMenu(submenu, setv, prefix) : null;
						const pilihan = daftarKategoriCommand().map((x) => x.kategori.toLowerCase()).join(", ");
						return teks ? m.reply(teks) : m.reply(`Kategori tidak ditemukan. Pilihan: ${pilihan}`);
					} else {
						await m.reply(bangunIndeksMenu(setv, prefix));
						await templateMenu(sock, set.template, m, prefix, setv, db, {
							locale_day,
							date,
							date_time,
							botNumber,
							author,
							packname,
							isVip,
							isPremium,
							ucapanWaktu,
						});
					}
				}
				break;
			case "allmenu":
				{
					let profile;
					try {
						profile = await sock.profilePictureUrl(m.sender, "image");
					} catch (e) {
						profile = fake.anonim;
					}
					const menunya = `
╭──❍「 *INFO USER* 」❍
├ *Nama* : ${m.pushName ? m.pushName : "Tanpa Nama"}
├ *Id* : @${m.sender.split("@")[0]}
├ *User* : ${isVip ? "VIP" : isPremium ? "PREMIUM" : "FREE"}
├ *Limit* : ${isVip ? "VIP" : db.users[m.sender].limit}
├ *Money* : ${db.users[m.sender] ? db.users[m.sender].money.toLocaleString("id-ID") : "0"}
╰─┬────❍
╭─┴─❍「 *INFO BOT* 」❍
├ *Nama Bot* : ${botname || set?.botname || "Rynn"}
├ *Owner* : @${ownerNumber[0].split("@")[0]}
├ *Mode* : ${sock.public ? "Public" : "Self"}
├ *Prefix* :${set.multiprefix ? "「 MULTI-PREFIX 」" : " *" + prefix + "*"}
├ *Premium Feature* : 🔸️
╰─┬────❍
╭─┴─❍「 *ABOUT* 」❍
├ *Date* : ${date}
├ *Day* : ${locale_day}
├ *Time* : ${date_time}
╰──────❍
╭──❍「 *UMUM* 」❍
│${setv} ${prefix}profillengkap (Profil lengkap)
│${setv} ${prefix}profilpencapaian (Pencapaian)
│${setv} ${prefix}profilriwayat (Riwayat)
│${setv} ${prefix}profilpengaturan ([kunci] [nilai] Pengaturan)
│${setv} ${prefix}profilmode ([nama] Mode)
│${setv} ${prefix}profilbahasa ([id|en] Bahasa)
│${setv} ${prefix}profilcadangan (Cadangkan profil)
│${setv} ${prefix}profilpulihkan ([kode] Pulihkan)
│${setv} ${prefix}pengumumanbuat
│${setv} ${prefix}pengumumanisi
│${setv} ${prefix}pengumumankategori
│${setv} ${prefix}pengumumantarget
│${setv} ${prefix}pengumumanterbitkan
│${setv} ${prefix}pengumumanlist
│${setv} ${prefix}pengumumanbaca
│${setv} ${prefix}pengumumansunting
│${setv} ${prefix}pengumumansematkan
│${setv} ${prefix}pengumumantutup
│${setv} ${prefix}pengumumanarsip
│${setv} ${prefix}pengumumantemplat
│${setv} ${prefix}inbox
│${setv} ${prefix}inboxbaca
│${setv} ${prefix}inboxhapus
│${setv} ${prefix}inboxbersih
│${setv} ${prefix}profile
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}remind
│${setv} ${prefix}notes
│${setv} ${prefix}panduan
│${setv} ${prefix}randomcmd
│${setv} ${prefix}riwayat
│${setv} ${prefix}shortcut
│${setv} ${prefix}todo
│${setv} ${prefix}bantuansaya
│${setv} ${prefix}bantuanku
│${setv} ${prefix}coba
│${setv} ${prefix}riwayatperintah
│${setv} ${prefix}aicontoh
│${setv} ${prefix}cobacmd
│${setv} ${prefix}aliasperintah
│${setv} ${prefix}modedebot
│${setv} ${prefix}fitur
│${setv} ${prefix}jelajah
│${setv} ${prefix}cmdbaru
│${setv} ${prefix}peta
│${setv} ${prefix}aliasglobal
│${setv} ${prefix}data
│${setv} ${prefix}bantuan
│${setv} ${prefix}kategori
│${setv} ${prefix}menu <kategori>
│${setv} ${prefix}help
│${setv} ${prefix}cmdlist
│${setv} ${prefix}saran
│${setv} ${prefix}stats
│${setv} ${prefix}menfes (62xxx|fake name)
│${setv} ${prefix}confes (62xxx|fake name)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}coba
│${setv} ${prefix}bot [set]
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}botmenu
│${setv} ${prefix}groupmenu / ${prefix}grupmenu
│${setv} ${prefix}toolsmenu
│${setv} ${prefix}aimenu
│${setv} ${prefix}randommenu
│${setv} ${prefix}funmenu
│${setv} ${prefix}edukasimenu
│${setv} ${prefix}ownermenu
│${setv} ${prefix}authormenu
╰─┬────❍
╭─┴❍「 *BOT* 」❍
│${setv} ${prefix}ping
│${setv} ${prefix}pintasan
│${setv} ${prefix}speed
│${setv} ${prefix}tabel
│${setv} ${prefix}bagi <anggota> <kelompok>
│${setv} ${prefix}notifikasi
│${setv} ${prefix}diam
│${setv} ${prefix}markdown
│${setv} ${prefix}tabel2
│${setv} ${prefix}diagram
│${setv} ${prefix}logunduh
│${setv} ${prefix}pengguna
│${setv} ${prefix}linkaman
│${setv} ${prefix}diagramlingkaran
│${setv} ${prefix}tabeldua
│${setv} ${prefix}skorbelajar
│${setv} ${prefix}agenda
│${setv} ${prefix}get (url) 🔸️
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}surat
│${setv} ${prefix}cekkhodam (nama lu)
╰─┬────❍
╭─┴❍「 *GRUP* 」❍
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}presensi
│${setv} ${prefix}kuorum
│${setv} ${prefix}moderasi
│${setv} ${prefix}autoreply
│${setv} ${prefix}autotag
│${setv} ${prefix}daftargroup
│${setv} ${prefix}agendaminggu
│${setv} ${prefix}tugastambah
│${setv} ${prefix}tugaslist
│${setv} ${prefix}peringatan
│${setv} ${prefix}peringatanlist
│${setv} ${prefix}moderasiskor
│${setv} ${prefix}adminlog
│${setv} ${prefix}sapagrup
│${setv} ${prefix}cattag
│${setv} ${prefix}agendaekspor
│${setv} ${prefix}absenbulanan
│${setv} ${prefix}admindaftar
│${setv} ${prefix}admintambah
│${setv} ${prefix}grupaktivitas
│${setv} ${prefix}namagrup
│${setv} ${prefix}grupaktif
│${setv} ${prefix}absen
│${setv} ${prefix}acara
│${setv} ${prefix}acararsvp
│${setv} ${prefix}catat
│${setv} ${prefix}ceklis
│${setv} ${prefix}template
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}warn (@tag/62xxx)
│${setv} ${prefix}unwarn (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}revoke
│${setv} ${prefix}tagall
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}group set
│${setv} ${prefix}group (khusus admin)
│${setv} ${prefix}warna
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}listgc
│${setv} ${prefix}ban
│${setv} ${prefix}unban
│${setv} ${prefix}mute
│${setv} ${prefix}unmute
│${setv} ${prefix}creategc
│${setv} ${prefix}clearchat
│${setv} ${prefix}setlocale
│${setv} ${prefix}settimezone
│${setv} ${prefix}addprefix
│${setv} ${prefix}delprefix
│${setv} ${prefix}addbadword
│${setv} ${prefix}delbadword
│${setv} ${prefix}getmsgstore
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
│${setv} ${prefix}kickall
│${setv} ${prefix}matikan
│${setv} ${prefix}hidupkan
│${setv} ${prefix}envstatus
│${setv} ${prefix}setmotd
╰─┬────❍
╭─┴❍「 *EKONOMI* 」❍
│${setv} ${prefix}dompetringkas (Ringkas dompet)
│${setv} ${prefix}dompetrincian ([field] Rincian saldo)
│${setv} ${prefix}dompetpindah ([dari] [ke] [nominal] Pindah saldo)
│${setv} ${prefix}dompetrekap ([field] Rekap transaksi)
│${setv} ${prefix}dompetlog ([field] Riwayat transaksi)
│${setv} ${prefix}dompetrekonsiliasi (Rekonsiliasi saldo)
│${setv} ${prefix}anggaranbuat ([nama] [nominal] Buat anggaran)
│${setv} ${prefix}anggaranisi ([nama] [nominal] Isi anggaran)
│${setv} ${prefix}anggaranpakai ([nama] [nominal] Pakai anggaran)
│${setv} ${prefix}anggaransisa ([nama] Sisa anggaran)
│${setv} ${prefix}anggaranlaporan (Laporan anggaran)
│${setv} ${prefix}anggaranhapus ([nama] Hapus anggaran)
│${setv} ${prefix}utangcatat ([nama] [nominal] Catat utang)
│${setv} ${prefix}utangbayar ([nama] [nominal] Bayar utang)
│${setv} ${prefix}utangtagih ([nama] Tagih utang)
│${setv} ${prefix}utangdaftar (Daftar utang)
│${setv} ${prefix}utanghapus ([nama] Hapus utang)
│${setv} ${prefix}koperasisimpan ([nama] [nominal] Simpan modal)
│${setv} ${prefix}koperasitarik ([nama] [nominal] Tarik modal)
│${setv} ${prefix}koperasidividen ([nama] Hitung dividen)
│${setv} ${prefix}koperasianggota ([nama] Daftar anggota)
│${setv} ${prefix}koperasirapat ([nama] Ringkasan koperasi)
│${setv} ${prefix}koperasitutup ([nama] Tutup koperasi)
│${setv} ${prefix}tokostok ([nama] Stok toko)
│${setv} ${prefix}tokorestok ([nama] [jumlah] Restok)
│${setv} ${prefix}tokoharga ([nama] [nominal] Atur harga)
│${setv} ${prefix}tokodiskon ([nama] [persen] Atur diskon)
│${setv} ${prefix}tokobeli ([nama] [jumlah] Beli barang)
│${setv} ${prefix}tokobjual ([nama] [jumlah] Jual barang)
│${setv} ${prefix}tokohlaporan (Laporan toko)
│${setv} ${prefix}tokoktutup ([nama] Tutup toko)
│${setv} ${prefix}kebunbuat
│${setv} ${prefix}kebunlihat
│${setv} ${prefix}kebunbenih
│${setv} ${prefix}kebunbelibenih
│${setv} ${prefix}kebuntanam
│${setv} ${prefix}kebunsiram
│${setv} ${prefix}kebunpupuk
│${setv} ${prefix}kebunpanen
│${setv} ${prefix}kebunjual
│${setv} ${prefix}kebungudang
│${setv} ${prefix}kebunolah
│${setv} ${prefix}kebunpasar
│${setv} ${prefix}kebunluas
│${setv} ${prefix}kebunperluas
│${setv} ${prefix}kebunhama
│${setv} ${prefix}kebuncuaca
│${setv} ${prefix}kebunternak
│${setv} ${prefix}kebunpanenternak
│${setv} ${prefix}kebunpapan
│${setv} ${prefix}kebunprestasi
│${setv} ${prefix}kebunbongkar
│${setv} ${prefix}karirbidang
│${setv} ${prefix}karirprofil
│${setv} ${prefix}karirtugas
│${setv} ${prefix}karirkerjakan
│${setv} ${prefix}karirlembur
│${setv} ${prefix}karirgaji
│${setv} ${prefix}karirkeahlian
│${setv} ${prefix}karirbelajar
│${setv} ${prefix}karirsertifikat
│${setv} ${prefix}karirpromosi
│${setv} ${prefix}karirpindah
│${setv} ${prefix}karirriwayat
│${setv} ${prefix}karirprestasi
│${setv} ${prefix}karirpapan
│${setv} ${prefix}karirkantor
│${setv} ${prefix}karirproyek
│${setv} ${prefix}karirperforma
│${setv} ${prefix}karirinsentif
│${setv} ${prefix}karircuti
│${setv} ${prefix}karirpensiun
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}kurs
│${setv} ${prefix}ekonomi
│${setv} ${prefix}dompet
│${setv} ${prefix}topuang
│${setv} ${prefix}toplimit
│${setv} ${prefix}hadiah
│${setv} ${prefix}tabungtarget
│${setv} ${prefix}uanglog
│${setv} ${prefix}investasi
│${setv} ${prefix}deposito
│${setv} ${prefix}asuransi
│${setv} ${prefix}keuangannilai
│${setv} ${prefix}transferterjadwal
│${setv} ${prefix}bantuangrup
│${setv} ${prefix}investasihari
│${setv} ${prefix}tabunggrafik
│${setv} ${prefix}utangjadwal
│${setv} ${prefix}dompetriwayat
│${setv} ${prefix}pasarsimulasi
│${setv} ${prefix}sisaanggaran
│${setv} ${prefix}topdompet
│${setv} ${prefix}rekening
│${setv} ${prefix}arisan
│${setv} ${prefix}kreditskor
│${setv} ${prefix}asuransiklaim
│${setv} ${prefix}pajaksimulasi
│${setv} ${prefix}grafikpengeluaran
│${setv} ${prefix}pendapatanharian
│${setv} ${prefix}donasikampanye
│${setv} ${prefix}tebaktokoh
│${setv} ${prefix}tebaktokohjawab
│${setv} ${prefix}portofolio
│${setv} ${prefix}dividen
│${setv} ${prefix}obligasi
│${setv} ${prefix}emassimulasi
│${setv} ${prefix}sahamsimulasi
│${setv} ${prefix}kurssimulasi
│${setv} ${prefix}inflasisimulasi
│${setv} ${prefix}warisansimulasi
│${setv} ${prefix}hadiahpoin
│${setv} ${prefix}toko
│${setv} ${prefix}lelang
│${setv} ${prefix}kursus
│${setv} ${prefix}koperasi
│${setv} ${prefix}anggaran
│${setv} ${prefix}pengeluaran
│${setv} ${prefix}pemasukan
│${setv} ${prefix}laporanuang
│${setv} ${prefix}bank
│${setv} ${prefix}tabung
│${setv} ${prefix}tarik
│${setv} ${prefix}lunas
│${setv} ${prefix}dompetgrafik
│${setv} ${prefix}donasi
│${setv} ${prefix}tokoh
│${setv} ${prefix}matauang
│${setv} ${prefix}adduang
╰─┬────❍
╭─┴❍「 *GAME* 」❍
│${setv} ${prefix}gamiharian (Tantangan harian)
│${setv} ${prefix}gametantangan (Tantangan acak)
│${setv} ${prefix}gameturnamen (Game turnamen)
│${setv} ${prefix}gamerekor (Rekor pribadi)
│${setv} ${prefix}gamematihan ([nama] Mode latihan)
│${setv} ${prefix}gamepapan (Papan game)
│${setv} ${prefix}gamehadiah ([poin] Tukar poin)
│${setv} ${prefix}gamemberi ([jid] [jumlah] Beri poin)
│${setv} ${prefix}petbantukebun (Bantu kebun)
│${setv} ${prefix}petpakaipesul (Pakai hasil kebun)
│${setv} ${prefix}pethadiahpanen (Hadiah panen)
│${setv} ${prefix}petprestasilintas (Prestasi lintas)
│${setv} ${prefix}kebunkompos (Pakai kompos)
│${setv} ${prefix}kebunkirimtoko ([barang] [jumlah] Kirim ke toko)
│${setv} ${prefix}kebunpesanan ([barang] [jumlah] Buat pesanan)
│${setv} ${prefix}kebunpengiriman (Status pesanan)
│${setv} ${prefix}kargajidompet ([nominal] Gaji ke dompet)
│${setv} ${prefix}kardandakebun ([nominal] Dana ke kebun)
│${setv} ${prefix}karkinerjapet (Kinerja dan hewan)
│${setv} ${prefix}karsertifikat (Sertifikat karir)
│${setv} ${prefix}rantaistatus (Status rantai)
│${setv} ${prefix}rantaipapan (Papan rantai)
│${setv} ${prefix}rantaihadiah (Hadiah rantai)
│${setv} ${prefix}petadopsi
│${setv} ${prefix}petnama
│${setv} ${prefix}petganti
│${setv} ${prefix}petlihat
│${setv} ${prefix}petmakan
│${setv} ${prefix}petminum
│${setv} ${prefix}petmain
│${setv} ${prefix}petlatih
│${setv} ${prefix}petistirahat
│${setv} ${prefix}petmandi
│${setv} ${prefix}petobat
│${setv} ${prefix}petbarang
│${setv} ${prefix}petbeli
│${setv} ${prefix}petevolve
│${setv} ${prefix}petbakat
│${setv} ${prefix}petpapan
│${setv} ${prefix}petprestasi
│${setv} ${prefix}petturnamen
│${setv} ${prefix}pettoko
│${setv} ${prefix}petlepas
│${setv} ${prefix}gameinfo
│${setv} ${prefix}trivia
│${setv} ${prefix}quizberuntun
│${setv} ${prefix}quizjawab
│${setv} ${prefix}tebakjawab
│${setv} ${prefix}gacha
│${setv} ${prefix}wordle
│${setv} ${prefix}wordlejawab
│${setv} ${prefix}scramble
│${setv} ${prefix}bingo
│${setv} ${prefix}lotre
│${setv} ${prefix}tebakwarna
│${setv} ${prefix}gameskor
│${setv} ${prefix}kuisadaptif
│${setv} ${prefix}kuisskor
│${setv} ${prefix}kartuwarna
│${setv} ${prefix}kartuucapan
│${setv} ${prefix}profilkartu
│${setv} ${prefix}icekartu
│${setv} ${prefix}sudoku
│${setv} ${prefix}game2048
│${setv} ${prefix}kartuingatan
│${setv} ${prefix}tebaklagu
│${setv} ${prefix}tebaklagujawab
│${setv} ${prefix}riddleai
│${setv} ${prefix}riddlejawab
│${setv} ${prefix}gameharian
│${setv} ${prefix}gamepass
│${setv} ${prefix}rekapgame
│${setv} ${prefix}grupkartu
│${setv} ${prefix}stikerkartu
│${setv} ${prefix}stickergambar
│${setv} ${prefix}kartuundangan
│${setv} ${prefix}soalkategori
│${setv} ${prefix}rankinggame
│${setv} ${prefix}tebakurutan
│${setv} ${prefix}tebakurutanjawab
│${setv} ${prefix}kartutaruhan
│${setv} ${prefix}kartupos
│${setv} ${prefix}kuisharian
│${setv} ${prefix}kuisjawab
│${setv} ${prefix}pilihberat
│${setv} ${prefix}tebak
│${setv} ${prefix}rankgame
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}truth
│${setv} ${prefix}bijak
│${setv} ${prefix}dare
│${setv} ${prefix}bucin
│${setv} ${prefix}renungan
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
│${setv} ${prefix}tictactoe
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}begal
│${setv} ${prefix}ulartangga
│${setv} ${prefix}cangkulan
│${setv} ${prefix}catur
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}samgong (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}colorblind
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebakangka
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakbendera
│${setv} ${prefix}quiz
│${setv} ${prefix}hangman
│${setv} ${prefix}mbti
│${setv} ${prefix}soal
│${setv} ${prefix}soalmtk
│${setv} ${prefix}soalipa
│${setv} ${prefix}soalips
│${setv} ${prefix}soalbindon
│${setv} ${prefix}soalppkn
│${setv} ${prefix}dadu
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}siapa (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
│${setv} ${prefix}pilih
│${setv} ${prefix}angkaacak
│${setv} ${prefix}koin
│${setv} ${prefix}coffe
│${setv} ${prefix}quotesmenu
│${setv} ${prefix}gamemenu
╰─┬────❍
╭─┴❍「 *TURNAMEN* 」❍
│${setv} ${prefix}skortotal (Total skor game)
│${setv} ${prefix}skorrincian (Rincian skor)
│${setv} ${prefix}skorpapan (Papan skor)
│${setv} ${prefix}skormusim (Ringkasan musim)
│${setv} ${prefix}skorarsip (Arsip skor)
│${setv} ${prefix}turnamenjadwal (Jadwal turnamen)
│${setv} ${prefix}turnamenpeserta (Peserta turnamen)
│${setv} ${prefix}turnamenunggulan (Unggulan turnamen)
│${setv} ${prefix}turnamenbracket (Bracket turnamen)
│${setv} ${prefix}turnamenhasil ([a] [b] [pemenang] Catat hasil)
│${setv} ${prefix}turnamenpoin ([jid] [poin] Beri poin)
│${setv} ${prefix}turnamenarsip (Arsip turnamen)
│${setv} ${prefix}lagacari ([nama] Cari laga)
│${setv} ${prefix}lagajadwal ([nama] Jadwal laga)
│${setv} ${prefix}lagapapan (Papan laga)
│${setv} ${prefix}papanperingkat
│${setv} ${prefix}turnamen2
│${setv} ${prefix}liga2
│${setv} ${prefix}juaraboards
│${setv} ${prefix}bagiacak
│${setv} ${prefix}bagiseimbang
│${setv} ${prefix}baginama
│${setv} ${prefix}teamseimbang
│${setv} ${prefix}teamrotasi
│${setv} ${prefix}teamlist
│${setv} ${prefix}teamhapus
│${setv} ${prefix}kelompokrekap
│${setv} ${prefix}quizturnamen
│${setv} ${prefix}wordleturnamen
│${setv} ${prefix}gametim
│${setv} ${prefix}liga
│${setv} ${prefix}klasemen
│${setv} ${prefix}team <game> <pemain>
│${setv} ${prefix}turnamen buat
│${setv} ${prefix}turnamen
│${setv} ${prefix}team <n>
│${setv} ${prefix}pair
╰─┬────❍
╭─┴❍「 *EDUKASI* 」❍
│${setv} ${prefix}belajarjalur (Jalur belajar)
│${setv} ${prefix}belajarharian (Materi harian)
│${setv} ${prefix}belajarujian ([kategori] [jawaban] Ujian)
│${setv} ${prefix}belajarnilai (Nilai belajar)
│${setv} ${prefix}belajarsertifikat (Sertifikat belajar)
│${setv} ${prefix}kartubuat ([kategori] Buat kartu)
│${setv} ${prefix}kartuulang (Ulang kartu salah)
│${setv} ${prefix}kartukategori (Kategori kartu)
│${setv} ${prefix}kartustatistik (Statistik kartu)
│${setv} ${prefix}kartuhapus ([kategori] Hapus kartu)
│${setv} ${prefix}kuiskategori ([kategori] Kuis data)
│${setv} ${prefix}kuisturnamen ([nama] Buat turnamen kuis)
│${setv} ${prefix}kuispapan (Papan kuis)
│${setv} ${prefix}kuishadiah ([poin] Hadiah kuis)
│${setv} ${prefix}dataindeks
│${setv} ${prefix}datasumber
│${setv} ${prefix}datavalidasi
│${setv} ${prefix}datakelas
│${setv} ${prefix}dataekspor
│${setv} ${prefix}datacontoh
│${setv} ${prefix}datacarilintas
│${setv} ${prefix}datarekomendasi
│${setv} ${prefix}katakaharian
│${setv} ${prefix}tebakperibahasa
│${setv} ${prefix}kuisbudaya
│${setv} ${prefix}tebakgunung
│${setv} ${prefix}tebakdanau
│${setv} ${prefix}tebaksungai
│${setv} ${prefix}tebakdatajawab
│${setv} ${prefix}resepacak
│${setv} ${prefix}namabayicari
│${setv} ${prefix}sejarahhariini
│${setv} ${prefix}sinonimcari
│${setv} ${prefix}antonimcari
│${setv} ${prefix}singkatancari
│${setv} ${prefix}flashcarddata
│${setv} ${prefix}terbilang
│${setv} ${prefix}gempa
│${setv} ${prefix}hariini
│${setv} ${prefix}waktu
│${setv} ${prefix}dailykalender
│${setv} ${prefix}kalender
│${setv} ${prefix}jadwal
│${setv} ${prefix}matriks3
│${setv} ${prefix}turunan
│${setv} ${prefix}integral
│${setv} ${prefix}koordinat
│${setv} ${prefix}hitungpanjang
│${setv} ${prefix}singkatan
│${setv} ${prefix}flashcardharian
│${setv} ${prefix}materipeta
│${setv} ${prefix}hafalanstreak
│${setv} ${prefix}absengrafik
│${setv} ${prefix}kosakataharian
│${setv} ${prefix}ejaan
│${setv} ${prefix}tatabahasa
│${setv} ${prefix}pantunbuat
│${setv} ${prefix}puisibuat
│${setv} ${prefix}sejarahharian
│${setv} ${prefix}rumustantangan
│${setv} ${prefix}glosarium
│${setv} ${prefix}peribahasaarti
│${setv} ${prefix}latihanhitung
│${setv} ${prefix}teorisingkat
│${setv} ${prefix}petarumus
│${setv} ${prefix}hafalancek
│${setv} ${prefix}materi
│${setv} ${prefix}artikel
│${setv} ${prefix}flashcard
│${setv} ${prefix}flashcardjawab
│${setv} ${prefix}modul
│${setv} ${prefix}bendera
│${setv} ${prefix}umurdetail
│${setv} ${prefix}grafik
│${setv} ${prefix}acakurutan
│${setv} ${prefix}cuaca (kota)
│${setv} ${prefix}uuid
│${setv} ${prefix}susunkata
│${setv} ${prefix}rumus
│${setv} ${prefix}hitung
│${setv} ${prefix}suku
│${setv} ${prefix}kuliner
│${setv} ${prefix}hitungmundur
│${setv} ${prefix}umur
│${setv} ${prefix}roman
│${setv} ${prefix}konversi
│${setv} ${prefix}morse
│${setv} ${prefix}binary
│${setv} ${prefix}hex
│${setv} ${prefix}rot13
│${setv} ${prefix}zodiak
│${setv} ${prefix}wayang
│${setv} ${prefix}lagudaerah
│${setv} ${prefix}wisata
│${setv} ${prefix}resep
│${setv} ${prefix}provinsi
│${setv} ${prefix}lirik
│${setv} ${prefix}fakta
│${setv} ${prefix}puisi
│${setv} ${prefix}ibukota
│${setv} ${prefix}negara
│${setv} ${prefix}unsur
│${setv} ${prefix}planet
│${setv} ${prefix}balik
│${setv} ${prefix}hitungkata
│${setv} ${prefix}namabayi
│${setv} ${prefix}peribahasa
│${setv} ${prefix}kpk
│${setv} ${prefix}fpb
│${setv} ${prefix}faktor
│${setv} ${prefix}prima
│${setv} ${prefix}palindrom
│${setv} ${prefix}anagram
│${setv} ${prefix}diskon
│${setv} ${prefix}cicilan
│${setv} ${prefix}bmi
│${setv} ${prefix}jamtidur
│${setv} ${prefix}akar
│${setv} ${prefix}faktorial
│${setv} ${prefix}bahasa
│${setv} ${prefix}danau
│${setv} ${prefix}gunung
│${setv} ${prefix}pulau
│${setv} ${prefix}haribersejarah
│${setv} ${prefix}selisihhari
│${setv} ${prefix}fibonacci
│${setv} ${prefix}primaantara
│${setv} ${prefix}pecahan
│${setv} ${prefix}terbilang2
│${setv} ${prefix}hurufke
│${setv} ${prefix}format
│${setv} ${prefix}potong
│${setv} ${prefix}hash
│${setv} ${prefix}json
│${setv} ${prefix}luas
│${setv} ${prefix}volume
│${setv} ${prefix}kuadrat
│${setv} ${prefix}deret
│${setv} ${prefix}linear
│${setv} ${prefix}persen
│${setv} ${prefix}matriks
│${setv} ${prefix}vektor
│${setv} ${prefix}kompleks
│${setv} ${prefix}hewan
│${setv} ${prefix}tumbuhan
│${setv} ${prefix}sejarah
│${setv} ${prefix}olahraga
│${setv} ${prefix}singkatan
│${setv} ${prefix}sinonim
│${setv} ${prefix}antonim
│${setv} ${prefix}kamus
│${setv} ${prefix}budaya
│${setv} ${prefix}tarian
│${setv} ${prefix}rumahadat
│${setv} ${prefix}alatmusik
│${setv} ${prefix}batik
│${setv} ${prefix}basis
│${setv} ${prefix}durasi
│${setv} ${prefix}slug
│${setv} ${prefix}base64
│${setv} ${prefix}acakkata
╰─┬────❍
╭─┴❍「 *AI* 」❍
│${setv} ${prefix}ailaporandompet (Ringkas transaksi)
│${setv} ${prefix}aipet (Saran hewan)
│${setv} ${prefix}aikebun (Saran kebun)
│${setv} ${prefix}aikarir (Saran karir)
│${setv} ${prefix}aibelajar (Saran belajar)
│${setv} ${prefix}aigame (Ulas game)
│${setv} ${prefix}aigrup (Ringkas grup)
│${setv} ${prefix}aikarya (Ulas karya)
│${setv} ${prefix}aikodeulas ([kode] Ulas kode)
│${setv} ${prefix}airingkasfitur ([nama] Ringkas fitur)
│${setv} ${prefix}ringkas
│${setv} ${prefix}ide
│${setv} ${prefix}paragraf
│${setv} ${prefix}judulkan
│${setv} ${prefix}tanya
│${setv} ${prefix}terjemah
│${setv} ${prefix}teks
│${setv} ${prefix}code
│${setv} ${prefix}dialog
│${setv} ${prefix}brainstorm
│${setv} ${prefix}kritik
│${setv} ${prefix}translateid
│${setv} ${prefix}airiwayat
│${setv} ${prefix}catattopik
│${setv} ${prefix}rangkumcatatan
│${setv} ${prefix}rapatringkas
│${setv} ${prefix}tugasselesai
│${setv} ${prefix}posterteks
│${setv} ${prefix}aigaya
│${setv} ${prefix}aitopik
│${setv} ${prefix}aibatalkan
│${setv} ${prefix}aikuota
│${setv} ${prefix}aibandingkan
│${setv} ${prefix}logringkas
│${setv} ${prefix}memori
│${setv} ${prefix}identitas
│${setv} ${prefix}terjemahbalik
│${setv} ${prefix}spamdeteksi
│${setv} ${prefix}stikerteks
│${setv} ${prefix}aimemori
│${setv} ${prefix}ailupa
│${setv} ${prefix}aipersona
│${setv} ${prefix}aidebat
│${setv} ${prefix}airangkum
│${setv} ${prefix}aireviewkode
│${setv} ${prefix}airencana
│${setv} ${prefix}aibatas
│${setv} ${prefix}ringkasanbot
│${setv} ${prefix}tanyakomunitas
│${setv} ${prefix}dialogpendek
│${setv} ${prefix}rangkumpelajaran
│${setv} ${prefix}teksrapi
│${setv} ${prefix}teksbalik
│${setv} ${prefix}teksulang
│${setv} ${prefix}tekspotong
│${setv} ${prefix}teksbersih
│${setv} ${prefix}teksheksa
│${setv} ${prefix}teksdariheksa
│${setv} ${prefix}teksbanding
│${setv} ${prefix}wallpaperteks
│${setv} ${prefix}ownerringkas
│${setv} ${prefix}memoripeta
│${setv} ${prefix}roomai
│${setv} ${prefix}hidetag
│${setv} ${prefix}translate
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}ai (query)
│${setv} ${prefix}gemini (query)
│${setv} ${prefix}glm (query)
│${setv} ${prefix}grok (query)
│${setv} ${prefix}claude (query)
│${setv} ${prefix}archipelago (query)
│${setv} ${prefix}deepseek (query)
│${setv} ${prefix}math (level)
│${setv} ${prefix}sungai
│${setv} ${prefix}hitungteks
│${setv} ${prefix}urlcode
╰─┬────❍
╭─┴❍「 *MEDIA* 」❍
│${setv} ${prefix}mediakartu ([judul] [isi] Kartu)
│${setv} ${prefix}mediaposter ([judul] [isi] Poster)
│${setv} ${prefix}mediastiker ([teks] Stiker)
│${setv} ${prefix}mediagaleri (Galeri)
│${setv} ${prefix}mediaanimasi ([nama] [frame] Animasi)
│${setv} ${prefix}mediameta ([teks] Metadata)
│${setv} ${prefix}mediauji ([teks] Uji media)
│${setv} ${prefix}mediahapus ([id] Hapus media)
│${setv} ${prefix}studiodaftar (Daftar studio)
│${setv} ${prefix}studiobuat ([jenis] Buat karya)
│${setv} ${prefix}studioisi ([id] [teks] Isi karya)
│${setv} ${prefix}studiagaya ([id] [gaya] Ubah gaya)
│${setv} ${prefix}studiojadwalkan ([id] Jadwalkan)
│${setv} ${prefix}studioterbit ([id] Terbitkan)
│${setv} ${prefix}studioarsip ([id] Arsipkan)
│${setv} ${prefix}studiolaporan (Laporan studio)
│${setv} ${prefix}contohdata
│${setv} ${prefix}komikpendek
│${setv} ${prefix}galeri
│${setv} ${prefix}stikeranimasi
│${setv} ${prefix}fotoprofil
│${setv} ${prefix}posterucapan
│${setv} ${prefix}faqcari
│${setv} ${prefix}namamerek
│${setv} ${prefix}caption
│${setv} ${prefix}hashtag
│${setv} ${prefix}tagline
│${setv} ${prefix}judulalternatif
│${setv} ${prefix}suratpendek
│${setv} ${prefix}stikerpaket
│${setv} ${prefix}paket
│${setv} ${prefix}spotify (query)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}tenor (query)
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ytmp4 (url)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}tiktokmp3 (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}spotifydl (url)
│${setv} ${prefix}mediafire (url)
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}brat (textnya)
│${setv} ${prefix}bratvid (textnya)
│${setv} ${prefix}ssweb (url) 🔸️
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}dehaze (send/reply img)
│${setv} ${prefix}colorize (send/reply img)
│${setv} ${prefix}hitamkan (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}getexif (reply sticker)
│${setv} ${prefix}progress
│${setv} ${prefix}downloadmenu
│${setv} ${prefix}animemenu
╰─┬────❍
╭─┴❍「 *PENCARIAN* 」❍
│${setv} ${prefix}carilintasfitur ([kata] Cari lintas)
│${setv} ${prefix}cariperintah ([kata] Cari perintah)
│${setv} ${prefix}caridata ([kata] Cari data)
│${setv} ${prefix}caripengguna ([kata] Cari pengguna)
│${setv} ${prefix}carigrup ([kata] Cari grup)
│${setv} ${prefix}caririwayat ([kata] Cari riwayat)
│${setv} ${prefix}caritersimpan ([kata] Simpan)
│${setv} ${prefix}carihapus ([kata] Hapus tersimpan)
│${setv} ${prefix}dataset
│${setv} ${prefix}rekomendasi
│${setv} ${prefix}datasetpenuh
│${setv} ${prefix}indeksdata
│${setv} ${prefix}carifitur
│${setv} ${prefix}notulencari
│${setv} ${prefix}temanrekomendasi
│${setv} ${prefix}kosakatacari
│${setv} ${prefix}resepcari
│${setv} ${prefix}catatcari
│${setv} ${prefix}rekomendasiperintah
│${setv} ${prefix}cari
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}google (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}urban (query)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}wastalk
│${setv} ${prefix}githubstalk
│${setv} ${prefix}searchmenu
│${setv} ${prefix}stalkermenu
╰─┬────❍
╭─┴❍「 *KOMUNITAS* 」❍
│${setv} ${prefix}gruppipapan (Papan grup)
│${setv} ${prefix}gruppianggota (Anggota grup)
│${setv} ${prefix}gruppiperan (Peran grup)
│${setv} ${prefix}gruppiaturan (Aturan grup)
│${setv} ${prefix}gruppinotifikasi (Notifikasi grup)
│${setv} ${prefix}proyektugas ([nama] [teks] Tugas proyek)
│${setv} ${prefix}proyekprogres ([nama] Progres proyek)
│${setv} ${prefix}proyekanggota ([nama] Anggota proyek)
│${setv} ${prefix}proyektenggat ([nama] [tanggal] Atur tenggat)
│${setv} ${prefix}proyekarsip ([nama] Arsip proyek)
│${setv} ${prefix}surveibuat ([judul] Buat survei)
│${setv} ${prefix}surveipilih ([id] [opsi] Pilih opsi)
│${setv} ${prefix}surveihasil ([id] Hasil survei)
│${setv} ${prefix}surveitutup ([id] Tutup survei)
│${setv} ${prefix}reputasilihat (Lihat reputasi)
│${setv} ${prefix}reputasiberi ([jid] [jumlah] Beri reputasi)
│${setv} ${prefix}reputasipapan (Papan reputasi)
│${setv} ${prefix}reputasiaturan (Aturan reputasi)
│${setv} ${prefix}request (text)
│${setv} ${prefix}poll (judul | opsi1 | opsi2)
│${setv} ${prefix}explore
│${setv} ${prefix}peraturan
│${setv} ${prefix}icebreak
│${setv} ${prefix}questmingguan
│${setv} ${prefix}rapat
│${setv} ${prefix}notulen
│${setv} ${prefix}koleksi
│${setv} ${prefix}achievement
│${setv} ${prefix}level
│${setv} ${prefix}levelboard
│${setv} ${prefix}sapaanpribadi
│${setv} ${prefix}pujian
│${setv} ${prefix}semangat
│${setv} ${prefix}ceritapendek
│${setv} ${prefix}mood
│${setv} ${prefix}moodrekap
│${setv} ${prefix}teman
│${setv} ${prefix}autosalam
│${setv} ${prefix}pollhasil
│${setv} ${prefix}peraturanversi
│${setv} ${prefix}bio
│${setv} ${prefix}xp
│${setv} ${prefix}badge
│${setv} ${prefix}badgeberi
│${setv} ${prefix}badgehapus
│${setv} ${prefix}guild
│${setv} ${prefix}perkenalan
│${setv} ${prefix}target
│${setv} ${prefix}proyek
│${setv} ${prefix}peraturansemua
│${setv} ${prefix}tiket
│${setv} ${prefix}faq
│${setv} ${prefix}faqtambah
│${setv} ${prefix}aset
│${setv} ${prefix}konten
│${setv} ${prefix}siaran
│${setv} ${prefix}apresiasi
│${setv} ${prefix}salam
│${setv} ${prefix}ceritalanjut
│${setv} ${prefix}ceritabaca
│${setv} ${prefix}ceritareset
│${setv} ${prefix}aturan
│${setv} ${prefix}filter
│${setv} ${prefix}poin
│${setv} ${prefix}reputasi
│${setv} ${prefix}tepercaya
│${setv} ${prefix}keputusan
│${setv} ${prefix}notulenversi
│${setv} ${prefix}proyekgrup
│${setv} ${prefix}arsip
│${setv} ${prefix}cadangan
│${setv} ${prefix}undang
│${setv} ${prefix}referral
│${setv} ${prefix}seri
│${setv} ${prefix}survei
│${setv} ${prefix}inventaris
│${setv} ${prefix}avatar
│${setv} ${prefix}konstitusi
│${setv} ${prefix}streak
│${setv} ${prefix}quest
│${setv} ${prefix}sapaan
│${setv} ${prefix}setbio
╰─┬────❍
╭─┴❍「 *STATISTIK* 」❍
│${setv} ${prefix}laporanharian (Laporan harian)
│${setv} ${prefix}laporanmingguan (Laporan mingguan)
│${setv} ${prefix}laporanbulan (Laporan bulanan)
│${setv} ${prefix}laporanpertumbuhan (Pertumbuhan)
│${setv} ${prefix}laporanperbandingan ([a] [b] Bandingkan)
│${setv} ${prefix}laporanekspor (Ekspor laporan)
│${setv} ${prefix}laporanjadwalkan ([interval] Jadwalkan)
│${setv} ${prefix}laporanberhenti (Hentikan jadwal)
│${setv} ${prefix}leaderboard
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}rankmingguan
│${setv} ${prefix}statistiklanjut
│${setv} ${prefix}laporgrup
│${setv} ${prefix}laporharian
│${setv} ${prefix}lapormingguan
│${setv} ${prefix}statistikgrup
│${setv} ${prefix}statistikpengguna
│${setv} ${prefix}statistikperintah
│${setv} ${prefix}statistikkinerja
│${setv} ${prefix}laporstatus
│${setv} ${prefix}health
│${setv} ${prefix}metrik
│${setv} ${prefix}diagnosapenuh
│${setv} ${prefix}xptop
│${setv} ${prefix}komunitasstatistik
│${setv} ${prefix}peraturankategori
│${setv} ${prefix}lapordetail
│${setv} ${prefix}laporanbulanan
│${setv} ${prefix}laporantren
│${setv} ${prefix}laporanbanding
│${setv} ${prefix}statistikanggota
│${setv} ${prefix}statistikjam
│${setv} ${prefix}statistikrespons
│${setv} ${prefix}trenperintah
│${setv} ${prefix}apresiasipapan
│${setv} ${prefix}papanskorharian
│${setv} ${prefix}papan
│${setv} ${prefix}statcmd
│${setv} ${prefix}system
│${setv} ${prefix}top
│${setv} ${prefix}statistikbot
│${setv} ${prefix}statistikdata
│${setv} ${prefix}statistik
│${setv} ${prefix}diagnosa
╰─┬────❍
╭─┴❍「 *KEAMANAN* 」❍
│${setv} ${prefix}moderatoraturan (Aturan grup)
│${setv} ${prefix}moderasipingatan ([jid] [alasan] Peringatan)
│${setv} ${prefix}moderatemute ([jid] [menit] Mute)
│${setv} ${prefix}moderasiunmute ([jid] Unmute)
│${setv} ${prefix}moderasilog (Log moderasi)
│${setv} ${prefix}moderasistatistik (Statistik moderasi)
│${setv} ${prefix}moderasiauto ([on|off] Moderasi otomatis)
│${setv} ${prefix}moderasiuji ([teks] Uji aturan)
│${setv} ${prefix}sesihapus
│${setv} ${prefix}akseswarisan
│${setv} ${prefix}bungapinjam
│${setv} ${prefix}aksesku
│${setv} ${prefix}auditcari
│${setv} ${prefix}backupverifikasi
│${setv} ${prefix}ratelimit
│${setv} ${prefix}domainblokir
│${setv} ${prefix}auditekspor
│${setv} ${prefix}privasi
│${setv} ${prefix}auditaku
│${setv} ${prefix}backupinkremental
│${setv} ${prefix}kunci
│${setv} ${prefix}verifikasi
│${setv} ${prefix}akunaman
│${setv} ${prefix}logkeamanan
│${setv} ${prefix}cooldownlist
│${setv} ${prefix}akseslist
│${setv} ${prefix}whitelisttambah
│${setv} ${prefix}blacklistalasan
│${setv} ${prefix}pindah
│${setv} ${prefix}aksesmatriks
│${setv} ${prefix}aksesgrup
│${setv} ${prefix}audit
│${setv} ${prefix}aksesdefault
│${setv} ${prefix}blacklist
│${setv} ${prefix}whitelistcmd
│${setv} ${prefix}pinjam
│${setv} ${prefix}pin
│${setv} ${prefix}unpin
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}password
│${setv} ${prefix}whitelist
│${setv} ${prefix}akses
│${setv} ${prefix}cooldown
│${setv} ${prefix}logaudit
╰─┬────❍
╭─┴❍「 *OWNER* 」❍
│${setv} ${prefix}botdiagnosis (Diagnosis bot)
│${setv} ${prefix}botmetrik (Metrik bot)
│${setv} ${prefix}botpanas (State terberat)
│${setv} ${prefix}botbeban (Beban bot)
│${setv} ${prefix}botcache (Cache bot)
│${setv} ${prefix}botuji ([nama] Uji modul)
│${setv} ${prefix}bothentikan ([nama] Hentikan layanan)
│${setv} ${prefix}botjadwal (Jadwal bot)
│${setv} ${prefix}kesehatanskor (Skor kesehatan)
│${setv} ${prefix}kesehatanrincian (Rincian kesehatan)
│${setv} ${prefix}kesehatansejarah (Riwayat kesehatan)
│${setv} ${prefix}aksesaudit (Audit akses)
│${setv} ${prefix}aksesuji ([perintah] Uji akses)
│${setv} ${prefix}aksespulihkan (Pulihkan akses)
│${setv} ${prefix}backupjadwal (Jadwal backup)
│${setv} ${prefix}backupuji (Uji backup)
│${setv} ${prefix}backuppulihkan ([berkas] Pulihkan backup)
│${setv} ${prefix}pengawaslaporan (Laporan pengawas)
│${setv} ${prefix}pengawasambang ([kunci] [nilai] Atur ambang)
│${setv} ${prefix}pengawashentikan (Hentikan pengawas)
│${setv} ${prefix}tugasdaftar (Tugas internal)
│${setv} ${prefix}tugasinfo (Detail tugas)
│${setv} ${prefix}tugasstatus (Status tugas)
│${setv} ${prefix}tugasjeda (Jeda tugas confirm)
│${setv} ${prefix}tugaslanjut (Lanjut tugas confirm)
│${setv} ${prefix}tugasjalankan (Jalankan tugas confirm)
│${setv} ${prefix}tugasnonaktif (Nonaktif tugas confirm)
│${setv} ${prefix}tugasaktifkan (Aktifkan tugas)
│${setv} ${prefix}tugasriwayat (Riwayat tugas)
│${setv} ${prefix}tugasgagal (Tugas gagal)
│${setv} ${prefix}eventlist (Daftar event)
│${setv} ${prefix}eventpasang (Pasang aksi event)
│${setv} ${prefix}eventlihat (Lihat event)
│${setv} ${prefix}eventlepas (Lepas aksi confirm)
│${setv} ${prefix}eventmatikan (Matikan aksi)
│${setv} ${prefix}eventhidupkan (Hidupkan aksi)
│${setv} ${prefix}eventuji (Uji event)
│${setv} ${prefix}eventriwayat (Riwayat event)
│${setv} ${prefix}aturanbaru (Buat aturan)
│${setv} ${prefix}aturanketika (Syarat aturan)
│${setv} ${prefix}aturanmaka (Aksi aturan)
│${setv} ${prefix}aturanuji (Uji aturan)
│${setv} ${prefix}aturanaktif (Aktif aturan)
│${setv} ${prefix}aturanlist (Daftar aturan)
│${setv} ${prefix}aturandetail (Detail aturan)
│${setv} ${prefix}aturanhapus (Hapus aturan confirm)
│${setv} ${prefix}workflowbaru (Buat workflow)
│${setv} ${prefix}workflowlangkah (Tambah langkah)
│${setv} ${prefix}workflowurut (Urut langkah)
│${setv} ${prefix}workflowjalankan (Jalankan workflow confirm)
│${setv} ${prefix}workflowuji (Uji workflow)
│${setv} ${prefix}workflowstatus (Status workflow)
│${setv} ${prefix}workflowlist (Daftar workflow)
│${setv} ${prefix}workflowhapus (Hapus workflow confirm)
│${setv} ${prefix}templatlist (Daftar templat)
│${setv} ${prefix}templatpakai (Pakai templat)
│${setv} ${prefix}templatsimpan (Simpan templat)
│${setv} ${prefix}templatlihat (Lihat templat)
│${setv} ${prefix}templathapus (Hapus templat confirm)
│${setv} ${prefix}otomasivalidasi (Validasi otomasi)
│${setv} ${prefix}otomasikering (Otomasi kering)
│${setv} ${prefix}otomasibatas (Batas otomasi)
│${setv} ${prefix}otomasiizin (Aksi diizinkan)
│${setv} ${prefix}otomasiaudit (Audit otomasi)
│${setv} ${prefix}otomasistop (Hentikan otomasi confirm)
│${setv} ${prefix}orkestrasistatus (Status modul)
│${setv} ${prefix}orkestrasimodul (Daftar modul)
│${setv} ${prefix}orkestrasiinfo (Info modul)
│${setv} ${prefix}orkestrasiuji (Uji modul)
│${setv} ${prefix}orkestrasiuru (Urutan modul)
│${setv} ${prefix}orkestrasiketergantungan (Ketergantungan modul)
│${setv} ${prefix}ownerlist
│${setv} ${prefix}hadiahevent
│${setv} ${prefix}topbulanan
│${setv} ${prefix}transferbatch
│${setv} ${prefix}restartnow
│${setv} ${prefix}updatenow
│${setv} ${prefix}databaseinfo
│${setv} ${prefix}maintenancewhy
│${setv} ${prefix}modehemat
│${setv} ${prefix}cacheinfo
│${setv} ${prefix}dashboardbuka
│${setv} ${prefix}dashboardtutup
│${setv} ${prefix}relaystatus
│${setv} ${prefix}deploystatus
│${setv} ${prefix}restorediff
│${setv} ${prefix}sesilist
│${setv} ${prefix}databasemigrasi
│${setv} ${prefix}databaseinfopenuh
│${setv} ${prefix}logekspor
│${setv} ${prefix}maintenancealasan
│${setv} ${prefix}bootinfo
│${setv} ${prefix}stateinfo
│${setv} ${prefix}cachebersih
│${setv} ${prefix}dbekspor
│${setv} ${prefix}dbimpor
│${setv} ${prefix}loglevel
│${setv} ${prefix}debugmode
│${setv} ${prefix}ketersediaan
│${setv} ${prefix}penggunaaktif
│${setv} ${prefix}perintahmati
│${setv} ${prefix}rollback
│${setv} ${prefix}datasehat
│${setv} ${prefix}tandatangan
│${setv} ${prefix}limitatur
│${setv} ${prefix}limitlihat
│${setv} ${prefix}statebersih
│${setv} ${prefix}eventlog
│${setv} ${prefix}jadwalkerja
│${setv} ${prefix}pemeliharaan
│${setv} ${prefix}backup
│${setv} ${prefix}jadibot 🔸️
│${setv} ${prefix}stopjadibot
│${setv} ${prefix}stopclonebot
│${setv} ${prefix}listjadibot
│${setv} ${prefix}listclonebot
│${setv} ${prefix}addsewa
│${setv} ${prefix}delsewa
│${setv} ${prefix}listsewa
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}setbotmessages
│${setv} ${prefix}setbotauthor
│${setv} ${prefix}setbotname
│${setv} ${prefix}setbotpackname
│${setv} ${prefix}setapikey
│${setv} ${prefix}setbotlimit
│${setv} ${prefix}setbotmoney
│${setv} ${prefix}addowner
│${setv} ${prefix}delowner
│${setv} ${prefix}update
│${setv} ${prefix}backup
│${setv} ${prefix}backuplist
│${setv} ${prefix}sesi
│${setv} ${prefix}broadcast
│${setv} ${prefix}restore
│${setv} ${prefix}maintenance
╰──────❍
`;
					await m.reply(bangunIndeksMenu(setv, prefix));
					await sock.sendMessageV3(m.chat, {
						text: menunya,
						title: ucapanWaktu,
						description: packname,
						...(global.menuImage ? { thumbnailUrl: global.menuImage } : global.fake?.thumbnail ? { thumbnail: global.fake.thumbnail } : {}),
						sourceUrl: my.gh,
						mentions: [m.sender, "0@s.whatsapp.net", ownerNumber[0] + "@s.whatsapp.net"],
						contextInfo: {
							forwardingScore: 1,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: my.ch,
								serverMessageId: null,
								newsletterName: "Join For More Info",
							},
						},
					});
				}
				break;
			case "botmenu":
				{
					m.reply(bangunMenu("BOT", setv, prefix));
				}
			break;

			case "groupmenu":
				{
					m.reply(bangunMenu("GROUP", setv, prefix));
				}
			break;

			case "searchmenu":
				{
					m.reply(bangunMenu("SEARCH", setv, prefix));
				}
			break;

			case "downloadmenu":
				{
					m.reply(bangunMenu("DOWNLOAD", setv, prefix));
				}
			break;

			case "quotesmenu":
				{
					m.reply(bangunMenu("QUOTES", setv, prefix));
				}
			break;

			case "toolsmenu":
				{
					m.reply(bangunMenu("TOOLS", setv, prefix));
				}
			break;

			case "aimenu":
				{
					m.reply(bangunMenu("AI", setv, prefix));
				}
			break;

			case "randommenu":
				{
					m.reply(bangunMenu("RANDOM", setv, prefix));
				}
			break;

			case "stalkermenu":
				{
					m.reply(bangunMenu("STALKER", setv, prefix));
				}
			break;

			case "animemenu":
				{
					m.reply(bangunMenu("ANIME", setv, prefix));
				}
			break;

			case "gamemenu":
				{
					m.reply(bangunMenu("GAME", setv, prefix));
				}
			break;

			case "funmenu":
				{
					m.reply(bangunMenu("FUN", setv, prefix));
				}
			break;

			case "edukasimenu":
				{
					m.reply(bangunMenu("EDUKASI", setv, prefix));
				}
			break;
			case "ownermenu":
				{
					m.reply(bangunMenu("OWNER", setv, prefix));
				}
			break;

			case "authormenu":
				{
					m.reply(bangunMenu("AUTHOR", setv, prefix));
				}
			break;


			case "remind":
			case "reminds":
				{
					const sender = m.sender;
					const parts = (text || "").trim().split(/\s+/).filter(Boolean);
					const fmtTgl = (t) => new Date(t).toLocaleString("id-ID", { timeZone: global.timezone || "Asia/Jakarta", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
					const parseJam = (s) => { const r = s.match(/^(\d{1,2}):(\d{2})$/); if (!r) return null; const h = +r[1], mi = +r[2]; if (h > 23 || mi > 59) return null; return h * 3600000 + mi * 60000; };
					if (!parts.length) {
						const list = (global.db.reminders && global.db.reminders[sender]) || [];
						if (list.length === 0) return m.reply("*Reminder*\n\nBelum ada reminder.\n\nContoh:\n- .remind 30m Ingatkan minum air\n- .remind 2jam Istirahat\n- .remind 07:30 Bangun pagi\n- .remind besok 07:00 Pindah rumah\n- .remind 2026-12-01 07:00 Deadline\n- .remind setiap 07:00 Sholat Subuh\n- .reminddel <nomor> untuk menghapus");
						let teks = "*Reminder milikmu*\n";
						list.forEach((r, i) => { teks += `*${i + 1}.* ${fmtTgl(r.due)}${r.repeat === "daily" ? " (setiap hari)" : ""}\n    ${r.text}\n`; });
						return m.reply(teks);
					}
					let due = null, repeat = null, payload = "";
					const p0 = parts[0].toLowerCase();
					if (p0 === "setiap") {
						if (!parts[1]) return m.reply("Format: .remind setiap HH:MM teks (mis. .remind setiap 07:00 Bangun pagi)");
						const tj = parseJam(parts[1]); if (tj == null) return m.reply("Format jam: HH:MM (mis. 07:00)");
						let d = new Date(); d.setHours(0, 0, 0, 0); d = new Date(d.getTime() + tj);
						if (d.getTime() <= Date.now()) d = new Date(d.getTime() + 24 * 3600000);
						due = d.getTime(); repeat = "daily"; payload = parts.slice(2).join(" ");
					} else if (/^\d{4}-\d{2}-\d{2}$/.test(parts[0]) && parts[1] && /^\d{1,2}:\d{2}$/.test(parts[1])) {
						const tj = parseJam(parts[1]); if (tj == null) return m.reply("Format jam: HH:MM (mis. 07:00)");
						due = new Date(parts[0] + "T00:00:00").getTime() + tj; payload = parts.slice(2).join(" ");
					} else if (p0 === "besok" && parts[1] && /^\d{1,2}:\d{2}$/.test(parts[1])) {
						const tj = parseJam(parts[1]);
						const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + 1);
						due = d.getTime() + tj; payload = parts.slice(2).join(" ");
					} else if (/^\d{1,2}:\d{2}$/.test(p0)) {
						const tj = parseJam(p0);
						const now = new Date();
						let d = new Date(); d.setHours(0, 0, 0, 0); d = new Date(d.getTime() + tj);
						if (d.getTime() <= Date.now()) d = new Date(d.getTime() + 24 * 3600000);
						due = d.getTime(); payload = parts.slice(1).join(" ");
					} else {
						const mHit = p0.match(/^(\d+)(menit|jam|hari|minggu|m|j|h|d|w)$/);
						if (!mHit) return m.reply("Format waktu tidak dikenali. Contoh:\n.remind 30m Pesanan masuk\n.remind 2jam Istirahat\n.remind 07:30 Bangun\n.remind 2026-12-01 07:00 Deadline\n.remind setiap 07:00 Sholat Subuh");
						const units = { menit: 60000, m: 60000, jam: 3600000, j: 3600000, h: 3600000, hari: 86400000, d: 86400000, minggu: 604800000, w: 604800000 };
						due = Date.now() + parseInt(mHit[1], 10) * units[mHit[2].toLowerCase()]; payload = parts.slice(1).join(" ");
					}
					if (!payload) return m.reply("Teksnya kosong. Contoh: .remind 30m Minum air");
					if (due <= Date.now()) return m.reply("Waktu harus di masa depan.");
					global.db.reminders = global.db.reminders || {};
					global.db.reminders[sender] = global.db.reminders[sender] || [];
					const id = "r" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
					global.db.reminders[sender].push({ id, text: payload, due, repeat });
					return m.reply("*Reminder ditambahkan*\n\n" + fmtTgl(due) + (repeat === "daily" ? " (setiap hari)" : "") + "\nTeks: " + payload);
				}
				break;
			case "reminddel":
			case "remindhapus":
				{
					const sender = m.sender;
					const list = (global.db.reminders && global.db.reminders[sender]) || [];
					if (!text) return m.reply("Kirim nomor reminder yang mau dihapus. \nLihat list: .remind");
					const idx = parseInt(text, 10) - 1;
					if (!(idx >= 0 && idx < list.length)) return m.reply("Reminder nomor " + text + " tidak ditemukan.");
					const [r] = list.splice(idx, 1);
					if (list.length === 0) delete global.db.reminders[sender];
					return m.reply("Reminder *" + (idx + 1) + "* dihapus.");
				}
				break;
			case "note":
				{
					if (!text) return m.reply("Contoh: .note Beli gula cap buntal\nLihat catatan: .notes");
					global.db.notes = global.db.notes || {};
					global.db.notes[m.sender] = global.db.notes[m.sender] || [];
					global.db.notes[m.sender].push({ text, at: Date.now() });
					return m.reply("*Catatan ditambahkan.*\n" + text);
				}
				break;
			case "notes":
				{
					const list = (global.db.notes && global.db.notes[m.sender]) || [];
					if (!list.length) return m.reply("Belum ada catatan.\nContoh: .note Beli gula cap buntal");
					let teks = "*Catatan milikmu*\n\n";
					list.forEach((n, i) => { teks += "*" + (i + 1) + ".* " + n.text + "\n"; });
					return m.reply(teks.trimEnd());
				}
				break;
			case "notedel":
			case "hapusnote":
				{
					const list = (global.db.notes && global.db.notes[m.sender]) || [];
					if (!text) return m.reply("Kirim nomor catatan yang mau dihapus. \nLihat list: .notes");
					const idx = parseInt(text, 10) - 1;
					if (!(idx >= 0 && idx < list.length)) return m.reply("Catatan nomor " + text + " tidak ditemukan.");
					const [n] = list.splice(idx, 1);
					if (list.length === 0) delete global.db.notes[m.sender];
					return m.reply("Catatan *" + (idx + 1) + "* dihapus.");
				}
				break;
			case "stats":
			case "botstats":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const hit = global.db.hit || {};
					const top = Object.entries(hit).sort((a, b) => b[1] - a[1]).slice(0, 5);
					const users = Object.keys(global.db.users || {}).length;
					const groups = Object.keys(global.db.groups || {}).length;
					const premium = (global.db.premium || []).length;
					const sewa = (global.db.sewa || []).length;
					const totalHit = Object.values(hit).reduce((acc, v) => acc + (Number(v) || 0), 0);
					const mem = (process.memoryUsage().rss / 1024 / 1024).toFixed(1);
					const version = require("./package.json").version;
					let teks = "*Statistik Rynn*\n\n";
					teks += "Versi : v" + version + "\n";
					teks += "Uptime : " + runtime(Math.floor(process.uptime())) + "\n";
					teks += "Memori : " + mem + " MB\n";
					teks += "Total user : " + users + "\n";
					teks += "Total grup : " + groups + "\n";
					teks += "Premium : " + premium + "\n";
					teks += "Sewa : " + sewa + "\n";
					teks += "Total perintah dipakai : " + totalHit + "\n\n";
					teks += "*Top 5 Perintah*\n";
					top.forEach(([cmd, n], i) => { teks += "*" + (i + 1) + ".* ." + cmd + " - " + n + "x\n"; });
					return m.reply(teks.trimEnd());
				}
				break;
			case "poll":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const mt = (text || "").match(/^"([^"]+)"\s+(.+)$/);
					if (!mt) return m.reply("Contoh: .poll \"Jam berapa rapat?\" 10:00 | 13:00 | 15:00\n\nJudul pakai tanda kutip, pilihan pisah dengan |");
					const options = mt[2].split("|").map(s => s.trim()).filter(Boolean);
					if (options.length < 2) return m.reply("Minimal 2 pilihan.");
					if (options.length > 12) options.length = 12;
					await sock.sendMessage(m.chat, { poll: { name: mt[1], values: options, selectableCount: 1 } });
					if (!global.db.poll) global.db.poll = {};
					global.db.poll[m.chat] = { nama: mt[1], pilihan: options, vote: [] };
				}
				break;
			case "gempa":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					try {
						const res = await fetchJson("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json");
						const d = res?.Infogempa?.gempa?.[0];
						if (!d) return m.reply("Data gempa tidak tersedia saat ini.");
						const teks = "*Gempa Terkini - BMKG*\n\n"
							+ "Magnitudo : *" + d.Magnitude + "*\n"
							+ "Kedalaman : " + d.Kedalaman + "\n"
							+ "Wilayah   : " + d.Wilayah + "\n"
							+ "Koordinat : " + d.Lintang + ", " + d.Bujur + "\n"
							+ "Waktu     : " + d.Tanggal + ", " + d.Jam + "\n"
							+ "Potensi   : " + (d.Potensi || "-");
						return m.reply(teks);
					} catch (e) {
						console.log("[gempa]", e);
						return m.reply("Gagal mengambil data gempa BMKG.");
					}
				}
				break;
			case "kurs":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					const fmtNum = (n) => Number(n.toFixed(2)).toLocaleString("id-ID", { maximumFractionDigits: 2 });
					const fmtKurs = (n) => {
						const v = Number(n);
						if (!v) return "0";
						if (v >= 100) return v.toLocaleString("id-ID", { maximumFractionDigits: 2 });
						if (v >= 0.01) return Number(v.toFixed(4)).toLocaleString("id-ID", { maximumFractionDigits: 4 });
						return v.toFixed(6);
					};
					const ALIAS = {
						dólar: "USD", dolar: "USD", usd: "USD", rupiah: "IDR", idr: "IDR", euro: "EUR", eur: "EUR",
						yen: "JPY", jpy: "JPY", ringgit: "MYR", myr: "MYR", bah: "THB", baht: "THB", thb: "THB",
						yuan: "CNY", rmb: "CNY", cny: "CNY", won: "KRW", krw: "KRW", rupee: "INR", inr: "INR",
						gbp: "GBP", poundsterling: "GBP", sg$: "SGD", sgd: "SGD", aud: "AUD", dolaraustralia: "AUD",
						cad: "CAD", chf: "CHF", hkd: "HKD", nzd: "NZD", try: "TRY", lira: "TRY", dkk: "DKK",
						sek: "SEK", nok: "NOK", sar: "SAR", aed: "AED", qar: "QAR", kwd: "KWD", bhd: "BHD", omr: "OMR",
						php: "PHP", vnd: "VND", php_: "PHP", mmk: "MMK", khr: "KHR", lak: "LAK", bnd: "BND",
						pgk: "PGK", fjd: "FJD", npr: "NPR", lkr: "LKR", pkr: "PKR", bdt: "BDT", rub: "RUB",
						egp: "EGP", zar: "ZAR", ngn: "NGN", brl: "BRL", mxn: "MXN", ars: "ARS", clp: "CLP",
						cop: "COP", pen: "PEN", uyu: "UYU", sek_: "SEK", gel: "GEL", kazakh: "KZT",
					};
					const norm = (s) => ALIAS[String(s).toLowerCase().replace(/[^a-z]/g, "")] || String(s).trim().toUpperCase().replace(/[^A-Z]/g, "");
					const args2 = (text || "").trim().split(/\s+/).filter(Boolean);
					const tampil = ["IDR", "EUR", "GBP", "JPY", "MYR", "SGD", "THB", "CNY", "KRW", "INR", "AUD", "CAD", "CHF", "HKD", "NZD", "SAR", "AED", "QAR", "KWD", "BHD", "OMR", "TRY", "DKK", "SEK", "NOK", "PHP", "VND", "MMK", "KHR", "LAK", "BND", "PGK", "FJD", "NPR", "LKR", "PKR", "BDT", "RUB", "EGP", "ZAR", "NGN", "BRL", "MXN", "ARS", "CLP", "COP", "PEN", "UYU", "GEL"];
					if (args2.length === 0 || args2[0].toLowerCase() === "list") {
						const res = await fetchJson("https://open.er-api.com/v6/latest/USD").catch(() => null);
						if (!res || res.result !== "success") return m.reply("Gagal mengambil kurs. Coba lagi nanti.");
						if (args2[0]?.toLowerCase() === "list") {
							const semua = Object.keys(res.rates || {}).sort();
							return m.reply(`*Kode Mata Uang (${semua.length})*\n\n${semua.join(", ")}\n\nAlias: rupiah, dolar, euro, yen, ringgit, baht, yuan, won, rupee, poundsterling\nContoh: .kurs 25000 IDR USD`);
						}
						const r = res.rates;
						const list = tampil.filter((c) => r[c]).map((c) => `- 1 USD = ${fmtKurs(r[c])} ${c}`).join("\n");
						return m.reply(`*Kurs (base USD)*\n${list}\n\nKonversi: .kurs 100 USD IDR atau .kurs USD IDR 100\nDaftar kode: .kurs list`);
					}
					let [a, b, c] = args2;
					let from, to, amount = 1;
					if (/^[\d.,]+$/.test(a)) {
						amount = parseFloat(a.replace(",", "."));
						from = norm(b || "IDR");
						to = norm(c || "IDR");
					} else {
						from = norm(a);
						to = norm(b || "IDR");
						if (c && /^[\d.,]+$/.test(c)) amount = parseFloat(c.replace(",", "."));
					}
					if (!/^[A-Z]{3}$/.test(from) || !/^[A-Z]{3}$/.test(to)) return m.reply("Kode mata uang 3 huruf, contoh: .kurs 100 USD IDR atau .kurs USD IDR 100.\nKetik .kurs list untuk melihat kode.");
					if (isNaN(amount) || amount < 0) amount = 1;
					const res = await fetchJson("https://open.er-api.com/v6/latest/" + from).catch(() => null);
					if (!res || res.result !== "success" || !res.rates || !(to in res.rates)) return m.reply("Gagal mengambil kurs atau mata uang " + to + " tidak dikenal.");
					const val = amount * res.rates[to];
					const updated = res.time_last_update_utc ? `\nDiperbarui: ${res.time_last_update_utc}` : "";
					return m.reply(`*Konversi Kurs*\n\n${fmtNum(amount)} ${from} = *${fmtNum(val)} ${to}*\nKurs: 1 ${from} = ${fmtKurs(res.rates[to])} ${to}${updated}`);
				}
				break;

			case "cal":
			case "kalendar":
				{
					const now = new Date();
					const [mArg, yArg] = (text || "").trim().split(/\s+/);
					const month = mArg ? parseInt(mArg, 10) : now.getMonth() + 1;
					const year = yArg ? parseInt(yArg, 10) : now.getFullYear();
					if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 2000 || year > 9999) {
						return m.reply("Format: .cal [bulan] [tahun]\nContoh: .cal 11 2026\n(Kosong untuk bulan ini)");
					}
					const cal = new Date(year, month, 0);
					const daysInMonth = cal.getDate();
					const firstDay = new Date(year, month - 1, 1).getDay();
					const monthNames = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
					let out = `*Kalender ${monthNames[month - 1]} ${year}*\n`;
					out += "Min Sen Sel Rab Kam Jum Sab\n";
					let line = "";
					for (let i = 0; i < firstDay; i++) line += "    ";
					for (let d = 1; d <= daysInMonth; d++) {
						line += String(d).padStart(3, " ") + " ";
						if ((firstDay + d) % 7 === 0) {
							out += line.trimEnd() + "\n";
							line = "";
						}
					}
					if (line.trim()) out += line.trimEnd() + "\n";
					const today = now.getDate();
					const isCurrentMonth = now.getMonth() + 1 === month && now.getFullYear() === year;
					return m.reply(out.trimEnd() + (isCurrentMonth ? `\nHari ini: ${today} ${monthNames[now.getMonth()]} ${year}` : ""));
				}
				break;
			case "password":
			case "pass":
				{
					const len = parseInt((text || "").trim(), 10) || 12;
					if (len < 4 || len > 128) return m.reply("Panjang password harus antara 4 dan 128.");
					const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
					const batas = Math.floor(256 / charset.length) * charset.length;
					const pilih = () => {
						for (;;) {
							const b = crypto.getRandomValues(new Uint8Array(1))[0];
							if (b < batas) return charset[b % charset.length];
						}
					};
					let out = "";
					for (let i = 0; i < len; i++) out += pilih();
					m.reply(`*Password acak* (${len} karakter):\n\n${out}`);
				}
				break;
			case "b64":
			case "base64":
				{
					const payload = (text || "").trim();
					if (!payload) return m.reply(`Contoh:\n.b64 encode halo\n.b64 decode aGFsbw==`);
					const [mode, ...rest] = payload.split(/\s+/);
					const data = rest.join(" ");
					if (!data) return m.reply(`Contoh:\n.b64 encode halo\n.b64 decode aGFsbw==`);
					try {
						if (/^(encode|enc)$/i.test(mode)) {
							return m.reply(Buffer.from(data).toString("base64"));
						} else if (/^(decode|dec)$/i.test(mode)) {
							return m.reply(Buffer.from(data, "base64").toString("utf8"));
						}
						return m.reply(`Contoh:\n.b64 encode halo\n.b64 decode aGFsbw==`);
					} catch (e) {
						return m.reply("Gagal memproses data.");
					}
				}
				break;
			case "pantun":
				{
					return m.reply(PANTUN[Math.floor(Math.random() * PANTUN.length)]);
				}
				break;
			case "admins":
			case "adminlist":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const metadata = await sock.groupMetadata(m.chat).catch(() => null);
					if (!metadata) return m.reply("Gagal mengambil metadata grup.");
					const admins = metadata.participants.filter(p => p.admin).map(p => `@${p.id.split("@")[0]}`);
					if (!admins.length) return m.reply("Tidak ada admin di grup ini.");
					return m.reply(`*Admin Grup (${admins.length})*\n\n${admins.join("\n")}`);
				}
				break;
			case "saldo":
				{
					const user = db.users[m.sender];
					if (!user) return m.reply("Akun kamu belum terdaftar.");
					const money = user.money?.toLocaleString("id-ID") || 0;
					const limit = user.limit ?? 0;
					const premium = db.premium.includes(m.sender) ? "Premium" : "Free";
					return m.reply(`*Saldo kamu*\n\nUang: ${money}\nLimit: ${limit}\nStatus: ${premium}`);
				}
				break;
			case "kickall":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!args[0] || args[0].toLowerCase() !== "confirm") {
						return m.reply(`Perintah ini akan MENGELUARKAN SEMUA anggota non-admin dari grup.\n\n${prefix + command} confirm\n\nPerintah tidak bisa dibatalkan!`);
					}
					const metadata = await sock.groupMetadata(m.chat).catch(() => null);
					if (!metadata) return m.reply("Gagal mengambil metadata grup.");
					const targets = metadata.participants.filter(p => !p.admin).map(p => p.id);
					if (!targets.length) return m.reply("Tidak ada anggota non-admin yang bisa dikeluarkan.");
					m.reply(`Mengeluarkan ${targets.length} anggota...`);
					let removed = 0;
					for (const id of targets) {
						try {
							await sock.groupParticipantsUpdate(m.chat, [id], "remove");
							removed++;
							await new Promise(r => setTimeout(r, 1200));
						} catch {}
					}
					m.reply(`Berhasil mengeluarkan ${removed} anggota.`);
				}
				break;
			case "pair":
			case "pasangan":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const md = await sock.groupMetadata(m.chat).catch(() => null);
					if (!md) return m.reply("Gagal mengambil metadata grup.");
					const members = md.participants.map((p) => p.id).filter((id) => id !== sock.user?.id);
					if (members.length < 2) return m.reply("Anggota grup tidak cukup.");
					const tema = (text || "").trim();
					let a = members[Math.floor(Math.random() * members.length)];
					let b = members[Math.floor(Math.random() * members.length)];
					while (b === a) b = members[Math.floor(Math.random() * members.length)];
					return m.reply(`*Pasangan acak${tema ? ` untuk ${tema}` : ""}*\n@${a.split("@")[0]} dan @${b.split("@")[0]}`, { mentions: [a, b] });
				}
				break;
			case "quiz":
			case "soalku":
				{
					global.quizState = global.quizState || new Map();
					const arg = (text || "").trim().toLowerCase();
					if (arg === "skor") {
						const ku = db.users && db.users[m.sender] && db.users[m.sender].quiz;
						return m.reply(ku ? `*Skor kuis kamu*\n\nBenar: ${ku.benar}\nSalah: ${ku.salah}` : "Kamu belum pernah main kuis.");
					}
					const userKey = m.chat + ":" + m.sender;
					const pending = global.quizState.get(userKey);
					if (pending && Date.now() - pending.at < 10 * 60 * 1000 && /^[a-d]$/.test(arg)) {
						const idx = arg.charCodeAt(0) - 97;
						const pickSoal = pending.soal;
						global.quizState.delete(userKey);
						const u = db.users && db.users[m.sender];
						if (u) {
							u.quiz = u.quiz || { benar: 0, salah: 0 };
							if (idx === pickSoal.a) {
								u.quiz.benar++;
								u.money = (typeof u.money === "number" ? u.money : 0) + 50;
							} else {
								u.quiz.salah++;
							}
						}
						if (idx === pickSoal.a) return m.reply("*Benar!* +50 uang.\n\nKetik .quiz untuk soal berikutnya atau .quiz skor untuk melihat skor.");
						return m.reply(`*Salah.* Jawaban benar: ${String.fromCharCode(65 + pickSoal.a)}\n\nKetik .quiz untuk soal berikutnya.`);
					}
					if (pending && arg && !["a", "b", "c", "d"].includes(arg) && Date.now() - pending.at < 10 * 60 * 1000) {
						return m.reply("Kamu punya soal yang belum dijawab.\nJawab dengan: .quiz a (sampai .quiz d)\nKetik .quiz skor untuk melihat skor.");
					}
					const soal = [
						{ q: "Ibu Kota Indonesia setelah pemindahan pusat pemerintahan adalah?", o: ["Jakarta", "Surabaya", "Ibu Kota Nusantara", "Bandung"], a: 2 },
						{ q: "Berapa hasil 12 x 8?", o: ["86", "96", "106", "116"], a: 1 },
						{ q: "Gunung tertinggi di Indonesia adalah?", o: ["Kerinci", "Semeru", "Rinjani", "Puncak Jaya"], a: 3 },
						{ q: "Rumah Gadang berasal dari daerah mana?", o: ["Jawa", "Sunda", "Sumatera Barat (Minangkabau)", "Sumatera Utara (Batak)"], a: 2 },
						{ q: "Bahasa resmi Indonesia adalah?", o: ["Jawa", "Indonesia", "Inggris", "Melayu"], a: 1 },
						{ q: "Berapa hasil 7 x 9?", o: ["56", "63", "72", "81"], a: 1 },
						{ q: "Sungai terpanjang di Indonesia adalah?", o: ["Musi", "Barito", "Mahakam", "Kapuas"], a: 3 },
						{ q: "Pulau terbesar di Indonesia adalah?", o: ["Jawa", "Sumatera", "Kalimantan", "Sulawesi"], a: 2 },
						{ q: "Lagu Indonesia Raya diciptakan oleh?", o: ["Wage Rudolf Supratman", "Ismail Marzuki", "Cornel Simandjuntak", "H. Mutahar"], a: 0 },
						{ q: "Tugu Pahlawan berada di kota mana?", o: ["Jakarta", "Bandung", "Semarang", "Surabaya"], a: 3 },
						{ q: "Berapa menit dalam 2 jam?", o: ["100", "110", "120", "130"], a: 2 },
						{ q: "Mana yang termasuk mamalia?", o: ["Kadal", "Kelelawar", "Ikan hiu", "Burung hantu"], a: 1 },
						{ q: "Rumus luas persegi adalah?", o: ["sisi x sisi", "2 x sisi", "4 x sisi", "sisi pangkat 3"], a: 0 },
						{ q: "Mata uang Indonesia adalah?", o: ["Ringgit", "Baht", "Rupiah", "Peso"], a: 2 },
						{ q: "Paus bernapas dengan?", o: ["Insang", "Paru-paru", "Kulit", "Sirip"], a: 1 }
					];
					const pick = soal[Math.floor(Math.random() * soal.length)];
					global.quizState.set(userKey, { a: pick.a, at: Date.now(), soal: pick });
					let out = `*Kuis Pengetahuan Umum*\n\n${pick.q}\n\n`;
					out += pick.o.map((op, i) => String.fromCharCode(65 + i) + ". " + op).join("\n");
					out += "\n\nJawab dengan: .quiz a (sampai .quiz d)\nKetik .quiz skor untuk melihat skor. Hadiah: +50 uang per jawaban benar.";
					return m.reply(out);
				}
				break;
			case "rumus":
				{
					const arg = (text || "").trim();
					if (!arg || /^(list|kategori|statistik)$/i.test(arg)) {
						const daftar = daftarKategori();
						if (/^statistik$/i.test(arg)) {
							const baris = daftar.map((k) => `- *${k.kategori}*: ${k.jumlah} rumus (${k.subkategori.length} subkategori)`).join("\n");
							return m.reply(`*Statistik Rumus*\n\n${baris}\n\nTotal: ${statistikRumus().total.toLocaleString("id-ID")} rumus`);
						}
						const baris = daftar.map((k) => `- *${k.kategori}*: ${k.jumlah} rumus`).join("\n");
						return m.reply(`*Kategori Rumus (${daftar.length})*\n\n${baris}\n\nContoh:\n.rumus matematika 1\n.rumus cari energi\n.rumus random fisika`);
					}
					if (/^cari\s+/i.test(arg)) {
						const hasil = cariRumus(arg.replace(/^cari\s+/i, ""));
						if (!hasil.length) return m.reply("Rumus tidak ditemukan.");
						const baris = hasil.map((r) => `- *${r.nama}* [${r.id}]\n  ${r.rumus}`).join("\n");
						return m.reply(`*Hasil Pencarian*\n\n${baris}\n\n${hasil.length} rumus ditampilkan (maksimal 20).`);
					}
					if (/^detail\s+/i.test(arg)) {
						const r = rumusDetail(arg.replace(/^detail\s+/i, ""));
						return r ? m.reply(formatRumus(r)) : m.reply("ID rumus tidak ditemukan.");
					}
					if (/^sub\s+/i.test(arg)) {
						const kategori = arg.replace(/^sub\s+/i, "").toLowerCase();
						const subs = daftarSubkategori(kategori);
						return subs.length ? m.reply(`*Subkategori ${kategori}*\n\n${subs.map((s) => "- " + s).join("\n")}\n\nKetik .rumus <subkategori> 1`) : m.reply("Kategori tidak ditemukan.");
					}
					if (/^random(?:\s+(.+))?$/i.test(arg)) {
						const kategori = (arg.match(/^random\s+(.+)$/i) || [])[1];
						const r = rumusAcak(kategori);
						return r ? m.reply(formatRumus(r)) : m.reply("Kategori tidak ditemukan.");
					}
					const mt = arg.match(/^(\S+)(?:\s+(\d+))?$/);
					if (!mt) return m.reply("Contoh: .rumus matematika 1\n.rumus cari energi\n.rumus random fisika");
					const halaman = halamanRumus(mt[1], mt[2] ? parseInt(mt[2], 10) : 1);
					if (!halaman) return m.reply("Kategori atau subkategori tidak ditemukan.\nKetik .rumus untuk daftar kategori.");
					return m.reply(formatDaftar({
						judul: `Rumus ${halaman.kategori}`,
						data: semuaRumus(halaman.kategori),
						halaman: halaman.halaman,
						format: (r) => `*${r.nama}*\n   ${r.rumus}\n   ${r.variabel} [${r.id}]`,
						contoh: [`Ketik .rumus ${halaman.kategori} ${halaman.halaman + 1} untuk lanjut.`, "Ketik .rumus cari <kata> untuk mencari.", "Ketik .rumus random <kategori> untuk satu rumus."],
					}));
				}
				break;
			case "hitung":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					const expr = (text || "").trim();
					if (!expr) return m.reply("Contoh: .hitung (2+3)*4\n\nSoal matematika dievaluasi lewat Naze API.");
					try {
						const res = await fetchApi("/education/math", { expr });
						const hasil = res?.result?.result ?? res?.result;
						if (hasil === undefined || hasil === null) return m.reply("Soal tidak bisa dihitung. Contoh: .hitung (2+3)*4");
						return m.reply(`*Hasil*\n\n${expr} = ${hasil}`);
					} catch (e) {
						return m.reply("Soal tidak bisa dihitung atau server API sedang bermasalah.\nContoh: .hitung (2+3)*4");
					}
				}
				break;
			case "hitungmundur":
			case "countdown":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .hitungmundur 30\natau .hitungmundur 2026-12-25");
					if (/^\d{1,4}$/.test(arg)) {
						const d = parseInt(arg, 10);
						const t = new Date(Date.now() + d * 86400000);
						return m.reply(`${d} hari ke depan jatuh pada *${t.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}*`);
					}
					const dt = new Date(arg);
					if (isNaN(dt.getTime())) return m.reply("Format tanggal tidak dikenali.\n\nGunakan: .hitungmundur 2026-12-25\natau .hitungmundur 30");
					const diff = Math.ceil((dt.getTime() - Date.now()) / 86400000);
					if (diff >= 0) return m.reply(`*${diff} hari lagi* menuju ${dt.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}`);
					return m.reply(`*${-diff} hari yang lalu* (${dt.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })})`);
				}
				break;
			case "suku":
				{
					const q = (text || "").trim().toLowerCase().replace(/[^a-z]/g, "");
					const list = Object.keys(SUKU).sort().join(", ");
					if (q === "random") { const keys2 = Object.keys(SUKU); return m.reply(SUKU[keys2[Math.floor(Math.random() * keys2.length)]]); }
					if (!q) return m.reply(`*Suku-suku Nusantara (${Object.keys(SUKU).length})*\n\n${list}\n\nKetik .suku jawa`);
					const found = SUKU[q] || Object.entries(SUKU).find(([k]) => k.startsWith(q));
					if (!found) return m.reply(`Suku tidak ditemukan.\n\n${list}`);
					return m.reply(found[1]);
				}
				break;
			case "kuliner":
				{
					const q = (text || "").trim().toLowerCase().replace(/[^a-z]/g, "");
					const list = Object.keys(KULINER).sort().join(", ");
					if (q === "random") { const keys2 = Object.keys(KULINER); return m.reply(KULINER[keys2[Math.floor(Math.random() * keys2.length)]]); }
					if (!q) return m.reply(`*Kuliner Khas Indonesia (${Object.keys(KULINER).length})*\n\n${list}\n\nKetik .kuliner rendang`);
					const found = KULINER[q] || Object.entries(KULINER).find(([k]) => k.includes(q));
					if (!found) return m.reply(`Kuliner tidak ditemukan.\n\n${list}`);
					return m.reply(found[1]);
				}
				break;

			case "fakta":
				{
					return m.reply(`*Fakta Menarik*\n\n${FAKTA[Math.floor(Math.random() * FAKTA.length)]}`);
				}
				break;
			case "puisi":
				{
					return m.reply(`*Puisi*\n\n${PUISI[Math.floor(Math.random() * PUISI.length)]}`);
				}
				break;
			case "umur":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .umur 1999-05-20");
					let dt = new Date(arg);
					if (isNaN(dt.getTime())) {
						const mt = arg.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
						if (mt) dt = new Date(`${mt[3]}-${mt[2].padStart(2, "0")}-${mt[1].padStart(2, "0")}`);
					}
					if (isNaN(dt.getTime())) return m.reply("Format tanggal tidak dikenali.\nGunakan YYYY-MM-DD, contoh: 1999-05-20");
					if (dt.getTime() > Date.now()) return m.reply("Tanggal lahir tidak boleh di masa depan.");
					const now = new Date();
					let years = now.getFullYear() - dt.getFullYear();
					let months = now.getMonth() - dt.getMonth();
					let days = now.getDate() - dt.getDate();
					if (days < 0) {
						months -= 1;
						days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
					}
					if (months < 0) {
						years -= 1;
						months += 12;
					}
					let ulang = new Date(now.getFullYear(), dt.getMonth(), dt.getDate());
					if (ulang < now) ulang = new Date(now.getFullYear() + 1, dt.getMonth(), dt.getDate());
					const sisa = Math.ceil((ulang - now) / 86400000);
					return m.reply(`*Umur kamu*\n\nTahun: ${years}\nBulan: ${months}\nHari: ${days}\n\nUlang tahun berikutnya: *${sisa} hari lagi* (${ulang.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })})`);
				}
				break;
			case "terbilang":
				{
					const raw = (text || "").trim().replace(/\./g, "").replace(",", ".");
					if (!raw) return m.reply("Contoh: .terbilang 12345");
					const neg = raw.startsWith("-");
					const num = neg ? raw.slice(1) : raw;
					if (!/^\d+(\.\d+)?$/.test(num)) return m.reply("Contoh: .terbilang 12345 atau .terbilang 1000000");
					const bulat = Math.floor(Number(num));
					const pecahan = num.includes(".") ? num.split(".")[1] : "";
					if (bulat.toString().length > 13) return m.reply("Maksimal 15 digit.");
					let out = angkaKeKata(bulat);
					if (pecahan) out += " koma " + pecahan.split("").map((d) => angkaKeKata(Number(d))).join(" ");
					return m.reply(`${neg ? "Minus " : ""}${out || "nol"}`);
				}
				break;
			case "roman":
				{
					const arg = (text || "").trim().toUpperCase();
					if (!arg) return m.reply("Contoh: .roman 2026 atau .roman MMXXVI");
					if (/^\d+$/.test(arg)) {
						const v = parseInt(arg, 10);
						const r = toRoman(v);
						return m.reply(r ? `${v} = *${r}*` : "Angka harus antara 1 dan 3999.");
					}
					const f = fromRoman(arg);
					return m.reply(f !== null ? `${arg} = *${f}*` : "Angka Romawi tidak valid (I V X L C D M, 1-3999).");
				}
				break;
			case "konversi":
			case "convert":
				{
					const arg = (text || "").trim();
					if (!arg) {
						return m.reply(`Contoh:\n.konversi 1 km ke mil\n.konversi 100 kg ke ons\n.konversi 0 c ke f\n.konversi 1 galon ke liter\n.konversi 90 kmh ke mps\n.konversi 1 kwh ke j\n.konversi 1 atm ke kpa\n.konversi 1 hari ke menit\n.konversi 2 gb ke mb\n.konversi 1 hp ke watt\n.konversi 1 ghz ke mhz\n.konversi 45 derajat ke rad\n\nSatuan: mm cm m km inci ft kaki mil | mg g kg ons pon ton | m2 km2 hektar are | ml liter m3 galon | c f k | mps kmh mph knot | j kj kalori kkal kwh | pa kpa bar atm mmhg psi | b kb mb gb tb bit | s menit jam hari minggu bulan tahun | watt kw hp pk | hz khz mhz ghz | derajat rad grad`);
					}
					const mt = (" " + arg + " ").match(/\s(-?[\d.,]+)\s*([a-z0-9]+)\s+(?:ke|to|=)\s*([a-z0-9]+)\s/i);
					if (!mt) return m.reply("Format: .konversi 1 km ke mil");
					const value = Number(mt[1].replace(",", "."));
					if (isNaN(value)) return m.reply("Angka tidak valid.");
					const hasil = convertUnit(value, mt[2], mt[3]);
					if (!hasil.ok) return m.reply(`Gagal konversi: ${hasil.alasan}.\nKetik .konversi untuk melihat daftar satuan.`);
					const dibulatkan = Math.abs(hasil.hasil) >= 100 ? hasil.hasil.toFixed(2) : Number(hasil.hasil.toFixed(6));
					return m.reply(`*Hasil*\n\n${value} ${mt[2].toLowerCase()} = *${dibulatkan} ${hasil.satuan}*`);
				}
				break;
			case "morse":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh:\n.morse halo (teks ke kode Morse)\n.morse .... .- .-.. --- (kode Morse ke teks)\nSpasi = huruf, garis miring / = kata");
					if (/^[.\-/\s]+$/.test(arg)) return m.reply(`*Teks:* ${morseDecode(arg) || "(tidak bisa dibaca)"}`);
					return m.reply(`*Morse:* ${morseEncode(arg)}`);
				}
				break;
			case "binary":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh:\n.binary halo (teks ke binary)\n.binary 01101000 01100001 (binary ke teks)");
					if (/^[01\s]+$/.test(arg)) {
						const d = binaryDecode(arg);
						return m.reply(d ? `*Teks:* ${d}` : "Binary tidak valid (8 bit per byte).");
					}
					return m.reply(`*Binary:* ${binaryEncode(arg)}`);
				}
				break;
			case "hex":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh:\n.hex halo (teks ke hex)\n.hex 68 61 6c 6f (hex ke teks)");
					if (/^[0-9a-fA-F\s]+$/.test(arg) && !/[a-fA-F]/.test(arg.replace(/\s/g, ""))) {
						const d = hexDecode(arg);
						return m.reply(d ? `*Teks:* ${d}` : "Hex tidak valid.");
					}
					if (/^[0-9a-fA-F\s]+$/.test(arg)) {
						const d = hexDecode(arg);
						return m.reply(d !== null ? `*Teks:* ${d}` : `*Hex:* ${hexEncode(arg)}`);
					}
					return m.reply(`*Hex:* ${hexEncode(arg)}`);
				}
				break;
			case "rot13":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .rot13 halo");
					return m.reply(rot13(arg));
				}
				break;
			case "pilih":
			case "pilihan":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .pilih kopi | teh | susu");
					let items = arg.split(/[|,]/).map((s) => s.trim()).filter(Boolean);
					if (items.length < 2) {
						const alt = arg.split(/\s+atau\s+/i).map((s) => s.trim()).filter(Boolean);
						if (alt.length >= 2) items = alt;
					}
					if (items.length < 2) return m.reply("Minimal 2 opsi.\nContoh: .pilih kopi | teh | susu");
					return m.reply(`*${items[Math.floor(Math.random() * items.length)]}*\n\nOpsi: ${items.join(", ")}`);
				}
				break;
			case "angkaacak":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .angkaacak 1-100 atau .angkaacak 100 (1-100)");
					const mt = arg.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
					if (!mt) return m.reply("Contoh: .angkaacak 1-100 atau .angkaacak 100");
					let a = parseInt(mt[1], 10);
					let b = mt[2] ? parseInt(mt[2], 10) : 100;
					if (a > b) [a, b] = [b, a];
					if (b - a > 10000000) return m.reply("Rentang terlalu besar.");
					return m.reply(`*Angka acak: ${a + Math.floor(Math.random() * (b - a + 1))}*\n\nRentang: ${a} - ${b}`);
				}
				break;
			case "zodiak":
				{
					const BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
					const BULAN_IDX = { jan: 1, feb: 2, mar: 3, apr: 4, mei: 5, jun: 6, jul: 7, agu: 8, agustus: 8, sep: 9, sept: 9, okt: 10, oct: 10, nov: 11, des: 12, dec: 12 };
					const arg = (text || "").trim().toLowerCase();
					if (!arg) {
						const list = ZODIAC.map((z) => `- *${z.nama}*: ${z.mulai[1]} ${BULAN[z.mulai[0] - 1]} - ${z.sampai[1]} ${BULAN[z.sampai[0] - 1]} (${z.elemen})`).join("\n");
						return m.reply(`*Zodiak*\n\n${list}\n\nKetik .zodiak 25 desember`);
					}
					let day = 0, month = 0;
					const iso = arg.match(/^(\d{4})-(\d{2})-(\d{2})/);
					if (iso) { month = +iso[2]; day = +iso[3]; }
					else {
						const dm = arg.match(/^(\d{1,2})(?:[\s\/\-]|[-\/])([a-z]+)/i);
						if (dm) {
							day = +dm[1];
							const key = dm[2].toLowerCase();
							month = BULAN_IDX[key] || BULAN_IDX[key.slice(0, 3)] || 0;
						} else {
							const nd = arg.match(/^(\d{1,2})[-\/](\d{1,2})$/);
							if (nd) { day = +nd[1]; month = +nd[2]; }
						}
					}
					if (day < 1 || day > 31 || month < 1 || month > 12) return m.reply("Contoh: .zodiak 25 desember atau .zodiak 1999-12-25");
					const z = zodiacFor(day, month);
					return m.reply(`*${z.nama}*\n\nElemen: ${z.elemen}\nRentang: ${z.mulai[1]} ${BULAN[z.mulai[0] - 1]} - ${z.sampai[1]} ${BULAN[z.sampai[0] - 1]}`);
				}
				break;
			case "wayang":
				{
					const q = (text || "").trim().toLowerCase().replace(/[^a-z]/g, "");
					if (q === "random") { const keys2 = Object.keys(WAYANG); return m.reply(WAYANG[keys2[Math.floor(Math.random() * keys2.length)]]); }
					if (!q) {
						return m.reply(`*Tokoh Wayang Indonesia*\n\n${Object.keys(WAYANG).sort().join(", ")}\n\nKetik .wayang gatotkaca`);
					}
					const found = WAYANG[q] || Object.entries(WAYANG).find(([k, v]) => k.startsWith(q) || v.toLowerCase().includes(q));
					if (!found) return m.reply("Tokoh tidak ditemukan.\n\nKetik .wayang untuk lihat daftar.");
					return m.reply(found[1]);
				}
				break;
			case "lagudaerah":
			case "lagu":
				{
					const q = (text || "").trim().toLowerCase();
					if (q === "random") { const l = LAGU_DAERAH[Math.floor(Math.random() * LAGU_DAERAH.length)]; return m.reply(`*${l.nama}* - ${l.daerah}`); }
					if (!q) {
						return m.reply(`*Lagu Daerah Indonesia*\n\n${LAGU_DAERAH.map((l) => `- ${l.nama} (${l.daerah})`).join("\n")}`);
					}
					const found = LAGU_DAERAH.filter((l) => `${l.nama} ${l.daerah}`.toLowerCase().includes(q));
					if (!found.length) return m.reply("Tidak ada lagu yang cocok.\n\nKetik .lagu untuk daftar.");
					return m.reply(found.map((l) => `*${l.nama}* - ${l.daerah}`).join("\n"));
				}
				break;
			case "wisata":
				{
					const arg = (text || "").trim().toLowerCase();
					const judul = "Destinasi Wisata Indonesia";
					const petunjuk = ["Ketik .wisata <nama> untuk detail", "Ketik .wisata cari <kata> untuk mencari", "Ketik .wisata random untuk satu entri"];
					if (arg === "random") { const w = WISATA[Math.floor(Math.random() * WISATA.length)]; return m.reply(`*${w.nama}* (${w.provinsi})\n\n${w.info}`); }
					if (/^cari\s+/.test(arg)) {
						const kata = arg.replace(/^cari\s+/, "");
						const found = WISATA.filter((w) => `${w.nama} ${w.provinsi} ${w.info}`.toLowerCase().includes(kata));
						return found.length ? m.reply(formatDaftar({ judul: "Hasil Cari Wisata", data: found, denganAcak: false, contoh: petunjuk })) : m.reply("Tidak ada destinasi yang cocok.");
					}
					if (/^\d+$/.test(arg)) return m.reply(formatDaftar({ judul, data: WISATA, halaman: parseInt(arg, 10), contoh: petunjuk }));
					if (!arg || arg === "list") return m.reply(formatDaftar({ judul, data: WISATA, halaman: 1, contoh: petunjuk }));
					const found = WISATA.filter((w) => `${w.nama} ${w.provinsi}`.toLowerCase().includes(arg));
					if (!found.length) return m.reply("Tidak ada destinasi yang cocok.\n\nKetik .wisata untuk daftar.");
					return found.length === 1 ? m.reply(`*${found[0].nama}* (${found[0].provinsi})\n\n${found[0].info}`) : m.reply(formatDaftar({ judul: "Hasil Wisata", data: found, denganAcak: false, contoh: petunjuk }));
				}
				break;
			case "resep":
				{
					const q = (text || "").trim().toLowerCase().replace(/[^a-z]/g, "");
					if (q === "random") { const keys2 = Object.keys(RESEP); return m.reply(RESEP[keys2[Math.floor(Math.random() * keys2.length)]]); }
					if (!q) {
						return m.reply(`*Resep Sederhana Indonesia*\n\n${Object.keys(RESEP).sort().join(", ")}\n\nKetik .resep nasigoreng`);
					}
					const found = RESEP[q] || Object.entries(RESEP).find(([k]) => k.includes(q));
					if (!found) return m.reply("Resep tidak ditemukan.\n\nKetik .resep untuk lihat daftar.");
					return m.reply(found[1]);
				}
				break;
			case "provinsi":
				{
					const arg = (text || "").trim();
					const norm = (s) => s.toLowerCase().replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();
					const keys = Object.keys(PROVINSI);
					if (norm(arg) === "random") { const keys2 = Object.keys(PROVINSI); const foundKey2 = keys2[Math.floor(Math.random() * keys2.length)]; const p2 = PROVINSI[foundKey2]; return m.reply(`*Provinsi ${p2.nama}*\n\nIbukota: ${p2.ibukota}\nKota besar: ${p2.kota}\nGubernur: ${p2.gubernur}\nPenduduk: ${p2.penduduk} (Sensus 2020, dibulatkan)\nSuku: ${p2.sukus}\nBahasa: ${p2.bahasa}\nLagu daerah: ${p2.lagu}\nRumah adat: ${p2.rumahadat}\nKuliner khas: ${p2.makanan}\nWisata: ${p2.wisata}\nKhas: ${p2.khas}`); }
					if (!arg) {
						return m.reply(`*38 Provinsi Indonesia*\n\n${keys.map((k) => PROVINSI[k].nama).join(", ")}\n\nKetik .provinsi jawa barat`);
					}
					const q = norm(arg);
					const foundKey = keys.find((k) => norm(k) === q) || keys.find((k) => norm(k).includes(q) || norm(PROVINSI[k].nama).includes(q));
					if (!foundKey) return m.reply("Provinsi tidak ditemukan.\n\nKetik .provinsi untuk lihat daftar.");
					const p = PROVINSI[foundKey];
					return m.reply(`*Provinsi ${p.nama}*\n\nIbukota: ${p.ibukota}\nKota besar: ${p.kota}\nGubernur: ${p.gubernur}\nPenduduk: ${p.penduduk} (Sensus 2020, dibulatkan)\nSuku: ${p.sukus}\nBahasa: ${p.bahasa}\nLagu daerah: ${p.lagu}\nRumah adat: ${p.rumahadat}\nKuliner khas: ${p.makanan}\nWisata: ${p.wisata}\nKhas: ${p.khas}\n\n_Data bisa berubah; cek Kemendagri/BPS untuk data terkini._`);
				}
				break;
			case "mbti":
			case "kepribadian":
				{
					global.mbtiState = global.mbtiState || new Map();
					const userKey = m.chat + ":" + m.sender;
					const arg = (text || "").trim().toLowerCase();
					const TIPE = MBTI_TIPES[arg.toUpperCase()];
					if (TIPE) {
						return m.reply(`${TIPE}\n\nKetik .mbti untuk tes kepribadian.`);
					}
					const pending = global.mbtiState.get(userKey);
					if (pending && Date.now() - pending.at < 15 * 60 * 1000) {
						if (arg === "batal") {
							global.mbtiState.delete(userKey);
							return m.reply("Tes MBTI dibatalkan.");
						}
						if (/^[ab]$/.test(arg)) {
							const Q = MBTI_PERTANYAAN[pending.idx];
							pending.jawaban.push(arg === "a" ? Q.a[1] : Q.b[1]);
							pending.idx += 1;
							pending.at = Date.now();
							if (pending.idx >= MBTI_PERTANYAAN.length) {
								const tipe = hitungMBTI(pending.jawaban);
								global.mbtiState.delete(userKey);
								const u = db.users && db.users[m.sender];
								if (u) u.mbti = tipe;
								return m.reply(`*Tes MBTI Selesai*\n\nTipe kamu: *${tipe}*\n\n${MBTI_TIPES[tipe] || ""}\n\nKetik .mbti untuk tes lagi.\nKetik .mbti ${tipe} untuk lihat deskripsi lagi.`);
							}
							const next = MBTI_PERTANYAAN[pending.idx];
							return m.reply(`*Tes MBTI* (pertanyaan ${pending.idx + 1}/${MBTI_PERTANYAAN.length})\n\n${next.q}\n\na. ${next.a[0]}\nb. ${next.b[0]}\n\nJawab dengan .mbti a / .mbti b`);
						}
						return m.reply("Kamu sedang dalam tes MBTI.\nJawab dengan .mbti a / .mbti b, atau .mbti batal untuk membatalkan.");
					}
					if (pending) global.mbtiState.delete(userKey);
					global.mbtiState.set(userKey, { idx: 0, jawaban: [], at: Date.now() });
					const q1 = MBTI_PERTANYAAN[0];
					return m.reply(`*Tes MBTI Dimulai*\n\n16 pertanyaan singkat. Jawab dengan .mbti a / .mbti b.\n\nPertanyaan 1/${MBTI_PERTANYAAN.length}\n\n${q1.q}\n\na. ${q1.a[0]}\nb. ${q1.b[0]}`);
				}
				break;
			case "lirik":
				{
					if (!isLimit) return m.reply(global.mess.limit);
					if (!text || !text.includes(" - ")) {
						return m.reply("Contoh: .lirik Pamungkas - To The Bone");
					}
					const sep = text.indexOf(" - ");
					const artist = text.slice(0, sep).trim();
					const title = text.slice(sep + 3).trim();
					if (!artist || !title) return m.reply("Contoh: .lirik Pamungkas - To The Bone");
					try {
						const res = await fetchApi("/music/lyrics", { artist, title });
						const lyrics = res?.result?.lyrics;
						if (!lyrics) return m.reply("Lirik tidak ditemukan untuk artis dan judul itu.");
						const pendek = lyrics.length > 3500 ? lyrics.slice(0, 3500) + "\n\n... (terpotong)" : lyrics;
						return m.reply(`*${artist} - ${title}*\n\n${pendek}`);
					} catch (e) {
						return m.reply("Gagal mengambil lirik. Periksa ejaan artis dan judul, atau coba lagi nanti.");
					}
				}
				break;
			case "ibukota":
				{
					const norm = (s) => s.toLowerCase().replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();
					const q = norm(text || "");
					const keys = Object.keys(NEGARA);
					if (q === "random") { const keys2 = Object.keys(NEGARA); const found2 = keys2[Math.floor(Math.random() * keys2.length)]; const n2 = NEGARA[found2]; return m.reply(`*Ibukota ${cap(found2)}*\n\n${n2.ibukota}\n\nMata uang: ${n2.matauang}\nBenua: ${n2.benua}`); }
					if (!q) {
						return m.reply(`*Ibukota Negara (${keys.length} negara)*\n\n${keys.map((k) => cap(k)).join(", ")}\n\nKetik .ibukota jepang`);
					}
					const found = keys.find((k) => norm(k) === q) || keys.find((k) => norm(k).includes(q));
					if (!found) return m.reply("Negara tidak ditemukan.\n\nKetik .ibukota untuk daftar.");
					const n = NEGARA[found];
					return m.reply(`*Ibukota ${cap(found)}*\n\n${n.ibukota}\n\nMata uang: ${n.matauang}\nBenua: ${n.benua}`);
				}
				break;
			case "negara":
				{
					const norm = (s) => s.toLowerCase().replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();
					const q = norm(text || "");
					const keys = Object.keys(NEGARA);
					if (q === "random") { const keys2 = Object.keys(NEGARA); const found2 = keys2[Math.floor(Math.random() * keys2.length)]; const n2 = NEGARA[found2]; return m.reply(`*${cap(found2)}*\n\nIbukota: ${n2.ibukota}\nMata uang: ${n2.matauang}\nBenua: ${n2.benua}\nPenduduk: ${n2.penduduk} (angka dibulatkan, estimasi Bank Dunia 2023)`); }
					if (!q) {
						return m.reply(`*Negara di Dunia (${keys.length})*\n\n${keys.map((k) => cap(k)).join(", ")}\n\nKetik .negara jepang`);
					}
					const found = keys.find((k) => norm(k) === q) || keys.find((k) => norm(k).includes(q));
					if (!found) return m.reply(`Negara tidak ditemukan.\n\nKetik .negara untuk daftar.`);
					const n = NEGARA[found];
					return m.reply(`*${cap(found)}*\n\nIbukota: ${n.ibukota}\nMata uang: ${n.matauang}\nBenua: ${n.benua}\nPenduduk: ${n.penduduk} (angka dibulatkan, estimasi Bank Dunia 2023)`);
				}
				break;
			case "unsur":
				{
					const q = (text || "").trim().toLowerCase().replace(/[^a-z]/g, "");
					const keys = Object.keys(UNSUR);
					if (q === "random") { const keys2 = Object.keys(UNSUR); const found2 = keys2[Math.floor(Math.random() * keys2.length)]; const u2 = UNSUR[found2]; return m.reply(`*${cap(found2)} (${u2.simbol})*\n\nNomor atom: ${u2.nomor}\nGolongan: ${u2.golongan}`); }
					if (!q) {
						return m.reply(`*Tabel Periodik Mini*\n\n${keys.map((k) => `${cap(k)} (${UNSUR[k].simbol})`).join(", ")}\n\nKetik .unsur emas\nAtau pakai simbol: .unsur au`);
					}
					const foundKey = keys.find((k) => k === q) || keys.find((k) => UNSUR[k].simbol.toLowerCase() === q) || keys.find((k) => k.startsWith(q));
					if (!foundKey) return m.reply("Unsur tidak ditemukan.\n\nKetik .unsur untuk daftar.");
					const u = UNSUR[foundKey];
					return m.reply(`*${cap(foundKey)} (${u.simbol})*\n\nNomor atom: ${u.nomor}\nGolongan: ${u.golongan}`);
				}
				break;
			case "planet":
				{
					const q = (text || "").trim().toLowerCase().replace(/[^a-z]/g, "");
					const keys = Object.keys(PLANET);
					if (q === "random") { const keys2 = Object.keys(PLANET); const found2 = keys2[Math.floor(Math.random() * keys2.length)]; const p2 = PLANET[found2]; return m.reply(`*${cap(found2)}*\n\nJenis: ${p2.jenis}\nJarak: ${p2.jarak}\nDiameter: ${p2.diameter}\nPeriode orbit: ${p2.orbit}\nJumlah bulan: ${p2.bulan}\n\n${p2.info}`); }
					if (!q) {
						return m.reply(`*Planet & Exoplanet (21)*\n\n${keys.map((k) => cap(k)).join(", ")}\n\nKetik .planet mars`);
					}
					const found = keys.find((k) => k === q) || keys.find((k) => k.startsWith(q));
					if (!found) return m.reply("Planet tidak ditemukan.\n\nKetik .planet untuk daftar.");
					const p = PLANET[found];
					return m.reply(`*${cap(found)}*\n\nJenis: ${p.jenis}\nJarak dari Matahari: ${p.jarak}\nDiameter: ${p.diameter}\nPeriode orbit: ${p.orbit}\nJumlah bulan: ${p.bulan}\n\n${p.info}`);
				}
				break;
			case "balik":
				{
					if (!text) return m.reply("Contoh: .balik selamat pagi");
					return m.reply([...text].reverse().join(""));
				}
				break;
			case "hitungkata":
				{
					if (!text) return m.reply("Contoh: .hitungkata halo apa kabar dunia");
					const kata = text.trim().split(/\s+/).filter(Boolean);
					const karakter = text.length;
					const karakterTanpaSpasi = text.replace(/\s+/g, "").length;
					const kalimat = (text.match(/[.!?]+/g) || []).length || 1;
					return m.reply(`*Statistik Teks*\n\nKata: ${kata.length}\nKarakter (dengan spasi): ${karakter}\nKarakter (tanpa spasi): ${karakterTanpaSpasi}\nKalimat: ${kalimat}`);
				}
				break;
			case "warna":
				{
					const hex = () => Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
					const [r, g, b] = hex();
					const toHex = (v) => v.toString(16).padStart(2, "0").toUpperCase();
					const max = Math.max(r, g, b) / 255, min = Math.min(r, g, b) / 255;
					const l = (max + min) / 2;
					const d = max - min;
					const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
					let h = 0;
					if (d !== 0) {
						if (max * 255 === r) h = 60 * (((g - b) / (d * 255)) % 6);
						else if (max * 255 === g) h = 60 * ((b - r) / (d * 255) + 2);
						else h = 60 * ((r - g) / (d * 255) + 4);
						if (h < 0) h += 360;
					}
					return m.reply(`*Warna Acak*\n\nHEX: #${toHex(r)}${toHex(g)}${toHex(b)}\nRGB: rgb(${r}, ${g}, ${b})\nHSL: hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`);
				}
				break;
			case "kpk":
			case "fpb":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply(`Contoh:\n.kpk 4 6 8\n.fpb 48 36 24`);
					const angka = arg.split(/\s+/).map(parseBulat);
					if (angka.length < 2) return m.reply("Butuh minimal 2 bilangan. Contoh: .kpk 4 6 8");
					if (angka.length > 8) return m.reply("Maksimal 8 bilangan sekaligus.");
					if (angka.some((n) => n === null)) return m.reply("Hanya bilangan bulat 1 sampai 10^12 yang boleh.");
					if (command === "kpk") {
						const hasil = kpk(angka);
						return m.reply(hasil === null ? "Hasil terlalu besar untuk dihitung." : `*KPK* dari ${angka.join(", ")} = *${hasil.toLocaleString("id-ID")}*`);
					}
					return m.reply(`*FPB* dari ${angka.join(", ")} = *${fpb(angka).toLocaleString("id-ID")}*`);
				}
				break;
			case "faktor":
			case "faktorisasi":
				{
					const arg = (text || "").trim();
					const n = parseBulat(arg);
					if (n === null) return m.reply("Contoh: .faktor 360 (bilangan bulat 1 sampai 10^12)");
					const hasil = [...faktorPrima(n)].map(([p, e]) => (e > 1 ? `${p}^${e}` : String(p))).join(" x ");
					return m.reply(`*Faktorisasi Prima*\n\n${n.toLocaleString("id-ID")} = ${hasil}`);
				}
				break;
			case "prima":
				{
					const arg = (text || "").trim();
					const n = parseBulat(arg);
					if (n === null) return m.reply("Contoh: .prima 97 (bilangan bulat 1 sampai 10^12)");
					if (isPrima(n)) return m.reply(`*${n.toLocaleString("id-ID")}* adalah bilangan *prima*.`);
					const pembagi = pembagiTerkecil(n);
					return m.reply(pembagi === null ? `*${n.toLocaleString("id-ID")}* bukan bilangan prima.` : `*${n.toLocaleString("id-ID")}* bukan bilangan prima (habis dibagi ${pembagi}).`);
				}
				break;
			case "palindrom":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .palindrom katak\nSpasi dan tanda baca diabaikan.");
					return m.reply(isPalindrom(arg) ? `*${arg}* adalah *palindrom*.` : `*${arg}* bukan palindrom.`);
				}
				break;
			case "anagram":
				{
					const arg = (text || "").trim();
					if (!arg.includes("|")) return m.reply("Contoh: .anagram kucing | kucin\nPisahkan dua teks dengan | (garis tegak).");
					const [a, b] = arg.split("|").map((s) => s.trim());
					if (!a || !b) return m.reply("Kedua teks harus diisi.");
					return m.reply(isAnagram(a, b) ? `*${a}* dan *${b}* adalah *anagram*.` : `*${a}* dan *${b}* bukan anagram.`);
				}
				break;
			case "diskon":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(\d+(?:[.,]\d+)?)\s+(\d+(?:[.,]\d+)?)$/);
					if (!mt) return m.reply("Contoh: .diskon 150000 25\nHitung harga setelah diskon (persen).");
					const harga = Number(mt[1].replace(",", "."));
					const persen = Number(mt[2].replace(",", "."));
					if (!Number.isFinite(harga) || harga <= 0 || harga > 1e13) return m.reply("Harga harus bilangan positif.");
					if (!Number.isFinite(persen) || persen < 0 || persen > 100) return m.reply("Persen diskon harus 0 sampai 100.");
					const { hemat, bayar } = hitungDiskon(harga, persen);
					return m.reply(`*Diskon ${persen.toLocaleString("id-ID")}%*\n\nHarga awal: ${formatRupiah(harga)}\nHemat: ${formatRupiah(hemat)}\n*Bayar: ${formatRupiah(bayar)}*`);
				}
				break;
			case "cicilan":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(\d+(?:[.,]\d+)?)\s+(\d+(?:[.,]\d+)?)\s+(\d+)$/);
					if (!mt) return m.reply("Contoh: .cicilan 5000000 12 12\nFormat: pokok bunga-tahunan-persen tenor-bulan\nMetode: anuitas (angsuran tetap).");
					const pokok = Number(mt[1].replace(",", "."));
					const bunga = Number(mt[2].replace(",", "."));
					const bulan = Number(mt[3]);
					if (!Number.isFinite(pokok) || pokok <= 0 || pokok > 1e13) return m.reply("Pokok harus bilangan positif.");
					if (!Number.isFinite(bunga) || bunga < 0 || bunga > 100) return m.reply("Bunga tahunan harus 0 sampai 100 persen.");
					if (!Number.isInteger(bulan) || bulan < 1 || bulan > 480) return m.reply("Tenor harus 1 sampai 480 bulan.");
					const { angsuran, total, totalBunga } = cicilanAnuitas(pokok, bunga, bulan);
					return m.reply(`*Simulasi Cicilan (Anuitas)*\n\nPokok: ${formatRupiah(pokok)}\nBunga: ${bunga.toLocaleString("id-ID")}%/tahun\nTenor: ${bulan} bulan\n\nAngsuran/bulan: *${formatRupiah(angsuran)}*\nTotal bayar: ${formatRupiah(total)}\nTotal bunga: ${formatRupiah(totalBunga)}`);
				}
				break;
			case "bmi":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(\d+(?:[.,]\d+)?)\s+(\d+(?:[.,]\d+)?)$/);
					if (!mt) return m.reply("Contoh: .bmi 65 170\nFormat: berat (kg) tinggi (cm)\nKategori mengikuti standar WHO.");
					const berat = Number(mt[1].replace(",", "."));
					const tinggi = Number(mt[2].replace(",", "."));
					if (!Number.isFinite(berat) || berat < 20 || berat > 500) return m.reply("Berat badan harus 20 sampai 500 kg.");
					if (!Number.isFinite(tinggi) || tinggi < 80 || tinggi > 250) return m.reply("Tinggi badan harus 80 sampai 250 cm.");
					const { nilai, kategori } = hitungBmi(berat, tinggi);
					return m.reply(`*BMI*\n\nBerat: ${berat.toLocaleString("id-ID")} kg\nTinggi: ${tinggi.toLocaleString("id-ID")} cm\nBMI: *${nilai.toFixed(2)}*\nKategori: ${kategori}\n\n_Standar WHO (bukan diagnosis medis)._`);
				}
				break;
			case "jamtidur":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .jamtidur 23:00\nHitung waktu bangun ideal (siklus tidur 90 menit).");
					const hasil = siklusTidur(arg);
					if (!hasil) return m.reply("Format jam salah. Contoh: .jamtidur 23:00");
					const baris = hasil.map((h) => `${h.siklus} siklus (${h.durasi}): bangun jam *${h.bangun}*`).join("\n");
					return m.reply(`*Waktu Bangun Ideal*\n\nTidur jam ${arg} (+15 menit tertidur):\n\n${baris}\n\n_Estimasi, setiap orang berbeda._`);
				}
				break;
			case "akar":
			case "akarkuadrat":
				{
					const arg = (text || "").trim().replace(",", ".");
					if (!arg || !Number.isFinite(Number(arg))) return m.reply("Contoh: .akar 144 atau .akar 2");
					const hasil = akar(Number(arg));
					if (!hasil) return m.reply("Masukkan bilangan >= 0.");
					if (hasil.eksak) return m.reply(`*Akar ${arg} = ${hasil.hasil}*`);
					return m.reply(`*Akar ${arg}*\n\n≈ ${hasil.hasil.toFixed(6)}`);
				}
				break;
			case "faktorial":
				{
					const arg = (text || "").trim();
					if (!/^\d{1,3}$/.test(arg)) return m.reply("Contoh: .faktorial 20\nBilangan bulat 0 sampai 200.");
					const hasil = faktorial(parseInt(arg, 10));
					if (hasil === null) return m.reply("Bilangan bulat 0 sampai 200.");
					return m.reply(`*${arg}! = ${formatBigInt(hasil)}*`);
				}
				break;
			case "hariini":
			case "today":
				{
					const zona = global.timezone || "Asia/Jakarta";
					const sekarang = new Date();
					const fmtTanggal = new Intl.DateTimeFormat("id-ID", { timeZone: zona, weekday: "long", day: "numeric", month: "long", year: "numeric" });
					const fmtJam = new Intl.DateTimeFormat("id-ID", { timeZone: zona, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZoneName: "short" });
					return m.reply(`*Hari Ini*\n\n${fmtTanggal.format(sekarang)}\nWaktu: ${fmtJam.format(sekarang)}\nMinggu ke-${isoWeek(sekarang)} tahun ${sekarang.getFullYear()}`);
				}
				break;
			case "koin":
			case "coin":
				{
					const arg = (text || "").trim();
					if (arg && !/^\d{1,2}$/.test(arg)) return m.reply("Contoh: .koin\n.koin 3 (lempar 1 sampai 10 koin)");
					const jumlah = arg ? parseInt(arg, 10) : 1;
					if (jumlah < 1 || jumlah > 10) return m.reply("Jumlah koin 1 sampai 10.");
					const hasil = Array.from({ length: jumlah }, () => (Math.random() < 0.5 ? "Angka" : "Gambar"));
					if (jumlah === 1) return m.reply(`*Lempar koin*\n\nHasil: *${hasil[0]}*`);
					return m.reply(`*Lempar ${jumlah} koin*\n\n${hasil.map((h, i) => `${i + 1}. ${h}`).join("\n")}`);
				}
				break;
			case "acakkata":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .acakkata belajar\nHuruf di setiap kata diacak.");
					const acakKata = (s) => {
						const a = [...s];
						for (let i = a.length - 1; i > 0; i--) {
							const j = Math.floor(Math.random() * (i + 1));
							[a[i], a[j]] = [a[j], a[i]];
						}
						return a.join("");
					};
					return m.reply(`*Kata acak*\n\n${arg.split(/\s+/).map(acakKata).join(" ")}`);
				}
				break;
			case "bahasa":
				{
					const tampil = (b) => {
						const contoh = b.contoh.map((c) => `- ${c}`).join("\n");
						return `*Bahasa ${b.nama}*\n\nAsal: ${b.asal}\nCatatan: ${b.catatan}\n\nContoh:\n${contoh}`;
					};
					const arg = (text || "").trim();
					if (arg.toLowerCase() === "random") return m.reply(tampil(BAHASA[Math.floor(Math.random() * BAHASA.length)]));
					if (!arg) {
						return m.reply(`*Bahasa Daerah Nusantara (${BAHASA.length})*\n\n${BAHASA.map((b) => `- *${b.nama}* (${b.asal.split(",")[0]})`).join("\n")}\n\nKetik .bahasa jawa`);
					}
					const found = cariBahasa(arg);
					if (!found) return m.reply("Bahasa tidak ditemukan.\n\nKetik .bahasa untuk daftar.");
					return m.reply(tampil(found));
				}
				break;
			case "danau":
				{
					const q = (text || "").trim().toLowerCase();
					if (q === "random") { const d = DANAU[Math.floor(Math.random() * DANAU.length)]; return m.reply(`*${d.nama}* (${d.provinsi})\n\n${d.info}`); }
					if (!q) {
						return m.reply(`*Danau di Indonesia (${DANAU.length})*\n\n${DANAU.map((d) => `- ${d.nama} (${d.provinsi})`).join("\n")}\n\nKetik .danau toba`);
					}
					const found = DANAU.filter((d) => `${d.nama} ${d.provinsi}`.toLowerCase().includes(q));
					if (!found.length) return m.reply("Danau tidak ditemukan.\n\nKetik .danau untuk daftar.");
					return m.reply(found.map((d) => `*${d.nama}* (${d.provinsi})\n${d.info}`).join("\n\n"));
				}
				break;
			case "gunung":
				{
					const q = (text || "").trim().toLowerCase();
					if (q === "random") { const g = GUNUNG[Math.floor(Math.random() * GUNUNG.length)]; return m.reply(`*${g.nama}* (${g.provinsi})\n\n${g.info}`); }
					if (!q) {
						return m.reply(`*Gunung di Indonesia (${GUNUNG.length})*\n\n${GUNUNG.map((g) => `- ${g.nama} (${g.provinsi})`).join("\n")}\n\nKetik .gunung kerinci`);
					}
					const found = GUNUNG.filter((g) => `${g.nama} ${g.provinsi}`.toLowerCase().includes(q));
					if (!found.length) return m.reply("Gunung tidak ditemukan.\n\nKetik .gunung untuk daftar.");
					return m.reply(found.map((g) => `*${g.nama}* (${g.provinsi})\n${g.info}`).join("\n\n"));
				}
				break;
			case "pulau":
				{
					const q = (text || "").trim().toLowerCase();
					if (q === "random") { const p = PULAU[Math.floor(Math.random() * PULAU.length)]; return m.reply(`*${p.nama}*\n\n${p.info}`); }
					if (!q) {
						return m.reply(`*Pulau di Indonesia (${PULAU.length})*\n\n${PULAU.map((p) => `- ${p.nama}`).join("\n")}\n\nKetik .pulau jawa`);
					}
					const found = PULAU.filter((p) => p.nama.toLowerCase().includes(q));
					if (!found.length) return m.reply("Pulau tidak ditemukan.\n\nKetik .pulau untuk daftar.");
					return m.reply(found.map((p) => `*${p.nama}*\n${p.info}`).join("\n\n"));
				}
				break;
			case "sungai":
				{
					const q = (text || "").trim().toLowerCase();
					if (q === "random") { const s = SUNGAI[Math.floor(Math.random() * SUNGAI.length)]; return m.reply(`*${s.nama}* (${s.provinsi})\n\n${s.info}`); }
					if (!q) {
						return m.reply(`*Sungai di Indonesia (${SUNGAI.length})*\n\n${SUNGAI.map((s) => `- ${s.nama} (${s.provinsi})`).join("\n")}\n\nKetik .sungai kapuas`);
					}
					const found = SUNGAI.filter((s) => `${s.nama} ${s.provinsi}`.toLowerCase().includes(q));
					if (!found.length) return m.reply("Sungai tidak ditemukan.\n\nKetik .sungai untuk daftar.");
					return m.reply(found.map((s) => `*${s.nama}* (${s.provinsi})\n${s.info}`).join("\n\n"));
				}
				break;
			case "haribersejarah":
				{
					const q = (text || "").trim().toLowerCase();
					if (q === "list" || q === "semua") {
						return m.reply(`*Hari Bersejarah (${HARI_BERSEJARAH.length})*\n\n${HARI_BERSEJARAH.map((h) => `- *${h.tanggal}*: ${h.info}`).join("\n")}`);
					}
					const ditemukan = q ? cariHari(q) : hariHariIni();
					if (!ditemukan) return m.reply(q ? "Tanggal tidak ditemukan.\n\nKetik .haribersejarah list" : "Hari ini tidak ada catatan dalam daftar.\n\nKetik .haribersejarah 17 agustus\nKetik .haribersejarah list");
					return m.reply(`*${ditemukan.tanggal}*\n\n${ditemukan.info}`);
				}
				break;
			case "waktu":
				{
					const arg = (text || "").trim();
					if (arg) {
						const kota = cariKota(arg);
						if (!kota) return m.reply(`Kota tidak ditemukan.\n\nKetik .waktu untuk daftar kota.`);
						const jam = waktuDi(kota.zona);
						return m.reply(`*Waktu di ${kota.nama}*\n\n${jam}${kota.label ? " (" + kota.label + ")" : ""}\nZona: ${kota.zona}`);
					}
					const baris = KOTA_WAKTU.filter((k) => k.label).map((k) => `${k.nama}: *${waktuDi(k.zona)}* ${k.label}`).join("\n");
					return m.reply(`*Waktu Saat Ini*\n\n${baris}\n\nKota lain: ${KOTA_WAKTU.filter((k) => !k.label).map((k) => k.nama.toLowerCase()).join(", ")}\nContoh: .waktu tokyo`);
				}
				break;
			case "surat":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) {
						return m.reply(`*Templat Surat (${SURAT.length})*\n\n${SURAT.map((s) => `- ${s.nama} (.surat ${s.kunci})`).join("\n")}\n\nKetik .surat lamaran`);
					}
					const found = cariSurat(q);
					if (!found) return m.reply("Templat tidak ditemukan.\n\nKetik .surat untuk daftar.");
					return m.reply(`*${found.nama}*\n\n${found.isi}\n\n_Templat contoh, sesuaikan dengan kebutuhanmu._`);
				}
				break;
			case "hewan":
				{
					const q = (text || "").trim().toLowerCase();
					if (q === "random") { const h = FAUNA[Math.floor(Math.random() * FAUNA.length)]; return m.reply(`*${h.nama}*\n${h.asal}\n\n${h.info}`); }
					if (!q) {
						return m.reply(`*Fauna Indonesia (${FAUNA.length})*\n\n${FAUNA.map((h) => `- ${h.nama}`).join(", ")}\n\nKetik .hewan komodo`);
					}
					const found = q === "list" || q === "semua" ? FAUNA : FAUNA.filter((h) => h.nama.toLowerCase().includes(q) || h.asal.toLowerCase().includes(q));
					if (!found.length) return m.reply("Hewan tidak ditemukan.\n\nKetik .hewan untuk daftar.");
					return m.reply(found.map((h) => `*${h.nama}* (${h.asal})\n${h.info}`).join("\n\n"));
				}
				break;
			case "tumbuhan":
				{
					const q = (text || "").trim().toLowerCase();
					if (q === "random") { const t = FLORA[Math.floor(Math.random() * FLORA.length)]; return m.reply(`*${t.nama}*\n${t.asal}\n\n${t.info}`); }
					if (!q) {
						return m.reply(`*Flora Indonesia (${FLORA.length})*\n\n${FLORA.map((t) => `- ${t.nama}`).join(", ")}\n\nKetik .tumbuhan rafflesia`);
					}
					const found = q === "list" || q === "semua" ? FLORA : FLORA.filter((t) => t.nama.toLowerCase().includes(q) || t.asal.toLowerCase().includes(q));
					if (!found.length) return m.reply("Tumbuhan tidak ditemukan.\n\nKetik .tumbuhan untuk daftar.");
					return m.reply(found.map((t) => `*${t.nama}* (${t.asal})\n${t.info}`).join("\n\n"));
				}
				break;
			case "vektor":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(dot|cross|panjang)\s+(-?[\d.,]+(?:\s+-?[\d.,]+)+)$/i);
					if (!mt) return m.reply("Contoh:\n.vektor dot 1 2 3 4 5 6\n.vektor cross 1 0 0 0 1 0\n.vektor panjang 3 4");
					const angka = (s) => Number(String(s).replace(",", "."));
					const nilai = mt[2].split(/\s+/).map(angka);
					const r = (v) => Number(v.toFixed(4)).toLocaleString("id-ID");
					const mode = mt[1].toLowerCase();
					if (mode === "panjang") {
						const hasil = panjangVektor(nilai);
						return hasil === null ? m.reply("Vektor harus 2 atau 3 dimensi.") : m.reply(`*Panjang Vektor*\n\n[${nilai.map(r).join(", ")}] = *${r(hasil)}*`);
					}
					const tengah = nilai.length / 2;
					if (!Number.isInteger(tengah) || nilai.length < 2 || nilai.length > 6) return m.reply("Dot/cross butuh dua vektor dengan dimensi sama.");
					const a = nilai.slice(0, tengah);
					const b = nilai.slice(tengah);
					if (mode === "dot") {
						const hasil = dotVektor(a, b);
						return hasil === null ? m.reply("Dimensi vektor tidak valid.") : m.reply(`*Dot Product*\n\n[${a.map(r).join(", ")}] · [${b.map(r).join(", ")}] = *${r(hasil)}*`);
					}
					const hasil = crossVektor(a, b);
					return hasil === null ? m.reply("Cross product hanya untuk vektor 3 dimensi.") : m.reply(`*Cross Product*\n\n[${a.map(r).join(", ")}] x [${b.map(r).join(", ")}] = *[${hasil.map(r).join(", ")}]*`);
				}
				break;
			case "kompleks":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(tambah|kurang|kali|bagi|konjugat|modulus)\s+(-?[\d.,]+)\s+(-?[\d.,]+)(?:\s+(-?[\d.,]+)\s+(-?[\d.,]+))?$/i);
					if (!mt) return m.reply("Contoh:\n.kompleks kali 1 2 3 4\n.kompleks modulus 3 4\nFormat: a bi [c di]");
					const angka = (s) => Number(String(s).replace(",", "."));
					const a = [angka(mt[2]), angka(mt[3])];
					const b = mt[4] ? [angka(mt[4]), angka(mt[5])] : null;
					const r = (v) => Number(v.toFixed(4)).toLocaleString("id-ID");
					const tampil = ([re, im]) => `${re < 0 ? "(" + r(re) + ")" : r(re)} ${im < 0 ? "- " + r(Math.abs(im)) : "+ " + r(im)}i`;
					const mode = mt[1].toLowerCase();
					if (mode === "konjugat") return m.reply(`*Konjugat*\n\n${tampil(kompleksKonjugat(a))}`);
					if (mode === "modulus") return m.reply(`*Modulus*\n\n|${tampil(a)}| = *${r(kompleksModulus(a))}*`);
					const operasi = { tambah: kompleksTambah, kurang: kompleksKurang, kali: kompleksKali, bagi: kompleksBagi }[mode];
					if (!b) return m.reply("Operasi ini butuh dua bilangan kompleks.");
					const hasil = operasi(a, b);
					if (hasil === null) return m.reply(mode === "bagi" ? "Pembagi tidak boleh nol." : "Input tidak valid.");
					return m.reply(`*${mode[0].toUpperCase() + mode.slice(1)}*\n\n${tampil(a)} ${mode} ${tampil(b)} = *${tampil(hasil)}*`);
				}
				break;
			case "matriks":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(det|invers|transpose|kali)\s+(-?[\d.,]+)\s+(-?[\d.,]+)\s+(-?[\d.,]+)\s+(-?[\d.,]+)(?:\s+(-?[\d.,]+)\s+(-?[\d.,]+)\s+(-?[\d.,]+)\s+(-?[\d.,]+))?$/i);
					if (!mt) return m.reply("Contoh:\n.matriks det 2 3 1 4\n.matriks invers 2 3 1 4\n.matriks transpose 1 2 3 4\n.matriks kali 1 2 3 4 5 6 7 8\nInput: a b c d (baris demi baris)");
					const angka = (s) => Number(String(s).replace(",", "."));
					const A = [angka(mt[2]), angka(mt[3]), angka(mt[4]), angka(mt[5])];
					const B = mt[6] ? [angka(mt[6]), angka(mt[7]), angka(mt[8]), angka(mt[9])] : null;
					const mode = mt[1].toLowerCase();
					const r = (v) => Number(v.toFixed(4)).toLocaleString("id-ID");
					const tampil = (m) => `[ ${r(m[0])}  ${r(m[1])} ]\n[ ${r(m[2])}  ${r(m[3])} ]`;
					if (mode === "det") {
						const hasil = det2(A);
						return hasil === null ? m.reply("Matriks tidak valid.") : m.reply(`*Determinan*\n\n${tampil(A)}\n\nDet = *${r(hasil)}*`);
					}
					if (mode === "invers") {
						const hasil = invers2(A);
						return hasil === null ? m.reply("Determinan nol, matriks tidak punya invers.") : m.reply(`*Invers Matriks*\n\n${tampil(hasil)}`);
					}
					if (mode === "transpose") {
						return m.reply(`*Transpose*\n\n${tampil(transpose2(A))}`);
					}
					const hasil = kali2(A, B);
					return hasil === null ? m.reply("Perkalian butuh dua matriks 2x2.") : m.reply(`*Hasil Perkalian A x B*\n\n${tampil(hasil)}`);
				}
				break;
			case "deret":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(aritmetika|geometri|ar|geo)\s+(-?[\d.,]+)\s+(-?[\d.,]+)\s+(\d+)$/i);
					if (!mt) return m.reply("Contoh:\n.deret aritmetika 2 3 5\n.deret geometri 2 3 4\nFormat: jenis suku-pertama beda/rasio jumlah-suku");
					const a = Number(mt[2].replace(",", "."));
					const b = Number(mt[3].replace(",", "."));
					const n = parseInt(mt[4], 10);
					const geo = /^(geometri|geo)$/i.test(mt[1]);
					const hasil = geo ? deretGeometri(a, b, n) : deretAritmetika(a, b, n);
					if (!hasil) return m.reply("Suku harus 1 sampai 1000 dan hasil tidak boleh terlalu besar.");
					const r = (v) => Number(v.toFixed(4)).toLocaleString("id-ID");
					return m.reply(`*Deret ${geo ? "Geometri" : "Aritmetika"}*\n\nSuku pertama: ${r(a)}\n${geo ? "Rasio" : "Beda"}: ${r(b)}\nJumlah suku: ${n}\n\nSuku ke-${n}: *${r(hasil.sukuKe)}*\nJumlah ${n} suku: *${r(hasil.jumlah)}*`);
				}
				break;
			case "linear":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(-?[\d.,]+)\s+(-?[\d.,]+)\s+(-?[\d.,]+)$/);
					if (!mt) return m.reply("Contoh: .linear 2 3 11\nFormat: a b c untuk persamaan ax + b = c");
					const hasil = linearSatu(...mt.slice(1).map((s) => Number(s.replace(",", "."))));
					if (!hasil) return m.reply("Semua nilai harus bilangan.");
					if (hasil.tipe === "identitas") return m.reply("Persamaan berlaku untuk semua x (identitas).");
					if (hasil.tipe === "inkonsisten") return m.reply("Persamaan tidak punya solusi (inkonsisten).");
					return m.reply(`*Persamaan Linear*\n\nSolusi: *x = ${Number(hasil.x.toFixed(4)).toLocaleString("id-ID")}*`);
				}
				break;
			case "persen":
				{
					const arg = (text || "").trim();
					const angka = (s) => Number(String(s).replace(",", "."));
					const mtNaik = arg.match(/^naik\s+(-?[\d.,]+)\s+(-?[\d.,]+)$/i);
					if (mtNaik) {
						const dari = angka(mtNaik[1]);
						const ke = angka(mtNaik[2]);
						const hasil = persenPerubahan(dari, ke);
						if (hasil === null) return m.reply("Nilai awal tidak boleh nol.");
						return m.reply(`*Perubahan Persen*\n\nDari ${dari.toLocaleString("id-ID")} ke ${ke.toLocaleString("id-ID")}: *${Number(hasil.toFixed(4)).toLocaleString("id-ID")}%*\n${hasil >= 0 ? "Naik" : "Turun"} ${Number(Math.abs(hasil).toFixed(4)).toLocaleString("id-ID")}%`);
					}
					const mt = arg.match(/^(-?[\d.,]+)\s+(-?[\d.,]+)$/);
					if (!mt) return m.reply("Contoh:\n.persen 25 200\n.persen naik 100 125");
					const bagian = angka(mt[1]);
					const total = angka(mt[2]);
					const hasil = persenDari(bagian, total);
					if (hasil === null) return m.reply("Total tidak boleh nol.");
					return m.reply(`*Persen*\n\n${bagian.toLocaleString("id-ID")} dari ${total.toLocaleString("id-ID")} = *${Number(hasil.toFixed(4)).toLocaleString("id-ID")}%*`);
				}
				break;
			case "luas":
				{
					const arg = (text || "").trim().replace(/persegi\s+panjang/gi, "persegipanjang");
					const bagian = arg.split(/[\s,]+/).filter(Boolean);
					const jenis = bagian.shift();
					const angka = bagian.map((s) => Number(s));
					const hasil = luasBangun(jenis, ...angka);
					if (!hasil) return m.reply(`Contoh:\n.luas persegi 5\n.luas segitiga 6 4\n.luas trapesium 3 5 4\nJenis: persegi, persegi panjang, segitiga, lingkaran, jajargenjang, trapesium, layang-layang, belah ketupat`);
					return m.reply(`*Luas ${jenis.toLowerCase()}*\n\nRumus: ${hasil.rumus}\n${hasil.label}\n\nHasil: *${Number(hasil.hasil.toFixed(4)).toLocaleString("id-ID")}* satuan luas`);
				}
				break;
			case "volume":
				{
					const arg = (text || "").trim();
					const bagian = arg.split(/[\s,]+/).filter(Boolean);
					const jenis = bagian.shift();
					const angka = bagian.map((s) => Number(s));
					const hasil = volumeBangun(jenis, ...angka);
					if (!hasil) return m.reply(`Contoh:\n.volume kubus 3\n.volume tabung 2 7\n.volume bola 5\nJenis: kubus, balok, prisma, silinder/tabung, kerucut, bola, limas`);
					return m.reply(`*Volume ${jenis.toLowerCase()}*\n\nRumus: ${hasil.rumus}\n${hasil.label}\n\nHasil: *${Number(hasil.hasil.toFixed(4)).toLocaleString("id-ID")}* satuan volume`);
				}
				break;
			case "kuadrat":
				{
					const arg = (text || "").trim();
					const bagian = arg.split(/[\s,]+/).filter(Boolean).map(Number);
					if (bagian.length !== 3 || bagian.some((n) => !Number.isFinite(n))) return m.reply("Contoh: .kuadrat 1 -5 6\nFormat: a b c untuk persamaan ax^2 + bx + c = 0");
					const hasil = akarKuadrat(...bagian);
					if (!hasil) return m.reply("Nilai a tidak boleh nol dan semua harus bilangan.");
					const baris = hasil.tipe === "kompleks"
						? `Bagian real: ${Number(hasil.real.toFixed(4))}\nBagian imajiner: ${Number(hasil.imajiner.toFixed(4))}i`
						: hasil.akar.map((x, i) => `x${i + 1} = ${Number(x.toFixed(4))}`).join("\n");
					return m.reply(`*Akar Persamaan Kuadrat*\n\n${bagian[1] > 0 ? "x^2 + " + bagian[1] + "x" : "x^2 " + bagian[1] + "x"} ${bagian[2] > 0 ? "+ " + bagian[2] : bagian[2]} = 0\nDiskriminan: ${hasil.diskriminan}\nJenis akar: ${hasil.tipe === "dua" ? "dua akar real" : hasil.tipe === "satu" ? "satu akar real kembar" : "dua akar kompleks"}\n\n${baris}`);
				}
				break;
			case "hash":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(sha256|sha512|sha1|md5)?\s*([\s\S]*)$/i);
					if (!mt || !mt[2].trim()) return m.reply("Contoh:\n.hash halo\n.hash sha512 halo\nAlgoritma: md5, sha1, sha256, sha512");
					const hasil = hashTeks(mt[1] || "sha256", mt[2].trim());
					if (!hasil) return m.reply("Algoritma tidak didukung atau teks terlalu panjang.");
					return m.reply(`*Hash ${(mt[1] || "sha256").toLowerCase()}*\n\n\`${hasil}\``);
				}
				break;
			case "urlcode":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(encode|decode)\s+([\s\S]+)$/i);
					if (!mt) return m.reply("Contoh:\n.urlcode encode a b&c=d\n.urlcode decode a%20b%26c%3Dd");
					const hasil = mt[1].toLowerCase() === "encode" ? urlEncode(mt[2]) : urlDecode(mt[2]);
					if (hasil === null) return m.reply("Input tidak valid atau terlalu panjang.");
					return m.reply(`*Hasil ${mt[1].toLowerCase()}:*\n\n${hasil}`);
				}
				break;
			case "json":
			case "cekjson":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .json {\"a\":1}\n.json rapi {\"a\":1}");
					let rapi = false;
					let isi = arg;
					if (/^rapi\s+/i.test(arg)) {
						rapi = true;
						isi = arg.replace(/^rapi\s+/i, "");
					}
					const hasil = validasiJson(isi, { rapi });
					if (!hasil.ok) return m.reply(`JSON tidak valid:\n${hasil.alasan}`);
					if (rapi) return m.reply(`*JSON Rapi*\n\n\`\`\`json\n${hasil.hasil}\n\`\`\``);
					return m.reply(`*JSON valid* (${hasil.tipe}).\n\nKetik .json rapi <json> untuk merapikannya.`);
				}
				break;
			case "format":
			case "formattanggal":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(\d{4}-\d{2}-\d{2})(?:\s+([\d:.]+))?(?:\s+([A-Za-z_/]+))?$/);
					if (!mt) return m.reply("Contoh:\n.format 2026-11-26\n.format 2026-11-26 10:30 UTC\n.format 2026-11-26 10:30 Asia/Tokyo");
					const tanggal = mt[2] ? `${mt[1]}T${mt[2].replace(".", ":")}${/Z|[+-]\d{2}:?\d{2}$/.test(mt[2]) ? "" : "Z"}` : `${mt[1]}T12:00:00Z`;
					const zona = mt[3] || global.timezone || "Asia/Jakarta";
					const tgl = formatTanggal(tanggal, { zona, denganHari: true });
					const jam = formatWaktu(tanggal, zona);
					if (!tgl || !jam) return m.reply("Zona waktu atau tanggal tidak valid.");
					return m.reply(`*${tgl}*\nJam: *${jam}* (${zona})`);
				}
				break;
			case "potong":
			case "potongteks":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(\d+)\s+([\s\S]+)$/);
					if (!mt) return m.reply("Contoh: .potong 20 kalimat yang ingin dipotong");
					const panjang = parseInt(mt[1], 10);
					if (panjang < 1 || panjang > 500) return m.reply("Panjang 1 sampai 500 karakter.");
					return m.reply(potongTeks(mt[2], panjang));
				}
				break;
			case "hitungteks":
				{
					if (!text) return m.reply("Contoh: .hitungteks halo dunia apa kabar");
					const h = hitungKata(text);
					return m.reply(`*Statistik Teks*\n\nKata: ${h.kata}\nKarakter (dengan spasi): ${h.karakter}\nKarakter (tanpa spasi): ${h.karakterTanpaSpasi}\nKalimat: ${h.kalimat}`);
				}
				break;
			case "terbilang2":
			case "katabilangan":
				{
					const arg = (text || "").trim().replace(/\./g, "").replace(",", ".");
					if (!arg || !Number.isFinite(Number(arg))) return m.reply("Contoh: .terbilang2 1234567\nBilangan 0 sampai 999.999.999.999.");
					const hasil = kataBilangan(Number(arg));
					if (!hasil) return m.reply("Bilangan 0 sampai 999.999.999.999.");
					return m.reply(`*${arg}* = ${hasil}`);
				}
				break;
			case "hurufke":
				{
					const arg = (text || "").trim();
					if (arg && /^\d+$/.test(arg)) {
						const huruf = hurufKe(parseInt(arg, 10));
						return m.reply(huruf ? `*${arg}* = *${huruf}*` : "Nomor harus 1 sampai 26.");
					}
					if (arg && /^[a-z]$/i.test(arg)) {
						const nomor = angkaKeHuruf(arg);
						return m.reply(`*${arg.toUpperCase()}* = *${nomor}*`);
					}
					return m.reply("Contoh: .hurufke 1\n.hurufke z");
				}
				break;
			case "sapaan":
				{
					const arg = (text || "").trim();
					const jam = arg ? parseInt(arg, 10) : new Date().getHours();
					const sapa = ucapanWaktu(jam);
					if (!sapa) return m.reply("Jam harus 0 sampai 23. Contoh: .sapaan 8");
					return m.reply(`${sapa}${arg ? ` (jam ${jam}:00)` : "!"}`);
				}
				break;
			case "statistik":
				{
					const arg = (text || "").trim();
					const angka = arg.split(/[\s,]+/).filter(Boolean).map((s) => Number(s.replace(",", ".")));
					const hasil = statistik(angka);
					if (!hasil) return m.reply("Contoh: .statistik 4 7 2 9 3\nMasukkan sampai 1000 bilangan.");
					const r = (n) => Number(n.toFixed(4)).toLocaleString("id-ID");
					return m.reply(`*Statistik Data*\n\nJumlah: ${hasil.jumlah}\nTotal: ${r(hasil.total)}\nRata-rata: ${r(hasil.rataRata)}\nMedian: ${r(hasil.median)}\nMinimum: ${r(hasil.min)}\nMaksimum: ${r(hasil.max)}`);
				}
				break;
			case "pecahan":
			case "sederhanakan":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(-?\d+)\s*[/:]\s*(-?\d+)$/);
					if (!mt) return m.reply("Contoh: .pecahan 12/18 atau .pecahan 12 18");
					const hasil = sederhanakanPecahan(Number(mt[1]), Number(mt[2]));
					if (!hasil) return m.reply("Penyebut tidak boleh nol.");
					return m.reply(`*Pecahan*\n\n${mt[1]}/${mt[2]} = *${hasil.pembilang}/${hasil.penyebut}*\nDesimal: ${Number(hasil.desimal.toFixed(6))}`);
				}
				break;
			case "progress":
			case "progres":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^([\d.,]+)\s+([\d.,]+)$/);
					if (!mt) return m.reply("Contoh: .progress 7 10\nFormat: selesai total");
					const selesai = Number(mt[1].replace(",", "."));
					const total = Number(mt[2].replace(",", "."));
					const hasil = progres(selesai, total);
					if (!hasil) return m.reply("Nilai selesai harus antara 0 dan total, total harus positif.");
					return m.reply(`*Progres*\n\n[${hasil.bar}] ${hasil.persen.toFixed(1)}%\n${selesai.toLocaleString("id-ID")} dari ${total.toLocaleString("id-ID")}`);
				}
				break;
			case "quest":
				{
					const arg = (text || "").trim().toLowerCase();
					if (arg === "claim") {
						return klaimQuest(db, m.sender) ? m.reply("Hadiah quest diambil: +1.000 uang dan +5 limit.") : m.reply("Quest belum selesai atau hadiah sudah diambil.");
					}
					const q = lihatQuest(db, m.sender);
					const centang = (v) => (v ? "sudah" : "belum");
					return m.reply(`*Quest Harian*\n\n1. Pakai perintah edukasi: ${centang(q.edukasi)}\n2. Main satu game: ${centang(q.game)}\n3. Klaim harian: ${centang(q.harian)}\n\nHadiah: +1.000 uang dan +5 limit.\n${q.siap ? "Semua misi selesai. Ketik .quest claim untuk mengambil hadiah." : q.diklaim ? "Hadiah hari ini sudah diambil." : "Selesaikan semua misi untuk mengambil hadiah."}`);
				}
				break;
			case "akses":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt.length !== 2 || !aturAkses(db, mt[0].toLowerCase(), mt[1].toLowerCase())) return m.reply("Contoh: .akses hitung premium\nRole: free, premium, vip, admin, owner");
					tulisAudit(db, m.sender, `akses .${mt[0].toLowerCase()} ${mt[1].toLowerCase()}`);
					return m.reply(`Akses .${mt[0].toLowerCase()} diubah menjadi *${mt[1].toLowerCase()}*`);
				}
				break;
			case "matikan":
			case "hidupkan":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const perintah = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!perintah) return m.reply(`Contoh: ${prefix}${command} rumus`);
					const aktif = command === "matikan";
					if (aktif) matikanPerintah(db, m.chat, perintah);
					else hidupkanPerintah(db, m.chat, perintah);
					tulisAudit(db, m.sender, `${aktif ? "matikan" : "hidupkan"} .${perintah}`);
					return m.reply(`Perintah .${perintah} ${aktif ? "dimatikan" : "dihidupkan"} ${m.isGroup ? "di grup ini" : "di chat ini"}.`);
				}
				break;
			case "cooldown":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt.length !== 2 || !aturCooldown(db, mt[0].toLowerCase(), parseInt(mt[1], 10))) return m.reply("Contoh: .cooldown rumus 5\nDetik: 0 sampai 3600");
					tulisAudit(db, m.sender, `cooldown .${mt[0].toLowerCase()} ${mt[1]} detik`);
					return m.reply(`Cooldown .${mt[0].toLowerCase()} diatur ${mt[1]} detik.`);
				}
				break;
			case "streak":
				{
					const user = db.users[m.sender] || {};
					const streak = Number(user.streak) || 0;
					const hari = streak % 7;
					return m.reply(`*Streak Klaim Harian*\n\nBeruntun: *${streak} hari*\nBonus berikutnya pada hari ke-7.\nKlaim sekarang: .daily`);
				}
				break;
			case "rankgame":
				{
					const hit = global.db && global.db.hit ? global.db.hit : {};
					const game = ["slot", "casino", "samgong", "dadu", "quiz", "soal", "hangman", "tebakangka", "rampok", "begal", "cangkulan", "tictactoe"];
					const baris = game.map((g) => `- .${g}: ${(hit[g] || 0).toLocaleString("id-ID")}x`).join("\n");
					return m.reply(`*Peringkat Game*\n\n${baris}`);
				}
				break;
			case "envstatus":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const nama = ["MONGODB_URL", "NAZE_API_KEY", "NEOSANTARA_API_KEY", "NUMBER_BOT", "OWNER_NUMBER", "ADMIN_KEY", "DASHBOARD_ENABLED", "ALLOW_REMOTE_EXEC", "ALLOW_INSECURE_TLS"];
					return m.reply(`*Status Variabel .env*\n\n${nama.map((k) => `- *${k}*: ${process.env[k] || global[k] ? "terisi" : "kosong"}`).join("\n")}\n\nNilai tidak pernah ditampilkan.`);
				}
				break;
			case "backuplist":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let daftar = [];
					try {
						daftar = fs.readdirSync("./backup").filter((f) => fs.statSync(path.join("./backup", f)).isFile()).slice(-15);
					} catch {}
					return m.reply(`*Daftar Backup*\n\n${daftar.length ? daftar.map((f) => "- " + f).join("\n") : "(belum ada berkas)"}\n\nLokasi: ./backup`);
				}
				break;
			case "sesi":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let jumlah = 0;
					try { jumlah = fs.readdirSync("./rynn-session").length; } catch {}
					return m.reply(`*Info Sesi*\n\nBerkas sesi lokal: ${jumlah}\nTipe database: ${String(global.database?.path || "lokal").split(":")[0]}\nMode: ${sock.public ? "public" : "self"}\nNomor bot: ${global.number_bot || "(default)"}`);
				}
				break;
			case "setmotd":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const pesan = (text || "").trim();
					if (!pesan) return m.reply("Contoh: .setmotd Selamat datang di Rynn");
					global.motd = pesan.slice(0, 200);
					return m.reply("Pesan hari ini diperbarui.");
				}
				break;
			case "matauang":
				{
					const q = (text || "").trim().toUpperCase();
					if (!q) return m.reply(formatDaftar({ judul: "Mata Uang Dunia", data: MATAUANG, format: ([kode, nama, simbol, negara]) => `*${kode}* ${nama} (${simbol}) - ${negara}`, contoh: ["Ketik .matauang USD untuk detail", "Ketik .matauang Rp untuk cari simbol"] }));
					const found = MATAUANG.filter(([kode, nama, simbol, negara]) => kode === q || nama.toUpperCase().includes(q) || simbol.includes(q) || negara.toUpperCase().includes(q));
					return found.length ? m.reply(formatDaftar({ judul: "Hasil Mata Uang", data: found, denganAcak: false, format: ([kode, nama, simbol, negara]) => `*${kode}* ${nama} (${simbol}) - ${negara}` })) : m.reply("Mata uang tidak ditemukan.");
				}
				break;
			case "budaya":
			case "tarian":
			case "rumahadat":
			case "alatmusik":
			case "batik":
				{
					const jenis = { budaya: null, tarian: "tari", rumahadat: "rumah adat", alatmusik: "alat musik", batik: "batik" }[command];
					const q = (text || "").trim().toLowerCase();
					const data = jenis ? BUDAYA.filter((b) => b[1] === jenis) : BUDAYA;
					if (!q) return m.reply(formatDaftar({ judul: `Budaya Indonesia${jenis ? " " + jenis : ""}`, data, format: ([nama, tipe, daerah]) => `*${nama}* (${tipe}, ${daerah})`, contoh: ["Ketik .budaya <nama> untuk detail"] }));
					const found = data.filter((b) => b[0].toLowerCase().includes(q) || b[2].toLowerCase().includes(q));
					return found.length ? m.reply(formatDaftar({ judul: "Hasil Budaya", data: found, denganAcak: false, format: ([nama, tipe, daerah]) => `*${nama}* (${tipe}, ${daerah})` })) : m.reply("Budaya tidak ditemukan.");
				}
				break;
			case "explore":
				{
					const q = (text || "").trim().toLowerCase();
					const kat = daftarKategoriCommand();
					if (!q) return m.reply(`*Jelajahi Perintah*\n\n${kat.map((k) => `- .explore ${k.kategori.toLowerCase()} (${k.jumlah})`).join("\n")}`);
					const k = kategoriDariNama(q) || q.toUpperCase();
					const entri = daftarCommand().filter((e) => e.kategori === k);
					return entri.length ? m.reply(formatDaftar({ judul: `Perintah ${k}`, data: entri, format: (e) => `.${e.command}${e.deskripsi ? ": " + e.deskripsi : ""}`, contoh: ["Ketik .bantuan <perintah>"] })) : m.reply("Kategori tidak ditemukan.");
				}
				break;
			case "randomcmd":
				{
					const semua = daftarCommand();
					const e = semua[Math.floor(Math.random() * semua.length)];
					return m.reply(`*Perintah Acak*\n\n.${e.command} (${e.kategori})\n${e.deskripsi || "Tanpa deskripsi"}\n\nKetik .bantuan ${e.command}`);
				}
				break;
			case "riwayat":
				{
					const user = db.users[m.sender] || {};
					const list = Array.isArray(user.riwayat) ? user.riwayat.slice(-15).reverse() : [];
					return m.reply(`*Riwayat Perintah*\n\n${list.length ? list.map((c, i) => `${i + 1}. .${c}`).join("\n") : "(belum ada)"}`);
				}
				break;
			case "shortcut":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (mt.length !== 2) return m.reply("Contoh: .shortcut r rumus");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					if (!db.users[m.sender].shortcut) db.users[m.sender].shortcut = {};
					db.users[m.sender].shortcut[mt[0].toLowerCase()] = mt[1].toLowerCase().replace(/^\./, "");
					return m.reply(`Pintasan .${mt[0]} -> .${mt[1].replace(/^\./, "")} disimpan.`);
				}
				break;
			case "pintasan":
				{
					const p = db.users[m.sender]?.shortcut || {};
					const entri = Object.entries(p);
					return m.reply(`*Pintasan Kamu*\n\n${entri.length ? entri.map(([k, v]) => `- .${k} -> .${v}`).join("\n") : "(belum ada)"}`);
				}
				break;
			case "todo":
				{
					const arg = (text || "").trim();
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const tugas = db.users[m.sender].todo || [];
					if (/^done\s+\d+$/i.test(arg)) {
						const i = parseInt(arg.split(/\s+/)[1], 10) - 1;
						if (i < 0 || i >= tugas.length) return m.reply("Nomor tugas tidak valid.");
						tugas.splice(i, 1);
						return m.reply("Tugas selesai dihapus.");
					}
					if (/^hapus\s+\d+$/i.test(arg)) {
						const i = parseInt(arg.split(/\s+/)[1], 10) - 1;
						if (i < 0 || i >= tugas.length) return m.reply("Nomor tugas tidak valid.");
						tugas.splice(i, 1);
						return m.reply("Tugas dihapus.");
					}
					if (!arg) return m.reply(`*Daftar Tugas*\n\n${tugas.length ? tugas.map((t, i) => `${i + 1}. ${t}`).join("\n") : "(kosong)"}\n\nTambah: .todo <tugas>\nSelesai: .todo done <n>`);
					tugas.push(arg.slice(0, 120));
					db.users[m.sender].todo = tugas.slice(-20);
					return m.reply(`Tugas ditambahkan: ${arg}`);
				}
				break;
			case "catatancari":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply("Contoh: .catatancari belajar");
					const semua = Object.entries(global.db?.notes || {}).filter(([k]) => k.includes(m.sender));
					const hasil = semua.filter(([, v]) => String(v).toLowerCase().includes(q));
					return hasil.length ? m.reply(hasil.map(([k, v]) => `*${k.split(":")[1] || "catatan"}*\n${v}`).join("\n\n")) : m.reply("Catatan tidak ditemukan.");
				}
				break;
			case "peraturan":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					if (!db.groups[m.chat]) db.groups[m.chat] = {};
					if (/^reset$/i.test(arg)) {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						db.groups[m.chat].peraturan = "";
						return m.reply("Peraturan dihapus.");
					}
					if (!arg) return m.reply(`*Peraturan Grup*\n\n${db.groups[m.chat].peraturan || "(belum diatur)"}`);
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					db.groups[m.chat].peraturan = arg.slice(0, 1000);
					return m.reply("Peraturan grup diperbarui.");
				}
				break;
			case "icebreak":
				{
					const kalimat = ["Apa hal kecil yang bikin kamu senyum hari ini?", "Kalau bisa liburan sehari, ke mana kamu pergi?", "Apa makanan yang selalu bikin kangen rumah?", "Skill apa yang ingin kamu kuasai tahun ini?", "Kapan terakhir kali kamu belajar hal baru?"];
					return m.reply(`*Ice Breaker*\n\n${kalimat[Math.floor(Math.random() * kalimat.length)]}`);
				}
				break;
			case "dompet":
				{
					const u = db.users[m.sender] || {};
					const q = lihatQuest(db, m.sender);
					return m.reply(`*Dompet*\n\nUang: ${(u.money || 0).toLocaleString("id-ID")}\nLimit: ${(u.limit || 0).toLocaleString("id-ID")}\nStreak: ${u.streak || 0} hari\nQuest: ${q.diklaim ? "selesai" : q.siap ? "siap diklaim" : "berjalan"}\nPeringkat: ketik .topuang`);
				}
				break;
			case "topuang":
			case "toplimit":
				{
					const field = command === "topuang" ? "money" : "limit";
					const entri = Object.entries(db.users || {}).filter(([, u]) => u && typeof u[field] === "number").sort((a, b) => b[1][field] - a[1][field]).slice(0, 10);
					return m.reply(`*Top ${field === "money" ? "Uang" : "Limit"}*\n\n${entri.map(([jid, u], i) => `${i + 1}. @${jid.split("@")[0]}: ${u[field].toLocaleString("id-ID")}`).join("\n") || "(belum ada data)"}`);
				}
				break;
			case "hadiah":
				{
					return m.reply("*Daftar Hadiah*\n\n• Daily: +10 limit, +10.000 uang\n• Bonus streak hari ke-7: +5.000 uang\n• Kuis: +50 uang per jawaban benar\n• Soal SMA: +25 uang per jawaban benar\n• Hangman: +100 uang bila menang\n• Quest harian: +1.000 uang, +5 limit\n• Quest mingguan: hadiah lebih besar");
				}
				break;
			case "questmingguan":
				{
					const u = db.users[m.sender] || {};
					return m.reply(`*Quest Mingguan*\n\nKlaim harian 7 kali: ${u.mingguan || 0}/7\nMain 10 game: ${u.mingguanGame || 0}/10\nPakai 20 perintah edukasi: ${u.mingguanEdukasi || 0}/20\n\nHadiah: +10.000 uang dan +50 limit.`);
				}
				break;
			case "dailykalender":
				{
					const u = db.users[m.sender] || {};
					const streak = u.streak || 0;
					return m.reply(`*Kalender Klaim Harian*\n\n${Array.from({ length: 7 }, (_, i) => `${i + 1}. ${i < streak % 7 ? "sudah" : "belum"}${i === 6 ? " (bonus 5.000 uang)" : ""}`).join("\n")}\n\nStreak saat ini: ${streak} hari.`);
				}
				break;
			case "papanperingkat":
				{
					const hit = global.db?.hit || {};
					const game = ["quiz", "soal", "hangman", "slot", "casino", "samgong", "dadu", "rampok", "begal"];
					return m.reply(`*Papan Peringkat Game*\n\n${game.map((g) => `- .${g}: ${(hit[g] || 0).toLocaleString("id-ID")}x`).join("\n")}`);
				}
				break;
			case "trivia":
				{
					const mode = (text || "").trim().toLowerCase();
					const pool = SOAL.ips.length ? SOAL.ips : Object.values(SOAL)[0];
					if (!pool.length) return m.reply("Belum ada soal trivia.");
					const soal = pool[Math.floor(Math.random() * pool.length)];
					return m.reply(`*Trivia ${mode ? "(" + mode + ")" : ""}*\n\n${soal.q}\n\n${soal.o.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n")}\n\nJawab: .trivia jawab <a/b/c/d>`);
				}
				break;
			case "dataset":
				{
					const q = (text || "").trim().toLowerCase();
					const daftar = daftarKategoriCommand();
					if (!q) return m.reply(`*Dataset Tersedia*\n\n${daftar.map((k) => `- ${k.kategori}: ${k.jumlah} perintah`).join("\n")}\n\nKetik .statistikdata penuh`);
					return m.reply(`*Dataset: ${q}*\n\nGunakan .cari ${q} atau .dataset tanpa argumen untuk daftar.`);
				}
				break;
			case "rekomendasi":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply("Contoh: .rekomendasi mata uang");
					const saran = cariCommand(q).slice(0, 8);
					return saran.length ? m.reply(`*Rekomendasi*\n\n${saran.map((e) => `- .${e.command} (${e.kategori})`).join("\n")}`) : m.reply("Tidak ada rekomendasi.");
				}
				break;
			case "tabel":
				{
					const items = (text || "").trim().split(/[|,]/).map((s) => s.trim()).filter(Boolean).slice(0, 20);
					if (!items.length) return m.reply("Contoh: .tabel kopi | teh | susu");
					return m.reply(`*Tabel*\n\n${items.map((v, i) => `${i + 1}. ${v}`).join("\n")}`);
				}
				break;
			case "broadcast":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const arg = (text || "").trim();
					if (/^confirm\s+\S+$/i.test(arg)) {
						const token = arg.split(/\s+/)[1];
						const p = global.broadcastPending;
						if (!p || p.token !== token || p.sender !== m.sender || Date.now() - p.at > 300000) return m.reply("Token broadcast tidak valid atau kedaluwarsa.");
						global.broadcastPending = null;
						const grup = Object.keys(global.db?.set || {}).filter((jid) => jid.endsWith("@g.us")).slice(0, 10);
						if (!grup.length) return m.reply("Tidak ada grup yang tersedia.");
						m.reply(`Broadcast dijadwalkan ke ${grup.length} grup, jeda 10 detik per pesan.`);
						(async () => {
							for (const jid of grup) {
								try {
									await sock.sendMessage(jid, { text: p.pesan });
								} catch {}
								await sleep(10000);
							}
							tulisAudit(db, m.sender, `broadcast ke ${grup.length} grup`);
						})();
						return;
					}
					if (!arg) return m.reply("Contoh: .broadcast Halo semua\nLalu .broadcast confirm <token>");
					const token = Math.random().toString(36).slice(2, 8).toUpperCase();
					global.broadcastPending = { sender: m.sender, pesan: arg.slice(0, 1000), token, at: Date.now() };
					return m.reply(`*KONFIRMASI BROADCAST*\n\nPesan: ${arg.slice(0, 300)}\nBatas: maksimal 10 grup, jeda 10 detik per pesan, khusus owner.\nKetik .broadcast confirm ${token} dalam 5 menit.`);
				}
				break;
			case "logaudit":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const list = bacaAudit(db, (text || "").trim());
					return m.reply(`*Log Audit*\n\n${list.length ? list.map((a) => `- ${a.waktu} | ${a.sender} | ${a.aksi}`).join("\n") : "(belum ada aksi tercatat)"}\n\nLog hanya tersimpan di database lokal, tidak pernah di-git.`);
				}
				break;
			case "restore":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const arg = (text || "").trim();
					const aman = /^[\w.-]+\.(bak|json)$/;
					if (/^confirm\s+\S+$/i.test(arg)) {
						const token = arg.split(/\s+/)[1];
						const p = global.restorePending;
						if (!p || p.token !== token || p.sender !== m.sender || Date.now() - p.at > 300000) return m.reply("Token restore tidak valid atau kedaluwarsa.");
						global.restorePending = null;
						if (!aman.test(p.nama)) return m.reply("Nama berkas tidak valid.");
						const sumber = pathAman(path.join("./database", p.nama));
						if (!sumber || !fs.existsSync(sumber)) return m.reply("Berkas tidak ditemukan.");
						fs.copyFileSync(sumber, "./database/database.json");
						tulisAudit(db, m.sender, `restore ${p.nama}`);
						return m.reply("Database dipulihkan. Restart bot agar data baru dipakai.");
					}
					if (!arg) return m.reply("Contoh: .restore database.json.bak\nLalu .restore confirm <token>");
					if (!aman.test(arg)) return m.reply("Nama berkas tidak valid.\nGunakan nama seperti database.json.bak");
					if (!pathAman(path.join("./database", arg)) || !fs.existsSync(path.join("./database", arg))) return m.reply("Berkas tidak ditemukan di ./database");
					const token = Math.random().toString(36).slice(2, 8).toUpperCase();
					global.restorePending = { sender: m.sender, nama: arg, token, at: Date.now() };
					return m.reply(`*KONFIRMASI RESTORE*\n\nBerkas: ${arg}\nIni akan menimpa database aktif.\nKetik .restore confirm ${token} dalam 5 menit.`);
				}
				break;
			case "maintenance":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const a = (text || "").trim().toLowerCase();
					if (a === "on" || a === "off") {
						global.maintenance = a === "on";
						tulisAudit(db, m.sender, `maintenance ${a}`);
						return m.reply(`Mode perbaikan ${a === "on" ? "aktif" : "nonaktif"}. User akan mendapat pesan sedang maintenance.`);
					}
					if (/^pesan\s+/i.test(a)) {
						global.maintenancePesan = a.replace(/^pesan\s+/i, "").slice(0, 200);
						return m.reply("Pesan maintenance diperbarui.");
					}
					return m.reply(`Mode perbaikan: ${global.maintenance ? "aktif" : "nonaktif"}\nPesan: ${global.maintenancePesan || "Bot sedang dalam perbaikan. Silakan coba lagi nanti."}\nKetik .maintenance on, off, atau pesan <teks>`);
				}
				break;

			case "jelajah":
				{
					const kat = daftarKategoriCommand();
					const pilihan = (text || "").trim().toLowerCase();
					if (!pilihan) return m.reply(`*Jelajah Perintah*\n\n${kat.map((k) => `- .jelajah ${k.kategori.toLowerCase()}`).join("\n")}\n\nKetik .cmdbaru untuk perintah terbaru.`);
					const k = kategoriDariNama(pilihan) || pilihan.toUpperCase();
					const entri = daftarCommand().filter((e) => e.kategori === k);
					return entri.length ? m.reply(`*Kategori ${k} (${entri.length})*\n\n${entri.map((e) => `- .${e.command}${e.deskripsi ? ": " + e.deskripsi : ""}`).join("\n")}`) : m.reply("Kategori tidak ditemukan.");
				}
				break;
			case "cmdbaru":
				{
					const daftar = daftarCommand().slice(-20).reverse();
					return m.reply(`*Perintah Terbaru*\n\n${daftar.map((e) => `- .${e.command} (${e.kategori})`).join("\n")}`);
				}
				break;
			case "peta":
				{
					const kat = daftarKategoriCommand();
					return m.reply(`*Peta Perintah*\n\n${kat.map((k) => `- *${k.kategori}*: ${k.jumlah} perintah`).join("\n")}\n\nTotal: ${daftarCommand().length} perintah.`);
				}
				break;
			case "aliasglobal":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply("Contoh: .aliasglobal on");
					const sumber = fs.readFileSync("handler.js", "utf8");
					const hasil = [...sumber.matchAll(/case\s+["']([a-z0-9_]+)["']:/g)].map((x) => x[1]).filter((c) => c === q);
					return hasil.length ? m.reply(`.${q} terdaftar sebagai perintah utama.`) : m.reply("Alias tidak ditemukan di registry.\nKetik .alias <perintah> untuk detail alias.");
				}
				break;
			case "statcmd":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply("Contoh: .statcmd rumus");
					const hit = global.db?.hit || {};
					return m.reply(`*Statistik .${q}*\n\nDipakai: ${(hit[q] || 0).toLocaleString("id-ID")}x\nKategori: ${infoCommand(q)?.kategori || "tidak diketahui"}`);
				}
				break;
			case "catat":
				{
					const arg = (text || "").trim();
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const catatan = db.users[m.sender].catatan || {};
					if (!arg) return m.reply(`*Catatan*\n\n${Object.keys(catatan).length ? Object.keys(catatan).map((k) => "- " + k).join("\n") : "(kosong)"}\n\nTambah: .catat judul isi\nHapus: .catat hapus judul`);
					if (/^hapus\s+/i.test(arg)) {
						const judul = arg.replace(/^hapus\s+/i, "").trim();
						if (!catatan[judul]) return m.reply("Catatan tidak ditemukan.");
						delete catatan[judul];
						return m.reply(`Catatan ${judul} dihapus.`);
					}
					const mt = arg.match(/^(\S+)\s+([\s\S]+)$/);
					if (!mt) return m.reply("Contoh: .catat belajar besok baca buku");
					catatan[mt[1]] = mt[2].slice(0, 500);
					db.users[m.sender].catatan = catatan;
					return m.reply(`Catatan *${mt[1]}* disimpan.`);
				}
				break;
			case "agenda":
				{
					const u = db.users[m.sender] || {};
					const tugas = u.todo || [];
					const catatan = Object.keys(u.catatan || {});
					const reminder = Object.entries(global.db?.reminders || {}).filter(([jid]) => jid.includes(m.sender)).length;
					return m.reply(`*Agenda*\n\nTugas: ${tugas.length}\nCatatan: ${catatan.length}\nPengingat: ${reminder}\n\n.todo | .catat | .remind list`);
				}
				break;
			case "ceklis":
				{
					const n = parseInt((text || "").trim(), 10);
					const tugas = db.users[m.sender]?.todo || [];
					if (!Number.isInteger(n) || n < 1 || n > tugas.length) return m.reply("Nomor tugas tidak valid. Lihat .todo");
					const selesai = tugas.splice(n - 1, 1)[0];
					return m.reply(`Tugas selesai: ${selesai}`);
				}
				break;
			case "template":
				{
					const q = (text || "").trim().toLowerCase();
					const daftar = Object.keys(SURAT);
					if (!q || !SURAT[q]) return m.reply(`*Template Surat*\n\n${daftar.map((s) => "- " + s).join("\n")}\n\nKetik .template <jenis>`);
					return m.reply(`*${q}*\n\n${SURAT[q]}`);
				}
				break;
			case "audit":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const arg = (text || "").trim().toLowerCase();
					if (arg === "bersihkan") {
						db.audit = [];
						tulisAudit(db, m.sender, "audit dibersihkan");
						return m.reply("Log audit dibersihkan.");
					}
					const list = bacaAudit(db, "100");
					return m.reply(`*Audit Penuh*\n\n${list.length ? list.map((a) => `- ${a.waktu} | ${a.sender} | ${a.aksi}`).join("\n") : "(kosong)"}`);
				}
				break;
			case "aksesdefault":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const role = (text || "").trim().toLowerCase();
					if (!["free", "premium", "vip", "admin", "owner"].includes(role)) return m.reply("Role: free, premium, vip, admin, owner");
					global.accessDefault = role;
					tulisAudit(db, m.sender, `akses default ${role}`);
					return m.reply(`Role default diperbarui menjadi *${role}*.`);
				}
				break;
			case "blacklist":
			case "whitelistcmd":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply(`Contoh: .${command} rumus`);
					if (!db.globalBlacklist) db.globalBlacklist = [];
					const aktif = command === "blacklist";
					db.globalBlacklist = aktif ? [...new Set([...db.globalBlacklist, q])] : db.globalBlacklist.filter((c) => c !== q);
					tulisAudit(db, m.sender, `${command} .${q}`);
					return m.reply(`Perintah .${q} ${aktif ? "dimasukkan blacklist" : "dikeluarkan dari blacklist"}.`);
				}
				break;
			case "system":
				{
					return m.reply(`*Info Sistem*\n\nVersi: ${require("./package.json").version}\nNode: ${process.version}\nPlatform: ${process.platform}\nUptime: ${formatUptime(process.uptime() * 1000)}\nDatabase: ${String(global.database?.path || "lokal").split(":")[0]}\nPerintah: ${daftarCommand().length}\nRumus: ${statistikRumus().total.toLocaleString("id-ID")}\nTotal entri: ${statistikRumus().total.toLocaleString("id-ID")}+`);
				}
				break;
			case "bank":
				{
					const u = db.users[m.sender] || {};
					return m.reply(`*Bank*\n\nSaldo: ${(u.money || 0).toLocaleString("id-ID")}\nTabungan: ${(u.tabungan || 0).toLocaleString("id-ID")}\nUtang: ${(u.utang || 0).toLocaleString("id-ID")}\n\n.tabung <n> | .tarik <n> | .pinjam <n>`);
				}
				break;
			case "tabung":
			case "tarik":
				{
					const n = parseInt((text || "").trim(), 10);
					if (!Number.isInteger(n) || n < 1) return m.reply("Masukkan jumlah bilangan bulat positif.");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const ambil = command === "tarik";
					if (ambil) {
						if ((u.tabungan || 0) < n) return m.reply("Tabungan tidak mencukupi.");
						u.tabungan -= n;
						u.money = (u.money || 0) + n;
					} else {
						if ((u.money || 0) < n) return m.reply("Saldo tidak mencukupi.");
						u.money -= n;
						u.tabungan = (u.tabungan || 0) + n;
					}
					return m.reply(`${ambil ? "Penarikan" : "Tabungan"} ${n.toLocaleString("id-ID")} berhasil.`);
				}
				break;
			case "pinjam":
				{
					const n = parseInt((text || "").trim(), 10);
					if (!Number.isInteger(n) || n < 1 || n > 10000) return m.reply("Pinjaman 1 sampai 10.000 uang.");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					if ((db.users[m.sender].utang || 0) > 0) return m.reply("Lunasi utang dulu sebelum meminjam lagi.");
					db.users[m.sender].money = (db.users[m.sender].money || 0) + n;
					db.users[m.sender].utang = n;
					return m.reply(`Pinjaman ${n.toLocaleString("id-ID")} diterima. Gunakan .lunas untuk melunasi.`);
				}
				break;
			case "lunas":
				{
					const u = db.users[m.sender] || {};
					const utang = u.utang || 0;
					if (utang <= 0) return m.reply("Tidak ada utang.");
					if ((u.money || 0) < utang) return m.reply(`Saldo kurang. Butuh ${utang.toLocaleString("id-ID")}.`);
					u.money -= utang;
					u.utang = 0;
					return m.reply("Utang lunas.");
				}
				break;
			case "top":
				{
					const mode = (text || "").trim().toLowerCase();
					const field = mode === "mingguan" ? "limit" : "money";
					const entri = Object.entries(db.users || {}).filter(([, u]) => u && typeof u[field] === "number").sort((a, b) => b[1][field] - a[1][field]).slice(0, 10);
					return m.reply(`*Top ${mode || "uang"}*\n\n${entri.map(([jid, u], i) => `${i + 1}. @${jid.split("@")[0]}: ${u[field].toLocaleString("id-ID")}`).join("\n")}`);
				}
				break;
			case "dompetgrafik":
				{
					const u = db.users[m.sender] || {};
					const uang = u.money || 0;
					const limit = u.limit || 0;
					return m.reply(`*Dompet Grafik*\n\nUang    [${bilah(Math.min(uang, 10000), 10000)}] ${uang.toLocaleString("id-ID")}\nLimit   [${bilah(Math.min(limit, 100), 100)}] ${limit.toLocaleString("id-ID")}`);
				}
				break;
			case "tebak":
				{
					const q = (text || "").trim().toLowerCase();
					if (q !== "riddle") return m.reply("Mode tersedia: .tebak riddle");
					const p = PERIBAHASA[Math.floor(Math.random() * PERIBAHASA.length)];
					global.tebakState = global.tebakState || new Map();
					global.tebakState.set(m.chat + ":" + m.sender, { jawaban: p.pepatah, at: Date.now() });
					return m.reply(`*Tebak Peribahasa*\n\nArtinya: ${p.makna}\n\nTebak pepatahnya. Ketik jawabanmu.`);
				}
				break;
			case "data":
				{
					const arg = (text || "").trim().toLowerCase();
					if (/^cari\s+/.test(arg)) {
						const kata = arg.replace(/^cari\s+/, "");
						const hasil = cariCommand(kata);
						return hasil.length ? m.reply(formatDaftar({ judul: "Hasil Data", data: hasil, denganAcak: false, format: (e) => `- .${e.command} (${e.kategori})` })) : m.reply("Tidak ditemukan.");
					}
					if (/^rekomendasi\s+/.test(arg)) return m.reply(cariCommand(arg.replace(/^rekomendasi\s+/, "")).slice(0, 5).map((e) => `.${e.command}`).join(", ") || "Tidak ada rekomendasi.");
					return m.reply("Contoh: .data cari wisata\n.data rekomendasi sejarah");
				}
				break;
			case "help":
				{
					const daftar = daftarCommand();
					const top = Object.entries(global.db?.hit || {}).filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v)).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k]) => `.${k}`);
					return m.reply(`*Bantuan Rynn*${global.motd ? "\n\n" + global.motd : ""}\n\nKetik .allmenu untuk semua perintah.\nKetik .kategori untuk daftar kategori.\nKetik .cari <kata> untuk mencari perintah dan rumus.\nKetik .bantuan <perintah> untuk detail satu perintah.\n\nTotal perintah menu: ${daftar.length}\nPerintah sering dipakai: ${top.join(", ") || "(belum ada data)"}\n\nPanduan: .panduan`);
				}
				break;
			case "contoh":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply("Contoh: .contoh rumus\n.contoh statistik");
					const info = infoCommand(q);
					const rumus = q.split(" ")[0];
					const contohRumus = {
						rumus: ".rumus matematika 1\n.rumus cari energi\n.rumus random fisika",
						statistik: ".statistik 4 7 2 9 3",
						cari: ".cari rumus\n.cari kurs",
						matriks: ".matriks det 2 3 1 4",
						hitung: ".hitung (2+3)*4",
						sejarah: ".sejarah 17 agustus",
					};
					const isi = contohRumus[rumus] || (info ? "." + info.command + (info.deskripsi ? " " + info.deskripsi : "") : "Contoh belum tersedia.\nKetik .bantuan " + q);
					return m.reply(`*Contoh .${q}*\n\n${isi}`);
				}
				break;
			case "alias":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply("Contoh: .alias rumus\nKetik .cmdlist untuk daftar perintah.");
					const sumber = fs.readFileSync("handler.js", "utf8");
					const blok = sumber.split(/(?=^\t\t\tcase ["'])/gm).find((b) => new RegExp(`^\\t\\t\\tcase ["']${q}["']`).test(b));
					if (!blok) return m.reply("Perintah tidak ditemukan.");
					const alias = [...blok.matchAll(/^\t\t\tcase\s+["']([a-z0-9_]+)["']:/gm)].map((m) => m[1]);
					return m.reply(`*Alias .${q}*\n\n${alias.map((a) => "- ." + a).join("\n")}`);
				}
				break;
			case "cmdlist":
				{
					const kategori = (text || "").trim().toLowerCase();
					if (kategori) {
						const k = kategoriDariNama(kategori) || kategori.toUpperCase();
						const entri = daftarCommand().filter((e) => e.kategori === k);
						return entri.length ? m.reply(`*Perintah ${k} (${entri.length})*\n\n${entri.map((e) => "- ." + e.command).join("\n")}`) : m.reply("Kategori tidak ditemukan.");
					}
					return m.reply(ringkasanKategori());
				}
				break;
			case "saran":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply("Contoh: .saran rumuss");
					const semua = daftarCommand().map((e) => e.command);
				 const mirip = semua.map((c) => [c, similarity(q, c)]).sort((a, b) => b[1] - a[1]).slice(0, 8).filter(([, n]) => n > 0.3);
					return mirip.length ? m.reply(`*Mungkin maksudmu:*\n\n${mirip.map(([c, n]) => `- .${c} (${(n * 100).toFixed(0)}% mirip)`).join("\n")}`) : m.reply("Tidak ada saran yang mirip.\nKetik .cari <kata> untuk mencari.");
				}
				break;
			case "sejarah":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply(`*Peristiwa Sejarah (${SEJARAH.length})*\n\n${SEJARAH.map((s) => `- ${s.tanggal}`).join("\n")}\n\nKetik .sejarah 17 agustus`);
					if (q === "random") { const s = SEJARAH[Math.floor(Math.random() * SEJARAH.length)]; return m.reply(`*${s.tanggal}*\n\n${s.info}`); }
					const found = SEJARAH.filter((s) => s.tanggal.toLowerCase().includes(q) || s.info.toLowerCase().includes(q));
					if (!found.length) return m.reply("Peristiwa tidak ditemukan.");
					return m.reply(found.map((s) => `*${s.tanggal}*\n${s.info}`).join("\n\n"));
				}
				break;
			case "tokoh":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply(`*Tokoh Indonesia (${TOKOH.length})*\n\n${TOKOH.map((t) => `- ${t.nama}`).join(", ")}\n\nKetik .tokoh kartini`);
					if (q === "random") { const t = TOKOH[Math.floor(Math.random() * TOKOH.length)]; return m.reply(`*${t.nama}*\n\n${t.peran}`); }
					const found = TOKOH.filter((t) => t.nama.toLowerCase().includes(q) || t.peran.toLowerCase().includes(q));
					if (!found.length) return m.reply("Tokoh tidak ditemukan.");
					return m.reply(found.map((t) => `*${t.nama}*\n${t.peran}`).join("\n\n"));
				}
				break;
			case "olahraga":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply(`*Cabang Olahraga (${OLAHRAGA.length})*\n\n${OLAHRAGA.join(", ")}`);
					if (q === "random") return m.reply(`*${OLAHRAGA[Math.floor(Math.random() * OLAHRAGA.length)]}*`);
					const found = OLAHRAGA.filter((o) => o.includes(q));
					return found.length ? m.reply(found.map((o) => `- *${o}*`).join("\n")) : m.reply("Cabang olahraga tidak ditemukan.");
				}
				break;
			case "singkatan":
				{
					const q = (text || "").trim().toUpperCase();
					if (!q) return m.reply(`*Singkatan Umum (${SINGKATAN.length})*\n\nKetik .singkatan KTP\nKetik .singkatan cari kesehatan`);
					if (/^CARI\s+/.test(q)) {
						const kata = q.replace(/^CARI\s+/, "");
						const found = SINGKATAN.filter(([s, a]) => a.includes(kata));
						return found.length ? m.reply(found.map(([s, a]) => `- *${s}*: ${a}`).join("\n")) : m.reply("Singkatan tidak ditemukan.");
					}
					const found = SINGKATAN.filter(([s, a]) => s === q || a.toUpperCase().includes(q));
					return found.length ? m.reply(found.map(([s, a]) => `*${s}*: ${a}`).join("\n")) : m.reply("Singkatan tidak ditemukan.");
				}
				break;
			case "sinonim":
			case "antonim":
				{
					const q = (text || "").trim().toLowerCase();
					const sumber = command === "sinonim" ? SINONIM : ANTONIM;
					if (!q) return m.reply(`Contoh: .${command} senang\nTersedia ${sumber.length} pasangan kata.`);
					const found = sumber.filter(([a, b]) => a === q || b === q);
					return found.length ? m.reply(found.map(([a, b]) => `*${a}* -> ${b}`).join("\n")) : m.reply("Kata tidak ditemukan.");
				}
				break;
			case "kamus":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply("Contoh: .kamus senang");
					const sin = SINONIM.filter(([a, b]) => a === q || b === q);
					const ant = ANTONIM.filter(([a, b]) => a === q || b === q);
					const sing = SINGKATAN.filter(([s, a]) => s.toLowerCase() === q || a.toLowerCase().includes(q));
					const bagian = [];
					if (sin.length) bagian.push(`*Sinonim*\n${sin.map(([a, b]) => `- ${a} -> ${b}`).join("\n")}`);
					if (ant.length) bagian.push(`*Antonim*\n${ant.map(([a, b]) => `- ${a} -> ${b}`).join("\n")}`);
					if (sing.length) bagian.push(`*Singkatan*\n${sing.map(([s, a]) => `- ${s}: ${a}`).join("\n")}`);
					return m.reply(bagian.length ? `*Kamus: ${q}*\n\n${bagian.join("\n\n")}` : "Kata tidak ditemukan.");
				}
				break;
			case "cari":
				{
					const q = (text || "").trim();
					if (!q) return m.reply("Contoh: .cari rumus\n.cari kurs\nCari perintah dan rumus berdasarkan kata kunci.");
					const cmd = denganCache("cmd:" + q, 60000, () => cariCommand(q));
					const rum = denganCache("rumus:" + q, 60000, () => cariRumus(q, 8));
					const bagian = [];
					if (cmd.length) bagian.push(`*Perintah (${cmd.length})*\n${cmd.map((c) => `- .${c.command} (${c.kategori})${c.deskripsi ? ": " + c.deskripsi : ""}`).join("\n")}`);
					if (rum.length) bagian.push(`*Rumus (${rum.length} ditampilkan)*\n${rum.map((r) => `- *${r.nama}*: ${r.rumus} [${r.id}]`).join("\n")}`);
					return m.reply(bagian.length ? `*Hasil Pencarian: ${q}*\n\n${bagian.join("\n\n")}` : "Tidak ditemukan perintah atau rumus yang cocok.");
				}
				break;
			case "bagi":
				{
					const mt = (text || "").trim().split(/\s+/);
					const jenis = (mt[0] || "").toLowerCase();
					let hasil;
					if (jenis === "kelas" || jenis === "group" || jenis === "grup") hasil = bagiKelompok(Number(mt[1]), Number(mt[2]));
					else if (jenis === "tim" || jenis === "team") hasil = bagiTim(Number(mt[1]), Number(mt[2]));
					else hasil = bagiKelompok(Number(mt[0]), Number(mt[1]));
					if (!hasil) return m.reply("Contoh:\n.bagi 38 5\n.bagi kelas 38 5\n.bagi tim 20 5\n\nHarus bilangan bulat, kelompok tidak boleh lebih banyak dari anggota.");
					if (m.isGroup && hasil.distribusi && db.groups[m.chat]) db.groups[m.chat].kelompok = hasil.distribusi.map((n, i) => `Kelompok ${i + 1}: ${n} anggota`);
					return m.reply(formatPembagian(hasil));
				}
				break;
			case "team":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (/^\d+$/.test(mt[0])) {
						const jumlahTim = parseInt(mt[0], 10);
						const orang = Array.isArray(m.mentionedJid) ? m.mentionedJid.map((j) => "@" + j.split("@")[0]) : [];
						if (orang.length < 2) return m.reply("Tag minimal 2 orang, lalu ketik .team <jumlah tim>");
						const h = bagiKelompok(orang.length, jumlahTim);
						if (!h) return m.reply("Jumlah tim tidak valid.");
						let at = 0;
						const baris = h.distribusi.map((n, i) => `Tim ${i + 1}: ${orang.slice(at, at + n).join(", ")}`).join("\n");
						return m.reply(`*Pembagian Tim*\n\n${baris}\n\nSisa: ${h.sisa}`);
					}
					const game = mt[0] || "";
					const jumlahPemain = Number(mt[1]);
					const ukuran = ukuranTimGame(game) || Number(mt[2]);
					const h = bagiTim(jumlahPemain, ukuran);
					if (!h) return m.reply(`Contoh: .team mobile legend 20\n.team pubg 16\nGame dikenal: Mobile Legend (5), PUBG (4), Free Fire (4), Valorant (5), Dota (5)`);
					return m.reply(`${formatPembagian(h)}\n\nGame: ${game}`);
				}
				break;
			case "turnamen":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!global.db.turnamen) global.db.turnamen = {};
					const kunci = m.chat;
					const arg = (text || "").trim();
					const bagian = arg.split(/\s+/);
					const sub = (bagian[0] || "bantuan").toLowerCase();
					const state = global.db.turnamen[kunci];
					if (sub === "daftar" || sub === "join" || sub === "gabung") {
						if (!state || state.bracket) return m.reply("Turnamen belum dibuka atau sudah dimulai. Ketik .turnamen buat");
						if (!state.peserta) state.peserta = [];
						const nama = "@" + m.sender.split("@")[0];
						if (state.peserta.includes(nama)) return m.reply("Kamu sudah terdaftar.");
						state.peserta.push(nama);
						return m.reply(`Terdaftar sebagai *${nama}*. Peserta: ${state.peserta.length}`);
					}
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						global.db.turnamen[kunci] = { peserta: [], bracket: null, game: bagian[1] || "umum" };
						return m.reply(`Turnamen *${bagian[1] || "umum"}* dibuka. Ketik .turnamen daftar untuk gabung.`);
					}
					if (sub === "peserta") {
						if (!state) return m.reply("Belum ada turnamen.");
						return m.reply(`*Peserta Turnamen (${(state.peserta || []).length})*\n\n${state.peserta.join("\n") || "(kosong)"}`);
					}
					if (sub === "mulai") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						if (!state || state.bracket) return m.reply("Buat turnamen dulu dengan .turnamen buat");
						const bracket = buatBracket(state.peserta || []);
						if (!bracket) return m.reply("Minimal 2 peserta untuk membuat bracket.");
						state.bracket = bracket;
						return m.reply(formatBracket(bracket) + "\n\nCatatan pemenang: .turnamen menang <babak> <nomor> <nama>");
					}
					if (sub === "bracket" || sub === "skor") {
						if (!state?.bracket) return m.reply("Bracket belum dibuat.");
						return m.reply(formatBracket(state.bracket));
					}
					if (sub === "menang") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						if (!state?.bracket) return m.reply("Bracket belum dibuat.");
						const babak = parseInt(bagian[1], 10);
						const index = parseInt(bagian[2], 10) - 1;
						const pemenang = bagian.slice(3).join(" ");
						if (!Number.isInteger(babak) || !Number.isInteger(index) || !pemenang) return m.reply("Contoh: .turnamen menang 1 1 @pemain");
						const hasil = catatMenang(state.bracket, babak, index, pemenang);
						if (!hasil.ok) return m.reply(hasil.alasan);
						return m.reply(formatBracket(state.bracket) + (hasil.selesai ? `\n\n*Juara: ${hasil.juara}*` : ""));
					}
					if (sub === "juara") {
						if (!state?.bracket) return m.reply("Belum ada juara.");
						return m.reply(`Juara turnamen: *${state.bracket.juara || "belum ditentukan"}*`);
					}
					if (sub === "reset") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						delete global.db.turnamen[kunci];
						return m.reply("Turnamen direset.");
					}
					return m.reply(`*Turnamen*\n\n.turnamen buat [game]\n.turnamen daftar\n.turnamen peserta\n.turnamen mulai\n.turnamen bracket\n.turnamen menang <babak> <nomor> <nama>\n.turnamen juara\n.turnamen reset`);
				}
				break;
			case "ringkas":
			case "ide":
			case "paragraf":
			case "judulkan":
			case "tanya":
				{
					const isi = (text || "").trim();
					if (!isi) return m.reply(`Contoh: .${command} ${command === "ide" ? "judul bot" : "teks atau pertanyaan"}`);
					const prompt = {
						ringkas: `Ringkas teks berikut dengan singkat dan jelas: ${isi}`,
						ide: `Berikan 5 ide singkat untuk topik: ${isi}`,
						paragraf: `Tulis satu paragraf pendek Bahasa Indonesia tentang: ${isi}`,
						judulkan: `Berikan 3 usulan judul untuk teks berikut: ${isi}`,
						tanya: isi,
					}[command];
					try {
						const hasil = await fetchApi("/ai/chat2", { query: prompt });
						return m.reply(String(hasil?.result?.message || hasil?.result || "Tidak ada jawaban.").slice(0, 3500));
					} catch {
						return m.reply("Fitur AI sedang bermasalah. Coba lagi nanti.");
					}
				}
				break;
			case "terjemah":
				{
					if (!text) return m.reply("Gunakan .translate <teks> untuk menerjemahkan.");
					try {
						const hasil = await fetchApi("/translate", { teks: text, target: "id" });
						return m.reply(String(hasil?.result?.translated || hasil?.result || "Tidak ada hasil.").slice(0, 3000));
					} catch {
						return m.reply("Layanan terjemah sedang bermasalah. Gunakan .translate sebagai ganti.");
					}
				}
				break;
			case "teks":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					if (!mt) return m.reply("Contoh: .teks judul halo dunia\nMode: judul, kecil, besar, kebab, camel, snake");
					const mode = mt[1].toLowerCase();
					const isi = mt[2];
					const hasil = {
						judul: isi.replace(/\b\w/g, (c) => c.toUpperCase()),
						kecil: isi.toLowerCase(),
						besar: isi.toUpperCase(),
						kebab: slug(isi, "-"),
						camel: slug(isi, " ").split(" ").map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))).join(""),
						snake: slug(isi, "_"),
					}[mode];
					return hasil ? m.reply(hasil) : m.reply("Mode tidak dikenal.");
				}
				break;
			case "kalender":
				{
					const arg = (text || "").trim();
					const sekarang = arg ? new Date(`${arg}-01T00:00:00Z`) : new Date();
					if (isNaN(sekarang.getTime())) return m.reply("Contoh: .kalender 2026-11");
					const tahun = sekarang.getUTCFullYear();
					const bulan = sekarang.getUTCMonth() + 1;
					const jumlah = new Date(Date.UTC(tahun, bulan, 0)).getUTCDate();
					const pertama = new Date(Date.UTC(tahun, bulan - 1, 1)).getUTCDay();
					const baris = ["Sen Sel Rab Kam Jum Sab Min", " ".repeat(pertama * 4) + Array.from({ length: jumlah }, (_, i) => String(i + 1).padStart(3, " ")).join("")];
					return m.reply(`*Kalender ${tahun}-${String(bulan).padStart(2, "0")}*\n\n${baris.join("\n")}`);
				}
				break;
			case "jadwal":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const jadwal = db.users[m.sender].jadwal || [];
					const arg = (text || "").trim();
					if (!arg || arg === "list") return m.reply(`*Jadwal*\n\n${jadwal.length ? jadwal.map((j, i) => `${i + 1}. ${j.jam} - ${j.tugas}`).join("\n") : "(kosong)"}\n\nTambah: .jadwal 08:00 belajar`);
					const mt = arg.match(/^(\d{1,2}:\d{2})\s+([\s\S]+)$/);
					if (!mt) return m.reply("Contoh: .jadwal 08:00 belajar");
					jadwal.push({ jam: mt[1], tugas: mt[2].slice(0, 100) });
					db.users[m.sender].jadwal = jadwal.slice(-10);
					return m.reply(`Jadwal ${mt[1]} disimpan.`);
				}
				break;
			case "notifikasi":
				{
					const a = (text || "").trim().toLowerCase();
					if (!["on", "off"].includes(a)) return m.reply("Ketik .notifikasi on atau .notifikasi off");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					db.users[m.sender].notifikasi = a === "on";
					return m.reply(`Notifikasi ${a === "on" ? "aktif" : "nonaktif"}.`);
				}
				break;
			case "diam":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const a = (text || "").trim().toLowerCase();
					if (!["on", "off"].includes(a)) return m.reply("Ketik .diam on atau .diam off");
					global.diamMode = a === "on";
					return m.reply(`Mode diam ${a === "on" ? "aktif" : "nonaktif"}.`);
				}
				break;
			case "ownerlist":
				{
					return m.reply(`*Daftar Owner*\n\n${ownerNumber.map((o, i) => `${i + 1}. @${o.split("@")[0]}`).join("\n")}`);
				}
				break;
			case "sesihapus":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const nama = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!/^[a-z0-9_-]+$/.test(nama)) return m.reply("Nama sesi tidak valid.");
					const target = pathAman(path.join("./rynn-session", nama));
					if (!target || !fs.existsSync(target)) return m.reply("Sesi tidak ditemukan.");
					fs.rmSync(target, { recursive: true, force: true });
					return m.reply(`Sesi ${nama} dihapus.`);
				}
				break;
			case "akseswarisan":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const a = (text || "").trim().toLowerCase();
					if (!["on", "off"].includes(a)) return m.reply("Ketik .akseswarisan on atau off");
					global.accessWarisan = a === "on";
					return m.reply(`Warisan role default ${a === "on" ? "aktif" : "nonaktif"}.`);
				}
				break;
			case "tabungtarget":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					if (!mt[0]) {
						const t = u.targetTabungan;
						return t ? `*Target Tabungan*\n\nNama: ${t.nama}\nNominal: ${t.nominal.toLocaleString("id-ID")}\nTerkumpul: ${(u.tabungan || 0).toLocaleString("id-ID")}` : "Belum ada target. Contoh: .tabungtarget 500000 liburan";
					}
					const nominal = parseInt(mt[0], 10);
					if (!Number.isInteger(nominal) || nominal < 1) return m.reply("Nominal tidak valid.");
					u.targetTabungan = { nominal, nama: mt.slice(1).join(" ") || "target" };
					return m.reply(`Target *${u.targetTabungan.nama}* ${nominal.toLocaleString("id-ID")} disimpan.`);
				}
				break;
			case "bungapinjam":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const b = Number((text || "").trim());
					if (!Number.isFinite(b) || b < 0 || b > 100) return m.reply("Bunga 0 sampai 100 persen.");
					global.bungaPinjam = b;
					return m.reply(`Bunga pinjaman ${b} persen per periode.`);
				}
				break;
			case "hadiahevent":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const isi = (text || "").trim();
					if (!isi) return m.reply("Contoh: .hadiahevent Lomba hari ini 5000 uang");
					global.hadiahEvent = isi.slice(0, 200);
					return m.reply("Pengumuman hadiah event disimpan.");
				}
				break;
			case "topbulanan":
				{
					const entri = Object.entries(db.users || {}).filter(([, u]) => u && typeof u.money === "number").sort((a, b) => b[1].money - a[1].money).slice(0, 10);
					return m.reply(`*Top Bulanan*\n\n${entri.map(([jid, u], i) => `${i + 1}. @${jid.split("@")[0]}: ${u.money.toLocaleString("id-ID")}`).join("\n") || "(kosong)"}`);
				}
				break;
			case "transferbatch":
				{
					const konfirmasi = (text || "").trim().match(/^confirm\s+(\S+)$/i);
					if (konfirmasi) {
						const peta = global.transferPending || new Map();
						const pending = peta.get(m.sender);
						if (!pending || pending.token !== konfirmasi[1] || Date.now() - pending.at > 300000) return m.reply("Token konfirmasi tidak valid atau sudah kedaluwarsa.");
						const total = pending.nominal * pending.target.length;
						const keluar = ubahSaldo(db, m.sender, "money", -total, "transferbatch");
						if (!keluar) return m.reply(`Saldo kurang. Butuh ${total.toLocaleString("id-ID")}.`);
						const berhasil = [];
						for (const tujuan of pending.target) {
							const masuk = ubahSaldo(db, tujuan, "money", pending.nominal, "transferbatch");
							if (!masuk) {
								for (const tujuan of berhasil) ubahSaldo(db, tujuan, "money", -pending.nominal, "transferbatch:rollback");
								ubahSaldo(db, m.sender, "money", total, "transferbatch:rollback");
								return m.reply("Transfer gagal, saldo dikembalikan.");
							}
							berhasil.push(tujuan);
						}
						peta.delete(m.sender);
						return m.reply(`Transfer ${total.toLocaleString("id-ID")} ke ${pending.target.length} target berhasil.`);
					}
					const mt = (text || "").trim().split(/\s+/);
					const nominal = parseInt(mt[mt.length - 1], 10);
					const target = mt.slice(0, -1).map((s) => s.replace(/[^0-9]/g, "") + "@s.whatsapp.net").filter((s) => s.includes("@") && s.length > 10);
					if (!Number.isInteger(nominal) || nominal < 1 || target.length < 1 || target.length > 5) return m.reply("Contoh: .transferbatch @6281 @6282 100 (maksimal 5 target)");
					const total = nominal * target.length;
					const u = db.users[m.sender] || {};
					if ((u.money || 0) < total) return m.reply(`Saldo kurang. Butuh ${total.toLocaleString("id-ID")}.`);
					const token = Math.random().toString(36).slice(2, 8).toUpperCase();
					global.transferPending = global.transferPending || new Map();
					global.transferPending.set(m.sender, { sender: m.sender, target, nominal, token, at: Date.now() });
					return m.reply(`*KONFIRMASI TRANSFER*\n\n${target.length} target x ${nominal.toLocaleString("id-ID")} = ${total.toLocaleString("id-ID")}\nKetik .transferbatch confirm ${token} dalam 5 menit.`);
				}
				break;
			case "uanglog":
				{
					const u = db.users[m.sender] || {};
					const log = Array.isArray(u.uangLog) ? u.uangLog.slice(-10).reverse() : [];
					return m.reply(`*Riwayat Uang*\n\n${log.length ? log.join("\n") : "(belum ada)"}`);
				}
				break;
			case "quizberuntun":
				{
					const pool = SOAL.matematika && SOAL.matematika.length ? SOAL.matematika : Object.values(SOAL)[0];
					if (!pool || !pool.length) return m.reply("Bank soal kosong.");
					const soal = pool[Math.floor(Math.random() * pool.length)];
					global.quizBeruntunState = global.quizBeruntunState || new Map();
					global.quizBeruntunState.set(m.sender, { soal, benar: 0, at: Date.now() });
					return m.reply(`*Quiz Beruntun*\n\n${soal.q}\n\n${soal.o.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n")}\n\nJawab: .quizjawab a/b/c/d`);
				}
				break;
			case "quizjawab":
				{
					const q = global.quizBeruntunState?.get(m.sender);
					if (!q) return m.reply("Belum ada quiz aktif. Ketik .quizberuntun");
					if (Date.now() - q.at > 300000) {
						global.quizBeruntunState.delete(m.sender);
						return m.reply("Quiz beruntun kedaluwarsa. Ketik .quizberuntun");
					}
					const jawab = (text || "").trim().toLowerCase();
					if (!/^[a-d]$/.test(jawab)) return m.reply("Jawab dengan a, b, c, atau d.");
					const idx = jawab.charCodeAt(0) - 97;
					if (idx === q.soal.a) {
						q.benar++;
						return m.reply(`Benar. Skor sementara: ${q.benar}`);
					}
					global.quizBeruntunState?.delete(m.sender);
					return m.reply(`Salah. Jawaban benar: ${String.fromCharCode(65 + q.soal.a)}. Skor akhir: ${q.benar}`);
				}
				break;
			case "tebakjawab":
				{
					const kunciTebak = m.chat + ":" + m.sender;
					const p = global.tebakState?.get(kunciTebak);
					if (!p) return m.reply("Belum ada tebak riddle aktif. Ketik .tebak riddle");
					if (Date.now() - p.at > 300000) {
						global.tebakState.delete(kunciTebak);
						return m.reply("Tebak riddle kedaluwarsa. Ketik .tebak riddle");
					}
					const jawab = (text || "").trim().toLowerCase().replace(/[^a-z ]/g, "");
					const benar = p.jawaban.toLowerCase().replace(/[^a-z ]/g, "");
					global.tebakState?.delete(m.chat + ":" + m.sender);
					return jawab.includes(benar) || benar.includes(jawab) ? m.reply("Benar!" ) : m.reply(`Salah. Jawaban: ${p.jawaban}`);
				}
				break;
			case "rankmingguan":
				{
					const hit = global.db?.hit || {};
					const game = ["quiz", "soal", "hangman", "slot", "turnamen"];
					return m.reply(`*Rank Mingguan*\n\n${game.map((g) => `- .${g}: ${(hit[g] || 0).toLocaleString("id-ID")}x`).join("\n")}`);
				}
				break;
			case "statistiklanjut":
				{
					const angka = (text || "").trim().split(/[\s,]+/).filter(Boolean).map(Number).filter(Number.isFinite);
					if (angka.length < 2) return m.reply("Contoh: .statistiklanjut 4 7 2 9 3");
					const mean = angka.reduce((a, b) => a + b, 0) / angka.length;
					const varians = angka.reduce((a, b) => a + (b - mean) ** 2, 0) / angka.length;
					const simpangan = Math.sqrt(varians);
					return m.reply(`*Statistik Lanjutan*\n\nJumlah: ${angka.length}\nRata-rata: ${mean.toFixed(4)}\nMinimum: ${Math.min(...angka)}\nMaksimum: ${Math.max(...angka)}\nRentang: ${Math.max(...angka) - Math.min(...angka)}\nVarians: ${varians.toFixed(4)}\nSimpangan baku: ${simpangan.toFixed(4)}`);
				}
				break;
			case "matriks3":
				{
					const n = (text || "").trim().split(/[\s,]+/).filter(Boolean).map(Number);
					if (n.length !== 9 || n.some((x) => !Number.isFinite(x))) return m.reply("Contoh: .matriks3 1 2 3 4 5 6 7 8 9");
					const [a, b, c, d, e, f, g, h, i] = n;
					const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
					return m.reply(`*Matriks 3x3*\n\nDet: *${det}*`);
				}
				break;
			case "turunan":
				{
					const mt = (text || "").trim().split(/\s+/).map(Number);
					if (mt.length !== 2 || mt.some((x) => !Number.isFinite(x))) return m.reply("Contoh: .turunan 3 4");
					return m.reply(`*Turunan*\n\nd/dx (${mt[0]} x^${mt[1]}) = *${mt[0] * mt[1]} x^${mt[1] - 1}*`);
				}
				break;
			case "integral":
				{
					const mt = (text || "").trim().split(/\s+/).map(Number);
					if (mt.length !== 2 || mt.some((x) => !Number.isFinite(x))) return m.reply("Contoh: .integral 3 4");
					return m.reply(`*Integral*\n\n∫ ${mt[0]} x^${mt[1]} dx = *${mt[0] / (mt[1] + 1)} x^${mt[1] + 1} + C*`);
				}
				break;
			case "koordinat":
				{
					const n = (text || "").trim().split(/[\s,]+/).filter(Boolean).map(Number);
					if (n.length !== 4 || n.some((x) => !Number.isFinite(x))) return m.reply("Contoh: .koordinat -6.2 106.8 -7.2 112.7");
					const R = 6371;
					const rad = (x) => (x * Math.PI) / 180;
					const dLat = rad(n[2] - n[0]);
					const dLon = rad(n[3] - n[1]);
					const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(n[0])) * Math.cos(rad(n[2])) * Math.sin(dLon / 2) ** 2;
					return m.reply(`*Jarak*\n\n${(2 * R * Math.asin(Math.sqrt(a))).toFixed(2)} km`);
				}
				break;
			case "datasetpenuh":
				{
					return m.reply(`*Dataset Penuh*\n\n${statistikRumus().perKategori ? Object.entries(statistikRumus().perKategori).map(([k, v]) => `- ${k}: ${v} rumus`).join("\n") : ""}\n\nKetik .statistikdata penuh untuk dataset teks.`);
				}
				break;
			case "anggaran":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const anggaran = db.users[m.sender].anggaran || {};
					const arg = (text || "").trim();
					if (!arg || arg === "status") {
						const entri = Object.entries(anggaran);
						return m.reply(`*Anggaran Bulanan*\n\n${entri.length ? entri.map(([k, v]) => `- *${k}*: ${v.toLocaleString("id-ID")}`).join("\n") : "(belum diatur)"}\n\nAtur: .anggaran <kategori> <nominal>`);
					}
					const mt = arg.match(/^(\S+)\s+([\d.,]+)$/);
					if (!mt) return m.reply("Contoh: .anggaran makan 1500000");
					const nominal = Number(mt[2].replace(",", "."));
					if (!Number.isFinite(nominal) || nominal < 1) return m.reply("Nominal tidak valid.");
					anggaran[mt[1].toLowerCase()] = nominal;
					db.users[m.sender].anggaran = anggaran;
					return m.reply(`Anggaran *${mt[1]}* ${nominal.toLocaleString("id-ID")} disimpan.`);
				}
				break;
			case "pengeluaran":
			case "pemasukan":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\d.,]+)$/);
					if (!mt) return m.reply(`Contoh: .${command} makan 25000`);
					const nominal = Number(mt[2].replace(",", "."));
					if (!Number.isFinite(nominal) || nominal < 1) return m.reply("Nominal tidak valid.");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const kunci = command === "pengeluaran" ? "pengeluaran" : "pemasukan";
					const list = db.users[m.sender][kunci] || [];
					list.push({ kategori: mt[1], nominal, waktu: Date.now() });
					db.users[m.sender][kunci] = list.slice(-100);
					return m.reply(`${command === "pengeluaran" ? "Pengeluaran" : "Pemasukan"} ${nominal.toLocaleString("id-ID")} dicatat.`);
				}
				break;
			case "laporanuang":
				{
					const u = db.users[m.sender] || {};
					const keluar = (u.pengeluaran || []).reduce((n, x) => n + x.nominal, 0);
					const masuk = (u.pemasukan || []).reduce((n, x) => n + x.nominal, 0);
					const anggaran = Object.values(u.anggaran || {}).reduce((n, x) => n + x, 0);
					return m.reply(`*Laporan Uang*\n\nPemasukan: ${masuk.toLocaleString("id-ID")}\nPengeluaran: ${keluar.toLocaleString("id-ID")}\nSisa anggaran: ${(anggaran - keluar).toLocaleString("id-ID")}\nSaldo: ${(u.money || 0).toLocaleString("id-ID")}`);
				}
				break;
			case "flashcard":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const kartu = db.users[m.sender].flashcard || [];
					const arg = (text || "").trim();
					if (!arg || arg === "list") return m.reply(`*Flashcard (${kartu.length})*\n\n${kartu.length ? kartu.map((k, i) => `${i + 1}. ${k.pertanyaan}`).join("\n") : "(kosong)"}\n\nTambah: .flashcard pertanyaan | jawaban\nUlang: .flashcard ulang`);
					if (arg === "ulang") {
						if (!kartu.length) return m.reply("Belum ada kartu.");
						const k = kartu[Math.floor(Math.random() * kartu.length)];
						db.users[m.sender].flashcardAktif = k;
						return m.reply(`*Flashcard*\n\n${k.pertanyaan}\n\nJawab: .flashcardjawab <jawaban>`);
					}
					const parts = arg.split("|").map((s) => s.trim());
					if (parts.length !== 2 || !parts[0] || !parts[1]) return m.reply("Contoh: .flashcard ibu kota Indonesia | Nusantara");
					kartu.push({ pertanyaan: parts[0], jawaban: parts[1] });
					db.users[m.sender].flashcard = kartu.slice(-50);
					return m.reply("Kartu ditambahkan.");
				}
				break;
			case "flashcardjawab":
				{
					const k = db.users[m.sender]?.flashcardAktif;
					if (!k) return m.reply("Belum ada kartu aktif. Ketik .flashcard ulang");
					const jawab = (text || "").trim().toLowerCase();
					const benar = k.jawaban.toLowerCase();
					delete db.users[m.sender].flashcardAktif;
					return jawab.includes(benar) || benar.includes(jawab) ? m.reply("Benar!") : m.reply(`Salah. Jawaban: *${k.jawaban}*`);
				}
				break;
			case "kuisharian":
				{
					const pool = SOAL.matematika && SOAL.matematika.length ? SOAL.matematika : Object.values(SOAL)[0];
					if (!pool || !pool.length) return m.reply("Bank soal kosong.");
					const soal = pool[Math.floor(Math.random() * pool.length)];
					global.kuisHarian = global.kuisHarian || {};
					global.kuisHarian[m.sender] = { soal, at: Date.now() };
					return m.reply(`*Kuis Harian*\n\n${soal.q}\n\n${soal.o.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n")}\n\nJawab: .kuisjawab <a/b/c/d>`);
				}
				break;
			case "kuisjawab":
				{
					const q = global.kuisHarian?.[m.sender];
					if (!q || Date.now() - q.at > 300000) return m.reply("Tidak ada kuis aktif. Ketik .kuisharian");
					const j = (text || "").trim().toLowerCase();
					if (!/^[a-d]$/.test(j)) return m.reply("Jawab a, b, c, atau d.");
					delete global.kuisHarian[m.sender];
					if (j.charCodeAt(0) - 97 === q.soal.a) {
						if (!db.users[m.sender]) db.users[m.sender] = {};
						db.users[m.sender].skorBelajar = (db.users[m.sender].skorBelajar || 0) + 1;
						return m.reply("Benar! Skor belajar bertambah.");
					}
					return m.reply(`Salah. Jawaban: ${String.fromCharCode(65 + q.soal.a)}`);
				}
				break;
			case "skorbelajar":
				{
					const u = db.users[m.sender] || {};
					return m.reply(`*Skor Belajar*\n\nBenar: ${u.skorBelajar || 0}\nSoal benar: ${u.soal?.benar || 0}\nSoal salah: ${u.soal?.salah || 0}`);
				}
				break;
			case "modul":
				{
					const kategori = Object.keys(SOAL);
					if (!kategori.length) return m.reply("Belum ada modul.");
					return m.reply(`*ModulBelajar*\n\n${kategori.map((k) => `- ${k}: ${SOAL[k].length} soal`).join("\n")}\n\nKetik .soal <kategori>`);
				}
				break;
			case "absen":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!global.db.absen) global.db.absen = {};
					const hari = new Date().toISOString().slice(0, 10);
					const kunci = `${m.chat}:${hari}`;
					if (!global.db.absen[kunci]) global.db.absen[kunci] = [];
					const nama = "@" + m.sender.split("@")[0];
					const arg = (text || "").trim().toLowerCase();
					if (arg === "list") return m.reply(`*Absen Hari Ini*\n\n${global.db.absen[kunci].join("\n") || "(belum ada)"}`);
					if (arg === "rekap") {
						const semua = Object.entries(global.db.absen).filter(([k]) => k.startsWith(m.chat + ":"));
						return m.reply(`*Rekap Absen*\n\n${semua.map(([k, v]) => `- ${k.split(":")[1]}: ${v.length} orang`).join("\n") || "(belum ada)"}`);
					}
					if (global.db.absen[kunci].includes(nama)) return m.reply("Kamu sudah absen hari ini.");
					global.db.absen[kunci].push(nama);
					return m.reply(`Absen tercatat: *${nama}*`);
				}
				break;
			case "acara":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!global.db.acara) global.db.acara = {};
					const list = global.db.acara[m.chat] || [];
					const arg = (text || "").trim();
					if (!arg || arg === "list") return m.reply(`*Acara Grup*\n\n${list.length ? list.map((a, i) => `${i + 1}. ${a.nama} (${a.tanggal})`).join("\n") : "(belum ada)"}`);
					const mt = arg.match(/^(\S+)\s+(\d{4}-\d{2}-\d{2})$/);
					if (!mt) return m.reply("Contoh: .acara Rapat 2026-12-01");
					list.push({ id: Math.random().toString(36).slice(2, 7).toUpperCase(), nama: mt[1], tanggal: mt[2], rsvp: [] });
					global.db.acara[m.chat] = list.slice(-20);
					return m.reply(`Acara *${mt[1]}* dibuat tanggal ${mt[2]}.`);
				}
				break;
			case "acararsvp":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const j = (text || "").trim().toLowerCase();
					if (!["ya", "tidak"].includes(j)) return m.reply("Ketik .acararsvp ya atau .acararsvp tidak");
					const list = global.db.acara?.[m.chat] || [];
					if (!list.length) return m.reply("Belum ada acara.");
					const acara = list[list.length - 1];
					acara.rsvp = acara.rsvp.filter((x) => x.jid !== m.sender);
					acara.rsvp.push({ jid: m.sender,status: j });
					return m.reply(`RSVP *${j}* untuk acara *${acara.nama}* tercatat.`);
				}
				break;
			case "liga":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!global.db.liga) global.db.liga = {};
				const liga = global.db.liga[m.chat];
					const arg = (text || "").trim();
					const sub = (arg.split(/\s+/)[0] || "bantuan").toLowerCase();
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const nama = arg.split(/\s+/).slice(1).join(" ") || "Liga Grup";
						global.db.liga[m.chat] = { nama, peserta: [], skor: {} };
						return m.reply(`Liga *${nama}* dibuat.`);
					}
					if (!liga) return m.reply("Belum ada liga. Ketik .liga buat");
					if (sub === "daftar" || sub === "join") {
						const nama = "@" + m.sender.split("@")[0];
						if (liga.peserta.includes(nama)) return m.reply("Sudah terdaftar.");
						liga.peserta.push(nama);
						return m.reply(`Terdaftar: *${nama}*`);
					}
					if (sub === "skor") {
						const entri = Object.entries(liga.skor).sort((a, b) => b[1] - a[1]);
						return m.reply(`*Klasemen ${liga.nama}*\n\n${entri.map(([n, s], i) => `${i + 1}. ${n}: ${s} poin`).join("\n") || "(belum ada skor)"}`);
					}
					if (sub === "menang") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const nama = arg.split(/\s+/).slice(1).join(" ").replace(/^@/, "");
						if (!liga.peserta.includes("@" + nama) && !liga.peserta.includes(nama)) return m.reply("Peserta tidak ditemukan.");
						const kunci = liga.peserta.find((p) => p === "@" + nama || p === nama);
						liga.skor[kunci] = (liga.skor[kunci] || 0) + 3;
						return m.reply(`Poin ditambahkan untuk ${kunci}.`);
					}
					if (sub === "juara") {
						const entri = Object.entries(liga.skor).sort((a, b) => b[1] - a[1]);
						return entri.length ? m.reply(`Juara sementara: *${entri[0][0]}* dengan ${entri[0][1]} poin.`) : m.reply("Belum ada skor.");
					}
					return m.reply(`.liga buat [nama]\n.liga daftar\n.liga peserta\n.liga skor\n.liga menang @nama\n.liga juara`);
				}
				break;
			case "klasemen":
				{
					const hit = global.db?.hit || {};
					const game = ["quiz", "soal", "hangman", "turnamen", "liga"];
					return m.reply(`*Klasemen Aktivitas*\n\n${game.map((g) => `- .${g}: ${(hit[g] || 0).toLocaleString("id-ID")}x`).join("\n")}`);
				}
				break;
			case "bendera":
				{
					const kode = (text || "").trim().toUpperCase();
					if (!/^[A-Z]{2}$/.test(kode)) return m.reply("Contoh: .bendera ID\nGunakan kode negara dua huruf.");
					const bendera = [...kode].map((c) => String.fromCodePoint(127397 + c.charCodeAt(0))).join("");
					return m.reply(`${kode}: ${bendera}`);
				}
				break;
			case "umurdetail":
				{
					const hasil = detailUmur((text || "").trim());
					if (!hasil) return m.reply("Contoh: .umurdetail 1999-05-20. Tanggal tidak boleh di masa depan.");
					return m.reply(formatUmurDetail(hasil));
				}
				break;
			case "grafik":
				{
					const pasangan = parsePasanganGrafik(text);
					if (!pasangan.length) return m.reply("Contoh: .grafik kopi=8, teh=4, susu=6");
					return m.reply(formatGrafik(pasangan, bilah));
				}
				break;
			case "pilihberat":
				{
					const items = (text || "").trim().split(/[|,]/).map((s) => {
						const [nama, bobot] = s.split(":").map((x) => x.trim());
						return { nama, bobot: Number(bobot) };
					}).filter((x) => x.nama && Number.isFinite(x.bobot) && x.bobot > 0);
					if (items.length < 2) return m.reply("Contoh: .pilihberat kopi:3, teh:1");
					const total = items.reduce((n, x) => n + x.bobot, 0);
					let acak = Math.random() * total;
					const pilihan = items.find((x) => (acak -= x.bobot) <= 0) || items[items.length - 1];
					return m.reply(`*Pilihan Berbobot*\n\nTerpilih: *${pilihan.nama}*\nBobot: ${pilihan.bobot}/${total}`);
				}
				break;
			case "acakurutan":
				{
					const n = parseInt((text || "").trim(), 10);
					if (!Number.isInteger(n) || n < 1 || n > 100) return m.reply("Contoh: .acakurutan 10 (1 sampai 100)");
					const angka = Array.from({ length: n }, (_, i) => i + 1);
					for (let i = angka.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[angka[i], angka[j]] = [angka[j], angka[i]];
					}
					return m.reply(`*Urutan Acak*\n\n${angka.join(", ")}`);
				}
				break;
			case "aksesgrup":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const role = (text || "").trim().toLowerCase();
					if (!["free", "premium", "vip", "admin", "owner"].includes(role)) return m.reply("Role: free, premium, vip, admin, owner");
					global.aksesGrupDefault = role;
					return m.reply(`Role default grup diperbarui menjadi *${role}*.`);
				}
				break;
			case "pemeliharaan":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					bersihkanCache();
					for (const k of Object.keys(global)) {
						if (k.toLowerCase().includes("state") && global[k] instanceof Map) global[k].clear();
					}
					return m.reply("Pemeliharaan selesai: cache dan state game dibersihkan.");
				}
				break;
			case "presensi":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const a = (text || "").trim().toLowerCase();
					if (!["hadir", "tidak", "izin"].includes(a)) return m.reply("Ketik .presensi hadir, .presensi tidak, atau .presensi izin");
					if (!global.db.presensi) global.db.presensi = {};
					const kunci = `${m.chat}:${new Date().toISOString().slice(0, 10)}`;
					if (!global.db.presensi[kunci]) global.db.presensi[kunci] = {};
					global.db.presensi[kunci][m.sender] = a;
					return m.reply(`Presensi *${a}* tercatat.`);
				}
				break;
			case "kuorum":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const butuh = parseInt((text || "").trim(), 10);
					if (!Number.isInteger(butuh) || butuh < 1) return m.reply("Contoh: .kuorum 10");
					const kunci = `${m.chat}:${new Date().toISOString().slice(0, 10)}`;
					const hadir = Object.values(global.db.presensi?.[kunci] || {}).filter((s) => s === "hadir").length;
					return hadir >= butuh ? m.reply(`Kuorum tercapai: ${hadir}/${butuh} hadir.`) : m.reply(`Kuorum belum tercapai: ${hadir}/${butuh} hadir.`);
				}
				break;
			case "rapat":
			case "notulen":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!global.db.rapat) global.db.rapat = {};
					const list = global.db.rapat[m.chat] || [];
					const arg = (text || "").trim();
					if (isCreator || m.isAdmin) {
						if (command === "rapat" && arg) {
							list.push({ judul: arg.slice(0, 120), waktu: Date.now(), notulen: [] });
							global.db.rapat[m.chat] = list.slice(-20);
							return m.reply(`Rapat *${arg.slice(0, 120)}* dibuat.`);
						}
						if (command === "notulen" && arg) {
							if (!list.length) return m.reply("Belum ada rapat.");
							list[list.length - 1].notulen.push(arg.slice(0, 500));
							return m.reply("Notulen ditambahkan.");
						}
					}
					const baris = list.map((r, i) => `${i + 1}. ${r.judul} (${r.notulen.length} notulen)`).join("\n");
					return m.reply(`*Rapat Grup*\n\n${baris || "(belum ada)"}`);
				}
				break;
			case "laporgrup":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const alasan = (text || "").trim();
					if (!alasan) return m.reply("Contoh: .laporgrup pesan mengganggu");
					if (!global.db.laporan) global.db.laporan = [];
					global.db.laporan.push({ chat: m.chat, dari: m.sender, alasan: alasan.slice(0, 200), waktu: Date.now() });
					global.db.laporan = global.db.laporan.slice(-100);
					return m.reply("Laporan dikirim ke admin grup.");
				}
				break;
			case "moderasi":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const g = global.db.groups?.[m.chat] || {};
					return m.reply(`*Moderasi Grup*\n\nAntilink: ${g.antilink ? "aktif" : "mati"}\nAntispam: ${set.antispam ? "aktif" : "mati"}\nAntitoxic: ${g.antitoxic ? "aktif" : "mati"}\nLaporan: ${(global.db.laporan || []).filter((l) => l.chat === m.chat).length}`);
				}
				break;
			case "koleksi":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const list = db.users[m.sender].koleksi || [];
					const arg = (text || "").trim();
					if (!arg || arg === "list") return m.reply(`*Koleksi (${list.length})*\n\n${list.length ? list.join("\n") : "(kosong)"}`);
					list.push(arg.slice(0, 80));
					db.users[m.sender].koleksi = list.slice(-50);
					return m.reply(`Koleksi *${arg.slice(0, 80)}* disimpan.`);
				}
				break;
			case "gacha":
				{
					const hadiah = ["stiker kucing", "kartu biru", "kartu ungu", "kartu emas", "lencana api", "lencana air", "bintang kecil", "bintang besar"];
					const dapat = hadiah[Math.floor(Math.random() * hadiah.length)];
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const list = db.users[m.sender].koleksi || [];
					list.push(dapat);
					db.users[m.sender].koleksi = list.slice(-50);
					return m.reply(`*Gacha*\n\nKamu mendapat: *${dapat}*\n\nKoleksi: ${list.length}`);
				}
				break;
			case "achievement":
				{
					const adaJuara = Object.values(global.db?.turnamen || {}).some((t) => t.bracket?.juara);
					return m.reply(formatAchievement(db.users[m.sender] || {}, adaJuara));
				}
				break;
			case "level":
				{
					return m.reply(formatLevel(db.users[m.sender] || {}));
				}
				break;
			case "levelboard":
				{
					return m.reply(formatLevelboard(db.users || {}));
				}
				break;
			case "investasi":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					if (!arg || arg === "cek") {
						const inv = u.investasi;
						return inv ? `*Investasi Simulasi*\n\nPokok: ${inv.pokok.toLocaleString("id-ID")}\nNilai: ${Math.floor(inv.pokok * (1 + 0.01 * inv.hari)).toLocaleString("id-ID")}\nHari: ${inv.hari}` : "Belum ada investasi. Contoh: .investasi 10000";
					}
					const n = parseInt(arg, 10);
					if (!Number.isInteger(n) || n < 1 || (u.money || 0) < n) return m.reply("Nominal tidak valid atau saldo kurang.");
					u.money -= n;
					u.investasi = { pokok: n, hari: 0, sejak: Date.now() };
					return m.reply(`Investasi simulasi ${n.toLocaleString("id-ID")} dibuat. Bunga 1 persen per hari.`);
				}
				break;
			case "deposito":
				{
					const mt = (text || "").trim().split(/\s+/).map(Number);
					if (mt.length !== 2 || mt.some((n) => !Number.isFinite(n)) || mt[0] < 1 || mt[1] < 1) return m.reply("Contoh: .deposito 10000 7");
					const hasil = Math.floor(mt[0] * (1 + 0.005 * mt[1]));
					return m.reply(`*Simulasi Deposito*\n\nPokok: ${mt[0].toLocaleString("id-ID")}\nHari: ${mt[1]}\nBunga 0,5 persen per hari\nNilai akhir: *${hasil.toLocaleString("id-ID")}*`);
				}
				break;
			case "asuransi":
				{
					const n = parseInt((text || "").trim(), 10);
					if (!Number.isInteger(n) || n < 1) return m.reply("Contoh: .asuransi 50000");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					db.users[m.sender].danaPerlindungan = n;
					return m.reply(`*Simulasi Dana Perlindungan*\n\nDana: ${n.toLocaleString("id-ID")}\nPremi contoh: ${Math.floor(n * 0.01).toLocaleString("id-ID")} per bulan\n\nIni simulasi bot, bukan produk asuransi nyata.`);
				}
				break;
			case "donasilog":
				{
					const u = db.users[m.sender] || {};
					const log = u.donasiLog || [];
					return m.reply(`*Log Dukungan*\n\n${log.length ? log.join("\n") : "(belum ada)"}\n\nGunakan .donasi untuk tautan dukungan resmi.`);
				}
				break;
			case "keuangannilai":
				{
					const u = db.users[m.sender] || {};
					const inv = u.investasi ? Math.floor(u.investasi.pokok * (1 + 0.01 * u.investasi.hari)) : 0;
					return m.reply(`*Nilai Kekayaan Simulasi*\n\nSaldo: ${(u.money || 0).toLocaleString("id-ID")}\nTabungan: ${(u.tabungan || 0).toLocaleString("id-ID")}\nInvestasi: ${inv.toLocaleString("id-ID")}\nUtang: ${(u.utang || 0).toLocaleString("id-ID")}`);
				}
				break;
			case "transferterjadwal":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (mt.length < 3) return m.reply("Contoh: .transferterjadwal @6281 1000 harian");
					const target = mt[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
					const nominal = parseInt(mt[1], 10);
					if (!Number.isInteger(nominal) || nominal < 1) return m.reply("Nominal tidak valid.");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					if (!db.users[m.sender].transferJadwal) db.users[m.sender].transferJadwal = [];
					db.users[m.sender].transferJadwal.push({ target, nominal, mode: mt[2] });
					return m.reply(`Transfer terjadwal dicatat: ${nominal.toLocaleString("id-ID")} ke @${target.split("@")[0]} (${mt[2]}).`);
				}
				break;
			case "sapaanpribadi":
				{
					const isi = (text || "").trim();
					if (!db.users[m.sender]) db.users[m.sender] = {};
					if (!isi) return m.reply(`Sapaan: ${db.users[m.sender].sapaan || "(belum diatur)"}`);
					db.users[m.sender].sapaan = isi.slice(0, 150);
					return m.reply("Sapaan pribadi disimpan.");
				}
				break;
			case "pujian":
			case "semangat":
				{
					const pujian = ["Kerja bagus, teruskan.", "Kamu sudah melakukan hal yang baik hari ini.", "Pertahankan semangatmu.", "Langkah kecilmu tetap berarti."];
					const semangat = ["Bangun, tarik napas, lalu mulai lagi.", "Satu tugas selesai lebih baik dari seribu rencana.", "Pelan-pelan saja, yang penting terus berjalan.", "Hari ini bisa jadi awal yang baik."];
					const pilih = command === "pujian" ? pujian : semangat;
					return m.reply(pilih[Math.floor(Math.random() * pilih.length)]);
				}
				break;
			case "ceritapendek":
				{
					const pembuka = ["Di sebuah kota kecil,", "Pagi itu,", "Di ujung jalan,", "Saat hujan mulai turun,"];
					const akhir = ["ia menemukan satu hal sederhana yang mengubah harinya.", "mereka memutuskan untuk memulai dari langkah kecil.", "senyum kecil pun cukup untuk membuat hari lebih hangat.", "cerita itu berakhir dengan sebuah janji baru."];
					return m.reply(`${pembuka[Math.floor(Math.random() * pembuka.length)]} ${akhir[Math.floor(Math.random() * akhir.length)]}`);
				}
				break;
			case "mood":
				{
					const a = (text || "").trim().toLowerCase();
					if (!a) return m.reply("Contoh: .mood senang");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					if (!db.users[m.sender].mood) db.users[m.sender].mood = [];
					db.users[m.sender].mood.push({ mood: a.slice(0, 40), at: Date.now() });
					db.users[m.sender].mood = db.users[m.sender].mood.slice(-20);
					return m.reply(`Mood *${a}* dicatat.`);
				}
				break;
			case "moodrekap":
				{
					const list = db.users[m.sender]?.mood || [];
					return m.reply(`*Rekap Mood*\n\n${list.slice(-7).map((x) => `- ${new Date(x.at).toISOString().slice(0, 10)}: ${x.mood}`).join("\n") || "(belum ada)"}`);
				}
				break;
			case "teman":
				{
					const n = (text || "").trim();
					if (!db.users[m.sender]) db.users[m.sender] = {};
					if (!n) return m.reply(`Teman: ${(db.users[m.sender].teman || []).join(", ") || "(belum ada)"}`);
					const list = db.users[m.sender].teman || [];
					list.push(n.slice(0, 40));
					db.users[m.sender].teman = list.slice(-20);
					return m.reply(`Teman *${n}* dicatat.`);
				}
				break;
			case "autoreply":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const arg = (text || "").trim();
					if (!db.groups[m.chat]) db.groups[m.chat] = {};
					const list = db.groups[m.chat].autoReply || [];
					if (!arg || arg === "list") return m.reply(`*Auto Reply*\n\n${list.map((x, i) => `${i + 1}. ${x.kata} -> ${x.balasan}`).join("\n") || "(kosong)"}`);
					const parts = arg.split("|").map((s) => s.trim());
					if (parts.length !== 2 || !parts[0] || !parts[1]) return m.reply("Contoh: .autoreply halo | Halo juga!");
					list.push({ kata: parts[0].toLowerCase(), balasan: parts[1] });
					db.groups[m.chat].autoReply = list.slice(-20);
					return m.reply("Auto reply ditambahkan.");
				}
				break;
			case "autotag":
			case "autosalam":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const a = (text || "").trim().toLowerCase();
					if (!["on", "off"].includes(a)) return m.reply(`Ketik .${command} on atau .${command} off`);
					if (!db.groups[m.chat]) db.groups[m.chat] = {};
					db.groups[m.chat][command] = a === "on";
					return m.reply(`${command} ${a}.`);
				}
				break;
			case "wordle":
				{
					const kata = (text || "").trim().toLowerCase();
					if (!/^[a-z]{3,10}$/.test(kata)) return m.reply("Contoh: .wordle kucing\nKata 3 sampai 10 huruf.");
					if (!global.wordleState) global.wordleState = new Map();
					const kunci = m.chat + ":" + m.sender;
					const lama = global.wordleState.get(kunci);
					if (lama && Date.now() - lama.at > 15 * 60 * 1000) global.wordleState.delete(kunci);
					if (!global.wordleState.has(kunci)) {
						global.wordleState.set(kunci, { kata, tebakan: [], at: Date.now() });
						return m.reply(`*Wordle*\n\nKata ${kata.length} huruf. Tebak dengan .wordlejawab <kata>\nPetunjuk: [v] huruf tepat, ~ huruf ada di tempat lain, x tidak ada.`);
					}
					return m.reply("Sudah ada Wordle aktif. Tebak dengan .wordlejawab <kata>");
				}
				break;
			case "wordlejawab":
				{
					const kunci = m.chat + ":" + m.sender;
					const state = global.wordleState?.get(kunci);
					if (!state) return m.reply("Belum ada Wordle. Ketik .wordle <kata>");
					const tebakan = (text || "").trim().toLowerCase();
					if (tebakan.length !== state.kata.length) return m.reply(`Tebakan harus ${state.kata.length} huruf.`);
					state.tebakan.push(tebakan);
					const petunjuk = [...tebakan].map((c, i) => (state.kata[i] === c ? "[v]" : state.kata.includes(c) ? "~" : "x")).join("");
					if (tebakan === state.kata) {
						global.wordleState?.delete(kunci);
						return m.reply(`*Benar!*\n${petunjuk}\nTebakan: ${state.tebakan.length}`);
					}
					return m.reply(`${petunjuk}\nTebakan ke-${state.tebakan.length}.`);
				}
				break;
			case "scramble":
				{
					const kata = (text || "").trim();
					if (!kata) return m.reply("Contoh: .scramble kucing");
					const a = [...kata];
					for (let i = a.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[a[i], a[j]] = [a[j], a[i]];
					}
					return m.reply(`*Scramble*\n\n${a.join("")}`);
				}
				break;
			case "bingo":
				{
					const n = parseInt((text || "").trim(), 10);
					if (!Number.isInteger(n) || n < 1 || n > 100) return m.reply("Contoh: .bingo 25");
					const angka = Array.from({ length: n }, (_, i) => i + 1).sort(() => Math.random() - 0.5).slice(0, Math.min(n, 24));
					return m.reply(`*Kartu Bingo*\n\n${Array.from({ length: Math.ceil(angka.length / 5) }, (_, i) => angka.slice(i * 5, i * 5 + 5).map((x) => String(x).padStart(3, " ")).join(" ")).join("\n")}`);
				}
				break;
			case "lotre":
				{
					const n = parseInt((text || "").trim(), 10) || 1;
					if (!Number.isInteger(n) || n < 1 || n > 10) return m.reply("Ambil 1 sampai 10 nomor.");
					const hasil = Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
					return m.reply(`*Lotre*\n\nNomor: ${hasil.join(", ")}`);
				}
				break;
			case "tebakwarna":
				{
					const warna = [{ n: "merah", p: "bunga", k: "panas" }, { n: "biru", p: "langit", k: "dingin" }, { n: "hijau", p: "daun", k: "tumbuhan" }, { n: "kuning", p: "matahari", k: "cerah" }];
					global.tebakWarna = global.tebakWarna || {};
					const tebakan = (text || "").trim().toLowerCase();
					if (global.tebakWarna[m.sender] && tebakan) {
						const jawaban = global.tebakWarna[m.sender];
						delete global.tebakWarna[m.sender];
						return tebakan === jawaban ? m.reply(`Benar! Warnanya *${jawaban}*.`) : m.reply(`Salah. Jawabannya *${jawaban}*.`);
					}
					const w = warna[Math.floor(Math.random() * warna.length)];
					global.tebakWarna[m.sender] = w.n;
					return m.reply(`*Tebak Warna*\n\nPetunjuk: ${w.p}, ${w.k}\nJawab: .tebakwarna <warna>`);
				}
				break;
			case "gameskor":
				{
					const hit = global.db?.hit || {};
					const game = ["quiz", "soal", "hangman", "slot", "turnamen", "wordle"];
					return m.reply(`*Skor Game*\n\n${game.map((g) => `- .${g}: ${(hit[g] || 0).toLocaleString("id-ID")}x`).join("\n")}`);
				}
				break;
			case "markdown":
				{
					const isi = (text || "").trim();
					if (!isi) return m.reply("Contoh: .markdown judul teks");
					return m.reply(`*${isi}*\n\n${isi}\n\n_Format teks siap disalin._`);
				}
				break;
			case "tabel2":
				{
					const baris = (text || "").trim().split("\n").filter(Boolean).slice(0, 12);
					if (!baris.length) return m.reply("Contoh: .tabel2 a=1\\nb=2");
					const pasangan = baris.map((b) => b.split("=").map((s) => s.trim()));
					return m.reply(`*Tabel*\n\n${pasangan.map(([k, v]) => `${k.padEnd(12)} : ${v || "-"}`).join("\n")}`);
				}
				break;
			case "diagram":
				{
					const n = (text || "").trim().split(/\s+/).map(Number);
					if (n.length < 2 || n.some((x) => !Number.isFinite(x))) return m.reply("Contoh: .diagram 8 4 6");
					const maks = Math.max(...n);
					return m.reply(`*Diagram*\n\n${n.map((v, i) => `${i + 1}. [${bilah(v, maks, 12)}] ${v}`).join("\n")}`);
				}
				break;
			case "hitungpanjang":
				{
					const isi = (text || "").trim();
					if (!isi) return m.reply("Contoh: .hitungpanjang halo dunia");
					return m.reply(formatPanjangTeks(isi));
				}
				break;
			case "indeksdata":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply("Contoh: .indeksdata wisata");
					return m.reply(cariCommand(q).slice(0, 10).map((e) => `- .${e.command} (${e.kategori})`).join("\n") || "Tidak ditemukan.");
				}
				break;
			case "contohdata":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply("Contoh: .contohdata rumus");
					const info = infoCommand(q);
					return info ? m.reply(`.${q}${info.deskripsi ? ": " + info.deskripsi : ""}`) : m.reply("Perintah tidak ditemukan.");
				}
				break;
			case "bantuansaya":
				{
					const entri = Object.entries(global.db?.hit || {}).filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v)).sort((a, b) => b[1] - a[1]).slice(0, 8);
					return m.reply(`*Perintah Saya*\n\n${entri.map(([k, v]) => `- .${k}: ${v}x`).join("\n") || "(belum ada)"}`);
				}
				break;
			case "code":
			case "dialog":
			case "brainstorm":
			case "kritik":
				{
					const isi = (text || "").trim();
					if (!isi) return m.reply(`Contoh: .${command} ${command === "code" ? "javascript symmetric difference" : "topik"}`);
					const prompt = {
						code: `Berikan contoh kode singkat untuk tugas ini: ${isi}`,
						dialog: `Buat dialog pendek dua tokoh tentang: ${isi}`,
						brainstorm: `Berikan delapan ide singkat tentang: ${isi}`,
						kritik: `Berikan masukan perbaikan untuk teks ini: ${isi}`,
					}[command];
					try {
						const hasil = await fetchApi("/ai/chat2", { query: prompt });
						return m.reply(String(hasil?.result?.message || hasil?.result || "Tidak ada jawaban.").slice(0, 3500));
					} catch {
						return m.reply("Fitur AI sedang bermasalah.");
					}
				}
				break;
			case "translateid":
				{
					const isi = (text || "").trim();
					if (!isi) return m.reply("Contoh: .translateid hello world");
					try {
						const hasil = await fetchApi("/translate", { teks: isi, target: "id" });
						return m.reply(String(hasil?.result?.translated || hasil?.result || "Tidak ada hasil.").slice(0, 3000));
					} catch {
						return m.reply("Layanan terjemah sedang bermasalah.");
					}
				}
				break;
			case "airiwayat":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply("Contoh: .airiwayat cuaca");
					return m.reply(cariCommand(q).slice(0, 5).map((e) => `.${e.command}`).join(", ") || "Tidak ada riwayat.");
				}
				break;
			case "restartnow":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (process.send) {
						m.reply("Restart diminta.");
						process.send("restart");
					} else m.reply("Restart otomatis hanya tersedia saat bot dijalankan lewat start.js.");
				}
				break;
			case "updatenow":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const key = (text || "").trim();
					if (key !== "confirm") return m.reply("Ketik .updatenow confirm untuk memperbarui bot.");
					m.reply("Pembaruan dimulai.");
					try {
						await runUpdate();
					} catch (e) {
						m.reply("Pembaruan gagal: " + (e?.message || e));
					}
				}
				break;
			case "logunduh":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const entri = Object.entries(global.db?.hit || {}).filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v)).sort((a, b) => b[1] - a[1]).slice(0, 15);
					return m.reply(`*Ringkasan Log*\n\n${entri.map(([k, v]) => `- .${k}: ${v}x`).join("\n")}\n\nLog mentah tidak dikirim agar tidak membocorkan data.`);
				}
				break;
			case "pengguna":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const jid = Object.keys(db.users || {});
					const n = parseInt((text || "").trim(), 10) || 20;
					return m.reply(`*Pengguna (${jid.length})*\n\n${jid.slice(0, Math.min(n, 30)).map((x, i) => `${i + 1}. @${x.split("@")[0]}`).join("\n")}`);
				}
				break;
			case "daftargroup":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const gc = Object.keys(db.set || {}).filter((x) => x.endsWith("@g.us"));
					return m.reply(`*Daftar Grup (${gc.length})*\n\n${gc.slice(0, 30).map((x, i) => `${i + 1}. ${x}`).join("\n") || "(kosong)"}`);
				}
				break;
			case "databaseinfo":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return m.reply(`*Info Database*\n\nTipe: ${String(global.database?.path || "lokal").split(":")[0]}\nUser: ${Object.keys(db.users || {}).length}\nGrup: ${Object.keys(db.set || {}).filter((x) => x.endsWith("@g.us")).length}\nHit: ${Object.keys(global.db?.hit || {}).length} perintah`);
				}
				break;
			case "maintenancewhy":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const alasan = (text || "").trim();
					if (!alasan) return m.reply(`Alasan: ${global.maintenanceWhy || "(belum diatur)"}`);
					global.maintenanceWhy = alasan.slice(0, 200);
					return m.reply("Alasan maintenance disimpan.");
				}
				break;
			case "laporharian":
				{
					const hit = global.db?.hit || {};
					return m.reply(`*Laporan Harian*\n\nPerintah hari ini: ${(hit.todaycmd || 0).toLocaleString("id-ID")}\nTotal perintah: ${(hit.totalcmd || 0).toLocaleString("id-ID")}\nGrup aktif: ${Object.keys(db.set || {}).filter((x) => x.endsWith("@g.us")).length}`);
				}
				break;
			case "lapormingguan":
				{
					const hit = global.db?.hit || {};
					const entri = Object.entries(hit).filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v)).sort((a, b) => b[1] - a[1]).slice(0, 10);
					return m.reply(`*Laporan Mingguan*\n\n${entri.map(([k, v]) => `- .${k}: ${v.toLocaleString("id-ID")}x`).join("\n") || "(belum ada data)"}`);
				}
				break;
			case "statistikgrup":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					return m.reply(`*Statistik Grup*\n\nAnggota database: ${Object.keys(m.metadata?.participants || []).length}\nPerintah dikenal: ${daftarCommand().length}\nAktivitas bot: ${(global.db?.hit?.totalcmd || 0).toLocaleString("id-ID")}x`);
				}
				break;
			case "statistikpengguna":
				{
					const u = db.users[m.sender] || {};
					return m.reply(`*Statistik Pengguna*\n\nLimit: ${u.limit || 0}\nUang: ${u.money || 0}\nSkor belajar: ${u.skorBelajar || 0}\nKoleksi: ${(u.koleksi || []).length}`);
				}
				break;
			case "statistikperintah":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply("Contoh: .statistikperintah rumus");
					return m.reply(`.${q}: ${(global.db?.hit?.[q] || 0).toLocaleString("id-ID")}x dipakai.`);
				}
				break;
			case "statistikkinerja":
				{
					return m.reply(`*Statistik Kinerja*\n\nNode: ${process.version}\nUptime: ${formatUptime(process.uptime() * 1000)}\nMemori: ${Math.round(process.memoryUsage().heapUsed / 1048576)} MB\nRumus: ${statistikRumus().total.toLocaleString("id-ID")}\nPerintah: ${daftarCommand().length}`);
				}
				break;

			case "bantuanku":
			case "bantuangrup":
				{
					const grup = command === "bantuangrup";
					const daftar = daftarCommand().filter((e) => grup ? e.kategori === "GROUP" : e.role === "semua").slice(0, 8);
					return kirimRespons(m, {
						judul: grup ? "Bantuan grup" : "Bantuan untuk kamu",
						isi: daftar.length ? daftar.map((e) => `- .${e.command}: ${e.deskripsi}`).join("\n") : "Belum ada perintah yang cocok.",
						footer: "Ketik .allmenu untuk daftar lengkap.",
					});
				}
				break;
			case "carifitur":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply("Contoh: .carifitur turnamen");
					const hasil = cariCommand(q).slice(0, 8);
					return kirimRespons(m, {
						judul: `Hasil untuk ${q}`,
						isi: hasil.length ? hasil.map((e) => `- .${e.command} (${e.kategori})`).join("\n") : "Tidak ditemukan.",
					});
				}
				break;
			case "cobacmd":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					if (!q) return m.reply("Contoh: .coba rumus");
					const info = infoCommand(q);
					return info ? kirimRespons(m, {
						judul: `.${info.command}`,
						isi: info.deskripsi || "(tanpa deskripsi)",
						catatan: `Contoh: ${info.contoh}. Mode coba tidak menjalankan perintah.`,
					}) : m.reply("Perintah tidak ditemukan.");
				}
				break;
			case "aliasperintah":
				{
					const q = (text || "").trim().toLowerCase().replace(/^\./, "");
					const info = infoCommand(q);
					return info ? kirimRespons(m, {
						judul: "Alias perintah",
						isi: `- Nama: .${info.command}\n- Alias: ${info.alias.length ? info.alias.map((a) => "." + a).join(", ") : "(tidak ada)"}`,
					}) : m.reply("Perintah tidak ditemukan.");
				}
				break;
			case "aksesku":
				{
					const u = db.users[m.sender] || {};
					const role = isCreator ? "owner" : m.isAdmin ? "admin" : isVip ? "vip" : isPremium ? "premium" : "free";
					return kirimRespons(m, { judul: "Akses kamu", isi: `- Role: ${role}\n- Limit: ${u.limit || 0}\n- Uang: ${(u.money || 0).toLocaleString("id-ID")}\n- Akun aman: ${u.akunAman ? "aktif" : "mati"}\n- Terverifikasi: ${(db.terverifikasi || []).includes(m.sender) ? "ya" : "tidak"}` });
				}
				break;
			case "riwayatperintah":
				{
					const riwayat = (db.users[m.sender] || {}).riwayat || [];
					return kirimRespons(m, {
						judul: "Riwayat perintah",
						isi: riwayat.length ? riwayat.slice(-8).reverse().map((c, i) => `${i + 1}. .${c}`).join("\n") : formatKosong(),
					});
				}
				break;
			case "turnamen2":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const sub = (arg.split(/\s+/)[0] || "bantuan").toLowerCase();
					const sisa = arg.split(/\s+/).slice(1);
					if (sub === "mesin") {
						const aksi = (sisa[0] || "lihat").toLowerCase();
						global.turnamenMesin = global.turnamenMesin || {};
						if (aksi === "buat") {
							if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
							const mode = sisa[1] || "single";
							const nama = sisa.slice(2).join(" ") || "Turnamen Mesin";
							const peserta = (m.mentionedJid || []).map((j) => "@" + j.split("@")[0]);
							const seedAwal = turnamenAktif(db, m.chat)?.seed || [];
							const kejuaraan = buatKejuaraan({ nama, mode, peserta, seed: seedAwal });
							if (!kejuaraan) return m.reply("Minimal dua peserta dan mode: single, double, atau roundrobin.");
							global.turnamenMesin[m.chat] = kejuaraan;
							return kirimRespons(m, { judul: "Turnamen dibuat", isi: formatRingkasMesin(kejuaraan), footer: ".turnamen2 mesin lanjut | hasil <a> <b> <pemenang>" });
						}
						const kejuaraan = global.turnamenMesin[m.chat] || global.turnamenMesin[m.chat + ":pet"];
						if (!kejuaraan) return m.reply("Belum ada turnamen mesin. Ketik .turnamen2 mesin buat <mode> <nama> dengan tag peserta.");
						if (aksi === "hasil") {
							if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
							if (!sisa[3]) return m.reply("Contoh: .turnamen2 mesin hasil A B A");
							const hasil = catatHasilMesin(kejuaraan, { a: sisa[1], b: sisa[2], pemenang: sisa[3] });
							if (hasil.selesai) {
							const jidJuara = normJid(kejuaraan.juara);
							catatJuara(db, kejuaraan, jidJuara, m.chat);
							beriPoinJuara(db, jidJuara);
							delete global.turnamenMesin[m.chat];
						}
							return hasil.ok ? m.reply(hasil.selesai ? `Turnamen selesai. Juara: *${kejuaraan.juara}*` : "Hasil dicatat.") : m.reply(hasil.alasan);
						}
						if (aksi === "klasemen") return kirimRespons(m, { judul: "Klasemen", isi: formatKlasemenMesin(kejuaraan) });
						if (aksi === "jadwal") {
							const j = jadwalkanMesin(kejuaraan, sisa[1], sisa[2], sisa.slice(3).join(" "));
							return j ? m.reply(`Jadwal ${sisa[1]} vs ${sisa[2]} dicatat.`) : m.reply("Contoh: .turnamen2 mesin jadwal A B 19:00");
						}
						if (aksi === "lihat") return kirimRespons(m, { judul: "Turnamen mesin", isi: formatRingkasMesin(kejuaraan), catatan: formatJadwal(kejuaraan) });
						const tersedia = pertandinganTersedia(kejuaraan);
						return kirimRespons(m, {
							judul: "Pertandingan berikutnya",
							isi: tersedia.length ? tersedia.slice(0, 8).map((x, i) => `${i + 1}. ${x.a} vs ${x.b}`).join("\n") : formatKosong("Semua pertandingan selesai."),
						});
					}

					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const mode = ["single", "double"].includes(sisa[sisa.length - 1]) ? sisa[sisa.length - 1] : "single";
						const namaTurnamen = (mode === "single" ? sisa : sisa.slice(0, -1)).join(" ") || "Turnamen";
						const t = buatTurnamen(db, m.chat, namaTurnamen, mode);
						return kirimRespons(m, { judul: "Turnamen dibuat", isi: formatTurnamen(t, (x) => x) + (t.bracket ? "\n\n" + formatBracketDouble(t.bracket) : "") });
					}
					if (sub === "daftar" || sub === "peserta") {
						const t = turnamenAktif(db, m.chat);
						return t ? kirimRespons(m, {
							judul: "Peserta turnamen",
							isi: t.peserta.length ? t.peserta.map((p, i) => `${i + 1}. @${p}`).join("\n") : formatKosong(".turnamen2 tambah @nama"),
						}) : m.reply("Belum ada turnamen.");
					}
					if (sub === "tambah") {
						const t = tambahPeserta(db, m.chat, sisa[0]);
						return t ? m.reply(`Terdaftar: @${sisa[0].replace(/^@/, "")}. Peserta: ${t.peserta.length}`) : m.reply("Gagal mendaftar.");
					}
					if (sub === "seed") {
						const t = turnamenAktif(db, m.chat);
						if (!t) return m.reply("Belum ada turnamen.");
						t.seed = [...new Set(sisa.map((x) => x.replace(/^@/, "")))].slice(0, 32);
						if (t.mode === "double") t.bracket = buatBracketDouble(t.seed);
						return m.reply(`Seed disimpan: ${t.seed.length} peserta.`);
					}
					if (sub === "hasil") {
						const t = catatHasil(db, m.chat, sisa[0]?.replace(/^@/, ""), sisa[1]?.replace(/^@/, ""));
						return t ? m.reply(`Hasil dicatat. Total: ${t.hasil.length}`) : m.reply("Belum ada turnamen.");
					}
					if (sub === "juara") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const t = tetapkanJuara(db, m.chat, sisa[0]);
						return t ? kirimRespons(m, { judul: "Juara ditetapkan", isi: `@${t.juara}` }) : m.reply("Belum ada turnamen.");
					}
					if (sub === "arsip") {
						const a = arsipTurnamen(db, m.chat);
						return kirimRespons(m, { judul: "Arsip turnamen", isi: a.length ? a.map((x) => `- ${x.nama}: @${x.juara}`).join("\n") : formatKosong() });
					}
					if (sub === "ingat") {
						const p = ingatPertandingan(db, m.chat, sisa[0], sisa.slice(1).join(" "));
						return m.reply(`Pengingat dicatat: ${p.length} pertandingan.`);
					}
					return kirimRespons(m, {
						judul: "Turnamen lanjutan",
						isi: ".turnamen2 buat [nama] [single|double]\n.turnamen2 daftar\n.turnamen2 tambah @nama\n.turnamen2 seed @a @b\n.turnamen2 hasil @menang @kalah\n.turnamen2 juara @nama\n.turnamen2 arsip\n.turnamen2 ingat <tim> <waktu>\n.turnamen2 mesin buat <single|double|roundrobin> <nama> (tag peserta)\n.turnamen2 mesin lanjut | hasil <a> <b> <pemenang> | klasemen | jadwal | lihat",
					});
				}
				break;
			case "liga2":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const sub = (arg.split(/\s+/)[0] || "bantuan").toLowerCase();
					const sisa = arg.split(/\s+/).slice(1);
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const l = ligaBuat(db, m.chat, sisa.join(" "));
						return m.reply(`Liga *${l.nama}* dibuat.`);
					}
					const l = ligaAmbil(db, m.chat);
					if (!l) return m.reply("Belum ada liga. Ketik .liga2 buat");
					if (sub === "anggota") {
						const tim = sisa[0]?.replace(/^@/, "");
						const nama = sisa[1]?.replace(/^@/, "");
						if (!tim || !nama) return m.reply("Contoh: .liga2 anggota timA @nama");
						l.anggota[tim] = l.anggota[tim] || [];
						l.anggota[tim].push(nama);
						return m.reply(`Pemain @${nama} masuk tim kamu.`);
					}
					if (sub === "transfer") {
						const hasil = ligaTransfer(db, m.chat, sisa[0]?.replace(/^@/, ""), sisa[1]?.replace(/^@/, ""), sisa[2]?.replace(/^@/, ""));
						return hasil ? m.reply("Transfer pemain berhasil.") : m.reply("Tim atau pemain tidak ditemukan.");
					}
					if (sub === "jadwal") {
						const x = ligaJadwal(db, m.chat, sisa[0], sisa.slice(1).join(" "));
						return x ? m.reply(`Jadwal melawan ${sisa[0]} dicatat.`) : m.reply("Gagal mencatat jadwal.");
					}
					if (sub === "skor" || sub === "klasemen") {
						const mesin = global.turnamenMesin?.[m.chat];
						const mesinLiga = mesin && l.nama && String(mesin.nama || "").toLowerCase().includes(String(l.nama).toLowerCase());
						return mesinLiga ? kirimRespons(m, { judul: `Klasemen ${l.nama}`, isi: klasemenLigaDariMesin(mesin) }) : kirimRespons(m, { judul: `Klasemen ${l.nama}`, isi: formatKlasemen(l) });
					}
					return m.reply(".liga2 buat [nama]\n.liga2 anggota @nama\n.liga2 transfer @dari @ke @pemain\n.liga2 jadwal <lawan> <waktu>\n.liga2 skor");
				}
				break;
			case "juaraboards":
				{
					const a = papanJuara(db).filter((x) => !m.isGroup || x.chat === m.chat);
					return kirimRespons(m, { judul: "Papan juara", isi: ringkasanJuara(a) });
				}
				break;
			case "bagiacak":
				{
					const mt = (text || "").trim().split(/\s+/);
					const hasil = bagiAcak(mt.slice(1), parseInt(mt[0], 10));
					return hasil ? m.reply(formatGrup(hasil, "Pembagian acak")) : m.reply("Contoh: .bagiacak 3 @a @b @c @d @e @f");
				}
				break;
			case "bagiseimbang":
				{
					const mt = (text || "").trim().split(/\s+/);
					const hasil = timSeimbang(mt.slice(1), parseInt(mt[0], 10));
					return hasil ? m.reply(formatGrup(hasil, "Tim seimbang")) : m.reply("Contoh: .bagiseimbang 2 @a @b @c @d");
				}
				break;
			case "baginama":
				{
					const mt = (text || "").trim().split(/\s+/);
					const hasil = bagiAcak(mt.slice(2), parseInt(mt[1], 10));
					return hasil ? m.reply(formatGrup(beriNama(hasil, mt[0]), "Kelompok bernama")) : m.reply("Contoh: .baginama Tim 2 @a @b @c @d");
				}
				break;
			case "teamseimbang":
			case "teamrotasi":
				{
					const orang = (m.mentionedJid || []).map((j) => "@" + j.split("@")[0]);
					const simpanTim = global.timState || (global.timState = {});
					const hasil = command === "teamrotasi" ? rotasiTim(simpanTim[m.chat] || []) : timSeimbang(orang, parseInt((text || "").trim(), 10) || 2);
					if (command === "teamseimbang") simpanTim[m.chat] = hasil;
					return hasil ? m.reply(formatGrup(hasil)) : m.reply("Tidak ada tim tersimpan. Ketik .teamseimbang dulu.");
				}
				break;
			case "teamlist":
			case "teamhapus":
				{
					const simpanTim = global.timState || (global.timState = {});
					if (command === "teamhapus") { delete simpanTim[m.chat]; return m.reply("Tim dihapus."); }
					return m.reply(simpanTim[m.chat]?.length ? formatGrup(simpanTim[m.chat], "Tim tersimpan") : "Belum ada tim tersimpan.");
				}
				break;
			case "kelompokrekap":
				{
					const a = db.groups[m.chat]?.kelompok || [];
					return kirimRespons(m, { judul: "Rekap kelompok", isi: a.length ? a.join("\n") : formatKosong() });
				}
				break;
			case "investasihari":
				{
					const u = db.users[m.sender] || {};
					const h = investasiHarian(u);
					return h ? kirimRespons(m, {
						judul: "Investasi simulasi",
						isi: `- Pokok: ${h.pokok.toLocaleString("id-ID")}\n- Hari: ${h.hari}\n- Nilai: ${h.nilai.toLocaleString("id-ID")}\n- Untung: ${h.untung.toLocaleString("id-ID")}`,
						catatan: "Simulasi bot, bukan produk keuangan.",
					}) : m.reply("Belum ada investasi. Ketik .investasi <nominal>");
				}
				break;
			case "tabunggrafik":
				{
					const u = db.users[m.sender] || {};
					const t = u.targetTabungan;
					return t ? m.reply(`*Target ${t.nama}*\n${grafikTabungan(u.tabungan || 0, t.nominal)}\n${(u.tabungan || 0).toLocaleString("id-ID")} / ${t.nominal.toLocaleString("id-ID")}`) : m.reply("Belum ada target tabungan.");
				}
				break;
			case "utangjadwal":
				{
					const mt = (text || "").trim().split(/\s+/);
					const u = db.users[m.sender] || {};
					u.utangJadwal = jadwalUtang(mt[0], mt.slice(1).join(" "));
					return m.reply(`Jadwal utang dicatat: ${u.utangJadwal.nominal} pada ${u.utangJadwal.tanggal}.`);
				}
				break;
			case "dompetriwayat":
				{
					const log = riwayatDompet(db.users[m.sender] || {});
					return kirimRespons(m, { judul: "Riwayat dompet", isi: log.length ? log.join("\n") : formatKosong() });
				}
				break;
			case "pasarsimulasi":
				{
					return kirimRespons(m, {
						judul: "Pasar simulasi",
						isi: formatPasar(pasarSimulasi()),
						catatan: "Harga contoh, bukan harga pasar nyata.",
					});
				}
				break;
			case "sisaanggaran":
				{
					const s = sisaAnggaran(db.users[m.sender] || {});
					return kirimRespons(m, { judul: "Sisa anggaran", isi: `- Anggaran: ${s.anggaran.toLocaleString("id-ID")}\n- Terpakai: ${s.keluar.toLocaleString("id-ID")}\n- Sisa: ${s.sisa.toLocaleString("id-ID")}` });
				}
				break;
			case "topdompet":
				{
					const entri = Object.entries(db.users || {}).filter(([, u]) => Number.isFinite(u.money)).sort((a, b) => b[1].money - a[1].money).slice(0, 10);
					return kirimRespons(m, { judul: "Top dompet", isi: entri.map(([jid, u], i) => `${i + 1}. @${jid.split("@")[0]}: ${u.money.toLocaleString("id-ID")}`).join("\n") || formatKosong() });
				}
				break;
			case "flashcardharian":
				{
					const k = kartuHarian(db.users[m.sender]?.flashcard || []);
					if (!k) return m.reply("Belum ada kartu. Ketik .flashcard pertanyaan | jawaban");
					db.users[m.sender].flashcardAktif = k;
					return kirimRespons(m, { judul: "Kartu harian", isi: k.pertanyaan, footer: "Jawab: .flashcardjawab <jawaban>" });
				}
				break;
			case "kuisadaptif":
				{
					const pool = SOAL.matematika && SOAL.matematika.length ? SOAL.matematika : Object.values(SOAL)[0];
					const skor = db.users[m.sender]?.skorBelajar || 0;
					const soal = kuisAdaptif(pool, skor);
					if (!soal) return m.reply("Bank soal kosong.");
					global.kuisHarian = global.kuisHarian || {};
					global.kuisHarian[m.sender] = { soal, at: Date.now() };
					return kirimRespons(m, {
						judul: `Kuis adaptif level ${Math.floor(skor / 3) + 1}`,
						isi: `${soal.q}\n\n${soal.o.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n")}`,
						footer: "Jawab: .kuisjawab a/b/c/d",
					});
				}
				break;
			case "kuisskor":
				{
					const u = db.users[m.sender] || {};
					return kirimRespons(m, { judul: "Skor belajar", isi: `- Benar: ${u.skorBelajar || 0}\n- Kartu: ${(u.flashcard || []).length}` });
				}
				break;
			case "materipeta":
				{
					const peta = petaMateri(SOAL);
					return kirimRespons(m, { judul: "Peta materi", isi: formatPeta(peta) });
				}
				break;
			case "catattopik":
				{
					const topik = (text || "").trim();
					if (!topik) return m.reply("Contoh: .catattopik aljabar");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const list = db.users[m.sender].topik || [];
					list.push(topik.slice(0, 60));
					db.users[m.sender].topik = list.slice(-20);
					return m.reply(`Topik *${topik}* dicatat.`);
				}
				break;
			case "rangkumcatatan":
				{
					const list = rangkumCatatan(db.users[m.sender]?.catat || []);
					return kirimRespons(m, { judul: "Rangkuman catatan", isi: list.length ? list.join("\n") : formatKosong() });
				}
				break;
			case "hafalanstreak":
				{
					const u = db.users[m.sender] || {};
					const benar = u.skorBelajar || 0;
					return kirimRespons(m, { judul: "Streak hafalan", isi: `- Skor benar: ${benar}\n- Kartu aktif: ${(u.flashcard || []).length}`, catatan: "Streak dihitung dari skor kuis harian." });
				}
				break;
			case "agendaminggu":
				{
					const list = agendaMinggu(global.db?.acara?.[m.chat] || []);
					return kirimRespons(m, { judul: "Agenda 7 hari", isi: list.length ? list.map((a, i) => `${i + 1}. ${a.nama} (${a.tanggal})`).join("\n") : formatKosong(".acara <nama> <tanggal>") });
				}
				break;
			case "absengrafik":
				{
					const hari = new Date().toISOString().slice(0, 10);
					const n = rekapAbsen(global.db?.absen || {}, hari);
					return m.reply(`*Absen Hari Ini*\n${tahapProgres(Math.min(n, 20), 20)}\n${n} orang hadir.`);
				}
				break;
			case "pollhasil":
				{
					const p = global.db?.poll?.[m.chat];
					const h = hasilPoll(p);
					return h ? kirimRespons(m, { judul: "Hasil poll", isi: h.map(([n, v], i) => `${i + 1}. ${n}: ${v} suara`).join("\n") }) : m.reply("Belum ada poll aktif.");
				}
				break;
			case "rapatringkas":
				{
					const r = (global.db?.rapat?.[m.chat] || []).slice(-1)[0];
					const poin = ringkasRapat(r);
					return kirimRespons(m, { judul: r ? `Rapat: ${r.judul}` : "Belum ada rapat", isi: poin.length ? poin.join("\n") : formatKosong() });
				}
				break;
			case "notulencari":
				{
					const q = (text || "").trim().toLowerCase();
					const list = (global.db?.rapat?.[m.chat] || []).flatMap((r) => (r.notulen || []).filter((n) => n.toLowerCase().includes(q)));
					return kirimRespons(m, { judul: "Notulen ditemukan", isi: list.length ? list.join("\n") : formatKosong() });
				}
				break;
			case "tugastambah":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const list = db.users[m.sender].tugas || [];
					db.users[m.sender].tugas = tugasTambah(list, text);
					return m.reply(`Tugas ditambahkan. Total: ${db.users[m.sender].tugas.length}`);
				}
				break;
			case "tugasselesai":
				{
					const list = db.users[m.sender]?.tugas || [];
					tugasSelesai(list, (text || "").trim());
					return m.reply("Tugas ditandai selesai.");
				}
				break;
			case "tugaslist":
				{
					const list = db.users[m.sender]?.tugas || [];
					return kirimRespons(m, { judul: "Daftar tugas", isi: formatTugas(list) });
				}
				break;
			case "peraturanversi":
				{
					const g = db.groups[m.chat] || {};
					g.peraturanVersi = (g.peraturanVersi || 0) + 1;
					return m.reply(`Peraturan versi *${g.peraturanVersi}* dicatat.`);
				}
				break;
			case "peringatan":
			case "peringatanlist":
				{
					if (!db.groups[m.chat]) db.groups[m.chat] = {};
					const g = db.groups[m.chat];
					if (command === "peringatanlist") return kirimRespons(m, { judul: "Peringatan", isi: (g.warningLog || []).join("\n") || formatKosong() });
					const target = (m.mentionedJid || [])[0] || (text || "").split(/\s+/)[0];
					if (!target) return m.reply("Tag anggota atau sebut nomor.");
					g.warningLog = g.warningLog || [];
					g.warningLog.push(`@${target.split("@")[0]} - ${Date.now()}`);
					g.warningLog = g.warningLog.slice(-20);
					return m.reply(`Peringatan dicatat untuk @${target.split("@")[0]}.`);
				}
				break;
			case "moderasiskor":
				{
					return kirimRespons(m, { judul: "Skor moderasi", isi: `*${skorModerasi(db.groups[m.chat])}* poin`, catatan: "Skor berasal dari antilink, antispam, peringatan, dan laporan." });
				}
				break;
			case "laporstatus":
				{
					const list = (global.db?.laporan || []).filter((l) => l.chat === m.chat);
					return kirimRespons(m, { judul: "Status laporan", isi: `${list.length} laporan tercatat.`, footer: "Laporan tidak menampilkan data sensitif." });
				}
				break;
			case "adminlog":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const log = bacaAudit(db).slice(-10);
					return kirimRespons(m, { judul: "Log admin", isi: logRingkas(log) });
				}
				break;
			case "kartuwarna":
				{
					const [nama, nilai] = (text || "").trim().split(/\s+/);
					const k = kartuWarna(nama, nilai);
					return kirimRespons(m, { judul: k.nama, isi: `Warna: ${k.nilai}` });
				}
				break;
			case "posterteks":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					return mt ? m.reply(posterTeks(mt[1], mt[2])) : m.reply("Contoh: .posterteks Judul Isi poster");
				}
				break;
			case "kartuucapan":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					return mt ? m.reply(kartuUcapan(mt[1], mt[2])) : m.reply("Contoh: .kartuucapan Nama Pesan");
				}
				break;
			case "komikpendek":
				{
					const mt = (text || "").trim().split("|").map((s) => s.trim());
					return mt.length === 3 ? m.reply(komikPendek(mt[0], mt[1], mt[2])) : m.reply("Contoh: .komikpendek awal | tengah | akhir");
				}
				break;
			case "galeri":
				{
					const list = (db.users[m.sender]?.koleksi || []).map((n) => ({ nama: n }));
					return kirimRespons(m, { judul: "Galeri koleksi", isi: galeri(list) });
				}
				break;
			case "stikeranimasi":
				{
					const s = stikerAnimasiSpec((text || "").trim() || "rynn");
					return kirimRespons(m, { judul: "Stiker animasi", isi: `${s.nama}, ${s.frame} frame, format ${s.format}.`, catatan: teksStikerAnimasi(s.nama) });
				}
				break;
			case "aigaya":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					if (!mt) return m.reply("Contoh: .aigaya singkat topik");
					try {
						const hasil = await fetchApi("/ai/chat2", { query: promptGaya(mt[1], mt[2]) });
						return m.reply(String(hasil?.result?.message || hasil?.result || "Tidak ada jawaban.").slice(0, 3500));
					} catch {
						return m.reply("Fitur AI sedang bermasalah.");
					}
				}
				break;
			case "aitopik":
				{
					const q = (text || "").trim();
					if (!q) return m.reply("Contoh: .aitopik energi terbarukan");
					try {
						const hasil = await fetchApi("/ai/chat2", { query: `Berikan 6 sudut pandang tentang ${q}` });
						return m.reply(String(hasil?.result?.message || hasil?.result || "Tidak ada jawaban.").slice(0, 3500));
					} catch {
						return m.reply("Fitur AI sedang bermasalah.");
					}
				}
				break;
			case "aicontoh":
				{
					return kirimRespons(m, {
						judul: "Contoh AI",
						isi: ".aigaya singkat <topik>\n.aitopik <topik>\n.aibandingkan <teks> || <teks>\n.aikuota",
					});
				}
				break;
			case "aibatalkan":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					db.users[m.sender].aiTerakhir = null;
					return m.reply("Riwayat AI terakhir dihapus.");
				}
				break;
			case "aikuota":
				{
					const u = db.users[m.sender] || {};
					const q = kuotaAi(u.aiTerpakai || 0);
					return kirimRespons(m, { judul: "Kuota AI", isi: `- Terpakai: ${q.terpakai}\n- Batas: ${q.batas}\n- Sisa: ${q.sisa}` });
				}
				break;
			case "aibandingkan":
				{
					const mt = (text || "").trim().split("||").map((s) => s.trim());
					return mt.length === 2 ? m.reply(bandingkan(mt[0], mt[1])) : m.reply("Contoh: .aibandingkan versi satu || versi dua");
				}
				break;
			case "health":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return m.reply(formatHealth(health(global)));
				}
				break;
			case "metrik":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const m2 = metrik(db);
					return kirimRespons(m, { judul: "Metrik perintah", isi: m2.length ? m2.map(([k, v], i) => `${i + 1}. .${k}: ${v}x`).join("\n") : formatKosong() });
				}
				break;
			case "logringkas":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return kirimRespons(m, { judul: "Log ringkas", isi: logRingkas(bacaAudit(db)) });
				}
				break;
			case "auditcari":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const q = (text || "").trim().toLowerCase();
					const list = bacaAudit(db).filter((a) => JSON.stringify(a).toLowerCase().includes(q)).slice(-10);
					return kirimRespons(m, { judul: "Hasil audit", isi: logRingkas(list) });
				}
				break;
			case "diagnosapenuh":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return kirimRespons(m, {
						judul: "Diagnosa penuh",
						isi: formatHealth(health(global)) + `\n\nDatabase: ${String(global.database?.path || "lokal").split(":")[0]}`,
						catatan: "Nilai kunci tidak pernah ditampilkan.",
					});
				}
				break;
			case "modehemat":
				{
					const a = (text || "").trim().toLowerCase();
					if (!["on", "off"].includes(a)) return m.reply("Ketik .modehemat on atau off");
					global.modeHemat = a === "on";
					const h = modeHemat(global.modeHemat);
					return m.reply(h.pesan);
				}
				break;
			case "cacheinfo":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return m.reply(`Cache aktif: ${cacheInfo(global.cache)} entri.`);
				}
				break;
			case "memori":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const u = process.memoryUsage();
					return kirimRespons(m, { judul: "Memori", isi: `- Heap: ${Math.round(u.heapUsed / 1048576)} MB\n- Eksternal: ${Math.round(u.external / 1048576)} MB\n- RSS: ${Math.round(u.rss / 1048576)} MB` });
				}
				break;
			case "dashboardbuka":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const info = bukaPanel({ db });
					return kirimRespons(m, {
						judul: "Panel lokal aktif",
						isi: `Alamat: http://127.0.0.1:${info.port}\nToken: ${info.token}`,
						catatan: "Token hanya untuk sesi ini. Jangan dibagikan.",
					});
				}
				break;
			case "dashboardtutup":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return m.reply(tutupPanel() ? "Panel lokal ditutup." : "Panel tidak aktif.");
				}
				break;

			case "profilkartu":
				{
					const u = db.users[m.sender] || {};
					const role = isCreator ? "owner" : m.isAdmin ? "admin" : isVip ? "vip" : isPremium ? "premium" : "free";
					return m.reply(kartuProfil(u, role, u.badge || []));
				}
				break;
			case "bio":
				{
					const arg = (text || "").trim();
					if (!db.users[m.sender]) db.users[m.sender] = {};
					if (!arg) return m.reply(`Bio: ${db.users[m.sender].bio || "(belum diatur)"}`);
					db.users[m.sender].bio = arg.slice(0, 150);
					return m.reply("Bio disimpan.");
				}
				break;
			case "xp":
				{
					const p = progresLevel(xpDari(db.users[m.sender] || {}));
					return kirimRespons(m, {
						judul: "Pengalaman",
						isi: `- Level: ${p.level}\n- XP: ${p.xp}\n- Progres: ${p.sebelumnya}/${p.berikutnya}\n- Sisa: ${p.sisa}`,
					});
				}
				break;
			case "xptop":
				{
					const entri = Object.entries(db.users || {}).map(([jid, u]) => [jid, xpDari(u)]).sort((a, b) => b[1] - a[1]).slice(0, 10);
					return kirimRespons(m, { judul: "Papan XP", isi: entri.map(([jid, xp], i) => `${i + 1}. @${jid.split("@")[0]}: ${xp} XP`).join("\n") || formatKosong() });
				}
				break;
			case "badge":
			case "badgeberi":
			case "badgehapus":
				{
					const target = command === "badge" ? m.sender : (m.mentionedJid || [])[0];
					if (!target || target === m.sender && command !== "badge") return m.reply("Tag pengguna untuk memberi atau menghapus lencana.");
					if (!db.users[target]) db.users[target] = {};
					const u = db.users[target];
					const nama = (text || "").trim().split(/\s+/).pop();
					if (command === "badge") return kirimRespons(m, { judul: "Lencana", isi: (u.badge || []).join("\n") || formatKosong() });
					if (command === "badgeberi") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const list = beriBadge(u, nama);
						return list ? m.reply(`Lencana *${nama}* diberikan.`) : m.reply("Lencana sudah ada atau nama tidak valid.");
					}
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const list = hapusBadge(u, nama);
					return list ? m.reply(`Lencana *${nama}* dihapus.`) : m.reply("Lencana tidak ditemukan.");
				}
				break;
			case "identitas":
				{
					const u = db.users[m.sender] || {};
					const role = isCreator ? "owner" : m.isAdmin ? "admin" : isVip ? "vip" : isPremium ? "premium" : "free";
					return kirimRespons(m, {
						judul: "Identitas",
						isi: `- Nama: @${m.sender.split("@")[0]}\n- Role: ${role}\n- Bio: ${u.bio || "(kosong)"}\n- Level: ${progresLevel(xpDari(u)).level}\n- Lencana: ${aktivitasTerpadu(u).badge}`,
					});
				}
				break;
			case "rekening":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "list") {
						const entri = Object.entries(u.rekening || {});
						return kirimRespons(m, { judul: "Rekening simulasi", isi: entri.length ? entri.map(([k, v]) => `- ${k}: ${v.toLocaleString("id-ID")}`).join("\n") : formatKosong(".rekening buat <nama>") });
					}
					if (sub === "buat") {
						const daftar = rekeningBuat(u, mt[1]);
						return daftar ? m.reply(`Rekening *${mt[1]}* dibuat.`) : m.reply("Nama tidak valid atau sudah ada.");
					}
					if (sub === "pindah") {
						const n = Number(mt[2]);
						const daftar = rekeningPindah(u, mt[1], n);
						return daftar ? m.reply(`Dana ${n.toLocaleString("id-ID")} dipindah ke *${mt[1]}*.`) : m.reply("Rekening tidak ada, nominal invalid, atau saldo kurang.");
					}
					return m.reply(".rekening buat <nama>\n.rekening pindah <nama> <nominal>\n.rekening list");
				}
				break;
			case "arisan":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "bantuan").toLowerCase();
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const a = arisanBuat(db, m.chat, mt[1], Number(mt[2]));
						return a ? m.reply(`Arisan *${a.nama}* ${a.nominal.toLocaleString("id-ID")} dibuat.`) : m.reply("Contoh: .arisan buat Kelas 50000");
					}
					const a = db.arisan?.[m.chat];
					if (!a) return m.reply("Belum ada arisan.");
					if (sub === "bayar") {
						const x = arisanBayar(a, m.sender);
						return x ? m.reply(`Setoran ${a.nominal.toLocaleString("id-ID")} dicatat.`) : m.reply("Gagal mencatat setoran.");
					}
					if (sub === "rekap") {
						const r = arisanRekap(a, Object.keys(db.users || {}));
						return kirimRespons(m, { judul: `Rekap arisan ${a.nama}`, isi: r.map((x) => `- @${x.jid.split("@")[0]}: ${x.bayar.toLocaleString("id-ID")}`).join("\n") });
					}
					return m.reply(".arisan buat <nama> <nominal>\n.arisan bayar\n.arisan rekap");
				}
				break;
			case "kreditskor":
				{
					const s = skorKredit(db.users[m.sender] || {});
					return kirimRespons(m, { judul: "Skor kredit simulasi", isi: `*${s}/100*`, catatan: "Simulasi bot, bukan penilaian kredit nyata." });
				}
				break;
			case "asuransiklaim":
				{
					const u = db.users[m.sender] || {};
					const hasil = klaimAsuransi(u.danaPerlindungan || 0, Number((text || "").trim()));
					return hasil ? kirimRespons(m, {
						judul: "Klaim simulasi",
						isi: `- Kerugian: ${hasil.kerugian.toLocaleString("id-ID")}\n- Dibayar: ${hasil.dibayar.toLocaleString("id-ID")}\n- Sisa: ${hasil.sisa.toLocaleString("id-ID")}`,
						catatan: "Simulasi bot, bukan produk asuransi.",
					}) : m.reply("Contoh: .asuransiklaim 50000");
				}
				break;
			case "pajaksimulasi":
				{
					const mt = (text || "").trim().split(/\s+/);
					const h = pajakSimulasi(Number(mt[0]), Number(mt[1]) || 10);
					return h ? kirimRespons(m, { judul: "Pajak simulasi", isi: `- Nominal: ${h.nominal.toLocaleString("id-ID")}\n- Persen: ${h.persen}\n- Pajak: ${h.pajak.toLocaleString("id-ID")}\n- Total: ${h.total.toLocaleString("id-ID")}` }) : m.reply("Contoh: .pajaksimulasi 100000 10");
				}
				break;
			case "grafikpengeluaran":
				{
					const u = db.users[m.sender] || {};
					const baris = grafikKategori(u.pengeluaran || []);
					return kirimRespons(m, { judul: "Grafik pengeluaran", isi: baris.join("\n") || formatKosong(".pengeluaran <kategori> <nominal>") });
				}
				break;
			case "pendapatanharian":
				{
					const u = db.users[m.sender] || {};
					const masuk = (u.pemasukan || []).filter((x) => Date.now() - x.waktu < 86400000);
					const total = masuk.reduce((n, x) => n + x.nominal, 0);
					return kirimRespons(m, { judul: "Pendapatan harian", isi: `${masuk.length} catatan, total ${total.toLocaleString("id-ID")}.` });
				}
				break;
			case "donasikampanye":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const nama = (text || "").trim();
					if (!db.kampanye) db.kampanye = [];
					db.kampanye.push({ nama: nama.slice(0, 80), at: Date.now() });
					db.kampanye = db.kampanye.slice(-10);
					return m.reply(`Kampanye *${nama}* dicatat. Tidak ada pembayaran nyata.`);
				}
				break;
			case "guild":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "bantuan").toLowerCase();
					if (sub === "buat") {
						const g = guildBuat(db, mt.slice(1).join(" "), m.chat);
						return g ? m.reply(`Guild *${g.nama}* dibuat.`) : m.reply("Nama guild tidak valid atau sudah ada.");
					}
					if (sub === "gabung") {
						const g = guildGabung(db, mt.slice(1).join(" "), m.sender);
						return g ? m.reply(`Kamu bergabung ke *${g.nama}*.`) : m.reply("Guild tidak ditemukan atau kamu sudah bergabung.");
					}
					if (sub === "keluar") {
						const g = guildKeluar(db, mt.slice(1).join(" "), m.sender);
						return g ? m.reply(`Kamu keluar dari *${g.nama}*.`) : m.reply("Guild tidak ditemukan.");
					}
					if (sub === "papan") {
						const p = guildPapan(db);
						return kirimRespons(m, { judul: "Papan guild", isi: p.map((g, i) => `${i + 1}. ${g.nama}: ${g.jumlah} anggota`).join("\n") || formatKosong() });
					}
					if (sub === "pesan") {
						const g = db.guild?.[String(mt[1] || "").toLowerCase()];
						if (!g || !g.anggota.includes(m.sender)) return m.reply("Kamu bukan anggota guild ini.");
						g.pesan.push({ dari: m.sender, teks: mt.slice(2).join(" ").slice(0, 200), at: Date.now() });
						g.pesan = g.pesan.slice(-20);
						return m.reply("Pesan guild disimpan.");
					}
					return m.reply(".guild buat <nama>\n.guild gabung <nama>\n.guild keluar <nama>\n.guild papan\n.guild pesan <nama> <teks>");
				}
				break;
			case "temanrekomendasi":
				{
					const r = rekomendasiTeman(Object.keys(db.users || {}), m.sender);
					return kirimRespons(m, { judul: "Rekomendasi teman", isi: r.map((x) => `- @${x.split("@")[0]}`).join("\n") || formatKosong() });
				}
				break;
			case "perkenalan":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					return mt ? m.reply(kartuPerkenalan(mt[1], mt[2])) : m.reply("Contoh: .perkenalan Andi suka membaca");
				}
				break;
			case "sapagrup":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const s = (text || "").trim();
					if (!db.groups[m.chat]) db.groups[m.chat] = {};
					if (!s) return m.reply(`Sapaan: ${db.groups[m.chat].sapa || "(belum diatur)"}`);
					db.groups[m.chat].sapa = s.slice(0, 200);
					return m.reply("Sapaan grup disimpan.");
				}
				break;
			case "icekartu":
				{
					const cards = ["Ceritakan satu hal yang membuatmu tersenyum hari ini.", "Apa makanan yang paling kamu suka?", "Kalau bisa liburan sebentar, ke mana?", "Sebutkan satu kebiasaan baik yang ingin kamu jaga."];
					return m.reply(cards[Math.floor(Math.random() * cards.length)]);
				}
				break;
			case "komunitasstatistik":
				{
					const meta = m.metadata?.participants || [];
					const s = statistikKomunitas(db, meta);
					return kirimRespons(m, { judul: "Statistik komunitas", isi: `- Pengguna: ${s.pengguna}\n- Grup: ${s.grup}\n- Guild: ${s.guild}\n- Anggota grup ini: ${s.anggota}` });
				}
				break;
			case "sudoku":
				{
					const arg = (text || "").trim().split(/\s+/);
					const sub = (arg[0] || "buat").toLowerCase();
					const kunci = m.chat + ":" + m.sender;
					global.sudokuState = global.sudokuState || {};
					if (sub === "buat") {
						global.sudokuState[kunci] = { papan: sudokuBuat(arg[1] || "mudah"), at: Date.now() };
						return m.reply(`*Sudoku ${arg[1] || "mudah"}*\n\n${formatSudoku(global.sudokuState[kunci].papan)}`);
					}
					if (sub === "isi") {
						const p = sudokuIsi(global.sudokuState[kunci].papan || [], arg[1], arg[2], arg[3]);
						if (!p) return m.reply("Contoh: .sudoku isi 0 0 3");
						global.sudokuState[kunci] = { papan: p, at: Date.now() };
						return m.reply(formatSudoku(p));
					}
					return m.reply(".sudoku buat [mudah|sedang|sulit]\n.sudoku isi <baris> <kolom> <angka>");
				}
				break;
			case "game2048":
				{
					const arah = (text || "").trim().toLowerCase();
					const kunci = m.chat + ":" + m.sender;
					global.game2048State = global.game2048State || {};
					if (!global.game2048State[kunci] || arah === "baru") global.game2048State[kunci] = { papan: game2048Baru(), at: Date.now() };
					else {
						const p = gerak2048(global.game2048State[kunci].papan || [], arah);
						if (!p) return m.reply("Arah: atas, bawah, kiri, kanan. Ketik .game2048 baru untuk ulang.");
						global.game2048State[kunci] = { papan: p, at: Date.now() };
					}
					return m.reply(`*2048*\n\n${global.game2048State[kunci].papan.map((b) => b.join("\t")).join("\n")}`);
				}
				break;
			case "kartuingatan":
				{
					const kartu = kartuIngatan(Number((text || "").trim()) || 8);
					return m.reply(`*Kartu Ingatan*\n\n${kartu.map((n, i) => `${i + 1}. ${n}`).join("\n")}`);
				}
				break;
			case "tebaktokoh":
				{
					const jawaban = tebakTokoh();
					global.tebakTokohState = global.tebakTokohState || {};
					global.tebakTokohState[m.sender] = { jawaban, at: Date.now() };
					return m.reply(`*Tebak Tokoh*\n\nPetunjuk: tokoh Indonesia yang namanya memiliki ${jawaban.length} huruf.\nJawab: .tebaktokohjawab <nama>`);
				}
				break;
			case "tebaktokohjawab":
				{
					const s = global.tebakTokohState?.[m.sender];
					if (!s || Date.now() - s.at > 300000) return m.reply("Belum ada tebak tokoh aktif.");
					const j = (text || "").trim().toLowerCase();
					delete global.tebakTokohState[m.sender];
					return cocokJawaban(j, s.jawaban) ? m.reply(`Benar! *${s.jawaban}*`) : m.reply(`Salah. Jawabannya *${s.jawaban}*.`);
				}
				break;
			case "tebaklagu":
				{
					const clues = ["lagu tentang hujan dan kopi", "lagu tentang pelan-pelan berjalan", "lagu tentang bintang di malam", "lagu tentang pulang ke rumah"];
					const pilih = clues[Math.floor(Math.random() * clues.length)];
					global.tebakLaguState = global.tebakLaguState || {};
					global.tebakLaguState[m.sender] = { judul: pilih, at: Date.now() };
					return m.reply(`*Tebak Lagu*\n\nPetunjuk: ${pilih}\nJawab: .tebaklagujawab <teks>`);
				}
				break;
			case "tebaklagujawab":
				{
					const s = global.tebakLaguState?.[m.sender];
					if (!s || Date.now() - s.at > 300000) return m.reply("Belum ada tebak lagu aktif.");
					const j = (text || "").trim().toLowerCase();
					delete global.tebakLaguState[m.sender];
					return cocokJawaban(j, s.judul) ? m.reply("Benar!") : m.reply(`Belum tepat. Petunjuknya: ${s.judul}`);
				}
				break;
			case "riddleai":
				{
					const daftar = ["Apa yang makin dicuci makin kotor? Air.", "Apa yang punya gigi tapi tidak menggigit? Sisir.", "Apa yang naik tapi tidak pernah turun? Umur."];
					const r = riddleAi(daftar);
					const [ pertanyaan, jawabanMentah ] = r.split("? ");
					const jawaban = jawabanMentah.replace(/[.!?]+$/, "");
					global.riddleState = global.riddleState || {};
					global.riddleState[m.sender] = { jawaban, at: Date.now() };
					return m.reply(`*Riddle*\n\n${pertanyaan}?\nJawab: .riddlejawab <teks>`);
				}
				break;
			case "riddlejawab":
				{
					const s = global.riddleState?.[m.sender];
					if (!s || Date.now() - s.at > 300000) return m.reply("Belum ada riddle aktif.");
					const j = (text || "").trim().toLowerCase();
					delete global.riddleState[m.sender];
					return cocokJawaban(j, s.jawaban) ? m.reply("Benar!") : m.reply(`Salah. Jawabannya *${s.jawaban}*.`);
				}
				break;
			case "gameharian":
				{
					const daftar = ["quiz", "tebaktokoh", "wordle", "sudoku", "game2048"];
					const pilih = daftar[Math.floor(Date.now() / 86400000) % daftar.length];
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const hariIni = new Date().toISOString().slice(0, 10);
					if (u.gamePassTanggal !== hariIni) { u.gamePassTanggal = hariIni; u.gamePassHari = (u.gamePassHari || 0) + 1; }
					return kirimRespons(m, { judul: "Game harian", isi: `Hari ini: *${pilih}*\nKetik .${pilih} untuk mulai.` });
				}
				break;
			case "gamepass":
				{
					const u = db.users[m.sender] || {};
					const hari = u.gamePassHari || 0;
					return kirimRespons(m, { judul: "Game pass", isi: `- Hari beruntun: ${hari}\n- Hadiah: ${hadiahGamePass(hari)}` });
				}
				break;
			case "quizturnamen":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const peserta = (m.mentionedJid || []).map((j) => "@" + j.split("@")[0]);
					const kejuaraan = buatKejuaraan({ nama: "Turnamen Kuis", mode: "roundrobin", peserta });
					if (!kejuaraan) return m.reply("Tag minimal dua peserta.");
					global.turnamenMesin = global.turnamenMesin || {};
					global.turnamenMesin[m.chat + ":quiz"] = kejuaraan;
					return m.reply(`Turnamen kuis *${kejuaraan.id}* dibuat. Gunakan .turnamen2 mesin lanjut.`);
				}
				break;
			case "rekapgame":
				{
					const hit = global.db?.hit || {};
					return kirimRespons(m, { judul: "Rekap game", isi: skorGameTerpadu(hit).map((g) => `- .${g.nama}: ${g.jumlah.toLocaleString("id-ID")}x`).join("\n") || formatKosong() });
				}
				break;
			case "kosakataharian":
				{
					const kata = Object.values(SINONIM || {}).flat().slice(0, 20);
					const k = kosakataHarian(kata);
					return k ? kirimRespons(m, { judul: "Kosakata harian", isi: `*${typeof k === "string" ? k : k.kata}*` }) : m.reply("Belum ada kosakata.");
				}
				break;
			case "kosakatacari":
				{
					const kata = Object.values(SINONIM || {}).flat().slice(0, 200);
					const hasil = cariKosakata(kata, text);
					return kirimRespons(m, { judul: "Hasil kosakata", isi: hasil.join("\n") || formatKosong() });
				}
				break;
			case "ejaan":
				return m.reply(panduanEjaan(text));
			case "tatabahasa":
				return m.reply(panduanTatabahasa(text));
			case "pantunbuat":
				return m.reply(pantunBuatan(text));
			case "puisibuat":
				return m.reply(puisiBuatan(text));
			case "terjemahbalik":
				{
					const isi = (text || "").trim();
					if (!isi) return m.reply("Contoh: .terjemahbalik halo dunia");
					try {
						const a = await fetchApi("/translate", { teks: isi, target: "en" });
						const hasil = await fetchApi("/translate", { teks: String(a?.result?.translated || a?.result || isi), target: "id" });
						return m.reply(String(hasil?.result?.translated || hasil?.result || isi).slice(0, 3000));
					} catch {
						return m.reply("Layanan terjemah sedang bermasalah.");
					}
				}
				break;
			case "resepcari":
				{
					const hasil = cariResep(RESEP, text);
					return kirimRespons(m, { judul: "Resep ditemukan", isi: hasil.length ? hasil.map((r) => `- ${r.nama || r.judul || "Resep"}`).join("\n") : formatKosong() });
				}
				break;
			case "sejarahharian":
				{
					const s = SEJARAH[Math.floor(Date.now() / 86400000) % SEJARAH.length];
					return s ? m.reply(`*${s.tanggal}*\n\n${s.info}`) : m.reply("Belum ada data sejarah.");
				}
				break;
			case "rumustantangan":
				{
					const r = tantanganRumus(semuaRumus());
					return r ? m.reply(formatRumus(r)) : m.reply("Belum ada rumus.");
				}
				break;
			case "target":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "buat") {
						const t = targetBuat(u, mt[1], mt[2]);
						return t ? m.reply(`Target *${mt[1]}* dibuat.`) : m.reply("Contoh: .target buat baca 20");
					}
					if (sub === "tambah") {
						const t = targetTambah(u, mt[1], mt[2]);
						return t ? m.reply(`Progres *${mt[1]}* sekarang ${t.progres}/${t.target}.`) : m.reply("Target tidak ditemukan.");
					}
					return kirimRespons(m, { judul: "Target", isi: formatTarget(u.target) });
				}
				break;
			case "proyek":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "papan").toLowerCase();
					if (sub === "buat") {
						const p = proyekBuat(u, mt.slice(1).join(" "));
						return m.reply(`Proyek *${p.nama}* dibuat.`);
					}
					if (sub === "tambah") {
						const p = proyekTambah(u, mt.slice(1).join(" "));
						return p ? m.reply("Tugas ditambahkan.") : m.reply("Contoh: .proyek tambah desain kartu");
					}
					if (sub === "status") {
						const t = proyekStatus(u, mt[1], mt[2]);
						return t ? m.reply(`Tugas ${t.id} menjadi ${t.status}.`) : m.reply("Contoh: .proyek status ABC123 done");
					}
					return m.reply(formatPapan(u.proyek));
				}
				break;
			case "catatcari":
				{
					const hasil = cariCatatan(db.users[m.sender]?.catatan || {}, text);
					return kirimRespons(m, { judul: "Hasil catatan", isi: hasil.length ? hasil.map(([k, v]) => `- *${k}*: ${v}`).join("\n") : formatKosong() });
				}
				break;
			case "cattag":
				{
					const mt = (text || "").trim().split(/\s+/);
					const u = db.users[m.sender] || {};
					const hasil = beriTagCatatan(u.catatan || {}, mt[0], mt[1]);
					return hasil ? m.reply("Tag ditambahkan.") : m.reply("Catatan tidak ditemukan.");
				}
				break;
			case "agendaekspor":
				{
					const list = global.db?.acara?.[m.chat] || [];
					return kirimRespons(m, { judul: "Agenda grup", isi: list.map((a, i) => `${i + 1}. ${a.nama} (${a.tanggal})`).join("\n") || formatKosong() });
				}
				break;
			case "absenbulanan":
				{
					const bulan = new Date().toISOString().slice(0, 7);
					const entri = Object.keys(global.db?.absen || {}).filter((k) => k.startsWith(m.chat + ":") && k.includes(bulan));
					const total = entri.reduce((n, k) => n + (global.db.absen[k]?.length || 0), 0);
					return kirimRespons(m, { judul: `Absen ${bulan}`, isi: `${entri.length} hari tercatat, total ${total} kehadiran.` });
				}
				break;
			case "admindaftar":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const list = daftarAdmin(db, m.chat, global.owner);
					return kirimRespons(m, { judul: "Admin grup", isi: list.map((x, i) => `${i + 1}. @${String(x).split("@")[0]}`).join("\n") });
				}
				break;
			case "admintambah":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!m.isGroup) return m.reply(global.mess.group);
					const jid = (m.mentionedJid || [])[0];
					if (!jid) return m.reply("Tag pengguna.");
					const list = tambahAdmin(db, m.chat, jid);
					return list ? m.reply(`@${jid.split("@")[0]} menjadi admin bot.`) : m.reply("Sudah terdaftar.");
				}
				break;
			case "peraturankategori":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const mt = (text || "").trim().split(/\s+/);
					if (!mt[0]) return m.reply("Contoh: .peraturankategori link dilarang");
					aturPeraturan(db, m.chat, mt[0], mt.slice(1).join(" "));
					return m.reply(`Peraturan *${mt[0]}* disimpan.`);
				}
				break;
			case "peraturansemua":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					return kirimRespons(m, { judul: "Peraturan grup", isi: formatPeraturan(db, m.chat) });
				}
				break;
			case "linkaman":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const arg = (text || "").trim();
					if (!arg || arg === "list") return kirimRespons(m, { judul: "Domain aman", isi: (db.domainAman || []).join("\n") || formatKosong() });
					const list = tambahDomainAman(db, arg);
					return list ? m.reply(`Domain *${arg}* diizinkan.`) : m.reply("Domain sudah ada atau tidak valid.");
				}
				break;
			case "spamdeteksi":
				return kirimRespons(m, { judul: "Spam terdeteksi", isi: `${global.db?.spamDeteksi || 0} kejadian tercatat.` });
			case "grupkartu":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					return m.reply(kartuGrup(m.chat, db, m.metadata));
				}
				break;
			case "grupaktivitas":
				{
					const entri = aktivitasGrup(global.db?.hit);
					return kirimRespons(m, { judul: "Aktivitas grup", isi: entri.map(([k, v], i) => `${i + 1}. .${k}: ${v}x`).join("\n") || formatKosong() });
				}
				break;
			case "lapordetail":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const q = (text || "").trim().toLowerCase();
					const list = (global.db?.laporan || []).filter((l) => l.chat === m.chat && (!q || String(l.alasan || "").toLowerCase().includes(q) || String(l.dari || "").toLowerCase().includes(q)));
					return kirimRespons(m, { judul: "Detail laporan", isi: list.length ? list.map((l) => `- ${new Date(l.waktu).toISOString()}: @${String(l.dari || "").split("@")[0]} - ${l.alasan}`).join("\n") : formatKosong() });
				}
				break;
			case "stikerteks":
				{
					const s = spesifikasiStikerTeks(text);
					if (!s.teks) return m.reply("Contoh: .stikerteks halo dunia");
					return kirimRespons(m, { judul: "Stiker teks", isi: `*${s.teks}*`, catatan: `Warna ${s.warna}, format ${s.format}.` });
				}
				break;
			case "stikerkartu":
				{
					const s = spesifikasiStikerTeks(text || "Rynn", "krem");
					return kirimRespons(m, { judul: "Kartu stiker", isi: `*${s.teks}*`, catatan: "Dibuat dari identitas Rynn." });
				}
				break;
			case "stickergambar":
				{
					const s = spesifikasiFotoProfil(text || "Rynn");
					return kirimRespons(m, { judul: "Stiker gambar", isi: s.teks, catatan: `${s.ukuran}x${s.ukuran}, format ${s.format}.` });
				}
				break;
			case "fotoprofil":
				{
					const s = spesifikasiFotoProfil(text || "Rynn");
					return kirimRespons(m, { judul: "Foto profil", isi: `*${s.nama}*\n${s.teks}`, catatan: "Gambar dibuat dari template lokal." });
				}
				break;
			case "kartuundangan":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					return mt ? m.reply(kartuUndangan(mt[1], mt[2])) : m.reply("Contoh: .kartuundangan Rapat 2026-12-01");
				}
				break;
			case "posterucapan":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					return mt ? m.reply(posterUcapan(mt[1], mt[2])) : m.reply("Contoh: .posterucapan Ani Selamat");
				}
				break;
			case "diagramlingkaran":
				{
					const baris = diagramLingkaran((text || "").trim().split(/[\s,]+/).map(Number));
					return kirimRespons(m, { judul: "Diagram", isi: baris.join("\n") || formatKosong(".diagramlingkaran 4 6 2") });
				}
				break;
			case "tabeldua":
				{
					const baris = tabelDua((text || "").trim().split("\n"));
					return kirimRespons(m, { judul: "Tabel", isi: baris.join("\n") || formatKosong(".tabeldua a=1\\nb=2") });
				}
				break;
			case "aimemori":
				{
					const a = (text || "").trim().toLowerCase();
					if (!["on", "off"].includes(a)) return m.reply("Ketik .aimemori on atau off");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const aktif = aturMemori(db.users[m.sender], a === "on");
					return m.reply(`Memori AI ${aktif ? "aktif" : "nonaktif"}. Data hanya disimpan lokal.`);
				}
				break;
			case "ailupa":
				{
					const u = db.users[m.sender] || {};
					hapusMemori(u);
					return m.reply("Memori AI dihapus.");
				}
				break;
			case "aipersona":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const p = aturPersona(db.users[m.sender], text);
					return p ? m.reply(`Persona AI: *${p}*.`) : m.reply("Persona: netral, guru, teman, editor.");
				}
				break;
			case "aidebat":
			case "airangkum":
			case "aireviewkode":
			case "airencana":
				{
					const isi = (text || "").trim();
					if (!isi) return m.reply(`Contoh: .${command} ${command === "aireviewkode" ? "kode di sini" : "topik"}`);
					const prompt = {
						aidebat: promptDebat(isi),
						airangkum: promptRangkum(isi),
						aireviewkode: promptReviewKode(isi),
						airencana: promptRencana(isi),
					}[command];
					try {
						const hasil = await fetchApi("/ai/chat2", { query: `${personaPrompt(db.users[m.sender]?.aiPersona)}\n\n${prompt}` });
						const jawaban = String(hasil?.result?.message || hasil?.result || "Tidak ada jawaban.").slice(0, 3500);
						if (!db.users[m.sender]) db.users[m.sender] = {};
						db.users[m.sender].aiTerpakai = (db.users[m.sender].aiTerpakai || 0) + 1;
						if (db.users[m.sender].aiMemori) tambahMemori(db.users[m.sender], isi);
						return m.reply(jawaban);
					} catch {
						return m.reply("Fitur AI sedang bermasalah.");
					}
				}
				break;
			case "aibatas":
				{
					const u = db.users[m.sender] || {};
					const b = batasAi(u.aiTerpakai || 0);
					return kirimRespons(m, { judul: "Batas AI", isi: `- Terpakai: ${b.terpakai}\n- Batas: ${b.batas}\n- Sisa: ${b.sisa}`, catatan: "Batas harian simulasi." });
				}
				break;
			case "relaystatus":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const s = relayStatus(process.env.DASHBOARD_ENABLED === "true");
					return kirimRespons(m, { judul: "Relay dashboard", isi: s.keterangan });
				}
				break;
			case "deploystatus":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const d = deployStatus(require("./package.json"));
					return kirimRespons(m, { judul: "Deploy", isi: `- Nama: ${d.nama}\n- Versi terpasang: ${d.versi}` });
				}
				break;
			case "backupverifikasi":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const berkas = daftarAman("./backup");
					const hasil = verifikasiBackup(berkas.slice(0, 10).map((n) => path.join("./backup", n)), fs);
					return kirimRespons(m, { judul: "Verifikasi backup", isi: hasil.map((h) => `- ${path.basename(h.nama)}: ${h.ada ? "ada" : "tidak ada"}`).join("\n") || formatKosong() });
				}
				break;
			case "restorediff":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const d = restoreDiff(text, db);
					return kirimRespons(m, { judul: "Pratinjau restore", isi: `- Berkas: ${d.berkas}\n- User saat ini: ${d.userSaatIni}\n- ${d.keterangan}` });
				}
				break;
			case "sesilist":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const list = sesiList(fs.existsSync("./rynn-session") ? fs.readdirSync("./rynn-session") : []);
					return kirimRespons(m, { judul: "Sesi lokal", isi: list.join("\n") || formatKosong() });
				}
				break;
			case "databasemigrasi":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const info = migrasiInfo(db);
					db.version = info.versiSesudah;
					return m.reply(`Versi state naik dari ${info.versiSebelum} ke ${info.versiSesudah}.`);
				}
				break;
			case "databaseinfopenuh":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const d = databaseInfoPenuh(db, global);
					return kirimRespons(m, { judul: "Database", isi: `- Tipe: ${d.tipe}\n- User: ${d.user}\n- Grup: ${d.grup}\n- Perintah: ${d.perintah}`, catatan: "Kredensial tidak ditampilkan." });
				}
				break;
			case "logekspor":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return kirimRespons(m, { judul: "Log", isi: logEkspor(bacaAudit(db)).join("\n") || formatKosong() });
				}
				break;
			case "ratelimit":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const n = aturRateLimit((text || "").trim());
					if (n === null) return m.reply("Contoh: .ratelimit 3 (0 untuk matikan)");
					global.rateLimitDetik = n;
					return m.reply(`Rate limit ${n} detik disimpan.`);
				}
				break;
			case "domainblokir":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if (!global.domainBlokir) global.domainBlokir = [];
					const list = blokirDomain(global.domainBlokir, text);
					return list ? m.reply(`Domain *${text}* diblokir.`) : m.reply("Domain sudah ada atau tidak valid.");
				}
				break;
			case "maintenancealasan":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					global.maintenanceWhy = alasanMaintenance(text);
					return m.reply("Alasan maintenance disimpan.");
				}
				break;
			case "auditekspor":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const list = auditEkspor(bacaAudit(db));
					return kirimRespons(m, { judul: "Ekspor audit", isi: list.map((a) => `- ${a.waktu}: ${a.aksi}`).join("\n") || formatKosong() });
				}
				break;
			case "privasi":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "ringkas").toLowerCase();
					if (sub === "ekspor") return m.reply(formatEkspor(eksporData(u)));
					if (sub === "hapus") {
						if (mt[1] !== "confirm") return m.reply("Ketik .privasi hapus confirm untuk menghapus data pribadi kamu.");
						hapusDataPribadi(u, db, m.sender);
						return m.reply("Data pribadi dihapus dari bot.");
					}
					if (sub === "opsi") {
						if (!["riwayat", "memori"].includes(mt[1]) || !["on", "off"].includes(mt[2])) return m.reply("Ketik .privasi opsi riwayat on|off atau memori on|off");
						aturOpsi(u, mt[1], mt[2] === "on");
						return m.reply(`Opsi ${mt[1]} ${mt[2]}.`);
					}
					if (sub === "limit") return m.reply(`Batas data: ${batasData(u.batasData || 50)} entri.`);
					const r = ringkasanData(u);
					return kirimRespons(m, { judul: "Data kamu", isi: `- Riwayat: ${r.riwayat}\n- Catatan: ${r.catatan}\n- Koleksi: ${r.koleksi}\n- Memori AI: ${r.memoriAi}\n- Target: ${r.target}`, footer: ".privasi ekspor | .privasi hapus confirm" });
				}
				break;
			case "auditaku":
				{
					const r = (db.users[m.sender] || {}).riwayat || [];
					return kirimRespons(m, { judul: "Aktivitas kamu", isi: r.slice(-10).reverse().map((c, i) => `${i + 1}. .${c}`).join("\n") || formatKosong() });
				}
				break;
			case "tiket":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "bantuan").toLowerCase();
					if (sub === "buat") {
						const t = tiketBuat(db, m.sender, mt.slice(1).join(" "));
						return t ? m.reply(`Tiket *${t.id}* dibuat.`) : m.reply("Contoh: .tiket buat tidak bisa transfer");
					}
					if (sub === "status") {
						const t = tiketAmbil(db, mt[1]);
						return t && (t.dari === m.sender || isCreator) ? m.reply(`Tiket ${t.id}: *${t.status}*. Balasan: ${t.balasan.length}`) : m.reply("Tiket tidak ditemukan.");
					}
					if (sub === "list") {
						const list = tiketMilik(db, m.sender);
						return kirimRespons(m, { judul: "Tiket kamu", isi: list.map((t) => `- ${t.id}: ${t.judul} (${t.status})`).join("\n") || formatKosong() });
					}
					if (sub === "balas") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const t = tiketBalas(tiketAmbil(db, mt[1]), mt.slice(2).join(" "));
						return t ? m.reply(`Balasan dikirim ke tiket ${t.id}.`) : m.reply("Tiket tidak ditemukan.");
					}
					if (sub === "tutup") {
						if (mt[2] !== "confirm") return m.reply("Ketik .tiket tutup <id> confirm");
						const ada = tiketAmbil(db, mt[1]);
						if (!ada || (ada.dari !== m.sender && !isCreator && !m.isAdmin)) return m.reply("Tiket tidak ditemukan atau bukan milik kamu.");
						const t = tiketTutup(ada);
						return m.reply(`Tiket ${t.id} ditutup.`);
					}
					return m.reply(".tiket buat <judul>\n.tiket status <id>\n.tiket list\n.tiket balas <id> <teks>\n.tiket tutup <id> confirm");
				}
				break;
			case "faq":
			case "faqcari":
			case "faqtambah":
				{
					if (command === "faqtambah") {
						if (!isCreator) return m.reply(global.mess.owner);
						const mt = (text || "").trim().split("|").map((s) => s.trim());
						if (mt.length !== 2) return m.reply("Contoh: .faqtambah apa itu Rynn | bot WhatsApp serbaguna");
						faqTambah(db, mt[0], mt[1]);
						return m.reply("FAQ ditambahkan.");
					}
					const hasil = command === "faqcari" ? faqCari(db, text) : (db.faq || []).slice(0, 8);
					return kirimRespons(m, { judul: "FAQ", isi: hasil.length ? hasil.map((f, i) => `${i + 1}. *${f.pertanyaan}*\n   ${f.jawaban}`).join("\n") : formatKosong() });
				}
				break;
			case "aset":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "simpan") {
						const daftar = asetSimpan(u, mt[1], mt.slice(2).join(" "));
						return daftar ? m.reply(`Aset *${mt[1]}* disimpan.`) : m.reply("Contoh: .aset simpan judul isi aset");
					}
					if (sub === "ambil") {
						const a = asetAmbil(u, mt[1]);
						return a ? m.reply(`*${a.nama}*\n\n${a.isi}`) : m.reply("Aset tidak ditemukan.");
					}
					if (sub === "hapus") {
						if (mt[2] !== "confirm") return m.reply("Ketik .aset hapus <nama> confirm");
						return asetHapus(u, mt[1]) ? m.reply("Aset dihapus.") : m.reply("Aset tidak ditemukan.");
					}
					if (sub === "tag") {
						const a = asetTag(u, mt[1], mt[2]);
						return a ? m.reply(`Tag *${mt[2]}* ditambahkan.`) : m.reply("Aset tidak ditemukan.");
					}
					if (sub === "cari") {
						const list = asetCari(u, mt[1]);
						return kirimRespons(m, { judul: "Aset ditemukan", isi: list.map((a) => `- ${a.nama}`).join("\n") || formatKosong() });
					}
					const list = Object.values(u.aset || {});
					return kirimRespons(m, { judul: "Pustaka aset", isi: list.map((a) => `- ${a.nama}`).join("\n") || formatKosong() });
				}
				break;
			case "konten":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "simpan") {
						const d = kontenSimpan(db, m.chat, mt[1], mt.slice(2).join(" "));
						return d ? m.reply(`Konten *${mt[1]}* disimpan.`) : m.reply("Contoh: .konten simpan sapa halo everyone");
					}
					if (sub === "ambil") {
						const isi = kontenAmbil(db, m.chat, mt[1]);
						return isi ? m.reply(isi) : m.reply("Konten tidak ditemukan.");
					}
					const list = Object.keys(db.konten?.[m.chat] || {});
					return kirimRespons(m, { judul: "Bank konten", isi: list.map((n) => `- ${n}`).join("\n") || formatKosong() });
				}
				break;
			case "siaran":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "bantuan").toLowerCase();
					if (sub === "jadwal") {
						const s = siaranJadwalkan(db, m.chat, mt.slice(1).join(" "));
						return m.reply(`Siaran *${s.id}* dijadwalkan.`);
					}
					if (sub === "hapus") {
						if (mt[2] !== "confirm") return m.reply("Ketik .siaran hapus <id> confirm");
						return siaranHapus(db, mt[1]) ? m.reply("Siaran dibatalkan.") : m.reply("Siaran tidak ditemukan.");
					}
					if (sub === "kirim") {
						if (mt[2] !== "confirm") return m.reply("Ketik .siaran kirim <id> confirm");
						const s = siaranAmbil(db, mt[1]);
						if (!s) return m.reply("Siaran tidak ditemukan.");
						siaranTandaiKirim(s);
						await m.reply(s.teks);
						return;
					}
					if (sub === "riwayat") {
						const list = siaranRiwayat(db, m.chat);
						return kirimRespons(m, { judul: "Riwayat siaran", isi: list.map((s) => `- ${s.id}: ${s.teks.slice(0, 60)}`).join("\n") || formatKosong() });
					}
					const list = siaranList(db, m.chat);
					return kirimRespons(m, { judul: "Siaran tertunda", isi: list.map((s) => `- ${s.id}: ${s.teks.slice(0, 60)}`).join("\n") || formatKosong() });
				}
				break;
			case "laporanbulanan":
				{
					const l = laporanBulanan(global.db?.hit);
					return kirimRespons(m, { judul: `Laporan ${l.bulan}`, isi: `Total ${l.total} eksekusi.\n\n${l.entri.map(([k, v], i) => `${i + 1}. .${k}: ${v}x`).join("\n") || formatKosong()}` });
				}
				break;
			case "laporantren":
				{
					const t = trenPerintah(global.db?.hit, global.db?.hitSebelum);
					const baris = [
						"*Naik*",
						t.naik.map(([k, v]) => `- .${k}: ${v}x`).join("\n") || "- (tidak ada)",
						"",
						"*Turun*",
						t.turun.map(([k, v]) => `- .${k}: ${v}x`).join("\n") || "- (tidak ada)",
					];
					return m.reply(baris.join("\n"));
				}
				break;
			case "laporanbanding":
				{
					const sekarang = Number(global.db?.hit?.totalcmd || 0);
					const sebelum = Number(global.db?.hitSebelum?.totalcmd || 0);
					const selisih = sekarang - sebelum;
					return kirimRespons(m, { judul: "Perbandingan", isi: `- Sebelum: ${sebelum}\n- Sekarang: ${sekarang}\n- Selisih: ${selisih >= 0 ? "+" : ""}${selisih}` });
				}
				break;
			case "statistikanggota":
				{
					const list = statistikAnggota(db, m.metadata?.participants || []);
					const aktif = list.filter((x) => x.aktif).length;
					return kirimRespons(m, { judul: "Statistik anggota", isi: `- Total: ${list.length}\n- Tercatat di bot: ${aktif}` });
				}
				break;
			case "statistikjam":
				{
					const list = statistikJam(global.db?.hit);
					return kirimRespons(m, { judul: "Statistik jam", isi: list.map(([k, v]) => `- ${k.replace("jam", "")}:00 = ${v}x`).join("\n") || formatKosong("Belum ada data jam.") });
				}
				break;
			case "statistikrespons":
				{
					const hit = global.db?.hit || {};
					return kirimRespons(m, { judul: "Respons", isi: `- Perintah hari ini: ${hit.todaycmd || 0}\n- Total: ${hit.totalcmd || 0}`, catatan: "Waktu respons per pesan tidak disimpan, jadi tidak ditampilkan." });
				}
				break;
			case "trenperintah":
				{
					const q = (text || "").trim().toLowerCase();
					if (!q) return m.reply("Contoh: .trenperintah rumus");
					return m.reply(`.${q}: ${(global.db?.hit?.[q] || 0).toLocaleString("id-ID")}x.`);
				}
				break;
			case "ringkasanbot":
				{
					const r = ringkasanBot(db);
					return kirimRespons(m, { judul: "Ringkasan bot", isi: formatRingkasan(r) });
				}
				break;
			case "apresiasi":
				{
					const target = (m.mentionedJid || [])[0];
					if (!target) return m.reply("Tag anggota yang ingin diapresiasi.");
					const isi = (text || "").replace(/@\d+/, "").trim() || "Terima kasih sudah membantu.";
					apresiasiTambah(db, m.chat, m.sender, target, isi);
					return m.reply(`Apresiasi untuk @${target.split("@")[0]} tercatat.`);
				}
				break;
			case "apresiasipapan":
				{
					const list = apresiasiPapan(db, m.chat);
					return kirimRespons(m, { judul: "Papan apresiasi", isi: list.map((a) => `- @${String(a.target).split("@")[0]}: ${a.teks}`).join("\n") || formatKosong() });
				}
				break;
			case "salam":
				{
					const target = (m.mentionedJid || [])[0] || m.sender;
					return m.reply(salamPersonal(target));
				}
				break;
			case "tanyakomunitas":
				{
					const q = (text || "").trim();
					if (!q) return m.reply("Contoh: .tanyakomunitas ide apa yang kamu suka?");
					return m.reply(`*Tanya Komunitas*\n\n${q}\n\nBalas pesan ini dengan jawabanmu.`);
				}
				break;
			case "ceritalanjut":
				{
					const list = ceritaLanjut(db, m.chat, text);
					return list ? m.reply(`*Cerita Bersama (${list.length})*\n\n${list.slice(-3).join("\n")}`) : m.reply("Contoh: .ceritalanjut Hari itu langit cerah");
				}
				break;
			case "ceritabaca":
				{
					const list = ceritaBaca(db, m.chat);
					return kirimRespons(m, { judul: "Cerita bersama", isi: list.join("\n") || formatKosong() });
				}
				break;
			case "ceritareset":
				{
					if ((text || "").trim().toLowerCase() !== "confirm") return m.reply("Ketik .ceritareset confirm");
					ceritaReset(db, m.chat);
					return m.reply("Cerita diulang.");
				}
				break;
			case "rekomendasiperintah":
				{
					const semua = daftarCommand().filter((e) => !e.hidden).slice(0, 40);
					const list = rekomendasiPerintah(semua, (db.users[m.sender] || {}).riwayat || []);
					return kirimRespons(m, { judul: "Rekomendasi", isi: list.map((e) => `- .${e.command}`).join("\n") || formatKosong() });
				}
				break;
			case "namamerek":
				return m.reply(`Usulan nama: *${namaMerek(text)}*`);
			case "namagrup":
				return m.reply(`Usulan nama grup: *${namaGrup(text)}*`);
			case "caption":
				return m.reply(caption(text));
			case "hashtag":
				return m.reply(hashtag(text).join(" "));
			case "tagline":
				return m.reply(tagline(text).join("\n"));
			case "judulalternatif":
				return kirimRespons(m, { judul: "Judul alternatif", isi: judulAlternatif(text).join("\n") });
			case "dialogpendek":
				return m.reply(dialogPendek(text));
			case "suratpendek":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					return mt ? m.reply(suratPendek(mt[1], mt[2])) : m.reply("Contoh: .suratpendek Ani semangat belajar");
				}
				break;
			case "glosarium":
				{
					const daftar = (Array.isArray(SINONIM) ? SINONIM : Object.entries(SINONIM)).slice(0, 100).map((x) => Array.isArray(x) ? { kata: x[0], arti: x[1] } : { kata: x, arti: "" });
					const hasil = glosarium(daftar, text);
					return kirimRespons(m, { judul: "Glosarium", isi: hasil.map((x) => `- ${x.kata}: ${x.arti}`).join("\n") || formatKosong() });
				}
				break;
			case "peribahasaarti":
				{
					const hasil = artiPeribahasa(PERIBAHASA, text);
					return kirimRespons(m, { judul: "Arti peribahasa", isi: hasil.map((p) => `- ${p.pepatah}: ${p.makna || p.arti || ""}`).join("\n") || formatKosong() });
				}
				break;
			case "latihanhitung":
				{
					const s = latihanHitung(SOAL.matematika || []);
					if (!s) return m.reply("Belum ada soal.");
					global.quizBeruntunState = global.quizBeruntunState || new Map();
					global.quizBeruntunState.set(m.sender, { soal: s, benar: 0, at: Date.now() });
					return m.reply(`*Latihan*\n\n${s.q}\n\nJawab: .quizjawab <a-d>`);
				}
				break;
			case "teorisingkat":
				return m.reply(teoriSingkat(text));
			case "petarumus":
				{
					const list = petaRumus(semuaRumus(text), text);
					return kirimRespons(m, { judul: `Peta rumus ${text}`, isi: list.map((r) => `- ${r.nama}`).join("\n") || formatKosong() });
				}
				break;
			case "soalkategori":
				{
					const list = Object.keys(SOAL);
					return kirimRespons(m, { judul: "Kategori soal", isi: list.map((k) => `- ${k}: ${SOAL[k].length}`).join("\n") || formatKosong() });
				}
				break;
			case "hafalancek":
				{
					const benar = hafalanCek(db.users[m.sender]?.flashcard || [], text);
					return m.reply(benar ? "Kata ini ada dalam kartumu." : "Kata tidak ditemukan dalam kartumu.");
				}
				break;
			case "rangkumpelajaran":
				{
					const list = rangkumPelajaran(db.users[m.sender]?.catatan || {}, text);
					return kirimRespons(m, { judul: "Rangkuman", isi: list.join("\n") || formatKosong() });
				}
				break;
			case "portofolio":
				{
					const p = portofolio(db.users[m.sender] || {});
					return kirimRespons(m, { judul: "Portofolio simulasi", isi: `- Saldo: ${p.saldo.toLocaleString("id-ID")}\n- Tabungan: ${p.tabungan.toLocaleString("id-ID")}\n- Rekening: ${p.rekening.toLocaleString("id-ID")}\n- Investasi: ${p.investasi.toLocaleString("id-ID")}\n- Emas: ${p.emas.toLocaleString("id-ID")}\n- Saham: ${p.saham.toLocaleString("id-ID")}\n- Utang: ${p.utang.toLocaleString("id-ID")}`, catatan: "Simulasi bot." });
				}
				break;
			case "dividen":
				{
					const mt = (text || "").trim().split(/\s+/);
					const d = dividen(mt[0], mt[1]);
					return d ? kirimRespons(m, { judul: "Dividen simulasi", isi: `- Pokok: ${d.nominal.toLocaleString("id-ID")}\n- Persen: ${d.persen}\n- Hasil: ${d.hasil.toLocaleString("id-ID")}` }) : m.reply("Contoh: .dividen 100000 5");
				}
				break;
			case "obligasi":
				{
					const mt = (text || "").trim().split(/\s+/);
					const o = obligasi(mt[0], mt[1]);
					return o ? kirimRespons(m, { judul: "Obligasi simulasi", isi: `- Pokok: ${o.pokok.toLocaleString("id-ID")}\n- Hari: ${o.hari}\n- Bunga: ${o.bunga.toLocaleString("id-ID")}\n- Total: ${o.total.toLocaleString("id-ID")}` }) : m.reply("Contoh: .obligasi 100000 30");
				}
				break;
			case "emassimulasi":
				{
					const e = emasSimulasi((text || "").trim());
					return e ? kirimRespons(m, { judul: "Emas simulasi", isi: `- Gram: ${e.gram}\n- Nilai contoh: ${e.nilai.toLocaleString("id-ID")}`, catatan: "Harga contoh, bukan harga pasar." }) : m.reply("Contoh: .emassimulasi 2");
				}
				break;
			case "sahamsimulasi":
				{
					const mt = (text || "").trim().split(/\s+/);
					const s = sahamSimulasi(mt[0], mt[1]);
					return s ? kirimRespons(m, { judul: "Saham simulasi", isi: `- Nama: ${s.nama}\n- Lot: ${s.lot}\n- Nilai contoh: ${s.nilai.toLocaleString("id-ID")}`, catatan: "Harga contoh, bukan data bursa." }) : m.reply("Contoh: .sahamsimulasi contoh 2");
				}
				break;
			case "kurssimulasi":
				{
					const k = infoMataUang((text || "").trim(), MATAUANG || []);
					return k ? kirimRespons(m, { judul: "Mata uang", isi: `- Kode: ${k.kode}\n- Nama: ${k.nama}\n- Simbol: ${k.simbol || "-"}\n- Negara: ${k.negara || "-"}`, catatan: "Data lokal tidak memuat angka kurs resmi." }) : m.reply("Mata uang tidak ditemukan dalam data lokal.");
				}
				break;
			case "inflasisimulasi":
				{
					const mt = (text || "").trim().split(/\s+/);
					const i = inflasi(mt[0], mt[1]);
					return i ? kirimRespons(m, { judul: "Inflasi simulasi", isi: `- Awal: ${i.nominal.toLocaleString("id-ID")}\n- Persen: ${i.persen}\n- Daya beli setelah: ${i.setelah.toLocaleString("id-ID")}` }) : m.reply("Contoh: .inflasisimulasi 100000 5");
				}
				break;
			case "warisansimulasi":
				{
					const mt = (text || "").trim().split(/\s+/);
					const w = warisanSimulasi(mt[0], mt[1]);
					return w ? kirimRespons(m, { judul: "Warisan simulasi", isi: `- Total: ${w.total.toLocaleString("id-ID")}\n- Pembagian: ${w.pembagian}\n- Per bagian: ${w.perBagian.toLocaleString("id-ID")}\n- Sisa: ${w.sisa.toLocaleString("id-ID")}`, catatan: "Simulasi bot, bukan nasihat hukum." }) : m.reply("Contoh: .warisansimulasi 100000 4");
				}
				break;
			case "wordleturnamen":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const peserta = (m.mentionedJid || []).map((j) => "@" + j.split("@")[0]);
					const kejuaraan = buatKejuaraan({ nama: "Turnamen Wordle", mode: "single", peserta });
					if (!kejuaraan) return m.reply("Tag minimal dua peserta.");
					global.turnamenMesin = global.turnamenMesin || {};
					global.turnamenMesin[m.chat + ":wordle"] = kejuaraan;
					return m.reply(`Turnamen Wordle *${kejuaraan.id}* dibuat. Gunakan .turnamen2 mesin lanjut.`);
				}
				break;
			case "rankinggame":
				{
					const hit = global.db?.hit || {};
					const list = ["quiz", "wordle", "sudoku", "game2048", "turnamen", "tebaktokoh", "slot"]
						.map((g) => ({ g, v: hit[g] || 0 }))
						.sort((a, b) => b.v - a.v);
					return kirimRespons(m, { judul: "Ranking game", isi: list.map((x, i) => `${i + 1}. .${x.g}: ${x.v}x`).join("\n") });
				}
				break;
			case "gametim":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "bantuan").toLowerCase();
					if (sub === "buat") {
						const t = timBuat(db, m.chat, mt[1], m.sender);
						return t ? m.reply(`Tim *${t.nama}* dibuat.`) : m.reply("Nama tidak valid atau sudah ada.");
					}
					if (sub === "gabung") {
						const t = timGabung(db, mt.slice(1).join(" "), m.sender);
						return t ? m.reply(`Kamu masuk tim *${t.nama}*.`) : m.reply("Tim tidak ditemukan atau kamu sudah masuk.");
					}
					if (sub === "skor") {
						const t = skorTim(db, mt.slice(1).join(" "));
						return t ? m.reply(`Tim *${t.nama}*: ${t.skor} poin, ${t.anggota.length} anggota.`) : m.reply("Tim tidak ditemukan.");
					}
					return m.reply(".gametim buat <nama>\n.gametim gabung <nama>\n.gametim skor <nama>");
				}
				break;
			case "tebakurutan":
				{
					const jawaban = tebakUrutan();
					global.tebakUrutanState = global.tebakUrutanState || {};
					global.tebakUrutanState[m.sender] = { jawaban, at: Date.now() };
					return m.reply(`*Tebak Urutan*\n\nTebak 4 angka berurutan. Jawab: .tebakurutanjawab <angka>`);
				}
				break;
			case "tebakurutanjawab":
				{
					const s = global.tebakUrutanState?.[m.sender];
					if (!s) return m.reply("Belum ada tebak urutan aktif.");
					if (Date.now() - s.at > 300000) { delete global.tebakUrutanState[m.sender]; return m.reply("Tebak urutan kedaluwarsa. Ketik .tebakurutan"); }
					const benar = cocokanUrutan(text, s.jawaban);
					delete global.tebakUrutanState[m.sender];
					return benar ? m.reply("Benar!") : m.reply(`Salah. Urutannya ${s.jawaban.join("")}.`);
				}
				break;
			case "kartutaruhan":
				{
					const n = parseInt((text || "").trim(), 10);
					const u = db.users[m.sender] || {};
					const h = kartuTaruhan(u, n);
					return h ? m.reply(h.menang ? `Menang! Saldo ${h.saldo.toLocaleString("id-ID")}.` : `Kalah. Saldo ${h.saldo.toLocaleString("id-ID")}.`) : m.reply("Nominal tidak valid atau saldo kurang.");
				}
				break;
			case "papanskorharian":
				{
					const list = papanSkorHarian(global.db?.hit);
					return kirimRespons(m, { judul: "Papan skor", isi: list.map(([k, v], i) => `${i + 1}. .${k}: ${v}x`).join("\n") || formatKosong() });
				}
				break;
			case "bootinfo":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return m.reply(formatBoot(bootInfo()));
				}
				break;
			case "stateinfo":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const s = stateInfo(global.transferPending);
					return kirimRespons(m, { judul: "State", isi: `Transfer tertunda: ${s.jumlah}/${s.batas}.` });
				}
				break;
			case "cachebersih":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if ((text || "").trim().toLowerCase() !== "confirm") return m.reply("Ketik .cachebersih confirm");
					bersihkanCache();
					return m.reply("Cache dibersihkan.");
				}
				break;
			case "backupinkremental":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const b = backupInkremental(db);
					return kirimRespons(m, { judul: "Backup inkremental", isi: `- User berubah: ${b.user}\n- ${b.keterangan}` });
				}
				break;
			case "dbekspor":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if ((text || "").trim().toLowerCase() !== "confirm") return m.reply("Ketik .dbekspor confirm");
					const e = dbEkspor(db);
					return kirimRespons(m, { judul: "Ekspor database", isi: `- User: ${e.user}\n- Grup: ${e.grup}\n- Versi: ${e.versi}`, catatan: "Ringkasan dibuat, berkas tidak dikirim otomatis." });
				}
				break;
			case "dbimpor":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .dbimpor <berkas> confirm");
					const i = dbImprInfo(mt[0], db);
					return kirimRespons(m, { judul: "Pratinjau impor", isi: `- Berkas: ${i.berkas}\n- User saat ini: ${i.userSaatIni}\n- ${i.keterangan}` });
				}
				break;
			case "loglevel":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const l = logLevel(text);
					if (!l) return m.reply("Level: silent, error, warn, info, debug.");
					global.logLevelAktif = l;
					return m.reply(`Level log: *${l}*.`);
				}
				break;
			case "debugmode":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const a = (text || "").trim().toLowerCase();
					if (!["on", "off"].includes(a)) return m.reply("Ketik .debugmode on atau off");
					global.debugMode = a === "on";
					return m.reply(`Mode debug ${a}.`);
				}
				break;
			case "ketersediaan":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const k = ketersediaan(global);
					return kirimRespons(m, { judul: "Ketersediaan", isi: `- Dashboard: ${k.dashboard ? "aktif" : "mati"}\n- Relay: ${k.relay ? "aktif" : "mati"}\n- Database: ${k.database}` });
				}
				break;
			case "aturan":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const arg = (text || "").trim();
					const sub = (arg.split(/\s+/)[0] || "list").toLowerCase();
					const mt = arg.match(/^\S+\s+(\S+)\s+(\S+)\s+([\s\S]+)$/);
					if (sub === "buat") {
						if (!mt) return m.reply("Contoh: .aturan buat sapa halo balas halo juga");
						const d = aturanBuat(db, m.chat, mt[1], mt[2], mt[3]);
						return d ? m.reply(`Aturan *${mt[1]}* dibuat.`) : m.reply("Nama sudah ada atau tidak valid.");
					}
					if (sub === "hapus") {
						const nama = arg.split(/\s+/)[1];
						if (arg.split(/\s+/)[2] !== "confirm") return m.reply("Ketik .aturan hapus <nama> confirm");
						return aturanHapus(db, m.chat, nama) ? m.reply("Aturan dihapus.") : m.reply("Aturan tidak ditemukan.");
					}
					if (sub === "mati") {
						const mtMati = arg.split(/\s+/);
						return aturanMatikan(db, m.chat, mtMati[1], false) ? m.reply("Aturan dimatikan.") : m.reply("Aturan tidak ditemukan.");
					}
					if (sub === "uji") {
						const a = aturanUji(db, m.chat, arg.slice(4));
						return a ? m.reply(`Cocok: *${a.nama}* -> ${a.balasan}`) : m.reply("Tidak ada aturan yang cocok.");
					}
					const list = Object.values(db.aturan?.[m.chat] || {});
					return kirimRespons(m, { judul: "Aturan grup", isi: list.length ? list.map((a) => `- ${a.nama}: ${a.kata} -> ${a.balasan} (${a.aktif ? "aktif" : "mati"})`).join("\n") : formatKosong() });
				}
				break;
			case "filter":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const arg = (text || "").trim();
					const sub = arg.split(/\s+/)[0];
					const kata = arg.slice(sub.length).trim();
					if (sub === "kata") {
						const list = filterTambah(db, m.chat, kata);
						return list ? m.reply(`Kata *${kata}* difilter.`) : m.reply("Kata sudah ada atau tidak valid.");
					}
					if (sub === "hapus") {
						if (!kata.endsWith(" confirm")) return m.reply("Ketik .filter hapus <kata> confirm");
						return filterHapus(db, m.chat, kata.replace(/\s+confirm$/, "")) ? m.reply("Filter dihapus.") : m.reply("Filter tidak ditemukan.");
					}
					return kirimRespons(m, { judul: "Filter kata", isi: (db.filterKata?.[m.chat] || []).join("\n") || formatKosong() });
				}
				break;
			case "poin":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "top") {
						const list = papanPoin(db);
						return kirimRespons(m, { judul: "Papan poin", isi: list.map((x, i) => `${i + 1}. @${x.jid.split("@")[0]}: ${x.poin}`).join("\n") || formatKosong() });
					}
					if (mt[0] === "riwayat") {
						const log = (db.users[m.sender].poinLog || []).slice(-8).reverse();
						return kirimRespons(m, { judul: "Riwayat poin", isi: log.map((x) => `- ${x.jumlah > 0 ? "+" : ""}${x.jumlah} (${x.alasan})`).join("\n") || formatKosong() });
					}
					if (mt[0] === "tukar") {
						const h = hadiahTukar(db.users[m.sender], db, mt[1]);
						return h ? m.reply(`Hadiah *${h.nama}* ditukar.`) : m.reply("Hadiah tidak ada atau poin kurang.");
					}
					if (mt[0] === "transfer") {
						const target = (m.mentionedJid || [])[0];
						const jumlah = Number(mt.find((x) => /^\d+$/.test(x)));
						if (!target || mt.at(-1) !== "confirm" || !jumlah) return m.reply("Tag target, lalu .poin transfer @user <jumlah> confirm");
						return transferPoin(db, m.sender, target, jumlah) ? m.reply("Poin ditransfer.") : m.reply("Poin tidak mencukupi.");
					}
					const u = db.users[m.sender];
					return kirimRespons(m, { judul: "Poin kamu", isi: `*${u.poin || 0}* poin`, footer: ".poin top | .poin riwayat | .poin tukar <hadiah>" });
				}
				break;
			case "hadiahpoin":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "tambah") {
						const d = hadiahTambah(db, mt[1], mt[2]);
						return d ? m.reply(`Hadiah *${mt[1]}* ditambahkan.`) : m.reply("Contoh: .hadiahpoin tambah stiker 50");
					}
					if (mt[0] === "hapus") {
						const kunci = String(mt[1] || "").toLowerCase();
						if (mt[2] !== "confirm" || !db.hadiahPoin?.[kunci]) return m.reply("Hadiah tidak ditemukan atau konfirmasi salah.");
						delete db.hadiahPoin[kunci];
						return m.reply("Hadiah dihapus.");
					}
					const list = Object.values(db.hadiahPoin || {});
					return kirimRespons(m, { judul: "Hadiah", isi: list.map((h) => `- ${h.nama}: ${h.poin} poin`).join("\n") || formatKosong() });
				}
				break;
			case "toko":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "stok").toLowerCase();
					if (sub === "buka") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const t = tokoBuka(db, m.chat, mt.slice(1).join(" "));
						return t ? m.reply(`Toko *${t.nama}* dibuka.`) : m.reply("Nama sudah ada atau tidak valid.");
					}
					const toko = Object.values(db.toko || {}).find((t) => t.chat === m.chat);
					if (!toko) return m.reply("Belum ada toko di grup ini.");
					if (sub === "tambah") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						return tokoTambah(toko, mt[1], mt[2]) ? m.reply(`Barang *${mt[1]}* ditambahkan.`) : m.reply("Contoh: .toko tambah kopi 5000");
					}
					if (sub === "beli") {
						if (!db.users[m.sender]) db.users[m.sender] = {};
						const b = tokoBeli(toko, db.users[m.sender], mt[1]);
						return b ? m.reply(`*${b.nama}* dibeli.`) : m.reply("Barang habis atau saldo kurang.");
					}
					if (sub === "riwayat") {
						return kirimRespons(m, { judul: "Riwayat toko", isi: toko.riwayat.slice(-8).map((r) => `- ${r.barang}: ${r.harga}`).join("\n") || formatKosong() });
					}
					return kirimRespons(m, { judul: `Stok ${toko.nama}`, isi: Object.values(toko.barang).map((b) => `- ${b.nama}: ${b.harga} (${b.stok})`).join("\n") || formatKosong() });
				}
				break;
			case "lelang":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "lihat").toLowerCase();
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const l = lelangBuat(db, m.chat, mt.slice(1).join(" "));
						return m.reply(`Lelang *${l.barang}* dibuka.`);
					}
					const l = db.lelang?.[m.chat];
					if (!l) return m.reply("Belum ada lelang.");
					if (sub === "tawar") {
						return lelangTawar(l, m.sender, mt[1]) ? m.reply(`Tawaran ${Number(mt[1]).toLocaleString("id-ID")} dicatat.`) : m.reply("Nominal tidak valid atau lelang sudah tutup.");
					}
					if (sub === "tutup") {
						if (mt[1] !== "confirm") return m.reply("Ketik .lelang tutup confirm");
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const p = lelangTutup(l);
						return p ? m.reply(`Pemenang: @${p.jid.split("@")[0]} dengan ${p.nominal.toLocaleString("id-ID")}.`) : m.reply("Tidak ada tawaran.");
					}
					return kirimRespons(m, { judul: `Lelang ${l.barang}`, isi: `- Status: ${l.tutup ? "tutup" : "buka"}\n- Tawaran: ${l.tawaran.length}`, catatan: "Nominal adalah simulasi." });
				}
				break;
			case "reputasi":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "beri") {
						const target = (m.mentionedJid || [])[0] || mt[1];
						const hasil = reputasiBeri(db, m.sender, target, mt[2]);
						return hasil !== null ? m.reply(`Reputasi @${String(target).split("@")[0]} sekarang ${hasil}.`) : m.reply("Tidak bisa memberi reputasi lagi hari ini.");
					}
					if (mt[0] === "papan") {
						const list = papanReputasi(db);
						return kirimRespons(m, { judul: "Papan reputasi", isi: list.map(([jid, v], i) => `${i + 1}. @${jid.split("@")[0]}: ${v}`).join("\n") || formatKosong() });
					}
					if (mt[0] === "log") {
						const list = Object.values(db.reputasiLog || {}).slice(-8);
						return kirimRespons(m, { judul: "Log reputasi", isi: list.map((x) => `- @${String(x.ke).split("@")[0]}: ${x.jumlah > 0 ? "+" : ""}${x.jumlah}`).join("\n") || formatKosong() });
					}
					return kirimRespons(m, { judul: "Reputasi", isi: `*${db.reputasi?.[m.sender] || 0}*`, footer: ".reputasi beri @user <angka> | .reputasi papan" });
				}
				break;
			case "tepercaya":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const jid = (m.mentionedJid || [])[0] || mt[1];
					if (mt[0] === "tambah") return tepercayaTambah(db, jid) ? m.reply("Ditambahkan ke tepercaya.") : m.reply("Sudah terdaftar atau JID tidak valid.");
					if (mt[0] === "hapus") {
						if (mt[2] !== "confirm") return m.reply("Ketik .tepercaya hapus @user confirm");
						return tepercayaHapus(db, jid) ? m.reply("Dihapus dari tepercaya.") : m.reply("Tidak ditemukan.");
					}
					return kirimRespons(m, { judul: "Tepercaya", isi: (db.tepercaya || []).map((x, i) => `${i + 1}. @${x.split("@")[0]}`).join("\n") || formatKosong() });
				}
				break;
			case "kursus":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const langkah = mt.slice(2).join(" ").split("|").map((x) => x.trim()).filter(Boolean);
						const k = kursusBuat(db, mt[1], langkah);
						return k ? m.reply(`Kursus *${k.nama}* dibuat dengan ${k.langkah.length} langkah.`) : m.reply("Contoh: .kursus buat dasar awal | tengah | akhir");
					}
					if (sub === "list") {
						const list = Object.values(db.kursus || {});
						return kirimRespons(m, { judul: "Kursus", isi: list.map((k) => `- ${k.nama}: ${k.langkah.length} langkah`).join("\n") || formatKosong() });
					}
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					if (sub === "mulai") {
						const k = kursusMulai(u, db, mt.slice(1).join(" "));
						return k ? kirimRespons(m, { judul: `${k.judul} (${k.nomor}/${k.total})`, isi: k.langkah }) : m.reply("Kursus tidak ditemukan.");
					}
					if (sub === "lanjut") {
						const k = kursusLanjut(u, db);
						if (!k) return m.reply("Tidak ada kursus aktif.");
						if (k.selesai) return m.reply("Kursus selesai. Ketik .kursus sertifikat");
						return kirimRespons(m, { judul: `${k.judul} (${k.nomor}/${k.total})`, isi: k.langkah });
					}
					if (sub === "ulang") {
						const aktif = u.kursusAktif;
						const k = db.kursus?.[String(aktif?.nama || "").toLowerCase()];
						return k ? kirimRespons(m, { judul: `${k.nama} (${aktif.indek + 1}/${k.langkah.length})`, isi: k.langkah[aktif.indek] }) : m.reply("Tidak ada kursus aktif.");
					}
					if (sub === "selesai") return kursusSelesai(u) ? m.reply("Kursus diselesaikan.") : m.reply("Tidak ada kursus aktif.");
					if (sub === "sertifikat") {
						const terakhir = (u.kursusSelesai || []).slice(-1)[0];
						return terakhir ? m.reply(sertifikat(terakhir)) : m.reply("Belum ada kursus selesai.");
					}
					return m.reply(".kursus list | mulai <nama> | lanjut | ulang | selesai | sertifikat");
				}
				break;
			case "materi":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "buat") {
						if (!isCreator) return m.reply(global.mess.owner);
						const d = materiTambah(db, mt[1], mt.slice(2).join(" "));
						return d ? m.reply(`Materi *${mt[1]}* ditambahkan.`) : m.reply("Contoh: .materi buat aljabar dasar penjelasan");
					}
					const list = materiCari(db, arg);
					return kirimRespons(m, { judul: "Materi", isi: list.map((x) => `- *${x.judul}*: ${x.isi.slice(0, 80)}`).join("\n") || formatKosong() });
				}
				break;
			case "keputusan":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const k = keputusanBuat(db, m.chat, mt.slice(1).join(" "));
						return m.reply(`Keputusan *${k.id}* dibuat.`);
					}
					if (sub === "detail") {
						const k = keputusanAmbil(db, m.chat, mt[1]);
						return k ? kirimRespons(m, { judul: `${k.judul} (v${k.versi})`, isi: k.isi || "(belum ada isi)" }) : m.reply("Keputusan tidak ditemukan.");
					}
					if (sub === "ubah") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const k = keputusanUbah(keputusanAmbil(db, m.chat, mt[1]), mt.slice(2).join(" "));
						return k ? m.reply(`Keputusan diperbarui ke versi ${k.versi}.`) : m.reply("Keputusan tidak ditemukan.");
					}
					if (sub === "arsip") {
						if (mt[2] !== "confirm") return m.reply("Ketik .keputusan arsip <id> confirm");
						return keputusanArsip(keputusanAmbil(db, m.chat, mt[1])) ? m.reply("Keputusan diarsipkan.") : m.reply("Keputusan tidak ditemukan.");
					}
					const list = (db.keputusan?.[m.chat] || []).slice(-8);
					return kirimRespons(m, { judul: "Keputusan grup", isi: list.map((k) => `- ${k.id}: ${k.judul} (v${k.versi})`).join("\n") || formatKosong() });
				}
				break;
			case "notulenversi":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "simpan") {
						const list = simpanNotulenVersi(db, m.chat, mt.slice(1).join(" "));
						return m.reply(`Versi notulen *${list[list.length - 1].id}* disimpan.`);
					}
					if (mt[0] === "banding") {
						const h = notulenBanding(db, m.chat, mt[1], mt[2]);
						return h ? kirimRespons(m, { judul: "Perbandingan notulen", isi: `- ${h.satu.id}: ${h.satu.teks}\n- ${h.dua.id}: ${h.dua.teks}` }) : m.reply("Versi tidak ditemukan.");
					}
					const list = db.groups?.[m.chat]?.notulenVersi || [];
					return kirimRespons(m, { judul: "Versi notulen", isi: list.map((x) => `- ${x.id}: ${x.teks.slice(0, 60)}`).join("\n") || formatKosong() });
				}
				break;
			case "proyekgrup":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "papan").toLowerCase();
					if (sub === "buat") {
						const p = proyekGrupBuat(db, m.chat, mt.slice(1).join(" "), m.sender);
						return p ? m.reply(`Proyek *${p.nama}* dibuat.`) : m.reply("Nama sudah ada atau tidak valid.");
					}
					const p = Object.values(db.proyekGrup || {}).find((x) => x.chat === m.chat && !x.arsip);
					if (!p) return m.reply("Belum ada proyek grup.");
					if (sub === "tugas") {
						const t = proyekTugas(p, mt.slice(1).join(" "));
						return t ? m.reply(`Tugas *${t.id}* ditambahkan.`) : m.reply("Contoh: .proyekgrup tugas desain kartu");
					}
					if (sub === "ambil") {
						const t = proyekAmbil(p, mt[1], m.sender);
						return t ? m.reply(`Tugas ${t.id} kamu ambil.`) : m.reply("Tugas tidak tersedia.");
					}
					if (sub === "selesai") {
						if (mt[2] !== "confirm") return m.reply("Ketik .proyekgrup selesai <id> confirm");
						return proyekSelesai(p, mt[1]) ? m.reply("Tugas selesai.") : m.reply("Tugas tidak ditemukan.");
					}
					if (sub === "anggota") {
						return kirimRespons(m, { judul: "Anggota proyek", isi: p.anggota.map((x, i) => `${i + 1}. @${x.split("@")[0]}`).join("\n") });
					}
					if (sub === "arsip") {
						if (mt[1] !== "confirm") return m.reply("Ketik .proyekgrup arsip confirm");
						return proyekArsip(p) ? m.reply("Proyek diarsipkan.") : m.reply("Gagal.");
					}
					const baris = proyekPapan(p).map((g) => `*${g.status.toUpperCase()}*\n${g.tugas.map((t) => `- ${t.id}: ${t.tugas}`).join("\n") || "- (kosong)"}`);
					return m.reply(baris.join("\n\n"));
				}
				break;
			case "arsip":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "tanggal") {
						const list = arsipTanggal(u, mt[1]);
						return kirimRespons(m, { judul: `Arsip ${mt[1]}`, isi: list.join("\n") || formatKosong() });
					}
					if (mt[0] === "ringkas") {
						const r = arsipRingkas(u, Object.values(db.tiket || {}).filter((t) => t.dari === m.sender));
						return kirimRespons(m, { judul: "Arsip", isi: `- Catatan: ${r.catatan}\n- Aset: ${r.aset}\n- Tiket: ${r.tiket}\n- Riwayat: ${r.riwayat}` });
					}
					if (mt[0] === "ekspor") {
						const hasil = cariLintas(u, "", Object.values(db.tiket || {}).filter((t) => t.dari === m.sender));
						return kirimRespons(m, { judul: "Ekspor arsip", isi: hasil.join("\n") || formatKosong() });
					}
					const hasil = cariLintas(u, arg, Object.values(db.tiket || {}).filter((t) => t.dari === m.sender));
					return kirimRespons(m, { judul: `Cari ${arg}`, isi: hasil.join("\n") || formatKosong() });
				}
				break;
			case "cadangan":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "buat") {
						if (mt[1] !== "confirm") return m.reply("Ketik .cadangan buat confirm");
						const c = cadanganBuat(u);
						u.cadangan = u.cadangan || [];
						u.cadangan.push(c);
						u.cadangan = u.cadangan.slice(-10);
						return m.reply(`Cadangan *${c.id}* dibuat (${c.ukuran} karakter).`);
					}
					if (mt[0] === "pulihkan") {
						if (mt[2] !== "confirm") return m.reply("Ketik .cadangan pulihkan <id> confirm");
						return cadanganPulihkan(u, mt[1]) ? m.reply("Cadangan dipulihkan.") : m.reply("Cadangan tidak ditemukan atau rusak.");
					}
					if (mt[0] === "hapus") {
						if (mt[2] !== "confirm") return m.reply("Ketik .cadangan hapus <id> confirm");
						u.cadangan = (u.cadangan || []).filter((c) => c.id !== mt[1]);
						return m.reply("Cadangan dihapus.");
					}
					const list = cadanganList(u.cadangan);
					return kirimRespons(m, { judul: "Cadangan", isi: list.map((c) => `- ${c.id}: ${c.ukuran} karakter`).join("\n") || formatKosong() });
				}
				break;
			case "teksrapi":
				return m.reply(teksRapi(text));
			case "teksbalik":
				return m.reply(teksBalik(text));
			case "teksulang":
				{
					const mt = (text || "").trim().match(/^(\d+)\s+([\s\S]+)$/);
					const h = mt ? teksUlang(mt[2], mt[1]) : null;
					return h ? m.reply(h) : m.reply("Contoh: .teksulang 3 halo");
				}
				break;
			case "tekspotong":
				{
					const mt = (text || "").trim().match(/^(\d+)\s+([\s\S]+)$/);
					const h = mt ? teksPotong(mt[2], mt[1]) : null;
					return h !== null ? m.reply(h) : m.reply("Contoh: .tekspotong 5 halo dunia");
				}
				break;
			case "teksbersih":
				return m.reply(teksBersih(text));
			case "teksheksa":
				return m.reply(keHeksa(text));
			case "teksdariheksa":
				{
					const h = dariHeksa(text);
					return h !== null ? m.reply(h) : m.reply("Heksa tidak valid.");
				}
				break;
			case "teksbanding":
				{
					const mt = (text || "").trim().split("|").map((s) => s.trim());
					return mt.length === 2 ? m.reply(teksBanding(mt[0], mt[1])) : m.reply("Contoh: .teksbanding satu | dua");
				}
				break;
			case "kunci":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const mt = (text || "").trim().split(/\s+/);
					if (mt[0] === "perintah") {
						return kunciPerintah(u, mt[1], mt[2]) ? m.reply(`Perintah .${mt[1]} dikunci.`) : m.reply("Contoh: .kunci perintah transfer 1234 (PIN 4-6 digit)");
					}
					if (mt[0] === "lepas") {
						const pin = mt[2];
						if (!/^\d{4,6}$/.test(pin || "")) return m.reply("Ketik .kunci lepas <nama> <PIN>");
						return lepasKunci(u, mt[1], pin) ? m.reply("Kunci dilepas.") : m.reply("PIN salah atau kunci tidak ditemukan.");
					}
					const list = Object.keys(u.kunciPerintah || {});
					return kirimRespons(m, { judul: "Perintah terkunci", isi: list.map((k) => `- .${k}`).join("\n") || formatKosong() });
				}
				break;
			case "verifikasi":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const target = (m.mentionedJid || [])[0];
					if (!target) return m.reply("Tag pengguna untuk diverifikasi.");
					if (!db.terverifikasi) db.terverifikasi = [];
					if (!db.terverifikasi.includes(target)) db.terverifikasi.push(target);
					return m.reply(`@${target.split("@")[0]} terverifikasi.`);
				}
				break;
			case "akunaman":
				{
					const a = (text || "").trim().toLowerCase();
					if (!["on", "off"].includes(a)) return m.reply("Ketik .akunaman on atau off");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					db.users[m.sender].akunAman = a === "on";
					return m.reply(`Akun aman ${a}.`);
				}
				break;
			case "logkeamanan":
				return kirimRespons(m, { judul: "Log keamanan", isi: logKeamanan(db, "dilihat").slice(-8).map((x) => `- ${new Date(x.at).toISOString()}: ${x.aksi}`).join("\n") });
			case "stikerpaket":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "buat") return paketBuat(u, mt[1]) ? m.reply(`Paket *${mt[1]}* dibuat.`) : m.reply("Nama sudah ada atau tidak valid.");
					if (mt[0] === "tambah") {
						const p = paketTambah(u, mt[1], m.quoted?.text || mt.slice(2).join(" "));
						return p ? m.reply("Stiker ditambahkan ke paket.") : m.reply("Paket tidak ditemukan.");
					}
					if (mt[0] === "hapus") {
						if (mt[2] !== "confirm") return m.reply("Ketik .stikerpaket hapus <nama> confirm");
						return paketHapus(u, mt[1]) ? m.reply("Paket dihapus.") : m.reply("Paket tidak ditemukan.");
					}
					const list = Object.values(u.paketStiker || {});
					return kirimRespons(m, { judul: "Paket stiker", isi: list.map((p) => `- ${p.nama}: ${p.stiker.length} stiker`).join("\n") || formatKosong() });
				}
				break;
			case "wallpaperteks":
				return m.reply(wallpaperTeks(text));
			case "kartupos":
				{
					const mt = (text || "").trim().match(/^(\S+)\s+([\s\S]+)$/);
					return mt ? m.reply(kartuPos(mt[1], mt[2])) : m.reply("Contoh: .kartupos Ani semangat");
				}
				break;
			case "penggunaaktif":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const n = parseInt((text || "").trim(), 10) || 10;
					const list = penggunaAktif(db, n);
					return kirimRespons(m, { judul: "Pengguna aktif", isi: list.map((x, i) => `${i + 1}. @${x.jid.split("@")[0]}: ${x.skor}`).join("\n") || formatKosong() });
				}
				break;
			case "grupaktif":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const n = parseInt((text || "").trim(), 10) || 10;
					const list = grupAktif(db, n);
					return kirimRespons(m, { judul: "Grup aktif", isi: list.map((x, i) => `${i + 1}. ${x.jid}: ${x.skor}`).join("\n") || formatKosong() });
				}
				break;
			case "perintahmati":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const list = Object.entries(db.set || {}).flatMap(([chat, g]) => (g.disabled || []).map((c) => `${chat.slice(0, 8)}: .${c}`));
					return kirimRespons(m, { judul: "Perintah dimatikan", isi: list.slice(0, 20).join("\n") || formatKosong() });
				}
				break;
			case "cooldownlist":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const list = daftarCooldown(db);
					return kirimRespons(m, { judul: "Cooldown", isi: list.map(([k, v]) => `- .${k}: ${v} detik`).join("\n") || formatKosong() });
				}
				break;
			case "akseslist":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const list = daftarAkses(db);
					return kirimRespons(m, { judul: "Akses perintah", isi: list.map(([k, v]) => `- .${k}: ${v}`).join("\n") || formatKosong() });
				}
				break;
			case "whitelisttambah":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const jid = m.isGroup ? m.chat : (m.mentionedJid || [])[0] || m.sender;
					if (!set.whitelist) set.whitelist = [];
					if (!set.whitelist.includes(jid)) set.whitelist.push(jid);
					return m.reply("Whitelist ditambahkan.");
				}
				break;
			case "blacklistalasan":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					alasanBlacklist(db, mt[0], mt.slice(1).join(" "));
					return m.reply("Alasan blacklist disimpan.");
				}
				break;
			case "rollback":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .rollback <tag> confirm");
					const r = rollbackInfo(mt[0], db);
					return kirimRespons(m, { judul: "Pratinjau rollback", isi: `- Tag: ${r.tag}\n- User saat ini: ${r.user}\n- ${r.keterangan}` });
				}
				break;
			case "paket":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "status").toLowerCase();
					if (sub === "list") {
						return kirimRespons(m, { judul: "Paket layanan", isi: daftarPaket().map((p) => `- ${p.kunci}: limit ${p.batasLimit}, fitur ${p.fitur.join(", ")}`).join("\n"), catatan: "Simulasi bot, tanpa pembayaran nyata." });
					}
					if (sub === "pilih") {
						const p = pilihPaket(u, mt[1]);
						return p ? m.reply(`Paket *${p.nama}* dipilih.`) : m.reply("Paket tidak ditemukan.");
					}
					if (sub === "banding") {
						const b = bandingPaket(mt[1], mt[2]);
						return b ? kirimRespons(m, { judul: "Perbandingan paket", isi: `- ${b.satu.nama}: limit ${b.satu.batasLimit}\n- ${b.dua.nama}: limit ${b.dua.batasLimit}` }) : m.reply("Paket tidak ditemukan.");
					}
					if (sub === "riwayat") {
						return kirimRespons(m, { judul: "Riwayat paket", isi: (u.paketRiwayat || []).slice(-8).map((x) => `- ${x.paket}: ${new Date(x.at).toISOString()}`).join("\n") || formatKosong() });
					}
					const p = paketAktif(u);
					return kirimRespons(m, { judul: "Paket aktif", isi: `- Nama: ${p.nama}\n- Batas limit: ${batasPaket(u)}\n- Fitur: ${p.fitur.join(", ")}` });
				}
				break;
			case "undang":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "buat") {
						const u = undangBuat(db, m.sender);
						return m.reply(`Kode undangan: *${u.kode}*`);
					}
					if (sub === "pakai") {
						const u = undangPakai(db, mt[1], m.sender);
						return u ? m.reply(`Kode *${u.kode}* dipakai.`) : m.reply("Kode tidak valid, sudah dipakai, atau milik kamu sendiri.");
					}
					if (sub === "riwayat") {
						const list = undangMilik(db, m.sender);
						return kirimRespons(m, { judul: "Undangan kamu", isi: list.map((u) => `- ${u.kode}: ${u.dipakai.length} pemakaian`).join("\n") || formatKosong() });
					}
					const list = undangMilik(db, m.sender);
					return kirimRespons(m, { judul: "Kode undangan", isi: list.map((u) => `- ${u.kode}`).join("\n") || formatKosong() });
				}
				break;
			case "referral":
				{
					const arg = (text || "").trim().toLowerCase();
					const kode = undangMilik(db, m.sender)[0];
					if (arg === "papan") {
						return kirimRespons(m, { judul: "Papan referral", isi: referralPapan(db).map((x, i) => `${i + 1}. @${x.jid.split("@")[0]}: ${x.jumlah}`).join("\n") || formatKosong() });
					}
					if (arg === "hadiah") return m.reply(`Hadiah referral kamu: *${hadiahReferral(kode?.dipakai.length || 0)}*.`);
					return m.reply(kode ? `Kode referral kamu: *${kode.kode}*` : "Belum ada kode. Ketik .undang buat");
				}
				break;
			case "artikel":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "buat") {
						const a = artikelBuat(u, mt.slice(1).join(" "));
						return m.reply(`Artikel *${a.id}* dibuat.`);
					}
					if (sub === "isi") {
						const a = artikelIsi(artikelAmbil(u, mt[1]), mt.slice(2).join(" "));
						return a ? m.reply("Isi artikel disimpan.") : m.reply("Artikel tidak ditemukan.");
					}
					if (sub === "baca") {
						const a = artikelAmbil(u, mt[1]);
						return a ? kirimRespons(m, { judul: a.judul, isi: a.isi || "(belum ada isi)", catatan: `${a.bab.length} bab` }) : m.reply("Artikel tidak ditemukan.");
					}
					if (sub === "sunting") {
						const a = artikelIsi(artikelAmbil(u, mt[1]), mt.slice(2).join(" "));
						return a ? m.reply("Artikel diperbarui.") : m.reply("Artikel tidak ditemukan.");
					}
					if (sub === "hapus") {
						if (mt[2] !== "confirm") return m.reply("Ketik .artikel hapus <id> confirm");
						return artikelHapus(u, mt[1]) ? m.reply("Artikel dihapus.") : m.reply("Artikel tidak ditemukan.");
					}
					if (sub === "cari") {
						return kirimRespons(m, { judul: "Hasil artikel", isi: artikelCari(u, mt.slice(1).join(" ")).map((a) => `- ${a.id}: ${a.judul}`).join("\n") || formatKosong() });
					}
					return kirimRespons(m, { judul: "Artikel", isi: Object.values(u.artikel || {}).map((a) => `- ${a.id}: ${a.judul}`).join("\n") || formatKosong() });
				}
				break;
			case "seri":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "lanjut") {
						const a = artikelAmbil(u, mt[1]);
						const n = seriLanjut(a, mt.slice(2).join(" "));
						return n ? m.reply(`Bab ke-${n} ditambahkan.`) : m.reply("Artikel tidak ditemukan.");
					}
					return m.reply("Contoh: .seri lanjut <id> <bab>");
				}
				break;
			case "survei":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const s = surveiBuat(db, m.chat, mt.slice(1).join(" "));
						return m.reply(`Survei *${s.id}* dibuat.`);
					}
					if (sub === "pilih") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const s = surveiAmbil(db, mt[1]);
						if (!s || s.chat !== m.chat) return m.reply("Survei tidak ditemukan di grup ini.");
						const opsi = surveiOpsi(s, mt.slice(2).join(" "));
						return opsi ? m.reply("Opsi ditambahkan.") : m.reply("Survei tidak aktif atau opsi sudah ada.");
					}
					if (sub === "jawab") {
						const s = surveiAmbil(db, mt[1]);
						if (!s || s.chat !== m.chat) return m.reply("Survei tidak ditemukan di grup ini.");
						return surveiJawab(s, m.sender, mt.slice(2).join(" ")) ? m.reply("Jawaban tercatat.") : m.reply("Survei tidak aktif atau opsi tidak ada.");
					}
					if (sub === "hasil") {
						const s = surveiAmbil(db, mt[1]);
						if (!s || s.chat !== m.chat) return m.reply("Survei tidak ditemukan di grup ini.");
						const h = surveiHasil(s);
						return kirimRespons(m, { judul: "Hasil survei", isi: h.map(([o, v], i) => `${i + 1}. ${o}: ${v} suara`).join("\n") || formatKosong() });
					}
					if (sub === "tutup") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						if (mt[2] !== "confirm") return m.reply("Ketik .survei tutup <id> confirm");
						const s = surveiAmbil(db, mt[1]);
						if (!s || s.chat !== m.chat) return m.reply("Survei tidak ditemukan di grup ini.");
						return surveiTutup(s) ? m.reply("Survei ditutup.") : m.reply("Survei tidak ditemukan.");
					}
					return kirimRespons(m, { judul: "Survei aktif", isi: Object.values(db.survei || {}).filter((s) => s.chat === m.chat && !s.tutup).map((s) => `- ${s.id}: ${s.judul}`).join("\n") || formatKosong() });
				}
				break;
			case "koperasi":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "rekap").toLowerCase();
					if (sub === "buat") {
						const k = koperasiBuat(db, m.chat, mt.slice(1).join(" "));
						return k ? m.reply(`Koperasi *${k.nama}* dibuat.`) : m.reply("Nama sudah ada atau tidak valid.");
					}
					const koperasi = Object.values(db.koperasi || {}).find((k) => k.chat === m.chat && !k.tutup);
					if (!koperasi) return m.reply("Belum ada koperasi di grup ini.");
					if (sub === "gabung") return koperasiGabung(koperasi, m.sender) ? m.reply("Kamu bergabung.") : m.reply("Kamu sudah anggota.");
					if (sub === "setor") return koperasiSetor(koperasi, m.sender, mt[1]) ? m.reply("Setoran dicatat.") : m.reply("Nominal tidak valid atau kamu bukan anggota.");
					if (sub === "pinjam") {
						if (mt[2] !== "confirm") return m.reply("Ketik .koperasi pinjam <nominal> confirm");
						return koperasiPinjam(koperasi, m.sender, mt[1]) ? m.reply("Pinjaman dicatat.") : m.reply("Batas pinjaman tidak cukup.");
					}
					if (sub === "tutup") {
						if (mt[1] !== "confirm") return m.reply("Ketik .koperasi tutup confirm");
						return koperasiTutup(koperasi) ? m.reply("Koperasi ditutup.") : m.reply("Gagal.");
					}
					const list = koperasiRekap(koperasi);
					return kirimRespons(m, { judul: `Rekap ${koperasi.nama}`, isi: list.map((x) => `- @${x.jid.split("@")[0]}: simpan ${x.simpanan}, pinjam ${x.pinjaman}`).join("\n") || formatKosong(), catatan: "Simulasi bot." });
				}
				break;
			case "inventaris":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "list").toLowerCase();
					if (sub === "buat") return inventarisBuat(u, mt[1]) ? m.reply(`Inventaris *${mt[1]}* dibuat.`) : m.reply("Nama sudah ada atau tidak valid.");
					if (sub === "tambah") return inventarisTambah(u, mt[1], mt.slice(2).join(" ")) ? m.reply("Barang ditambahkan.") : m.reply("Inventaris tidak ditemukan.");
					if (sub === "pakai") {
						const b = inventarisPakai(u, mt[1]);
						return b ? m.reply(`*${b.nama}* dipakai.`) : m.reply("Barang tidak ditemukan.");
					}
					if (sub === "jual") {
						if (mt[2] !== "confirm") return m.reply("Ketik .inventaris jual <barang> confirm");
						const b = inventarisJual(u, mt[1]);
						if (!b) return m.reply("Barang tidak ditemukan.");
						if (!db.users[m.sender]) db.users[m.sender] = {};
						db.users[m.sender].money = (db.users[m.sender].money || 0) + 100;
						return m.reply(`${b.nama} dijual. Uang simulasi +100.`);
					}
					if (sub === "cari") {
						return kirimRespons(m, { judul: "Barang ditemukan", isi: inventarisCari(u, mt.slice(1).join(" ")).map((b) => `- ${b.nama}`).join("\n") || formatKosong() });
					}
					return kirimRespons(m, { judul: "Inventaris", isi: Object.values(u.inventaris || {}).map((k) => `- ${k.nama}: ${k.barang.length} barang`).join("\n") || formatKosong() });
				}
				break;
			case "avatar":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					if (mt[0] === "buat") return avatarBuat(u, mt[1]) ? m.reply(`Avatar *${mt[1]}* dibuat.`) : m.reply("Nama sudah ada atau tidak valid.");
					if (mt[0] === "pakai") {
						const a = avatarPakai(u, mt[1]);
						return a ? m.reply(`Avatar *${a.nama}* dipakai.`) : m.reply("Avatar tidak ditemukan.");
					}
					return kirimRespons(m, { judul: "Avatar", isi: Object.values(u.avatar || {}).map((a) => `- ${a.nama}`).join("\n") || formatKosong() });
				}
				break;
			case "papan":
				{
					const sub = (text || "").trim().toLowerCase().split(/\s+/)[0] || "umum";
					let list;
					if (sub === "poin") list = papanPoinV2(db);
					else if (sub === "kuis") list = papanKuis(db);
					else if (sub === "game") list = papanGame(db, global.db?.hit || {});
					else if (sub === "grup") list = papanGrup(db, m.chat);
					else if (sub === "kontribusi") list = papanKontribusi(db);
					else list = papanUmum(db);
					return kirimRespons(m, { judul: `Papan ${sub}`, isi: formatPapanV2(list) || formatKosong() });
				}
				break;
			case "pindah":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const mt = (text || "").trim().split(/\s+/);
					const sub = (mt[0] || "status").toLowerCase();
					if (sub === "ekspor") {
						if (mt[1] !== "confirm") return m.reply("Ketik .pindah ekspor confirm");
						const p = eksporPaket(u);
						simpanPaket(u, p);
						return m.reply(`Paket *${p.kode}* dibuat (${p.ukuran} karakter).`);
					}
					if (sub === "impor") {
						if (mt[2] !== "confirm") return m.reply("Ketik .pindah impor <kode> confirm");
						return imporPaket(u, ambilPaket(u, mt[1])) ? m.reply("Paket diimpor.") : m.reply("Paket tidak ditemukan atau rusak.");
					}
					if (sub === "banding") {
						const b = bandingPaketData(u, ambilPaket(u, mt[1]));
						return b ? kirimRespons(m, { judul: "Perbandingan", isi: `- Catatan lokal ${b.catatanLokal}, paket ${b.catatanPaket}\n- Aset lokal ${b.asetLokal}, paket ${b.asetPaket}` }) : m.reply("Paket tidak ditemukan.");
					}
					if (sub === "hapus") {
						if (mt[2] !== "confirm") return m.reply("Ketik .pindah hapus <kode> confirm");
						return hapusPaket(u, mt[1]) ? m.reply("Paket dihapus.") : m.reply("Paket tidak ditemukan.");
					}
					if (sub === "riwayat") return kirimRespons(m, { judul: "Riwayat paket", isi: (u.paketData || []).map((p) => `- ${p.kode}: ${p.ukuran} karakter`).join("\n") || formatKosong() });
					return m.reply(".pindah ekspor confirm | impor <kode> confirm | banding <kode> | hapus <kode> confirm | riwayat");
				}
				break;
			case "datasehat":
				{
					const arg = (text || "").trim().toLowerCase();
					const mt = arg.split(/\s+/);
					const sub = mt[0] || "cek";
					if (sub === "ukuran") {
						return kirimRespons(m, { judul: "Ukuran dataset", isi: Object.entries(ukuranDataset({ FAKTA, SOAL, PERIBAHASA, RESEP, HANGMAN_KATA, RUMUS: semuaRumus() })).map(([k, v]) => `- ${k}: ${v}`).join("\n") });
					}
					if (sub === "duplikat") {
						const hasil = duplikatDataset(datasetV16(mt[1]));
						return kirimRespons(m, { judul: "Duplikat", isi: hasil.join("\n") || "(tidak ada)" });
					}
					if (sub === "kosong") return kirimRespons(m, { judul: "Entri kosong", isi: String(kosongDataset(datasetV16(mt[1]))) });
					if (sub === "lapor") {
						const l = [cekDataset({ a: 1, b: 2 }, "FAKTA"), cekDataset({ c: 3 }, "SOAL")];
						return kirimRespons(m, { judul: "Laporan sehat", isi: laporanSehat(l).join("\n") });
					}
					if (sub === "perbaiki") {
						if (!isCreator) return m.reply(global.mess.owner);
						if (mt[2] !== "confirm") return m.reply("Ketik .datasehat perbaiki <nama> confirm");
						const hasil = perbaikiDuplikat(datasetV16(mt[1]));
						return m.reply(hasil ? `${hasil.dihapus} entri duplikat dihapus pada salinan data.` : "Data tidak tersedia.");
					}
					const l = [cekDataset({ a: 1 }, "FAKTA"), cekDataset({ b: 2 }, "SOAL")];
					return kirimRespons(m, { judul: "Cek dataset", isi: laporanSehat(l).join("\n") });
				}
				break;
			case "modedebot":
				{
					const arg = (text || "").trim().toLowerCase();
					const mt = arg.split(/\s+/);
					if (mt[0] === "list") return kirimRespons(m, { judul: "Mode bot", isi: daftarMode().map((m) => `- ${m}`).join("\n") });
					if (mt[0] === "pakai") {
						if (!isCreator) return m.reply(global.mess.owner);
						const mode = pakaiMode(global, mt[1]);
						return mode ? m.reply(`Mode *${mode.nama}* dipakai.`) : m.reply("Mode tidak ditemukan.");
					}
					const m2 = modeSekarang(global);
					return kirimRespons(m, { judul: "Mode aktif", isi: `- ${m2.nama}\n- Animasi: ${m2.animasi ? "aktif" : "mati"}\n- Typing: ${m2.typing ? "aktif" : "mati"}` });
				}
				break;
			case "fitur":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[0] === "flag") return flagFitur(db, mt[1]) ? m.reply(`Fitur *${mt[1]}* ditandai.`) : m.reply("Nama tidak valid.");
					if (mt[0] === "aktif") {
						if (!["on", "off"].includes(mt[2])) return m.reply("Ketik .fitur aktif <nama> on|off");
						return aturFitur(db, mt[1], mt[2] === "on") ? m.reply(`Fitur *${mt[1]}* ${mt[2]}.`) : m.reply("Fitur belum ditandai.");
					}
					if (mt[0] === "uji") return m.reply(aktifFitur(db, mt[1]) ? `Fitur *${mt[1]}* aktif.` : `Fitur *${mt[1]}* tidak aktif.`);
					return kirimRespons(m, { judul: "Penanda fitur", isi: Object.entries(db.featureFlag || {}).map(([k, v]) => `- ${k}: ${v ? "aktif" : "mati"}`).join("\n") || formatKosong() });
				}
				break;
			case "konstitusi":
				{
					if (!m.isGroup) return m.reply(global.mess.group);
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = (mt[0] || "baca").toLowerCase();
					if (sub === "buat") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						const k = konstitusiBuat(db, m.chat, mt.slice(1).join(" "));
						return m.reply(`Konstitusi *${k.id}* dibuat.`);
					}
					const k = Object.values(db.konstitusi || {}).find((x) => x.chat === m.chat);
					if (!k) return m.reply("Belum ada konstitusi di grup ini.");
					if (sub === "pasal") {
						if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
						return konstitusiPasal(k, mt.slice(1).join(" ")) ? m.reply(`Pasal ditambahkan, versi ${k.versi}.`) : m.reply("Gagal.");
					}
					if (sub === "versi") return m.reply(`Versi konstitusi: *${k.versi}*`);
					if (sub === "setuju") {
						if (mt[2] !== "confirm") return m.reply("Ketik .konstitusi setuju <id> confirm");
						return konstitusiSetuju(k, m.sender) ? m.reply("Persetujuan dicatat.") : m.reply("Kamu sudah menyetujui.");
					}
					return kirimRespons(m, { judul: k.judul, isi: k.pasal.map((p, i) => `${i + 1}. ${p}`).join("\n") || formatKosong(), footer: `Versi ${k.versi}, ${k.setuju.length} persetujuan` });
				}
				break;
			case "tandatangan":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (mt[0] === "cek") return cekTandaTangan(mt[1], mt.slice(2).join(" ")) ? m.reply("Tanda tangan cocok.") : m.reply("Tanda tangan tidak cocok.");
					return m.reply(`Kode: *${tandaTangan(mt.slice(1).join(" "))}*`);
				}
				break;
			case "ownerringkas":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return kirimRespons(m, {
						judul: "Alat owner",
						isi: ".backup | .restore | .maintenance | .broadcast | .logaudit\n.health | .metrik | .memori | .cacheinfo | .ratelimit\n.dbekspor | .dbimpor | .rollback | .akseslist | .fitur",
					});
				}
				break;
			case "aksesmatriks":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const list = aksesMatriks(db);
					return kirimRespons(m, { judul: "Matriks akses", isi: list.map((x) => `- .${x.perintah}: ${x.role}`).join("\n") || formatKosong() });
				}
				break;
			case "limitatur":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const n = aturLimit(db, (text || "").trim());
					if (n && global.limit) global.limit.free = n;
					return n ? m.reply(`Limit default *${n}*.`) : m.reply("Contoh: .limitatur 20 (1 sampai 10000)");
				}
				break;
			case "limitlihat":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					return kirimRespons(m, { judul: "Limit default", isi: `*${global.limit?.free || 10}*` });
				}
				break;
			case "statebersih":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					if ((text || "").trim().toLowerCase() !== "confirm") return m.reply("Ketik .statebersih confirm");
					return m.reply(`${bersihkanState(global)} entri state dibersihkan.`);
				}
				break;
			case "memoripeta":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const p = memoriPeta();
					return kirimRespons(m, { judul: "Memori", isi: `- Heap: ${p.heap} MB\n- Eksternal: ${p.external} MB\n- RSS: ${p.rss} MB` });
				}
				break;
			case "eventlog":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const list = eventLog(db);
					return kirimRespons(m, { judul: "Event", isi: list.map((x) => `- ${x.nama}: ${new Date(x.at).toISOString()}`).join("\n") || formatKosong() });
				}
				break;
			case "jadwalkerja":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					const j = jadwalKerja(global);
					return kirimRespons(m, { judul: "Tugas berjalan", isi: `- Sweeper: ${j.sweeper ? "aktif" : "mati"}\n- GC: ${j.gc ? "aktif" : "mati"}\n- Panel: ${j.panel ? "aktif" : "mati"}` });
				}
				break;
			case "petadopsi":
			case "petnama":
			case "petganti":
			case "petlihat":
			case "petmakan":
			case "petminum":
			case "petmain":
			case "petlatih":
			case "petistirahat":
			case "petmandi":
			case "petobat":
			case "petbarang":
			case "petbeli":
			case "petevolve":
			case "petbakat":
			case "petpapan":
			case "petprestasi":
			case "petturnamen":
			case "pettoko":
			case "petlepas":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const mt = (text || "").trim().split(/\s+/);
					const a = mt[0] || "lihat";
					if (command === "petadopsi") {
						return adopsi(u, mt[1]) ? m.reply(`Hewan *${mt[1]}* diadopsi. Beri nama lewat .petnama`) : m.reply(`Jenis: ${daftarJenis().join(", ")}`);
					}
					if (command === "petnama" || command === "petganti") return gantiNama(u, mt.slice(1).join(" ")) ? m.reply(`Nama hewan: *${u.pet.nama}*`) : m.reply("Belum ada hewan.");
					if (command === "petlihat") return u.pet ? m.reply(statusPet(u.pet)) : m.reply("Belum ada hewan. Ketik .petadopsi <jenis>");
					if (command === "petmakan") return beriMakan(u, mt[1]) ? m.reply("Hewan diberi makan.") : m.reply("Barang makanan tidak tersedia.");
					if (command === "petminum") return minum(u) ? m.reply("Hewan diberi minum.") : m.reply("Belum ada hewan.");
					if (command === "petmain") return main(u) ? m.reply("Hewan bermain dengan senang.") : m.reply("Energi tidak cukup.");
					if (command === "petlatih") return latih(u) ? m.reply("Latihan selesai, kemampuan bertambah.") : m.reply("Energi atau kenyang tidak cukup.");
					if (command === "petistirahat") return istirahat(u) ? m.reply("Hewan beristirahat.") : m.reply("Belum ada hewan.");
					if (command === "petmandi") return mandi(u) ? m.reply("Hewan sudah mandi.") : m.reply("Belum ada hewan.");
					if (command === "petobat") return obat(u, mt[1]) ? m.reply("Obat diberikan.") : m.reply("Obat tidak tersedia.");
					if (command === "petbarang") {
						const list = Object.entries({ ...(u.petBarang || {}), ...(u.pet?.barang || {}) });
						return kirimRespons(m, { judul: "Barang hewan", isi: list.map(([n, v]) => `- ${n}: ${v}`).join("\n") || formatKosong() });
					}
					if (command === "petbeli") return beliBarang(u, mt[1]) ? m.reply(`*${mt[1]}* dibeli.`) : m.reply("Barang tidak tersedia atau saldo kurang.");
					if (command === "petevolve") return evolusi(u) ? m.reply(`Hewan berevolusi ke tahap ${u.pet.evolusi}.`) : m.reply("Butuh level 5 dan evolusi belum maksimal.");
					if (command === "petbakat") return u.pet ? kirimRespons(m, { judul: "Bakat", isi: u.pet.bakat.join(", ") || "(belum ada)" }) : m.reply("Belum ada hewan.");
					if (command === "petpapan") {
						const list = papanPet(db);
						return kirimRespons(m, { judul: "Papan hewan", isi: list.map((x, i) => `${i + 1}. @${x.jid.split("@")[0]}: level ${x.level}`).join("\n") || formatKosong() });
					}
					if (command === "petprestasi") return kirimRespons(m, { judul: "Prestasi hewan", isi: `- Level: ${u.pet?.level || 0}\n- Aksi: ${u.pet?.aksi || 0}\n- Evolusi: ${u.pet?.evolusi || 0}` });
					if (command === "petturnamen") {
						const peserta = (m.mentionedJid || []).length ? (m.mentionedJid || []).map((j) => "@" + j.split("@")[0]) : ["@" + m.sender.split("@")[0], "bot"];
						const kejuaraan = buatKejuaraan({ nama: "Turnamen Hewan", mode: "single", peserta });
						global.turnamenMesin = global.turnamenMesin || {};
						global.turnamenMesin[m.chat + ":pet"] = kejuaraan;
						return m.reply(`Turnamen hewan *${kejuaraan.id}* dibuat.`);
					}
					if (command === "pettoko") return kirimRespons(m, { judul: "Toko hewan", isi: [...daftarMakanan(), ...daftarObat()].map((x) => `- ${x.nama}: ${x.harga}`).join("\n") });
					if (command === "petlepas") {
						if (mt[1] !== "confirm") return m.reply("Ketik .petlepas confirm");
						return lepasPet(u) ? m.reply("Hewan dilepas.") : m.reply("Belum ada hewan.");
					}
					return m.reply("Perintah hewan tidak dikenal.");
				}
				break;
			case "kebunbuat":
			case "kebunlihat":
			case "kebunbenih":
			case "kebunbelibenih":
			case "kebuntanam":
			case "kebunsiram":
			case "kebunpupuk":
			case "kebunpanen":
			case "kebunjual":
			case "kebungudang":
			case "kebunolah":
			case "kebunpasar":
			case "kebunluas":
			case "kebunperluas":
			case "kebunhama":
			case "kebuncuaca":
			case "kebunternak":
			case "kebunpanenternak":
			case "kebunpapan":
			case "kebunprestasi":
			case "kebunbongkar":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const mt = (text || "").trim().split(/\s+/);
					if (command === "kebunbuat") return buatKebun(u, mt.slice(1).join(" ")) ? m.reply(`Kebun *${mt.slice(1).join(" ")}* dibuat.`) : m.reply("Kebun sudah ada.");
					if (command === "kebunlihat") return u.kebun ? m.reply(statusKebun(u.kebun)) : m.reply("Belum ada kebun. Ketik .kebunbuat <nama>");
					if (command === "kebunbenih") return kirimRespons(m, { judul: "Benih", isi: daftarBenih().map((b) => `- ${b.nama}: ${b.harga}`).join("\n") });
					if (command === "kebunbelibenih") return beliBenih(u, mt[1], mt[2]) ? m.reply(`Benih *${mt[1]}* dibeli.`) : m.reply("Benih tidak ada atau saldo kurang.");
					if (command === "kebuntanam") return tanam(u, mt[1], mt[2]) ? m.reply(`*${mt[1]}* ditanam di lahan ${mt[2]}.`) : m.reply("Lahan tidak tersedia atau benih kurang.");
					if (command === "kebunsiram") return rawat(u, mt[1], "siram") ? m.reply("Tanaman disiram.") : m.reply("Lahan tidak valid.");
					if (command === "kebunpupuk") return rawat(u, mt[1], "pupuk") ? m.reply("Tanaman dipupuk.") : m.reply("Lahan tidak valid.");
					if (command === "kebunpanen") {
						const hasil = panen(u, mt[1]);
						return hasil ? m.reply(`Panen *${hasil}* masuk gudang.`) : m.reply("Tanaman belum siap.");
					}
					if (command === "kebunjual") {
						const total = jualHasil(u, mt[1], mt[2]);
						if (!total) return m.reply("Barang tidak ada di gudang.");
						ubahSaldo(db, m.sender, "money", total, "v22:kebun");
						return m.reply(`Hasil dijual. Uang +${total.toLocaleString("id-ID")}.`);
					}
					if (command === "kebungudang") return u.kebun ? kirimRespons(m, { judul: "Gudang", isi: Object.entries(u.kebun.gudang).map(([k, v]) => `- ${k}: ${v}`).join("\n") || formatKosong() }) : m.reply("Belum ada kebun.");
					if (command === "kebunolah") {
						const produk = olah(u, mt[1]);
						return produk ? m.reply(`Diolah menjadi *${produk}*.`) : m.reply("Butuh 2 bahan di gudang.");
					}
					if (command === "kebunpasar") return kirimRespons(m, { judul: "Pasar hasil tani", isi: daftarHasil().map((x) => `- ${x.nama}: ${x.harga}`).join("\n"), catatan: "Harga simulasi." });
					if (command === "kebunluas") return u.kebun ? m.reply(`Lahan: *${u.kebun.lahan.length}*`) : m.reply("Belum ada kebun.");
					if (command === "kebunperluas") {
						if (mt[1] !== "confirm") return m.reply("Ketik .kebunperluas confirm");
						const biaya = perluas(u);
						if (!biaya) return m.reply("Saldo kurang.");
						ubahSaldo(db, m.sender, "money", -biaya, "v22:kebun");
						return m.reply(`Lahan bertambah. Biaya ${biaya.toLocaleString("id-ID")}.`);
					}
					if (command === "kebunhama") {
						const h = cekHama(u, mt[1]);
						return h ? m.reply(h.ada ? "Ada hama. Siram lahan ini." : "Tanaman sehat.") : m.reply("Lahan tidak valid.");
					}
					if (command === "kebuncuaca") return m.reply("*Kondisi Kebun*\n\nCuaca dipilih dari pola lokal: cerah, berawan, atau hujan. Ini bukan ramalan nyata.");
					if (command === "kebunternak") return ternak(u, mt[1]) ? m.reply(`Ternak *${mt[1]}* ditambahkan.`) : m.reply("Jenis: ayam, kambing, sapi.");
					if (command === "kebunpanenternak") {
						const hasil = panenTernak(u);
						return hasil?.length ? m.reply(`Hasil ternak: ${hasil.join(", ")}.`) : m.reply("Belum ada ternak.");
					}
					if (command === "kebunpapan") {
						const list = papanKebun(db);
						return kirimRespons(m, { judul: "Papan petani", isi: list.map((x, i) => `${i + 1}. @${x.jid.split("@")[0]}: ${x.aksi} aksi`).join("\n") || formatKosong() });
					}
					if (command === "kebunprestasi") return kirimRespons(m, { judul: "Prestasi kebun", isi: `- Aksi: ${u.kebun?.aksi || 0}\n- Lahan: ${u.kebun?.lahan.length || 0}\n- Gudang: ${Object.keys(u.kebun?.gudang || {}).length}` });
					if (command === "kebunbongkar") {
						if (mt[1] !== "confirm") return m.reply("Ketik .kebunbongkar confirm");
						return bongkar(u) ? m.reply("Kebun dibongkar.") : m.reply("Belum ada kebun.");
					}
					return m.reply("Perintah kebun tidak dikenal.");
				}
				break;
			case "karirbidang":
			case "karirprofil":
			case "karirtugas":
			case "karirkerjakan":
			case "karirlembur":
			case "karirgaji":
			case "karirkeahlian":
			case "karirbelajar":
			case "karirsertifikat":
			case "karirpromosi":
			case "karirpindah":
			case "karirriwayat":
			case "karirprestasi":
			case "karirpapan":
			case "karirkantor":
			case "karirproyek":
			case "karirperforma":
			case "karirinsentif":
			case "karircuti":
			case "karirpensiun":
				{
					if (!db.users[m.sender]) db.users[m.sender] = {};
					const u = db.users[m.sender];
					const mt = (text || "").trim().split(/\s+/);
					if (command === "karirbidang") return pilihBidang(u, mt[1]) ? m.reply(`Bidang *${mt[1]}* dipilih.`) : m.reply(`Bidang: ${daftarBidang().join(", ")}`);
					if (command === "karirprofil") return u.karir ? m.reply(statusKarir(u.karir)) : m.reply("Belum ada karier. Ketik .karirbidang <bidang>");
					if (command === "karirtugas") {
						const t = ambilTugas(u);
						return t ? m.reply(`Tugas *${t.id}*: ${t.nama}. Kerjakan lewat .karirkerjakan ${t.id}`) : m.reply("Tugas penuh atau sedang cuti.");
					}
					if (command === "karirkerjakan") return kerjakan(u, mt[1]) ? m.reply(`Tugas selesai. Kinerja ${u.karir.kinerja}.`) : m.reply("Tugas tidak ditemukan.");
					if (command === "karirlembur") {
						const bonus = lembur(u);
						if (!bonus) return m.reply("Kinerja tidak cukup.");
						ubahSaldo(db, m.sender, "money", bonus, "v22:lembur");
						return m.reply(`Lembur selesai. Uang +${bonus.toLocaleString("id-ID")}.`);
					}
					if (command === "karirgaji") {
						const gaji = ambilGaji(u);
						if (!gaji) return m.reply("Belum ada karier atau sedang cuti.");
						ubahSaldo(db, m.sender, "money", gaji, "v22:gaji");
						return m.reply(`Gaji ${gaji.toLocaleString("id-ID")} diterima.`);
					}
					if (command === "karirkeahlian") return kirimRespons(m, { judul: "Keahlian", isi: daftarKeahlian().join("\n") });
					if (command === "karirbelajar") return belajar(u, mt[1]) ? m.reply(`Keahlian *${mt[1]}* naik.`) : m.reply("Keahlian tidak dikenal.");
					if (command === "karirsertifikat") return sertifikatKarir(u, mt[1]) ? m.reply(`Sertifikat *${mt[1]}* diperoleh.`) : m.reply("Butuh tingkat keahlian 3.");
					if (command === "karirpromosi") return promosi(u) ? m.reply(`Promosi ke *${u.karir.jabatan}*.`) : m.reply("Kinerja belum cukup.");
					if (command === "karirpindah") return pindahBidang(u, mt[1]) ? m.reply(`Pindah ke bidang *${mt[1]}*.`) : m.reply("Bidang tidak valid.");
					if (command === "karirriwayat") {
						const list = (u.karir?.riwayat || []).slice(-8).reverse();
						return kirimRespons(m, { judul: "Riwayat karier", isi: list.map((x) => `- ${x.jabatan}`).join("\n") || formatKosong() });
					}
					if (command === "karirprestasi") return kirimRespons(m, { judul: "Prestasi karier", isi: `- Jabatan: ${u.karir?.jabatan || "-"}\n- Kinerja: ${u.karir?.kinerja || 0}\n- Sertifikat: ${Object.keys(u.karir?.keahlian || {}).filter((k) => k.includes(":")).length}` });
					if (command === "karirpapan") {
						const list = papanKarir(db);
						return kirimRespons(m, { judul: "Papan karier", isi: list.map((x, i) => `${i + 1}. @${x.jid.split("@")[0]}: ${x.jabatan} (${x.kinerja})`).join("\n") || formatKosong() });
					}
					if (command === "karirkantor") return kirimRespons(m, { judul: "Rekan kerja", isi: `- Bidang: ${u.karir?.bidang || "-"}\n- Total rekan: ${Object.values(db.users || {}).filter((x) => x.karir?.bidang === u.karir?.bidang).length}` });
					if (command === "karirproyek") {
						const list = (u.karir?.tugas || []).map((t) => `${t.selesai ? "[v]" : "[ ]"} ${t.id} ${t.tugas || t.nama}`);
						return kirimRespons(m, { judul: "Proyek kerja", isi: list.join("\n") || formatKosong() });
					}
					if (command === "karirperforma") return kirimRespons(m, { judul: "Performa", isi: `- Kinerja: ${u.karir?.kinerja || 0}\n- Tugas selesai: ${(u.karir?.tugas || []).filter((t) => t.selesai).length}\n- Kualifikasi promosi: ${(u.karir?.kinerja || 0) >= 20 ? "terpenuhi" : "belum"}` });
					if (command === "karirinsentif") {
						if ((u.karir?.kinerja || 0) < 30) return m.reply("Kinerja belum cukup untuk insentif.");
						u.karir.kinerja -= 30;
						ubahSaldo(db, m.sender, "money", 25, "v22:insentif");
						return m.reply("Insentif 25 diterima.");
					}
					if (command === "karircuti") {
						if (mt[1] !== "confirm") return m.reply("Ketik .karircuti confirm");
						if (!u.karir) return m.reply("Belum ada karier.");
						return cuti(u, !u.karir.cuti) ? m.reply(u.karir.cuti ? "Cuti diambil." : "Sudah kembali bekerja.") : m.reply("Gagal mengubah status cuti.");
					}
					if (command === "karirpensiun") {
						if (mt[1] !== "confirm") return m.reply("Ketik .karirpensiun confirm");
						return pensiun(u) ? m.reply("Karier diakhiri.") : m.reply("Belum ada karier.");
					}
					return m.reply("Perintah karier tidak dikenal.");
				}
				break;
			case "pengumumanbuat":
			case "pengumumanisi":
			case "pengumumankategori":
			case "pengumumantarget":
			case "pengumumanterbitkan":
			case "pengumumanlist":
			case "pengumumanbaca":
			case "pengumumansunting":
			case "pengumumansematkan":
			case "pengumumantutup":
			case "pengumumanarsip":
			case "pengumumantemplat":
				{
					const mt = (text || "").trim().split(/\s+/);
					const ownerCmd = command.startsWith("pengumuman");
					if (ownerCmd && !isCreator) return m.reply(global.mess.owner);
					if (command === "pengumumanbuat") {
						const p = buatPengumuman(db, mt.slice(1).join(" "));
						return m.reply(`Pengumuman *${p.id}* dibuat.`);
					}
					if (command === "pengumumanisi") return isiPengumuman(db, mt[1], mt.slice(2).join(" ")) ? m.reply("Isi disimpan.") : m.reply("Pengumuman tidak ditemukan.");
					if (command === "pengumumankategori") return aturJenis(db, mt[1], mt[2]) ? m.reply(`Jenis: *${mt[2]}*`) : m.reply("Jenis: info, acara, peringatan, pemeliharaan.");
					if (command === "pengumumantarget") return aturTarget(db, mt[1], mt[2], mt.slice(3).join(" ")) ? m.reply(`Target: *${mt[2]}*`) : m.reply("Target: semua, grup, role.");
					if (command === "pengumumanterbitkan") {
						if (mt[2] !== "confirm") return m.reply("Ketik .pengumumanterbitkan <id> confirm");
						const p = ambilPengumuman(db, mt[1]);
						if (!p || !p.isi) return m.reply("Pengumuman tidak ditemukan atau isi kosong.");
						let penerima = Object.keys(db.users || {});
						if (p.target === "grup" && p.nilai) penerima = penerima.filter((jid) => jid === p.nilai || jid.startsWith(String(p.nilai).split("@")[0]));
						if (p.target === "role" && p.nilai) penerima = penerima.filter((jid) => db.users[jid]?.role === p.nilai || (p.nilai === "premium" && isPremium(jid)));
						const hasil = terbitkan(db, mt[1], penerima);
						return hasil ? m.reply(`Pengumuman *${p.judul}* diterbitkan ke ${penerima.length} kullanıcı.`.replace("kullanıcı", "pengguna")) : m.reply("Pengumuman sudah diterbitkan atau isi kosong.");
					}
					if (command === "pengumumanlist") return kirimRespons(m, { judul: "Pengumuman aktif", isi: ringkasPengumuman(daftarAktif(db)) });
					if (command === "pengumumanbaca") {
						const p = ambilPengumuman(db, mt[1]);
						return p ? kirimRespons(m, { judul: p.judul, isi: p.isi || "(kosong)", catatan: `${p.jenis}, ${p.status}` }) : m.reply("Pengumuman tidak ditemukan.");
					}
					if (command === "pengumumansunting") return isiPengumuman(db, mt[1], mt.slice(2).join(" ")) ? m.reply("Isi diperbarui.") : m.reply("Pengumuman tidak ditemukan.");
					if (command === "pengumumansematkan") {
						const p = sematkan(db, mt[1]);
						return p ? m.reply(`Penting: ${p.penting ? "ya" : "tidak"}.`) : m.reply("Pengumuman tidak ditemukan.");
					}
					if (command === "pengumumantutup") {
						if (mt[2] !== "confirm") return m.reply("Ketik .pengumumantutup <id> confirm");
						return tutup(db, mt[1]) ? m.reply("Pengumuman ditutup.") : m.reply("Pengumuman tidak ditemukan.");
					}
					if (command === "pengumumanarsip") {
						const list = Object.values(db.pengumuman || {}).filter((p) => p.status === "tutup").slice(-10);
						return kirimRespons(m, { judul: "Arsip pengumuman", isi: ringkasPengumuman(list) });
					}
					if (command === "pengumumantemplat") {
						if (mt[1] === "simpan") return simpanTemplat(db, mt[2], mt.slice(3).join(" ")) ? m.reply("Templat disimpan.") : m.reply("Nama tidak valid.");
						const t = ambilTemplat(db, mt[1]);
						return t ? m.reply(t) : m.reply("Templat tidak ditemukan.");
					}
					return m.reply("Perintah pengumuman tidak dikenal.");
				}
				break;
			case "inbox":
			case "inboxbaca":
			case "inboxhapus":
			case "inboxbersih":
				{
					const mt = (text || "").trim().split(/\s+/);
					const jid = m.sender;
					if (command === "inbox") {
						const list = inbox(db, jid);
						return kirimRespons(m, { judul: "Kotak masuk", isi: list.map((x) => `${x.dibaca ? "[v]" : "[ ]"} ${x.id}: ${x.judul}`).join("\n") || formatKosong(), catatan: `${belumDibaca(db, jid)} belum dibaca` });
					}
					if (command === "inboxbaca") {
						const p = bacaInbox(db, jid, mt[1]);
						return p ? kirimRespons(m, { judul: p.judul, isi: p.isi }) : m.reply("Pesan tidak ditemukan.");
					}
					if (command === "inboxhapus") {
						if (mt[2] !== "confirm") return m.reply("Ketik .inboxhapus <id> confirm");
						return hapusInbox(db, jid, mt[1]) ? m.reply("Pesan dihapus.") : m.reply("Pesan tidak ditemukan.");
					}
					if (command === "inboxbersih") {
						if (mt[1] !== "confirm") return m.reply("Ketik .inboxbersih confirm");
						return bersihInbox(db, jid) ? m.reply("Kotak masuk dikosongkan.") : m.reply("Kotak masuk sudah kosong.");
					}
					return m.reply("Perintah inbox tidak dikenal.");
				}
				break;

			case "dataindeks":
			case "datasumber":
			case "datavalidasi":
			case "datakelas":
			case "dataekspor":
			case "datacontoh":
			case "datacarilintas":
			case "datarekomendasi":
				{
					const arg = (text || "").trim();
					const mt = arg.split(/\s+/);
					const sub = command.replace("data", "").toLowerCase();
					if (sub === "rekomendasi") {
						const semua = datasetV23().sort((a, b) => b.jumlah - a.jumlah).slice(0, 8);
						return kirimRespons(m, { judul: "Dataset terbesar", isi: semua.map((d) => `- ${d.nama}: ${d.jumlah}`).join("\n") });
					}
					if (sub === "carilintas") {
						if (!arg) return m.reply("Contoh: .datacarilintas merapi");
						const hasil = cariDataset(arg);
						return kirimRespons(m, { judul: `Hasil ${arg}`, isi: hasil.slice(0, 10).map((x) => `- ${x.dataset}: ${JSON.stringify(x.entri).slice(0, 100)}`).join("\n") || formatKosong() });
					}
					if (sub === "sumber" || sub === "kelas" || sub === "validasi" || sub === "contoh" || sub === "ekspor") {
						const d = ambilDataset(arg);
						if (!d) return kirimRespons(m, { judul: "Dataset v23", isi: datasetV23().map((x) => `- ${x.nama}: ${x.jumlah} (${x.kelas})`).join("\n") });
						if (sub === "sumber") return m.reply(d.sumber);
						if (sub === "kelas") return m.reply(`Kelas data *${d.kelas}*`);
						if (sub === "ekspor") return kirimRespons(m, { judul: d.nama, isi: `${d.jumlah} entri, kelas ${d.kelas}` });
						const contoh = Array.isArray(d.data) ? d.data[0] : null;
						return m.reply(contoh ? JSON.stringify(contoh) : "(kosong)");
					}
					return kirimRespons(m, { judul: "Dataset v23", isi: datasetV23().map((x) => `- ${x.nama}: ${x.jumlah} (${x.kelas})`).join("\n"), footer: `Total ${totalV23()} entri` });
				}
				break;
			case "katakaharian":
				{
					const semua = ambilDataset("Sinonim")?.data || [];
					const k = semua[Math.floor(Date.now() / 86400000) % semua.length];
					return k ? m.reply(`*${k[0]}* = *${k[1]}*`) : m.reply("Belum ada data.");
				}
				break;
			case "tebakperibahasa":
			case "kuisbudaya":
			case "tebakgunung":
			case "tebakdanau":
			case "tebaksungai":
				{
					const peta = {
						tebakperibahasa: "Peribahasa", kuisbudaya: "Budaya",
						tebakgunung: "Gunung", tebakdanau: "Danau", tebaksungai: "Sungai",
					};
					const d = ambilDataset(peta[command]);
					const data = d?.data || [];
					if (!data.length) return m.reply("Belum ada data.");
					const pilih = data[Math.floor(Math.random() * data.length)];
					const isi = typeof pilih === "string" ? pilih : (pilih[0] || JSON.stringify(pilih));
					global.tebakDataV23 = global.tebakDataV23 || {};
					const kunciTebak = m.chat + ":" + m.sender;
					global.tebakDataV23[kunciTebak] = { jawaban: isi, at: Date.now() };
					return m.reply(`*${command}*\n\nPetunjuk: ${isi.split(" ").length} kata, diawali *${isi.slice(0, 1)}*.\\nJawab: .tebakdatajawab <teks>`);
				}
				break;
			case "tebakdatajawab":
				{
					const kunciTebak = m.chat + ":" + m.sender;
					const s = global.tebakDataV23?.[kunciTebak];
					if (!s) return m.reply("Belum ada tebakan aktif.");
					if (Date.now() - s.at > 300000) { delete global.tebakDataV23[kunciTebak]; return m.reply("Tebakan kedaluwarsa. Ketik perintah tebak lagi."); }
					const j = (text || "").trim().toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "");
					const benar = s.jawaban.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "");
					delete global.tebakDataV23[kunciTebak];
					return j === benar ? m.reply("Benar!") : m.reply(`Salah. Jawabannya *${s.jawaban}*.`);
				}
				break;
			case "resepacak":
				{
					const d = ambilDataset("Resep");
					const r = d?.data?.[Math.floor(Math.random() * d.data.length)];
					if (!r) return m.reply("Belum ada resep.");
					return kirimRespons(m, { judul: r.nama, isi: `- Bahan: ${r.bahan.join(", ")}`, catatan: r.langkah.join("\n") });
				}
				break;
			case "namabayicari":
				{
					const q = (text || "").trim().toLowerCase();
					const hasil = (ambilDataset("Nama bayi")?.data || []).filter((x) => x[0].toLowerCase().includes(q)).slice(0, 10);
					return kirimRespons(m, { judul: "Nama bayi", isi: hasil.map((x) => `- ${x[0]}`).join("\n") || formatKosong() });
				}
				break;
			case "sejarahhariini":
				{
					const d = ambilDataset("Hari bersejarah");
					const s = d?.data?.[Math.floor(Date.now() / 86400000) % d.data.length];
					return s ? m.reply(`*${s[0]}*\n\n${s[1]}`) : m.reply("Belum ada data.");
				}
				break;
			case "sinonimcari":
			case "antonimcari":
			case "singkatancari":
				{
					const peta = { sinonimcari: "Sinonim", antonimcari: "Antonim", singkatancari: "Singkatan" };
					const q = (text || "").trim().toLowerCase();
					const hasil = (ambilDataset(peta[command])?.data || []).filter((x) => JSON.stringify(x).toLowerCase().includes(q)).slice(0, 10);
					return kirimRespons(m, { judul: peta[command], isi: hasil.map((x) => x.length === 2 ? `- ${x[0]} = ${x[1]}` : `- ${x}`).join("\n") || formatKosong() });
				}
				break;
			case "flashcarddata":
				{
					const d = ambilDataset("Sinonim");
					const pasangan = d?.data?.[Math.floor(Math.random() * d.data.length)];
					if (!pasangan) return m.reply("Belum ada data.");
					if (!db.users[m.sender]) db.users[m.sender] = {};
					db.users[m.sender].flashcardAktif = { pertanyaan: pasangan[0], jawaban: pasangan[1] };
					return m.reply(`*Flashcard*\n\n${pasangan[0]}\n\nJawab: .flashcardjawab <jawaban>`);
				}
				break;
			case "tugasdaftar":
				{
					if (!isCreator) return m.reply(mess.owner);
					const daftar = penjadwal.daftarTugas(db);
					return kirimRespons(m, { judul: "Tugas internal", isi: daftar.map((t) => `- ${t.nama}: ${t.aktif ? (t.jeda ? "jeda" : "aktif") : "nonaktif"}, jalan ${t.jalan} kali`).join("\n") || formatKosong(), footer: ".tugasinfo <nama> | .tugasjalankan <nama> confirm" });
				}
				break;
			case "tugasinfo":
				{
					if (!isCreator) return m.reply(mess.owner);
					const t = penjadwal.ambilTugas(db, text);
					return t ? kirimRespons(m, { judul: `Tugas ${t.nama}`, isi: `- ${t.deskripsi}\n- Status: ${t.aktif ? (t.jeda ? "jeda" : "aktif") : "nonaktif"}\n- Jalan: ${t.jalan} kali\n- Terakhir: ${t.terakhir ? new Date(t.terakhir.at).toISOString() : "-"}` }) : m.reply("Tugas tidak ditemukan.");
				}
				break;
			case "tugasstatus":
				{
					if (!isCreator) return m.reply(mess.owner);
					const semua = penjadwal.daftarTugas(db);
					return kirimRespons(m, { judul: "Status tugas", isi: `- Aktif: ${semua.filter((t) => t.aktif && !t.jeda).length}\n- Jeda: ${semua.filter((t) => t.jeda).length}\n- Nonaktif: ${semua.filter((t) => !t.aktif).length}\n- Gagal: ${penjadwal.tugasGagal(db).length}` });
				}
				break;
			case "tugasjeda":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<nama>"} confirm`);
					const t = penjadwal.jedaTugas(db, mt[0], true);
					if (!t) return m.reply("Tugas tidak ditemukan.");
					otomasiCatat(db, "jeda-tugas", t.nama);
					return m.reply(`Tugas *${t.nama}* dijeda.`);
				}
				break;
			case "tugaslanjut":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<nama>"} confirm`);
					const t = penjadwal.jedaTugas(db, mt[0], false);
					if (!t) return m.reply("Tugas tidak ditemukan.");
					otomasiCatat(db, "lanjut-tugas", t.nama);
					return m.reply(`Tugas *${t.nama}* dilanjutkan.`);
				}
				break;
			case "tugasjalankan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<nama>"} confirm`);
					const t = penjadwal.catatJalan(db, mt[0], true);
					if (!t) return m.reply("Tugas tidak ditemukan.");
					otomasiCatat(db, "jalankan-tugas", t.nama);
					const selesai = jalankanEventNyata(db, "tugas_selesai", { sender: m.sender, chat: m.chat });
					for (const a of selesai) if (a.tipe === "balas") m.reply(a.teks);
					return m.reply(`Eksekusi tugas *${t.nama}* dicatat.`);
				}
				break;
			case "tugasnonaktif":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<nama>"} confirm`);
					const t = penjadwal.aktifTugas(db, mt[0], false);
					if (!t) return m.reply("Tugas tidak ditemukan.");
					otomasiCatat(db, "nonaktif-tugas", t.nama);
					return m.reply(`Tugas *${t.nama}* dinonaktifkan.`);
				}
				break;
			case "tugasaktifkan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const t = penjadwal.aktifTugas(db, text, true);
					if (!t) return m.reply("Tugas tidak ditemukan.");
					otomasiCatat(db, "aktifkan-tugas", t.nama);
					return m.reply(`Tugas *${t.nama}* diaktifkan.`);
				}
				break;
			case "tugasriwayat":
				{
					if (!isCreator) return m.reply(mess.owner);
					const r = penjadwal.riwayatTugas(db, text);
					return kirimRespons(m, { judul: `Riwayat ${text}`, isi: r.length ? r.map((x) => `- ${x.sukses ? "sukses" : "gagal"} ${new Date(x.at).toISOString()}`).join("\n") : formatKosong() });
				}
				break;
			case "tugasgagal":
				{
					if (!isCreator) return m.reply(mess.owner);
					const g = penjadwal.tugasGagal(db);
					return kirimRespons(m, { judul: "Tugas gagal", isi: g.map((t) => `- ${t.nama}: ${new Date(t.terakhir.at).toISOString()}`).join("\n") || formatKosong("Belum ada kegagalan.") });
				}
				break;
			case "eventlist":
				{
					if (!isCreator) return m.reply(mess.owner);
					const isi = eventOtomasi.daftarEvent().map((e) => `- ${e}: ${eventOtomasi.lihat(db, e).length} aksi`).join("\n");
					return kirimRespons(m, { judul: "Event otomasi", isi, footer: `.eventpasang <event> <aksi> [nilai] | aksi: ${eventOtomasi.daftarAksi().join(", ")}` });
				}
				break;
			case "eventpasang":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					const e = eventOtomasi.pasang(db, mt[0], mt[1], mt.slice(2).join(" "));
					if (!e) return m.reply(`Event: ${eventOtomasi.daftarEvent().join(", ")}\nAksi: ${eventOtomasi.daftarAksi().join(", ")}`);
					otomasiCatat(db, "pasang-event", `${e.event}/${e.aksi}`);
					return m.reply(`Aksi *${e.id}* dipasang pada ${e.event}.`);
				}
				break;
			case "eventlihat":
				{
					if (!isCreator) return m.reply(mess.owner);
					const list = eventOtomasi.lihat(db, text);
					return kirimRespons(m, { judul: `Event ${text}`, isi: list.map((x) => `- ${x.id}: ${x.aksi} ${x.nilai} (${x.aktif ? "aktif" : "mati"})`).join("\n") || formatKosong() });
				}
				break;
			case "eventlepas":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<id>"} confirm`);
					if (!eventOtomasi.lepas(db, mt[0])) return m.reply("Aksi tidak ditemukan.");
					otomasiCatat(db, "lepas-event", mt[0]);
					return m.reply(`Aksi *${mt[0]}* dilepas.`);
				}
				break;
			case "eventmatikan":
			case "eventhidupkan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const e = eventOtomasi.setAktif(db, text, command === "eventhidupkan");
					return e ? m.reply(`Aksi *${e.id}* ${command === "eventhidupkan" ? "diaktifkan" : "dimatikan"}.`) : m.reply("Aksi tidak ditemukan.");
				}
				break;
			case "eventuji":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = eventOtomasi.jalankan(db, text, true);
					return kirimRespons(m, { judul: `Uji event ${text}`, isi: hasil.map((h) => `- ${h.id}: ${h.aksi} ${h.nilai}`).join("\n") || formatKosong("Tidak ada aksi aktif."), catatan: "Mode kering, tidak ada efek samping." });
				}
				break;
			case "eventriwayat":
				{
					if (!isCreator) return m.reply(mess.owner);
					const r = eventOtomasi.riwayat(db);
					return kirimRespons(m, { judul: "Riwayat event", isi: r.map((x) => `- ${x.event}: ${x.jumlah} aksi ${new Date(x.at).toISOString()}`).join("\n") || formatKosong() });
				}
				break;
			case "aturanbaru":
				{
					if (!isCreator) return m.reply(mess.owner);
					const a = aturanOtomasi.buat(db, text);
					if (!a) return m.reply("Nama aturan kosong atau sudah ada.");
					otomasiCatat(db, "buat-aturan", a.nama);
					return m.reply(`Aturan *${a.nama}* dibuat. Lengkapi dengan .aturanketika dan .aturanmaka.`);
				}
				break;
			case "aturanketika":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					const a = aturanOtomasi.aturSyarat(db, mt[0], mt[1], mt[2], mt.slice(3).join(" "));
					return a ? m.reply(`Syarat aturan *${a.nama}* disimpan.`) : m.reply(`Operator: ${aturanOtomasi.daftarOperator().join(", ")}`);
				}
				break;
			case "aturanmaka":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					const a = aturanOtomasi.aturAksi(db, mt[0], mt[1], mt.slice(2).join(" "));
					return a ? m.reply(`Aksi aturan *${a.nama}* disimpan.`) : m.reply(`Aksi: ${aturanOtomasi.daftarAksi().join(", ")}`);
				}
				break;
			case "aturanuji":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					const contoh = {};
					for (const p of mt.slice(1)) {
						const pas = p.split("=");
						if (pas[0]) contoh[pas[0]] = pas.slice(1).join("=");
					}
					const h = aturanOtomasi.uji(db, mt[0], contoh);
					return h ? kirimRespons(m, { judul: `Uji ${mt[0]}`, isi: `- Cocok: ${h.cocok ? "ya" : "tidak"}\n- Aksi: ${h.aksi}\n- Nilai: ${h.nilai}` }) : m.reply("Aturan belum lengkap.");
				}
				break;
			case "aturanaktif":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					const a = aturanOtomasi.setAktif(db, mt[0], mt[1] === "on");
					return a ? m.reply(`Aturan *${a.nama}* ${mt[1] === "on" ? "diaktifkan" : "dimatikan"}.`) : m.reply("Aturan belum lengkap.");
				}
				break;
			case "aturanlist":
				{
					if (!isCreator) return m.reply(mess.owner);
					const list = aturanOtomasi.daftar(db);
					return kirimRespons(m, { judul: "Aturan otomasi", isi: list.map((a) => `- ${a.nama}: ${a.aktif ? "aktif" : "mati"}`).join("\n") || formatKosong() });
				}
				break;
			case "aturandetail":
				{
					if (!isCreator) return m.reply(mess.owner);
					const a = aturanOtomasi.ambil(db, text);
					if (!a) return m.reply("Aturan tidak ditemukan.");
					const v = aturanOtomasi.validasi(db, a.nama);
					return kirimRespons(m, { judul: `Aturan ${a.nama}`, isi: `- Syarat: ${a.syarat ? `${a.syarat.field} ${a.syarat.operator} ${a.syarat.nilai}` : "-"}\n- Aksi: ${a.aksi ? `${a.aksi.nama} ${a.aksi.nilai}` : "-"}\n- Status: ${v.alasan}` });
				}
				break;
			case "aturanhapus":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<nama>"} confirm`);
					if (!aturanOtomasi.hapus(db, mt[0])) return m.reply("Aturan tidak ditemukan.");
					otomasiCatat(db, "hapus-aturan", mt[0]);
					return m.reply(`Aturan *${mt[0]}* dihapus.`);
				}
				break;
			case "workflowbaru":
				{
					if (!isCreator) return m.reply(mess.owner);
					const w = workflowOtomasi.buat(db, text);
					if (!w) return m.reply("Nama workflow kosong atau sudah ada.");
					otomasiCatat(db, "buat-workflow", w.nama);
					return m.reply(`Workflow *${w.nama}* dibuat. Tambah langkah dengan .workflowlangkah.`);
				}
				break;
			case "workflowlangkah":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					const l = workflowOtomasi.tambahLangkah(db, mt[0], mt[1], mt.slice(2).join(" "));
					return l ? m.reply(`Langkah *${mt[1]}* ditambahkan (${l.length} langkah).`) : m.reply(`Aksi: ${workflowOtomasi.daftarAksi().join(", ")}`);
				}
				break;
			case "workflowurut":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					const l = workflowOtomasi.urutLangkah(db, mt[0], mt.slice(1).join(" "));
					return l ? m.reply(`Urutan workflow *${mt[0]}* diperbarui.`) : m.reply("Urutan tidak valid. Gunakan nomor 1 sampai jumlah langkah, setiap nomor sekali.");
				}
				break;
			case "workflowjalankan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<nama>"} confirm`);
					const h = workflowOtomasi.jalankan(db, mt[0], false);
					if (!h) return m.reply("Workflow tidak ada atau belum punya langkah.");
					otomasiCatat(db, "jalankan-workflow", mt[0]);
					return m.reply(`Workflow *${mt[0]}* dijalankan (${h.length} langkah).`);
				}
				break;
			case "workflowuji":
				{
					if (!isCreator) return m.reply(mess.owner);
					const h = workflowOtomasi.jalankan(db, text, true);
					return h ? kirimRespons(m, { judul: `Uji workflow ${text}`, isi: h.map((x) => `${x.nomor}. ${x.aksi} ${x.nilai}`).join("\n"), catatan: "Mode kering, tidak ada efek samping." }) : m.reply("Workflow tidak ada atau belum punya langkah.");
				}
				break;
			case "workflowstatus":
				{
					if (!isCreator) return m.reply(mess.owner);
					const s = workflowOtomasi.status(db, text);
					return s ? kirimRespons(m, { judul: `Workflow ${text}`, isi: `- Langkah: ${s.langkah}\n- Posisi: ${s.posisi}\n- Status: ${s.aktif ? "aktif" : "mati"}` }) : m.reply("Workflow tidak ditemukan.");
				}
				break;
			case "workflowlist":
				{
					if (!isCreator) return m.reply(mess.owner);
					const list = workflowOtomasi.daftar(db);
					return kirimRespons(m, { judul: "Workflow otomasi", isi: list.map((w) => `- ${w.nama}: ${w.langkah.length} langkah, posisi ${w.posisi}`).join("\n") || formatKosong() });
				}
				break;
			case "workflowhapus":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<nama>"} confirm`);
					if (!workflowOtomasi.hapus(db, mt[0])) return m.reply("Workflow tidak ditemukan.");
					otomasiCatat(db, "hapus-workflow", mt[0]);
					return m.reply(`Workflow *${mt[0]}* dihapus.`);
				}
				break;
			case "templatlist":
				{
					if (!isCreator) return m.reply(mess.owner);
					const list = templatOtomasi.daftarTemplat(db);
					return kirimRespons(m, { judul: "Templat otomasi", isi: list.map((t) => `- ${t.nama}: ${t.deskripsi}`).join("\n") || formatKosong() });
				}
				break;
			case "templatpakai":
				{
					if (!isCreator) return m.reply(mess.owner);
					const a = templatOtomasi.pakaiTemplat(db, text);
					return a ? m.reply(`Aturan *${a.nama}* dibuat dari templat.`) : m.reply("Templat tidak ditemukan.");
				}
				break;
			case "templatsimpan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					const t = templatOtomasi.simpanTemplat(db, mt[0], mt[1]);
					return t ? m.reply(`Templat *${t.nama}* disimpan.`) : m.reply("Aturan belum lengkap.");
				}
				break;
			case "templatlihat":
				{
					if (!isCreator) return m.reply(mess.owner);
					const t = templatOtomasi.ambilTemplat(db, text);
					return t ? kirimRespons(m, { judul: `Templat ${t.nama}`, isi: `- ${t.deskripsi}\n- Syarat: ${t.syarat.field} ${t.syarat.operator} ${t.syarat.nilai}\n- Aksi: ${t.aksi.nama} ${t.aksi.nilai}` }) : m.reply("Templat tidak ditemukan.");
				}
				break;
			case "templathapus":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply(`Ketik .${command} ${mt[0] || "<nama>"} confirm`);
					if (!templatOtomasi.hapusTemplat(db, mt[0])) return m.reply("Templat tidak ditemukan.");
					otomasiCatat(db, "hapus-templat", mt[0]);
					return m.reply(`Templat *${mt[0]}* dihapus.`);
				}
				break;
			case "otomasivalidasi":
				{
					if (!isCreator) return m.reply(mess.owner);
					const v = otomasiValidasi(db);
					return kirimRespons(m, { judul: "Validasi otomasi", isi: `- Aturan: ${v.aturan.length}\n- Workflow: ${v.workflow.length}\n- Masalah: ${v.masalah.length}`, catatan: v.masalah.slice(0, 8).join("\n") || "Semua aturan dan workflow lengkap." });
				}
				break;
			case "otomasikering":
				{
					if (!isCreator) return m.reply(mess.owner);
					const k = otomasiKering(db);
					return kirimRespons(m, { judul: "Otomasi kering", isi: `- Event: ${k.event.length}\n- Workflow: ${k.workflow.length}\n- Total: ${k.jumlah}`, catatan: "Mode kering, tidak ada efek samping." });
				}
				break;
			case "otomasibatas":
				{
					if (!isCreator) return m.reply(mess.owner);
					const b = otomasiBatas();
					return kirimRespons(m, { judul: "Batas otomasi", isi: Object.entries(b).map(([k, v]) => `- ${k}: ${v}`).join("\n") });
				}
				break;
			case "otomasiizin":
				{
					if (!isCreator) return m.reply(mess.owner);
					return kirimRespons(m, { judul: "Aksi diizinkan", isi: otomasiIzin().map((a) => `- ${a}`).join("\n"), catatan: "Tidak ada eksekusi kode bebas dari input user." });
				}
				break;
			case "otomasiaudit":
				{
					if (!isCreator) return m.reply(mess.owner);
					const a = otomasiAudit(db);
					return kirimRespons(m, { judul: "Audit otomasi", isi: a.map((x) => `- ${x.aksi} ${x.detail} ${new Date(x.at).toISOString()}`).join("\n") || formatKosong() });
				}
				break;
			case "otomasistop":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[0] !== "confirm") return m.reply(`Ketik .${command} confirm untuk menghentikan semua otomasi.`);
					const r = otomasiHentikan(db);
					return kirimRespons(m, { judul: "Otomasi dihentikan", isi: `- Tugas: ${r.tugas}\n- Event: ${r.event}\n- Aturan: ${r.aturan}\n- Workflow: ${r.workflow}` });
				}
				break;
			case "orkestrasistatus":
				{
					if (!isCreator) return m.reply(mess.owner);
					const s = orkestrasi.statusModul();
					return kirimRespons(m, { judul: "Orkestrasi modul", isi: `- Modul: ${s.total}\n- Sehat: ${s.sehat}\n- Rusak: ${s.rusak.length}\n- Perintah: ${s.perintah}`, catatan: s.rusak.join(", ") || "Semua modul tersedia." });
				}
				break;
			case "orkestrasimodul":
				{
					if (!isCreator) return m.reply(mess.owner);
					return kirimRespons(m, { judul: "Daftar modul", isi: orkestrasi.ringkasModul().join("\n") });
				}
				break;
			case "orkestrasiinfo":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mdl = orkestrasi.ambilModul(text);
					return mdl ? kirimRespons(m, { judul: `Modul ${mdl.nama}`, isi: `- Berkas: ${mdl.berkas}\n- Kategori: ${mdl.kategori}\n- Perintah: ${mdl.jumlahPerintah}\n- Status: ${mdl.ada ? "ada" : "tidak ada"}` }) : m.reply("Modul tidak ditemukan.");
				}
				break;
			case "orkestrasiuji":
				{
					if (!isCreator) return m.reply(mess.owner);
					const h = await orkestrasi.ujiModul(text);
					return h ? kirimRespons(m, { judul: `Uji modul ${h.nama}`, isi: `- Sehat: ${h.sehat ? "ya" : "tidak"}\n- Ekspor: ${h.ekspor ?? "-"}\n- Perintah: ${h.perintah ?? "-"}`, catatan: h.alasan || "Impor modul berhasil." }) : m.reply("Modul tidak ditemukan.");
				}
				break;
			case "orkestrasiuru":
				{
					if (!isCreator) return m.reply(mess.owner);
					return kirimRespons(m, { judul: "Urutan inisialisasi", isi: orkestrasi.urutanModul().join("\n") });
				}
				break;
			case "orkestrasiketergantungan":
				{
					if (!isCreator) return m.reply(mess.owner);
					return kirimRespons(m, { judul: "Ketergantungan modul", isi: orkestrasi.ketergantungan().map((x) => `- ${x}`).join("\n") });
				}
				break;
			case "dompetringkas":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = dompetV25.ringkas(u);
					return kirimRespons(m, { judul: "Dompet", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "dompetrincian":
				{
					const hasil = dompetV25.rincian(db.users[m.sender] || {}, (text || '').trim().toLowerCase());
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Saldo", isi: String(hasil) });
				}
				break;

			case "dompetpindah":
				{
					const hasil = dompetV25.pindah(db, m.sender, args[0], args[1], Number(args[2]));
					return hasil ? m.reply("Saldo dipindah.") : m.reply("Field atau nominal tidak valid.");
				}
				break;

			case "dompetrekap":
				{
					const hasil = dompetV25.rekap(db, (args[0] || 'money').toLowerCase());
					return kirimRespons(m, { judul: "Rekap dompet", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "dompetlog":
				{
					const hasil = dompetV25.log(db, (args[0] || 'money').toLowerCase());
					return kirimRespons(m, { judul: "Riwayat transaksi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "dompetrekonsiliasi":
				{
					const hasil = dompetV25.rekonsiliasiDompet(db);
					return kirimRespons(m, { judul: "Rekonsiliasi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "anggaranbuat":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = dompetV25.anggaranBuat(u, args[0], Number(args[1]));
					return hasil ? m.reply("Anggaran dibuat.") : m.reply("Anggaran gagal dibuat.");
				}
				break;

			case "anggaranisi":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = dompetV25.anggaranIsi(u, args[0], Number(args[1]));
					return hasil ? m.reply("Anggaran ditambah.") : m.reply("Anggaran tidak ditemukan.");
				}
				break;

			case "anggaranpakai":
				{
					const hasil = dompetV25.anggaranPakai(db, m.sender, args[0], Number(args[1]));
					return hasil ? m.reply("Anggaran dipakai.") : m.reply("Anggaran atau dana tidak cukup.");
				}
				break;

			case "anggaransisa":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = dompetV25.anggaranSisa(u, args[0]);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Sisa anggaran", isi: String(hasil) });
				}
				break;

			case "anggaranlaporan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = dompetV25.anggaranLaporan(u);
					return kirimRespons(m, { judul: "Anggaran", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "anggaranhapus":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .anggaranhapus [nama] confirm");
					const hasil = dompetV25.anggaranHapus(u, args[0]);
					return hasil ? m.reply("Anggaran dihapus.") : m.reply("Gagal.");
				}
				break;

			case "utangcatat":
				{
					const hasil = dompetV25.utangCatat(db, m.sender, args[0], Number(args[1]));
					return hasil ? m.reply("Utang dicatat.") : m.reply("Utang gagal dicatat.");
				}
				break;

			case "utangbayar":
				{
					const hasil = dompetV25.utangBayar(db, m.sender, args[0], Number(args[1]));
					return hasil ? m.reply("Utang dibayar.") : m.reply("Utang atau dana tidak cukup.");
				}
				break;

			case "utangtagih":
				{
					const hasil = dompetV25.utangTagih(db, args[0]);
					return kirimRespons(m, { judul: "Tagihan", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "utangdaftar":
				{
					const hasil = dompetV25.utangDaftar(db, m.sender);
					return kirimRespons(m, { judul: "Utang", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "utanghapus":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .utanghapus [nama] confirm");
					const hasil = dompetV25.utangHapus(db, m.sender, args[0]);
					return hasil ? m.reply("Utang dihapus.") : m.reply("Gagal.");
				}
				break;

			case "koperasisimpan":
				{
					const hasil = koperasiV25.simpan(db, m.chat, args[0], m.sender, Number(args[1]));
					return hasil ? m.reply("Modal disimpan.") : m.reply("Koperasi atau dana tidak valid.");
				}
				break;

			case "koperasitarik":
				{
					const hasil = koperasiV25.tarik(db, m.chat, args[0], m.sender, Number(args[1]));
					return hasil ? m.reply("Modal ditarik.") : m.reply("Simpanan tidak cukup.");
				}
				break;

			case "koperasidividen":
				{
					const hasil = koperasiV25.dividen(db, m.chat, args[0]);
					return kirimRespons(m, { judul: "Dividen koperasi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "koperasianggota":
				{
					const hasil = koperasiV25.anggota(db, m.chat, args[0]);
					return kirimRespons(m, { judul: "Anggota koperasi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "koperasirapat":
				{
					const hasil = koperasiV25.rapat(db, m.chat, args[0]);
					return kirimRespons(m, { judul: "Rapat koperasi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "koperasitutup":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .koperasitutup [nama] confirm");
					const hasil = koperasiV25.tutup(db, m.chat, args[0]);
					return hasil ? m.reply("Koperasi ditutup.") : m.reply("Gagal.");
				}
				break;

			case "tokostok":
				{
					const hasil = koperasiV25.tokoStok(db, m.chat, args[0]);
					return kirimRespons(m, { judul: "Stok toko", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "tokorestok":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = koperasiV25.tokoRestok(db, m.chat, args[0], Number(args[1]));
					return hasil ? m.reply("Stok ditambah.") : m.reply("Toko tidak ditemukan.");
				}
				break;

			case "tokoharga":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = koperasiV25.tokoHarga(db, m.chat, args[0], Number(args[1]));
					return hasil ? m.reply("Harga diatur.") : m.reply("Toko tidak ditemukan.");
				}
				break;

			case "tokodiskon":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = koperasiV25.tokoDiskon(db, m.chat, args[0], Number(args[1]));
					return hasil ? m.reply("Diskon diatur.") : m.reply("Diskon tidak valid.");
				}
				break;

			case "tokobeli":
				{
					const hasil = koperasiV25.tokoBeliV25(db, m.chat, m.sender, args[0], Number(args[1]));
					return hasil ? m.reply("Barang dibeli.") : m.reply("Stok atau dana tidak cukup.");
				}
				break;

			case "tokobjual":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = koperasiV25.tokoJual(db, m.chat, m.sender, args[0], Number(args[1]));
					return hasil ? m.reply("Barang dijual.") : m.reply("Barang tidak tersedia.");
				}
				break;

			case "tokohlaporan":
				{
					const hasil = koperasiV25.tokoLaporan(db, m.chat);
					return kirimRespons(m, { judul: "Laporan toko", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "tokoktutup":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .tokoktutup [nama] confirm");
					const hasil = koperasiV25.tokoTutup(db, m.chat, args[0]);
					return hasil ? m.reply("Toko ditutup.") : m.reply("Gagal.");
				}
				break;

			case "skortotal":
				{
					const hasil = kompetisiV25.skorTotal(db, m.sender);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Skor total", isi: String(hasil) });
				}
				break;

			case "skorrincian":
				{
					const hasil = kompetisiV25.skorRincian(db.users[m.sender] || {});
					return kirimRespons(m, { judul: "Rincian skor", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "skorpapan":
				{
					const hasil = kompetisiV25.skorPapan(db);
					return kirimRespons(m, { judul: "Papan skor", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "skormusim":
				{
					const hasil = kompetisiV25.skorMusim(db);
					return kirimRespons(m, { judul: "Musim berjalan", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "skorarsip":
				{
					const hasil = kompetisiV25.skorArsip(db);
					return kirimRespons(m, { judul: "Arsip skor", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "turnamenjadwal":
				{
					const hasil = kompetisiV25.jadwal(db, m.chat);
					return kirimRespons(m, { judul: "Jadwal turnamen", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "turnamenpeserta":
				{
					const hasil = kompetisiV25.peserta(db, m.chat);
					return kirimRespons(m, { judul: "Peserta", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "turnamenunggulan":
				{
					const hasil = kompetisiV25.unggulan(db, m.chat);
					return kirimRespons(m, { judul: "Unggulan", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "turnamenbracket":
				{
					const hasil = kompetisiV25.bracket(db, m.chat);
					return kirimRespons(m, { judul: "Bracket", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "turnamenhasil":
				{
					const hasil = kompetisiV25.hasil(db, m.chat, args[0], args[1], args[2]);
					return hasil ? m.reply("Hasil dicatat.") : m.reply("Turnamen tidak aktif.");
				}
				break;

			case "turnamenpoin":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = kompetisiV25.poin(db, args[0], Number(args[1]));
					return hasil ? m.reply("Poin diberikan.") : m.reply("Poin gagal diberikan.");
				}
				break;

			case "turnamenarsip":
				{
					const hasil = kompetisiV25.arsip(db, m.chat);
					return kirimRespons(m, { judul: "Arsip turnamen", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "lagacari":
				{
					const hasil = kompetisiV25.lagaCari(db, m.chat, text);
					return kirimRespons(m, { judul: "Hasil laga", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "lagajadwal":
				{
					const hasil = kompetisiV25.lagaJadwal(db, m.chat, text);
					return kirimRespons(m, { judul: "Jadwal laga", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "lagapapan":
				{
					const hasil = kompetisiV25.lagaPapan(db, m.chat);
					return kirimRespons(m, { judul: "Papan laga", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "petbantukebun":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.bantuKebun(u, db, m.sender);
					return hasil ? m.reply("Hewan membantu kebun.") : m.reply("Hewan atau kebun tidak ada.");
				}
				break;

			case "petpakaipesul":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.pakaiHasil(u, db, m.sender);
					return hasil ? m.reply("Hasol dipakai.") : m.reply("Hasil kebun tidak ada.");
				}
				break;

			case "pethadiahpanen":
				{
					const hasil = rantaiV25.hadiahPanen(db.users[m.sender] || {}, db, m.sender);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Hadiah panen", isi: String(hasil) });
				}
				break;

			case "petprestasilintas":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.prestasiLintas(u);
					return kirimRespons(m, { judul: "Prestasi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kebunkompos":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.kompos(u, db, m.sender);
					return hasil ? m.reply("Kompos dipakai.") : m.reply("Kebun tidak ada.");
				}
				break;

			case "kebunkirimtoko":
				{
					const hasil = rantaiV25.kirimToko(db.users[m.sender] || {}, db, m.sender, args[0], Number(args[1]));
					return hasil ? m.reply("Hasil dikirim.") : m.reply("Hasil tidak tersedia.");
				}
				break;

			case "kebunpesanan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.pesananBuat(u, args[0], Number(args[1]));
					return hasil ? m.reply("Pesanan dibuat.") : m.reply("Pesanan penuh.");
				}
				break;

			case "kebunpengiriman":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.pengiriman(u);
					return kirimRespons(m, { judul: "Pengiriman", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kargajidompet":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const gaji = ambilGaji(u);
					if (!gaji) return m.reply("Gaji belum tersedia atau sudah diambil hari ini.");
					const masuk = ubahSaldo(db, m.sender, "money", gaji, "karir:gaji");
					return masuk ? kirimRespons(m, { judul: "Gaji masuk", isi: String(gaji) }) : m.reply("Gaji gagal dikreditkan.");
				}
				break;

			case "kardandakebun":
				{
					const hasil = rantaiV25.danaKebun(db, m.sender, Number(args[0]));
					return hasil ? m.reply("Dana masuk kebun.") : m.reply("Dana tidak cukup.");
				}
				break;

			case "karkinerjapet":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.kinerjaPet(u);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Kinerja", isi: String(hasil) });
				}
				break;

			case "karsertifikat":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.sertifikatKarir(u);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "rantaistatus":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = rantaiV25.statusRantai(u);
					return kirimRespons(m, { judul: "Rantai produksi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "rantaipapan":
				{
					const hasil = rantaiV25.papanRantai(db);
					return kirimRespons(m, { judul: "Papan rantai", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "rantaihadiah":
				{
					const hasil = rantaiV25.hadiahRantai(db, m.sender);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Hadiah rantai", isi: String(hasil) });
				}
				break;

			case "belajarjalur":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.jalur(u);
					return kirimRespons(m, { judul: "Jalur belajar", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "belajarharian":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.harian(u);
					return kirimRespons(m, { judul: "Materi harian", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "belajarujian":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.ujian(u, args[0], args.slice(1));
					return kirimRespons(m, { judul: "Hasil ujian", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "belajarnilai":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.nilai(u);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Nilai", isi: String(hasil) });
				}
				break;

			case "belajarsertifikat":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.sertifikatBelajar(u);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "kartubuat":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.kartuBuat(u, args[0]);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Kartu dibuat", isi: String(hasil) });
				}
				break;

			case "kartuulang":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.kartuUlang(u);
					return kirimRespons(m, { judul: "Kartu ulang", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kartukategori":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.kartuKategori(u);
					return kirimRespons(m, { judul: "Kategori kartu", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kartustatistik":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pembelajaranV25.kartuStatistik(u);
					return kirimRespons(m, { judul: "Statistik kartu", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kartuhapus":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .kartuhapus [kategori] confirm");
					const hasil = pembelajaranV25.kartuHapus(u, args[0]);
					return hasil ? m.reply("Kartu dihapus.") : m.reply("Gagal.");
				}
				break;

			case "kuiskategori":
				{
					const hasil = pembelajaranV25.kuisKategori(args[0]);
					return kirimRespons(m, { judul: "Soal kuis", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kuisturnamen":
				{
					const hasil = pembelajaranV25.kuisTurnamen(db, m.chat, text);
					return hasil ? m.reply("Turnamen kuis dibuat.") : m.reply("Turnamen gagal dibuat.");
				}
				break;

			case "kuispapan":
				{
					const hasil = pembelajaranV25.kuisPapan(db);
					return kirimRespons(m, { judul: "Papan kuis", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kuishadiah":
				{
					const hasil = pembelajaranV25.kuisHadiah(db, m.sender, Number(args[0]));
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Poin kuis", isi: String(hasil) });
				}
				break;

			case "gruppipapan":
				{
					const hasil = komunitasV25.papanGrupV25(db, m.chat);
					return kirimRespons(m, { judul: "Papan grup", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "gruppianggota":
				{
					const hasil = komunitasV25.anggotaGrup(db, m.chat);
					return kirimRespons(m, { judul: "Anggota grup", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "gruppiperan":
				{
					const hasil = komunitasV25.peranGrup(db, m.chat);
					return kirimRespons(m, { judul: "Peran grup", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "gruppiaturan":
				{
					const hasil = komunitasV25.aturanGrup(db, m.chat);
					return kirimRespons(m, { judul: "Aturan grup", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "gruppinotifikasi":
				{
					const hasil = komunitasV25.notifikasiGrup(db, m.chat);
					return kirimRespons(m, { judul: "Notifikasi grup", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "proyektugas":
				{
					const hasil = komunitasV25.proyekTugasV25(db, m.chat, args[0], args.slice(1).join(' '));
					return hasil ? m.reply("Tugas ditambah.") : m.reply("Proyek tidak ditemukan.");
				}
				break;

			case "proyekprogres":
				{
					const hasil = komunitasV25.proyekProgres(db, m.chat, args[0]);
					return kirimRespons(m, { judul: "Progres proyek", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "proyekanggota":
				{
					const hasil = komunitasV25.proyekAnggota(db, m.chat, args[0]);
					return kirimRespons(m, { judul: "Anggota proyek", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "proyektenggat":
				{
					const hasil = komunitasV25.proyekTenggat(db, m.chat, args[0], args[1]);
					return kirimRespons(m, { judul: "Tenggat proyek", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "proyekarsip":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .proyekarsip [nama] confirm");
					const hasil = komunitasV25.proyekArsipV25(db, m.chat, args[0]);
					return hasil ? m.reply("Proyek diarsipkan.") : m.reply("Gagal.");
				}
				break;

			case "surveibuat":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = komunitasV25.surveiBaru(db, m.chat, text);
					return hasil ? m.reply("Survei dibuat.") : m.reply("Survei gagal dibuat.");
				}
				break;

			case "surveipilih":
				{
					const hasil = komunitasV25.surveiPilih(db, args[0], args[1], m.sender);
					return hasil ? m.reply("Pilihan dicatat.") : m.reply("Survei tidak aktif.");
				}
				break;

			case "surveihasil":
				{
					const hasil = komunitasV25.surveiHasilV25(db, args[0]);
					return kirimRespons(m, { judul: "Hasil survei", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "surveitutup":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .surveitutup [id] confirm");
					const hasil = komunitasV25.surveiTutupV25(db, args[0]);
					return hasil ? m.reply("Survei ditutup.") : m.reply("Gagal.");
				}
				break;

			case "reputasilihat":
				{
					const hasil = komunitasV25.reputasiLihat(db, m.sender);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Reputasi", isi: String(hasil) });
				}
				break;

			case "reputasiberi":
				{
					const hasil = komunitasV25.reputasiBeriV25(db, m.sender, args[0], Number(args[1]));
					return hasil ? m.reply("Reputasi diberikan.") : m.reply("Reputasi gagal diberikan.");
				}
				break;

			case "reputasipapan":
				{
					const hasil = komunitasV25.reputasiPapanV25(db);
					return kirimRespons(m, { judul: "Papan reputasi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "reputasiaturan":
				{
					const hasil = komunitasV25.reputasiAturan();
					return kirimRespons(m, { judul: "Aturan reputasi", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kesehatanskor":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.skorKesehatan(db, global);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Skor kesehatan", isi: String(hasil) });
				}
				break;

			case "kesehatanrincian":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.rincianKesehatan(db, global);
					return kirimRespons(m, { judul: "Rincian kesehatan", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "kesehatansejarah":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.sejarahKesehatan(db);
					return kirimRespons(m, { judul: "Riwayat kesehatan", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "aksesaudit":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.auditAkses(db);
					return kirimRespons(m, { judul: "Audit akses", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "aksesuji":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.ujiAkses(db, args[0]);
					return kirimRespons(m, { judul: "Uji akses", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "aksespulihkan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[0] !== "confirm") return m.reply("Ketik .aksespulihkan confirm");
					const hasil = pengawasanV25.pulihkanAkses(db);
					return hasil ? m.reply("Akses dipulihkan.") : m.reply("Gagal.");
				}
				break;

			case "backupjadwal":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.jadwalBackup(db);
					return kirimRespons(m, { judul: "Jadwal backup", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "backupuji":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.ujiBackup(db);
					return kirimRespons(m, { judul: "Uji backup", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "backuppulihkan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .backuppulihkan [berkas] confirm");
					const hasil = pengawasanV25.pulihkanBackup(db, args[0]);
					return hasil ? m.reply("Permintaan pemulihan dicatat.") : m.reply("Gagal.");
				}
				break;

			case "pengawaslaporan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.laporanPengawas(db, global);
					return kirimRespons(m, { judul: "Laporan pengawas", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "pengawasambang":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = pengawasanV25.aturAmbang(db, args[0], Number(args[1]));
					return kirimRespons(m, { judul: "Ambang pengawas", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "pengawashentikan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[0] !== "confirm") return m.reply("Ketik .pengawashentikan confirm");
					const hasil = pengawasanV25.hentikanPengawas(db);
					return hasil ? m.reply("Pengawas dihentikan.") : m.reply("Gagal.");
				}
				break;

			case "studiodaftar":
				{
					const hasil = studioV25.daftarStudio();
					return kirimRespons(m, { judul: "Studio", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;

			case "studiobuat":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = studioV25.buatStudio(u, args[0]);
					return hasil ? m.reply("Karya dibuat.") : m.reply("Karya penuh atau jenis salah.");
				}
				break;

			case "studioisi":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = studioV25.isiStudio(u, args[0], args.slice(1).join(' '));
					return hasil ? m.reply("Isi ditambah.") : m.reply("Karya tidak ditemukan.");
				}
				break;

			case "studiagaya":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = studioV25.gayaStudio(u, args[0], args[1]);
					return hasil ? m.reply("Gaya diubah.") : m.reply("Karya tidak ditemukan.");
				}
				break;

			case "studiojadwalkan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = studioV25.jadwalkanStudio(u, args[0]);
					return hasil ? m.reply("Karya dijadwalkan.") : m.reply("Karya tidak ditemukan.");
				}
				break;

			case "studioterbit":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = studioV25.terbitStudio(u, args[0]);
					return hasil ? m.reply("Karya diterbitkan.") : m.reply("Karya tidak ditemukan.");
				}
				break;

			case "studioarsip":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .studioarsip [id] confirm");
					const hasil = studioV25.arsipStudio(u, args[0]);
					return hasil ? m.reply("Karya diarsipkan.") : m.reply("Gagal.");
				}
				break;

			case "studiolaporan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = studioV25.laporanStudio(u);
					return kirimRespons(m, { judul: "Laporan studio", isi: ringkasV25(hasil) || formatKosong() });
				}
				break;
			case "ailaporandompet":
				{
					const hasil = aiV26.ringkasDompet(db, m.sender);
					return kirimRespons(m, { judul: "Ringkasan dompet", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "aipet":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = aiV26.saranPet(u);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "aikebun":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = aiV26.saranKebun(u);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "aikarir":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = aiV26.saranKarir(u);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "aibelajar":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = aiV26.saranBelajar(u);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "aigame":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = aiV26.ulasGame(u);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "aigrup":
				{
					const hasil = aiV26.ringkasGrup(db, m.chat);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "aikarya":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = aiV26.ulasKarya(u);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "aikodeulas":
				{
					const hasil = aiV26.ulasKode(text);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "airingkasfitur":
				{
					const hasil = aiV26.ringkasFitur(text);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "laporanharian":
				{
					const hasil = laporanV26.harian(db, m.sender);
					return kirimRespons(m, { judul: "Laporan harian", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "laporanmingguan":
				{
					const hasil = laporanV26.mingguan(db, m.sender);
					return kirimRespons(m, { judul: "Laporan mingguan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "laporanbulan":
				{
					const hasil = laporanV26.bulanan(db, m.sender);
					return kirimRespons(m, { judul: "Laporan bulanan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "laporanpertumbuhan":
				{
					const hasil = laporanV26.pertumbuhan(db, m.sender);
					return kirimRespons(m, { judul: "Pertumbuhan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "laporanperbandingan":
				{
					const hasil = laporanV26.perbandingan(db, m.sender, args[0], args[1]);
					return kirimRespons(m, { judul: "Perbandingan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "laporanekspor":
				{
					const hasil = laporanV26.ekspor(db, m.sender);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "laporanjadwalkan":
				{
					const hasil = laporanV26.jadwalkan(db, m.sender, args[0]);
					return kirimRespons(m, { judul: "Jadwal laporan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "laporanberhenti":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .laporanberhenti  confirm");
					const hasil = laporanV26.berhenti(db, m.sender);
					return hasil ? m.reply("Jadwal laporan dihentikan.") : m.reply("Gagal.");
				}
				break;

			case "carilintasfitur":
				{
					const hasil = pencarianV26.lintas(text);
					return kirimRespons(m, { judul: "Hasil pencarian", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "cariperintah":
				{
					const hasil = pencarianV26.perintah(text);
					return kirimRespons(m, { judul: "Perintah", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "caridata":
				{
					const hasil = pencarianV26.data(text);
					return kirimRespons(m, { judul: "Data", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "caripengguna":
				{
					const hasil = pencarianV26.pengguna(db, text);
					return kirimRespons(m, { judul: "Pengguna", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "carigrup":
				{
					const hasil = pencarianV26.grup(db, text);
					return kirimRespons(m, { judul: "Grup", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "caririwayat":
				{
					const hasil = pencarianV26.riwayat(db, m.sender, text);
					return kirimRespons(m, { judul: "Riwayat", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "caritersimpan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = pencarianV26.simpan(u, text);
					return kirimRespons(m, { judul: "Tersimpan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "carihapus":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .carihapus [kata] confirm");
					const hasil = pencarianV26.hapus(u, args[0]);
					return hasil ? m.reply("Pencarian dihapus.") : m.reply("Gagal.");
				}
				break;

			case "gamiharian":
				{
					const hasil = gameV26.harian(Date.now());
					return kirimRespons(m, { judul: "Tantangan harian", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "gametantangan":
				{
					const hasil = gameV26.tantangan(Date.now());
					return kirimRespons(m, { judul: "Tantangan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "gameturnamen":
				{
					const hasil = gameV26.daftarTurnamen();
					return kirimRespons(m, { judul: "Game turnamen", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "gamerekor":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = gameV26.rekor(u);
					return kirimRespons(m, { judul: "Rekor", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "gamematihan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = gameV26.latihan(u, args[0]);
					return hasil ? m.reply("Latihan dicatat tanpa hadiah.") : m.reply("Game tidak ditemukan.");
				}
				break;

			case "gamepapan":
				{
					const hasil = gameV26.papan(db);
					return kirimRespons(m, { judul: "Papan game", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "gamehadiah":
				{
					const hasil = gameV26.hadiah(db, m.sender, Number(args[0]));
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Hadiah game", isi: String(hasil) });
				}
				break;

			case "gamemberi":
				{
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .gamemberi [jid] [jumlah] confirm");
					const hasil = gameV26.beri(db, m.sender, args[0], Number(args[1]));
					return hasil ? m.reply("Poin diberikan.") : m.reply("Gagal.");
				}
				break;

			case "moderatoraturan":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = moderasiV26.aturan(db, m.chat);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "moderasipingatan":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = moderasiV26.peringatan(db, m.chat, args[0], args.slice(1).join(' '));
					return kirimRespons(m, { judul: "Peringatan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "moderatemute":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = moderasiV26.mute(db, m.chat, args[0], Number(args[1]));
					return kirimRespons(m, { judul: "Mute", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "moderasiunmute":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .moderasiunmute [jid] confirm");
					const hasil = moderasiV26.unmute(db, m.chat, args[0]);
					return hasil ? m.reply("Mute dilepas.") : m.reply("Gagal.");
				}
				break;

			case "moderasilog":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = moderasiV26.log(db, m.chat);
					return kirimRespons(m, { judul: "Log moderasi", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "moderasistatistik":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = moderasiV26.statistik(db, m.chat);
					return kirimRespons(m, { judul: "Statistik moderasi", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "moderasiauto":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = moderasiV26.auto(db, m.chat, args[0] === 'on');
					return kirimRespons(m, { judul: "Moderasi otomatis", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "moderasiuji":
				{
					if (!isCreator && !m.isAdmin) return m.reply(global.mess.admin);
					const hasil = moderasiV26.uji(db, m.chat, text);
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "mediakartu":
				{
					const hasil = mediaV26.kartu(args[0], args.slice(1).join(' '));
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "mediaposter":
				{
					const hasil = mediaV26.poster(args[0], args.slice(1).join(' '), 'ungu');
					return m.reply(hasil === null || hasil === undefined ? "Data tidak tersedia." : String(hasil));
				}
				break;

			case "mediastiker":
				{
					const hasil = mediaV26.stiker(text);
					return kirimRespons(m, { judul: "Stiker", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "mediagaleri":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = mediaV26.galeri(u);
					return kirimRespons(m, { judul: "Galeri", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "mediaanimasi":
				{
					const hasil = mediaV26.animasi(args[0], Number(args[1]));
					return kirimRespons(m, { judul: "Animasi", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "mediameta":
				{
					const hasil = mediaV26.meta(text);
					return kirimRespons(m, { judul: "Metadata", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "mediauji":
				{
					const hasil = mediaV26.uji(text);
					return kirimRespons(m, { judul: "Uji media", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "mediahapus":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .mediahapus [id] confirm");
					const hasil = mediaV26.hapus(u, args[0]);
					return hasil ? m.reply("Media dihapus.") : m.reply("Gagal.");
				}
				break;

			case "profillengkap":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = profilV26.lengkap(u, db, m.sender);
					return kirimRespons(m, { judul: "Profil", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "profilpencapaian":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = profilV26.pencapaian(u);
					return kirimRespons(m, { judul: "Pencapaian", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "profilriwayat":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = profilV26.riwayat(u);
					return kirimRespons(m, { judul: "Riwayat", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "profilpengaturan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = args[0] ? profilV26.aturPengaturan(u, args[0], args[1]) : profilV26.pengaturan(u);
					return kirimRespons(m, { judul: "Pengaturan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "profilmode":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = profilV26.mode(u, args[0]);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Mode", isi: String(hasil) });
				}
				break;

			case "profilbahasa":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = profilV26.bahasa(u, args[0]);
					return hasil === null || hasil === undefined ? m.reply("Data tidak tersedia.") : kirimRespons(m, { judul: "Bahasa", isi: String(hasil) });
				}
				break;

			case "profilcadangan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const hasil = profilV26.cadangan(u);
					return kirimRespons(m, { judul: "Cadangan", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "profilpulihkan":
				{
					const u = db.users[m.sender] || (db.users[m.sender] = {});
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .profilpulihkan [kode] confirm");
					const hasil = profilV26.pulihkan(u, args[0]);
					return hasil ? m.reply("Profil dipulihkan.") : m.reply("Gagal.");
				}
				break;

			case "botdiagnosis":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = botV26.diagnosis(global, db);
					return kirimRespons(m, { judul: "Diagnosis bot", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "botmetrik":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = botV26.metrik(db);
					return kirimRespons(m, { judul: "Metrik bot", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "botpanas":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = botV26.panas(db);
					return kirimRespons(m, { judul: "State terberat", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "botbeban":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = botV26.beban(global);
					return kirimRespons(m, { judul: "Beban bot", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "botcache":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = botV26.cache(global);
					return kirimRespons(m, { judul: "Cache bot", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "botuji":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = botV26.uji(args[0]);
					return kirimRespons(m, { judul: "Uji modul", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;

			case "bothentikan":
				{
					if (!isCreator) return m.reply(mess.owner);
					const mt = (text || "").trim().split(/\s+/);
					if (mt[1] !== "confirm") return m.reply("Ketik .bothentikan [nama] confirm");
					const hasil = botV26.hentikan(db, args[0]);
					return hasil ? m.reply("Layanan ditandai berhenti.") : m.reply("Gagal.");
				}
				break;

			case "botjadwal":
				{
					if (!isCreator) return m.reply(mess.owner);
					const hasil = botV26.jadwal(db);
					return kirimRespons(m, { judul: "Jadwal bot", isi: ringkasV26(hasil) || formatKosong() });
				}
				break;
			case "bantuan":
			case "commandinfo":
				{
					const q = (text || "").trim();
					if (!q) return m.reply("Contoh: .bantuan rumus\n.bantuan math");
					const info = infoCommand(q);
					if (!info) return m.reply("Perintah tidak ditemukan.\nKetik .cari <kata> untuk mencari.");
					const detail = rumusDetail(q.toUpperCase());
					return m.reply(`*Bantuan: .${info.command}*\n\nKategori: ${info.kategori}\n${info.deskripsi ? "Fungsi: " + info.deskripsi + "\n" : ""}Contoh: .${info.command}${detail ? "\n\nRumus terkait: " + detail.rumus : ""}`);
				}
				break;
			case "kategori":
				{
					const daftar = daftarKategoriCommand();
					return m.reply(`*Kategori Perintah (${daftar.length})*\n\n${daftar.map((k) => `- *${k.kategori}*: ${k.jumlah} perintah`).join("\n")}\n\nKetik .menu <kategori> untuk submenu.`);
				}
				break;
			case "statistikbot":
			case "topcmd":
				{
					const hit = global.db && global.db.hit ? global.db.hit : {};
					const entri = Object.entries(hit).filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v)).sort((a, b) => b[1] - a[1]).slice(0, 10);
					const baris = entri.map(([k, v], i) => `${i + 1}. .${k}: ${v.toLocaleString("id-ID")}x`).join("\n");
					return m.reply(`*Statistik Bot*\n\nTotal perintah hari ini: ${(hit.todaycmd || 0).toLocaleString("id-ID")}\nTotal semua: ${(hit.totalcmd || 0).toLocaleString("id-ID")}\nPerintah teratas:\n\n${baris || "(belum ada data)"}\n\nPerintah terdaftar: ${jumlahCase()}`);
				}
				break;
			case "panduan":
				{
					return m.reply(`*Panduan Singkat Rynn*\n\n1. Isi kunci di .env (lihat .env.example), lalu jalankan bot di Termux/Linux.\n2. Pairing WhatsApp lewat kode yang muncul saat start atau perintah setup CLI: rynn setup.\n3. Prefix yang aktif: ${global.listprefix.join(" ")}\n4. Ketik .allmenu untuk semua perintah, atau .edukasimenu / .gamemenu / .toolsmenu untuk per kategori.\n5. Owner: .diagnosa (cek lingkungan), .backup (cadangkan data), .update (perbarui dari GitHub).\n6. Ekonomi: .ekonomi dan .gameinfo.\n\nDukungan: .donasi | Info pembuat: .author`);
				}
				break;
			case "gameinfo":
				{
					return m.reply(`*Info Game Rynn*\n\n• .daily: klaim tiap 24 jam, +10 limit dan +10.000 uang\n• .rampok: cooldown 1 jam, butuh target user, ambil sampai 9.999 uang\n• .begal: cooldown 1 jam, bisa dapat uang atau justru kehilangan\n• .slot: 1 limit per putaran; tiga lambang sama memberi 0-9 limit dan 0-4.500 uang\n• .casino: taruhan uang, 1 limit per putaran\n• .samgong: taruhan minimal 5.000 uang, 1 limit per putaran\n\nSemua hadiah diambil dari aturan yang berlaku di bot.`);
				}
				break;
			case "ekonomi":
				{
					return m.reply(`*Ekonomi Rynn*\n\n• Beli limit: 1 limit = 500 uang (.buy limit <jumlah>)\n• Klaim harian: +10 limit dan +10.000 uang (.daily)\n• Transfer: .transfer limit|uang @tag jumlah\n• Kuis: +50 uang per jawaban benar (.quiz)\n• Soal SMA: +25 uang per jawaban benar (.soal)\n• Hangman: +100 uang bila menang (.hangman)\n\nSaldo: ${db.users[m.sender] ? db.users[m.sender].money.toLocaleString("id-ID") : "0"} uang, ${db.users[m.sender] ? db.users[m.sender].limit.toLocaleString("id-ID") : 0} limit`);
				}
				break;
			case "selisihhari":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(\d{4}-\d{2}-\d{2})\s+(\d{4}-\d{2}-\d{2})$/);
					if (!mt) return m.reply("Contoh: .selisihhari 2026-01-01 2026-12-31\nFormat: YYYY-MM-DD YYYY-MM-DD");
					const selisih = selisihHari(mt[1], mt[2]);
					if (selisih === null) return m.reply("Tanggal tidak valid.");
					const hari = Math.abs(selisih);
					const keterangan = selisih < 0 ? "tanggal kedua sebelum tanggal pertama" : selisih > 0 ? "tanggal kedua setelah tanggal pertama" : "kedua tanggal sama";
					return m.reply(`*Selisih Tanggal*\n\n${mt[1]} ke ${mt[2]}: *${hari.toLocaleString("id-ID")} hari* (${keterangan})`);
				}
				break;
			case "fibonacci":
				{
					const arg = (text || "").trim();
					if (arg && !/^\d{1,3}$/.test(arg)) return m.reply("Contoh: .fibonacci 10 (1 sampai 100 suku)");
					const n = arg ? parseInt(arg, 10) : 10;
					const deret = fibonacci(n);
					if (!deret) return m.reply("Jumlah suku 1 sampai 100.");
					return m.reply(`*Deret Fibonacci (${n} suku)*\n\n${deret.map(formatBigInt).join(", ")}`);
				}
				break;
			case "primaantara":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(\d+)\s+(\d+)$/);
					if (!mt) return m.reply("Contoh: .primaantara 1 100\nRentang maksimal 10.000 bilangan.");
					const hasil = primaAntara(Number(mt[1]), Number(mt[2]));
					if (hasil === null) return m.reply("Rentang tidak valid. Maksimal 10.000 bilangan, batas atas 10^12.");
					if (!hasil.length) return m.reply("Tidak ada bilangan prima dalam rentang itu.");
					const tampil = hasil.length > 50 ? hasil.slice(0, 50).join(", ") + `, ... (${hasil.length} prima)` : hasil.join(", ");
					return m.reply(`*Prima antara ${mt[1]} dan ${mt[2]}* (${hasil.length})\n\n${tampil}`);
				}
				break;
			case "slug":
				{
					const arg = (text || "").trim();
					if (!arg) return m.reply("Contoh: .slug Halo Dunia 123\nBuat teks menjadi slug URL.");
					const mt = arg.match(/^(?:pemisah\s+(\S+)\s+)?([\s\S]+)$/);
					const hasil = slug(mt[2], mt[1] || "-");
					if (hasil === null) return m.reply("Input harus berupa teks.");
					return m.reply(`*Slug:*\n\n\`${hasil || "(kosong)"}\``);
				}
				break;
			case "basis":
				{
					const arg = (text || "").trim();
					const mt = arg.match(/^(\S+)\s+(\d{1,2})\s+(\d{1,2})$/);
					if (!mt) return m.reply("Contoh: .basis 1010 2 16\nFormat: nilai basis-asal basis-tujuan (2 sampai 36)");
					const hasil = konversiBasis(mt[1], parseInt(mt[2], 10), parseInt(mt[3], 10));
					if (hasil === null) return m.reply("Nilai tidak valid untuk basis asal, atau basis di luar 2-36.");
					const desimal = dariBasis(mt[1], parseInt(mt[2], 10));
					return m.reply(`*Konversi Basis*\n\n${mt[1].toUpperCase()} (basis ${mt[2]}) = *${hasil}* (basis ${mt[3]})\nDesimal: ${desimal.toLocaleString("id-ID")}`);
				}
				break;
			case "durasi":
				{
					const arg = (text || "").trim().replace(",", ".");
					if (!arg || !Number.isFinite(Number(arg)) || Number(arg) < 0) return m.reply("Contoh: .durasi 3661\nMasukkan jumlah detik (boleh desimal).");
					const detik = Number(arg);
					if (detik > 31536000000) return m.reply("Durasi terlalu besar (maksimal 1000 tahun).");
					return m.reply(`*Durasi*\n\n${detik.toLocaleString("id-ID")} detik = *${formatUptime(detik * 1000)}*`);
				}
				break;
			case "diagnosa":
			case "healthcheck":
				{
					if (!isCreator) return m.reply(global.mess.owner);
					let ffmpegAda = false;
					try {
						execSync(process.platform === "win32" ? "where ffmpeg" : "command -v ffmpeg", { stdio: "ignore" });
						ffmpegAda = true;
					} catch {}
					const pathDb = String(global.database?.path || "");
					const dbTipe = /^mongodb/i.test(pathDb) ? "MongoDB" : /^mysql/i.test(pathDb) ? "MySQL" : /^postgres/i.test(pathDb) ? "PostgreSQL" : "lokal (JSON)";
					const totalData = FAKTA.length + PUISI.length + PANTUN.length + PERIBAHASA.length +
						Object.values(SOAL).reduce((n, arr) => n + arr.length, 0) + HANGMAN_KATA.length +
						Object.keys(RESEP).length + Object.keys(SUKU).length + Object.keys(KULINER).length +
						LAGU_DAERAH.length + WISATA.length + Object.keys(WAYANG).length + Object.keys(PROVINSI).length +
						Object.keys(NEGARA).length + Object.keys(UNSUR).length + Object.keys(PLANET).length + ZODIAC.length +
						BAHASA.length + DANAU.length + GUNUNG.length + PULAU.length + SUNGAI.length + HARI_BERSEJARAH.length + FAUNA.length + FLORA.length;
					const baris = laporanDiagnosa({
						nodeVersion: process.version,
						platform: process.platform,
						uptimeMs: process.uptime() * 1000,
						ffmpeg: ffmpegAda,
						naze: Boolean(global.APIKeys?.["https://naze.dev/api/v1"]),
						neosantara: Boolean(global.APIKeys?.["https://api.neosantara.xyz/v1"]),
						dbTipe,
						mode: sock.public ? "public" : "self",
						prefix: set.multiprefix ? global.listprefix : [prefix],
						zona: global.timezone || "Asia/Jakarta",
						totalData,
					});
					return m.reply(`*Diagnosa Rynn*\n\n${baris.join("\n")}\n\n_Kunci API hanya dilaporkan statusnya, nilainya tidak pernah ditampilkan._`);
				}
				break;
			case "statistikdata":
				{
					const baris = [
						`Fakta: ${FAKTA.length}`,
						`Puisi: ${PUISI.length}`,
						`Pantun: ${PANTUN.length}`,
						`Peribahasa: ${PERIBAHASA.length}`,
						`Soal: ${Object.values(SOAL).reduce((n, arr) => n + arr.length, 0)} (${Object.keys(SOAL).length} kategori)`,
						`Kata hangman: ${HANGMAN_KATA.length}`,
						`Nama bayi: ${NAMA_BAYI_COWO.length + NAMA_BAYI_CEWE.length}`,
						`Suku: ${Object.keys(SUKU).length}`,
						`Kuliner: ${Object.keys(KULINER).length}`,
						`Resep: ${Object.keys(RESEP).length}`,
						`Lagu daerah: ${LAGU_DAERAH.length}`,
						`Wisata: ${WISATA.length}`,
						`Wayang: ${Object.keys(WAYANG).length}`,
						`Provinsi: ${Object.keys(PROVINSI).length}`,
						`Negara: ${Object.keys(NEGARA).length}`,
						`Unsur: ${Object.keys(UNSUR).length}`,
						`Planet: ${Object.keys(PLANET).length}`,
						`Zodiak: ${ZODIAC.length}`,
						`Bahasa daerah: ${BAHASA.length}`,
						`Danau: ${DANAU.length}`,
						`Gunung: ${GUNUNG.length}`,
						`Pulau: ${PULAU.length}`,
						`Sungai: ${SUNGAI.length}`,
						`Hari bersejarah: ${HARI_BERSEJARAH.length}`,
						`Kota waktu: ${KOTA_WAKTU.length}`,
						`Templat surat: ${SURAT.length}`,
						`Mata uang: ${MATAUANG.length}`,
						`Sejarah: ${SEJARAH.length}`,
						`Tokoh: ${TOKOH.length}`,
						`Olahraga: ${OLAHRAGA.length}`,
						`Singkatan: ${SINGKATAN.length}`,
						`Sinonim: ${SINONIM.length}`,
						`Antonim: ${ANTONIM.length}`,
						`Budaya: ${BUDAYA.length}`,
						`Rumus: ${statistikRumus().total}`,
					];
					const total = baris.reduce((n, b) => n + (parseInt(b.split(": ")[1], 10) || 0), 0);
					const ringkas = /^penuh$/i.test((text || "").trim()) ? baris : baris.slice(0, 12);
					return m.reply(`*Statistik Data Rynn*\n\n${ringkas.join("\n")}\n\n*Total entri: ${total.toLocaleString("id-ID")}*\n${ringkas.length !== baris.length ? "Ketik .statistikdata penuh untuk semua dataset." : ""}`);
				}
				break;
			case "uuid":
				{
					const arg = (text || "").trim();
					const jumlah = arg ? Number(arg) : 1;
					if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) return m.reply("Jumlah harus 1 sampai 5. Contoh: .uuid 3");
					const daftar = Array.from({ length: jumlah }, () => uuidV4());
					return m.reply(`*UUID v4:*\n\n${daftar.join("\n")}`);
				}
				break;
			case "hangman":
			case "gantung":
				{
					global.hangmanState = global.hangmanState || new Map();
					const userKey = m.chat + ":" + m.sender;
					const arg = (text || "").trim().toLowerCase();
					if (arg === "batal") {
						global.hangmanState.delete(userKey);
						return m.reply("Hangman dibatalkan.");
					}
					const pending = global.hangmanState.get(userKey);
					if (pending && Date.now() - pending.at < 15 * 60 * 1000) {
						if (/^[a-z]$/.test(arg)) {
							if (pending.guessed.includes(arg)) return m.reply(`Huruf ${arg.toUpperCase()} sudah ditebak.`);
							pending.guessed.push(arg);
							pending.at = Date.now();
							const word = pending.word;
							if (!word.includes(arg)) pending.nyawa -= 1;
							const masked = word.split("").map((c) => (pending.guessed.includes(c) ? c : "_")).join(" ");
							if (!masked.includes("_")) {
								global.hangmanState.delete(userKey);
								const u = db.users && db.users[m.sender];
								if (u) u.money = (typeof u.money === "number" ? u.money : 0) + 100;
								return m.reply(`*Selamat, kamu menang!* Kata: *${word}*\nHadiah: +100 uang`);
							}
							if (pending.nyawa <= 0) {
								global.hangmanState.delete(userKey);
								return m.reply(`*Kamu kalah!* Kata yang benar: *${word}*`);
							}
							return m.reply(`*Hangman*\n\nKata: ${masked}\nHuruf ditebak: ${pending.guessed.join(" ").toUpperCase()}\nSisa nyawa: ${pending.nyawa}\n\nTebak huruf dengan: .hangman a`);
						}
						return m.reply("Ketik satu huruf: .hangman a\nAtau .hangman batal untuk membatalkan.");
					}
					if (pending) global.hangmanState.delete(userKey);
					const word = HANGMAN_KATA[Math.floor(Math.random() * HANGMAN_KATA.length)];
					global.hangmanState.set(userKey, { word, guessed: [], nyawa: 6, at: Date.now() });
					return m.reply(`*Hangman Dimulai*\n\nKata: ${word.split("").map(() => "_").join(" ")}\nJumlah huruf: ${word.length}\nNyawa: 6\n\nTebak huruf dengan: .hangman a\n.hangman batal untuk membatalkan.`);
				}
				break;
			case "soal":
				{
					const dbR = (global.db && global.db.users && global.db.users[m.sender]) ? global.db.users[m.sender] : null;
					const skorKategori = (args[0] || "").toLowerCase();
					if (skorKategori === "skor") {
						const ku = dbR && dbR.soal;
						return m.reply(ku ? `*Skor soal kamu*\n\nBenar: ${ku.benar}\nSalah: ${ku.salah}` : "Kamu belum pernah main soal.");
					}
					const categories = Object.keys(SOAL);
					const kategori = args[0] && SOAL[args[0].toLowerCase()] ? args[0].toLowerCase() : categories[Math.floor(Math.random() * categories.length)];
					const pool = SOAL[kategori];
					global.soalState = global.soalState || new Map();
					const key = m.chat + ":" + m.sender;
					const pending = global.soalState.get(key);
					if (pending && Date.now() - pending.at < 15 * 60 * 1000 && /^[a-d]$/i.test(skorKategori)) {
						const idx = skorKategori.charCodeAt(0) - 97;
						const pick = pending.soal;
						global.soalState.delete(key);
						const u = dbR;
						if (u) {
							u.soal = u.soal || { benar: 0, salah: 0 };
							if (idx === pick.a) {
								u.soal.benar++;
								u.money = (typeof u.money === "number" ? u.money : 0) + 25;
							} else {
								u.soal.salah++;
							}
						}
						if (idx === pick.a) return m.reply(`*Benar!* +25 uang.\n\nPembahasan: ${pick.p}\n\nKetik .soal untuk soal berikutnya atau .soal skor untuk melihat skor.`);
						return m.reply(`*Salah.* Jawaban benar: ${String.fromCharCode(65 + pick.a)}\n\nPembahasan: ${pick.p}`);
					}
					if (pending && Date.now() - pending.at < 15 * 60 * 1000 && skorKategori && skorKategori !== "a" && skorKategori !== "b" && skorKategori !== "c" && skorKategori !== "d") {
						return m.reply("Kamu sedang punya soal yang belum dijawab.\nJawab dengan: .soal a (sampai .soal d)\nKetik .soal skor untuk melihat skor.");
					}
					const pick = pool[Math.floor(Math.random() * pool.length)];
					global.soalState.set(key, { soal: pick, kategori, at: Date.now() });
					let out = `*Soal ${kategori.toUpperCase()}*\n\n${pick.q}\n\n`;
					out += pick.o.map((op, i) => String.fromCharCode(65 + i) + ". " + op).join("\n");
					out += "\n\nJawab dengan: .soal a (sampai d)\nKetik .soal skor untuk melihat skor. Hadiah: +25 uang per jawaban benar.";
					return m.reply(out);
				}
				break;
			case "soalmtk":
				{
					if (args[0] && args[0].toLowerCase() === "skor") {
						return m.reply("Gunakan .soal skor untuk melihat skor.");
					}
					const key = m.chat + ":" + m.sender;
					global.soalState = global.soalState || new Map();
					const pending = global.soalState.get(key);
					if (pending && Date.now() - pending.at < 15 * 60 * 1000) {
						const jawab = (text || "").trim().toLowerCase();
						if (/^[a-d]$/.test(jawab)) {
							return m.reply("Ketik .soal " + jawab + " untuk menjawab soal.");
						}
					}
					const pool = SOAL.matematika;
					const pick = pool[Math.floor(Math.random() * pool.length)];
					global.soalState.set(key, { soal: pick, kategori: "matematika", at: Date.now() });
					let out = `*Soal Matematika*\n\n${pick.q}\n\n`;
					out += pick.o.map((op, i) => String.fromCharCode(65 + i) + ". " + op).join("\n");
					out += "\n\nJawab dengan: .soal a (sampai d)";
					return m.reply(out);
				}
				break;
			case "soalipa":
				{
					if (args[0] && args[0].toLowerCase() === "skor") {
						return m.reply("Gunakan .soal skor untuk melihat skor.");
					}
					const key = m.chat + ":" + m.sender;
					global.soalState = global.soalState || new Map();
					const pending = global.soalState.get(key);
					if (pending && Date.now() - pending.at < 15 * 60 * 1000) {
						const jawab = (text || "").trim().toLowerCase();
						if (/^[a-d]$/.test(jawab)) return m.reply("Ketik .soal " + jawab + " untuk menjawab soal.");
					}
					const pool = SOAL.ipa;
					const pick = pool[Math.floor(Math.random() * pool.length)];
					global.soalState.set(key, { soal: pick, kategori: "ipa", at: Date.now() });
					let out = `*Soal IPA*\n\n${pick.q}\n\n`;
					out += pick.o.map((op, i) => String.fromCharCode(65 + i) + ". " + op).join("\n");
					out += "\n\nJawab dengan: .soal a (sampai d)";
					return m.reply(out);
				}
				break;
			case "soalips":
				{
					if (args[0] && args[0].toLowerCase() === "skor") {
						return m.reply("Gunakan .soal skor untuk melihat skor.");
					}
					const key = m.chat + ":" + m.sender;
					global.soalState = global.soalState || new Map();
					const pending = global.soalState.get(key);
					if (pending && Date.now() - pending.at < 15 * 60 * 1000) {
						const jawab = (text || "").trim().toLowerCase();
						if (/^[a-d]$/.test(jawab)) return m.reply("Ketik .soal " + jawab + " untuk menjawab soal.");
					}
					const pool = SOAL.ips;
					const pick = pool[Math.floor(Math.random() * pool.length)];
					global.soalState.set(key, { soal: pick, kategori: "ips", at: Date.now() });
					let out = `*Soal IPS*\n\n${pick.q}\n\n`;
					out += pick.o.map((op, i) => String.fromCharCode(65 + i) + ". " + op).join("\n");
					out += "\n\nJawab dengan: .soal a (sampai d)";
					return m.reply(out);
				}
				break;
			case "soalbindon":
				{
					if (args[0] && args[0].toLowerCase() === "skor") {
						return m.reply("Gunakan .soal skor untuk melihat skor.");
					}
					const key = m.chat + ":" + m.sender;
					global.soalState = global.soalState || new Map();
					const pending = global.soalState.get(key);
					if (pending && Date.now() - pending.at < 15 * 60 * 1000) {
						const jawab = (text || "").trim().toLowerCase();
						if (/^[a-d]$/.test(jawab)) return m.reply("Ketik .soal " + jawab + " untuk menjawab soal.");
					}
					const pool = SOAL.bindon;
					const pick = pool[Math.floor(Math.random() * pool.length)];
					global.soalState.set(key, { soal: pick, kategori: "bindon", at: Date.now() });
					let out = `*Soal Bahasa Indonesia*\n\n${pick.q}\n\n`;
					out += pick.o.map((op, i) => String.fromCharCode(65 + i) + ". " + op).join("\n");
					out += "\n\nJawab dengan: .soal a (sampai d)";
					return m.reply(out);
				}
				break;
			case "soalppkn":
				{
					if (args[0] && args[0].toLowerCase() === "skor") {
						return m.reply("Gunakan .soal skor untuk melihat skor.");
					}
					const key = m.chat + ":" + m.sender;
					global.soalState = global.soalState || new Map();
					const pending = global.soalState.get(key);
					if (pending && Date.now() - pending.at < 15 * 60 * 1000) {
						const jawab = (text || "").trim().toLowerCase();
						if (/^[a-d]$/.test(jawab)) return m.reply("Ketik .soal " + jawab + " untuk menjawab soal.");
					}
					const pool = SOAL.ppkn;
					const pick = pool[Math.floor(Math.random() * pool.length)];
					global.soalState.set(key, { soal: pick, kategori: "ppkn", at: Date.now() });
					let out = `*Soal PPKn*\n\n${pick.q}\n\n`;
					out += pick.o.map((op, i) => String.fromCharCode(65 + i) + ". " + op).join("\n");
					out += "\n\nJawab dengan: .soal a (sampai d)";
					return m.reply(out);
				}
				break;
			case "namabayi":
				{
					const argRaw = (text || "").trim().toLowerCase();
					if (argRaw === "list cowo") {
						const nama = NAMA_BAYI_COWO.map((n) => n.nama).join(", ");
						return m.reply(`*Daftar nama cowo (${NAMA_BAYI_COWO.length})*\n\n${nama}`);
					}
					if (argRaw === "list cewe") {
						const nama = NAMA_BAYI_CEWE.map((n) => n.nama).join(", ");
						return m.reply(`*Daftar nama cewe (${NAMA_BAYI_CEWE.length})*\n\n${nama}`);
					}
					const [gender, ...rest] = argRaw.split(/\s+/);
					const restText = rest.join(" ").trim();
					if (!gender || !["cowo", "cewe"].includes(gender)) {
						return m.reply("Contoh:\n.namabayi cowo\n.namabayi cewe\n.namabayi cowo artinya rama\n.namabayi list cowo\n.namabayi list cewe");
					}

					const list = gender === "cowo" ? NAMA_BAYI_COWO : NAMA_BAYI_CEWE;
					if (restText === "list") {
						const nama = list.map((n) => n.nama).join(", ");
						return m.reply(`*Daftar nama ${gender} (${list.length})*\n\n${nama}`);
					}
					if (restText) {
						const q = restText.toLowerCase().replace(/[^a-z]/g, "");
						const partial = list.filter((n) => n.nama.toLowerCase().includes(q));
						if (!partial.length) return m.reply(`Tidak ada nama yang cocok dengan "${restText}".`);
						return m.reply(partial.map((n) => `*${n.nama}* - ${n.asal}: ${n.arti}`).join("\n"));
					}

					// Acak 10 nama
					const copy = [...list];
					for (let i = copy.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[copy[i], copy[j]] = [copy[j], copy[i]];
					}
					const pick10 = copy.slice(0, 10);
					return m.reply(`*10 Nama bayi ${gender}*\n\n${pick10.map((n) => `- *${n.nama}* (${n.asal}) - ${n.arti}`).join("\n")}\n\nCari spesifik: .namabayi cowo raka`);
				}
				break;
			case "peribahasa":
				{
					const arg = (text || "").trim().toLowerCase();
					const q = arg.replace(/[^a-z]/g, "");
					if (arg === "list" || arg === "semua") {
						return m.reply(`*Pepatah & Peribahasa Indonesia (${PERIBAHASA.length})*\n\n${PERIBAHASA.map((p, i) => `${i + 1}. ${p.pepatah}`).join("\n")}`);
					}
					let found;
					if (q === "random" || (!arg && Math.random() < 1)) {
						found = PERIBAHASA[Math.floor(Math.random() * PERIBAHASA.length)];
					} else if (q) {
						found = PERIBAHASA.find((p) => p.pepatah.toLowerCase().replace(/[^a-z]/g, "").includes(q));
					}
					if (!found) {
						if (arg) return m.reply(`Pepatah atau peribahasa yang cocok dengan "${arg}" tidak ditemukan.\n\nKetik .peribahasa untuk acak.\nKetik .peribahasa list untuk lihat daftar.`);
						found = PERIBAHASA[Math.floor(Math.random() * PERIBAHASA.length)];
					}
					return m.reply(`*${found.pepatah}*\n\nArtinya: ${found.makna}`);
				}
				break;
			default:
				if (budy.startsWith(">")) {
					if (!isCreator) return;
					try {
						let evaled = await eval(budy.slice(2));
						if (typeof evaled !== "string") evaled = util.inspect(evaled);
						await m.reply(evaled);
					} catch (err) {
						await m.reply(String(err));
					}
				}
				if (budy.startsWith("<")) {
					if (!isCreator) return;
					try {
						let evaled = await eval(`(async () => { ${budy.slice(2)} })()`);
						if (typeof evaled !== "string") evaled = util.inspect(evaled);
						await m.reply(evaled);
					} catch (err) {
						await m.reply(String(err));
					}
				}
				if (budy.startsWith("$")) {
					if (!isCreator) return;
					if (!text) return;
					exec(budy.slice(2), (err, stdout) => {
						if (err) return m.reply(`${err}`);
						if (stdout) return m.reply(stdout);
					});
				}
				if ((!isCmd || isCreator) && budy.toLowerCase() != undefined) {
					if (m.chat.endsWith("broadcast")) return;
					if (!(budy.toLowerCase() in db.database)) return;
					await sock.relayMessage(m.chat, db.database[budy.toLowerCase()], {});
				}
		}
	} catch (e) {
		const redact = (s) => String(s).replace(/([?&]apikey=)[^\s&]+/gi, "$1********").replace(/nz-[A-Za-z0-9]{4,}/g, "nz-********").replace(/nsk_[A-Za-z0-9]{4,}/g, "nsk_********");
		console.error("[ERR]", e?.stack ? redact(e.stack) : redact(e?.message || e));
		if (e?.message?.includes("No sessions") || e?.message?.includes("ffmpeg exited with code") || e?.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" || e?.message?.includes("maxBodyLength limit") || e?.message?.includes("rate-overlimit")) return;
		const errorKey = e?.code || e?.name || e?.message?.slice(0, 100) || "unknown_error";
		const now = Date.now();
		if (!errorCache[errorKey]) errorCache[errorKey] = [];
		errorCache[errorKey] = errorCache[errorKey].filter((ts) => now - ts < 600000);
		if (errorCache[errorKey].length >= 3) return;
		errorCache[errorKey].push(now);
		if (Object.keys(errorCache).length > 200) {
			for (const k of Object.keys(errorCache)) {
				if (!errorCache[k].length || now - errorCache[k][errorCache[k].length - 1] > 600000) {
					delete errorCache[k];
				}
			}
		}
		const errorUrl = e?.config?.url || e?.request?.host || "";
		const isAxiosError = Boolean(e?.isAxiosError || e?.config || e?.response || (typeof errorUrl === "string" && errorUrl.length > 0));
		const statusCode = e?.response?.status || e?.statusCode || e?.data;
		if (statusCode === 500) {
			m.reply("Server API Error: Terjadi gangguan pada server tujuan.");
		} else if (statusCode === 429) {
			if (errorUrl.includes("naze.dev") || errorUrl.includes("api.naze.biz.id")) {
				return m.reply("Limit Reached: " + mess.key);
			} else m.reply("Limit Reached (Sistem/WA): Terlalu banyak permintaan.\nLog Error Telah dikirim ke Owner");
		} else if (statusCode === 403) {
			if (isAxiosError) {
				if (errorUrl.includes("naze.dev") || errorUrl.includes("api.naze.biz.id")) {
					return m.reply("Akses Khusus Premium!");
				} else m.reply("Kesalahan API: Akses ke server API ditolak (403 Forbidden).");
			} else console.log(chalk.yellowBright("[SYSTEM] Akses grup ditolak (Baileys 403 / Forbidden)."));
		} else if (statusCode === 401) {
			if (isAxiosError) {
				if (errorUrl.includes("naze.dev") || errorUrl.includes("api.naze.biz.id")) {
					return m.reply("Apikey tidak valid!");
				} else m.reply("Kesalahan API: Akses ke server API ditolak (401 Unauthorized).");
			} else console.log(chalk.yellowBright("[SYSTEM] Akses ditolak (401 Unauthorized)."));
		} else m.reply("Kesalahan: " + redact(e?.name || e?.code || e?.message || "Terjadi kesalahan tidak diketahui") + "\nLog Error Telah dikirim ke Owner\n\n");
		return sock.sendFromOwner(ownerNumber, `Halo, ada error yang perlu diperbaiki:\n\nVersion : *${require("./package.json").version}*\nType : *${m.type || errorKey}*\n\n*Log error:*\n\n` + redact(util.format(e)), m, { contextInfo: { isForwarded: true } });
	}
};

export default sock;
