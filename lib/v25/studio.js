// Studio konten v25. Modul murni, seluruh state disimpan di objek pengguna.

import { posterTeks } from "../v12/media.js";

const JENIS = ["posterTeks", "kartuWarna", "komikPendek", "kartuUcapan", "galeri"];
const BATAS_KARYA = 10;
const BATAS_ISI = 20;
const PANJANG_ISI = 500;

// Ambil entri memakai id huruf besar agar pencarian tidak sensitif huruf.
function ambil(u, id) {
	const kunci = String(id || "").toUpperCase();
	if (!kunci) return null;
	return u?.studioV25?.[kunci] || null;
}

// Ubah status entri bila id ditemukan.
function ubahStatus(u, id, status) {
	const entri = ambil(u, id);
	if (!entri) return false;
	entri.status = status;
	return true;
}

export function daftarStudio() {
	return [...JENIS];
}

export function buatStudio(u, jenis) {
	if (!u || typeof u !== "object") return null;
	const j = String(jenis || "");
	if (!JENIS.includes(j)) return null;
	if (!u.studioV25 || typeof u.studioV25 !== "object") u.studioV25 = {};
	if (Object.keys(u.studioV25).length >= BATAS_KARYA) return null;
	let id = `S${Date.now().toString(36).slice(-5).toUpperCase()}`;
	while (u.studioV25[id]) id = `S${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
	const entri = { id, jenis: j, isi: [], gaya: "ungu", status: "draft" };
	u.studioV25[id] = entri;
	return entri;
}

export function isiStudio(u, id, teks) {
	const entri = ambil(u, id);
	const isi = String(teks || "").trim().slice(0, PANJANG_ISI);
	if (!entri || !isi || entri.isi.length >= BATAS_ISI) return false;
	entri.isi.push(isi);
	return true;
}

export function gayaStudio(u, id, gaya) {
	const entri = ambil(u, id);
	const g = String(gaya || "").trim().slice(0, 20);
	if (!entri || !g) return false;
	entri.gaya = g;
	return true;
}

export function jadwalkanStudio(u, id) {
	return ubahStatus(u, id, "terjadwal");
}

export function terbitStudio(u, id) {
	return ubahStatus(u, id, "terbit");
}

export function arsipStudio(u, id) {
	return ubahStatus(u, id, "arsip");
}

export function laporanStudio(u) {
	const hasil = { total: 0, draft: 0, terjadwal: 0, terbit: 0, arsip: 0 };
	for (const entri of daftarKarya(u)) {
		hasil.total += 1;
		if (Object.hasOwn(hasil, entri.status)) hasil[entri.status] += 1;
	}
	return hasil;
}

export function renderStudio(entry) {
	if (!entry || typeof entry !== "object") return "";
	const isi = Array.isArray(entry.isi) ? entry.isi.map((x) => String(x || "")).join(" ") : "";
	return posterTeks(
		String(entry.jenis || "posterTeks").slice(0, 40),
		isi.slice(0, 1000),
		String(entry.gaya || "ungu").slice(0, 20),
	);
}

export function daftarKarya(u) {
	return Object.values(u?.studioV25 || {});
}
