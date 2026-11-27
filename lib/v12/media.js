// Media kreatif v12. Menghasilkan teks dan spesifikasi stiker, tanpa dependency baru.

import { WARNA } from "../design-token.js";

export function kartuWarna(nama, nilai) {
	return { nama: String(nama || "Warna").slice(0, 40), nilai: String(nilai || WARNA.ungu).slice(0, 20) };
}

export function posterTeks(judul, isi, gaya = "ungu") {
	const warna = WARNA[gaya] || WARNA.ungu;
	return `*${judul}*\n\n${isi}\n\n_Poster Rynn - ${warna}_`;
}

export function kartuUcapan(nama, pesan) {
	return `Untuk *${nama}*,\n\n${pesan}\n\n_Dari Rynn_`;
}

export function komikPendek(pembuka, tengah, penutup) {
	return `1. ${pembuka}\n2. ${tengah}\n3. ${penutup}`;
}

export function galeri(entri, batas = 8) {
	return entri.slice(0, batas).map((e, i) => `${i + 1}. ${e.nama || e}`).join("\n") || "(kosong)";
}

export function stikerAnimasiSpec(nama, frame = 8) {
	return { nama: String(nama || "rynn").slice(0, 40), frame: Math.max(2, Math.min(frame, 16)), format: "webp" };
}
