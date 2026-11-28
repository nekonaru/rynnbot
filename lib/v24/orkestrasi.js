// Orkestrasi modul v24. Manifest dibaca dari registry, bukan daftar manual perintah.

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { daftarCommandV2 } from "../command-registry.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");

const MANIFEST = [
	{ nama: "penjadwal", berkas: "lib/v24/penjadwal.js", awalan: "tugas", kategori: "OWNER" },
	{ nama: "event", berkas: "lib/v24/event.js", awalan: "event", kategori: "OWNER" },
	{ nama: "aturan", berkas: "lib/v24/aturan.js", awalan: "aturan", kategori: "OWNER" },
	{ nama: "workflow", berkas: "lib/v24/workflow.js", awalan: "workflow", kategori: "OWNER" },
	{ nama: "templat", berkas: "lib/v24/templat.js", awalan: "templat", kategori: "OWNER" },
	{ nama: "orkestrasi", berkas: "lib/v24/orkestrasi.js", awalan: "orkestrasi", kategori: "OWNER" },
	{ nama: "data-v23", berkas: "lib/data-v23/indeks.js", awalan: "data", kategori: "EDUKASI" },
	{ nama: "pet", berkas: "lib/v22/pet.js", awalan: "pet", kategori: "GAME" },
	{ nama: "kebun", berkas: "lib/v22/kebun.js", awalan: "kebun", kategori: "EKONOMI" },
	{ nama: "karir", berkas: "lib/v22/karir.js", awalan: "karir", kategori: "EKONOMI" },
	{ nama: "pengumuman", berkas: "lib/v22/pengumuman.js", awalan: "pengumuman", kategori: "UMUM" },
];

function jumlahPerintah(awalan) {
	return daftarCommandV2().filter((e) => e.command === awalan || e.command.startsWith(awalan)).length;
}

export function daftarModul() {
	return MANIFEST.map((m) => ({
		nama: m.nama,
		berkas: m.berkas,
		kategori: m.kategori,
		jumlahPerintah: jumlahPerintah(m.awalan),
		ada: fs.existsSync(path.resolve(ROOT, m.berkas)),
	}));
}

export function ambilModul(nama) {
	return daftarModul().find((m) => m.nama === String(nama || "").toLowerCase()) || null;
}

export function statusModul() {
	const semua = daftarModul();
	return {
		total: semua.length,
		sehat: semua.filter((m) => m.ada).length,
		rusak: semua.filter((m) => !m.ada).map((m) => m.nama),
		perintah: semua.reduce((n, m) => n + m.jumlahPerintah, 0),
	};
}

export async function ujiModul(nama) {
	const m = ambilModul(nama);
	if (!m || !m.ada) return null;
	try {
		const mod = await import(pathToFileURL(path.resolve(ROOT, m.berkas)).href);
		return { nama: m.nama, sehat: true, ekspor: Object.keys(mod).length, perintah: m.jumlahPerintah };
	} catch (err) {
		return { nama: m.nama, sehat: false, alasan: String(err?.message || err).slice(0, 120) };
	}
}

export function urutanModul() {
	return MANIFEST.map((m, i) => `${i + 1}. ${m.nama}`);
}

export function ketergantungan() {
	return [
		"event -> aturan",
		"event -> penjadwal",
		"aturan -> workflow",
		"workflow -> templat",
		"orkestrasi -> registry",
		"registry -> handler.js",
	];
}

export function ringkasModul() {
	return daftarModul().map((m) => `- ${m.nama}: ${m.jumlahPerintah} perintah, ${m.ada ? "ada" : "tidak ada"}`);
}
