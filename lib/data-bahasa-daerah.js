// Bahasa daerah Nusantara untuk perintah .bahasa
// Hanya kosakata yang umum dan dikenal luas. Tidak ada klaim keunikan yang tidak pasti.

export const BAHASA = [
	{ nama: "Jawa", asal: "Jawa Tengah, DI Yogyakarta, Jawa Timur, sebagian Jawa Barat", catatan: "Tingkat tutur: ngoko (kasar), madya (sedang), krama (halus).", contoh: ["matur nuwun = terima kasih", "mangan = makan", "turu = tidur", "ndelok = melihat", "mlayu = berlari", "iki = ini", "ora = tidak"] },
	{ nama: "Sunda", asal: "Jawa Barat, Banten", catatan: "Ada ragam kasar dan ragam halus (tutur santun) yang berbeda.", contoh: ["hatur nuhun = terima kasih", "abdi = saya", "anjeun = kamu", "teu = tidak", "kumaha = bagaimana", "sok = nanti"] },
	{ nama: "Minang", asal: "Sumatera Barat", catatan: "Umumnya memakai partikel 'lah' dan 'kok'.", contoh: ["lah = sudah", "indak = tidak", "ambo = saya", "urang = orang", "kok = kalau", "iyo = ya"] },
	{ nama: "Batak Toba", asal: "Sumatera Utara (Danau Toba dan sekitarnya)", catatan: "Salah satu dari banyak ragam bahasa Batak.", contoh: ["horas = salam, semoga sehat", "haha = kakak laki-laki", "ito = panggilan untuk kakak atau adik", "boru = anak perempuan"] },
	{ nama: "Bali", asal: "Bali", catatan: "Tersedia ragam halus (sor alus) dan ragam umum (sor midar).", contoh: ["sampun = sudah", "matur suksma = terima kasih", "jani = sekarang"] },
	{ nama: "Betawi", asal: "DKI Jakarta dan sekitarnya", catatan: "Bahasa sehari-hari masyarakat Jakarta.", contoh: ["gue = saya", "lu = kamu", "ape = apa", "nggak = tidak", "nyok = ayo"] },
	{ nama: "Manado", asal: "Sulawesi Utara (Manado)", catatan: "Bahasa Melayu wilayah perdagangan di Minahasa.", contoh: ["torang = kita/kami", "kong = terus", "kalo = kalau", "mo = mau", "pe = punya"] },
];

export const cariBahasa = (q) => {
	const norm = (s) => String(s).toLowerCase().replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();
	const key = norm(q);
	if (!key) return null;
	return BAHASA.find((b) => norm(b.nama) === key) || BAHASA.find((b) => norm(b.nama).includes(key)) || null;
};

import { BAHASA_TAMBAHAN } from "./data-edukasi.js";
for (const [nama, asal] of BAHASA_TAMBAHAN) if (!BAHASA.some((b) => b.nama === nama)) BAHASA.push({ nama, asal, catatan: "Bahasa daerah di Indonesia.", contoh: [] });
