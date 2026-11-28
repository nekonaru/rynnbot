// Keamanan perintah v15. PIN disimpan sebagai hash lokal, bukan teks mentah.

import crypto from "crypto";

const hash = (pin) => crypto.createHash("sha256").update(String(pin || "")).digest("hex");

export function kunciPerintah(u, nama, pin) {
	const k = String(nama || "").toLowerCase().replace(/^\./, "");
	const p = String(pin || "");
	if (!k || !/^\d{4,6}$/.test(p)) return false;
	if (!u.kunciPerintah) u.kunciPerintah = {};
	u.kunciPerintah[k] = hash(p);
	return true;
}

export function lepasKunci(u, nama) {
	const k = String(nama || "").toLowerCase().replace(/^\./, "");
	if (!u.kunciPerintah || !u.kunciPerintah[k]) return false;
	delete u.kunciPerintah[k];
	return true;
}

export function butuhPin(u, nama) {
	return Boolean(u.kunciPerintah?.[String(nama || "").toLowerCase()]);
}

export function cocokPin(u, nama, pin) {
	const k = String(nama || "").toLowerCase().replace(/^\./, "");
	if (!u.kunciPerintah?.[k]) return true;
	return u.kunciPerintah[k] === hash(pin);
}

export function logKeamanan(db, entri) {
	if (!db.logKeamanan) db.logKeamanan = [];
	db.logKeamanan.push({ aksi: String(entri || "").slice(0, 80), at: Date.now() });
	db.logKeamanan = db.logKeamanan.slice(-50);
	return db.logKeamanan;
}
