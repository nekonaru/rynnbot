// Komunitas grup, proyek, survei, dan reputasi v25. State disimpan di db yang diberikan.

import { kartuGrup, daftarAdmin, formatPeraturan, aktivitasGrup } from "../v13/grup.js";
import { proyekBuat, proyekTugas, proyekPapan, proyekArsip } from "../v15/proyekgrup.js";
import { reputasiBeri, papanReputasi } from "../v15/reputasi.js";
import { surveiBuat, surveiAmbil, surveiJawab, surveiHasil, surveiTutup } from "../v16/survei.js";

const ATURAN_REPUTASI = [
	"Nilai reputasi berkisar antara -5 sampai 5.",
	"Nilai nol tidak dicatat.",
	"Satu pemberi hanya dapat memberi reputasi sekali per hari.",
	"Penerima reputasi harus memiliki nama lebih dari dua karakter.",
];

function bilangan(nilai) {
	const n = Number(nilai);
	return Number.isSafeInteger(n) ? n : null;
}

function teks(nilai, panjang = 40) {
	return String(nilai ?? "").trim().slice(0, panjang);
}

function ambilProyek(db, chat, nama) {
	const kunci = `${chat}:${teks(nama, 30).toLowerCase()}`;
	return db?.proyekGrup?.[kunci] || null;
}

export function papanGrupV25(db, chat) {
	return kartuGrup(chat, db || {}, db?.groups?.[chat]);
}

export function anggotaGrup(db, chat) {
	return daftarAdmin(db || {}, chat, null);
}

export function peranGrup(db, chat) {
	return daftarAdmin(db || {}, chat, null);
}

export function aturanGrup(db, chat) {
	return formatPeraturan(db || {}, chat);
}

export function notifikasiGrup(db, chat) {
	return aktivitasGrup(db?.grupAktivitas?.[chat] || {});
}

export function proyekBaru(db, chat, nama, jid) {
	return proyekBuat(db, chat, nama, jid);
}

export function proyekTugasV25(db, chat, nama, teksTugas) {
	return proyekTugas(ambilProyek(db, chat, nama), teksTugas);
}

export function proyekProgres(db, chat, nama) {
	return proyekPapan(ambilProyek(db, chat, nama));
}

export function proyekAnggota(db, chat, nama) {
	const proyek = ambilProyek(db, chat, nama);
	return Array.isArray(proyek?.anggota) ? proyek.anggota.slice(0, 30) : [];
}

export function proyekTenggat(db, chat, nama, tanggal) {
	const proyek = ambilProyek(db, chat, nama);
	const nilai = teks(tanggal, 40);
	if (!proyek || !nilai) return null;
	proyek.tenggat = nilai;
	return proyek;
}

export function proyekArsipV25(db, chat, nama) {
	return proyekArsip(ambilProyek(db, chat, nama));
}

export function surveiBaru(db, chat, judul) {
	return surveiBuat(db, chat, judul);
}

export function surveiPilih(db, id, opsi, jid) {
	return surveiJawab(surveiAmbil(db, id), jid, opsi);
}

export function surveiHasilV25(db, id) {
	return surveiHasil(surveiAmbil(db, id));
}

export function surveiTutupV25(db, id) {
	return surveiTutup(surveiAmbil(db, id));
}

export function reputasiLihat(db, jid) {
	return bilangan(db?.reputasi?.[jid]) || 0;
}

export function reputasiBeriV25(db, dari, ke, jumlah) {
	return reputasiBeri(db, dari, ke, jumlah);
}

export function reputasiPapanV25(db) {
	return papanReputasi(db).slice(0, 10);
}

export function reputasiAturan() {
	return [...ATURAN_REPUTASI];
}
