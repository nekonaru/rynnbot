// Orkestrasi modul v24. Manifest dibaca dari registry, bukan daftar manual perintah.

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { daftarCommandV2 } from "../command-registry.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");

const MANIFEST = [
	{ nama: "penjadwal", berkas: "lib/v24/penjadwal.js", kategori: "OWNER", perintah: "tugasdaftar tugasinfo tugasstatus tugasjeda tugaslanjut tugasjalankan tugasnonaktif tugasaktifkan tugasriwayat tugasgagal" },
	{ nama: "event", berkas: "lib/v24/event.js", kategori: "OWNER", perintah: "eventlist eventpasang eventlihat eventlepas eventmatikan eventhidupkan eventuji eventriwayat" },
	{ nama: "aturan", berkas: "lib/v24/aturan.js", kategori: "OWNER", perintah: "aturanbaru aturanketika aturanmaka aturanuji aturanaktif aturanlist aturandetail aturanhapus" },
	{ nama: "workflow", berkas: "lib/v24/workflow.js", kategori: "OWNER", perintah: "workflowbaru workflowlangkah workflowurut workflowjalankan workflowuji workflowstatus workflowlist workflowhapus" },
	{ nama: "templat", berkas: "lib/v24/templat.js", kategori: "OWNER", perintah: "templatlist templatpakai templatsimpan templatlihat templathapus" },
	{ nama: "orkestrasi", berkas: "lib/v24/orkestrasi.js", kategori: "OWNER", perintah: "orkestrasistatus orkestrasimodul orkestrasiinfo orkestrasiuji orkestrasiuru orkestrasiketergantungan" },
	{ nama: "data-v23", berkas: "lib/data-v23/indeks.js", awalan: "data", kategori: "EDUKASI" },
	{ nama: "pet", berkas: "lib/v22/pet.js", awalan: "pet", kategori: "GAME" },
	{ nama: "kebun", berkas: "lib/v22/kebun.js", awalan: "kebun", kategori: "EKONOMI" },
	{ nama: "karir", berkas: "lib/v22/karir.js", awalan: "karir", kategori: "EKONOMI" },
	{ nama: "pengumuman", berkas: "lib/v22/pengumuman.js", awalan: "pengumuman", kategori: "UMUM" },
];

function jumlahPerintah(m) {
	if (m.perintah) {
		const dimiliki = new Set(m.perintah.split(/\s+/));
		return daftarCommandV2().filter((e) => dimiliki.has(e.command)).length;
	}
	return daftarCommandV2().filter((e) => e.command === m.awalan || e.command.startsWith(m.awalan)).length;
}

export function daftarModul() {
	return MANIFEST.map((m) => ({
		nama: m.nama,
		berkas: m.berkas,
		kategori: m.kategori,
		jumlahPerintah: jumlahPerintah(m),
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
