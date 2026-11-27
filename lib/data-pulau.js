// Pulau-pulau terkenal di Indonesia untuk perintah .pulau
// Hanya fakta umum; tidak mencantumkan luas karena angka antarsumber sering berbeda.

export const PULAU = [
	{ nama: "Sumatera", info: "Pulau keenam terbesar di dunia, membentang di Indonesia bagian barat." },
	{ nama: "Jawa", info: "Pulau dengan jumlah penduduk terbanyak di dunia." },
	{ nama: "Kalimantan", info: "Pulau terbesar ketiga di dunia, bagian Indonesia dari Pulau Borneo." },
	{ nama: "Sulawesi", info: "Bentuknya menyerupai huruf K dan terdiri dari empat semenanjung." },
	{ nama: "Papua", info: "Bagian barat dari Pulau New Guinea, pulau terbesar kedua di dunia." },
	{ nama: "Bali", info: "Di sebelah timur Jawa, terkenal dengan seni dan pariwisata." },
	{ nama: "Madura", info: "Di timur laut Jawa, terhubung oleh Jembatan Suramadu." },
	{ nama: "Nusa Tenggara", info: "Rangkaian pulau di timur Bali, termasuk Lombok, Sumbawa, Flores, Sumba, dan Timor." },
	{ nama: "Maluku", info: "Gugus kepulauan yang dikenal sebagai Kepulauan Rempah-rempah." },
	{ nama: "Bangka Belitung", info: "Dua pulau utama di lepas pantai timur Sumatera, dikenal sebagai penghasil timah." },
];

import { PULAU_TAMBAHAN } from "./data-edukasi.js";
for (const [nama, info] of PULAU_TAMBAHAN) if (!PULAU.some((p) => p.nama === nama)) PULAU.push({ nama, info });
