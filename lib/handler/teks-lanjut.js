// Kategori utilitas teks lanjutan.

export function parsePasanganGrafik(teks = "") {
	return String(teks)
		.trim()
		.split(",")
		.map((s) => {
			const [label, nilai] = s.split("=").map((x) => x.trim());
			return { label, nilai: Number(nilai) };
		})
		.filter((x) => x.label && Number.isFinite(x.nilai))
		.slice(0, 10);
}

export function formatGrafik(pasangan, bilah) {
	if (!pasangan.length) return "";
	const maks = Math.max(...pasangan.map((x) => x.nilai));
	return `*Grafik*\n\n${pasangan.map((x) => `${x.label.padEnd(8)} [${bilah(x.nilai, maks, 12)}] ${x.nilai}`).join("\n")}`;
}

export function statistikTeks(isi = "") {
	return {
		karakter: isi.length,
		kata: isi.split(/\s+/).length,
		tanpaSpasi: isi.replace(/\s/g, "").length,
	};
}

export function formatPanjangTeks(isi = "") {
	const s = statistikTeks(isi);
	return `*Panjang Teks*\n\nKarakter: ${s.karakter}\nKata: ${s.kata}\nTanpa spasi: ${s.tanpaSpasi}`;
}
