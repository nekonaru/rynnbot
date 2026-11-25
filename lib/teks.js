// Alat bantu teks murni: format tanggal, waktu, dan bilah teks.
// Tidak bergantung pada API atau data eksternal.

export const formatTanggal = (tanggal, opsi = {}) => {
	const d = tanggal instanceof Date ? tanggal : new Date(tanggal);
	if (isNaN(d.getTime())) return null;
	const { zona = "Asia/Jakarta", denganHari = true } = opsi;
	try {
		const fmt = new Intl.DateTimeFormat("id-ID", {
			timeZone: zona,
			...(denganHari ? { weekday: "long" } : {}),
			day: "numeric",
			month: "long",
			year: "numeric",
		});
		return fmt.format(d);
	} catch {
		return null;
	}
};

export const formatWaktu = (tanggal, zona = "Asia/Jakarta") => {
	const d = tanggal instanceof Date ? tanggal : new Date(tanggal);
	if (isNaN(d.getTime())) return null;
	try {
		return new Intl.DateTimeFormat("id-ID", { timeZone: zona, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(d);
	} catch {
		return null;
	}
};

export const bilah = (nilai, maksimal, panjang = 20) => {
	if (!Number.isFinite(nilai) || !Number.isFinite(maksimal) || maksimal <= 0 || nilai < 0 || nilai > maksimal) return null;
	const penuh = Math.round((nilai / maksimal) * panjang);
	return "█".repeat(penuh) + "░".repeat(panjang - penuh);
};

export const potongTeks = (teks, maksimal = 100, akhiran = "...") => {
	const s = String(teks ?? "");
	if (s.length <= maksimal) return s;
	return s.slice(0, Math.max(0, maksimal - akhiran.length)) + akhiran;
};

export const hitungKata = (teks) => {
	const s = String(teks ?? "").trim();
	if (!s) return { kata: 0, karakter: 0, karakterTanpaSpasi: 0, kalimat: 0 };
	return {
		kata: s.split(/\s+/).filter(Boolean).length,
		karakter: s.length,
		karakterTanpaSpasi: s.replace(/\s+/g, "").length,
		kalimat: (s.match(/[.!?]+/g) || []).length || 1,
	};
};
