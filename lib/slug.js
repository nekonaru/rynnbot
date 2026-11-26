// Membuat slug URL dari teks bebas. Fungsi murni, lokal.

const PETA = {
	à: "a", á: "a", â: "a", ã: "a", ä: "a", è: "e", é: "e", ê: "e", ë: "e",
	ì: "i", í: "i", î: "i", ï: "i", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o",
	ù: "u", ú: "u", û: "u", ü: "u", ç: "c", ñ: "n", ý: "y", ỳ: "y",
};

export const slug = (teks, pemisah = "-") => {
	if (typeof teks !== "string") return null;
	const hasil = teks
		.toLowerCase()
		.split("")
		.map((c) => PETA[c] || c)
		.join("")
		.replace(/[^a-z0-9]+/g, pemisah)
		.replace(new RegExp(`^${pemisah}+|${pemisah}+$`, "g"), "");
	return hasil;
};
