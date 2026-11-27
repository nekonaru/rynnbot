export const PUISI_EXTRA = Array.from({ length: 20 }, (_, i) => i)
	.flatMap((i) => Array.from({ length: 20 }, (_, j) => j).map((j) =>
		`Hari ke-${i + 1} membawa cerita,\n${j % 2 === 0 ? "cahaya masuk lewat jendela" : "angin lewat di halaman"},\naku menulisnya pelan-pelan,\ndan menyimpannya untuk esok.`
	));

export const SOAL_EXTRA = { matematika: [] };
for (let a = 61; a <= 100; a++) {
	for (let b = 1; b <= 15; b++) {
		const jumlah = a + b;
		SOAL_EXTRA.matematika.push({ q: `${a} + ${b} = ...`, o: [`${jumlah - 1}`, `${jumlah}`, `${jumlah + 2}`, `${jumlah + 4}`], a: 1, p: `${a} + ${b} = ${jumlah}.` });
		const hasil = a * b;
		SOAL_EXTRA.matematika.push({ q: `${a} x ${b} = ...`, o: [`${hasil - 3}`, `${hasil}`, `${hasil + 2}`, `${hasil + 6}`], a: 1, p: `${a} x ${b} = ${hasil}.` });
	}
}

export const NEGARA_EXTRA = [
	["Samoa", "Apia", "Tala Samoa (WST)", "Oseania"], ["Tonga", "Nuku'alofa", "Pa'anga (TOP)", "Oseania"],
	["Vanuatu", "Port Vila", "Vatu (VUV)", "Oseania"], ["Kiribati", "Tarawa", "Dolar Kiribati (KID)", "Oseania"],
	["Nauru", "Yaren", "Dolar Australia (AUD)", "Oseania"], ["Tuvalu", "Funafuti", "Dolar Tuvalu (TVD)", "Oseania"],
	["Palau", "Ngerulmud", "Dolar Amerika (USD)", "Oseania"], ["Marshall", "Majuro", "Dolar Amerika (USD)", "Oseania"],
];

export const PLANET_EXTRA = [
	["Kepler-62 c", "exoplanet", "sekitar 1.200 tahun cahaya", ""], ["Kepler-62 b", "exoplanet", "sekitar 1.200 tahun cahaya", ""],
	["Kepler-186 c", "exoplanet", "sekitar 582 tahun cahaya", ""], ["Kepler-186 b", "exoplanet", "sekitar 582 tahun cahaya", ""],
	["TRAPPIST-1 c", "exoplanet", "sekitar 40 tahun cahaya", ""], ["TRAPPIST-1 d", "exoplanet", "sekitar 40 tahun cahaya", ""],
	["TRAPPIST-1 f", "exoplanet", "sekitar 40 tahun cahaya", ""], ["TRAPPIST-1 g", "exoplanet", "sekitar 40 tahun cahaya", ""],
	["L 98-59 b", "exoplanet", "sekitar 35 tahun cahaya", ""], ["TOI-270 c", "exoplanet", "sekitar 73 tahun cahaya", ""],
];
