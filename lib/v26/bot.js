// Observability bot v26. Modul murni, tanpa jaringan, berkas, atau efek samping saat import.

import { health, metrik as metrikOwner, cacheInfo } from "../v12/owner.js";
import { memoriPeta, jadwalKerja } from "../v16/owner.js";

const BATAS_NAMA = 40;
const BATAS_METRIK = 10;
const BATAS_FIELD = 5;
const BATAS_CONTOH = 5;
const BATAS_LAYANAN = 20;
const BATAS_INTERVAL = 20;

const MODUL_DIKENAL = ["ai", "laporan", "pencarian", "game", "moderasi", "media", "profil", "bot", "diagnosa", "owner12", "owner16"];
const STATE_DIKENAL = [
	"transferPending", "rateLimitState", "quizState", "mbtiState", "tebakState",
	"quizBeruntunState", "wordleState", "hangmanState", "soalState", "sudokuState",
	"tebakTokohState", "tebakLaguState", "tebakUrutanState", "turnamenMesin",
	"game2048State", "riddleState", "timState", "kuisHarian",
];

function objekValid(nilai) {
	return Boolean(nilai) && typeof nilai === "object" && !Array.isArray(nilai);
}

function bulatValid(nilai) {
	if (nilai === null || nilai === undefined || nilai === "") return null;
	const n = Number(nilai);
	return Number.isSafeInteger(n) ? n : null;
}

function angka(nilai) {
	const n = bulatValid(nilai);
	return n === null || n < 0 ? 0 : n;
}

function teks(nilai, batas) {
	return String(nilai ?? "").trim().slice(0, batas);
}

function jumlahEntri(nilai) {
	if (nilai instanceof Map) return nilai.size;
	if (Array.isArray(nilai)) return nilai.length;
	if (objekValid(nilai)) return Object.keys(nilai).length;
	return 0;
}

export function diagnosis(globalObj, db) {
	const h = health(objekValid(globalObj) ? globalObj : {}) || {};
	const sumber = objekValid(db) ? db : (objekValid(globalObj?.db) ? globalObj.db : {});
	return {
		uptime: angka(h.uptime),
		memori: angka(h.memoriMB),
		perintah: angka(h.perintah),
		jumlahUser: jumlahEntri(sumber.users),
		jumlahGrup: jumlahEntri(sumber.groups),
	};
}

export function metrik(db) {
	const hasil = metrikOwner(objekValid(db) ? db : {});
	if (!Array.isArray(hasil)) return [];
	return hasil.slice(0, BATAS_METRIK).map((entri) => {
		const pasangan = Array.isArray(entri) ? entri : [entri?.kunci, entri?.nilai];
		return [teks(pasangan[0], BATAS_NAMA), angka(pasangan[1])];
	});
}

export function panas(db) {
	if (!objekValid(db) && !(db instanceof Map)) return [];
	const pasangan = db instanceof Map ? [...db.entries()] : Object.entries(db);
	const hasil = [];
	for (const [kunci, nilai] of pasangan) {
		const nama = teks(kunci, BATAS_NAMA);
		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(nama)) continue;
		const jumlah = jumlahEntri(nilai);
		if (jumlah > 0) hasil.push({ field: nama, jumlah });
	}
	return hasil.sort((a, b) => b.jumlah - a.jumlah).slice(0, BATAS_FIELD);
}

export function beban(globalObj) {
	const g = objekValid(globalObj) ? globalObj : {};
	const jadwal = jadwalKerja(g) || {};
	let intervalAktif = 0;
	if (jadwal.sweeper) intervalAktif += 1;
	if (jadwal.gc) intervalAktif += 1;
	for (const [kunci, nilai] of Object.entries(g)) {
		if (kunci === "_stateSweeper" || kunci === "_gcInterval") continue;
		if (/^_?[a-zA-Z]+(Interval|Timer)$/.test(kunci) && nilai && typeof nilai !== "function") intervalAktif += 1;
	}
	let stateAktif = 0;
	for (const nama of STATE_DIKENAL) {
		if (jumlahEntri(g[nama]) > 0) stateAktif += 1;
	}
	return {
		memoriMB: angka(memoriPeta().heap),
		intervalAktif: Math.min(BATAS_INTERVAL, intervalAktif),
		stateAktif,
	};
}

export function cache(globalObj) {
	const peta = objekValid(globalObj) && globalObj.cache instanceof Map ? globalObj.cache : null;
	const contoh = peta ? [...peta.keys()].slice(0, BATAS_CONTOH).map((kunci) => teks(kunci, BATAS_NAMA)) : [];
	return { tersedia: Boolean(peta), ukuran: cacheInfo(peta), contoh };
}

// Pemeriksaan memakai daftar tetap, bukan dynamic import.
export function uji(nama) {
	const n = teks(nama, BATAS_NAMA).toLowerCase();
	return { nama: n, tersedia: MODUL_DIKENAL.includes(n) };
}

// Menandai layanan sebagai berhenti. Proses tidak dimatikan di sini.
export function hentikan(db, nama) {
	if (!objekValid(db)) return false;
	const n = teks(nama, BATAS_NAMA).toLowerCase();
	if (!n) return false;
	if (!objekValid(db.layananHentiV26)) db.layananHentiV26 = {};
	const peta = db.layananHentiV26;
	const kunci = Object.keys(peta);
	if (!kunci.includes(n) && kunci.length >= BATAS_LAYANAN) delete peta[kunci[0]];
	peta[n] = true;
	return true;
}

export function jadwal(db) {
	const bawaan = { perawatan: "mingguan", terakhir: null };
	const j = objekValid(db) ? db.jadwalBotV26 : null;
	if (!objekValid(j)) return bawaan;
	return {
		perawatan: teks(j.perawatan, 20) || bawaan.perawatan,
		terakhir: bulatValid(j.terakhir),
	};
}
