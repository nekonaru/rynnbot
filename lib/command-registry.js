// Registry perintah v2. Sumbernya adalah blok menu dan switch di handler.js,
// sehingga metadata tidak perlu didaftarkan dua kali.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HANDLER = path.resolve(__dirname, "..", "handler.js");

let cache = null;

function bangun() {
	if (cache) return cache;
	const sumber = fs.readFileSync(HANDLER, "utf8");
	const baris = sumber.split(/\r?\n/);

	// Kumpulkan grup case. Dua case berurutan sebelum break berarti alias.
	const grup = [];
	let aktif = null;
	let masihHeader = true;
	for (const barisSumber of baris) {
		const m = barisSumber.match(/^\t\t\tcase\s+["']([a-z0-9_]+)["']:/);
		if (m) {
			if (!aktif || !masihHeader) {
				aktif = { nama: [], teks: [] };
				grup.push(aktif);
			}
			aktif.nama.push(m[1]);
			aktif.teks.push(barisSumber);
			masihHeader = true;
			continue;
		}
		if (!aktif) continue;
		aktif.teks.push(barisSumber);
		// Baris kosong dan komentar tidak menutup deretan label case.
		if (!/^\s*(\/\/.*)?$/.test(barisSumber)) masihHeader = false;
	}

	const meta = new Map();
	for (const g of grup) {
		const isi = g.teks.join("\n");
		const role = /\bisCreator\b/.test(isi) ? "owner" : /\bm\.isAdmin\b/.test(isi) ? "admin" : /\bm\.isGroup\b/.test(isi) ? "grup" : "semua";
		const biayaLimit = /setLimit\(m, db\)/.test(isi) ? 1 : 0;
		for (const nama of g.nama) {
			meta.set(nama, {
				alias: g.nama.filter((x) => x !== nama),
				role,
				biayaLimit,
			});
		}
	}

	// Baca menu untuk deskripsi dan kategori.
	const daftar = [];
	const terlihat = new Set();
	let kategori = "Umum";
	for (const barisSumber of baris) {
		const judul = barisSumber.match(/❍\s*「\s*\*([^*]+)\*\s*」/);
		if (judul) {
			kategori = judul[1].trim();
			continue;
		}
		const entri = barisSumber.match(/│\$\{setv\}\s+\$\{prefix\}([a-z0-9_]+)([^\n]*)/);
		if (!entri) continue;
		const command = entri[1];
		if (!meta.has(command) || terlihat.has(command)) continue;
		terlihat.add(command);
		let deskripsi = entri[2].trim();
		deskripsi = deskripsi.replace(/^\(([^)]*)\)\s*/, "$1 ").trim();
		const contoh = "." + command + (entri[2].trim().match(/^(\[[^\]]*\]|\([^)]*\))/)?.[0] || "");
		const m = meta.get(command);
		daftar.push({
			command,
			nama: command,
			alias: m.alias,
			kategori,
			deskripsi,
			contoh,
			biayaLimit: m.biayaLimit,
			role: m.role,
			hidden: false,
			terdaftar: true,
		});
	}

	// Case tanpa entri menu tetap tercatat sebagai perintah tersembunyi.
	for (const [command, m] of meta) {
		if (terlihat.has(command)) continue;
		daftar.push({
			command,
			nama: command,
			alias: m.alias,
			kategori: "Tersembunyi",
			deskripsi: "",
			contoh: "." + command,
			biayaLimit: m.biayaLimit,
			role: m.role,
			hidden: true,
			terdaftar: false,
		});
	}

	cache = {
		daftar,
		cases: [...meta.keys()],
		kategori: [...new Set(daftar.filter((e) => !e.hidden).map((e) => e.kategori))].sort(),
	};
	return cache;
}

export const daftarCommand = () => bangun().daftar;
export const daftarCommandV2 = () => bangun().daftar;
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
	const d = bangun().daftar;
	return d.find((e) => e.command === c) || d.find((e) => e.alias.includes(c)) || null;
};
export const jumlahCase = () => bangun().cases.length;
export const statistikRegistry = () => {
	const d = bangun().daftar;
	return {
		total: d.length,
		terdaftar: d.filter((e) => !e.hidden).length,
		tersembunyi: d.filter((e) => e.hidden).length,
		berbayar: d.filter((e) => e.biayaLimit > 0).length,
		owner: d.filter((e) => e.role === "owner").length,
		admin: d.filter((e) => e.role === "admin").length,
		grup: d.filter((e) => e.role === "grup").length,
		kategori: new Set(d.filter((e) => !e.hidden).map((e) => e.kategori)).size,
	};
};
