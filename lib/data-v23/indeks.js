// Indeks dataset v23. Satu sumber untuk jumlah, kelas, dan sumber data.

import * as kata from "./kata.js";
import * as kreatif from "./kreatif.js";
import * as fakta from "./fakta.js";
import { PERIBAHASA } from "../data-peribahasa.js";

const DAFTAR = [
	{ nama: "Sinonim", data: kata.SINONIM, kelas: "turunan", sumber: kata.SUMBER },
	{ nama: "Antonim", data: kata.ANTONIM, kelas: "turunan", sumber: kata.SUMBER },
	{ nama: "Singkatan", data: kata.SINGKATAN, kelas: "turunan", sumber: kata.SUMBER },
	{ nama: "Templat surat", data: kreatif.TEMPLAT_SURAT, kelas: "kreatif", sumber: kreatif.SUMBER },
	{ nama: "Resep", data: kreatif.RESEP, kelas: "kreatif", sumber: kreatif.SUMBER },
	{ nama: "Peribahasa", data: PERIBAHASA.map((p) => [p.pepatah, p.makna || p.arti || ""]).filter(([a, b]) => a && b), kelas: "fakta", sumber: "Pepatah yang umum dikenal dalam budaya Indonesia" },
	{ nama: "Pantun", data: kreatif.PANTUN, kelas: "kreatif", sumber: kreatif.SUMBER },
	{ nama: "Puisi", data: kreatif.PUISI, kelas: "kreatif", sumber: kreatif.SUMBER },
	{ nama: "Nama bayi", data: fakta.NAMA_BAYI, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Tokoh", data: fakta.TOKOH, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Sejarah", data: fakta.SEJARAH, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Hari bersejarah", data: fakta.HARI_BERSEJARAH, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Olahraga", data: fakta.OLAHRAGA, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Gunung", data: fakta.GUNUNG, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Danau", data: fakta.DANAU, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Pulau", data: fakta.PULAU, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Sungai", data: fakta.SUNGAI, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Budaya", data: fakta.BUDAYA, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Bahasa daerah", data: fakta.BAHASA_DAERAH, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Lagu daerah", data: fakta.LAGU_DAERAH, kelas: "fakta", sumber: fakta.SUMBER },
	{ nama: "Kuliner", data: fakta.KULINER, kelas: "fakta", sumber: fakta.SUMBER },
];

export const datasetV23 = () => DAFTAR.map((d) => ({
	nama: d.nama,
	kelas: d.kelas,
	sumber: d.sumber,
	jumlah: Array.isArray(d.data) ? d.data.length : 0,
}));

export const ambilDataset = (nama) => {
	const cari = DAFTAR.find((d) => d.nama.toLowerCase() === String(nama || "").toLowerCase());
	return cari ? { ...cari, jumlah: Array.isArray(cari.data) ? cari.data.length : 0 } : null;
};

export const cariDataset = (kata) => {
	const q = String(kata || "").toLowerCase();
	return DAFTAR.flatMap((d) => (d.data || [])
		.filter((x) => JSON.stringify(x).toLowerCase().includes(q))
		.slice(0, 10)
		.map((x) => ({ dataset: d.nama, entri: x })));
};

export const totalV23 = () => DAFTAR.reduce((n, d) => n + (Array.isArray(d.data) ? d.data.length : 0), 0);
