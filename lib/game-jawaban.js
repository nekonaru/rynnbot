// Pemeriksaan jawaban game v17. Satu aturan untuk semua tebak-tebakan.

export function bersihkanJawaban(teks) {
	return String(teks || "")
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\s]/gu, "")
		.replace(/\s+/g, " ")
		.trim();
}

export function cocokJawaban(jawaban, kunci) {
	const a = bersihkanJawaban(jawaban);
	const b = bersihkanJawaban(kunci);
	if (!a || !b) return false;
	return a === b || (a.length > 2 && b.length > 2 && (a.includes(b) || b.includes(a)));
}

export function hurufJawaban(teks) {
	const m = String(teks || "").trim().toLowerCase().match(/^([a-d])\b/);
	return m ? m[1].charCodeAt(0) - 97 : null;
}
