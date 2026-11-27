// Danau-danau terkenal di Indonesia untuk perintah .danau
// Fakta ringkas yang umum diketahui; ketinggian/luas tidak disertakan karena sering berbeda antar sumber.

export const DANAU = [
	{ nama: "Danau Toba", provinsi: "Sumatera Utara", info: "Danau terbesar di Indonesia, kaldera dari letusan supervulkan pada zaman prasejarah." },
	{ nama: "Danau Singkarak", provinsi: "Sumatera Barat", info: "Rumah bagi ikan bilih, ikan endemik yang hanya hidup di danau ini." },
	{ nama: "Danau Maninjau", provinsi: "Sumatera Barat", info: "Danau kaldera vulkanik di Sumatera Barat." },
	{ nama: "Danau Sentani", provinsi: "Papua", info: "Di kaki Pegunungan Cycloop, dekat Jayapura." },
	{ nama: "Danau Poso", provinsi: "Sulawesi Tengah", info: "Salah satu danau terdalam di Indonesia." },
	{ nama: "Danau Tempe", provinsi: "Sulawesi Selatan", info: "Danau musiman di perbatasan Wajo, Soppeng, dan Sidenreng Rappang." },
	{ nama: "Danau Kelimutu", provinsi: "Nusa Tenggara Timur", info: "Danau tiga warna di puncak Gunung Kelimutu, Flores." },
	{ nama: "Danau Limboto", provinsi: "Gorontalo", info: "Danau alami yang kian dangkal akibat sedimentasi." },
	{ nama: "Danau Tondano", provinsi: "Sulawesi Utara", info: "Danau alami dekat Manado dan Tomohon." },
	{ nama: "Danau Lindu", provinsi: "Sulawesi Tengah", info: "Di kawasan Taman Nasional Lore Lindu." },
	{ nama: "Danau Paniai", provinsi: "Papua", info: "Di Pegunungan Tengah Papua." },
	{ nama: "Danau Laut Tawar", provinsi: "Aceh", info: "Di dataran tinggi Gayo." },
];

import { DANAU_TAMBAHAN } from "./data-edukasi.js";
for (const [nama, provinsi] of DANAU_TAMBAHAN) if (!DANAU.some((d) => d.nama === nama)) DANAU.push({ nama, provinsi, info: "Danau yang terletak di Indonesia." });
