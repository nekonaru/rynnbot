// Dompet v25. Satu jalur saldo memakai modul transaksi, dengan anggaran dan utang lokal.

import { ubahSaldo, riwayatTransaksi, rekonsiliasi } from "../transaksi.js";

const FIELD = ["money", "limit", "poin", "tabungan"];
const BATAS_ANGGARAN = 20;
const BATAS_UTANG = 20;
const BATAS_JID = 50;

// Mengembalikan angka positif yang aman, atau 0 bila tidak valid.
function nominalValid(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n > 0 ? n : 0;
}

// Saldo sah bila bulat, aman, dan tidak negatif.
function angkaSaldo(nilai) {
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n >= 0 ? n : 0;
}

function kunciNama(nama) {
	return String(nama ?? "").trim().toLowerCase().slice(0, 30);
}

function labelNama(nama) {
	return String(nama ?? "").trim().slice(0, 40);
}

function bersihJid(jid) {
	return String(jid ?? "").trim().slice(0, 120);
}

export function daftarField() {
	return [...FIELD];
}

export function ringkas(u) {
	return FIELD.map((field) => ({ field, jumlah: angkaSaldo(u?.[field]) }));
}

export function rincian(u, field) {
	if (!FIELD.includes(field) || !u || typeof u !== "object") return null;
	return angkaSaldo(u[field]);
}

export function pindah(db, jid, dari, ke, nominal) {
	const id = bersihJid(jid);
	const n = nominalValid(nominal);
	if (!id || !db || typeof db !== "object") return null;
	if (!FIELD.includes(dari) || !FIELD.includes(ke) || dari === ke || !n) return null;
	if ((Number(db.users?.[id]?.[dari]) || 0) < n) return null;
	const keluar = ubahSaldo(db, id, dari, -n, "dompet:pindah-keluar");
	if (!keluar) return null;
	const masuk = ubahSaldo(db, id, ke, n, "dompet:pindah-masuk");
	if (!masuk) {
		ubahSaldo(db, id, dari, n, "dompet:pindah-rollback");
		return null;
	}
	return { dari, ke, nominal: n };
}

export function rekap(db, field) {
	const hasil = new Map();
	for (const t of riwayatTransaksi(db, field, 200)) {
		const sumber = String(t?.sumber || "sistem").slice(0, 60);
		const baris = hasil.get(sumber) || { sumber, pemasukan: 0, pengeluaran: 0 };
		const n = Number(t?.nominal);
		if (Number.isSafeInteger(n) && n > 0) baris.pemasukan += n;
		else if (Number.isSafeInteger(n) && n < 0) baris.pengeluaran += -n;
		hasil.set(sumber, baris);
	}
	return [...hasil.values()];
}

export function log(db, field) {
	return riwayatTransaksi(db, field, 10);
}

export function rekonsiliasiDompet(db) {
	return rekonsiliasi(db);
}

function ruangAnggaran(u, buat = false) {
	if (!u || typeof u !== "object" || Array.isArray(u)) return null;
	if (!u.anggaran || typeof u.anggaran !== "object" || Array.isArray(u.anggaran)) {
		if (!buat) return null;
		u.anggaran = {};
	}
	return u.anggaran;
}

export function anggaranBuat(u, nama, nominal) {
	const kunci = kunciNama(nama);
	const n = nominalValid(nominal);
	if (!kunci || !n) return null;
	const peta = ruangAnggaran(u, true);
	if (!peta || peta[kunci] || Object.keys(peta).length >= BATAS_ANGGARAN) return null;
	peta[kunci] = { nama: labelNama(nama), total: n, terpakai: 0 };
	return peta[kunci];
}

export function anggaranIsi(u, nama, nominal) {
	const n = nominalValid(nominal);
	const item = ruangAnggaran(u)?.[kunciNama(nama)];
	if (!item || !n) return null;
	const total = angkaSaldo(item.total) + n;
	if (!Number.isSafeInteger(total)) return null;
	item.total = total;
	return item;
}

export function anggaranPakai(db, jid, nama, nominal) {
	const id = bersihJid(jid);
	const n = nominalValid(nominal);
	const item = db?.users?.[id]?.anggaran?.[kunciNama(nama)];
	if (!id || !n || !item || typeof item !== "object") return null;
	const terpakai = angkaSaldo(item.terpakai);
	if (angkaSaldo(item.total) - terpakai < n) return null;
	const bayar = ubahSaldo(db, id, "money", -n, "anggaran:pakai");
	if (!bayar) return null;
	item.terpakai = terpakai + n;
	return item;
}

