// Ritme balasan Rynn v12. Semua bisa dimatikan lewat opsi.

import { BATAS } from "./design-token.js";

export async function ketikDulu(sock, chat, { aktif = true, teks = "", ms = BATAS.typingMs } = {}) {
	if (!aktif || !sock?.sendPresenceUpdate) return;
	try {
		await sock.sendPresenceUpdate("composing", chat);
		const jeda = Math.min(ms + Math.min(teks.length * 2, 400), 1200);
		await new Promise((resolve) => setTimeout(resolve, jeda));
	} catch {}
}

export function bilahProgres(nilai, total, lebar = 10) {
	const porsi = total > 0 ? Math.max(0, Math.min(1, nilai / total)) : 0;
	const penuh = Math.round(porsi * lebar);
	return `[${"#".repeat(penuh)}${"-".repeat(lebar - penuh)}] ${Math.round(porsi * 100)}%`;
}

export function tahapProgres(tahap, total = BATAS.progressTahap) {
	return bilahProgres(tahap, total);
}

export function teksStikerAnimasi(nama) {
	return `*${nama}*\n\nStiker animasi disiapkan dari aset Rynn.`;
}
