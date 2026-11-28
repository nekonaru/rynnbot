// Generator menu terpusat v5.0.0.
// Semua teks menu dibangun dari registry, bukan ditulis berulang di handler.

import { daftarCommand, daftarKategoriCommand } from "./command-registry.js";

const PETA = {
	umum: "UMUM", bot: "BOT", grup: "GRUP", group: "GRUP", ekonomi: "EKONOMI", uang: "EKONOMI",
	game: "GAME", turnamen: "TURNAMEN", liga: "TURNAMEN", edukasi: "EDUKASI", pendidikan: "EDUKASI",
	belajar: "EDUKASI", ai: "AI", media: "MEDIA", download: "MEDIA", cari: "PENCARIAN", search: "PENCARIAN",
	komunitas: "KOMUNITAS", statistik: "STATISTIK", laporan: "STATISTIK", keamanan: "KEAMANAN",
	owner: "OWNER", author: "OWNER", quotes: "KOMUNITAS", fun: "GAME", random: "GAME",
	stalker: "PENCARIAN", anime: "MEDIA", tools: "BOT", submenu: "UMUM",
};

export const kategoriDariNama = (nama) => PETA[String(nama || "").trim().toLowerCase()] || null;

export const bangunMenu = (kategori, setv = "", prefix = "") => {
	const k = kategoriDariNama(kategori) || String(kategori || "").toUpperCase();
	const entri = daftarCommand().filter((e) => e.kategori === k);
	if (!entri.length) return null;
	const baris = entri.map((e) => `│${setv} ${prefix}${e.command}${e.deskripsi ? " (" + e.deskripsi + ")" : ""}`);
	return [`╭──❍「 *${k}* 」❍`, ...baris, "╰──────❍"].join("\n");
};

export const bangunAllMenu = (setv = "", prefix = "") => {
	const blok = daftarKategoriCommand().map((k) => bangunMenu(k.kategori, setv, prefix)).filter(Boolean);
	return blok.join("\n╰─┬────❍\n╭─┴❍");
};

export const ringkasanKategori = () => daftarKategoriCommand().map((k) => `- *${k.kategori}*: ${k.jumlah} perintah`).join("\n");