export function anggaranSisa(u, nama) {
	const item = ruangAnggaran(u)?.[kunciNama(nama)];
	return item ? Math.max(0, angkaSaldo(item.total) - angkaSaldo(item.terpakai)) : null;
}

export function anggaranLaporan(u) {
	const peta = ruangAnggaran(u);
	if (!peta) return [];
	return Object.values(peta).slice(0, BATAS_ANGGARAN).filter((item) => item && typeof item === "object").map((item) => {
		const total = angkaSaldo(item.total);
		const terpakai = angkaSaldo(item.terpakai);
		return { nama: String(item.nama || "").slice(0, 40), total, terpakai, sisa: Math.max(0, total - terpakai) };
	});
}

export function anggaranHapus(u, nama) {
	const peta = ruangAnggaran(u);
	const kunci = kunciNama(nama);
	if (!peta || !kunci || !peta[kunci]) return false;
	delete peta[kunci];
	return true;
}

function bacaUtang(db, jid) {
	const id = bersihJid(jid);
	if (!id || !db || typeof db !== "object") return null;
	const peta = db.utangV25;
	if (!peta || typeof peta !== "object" || Array.isArray(peta)) return null;
	const ruang = peta[id];
	return ruang && typeof ruang === "object" && !Array.isArray(ruang) ? ruang : null;
}

function tulisUtang(db, jid) {
	const id = bersihJid(jid);
	if (!id || !db || typeof db !== "object") return null;
	if (!db.utangV25 || typeof db.utangV25 !== "object" || Array.isArray(db.utangV25)) db.utangV25 = {};
	const baru = !db.utangV25[id];
	if (baru && Object.keys(db.utangV25).length >= BATAS_JID) return null;
	if (!db.utangV25[id] || typeof db.utangV25[id] !== "object" || Array.isArray(db.utangV25[id])) db.utangV25[id] = {};
	return db.utangV25[id];
}

export function utangCatat(db, jid, nama, nominal) {
	const kunci = kunciNama(nama);
	const n = nominalValid(nominal);
	if (!kunci || !n) return null;
	const ruang = tulisUtang(db, jid);
	if (!ruang || ruang[kunci] || Object.keys(ruang).length >= BATAS_UTANG) return null;
	ruang[kunci] = { nama: labelNama(nama), sisa: n, at: Date.now() };
	return ruang[kunci];
}

export function utangBayar(db, jid, nama, nominal) {
	const id = bersihJid(jid);
	const n = nominalValid(nominal);
	const item = bacaUtang(db, jid)?.[kunciNama(nama)];
	if (!id || !n || !item || typeof item !== "object") return null;
	const sisa = angkaSaldo(item.sisa);
	if (sisa < n) return null;
	const bayar = ubahSaldo(db, id, "money", -n, "utang:bayar");
	if (!bayar) return null;
	item.sisa = sisa - n;
	return item;
}

export function utangTagih(db, nama) {
	const kunci = kunciNama(nama);
	const peta = db?.utangV25;
	if (!kunci || !peta || typeof peta !== "object" || Array.isArray(peta)) return [];
	const hasil = [];
	for (const [jid, ruang] of Object.entries(peta)) {
		const item = ruang && typeof ruang === "object" ? ruang[kunci] : null;
		if (!item || typeof item !== "object") continue;
		hasil.push({ jid, nama: String(item.nama || labelNama(nama)).slice(0, 40), sisa: angkaSaldo(item.sisa), at: Number(item.at) || 0 });
	}
	return hasil.slice(0, BATAS_JID);
}

export function utangDaftar(db, jid) {
	const ruang = bacaUtang(db, jid);
	if (!ruang) return [];
	return Object.values(ruang).slice(0, BATAS_UTANG).filter((item) => item && typeof item === "object").map((item) => ({
		nama: String(item.nama || "").slice(0, 40),
		sisa: angkaSaldo(item.sisa),
		at: Number(item.at) || 0,
	}));
}

export function utangHapus(db, jid, nama) {
	const ruang = bacaUtang(db, jid);
	const kunci = kunciNama(nama);
	if (!ruang || !kunci || !ruang[kunci]) return false;
	delete ruang[kunci];
	return true;
}
