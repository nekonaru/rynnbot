// Game harian, tantangan, turnamen, dan papan skor v26.
// Modul murni tanpa efek samping saat import. Semua state berada di objek yang diberikan.

import { ubahSaldo, pindahSaldo } from "../transaksi.js";

// Daftar game tetap yang sudah ada di proyek. Game taruhan tidak ikut turnamen.
const GAME = ["quiz", "hangman", "wordle", "sudoku", "game2048", "tebaktokoh"];
const TURNAMEN = [...GAME];
const HADIAH = [10, 20, 30, 50, 75];
const BATAS_DETIK = [30, 45, 60, 90, 120];
const BATAS_REKOR = 10;
const BATAS_LATIHAN = 10;
const BATAS_PAPAN = 10;
const TANGGAL = /^\d{4}-\d{2}-\d{2}$/;

// Terima tanggal ISO dari pemanggil bila valid, jika tidak pakai tanggal hari ini.
function tanggalDari(hit) {
	const masukan = hit && typeof hit === "object" ? hit.tanggal ?? hit.tanggalHari : hit;
	const teks = String(masukan ?? "");
	return TANGGAL.test(teks) ? teks : new Date().toISOString().slice(0, 10);
}

// Hash FNV 1a menghasilkan bilangan bulat tanpa random, agar hasil per hari tetap sama.
function hashTeks(teks) {
	let hasil = 2166136261;
	for (let i = 0; i < teks.length; i++) {
		hasil ^= teks.charCodeAt(i);
		hasil = Math.imul(hasil, 16777619);
	}
	return hasil >>> 0;
}

// Skor hanya dihitung dari bilangan bulat positif yang aman.
function angkaSkor(nilai) {
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n > 0 ? n : 0;
}

function daftarRekor(nilai) {
	if (Array.isArray(nilai)) {
		return nilai.map((x) => ({
			game: String(x?.game ?? x?.nama ?? x?.namaGame ?? "").slice(0, 40),
			skor: angkaSkor(x?.skor ?? x?.jumlah ?? x?.nilai ?? x),
		}));
	}
	if (nilai && typeof nilai === "object") {
		return Object.entries(nilai).map(([game, skor]) => ({
			game: String(game).slice(0, 40),
			skor: angkaSkor(skor),
		}));
	}
	return [];
}

function skorDari(nilai) {
	if (nilai === null || nilai === undefined) return 0;
	if (typeof nilai === "number" || typeof nilai === "string") return angkaSkor(nilai);
	if (Array.isArray(nilai)) {
		return nilai.reduce((n, x) => n + angkaSkor(x?.jumlah ?? x?.skor ?? x?.nilai ?? x), 0);
	}
	if (typeof nilai === "object") {
		return Object.values(nilai).reduce((n, x) => n + angkaSkor(x), 0);
	}
	return 0;
}

// Game harian mengikuti hash tanggal, bukan pilihan acak saat runtime.
export function harian(hit = {}) {
	const h = hashTeks(`${tanggalDari(hit)}:harian`);
	return {
		jenis: GAME[h % GAME.length],
		target: 3 + (h % 8),
		hadiah: HADIAH[h % HADIAH.length],
	};
}

// Tantangan memakai garam lain agar berbeda dari game harian, tetap deterministik per hari.
export function tantangan(hit = {}) {
	const h = hashTeks(`${tanggalDari(hit)}:tantangan`);
	return {
		jenis: GAME[h % GAME.length],
		batasDetik: BATAS_DETIK[h % BATAS_DETIK.length],
		hadiah: HADIAH[h % HADIAH.length],
	};
}

export function daftarTurnamen() {
	return [...TURNAMEN];
}

export function rekor(u) {
	if (!u || typeof u !== "object") return [];
	const utama = daftarRekor(u.rekorGame);
	const sumber = utama.length ? utama : daftarRekor(u.skorGame);
	return sumber.filter((x) => x.game && x.skor > 0).slice(0, BATAS_REKOR);
}

// Latihan tidak memberi hadiah dan tidak menyentuh saldo apa pun.
export function latihan(u, nama) {
	if (!u || typeof u !== "object") return false;
	const kunci = String(nama || "").trim().toLowerCase().slice(0, 40);
	if (!kunci) return false;
	if (!u.latihanV26 || typeof u.latihanV26 !== "object" || Array.isArray(u.latihanV26)) u.latihanV26 = {};
	const entri = u.latihanV26[kunci];
	if (entri && typeof entri === "object") {
		entri.count = Math.min(9999, angkaSkor(entri.count) + 1);
		entri.at = Date.now();
		return true;
	}
	if (Object.keys(u.latihanV26).length >= BATAS_LATIHAN) return false;
	u.latihanV26[kunci] = { at: Date.now(), count: 1 };
	return true;
}

export function papan(db) {
	if (!db || typeof db !== "object" || !db.users || typeof db.users !== "object" || Array.isArray(db.users)) return [];
	return Object.keys(db.users)
		.map((jid) => {
			const u = db.users[jid] && typeof db.users[jid] === "object" ? db.users[jid] : {};
			return { jid: String(jid), skor: skorDari(u.skorGameTerpadu) || angkaSkor(u.skor) };
		})
		.filter((x) => x.skor > 0)
		.sort((a, b) => b.skor - a.skor)
		.slice(0, BATAS_PAPAN);
}

export function hadiah(db, jid, poin) {
	if (!db || typeof db !== "object") return null;
	const n = Number(poin);
	if (!Number.isSafeInteger(n) || n < 1) return null;
	const penerima = String(jid || "");
	if (!penerima) return null;
	return ubahSaldo(db, penerima, "poin", n, "game:hadiah") || null;
}

export function beri(db, dari, ke, jumlah) {
	if (!db || typeof db !== "object") return null;
	const n = Number(jumlah);
	if (!Number.isSafeInteger(n) || n < 1) return null;
	const pengirim = String(dari || "");
	const penerima = String(ke || "");
	if (!pengirim || !penerima || pengirim === penerima) return null;
	return pindahSaldo(db, pengirim, penerima, "poin", n, "game:beri") || null;
}
