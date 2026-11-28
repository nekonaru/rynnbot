// Pembatasan path v18. Semua berkas harus berada di dalam workspace bot.

import path from "path";
import fs from "fs";

const DILARANG = new Set(["..", ".git", ".env", "node_modules"]);

export function aman(berkas, root = process.cwd()) {
	const nama = String(berkas || "");
	if (!nama || nama.includes("\0") || /^[a-zA-Z]:[\\/]/.test(nama)) return null;
	const penuh = path.resolve(root, nama);
	const batas = path.resolve(root) + path.sep;
	if (!penuh.startsWith(batas) && penuh !== path.resolve(root)) return null;
	const bagian = penuh.slice(batas.length).split(/[\\/]/);
	if (bagian.some((x) => DILARANG.has(x))) return null;
	return penuh;
}

export function ada(berkas, root = process.cwd()) {
	const penuh = aman(berkas, root);
	if (!penuh || !fs.existsSync(penuh)) return null;
	return penuh;
}

export function daftarAman(direktori, root = process.cwd()) {
	const penuh = aman(direktori, root);
	if (!penuh || !fs.existsSync(penuh)) return [];
	return fs.readdirSync(penuh).filter((n) => !DILARANG.has(n)).slice(0, 50);
}
