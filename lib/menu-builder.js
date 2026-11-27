// Generator menu terpusat v5.0.0.
// Semua teks menu dibangun dari registry, bukan ditulis berulang di handler.

import { daftarCommand, daftarKategoriCommand } from "./command-registry.js";

const PETA = {
	bot: "BOT", owner: "OWNER", grup: "GROUP", group: "GROUP", search: "SEARCH",
	download: "DOWNLOAD", quotes: "QUOTES", tools: "TOOLS", ai: "AI", random: "RANDOM",
	stalker: "STALKER", anime: "ANIME", game: "GAME", fun: "FUN", edukasi: "EDUKASI",
	pendidikan: "EDUKASI", author: "OWNER",
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
