// Edukasi lanjutan v14. Bersumber dari data lokal yang sudah ada.

export function glosarium(daftar, kata) {
	const q = String(kata || "").toLowerCase();
	return (daftar || []).filter((x) => String(x.kata || x).toLowerCase().includes(q)).slice(0, 5);
}

export function artiPeribahasa(peribahasa, kata) {
	const q = String(kata || "").toLowerCase();
	return (peribahasa || []).filter((p) => JSON.stringify(p).toLowerCase().includes(q)).slice(0, 5);
}

export function latihanHitung(soal) {
	if (!Array.isArray(soal) || !soal.length) return null;
	return soal[Math.floor(Date.now() / 1000) % soal.length];
}

export function teoriSingkat(topik) {
	const data = {
		persen: "Persen adalah perbandingan terhadap 100. Rumus dasar: bagian / keseluruhan x 100.",
		fpb: "FPB adalah faktor persekutuan terbesar dari dua bilangan atau lebih.",
		kpk: "KPK adalah kelipatan persekutuan terkecil dari dua bilangan atau lebih.",
	};
	return data[String(topik || "").toLowerCase()] || "Topik tidak ditemukan. Coba: persen, fpb, kpk.";
}

export function petaRumus(rumus, kategori) {
	const k = String(kategori || "").toLowerCase();
	return (rumus || []).filter((r) => r.kategori === k || r.subkategori === k).slice(0, 12);
}

export function hafalanCek(kartu, kata) {
	if (!Array.isArray(kartu)) return false;
	const j = String(kata || "").trim().toLowerCase();
	return kartu.some((k) => String(k.pertanyaan || k).toLowerCase() === j);
}

export function rangkumPelajaran(catatan, topik) {
	const q = String(topik || "").toLowerCase();
	return Object.entries(catatan || {})
		.filter(([judul]) => judul.toLowerCase().includes(q))
		.slice(0, 5)
		.map(([judul, isi]) => `${judul}: ${isi}`);
}
