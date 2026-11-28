// Media kreatif v13. Spesifikasi stiker dan kartu, tanpa dependence baru.

import { WARNA } from "../design-token.js";

export function spesifikasiStikerTeks(teks, gaya = "ungu") {
	return {
		teks: String(teks || "").slice(0, 120),
		warna: WARNA[gaya] || WARNA.ungu,
		format: "png",
	};
}

export function spesifikasiFotoProfil(teks, nama = "Rynn") {
	return { teks: String(teks || "").slice(0, 40), nama: String(nama).slice(0, 40), format: "png", ukuran: 512 };
}

export function kartuUndangan(judul, tanggal) {
	return `*UNDANGAN*\n\n*${String(judul || "Acara").slice(0, 80)}*\nTanggal: ${String(tanggal || "").slice(0, 40)}\n\nDengan hormat,\nRynn`;
}

export function posterUcapan(nama, pesan) {
	return `*Untuk ${String(nama || "Kamu").slice(0, 40)}*\n\n${String(pesan || "").slice(0, 300)}\n\n_Dari Rynn_`;
}

export function diagramLingkaran(nilai) {
	const angka = (nilai || []).map(Number).filter((n) => Number.isFinite(n) && n > 0);
	const total = angka.reduce((a, b) => a + b, 0) || 1;
	return angka.map((n) => `- ${Math.round((n / total) * 100)} persen [${"#".repeat(Math.round((n / total) * 10)).padEnd(10, "-")}]`);
}

export function tabelDua(data) {
	return data
		.map((baris) => String(baris).split("=").map((x) => x.trim()))
		.filter((x) => x.length === 2)
		.slice(0, 10)
		.map(([k, v]) => `${k.padEnd(14)} : ${v}`);
}
