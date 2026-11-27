// Pembungkus AI v12. Endpoint tetap memakai layanan yang sudah dipakai bot.

export const GAYA = {
	singkat: "Jawab dengan singkat, maksimal tiga kalimat.",
	formal: "Gunakan Bahasa Indonesia formal.",
	santai: "Gunakan Bahasa Indonesia santai.",
	poin: "Jawab dalam bentuk poin bernomor.",
};

export function promptGaya(gaya, isi) {
	const aturan = GAYA[gaya] || GAYA.singkat;
	return `${aturan}\n\nTopik: ${isi}`;
}

export function aiRiwayat(riwayat, batas = 5) {
	return (Array.isArray(riwayat) ? riwayat : []).slice(-batas).map((r) => `- ${r.pertanyaan || r}`).join("\n") || "(kosong)";
}

export function bandingkan(a, b) {
	return `*Versi A*\n${a}\n\n*Versi B*\n${b}`;
}

export function kuotaAi(terpakai, batas = 50) {
	const sisa = Math.max(0, batas - terpakai);
	return { terpakai, batas, sisa };
}
