// Gunung-gunung terkenal di Indonesia untuk perintah .gunung
// Ketinggian di atas permukaan laut (mdpl). Angka bisa berbeda antar sumber dan bisa berubah (gunung berapi).

export const GUNUNG = [
	{ nama: "Puncak Jaya", provinsi: "Papua", info: "4.884 mdpl, puncak tertinggi di Indonesia." },
	{ nama: "Gunung Kerinci", provinsi: "Jambi / Sumatera Barat", info: "3.805 mdpl, gunung berapi tertinggi di Indonesia." },
	{ nama: "Gunung Rinjani", provinsi: "Nusa Tenggara Barat", info: "3.726 mdpl, gunung berapi tertinggi kedua di Indonesia." },
	{ nama: "Gunung Semeru", provinsi: "Jawa Timur", info: "3.676 mdpl, gunung tertinggi di Pulau Jawa." },
	{ nama: "Gunung Slamet", provinsi: "Jawa Tengah", info: "3.428 mdpl, gunung tertinggi kedua di Pulau Jawa." },
	{ nama: "Gunung Tambora", provinsi: "Nusa Tenggara Barat", info: "2.851 mdpl; letusannya pada 1815 adalah yang terdahsyat dalam sejarah tercatat." },
	{ nama: "Gunung Merapi", provinsi: "Jawa Tengah / DI Yogyakarta", info: "Sekitar 2.900 mdpl; salah satu gunung berapi paling aktif di Indonesia." },
	{ nama: "Gunung Agung", provinsi: "Bali", info: "3.031 mdpl, gunung tertinggi di Bali." },
	{ nama: "Gunung Bromo", provinsi: "Jawa Timur", info: "2.329 mdpl, di dalam kaldera Tengger." },
	{ nama: "Gunung Galunggung", provinsi: "Jawa Barat", info: "2.167 mdpl; letusan 1982 sempat mengganggu penerbangan internasional." },
	{ nama: "Gunung Anak Krakatau", provinsi: "Lampung", info: "Tingginya berubah-ubah akibat aktivitas vulkanik setelah letusan 2018." },
	{ nama: "Gunung Ijen", provinsi: "Jawa Timur", info: "Kawah dengan danau asam di dalamnya." },
];

import { GUNUNG_TAMBAHAN } from "./data-edukasi.js";
for (const [nama, provinsi] of GUNUNG_TAMBAHAN) if (!GUNUNG.some((g) => g.nama === nama)) GUNUNG.push({ nama, provinsi, info: "Gunung yang terletak di Indonesia." });
