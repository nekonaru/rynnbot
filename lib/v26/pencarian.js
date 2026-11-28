// Pencarian lintas data v26. Modul murni, tanpa efek samping saat import.
// Hasil dibatasi maksimal sepuluh entri agar ringan dan mudah dibaca.

import { cariDataset } from "../data-v23/indeks.js";
import { cariCommand } from "../command-registry.js";

const BATAS_HASIL = 10;
const BATAS_KATA = 100;
const BATAS_LOG = 200;

function teks(nilai, maksimal = BATAS_KATA) {
	return String(nilai ?? "").trim().slice(0, maksimal);
}

function kunci(nilai, maksimal = BATAS_KATA) {
	return teks(nilai, maksimal).toLowerCase();
}

function petaObjek(nilai) {
	return nilai && typeof nilai === "object" && !Array.isArray(nilai) ? nilai : null;
}

// Pencarian kosong sengaja ditolak agar tidak mengembalikan seluruh isi indeks.
export function perintah(kata) {
	const q = kunci(kata, 80);
	if (!q) return [];
	try {
		return cariCommand(q).slice(0, BATAS_HASIL);
	} catch {
		return [];
	}
}

export function data(kata) {
	const q = kunci(kata, 80);
	if (!q) return [];
	try {
		return cariDataset(q).slice(0, BATAS_HASIL);
	} catch {
		return [];
	}
}

export function lintas(kata) {
	const q = kunci(kata, 80);
	if (!q) return [];
	const hasil = [];
	for (const entri of data(q)) hasil.push({ sumber: "data", dataset: entri.dataset, entri: entri.entri });
	for (const entri of perintah(q)) hasil.push({ sumber: "perintah", command: entri.command, deskripsi: entri.deskripsi });
	return hasil.slice(0, BATAS_HASIL);
}

export function pengguna(db, kata) {
	const q = kunci(kata, 80);
	const users = petaObjek(db?.users);
	if (!q || !users) return [];
	return Object.keys(users).filter((jid) => {
		if (teks(jid, 120).toLowerCase().includes(q)) return true;
		const u = petaObjek(users[jid]);
		if (!u) return false;
		return [u.nama, u.bio, u.username].some((x) => teks(x, 120).toLowerCase().includes(q));
	}).slice(0, BATAS_HASIL);
}

export function grup(db, kata) {
	const q = kunci(kata, 80);
	const groups = petaObjek(db?.groups);
	if (!q || !groups) return [];
	return Object.keys(groups).filter((chat) => {
		if (teks(chat, 120).toLowerCase().includes(q)) return true;
		const g = petaObjek(groups[chat]);
		if (!g) return false;
		return teks(g.peraturan, 300).toLowerCase().includes(q);
	}).slice(0, BATAS_HASIL);
}

export function riwayat(db, jid, kata) {
	const q = kunci(kata, 80);
	const id = teks(jid, 120);
	if (!q || !id) return [];
	const log = Array.isArray(db?.transaksiLog) ? db.transaksiLog.slice(-BATAS_LOG) : [];
	return log
		.filter((t) => t && typeof t === "object" && (t.ke === id || t.dari === id) && JSON.stringify(t).toLowerCase().includes(q))
		.slice(-BATAS_HASIL)
		.reverse();
}

export function simpan(u, kata) {
	if (!u || typeof u !== "object" || Array.isArray(u)) return null;
	const nilai = teks(kata, BATAS_KATA);
	const q = nilai.toLowerCase();
	if (!q) return null;
	if (!Array.isArray(u.pencarianV26)) u.pencarianV26 = [];
	const daftar = u.pencarianV26.filter((x) => typeof x === "string").slice(0, BATAS_HASIL);
	if (daftar.some((x) => x.toLowerCase() === q)) return [...daftar];
	daftar.push(nilai);
	u.pencarianV26 = daftar.slice(-BATAS_HASIL);
	return [...u.pencarianV26];
}

export function tersimpan(u) {
	const daftar = Array.isArray(u?.pencarianV26) ? u.pencarianV26 : [];
	return daftar.filter((x) => typeof x === "string").slice(0, BATAS_HASIL);
}

export function hapus(u, kata) {
	const q = kunci(kata, BATAS_KATA);
	const daftar = Array.isArray(u?.pencarianV26) ? u.pencarianV26 : [];
	if (!q || !daftar.some((x) => typeof x === "string" && x.toLowerCase() === q)) return false;
	u.pencarianV26 = daftar.filter((x) => typeof x !== "string" || x.toLowerCase() !== q).slice(0, BATAS_HASIL);
	return true;
}
