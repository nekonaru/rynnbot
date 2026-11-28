// Kompetisi v25. Skor gabungan, musim berjalan, dan pertandingan memakai state bersama.

import { ubahSaldo } from "../transaksi.js";
import { turnamenAktif, catatHasil, arsipTurnamen } from "../v12/kompetisi.js";

const BATAS_RINCIAN = 20;

// Mengembalikan angka positif yang aman, atau 0 bila tidak valid.
function nominalValid(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n > 0 ? n : 0;
}

function angkaSkor(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n >= 0 ? n : 0;
}

function skorDari(nilai) {
	if (typeof nilai === "number" || typeof nilai === "string") return angkaSkor(nilai);
	if (Array.isArray(nilai)) {
		return nilai.reduce((n, x) => n + angkaSkor(x?.jumlah ?? x?.skor ?? x?.nilai ?? x), 0);
	}
	if (nilai && typeof nilai === "object") {
		return Object.values(nilai).reduce((n, x) => n + angkaSkor(x), 0);
	}
	return 0;
}

export function skorTotal(db, jid) {
	const u = db?.users?.[String(jid ?? "")];
	if (!u || typeof u !== "object") return 0;
	return skorDari(u.skorGameTerpadu) || angkaSkor(u.skor);
}

export function skorRincian(u) {
	if (!u || typeof u !== "object") return [];
	const sumber = Array.isArray(u.skorGame) ? u.skorGame : Array.isArray(u.gameSkor) ? u.gameSkor : null;
	if (sumber) {
		return sumber.slice(0, BATAS_RINCIAN).map((x) => ({
			game: String(x?.game ?? x?.nama ?? x?.namaGame ?? "").slice(0, 40),
			skor: angkaSkor(x?.skor ?? x?.jumlah ?? x?.nilai ?? x),
		})).filter((x) => x.game && x.skor > 0);
	}
	const peta = u.skorGame && typeof u.skorGame === "object" ? u.skorGame : u.gameSkor && typeof u.gameSkor === "object" ? u.gameSkor : null;
	if (!peta) return [];
	return Object.entries(peta).slice(0, BATAS_RINCIAN).map(([game, skor]) => ({
		game: String(game).slice(0, 40),
		skor: angkaSkor(skor),
	})).filter((x) => x.game && x.skor > 0);
}

export function skorPapan(db) {
	const users = db?.users && typeof db.users === "object" && !Array.isArray(db.users) ? db.users : {};
	return Object.keys(users)
		.map((jid) => ({ jid, skor: skorTotal(db, jid) }))
		.filter((x) => x.skor > 0)
		.sort((a, b) => b.skor - a.skor)
		.slice(0, 10);
}

export function skorMusim(db) {
	const musim = new Date().toISOString().slice(0, 7);
	const tahun = Number(musim.slice(0, 4));
	const bulan = Number(musim.slice(5, 7));
	const awal = Date.UTC(tahun, bulan - 1, 1);
	const akhir = Date.UTC(tahun, bulan, 1);
	const users = db?.users && typeof db.users === "object" && !Array.isArray(db.users) ? db.users : {};
	let totalPeserta = 0;
	let totalSkor = 0;
	for (const [jid, u] of Object.entries(users)) {
		const tanda = Number(u?.at ?? u?.terakhir ?? u?.updateAt);
		if (Number.isFinite(tanda) && tanda > 0 && (tanda < awal || tanda >= akhir)) continue;
		const skor = skorTotal(db, jid);
		if (skor < 1) continue;
		totalPeserta++;
		totalSkor += skor;
	}
	return { musim, totalPeserta, totalSkor };
}

export function skorArsip(db) {
	return Array.isArray(db?.skorArsipV25) ? db.skorArsipV25.slice(-10) : [];
}

function aktif(db, chat) {
	if (!db || typeof db !== "object") return null;
	return turnamenAktif(db, chat) || null;
}

export function jadwal(db, chat) {
	const t = aktif(db, chat);
	return Array.isArray(t?.jadwal) ? t.jadwal.slice(0, 20) : [];
}

export function peserta(db, chat) {
	const t = aktif(db, chat);
	return Array.isArray(t?.peserta) ? t.peserta.slice(0, 32) : [];
}

export function unggulan(db, chat) {
	return peserta(db, chat)
		.map((jid) => ({ jid, skor: skorTotal(db, jid) }))
		.sort((a, b) => b.skor - a.skor);
}

export function bracket(db, chat) {
	return aktif(db, chat)?.bracket || null;
}

export function hasil(db, chat, a, b, pemenang) {
	if (!db || typeof db !== "object") return null;
	return catatHasil(db, chat, pemenang, a === pemenang ? b : a);
}

export function poin(db, jid, jumlah) {
	const n = nominalValid(jumlah);
	if (!n || !db || typeof db !== "object") return null;
	return ubahSaldo(db, String(jid ?? ""), "poin", n, "turnamen:poin");
}

export function arsip(db, chat) {
	if (!db || typeof db !== "object") return [];
	return arsipTurnamen(db, chat) || [];
}

function cocok(laga, nama) {
	const cari = String(nama ?? "").trim().toLowerCase();
	if (!cari || !laga || typeof laga !== "object") return false;
	return [laga.a, laga.b, laga.nama, laga.tim, laga.lawan]
		.filter(Boolean)
		.join(" ")
		.toLowerCase()
		.includes(cari);
}

export function lagaCari(db, chat, nama) {
	return jadwal(db, chat).filter((laga) => cocok(laga, nama)).slice(0, 10);
}

export function lagaJadwal(db, chat, nama) {
	return jadwal(db, chat).find((laga) => cocok(laga, nama)) || null;
}

export function lagaPapan(db, chat) {
	const t = aktif(db, chat);
	const hasil = t?.hasil;
	if (!Array.isArray(hasil)) return [];
	const hitung = new Map();
	for (const h of hasil) {
		const menang = String(h?.pemenang || h?.winner || "");
		if (menang) hitung.set(menang, (hitung.get(menang) || 0) + 1);
		for (const kunci of ["a", "b"]) {
			const jid = String(h?.[kunci] || "");
			if (jid && !hitung.has(jid)) hitung.set(jid, 0);
		}
	}
	return [...hitung].map(([jid, menang]) => ({ jid, menang })).sort((a, b) => b.menang - a.menang).slice(0, 10);
}
