// Penyatuan data fitur v20. Turnamen, liga, kuis, dan wordle memakai satu sumber.

import { klasemen, formatKlasemen } from "../turnamen-mesin.js";

const BATAS = 30;

export const normJid = (value) => {
	const teks = String(value || "");
	return teks.includes("@") ? teks : `${teks}@s.whatsapp.net`;
};

export function catatJuara(db, kejuaraan, jidPemenang, chat = "") {
	if (!db.juara) db.juara = [];
	const entri = {
		id: kejuaraan?.id || "",
		nama: kejuaraan?.nama || "Turnamen",
		mode: kejuaraan?.mode || "single",
		peserta: kejuaraan?.peserta?.length || 0,
		juara: normJid(jidPemenang || kejuaraan?.juara),
		chat: String(chat || ""),
		at: Date.now(),
	};
	db.juara.push(entri);
	db.juara = db.juara.slice(-BATAS);
	return db.juara;
}

export function papanJuara(db) {
	return (db.juara || []).slice().reverse();
}

export function beriPoinJuara(db, jid, poin = 10) {
	if (!db.users) db.users = {};
	if (!db.users[jid]) db.users[jid] = {};
	db.users[jid].poin = (db.users[jid].poin || 0) + poin;
	db.users[jid].badge = db.users[jid].badge || [];
	if (!db.users[jid].badge.includes("juara")) db.users[jid].badge.push("juara");
	db.users[jid].badge = db.users[jid].badge.slice(-20);
	return db.users[jid].poin;
}

export function klasemenLigaDariMesin(kejuaraan) {
	return formatKlasemen(kejuaraan);
}

export function skorGameTerpadu(hit = {}) {
	const daftar = ["quiz", "soal", "hangman", "slot", "turnamen", "wordle", "sudoku", "game2048", "tebaktokoh", "kartutaruhan"];
	return daftar.map((nama) => ({ nama, jumlah: Number(hit[nama]) || 0 })).filter((x) => x.jumlah > 0).sort((a, b) => b.jumlah - a.jumlah);
}

export function aktivitasTerpadu(u = {}) {
	return {
		poin: u.poin || 0,
		skorBelajar: u.skorBelajar || 0,
		koleksi: (u.koleksi || []).length,
		badge: (u.badge || []).length,
		riwayat: (u.riwayat || []).length,
	};
}

export function formatJadwal(kejuaraan) {
	return (kejuaraan?.jadwal || []).slice(-8).map((j) => `- ${j.a} vs ${j.b}: ${j.waktu}`).join("\n") || "(belum ada jadwal)";
}

export function ringkasanJuara(entri) {
	return entri.map((j, i) => `${i + 1}. @${String(j.juara).split("@")[0]} - ${j.nama} (${j.mode}, ${j.peserta} peserta)`).join("\n") || "(belum ada juara)";
}

export { klasemen, formatKlasemen };
