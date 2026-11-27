// Sungai-sungai terkenal di Indonesia untuk perintah .sungai
// Tanpa angka panjang karena sumber sering berbeda; hanya fakta yang umum diketahui.

export const SUNGAI = [
	{ nama: "Sungai Kapuas", provinsi: "Kalimantan Barat", info: "Sungai terpanjang di Indonesia." },
	{ nama: "Batanghari", provinsi: "Jambi / Sumatera Barat", info: "Sungai terpanjang di Pulau Sumatera." },
	{ nama: "Bengawan Solo", provinsi: "Jawa Tengah / Jawa Timur", info: "Sungai terpanjang di Pulau Jawa." },
	{ nama: "Sungai Musi", provinsi: "Sumatera Selatan", info: "Melalui Palembang; Jembatan Ampera melintang di sungai ini." },
	{ nama: "Sungai Mahakam", provinsi: "Kalimantan Timur", info: "Sungai utama di Kalimantan Timur yang bermuara di Selat Makassar." },
	{ nama: "Sungai Citarum", provinsi: "Jawa Barat", info: "Sungai terbesar di Jawa Barat." },
	{ nama: "Sungai Brantas", provinsi: "Jawa Timur", info: "Sungai utama di Jawa Timur, dipakai untuk irigasi dan pembangkit listrik." },
	{ nama: "Sungai Siak", provinsi: "Riau", info: "Menghubungkan Pekanbaru dengan Selat Malaka." },
	{ nama: "Sungai Barito", provinsi: "Kalimantan Selatan / Tengah", info: "Sungai besar di Kalimantan yang bermuara di Laut Jawa." },
	{ nama: "Sungai Ciliwung", provinsi: "Jawa Barat / DKI Jakarta", info: "Melintasi Jakarta dan bermuara di Teluk Jakarta." },
];

import { SUNGAI_TAMBAHAN } from "./data-edukasi.js";
for (const [nama, provinsi] of SUNGAI_TAMBAHAN) if (!SUNGAI.some((s) => s.nama === nama)) SUNGAI.push({ nama, provinsi, info: "Sungai di Indonesia." });
