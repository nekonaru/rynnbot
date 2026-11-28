// Edukasi dan bahasa v13. Semua konten berasal dari data yang sudah ada atau template kreatif.

export function kosakataHarian(kata, sekarang = Date.now()) {
	if (!Array.isArray(kata) || !kata.length) return null;
	return kata[Math.floor(sekarang / 86400000) % kata.length];
}

export function cariKosakata(kata, q) {
	const k = String(q || "").toLowerCase();
	return (kata || []).filter((x) => String(x.kata || x).toLowerCase().includes(k)).slice(0, 10);
}

const ATURAN_EJAAN = {
	"e": "Ejaan 'e' pada kata tertentu dibedakan dengan 'é'. Contoh: 'terus', bukan 'térus'.",
	"ou": "Diphthong 'ou' umumnya ditulis 'u' dalam Bahasa Indonesia, misalnya 'bouquet' menjadi 'buket'.",
};

export function panduanEjaan(kata) {
	return ATURAN_EJAAN[String(kata || "").toLowerCase()] || "Gunakan pedoman ejaan resmi untuk kasus ini.";
}

const ATURAN_TATA = {
	subjek: "Kalimat minimal memiliki subjek dan predikat.",
	frakasa: "Frasa adalah gabungan dua kata atau lebih yang membentuk satu kesatuan.",
};

export function panduanTatabahasa(topik) {
	return ATURAN_TATA[String(topik || "").toLowerCase()] || "Topik tidak ditemukan. Coba: subjek, frakasa.";
}

export function pantunBuatan(tema) {
	const t = String(tema || "belajar").slice(0, 40);
	return `Pagi hari menyapa *${t}*,\nDi halaman tampak bunga mekar.\nPelan-pelan kita melangkah maju,\nIlmu kecil jadi bekal segera.`;
}

export function puisiBuatan(tema) {
	const t = String(tema || "harapan").slice(0, 40);
	return `*${t}*\n\nDi antara langkah yang pelan,\nAda ruang untuk mulai lagi.\nSebuah hari tak perlu sempurna,\nCukup jujur dan terus berjalan.`;
}

export function cariResep(resep, bahan) {
	const daftar = Array.isArray(resep)
		? resep
		: Object.entries(resep || {}).map(([nama, isi]) => ({ nama, isi }));
	const q = String(bahan || "").toLowerCase();
	return daftar.filter((r) => JSON.stringify(r).toLowerCase().includes(q)).slice(0, 5);
}

export function tantanganRumus(rumus) {
	if (!Array.isArray(rumus) || !rumus.length) return null;
	return rumus[Math.floor(Math.random() * rumus.length)];
}
