// Media kreatif v26. Spesifikasi dibuat lokal tanpa berkas atau jaringan.
// Modul murni, state galeri berada di objek pengguna yang diberikan.

import { kartuWarna, posterTeks, stikerAnimasiSpec } from "../v12/media.js";

const BATAS_GALERI = 10;
const PANJANG_MAKSIMAL = 2000;
const FRAME_MIN = 2;
const FRAME_MAX = 12;
const UKURAN_STIKER = 512;

function teksDari(data) {
	if (data && typeof data === "object") return String(data.teks ?? data.isi ?? data.teksAwal ?? "");
	return String(data ?? "");
}

function bulatAman(nilai, bawaan) {
	const n = Number(nilai);
	return Number.isSafeInteger(n) ? n : bawaan;
}

export function kartu(judul, isi) {
	const hasil = kartuWarna(judul, isi);
	return `*${hasil.nama}*\n\n${hasil.nilai}`;
}

export function poster(judul, isi, gaya) {
	return posterTeks(
		String(judul ?? "Rynn").slice(0, 80),
		String(isi ?? "").slice(0, 1000),
		String(gaya ?? "ungu").slice(0, 20),
	);
}

// Stiker hanya berupa spesifikasi, tidak menulis atau mengirim berkas.
export function stiker(teks) {
	const spec = stikerAnimasiSpec(teks, 8);
	return {
		teks: spec.nama,
		frame: Math.min(FRAME_MAX, spec.frame),
		ukuran: UKURAN_STIKER,
	};
}

export function galeri(u) {
	if (!u || typeof u !== "object") return [];
	const data = u.mediaV26;
	if (Array.isArray(data)) return data.slice(0, BATAS_GALERI).filter((e) => e !== null && e !== undefined);
	if (data && typeof data === "object") return Object.values(data).slice(0, BATAS_GALERI);
	return [];
}

export function animasi(nama, frame) {
	const n = bulatAman(frame, 8);
	return {
		nama: String(nama ?? "rynn").trim().slice(0, 40) || "rynn",
		frame: Math.min(FRAME_MAX, Math.max(FRAME_MIN, n)),
		status: "siap",
	};
}

export function meta(data) {
	const teks = teksDari(data);
	return {
		panjang: teks.length,
		baris: teks ? teks.split(/\r?\n/).length : 0,
		kata: teks.trim() ? teks.trim().split(/\s+/).length : 0,
	};
}

export function uji(data) {
	const panjang = meta(data).panjang;
	if (!panjang) return { layak: false, alasan: "Teks kosong." };
	if (panjang > PANJANG_MAKSIMAL) return { layak: false, alasan: "Teks melebihi 2000 karakter." };
	return { layak: true, alasan: "Teks layak." };
}

export function hapus(u, id) {
	if (!u || typeof u !== "object") return false;
	const kunci = String(id ?? "").trim();
	if (!kunci) return false;
	const data = u.mediaV26;
	if (Array.isArray(data)) {
		const indeks = data.findIndex((e) => String(e?.id ?? e) === kunci);
		if (indeks === -1) return false;
		data.splice(indeks, 1);
		return true;
	}
	if (data && typeof data === "object") {
		if (!Object.hasOwn(data, kunci)) return false;
		delete data[kunci];
		return true;
	}
	return false;
}
