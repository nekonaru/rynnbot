// Pembungkus AI v13. Memori opt-in dan bisa dihapus user.

export function aturMemori(u, aktif) {
	u.aiMemori = Boolean(aktif);
	return u.aiMemori;
}

export function hapusMemori(u) {
	u.aiRiwayat = [];
	return u.aiRiwayat;
}

export function tambahMemori(u, pertanyaan) {
	if (!u.aiMemori || u.opsiPrivasi?.memori === false) return null;
	if (!u.aiRiwayat) u.aiRiwayat = [];
	u.aiRiwayat.push({ pertanyaan: String(pertanyaan || "").slice(0, 200), at: Date.now() });
	u.aiRiwayat = u.aiRiwayat.slice(-10);
	return u.aiRiwayat;
}

export function aturPersona(u, nama) {
	const daftar = ["netral", "guru", "teman", "editor"];
	const p = String(nama || "").toLowerCase();
	if (!daftar.includes(p)) return null;
	u.aiPersona = p;
	return p;
}

export function personaPrompt(persona) {
	return {
		guru: "Jelaskan seperti guru yang sabar dan gunakan contoh sederhana.",
		teman: "Jawab dengan gaya santai dan ramah.",
		editor: "Fokus pada kerapian dan kejelasan teks.",
		netral: "Jawab secara netral dan ringkas.",
	}[persona || "netral"];
}

export function promptDebat(topik) {
	return `Sajikan dua sudut pandang singkat, pro dan kontra, tentang: ${String(topik || "").slice(0, 200)}`;
}

export function promptRangkum(teks) {
	return `Ringkas teks berikut dalam lima poin: ${String(teks || "").slice(0, 2000)}`;
}

export function promptReviewKode(kode) {
	return `Berikan tiga saran perbaikan untuk kode ini: ${String(kode || "").slice(0, 2000)}`;
}

export function promptRencana(tugas) {
	return `Ubah tugas berikut menjadi lima langkah praktis: ${String(tugas || "").slice(0, 300)}`;
}

export function batasAi(terpakai, batas = 50) {
	return { terpakai: Number(terpakai) || 0, batas, sisa: Math.max(0, batas - (Number(terpakai) || 0)) };
}
