// Keamanan perintah v15. PIN disimpan dengan scrypt dan salt acak per entri.

import crypto from "crypto";

function buatHash(pin, salt) {
	return crypto.scryptSync(String(pin || ""), salt, 32).toString("hex");
}

function sama(a, b) {
	const x = Buffer.from(String(a || ""), "hex");
	const y = Buffer.from(String(b || ""), "hex");
	return x.length === y.length && crypto.timingSafeEqual(x, y);
}

export function kunciPerintah(u, nama, pin) {
	const k = String(nama || "").toLowerCase().replace(/^\./, "");
	const p = String(pin || "");
	if (!k || !/^\d{4,6}$/.test(p)) return false;
	if (!u.kunciPerintah) u.kunciPerintah = {};
	const salt = crypto.randomBytes(16).toString("hex");
	u.kunciPerintah[k] = { salt, hash: buatHash(p, salt) };
	return true;
}

export function lepasKunci(u, nama, pin) {
	const k = String(nama || "").toLowerCase().replace(/^\./, "");
	if (!u?.kunciPerintah?.[k] || !cocokPin(u, k, pin)) return false;
	delete u.kunciPerintah[k];
	return true;
}

export function butuhPin(u, nama) {
	return Boolean(u?.kunciPerintah?.[String(nama || "").toLowerCase()]);
}

export function cocokPin(u, nama, pin) {
	const entri = u?.kunciPerintah?.[String(nama || "").toLowerCase()];
	if (!entri) return true;
	return sama(buatHash(pin, entri.salt), entri.hash);
}

export function logKeamanan(db, entri) {
	if (!db.logKeamanan) db.logKeamanan = [];
	db.logKeamanan.push({ aksi: String(entri || "").slice(0, 80), at: Date.now() });
	db.logKeamanan = db.logKeamanan.slice(-50);
	return db.logKeamanan;
}
