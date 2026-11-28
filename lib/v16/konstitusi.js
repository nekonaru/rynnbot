// Konstitusi grup dan tanda tangan hash lokal v16.

import crypto from "crypto";

export function konstitusiBuat(db, chat, judul) {
	if (!db.konstitusi) db.konstitusi = {};
	const id = Math.random().toString(36).slice(2, 7).toUpperCase();
	db.konstitusi[id] = { id, chat, judul: String(judul || "").slice(0, 100), pasal: [], versi: 1, setuju: [], at: Date.now() };
	return db.konstitusi[id];
}

export function konstitusiPasal(k, teks) {
	if (!k) return null;
	k.pasal.push(String(teks || "").slice(0, 300));
	k.pasal = k.pasal.slice(-30);
	k.versi += 1;
	return k;
}

export function konstitusiSetuju(k, jid) {
	if (!k || k.setuju.includes(jid)) return false;
	k.setuju.push(jid);
	return true;
}

export function tandaTangan(teks) {
	return crypto.createHash("sha256").update(String(teks || "")).digest("hex").slice(0, 16);
}

export function cekTandaTangan(kode, teks) {
	return tandaTangan(teks) === String(kode || "").toLowerCase();
}
