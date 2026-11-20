// Kota dan zona waktu IANA untuk perintah .waktu
// Label WIB/WITA/WIT hanya untuk kota di Indonesia.

export const KOTA_WAKTU = [
	{ nama: "Jakarta", zona: "Asia/Jakarta", label: "WIB" },
	{ nama: "Surabaya", zona: "Asia/Jakarta", label: "WIB" },
	{ nama: "Bandung", zona: "Asia/Jakarta", label: "WIB" },
	{ nama: "Makassar", zona: "Asia/Makassar", label: "WITA" },
	{ nama: "Denpasar", zona: "Asia/Makassar", label: "WITA" },
	{ nama: "Manado", zona: "Asia/Makassar", label: "WITA" },
	{ nama: "Jayapura", zona: "Asia/Jayapura", label: "WIT" },
	{ nama: "Singapura", zona: "Asia/Singapore", label: "" },
	{ nama: "Tokyo", zona: "Asia/Tokyo", label: "" },
	{ nama: "Dubai", zona: "Asia/Dubai", label: "" },
	{ nama: "London", zona: "Europe/London", label: "" },
	{ nama: "New York", zona: "America/New_York", label: "" },
];

export const cariKota = (q) => {
	const key = String(q || "").trim().toLowerCase();
	if (!key) return null;
	return KOTA_WAKTU.find((k) => k.nama.toLowerCase() === key) || KOTA_WAKTU.find((k) => k.nama.toLowerCase().includes(key)) || null;
};

export const waktuDi = (zona, date = new Date()) => {
	try {
		return new Intl.DateTimeFormat("id-ID", { timeZone: zona, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(date);
	} catch {
		return null;
	}
};
