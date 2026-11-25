// Utilitas pengembang murni lokal: hash, URL encoding, dan validasi JSON.
// Tidak menyimpan input ke disk dan tidak memakai jaringan.

import crypto from "crypto";

const ALGO_DIIZINKAN = new Set(["md5", "sha1", "sha256", "sha512"]);

export const hashTeks = (algoritma, teks) => {
	const algo = String(algoritma || "sha256").toLowerCase();
	if (!ALGO_DIIZINKAN.has(algo)) return null;
	if (typeof teks !== "string" || teks.length > 10000) return null;
	return crypto.createHash(algo).update(teks, "utf8").digest("hex");
};

export const urlEncode = (teks) => {
	if (typeof teks !== "string" || teks.length > 5000) return null;
	return encodeURIComponent(teks);
};

export const urlDecode = (teks) => {
	if (typeof teks !== "string" || teks.length > 5000) return null;
	try {
		return decodeURIComponent(teks);
	} catch {
		return null;
	}
};

export const validasiJson = (teks, opsi = {}) => {
	if (typeof teks !== "string" || teks.length > 10000) return { ok: false, alasan: "Teks kosong atau terlalu panjang (maksimal 10.000 karakter)." };
	try {
		const parsed = JSON.parse(teks);
		if (opsi.rapi) return { ok: true, hasil: JSON.stringify(parsed, null, 2) };
		return { ok: true, hasil: null, tipe: Array.isArray(parsed) ? "array" : parsed === null ? "null" : typeof parsed };
	} catch (e) {
		return { ok: false, alasan: e.message };
	}
};
