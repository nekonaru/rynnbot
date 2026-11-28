import { pindahSaldo } from "../transaksi.js";

// Poin terpadu dan hadiah kosmetik v15.

export function tambahPoin(u, jumlah, alasan) {
	const n = Number(jumlah);
	if (!Number.isInteger(n) || n === 0) return null;
	u.poin = Math.max(0, (u.poin || 0) + n);
	u.poinLog = u.poinLog || [];
	u.poinLog.push({ jumlah: n, alasan: String(alasan || "aktivitas").slice(0, 60), at: Date.now() });
	u.poinLog = u.poinLog.slice(-30);
	return u.poin;
}

export function papanPoin(db) {
	return Object.entries(db.users || {})
		.map(([jid, u]) => ({ jid, poin: u.poin || 0 }))
		.filter((x) => x.poin > 0)
		.sort((a, b) => b.poin - a.poin)
		.slice(0, 10);
}

export function hadiahTambah(db, nama, poin) {
	if (!db.hadiahPoin) db.hadiahPoin = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 30);
	const p = Number(poin);
	if (!kunci || !Number.isInteger(p) || p < 1) return null;
	db.hadiahPoin[kunci] = { nama: String(nama).slice(0, 30), poin: p };
	return db.hadiahPoin;
}

export function hadiahTukar(u, db, nama) {
	const h = db.hadiahPoin?.[String(nama || "").toLowerCase()];
	if (!h || (u.poin || 0) < h.poin) return null;
	u.poin -= h.poin;
	u.koleksi = u.koleksi || [];
	u.koleksi.push(h.nama);
	return h;
}

export function transferPoin(db, dari, ke, jumlah) {
	const n = Number(jumlah);
	if (typeof dari === "string") return Boolean(pindahSaldo(db, dari, ke, "poin", n, "poin"));
	if (!Number.isInteger(n) || n < 1 || (dari.poin || 0) < n) return false;
	dari.poin -= n;
	if (!db.users[ke]) db.users[ke] = {};
	db.users[ke].poin = (db.users[ke].poin || 0) + n;
	return true;
}
