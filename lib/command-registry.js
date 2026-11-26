// Registry perintah ringan. Sumbernya adalah blok menu di handler.js,
// sehingga tidak perlu mendaftar ratusan perintah dua kali.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HANDLER = path.resolve(__dirname, "..", "handler.js");

let cache = null;

function bangun() {
	if (cache) return cache;
	const sumber = fs.readFileSync(HANDLER, "utf8");
	const cases = new Set([...sumber.matchAll(/^\t\t\tcase\s+["']([a-z0-9_]+)["']:/gm)].map((m) => m[1]));
	const daftar = [];
	let kategori = "Umum";
	for (const baris of sumber.split(/\r?\n/)) {
		const judul = baris.match(/❍\s*「\s*\*([^*]+)\*\s*」/);
		if (judul) {
			kategori = judul[1].trim();
			continue;
		}
		const entri = baris.match(/│\$\{setv\}\s+\$\{prefix\}([a-z0-9_]+)([^\n]*)/);
		if (!entri) continue;
		const command = entri[1];
		if (!cases.has(command)) continue;
		let deskripsi = entri[2].trim();
		deskripsi = deskripsi.replace(/^\(([^)]*)\)\s*/, "$1 ").trim();
		daftar.push({ command, deskripsi, kategori, terdaftar: true });
	}
	const unik = new Map();
	for (const e of daftar) if (!unik.has(e.command)) unik.set(e.command, e);
	cache = {
		daftar: [...unik.values()],
		cases: [...cases],
		kategori: [...new Set(daftar.map((e) => e.kategori))].sort(),
	};
	return cache;
}

export const daftarCommand = () => bangun().daftar;
export const daftarKategoriCommand = () => {
	const reg = bangun();
	return reg.kategori.map((kategori) => ({ kategori, jumlah: reg.daftar.filter((e) => e.kategori === kategori).length }));
};
export const cariCommand = (kata) => {
	const q = String(kata || "").trim().toLowerCase();
	if (!q) return [];
	return bangun().daftar.filter((e) => e.command.includes(q) || e.deskripsi.toLowerCase().includes(q) || e.kategori.toLowerCase().includes(q)).slice(0, 20);
};
export const infoCommand = (nama) => {
	const c = String(nama || "").trim().toLowerCase().replace(/^\./, "");
	return bangun().daftar.find((e) => e.command === c) || null;
};
export const jumlahCase = () => bangun().cases.length;
