// Konversi basis bilangan 2 sampai 36. Fungsi murni, tanpa jaringan.

const HURUF = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const keBasis = (nilai, basis) => {
	if (!Number.isSafeInteger(nilai) || nilai < 0 || !Number.isInteger(basis) || basis < 2 || basis > 36) return null;
	if (nilai === 0) return "0";
	let sisa = nilai;
	let hasil = "";
	while (sisa > 0) {
		hasil = HURUF[sisa % basis] + hasil;
		sisa = Math.floor(sisa / basis);
	}
	return hasil;
};

export const dariBasis = (teks, basis) => {
	if (typeof teks !== "string" || !Number.isInteger(basis) || basis < 2 || basis > 36) return null;
	const bersih = teks.trim().toUpperCase().replace(/^0+/, "") || "0";
	if (bersih.length > 16) return null;
	let hasil = 0;
	for (const huruf of bersih) {
		const nilai = HURUF.indexOf(huruf);
		if (nilai < 0 || nilai >= basis) return null;
		hasil = hasil * basis + nilai;
	}
	return Number.isSafeInteger(hasil) ? hasil : null;
};

export const konversiBasis = (teks, dari, ke) => {
	const nilai = dariBasis(teks, dari);
	if (nilai === null) return null;
	return keBasis(nilai, ke);
};
