// Sistem turnamen single elimination murni. State disimpan di luar modul.

export const buatBracket = (peserta) => {
	if (!Array.isArray(peserta) || peserta.length < 2) return null;
	const daftar = [...new Set(peserta.filter((p) => typeof p === "string" && p.trim()))];
	if (daftar.length < 2) return null;
	const babak = [];
	let jumlah = daftar.length;
	let nomor = 1;
	let slot = daftar;
	while (jumlah > 1) {
		const pertandingan = [];
		for (let i = 0; i < slot.length; i += 2) {
			if (i + 1 < slot.length) pertandingan.push({ a: slot[i], b: slot[i + 1], pemenang: null });
			else pertandingan.push({ a: slot[i], b: null, pemenang: slot[i] });
		}
		babak.push({ babak: nomor, pertandingan });
		jumlah = Math.ceil(jumlah / 2);
		slot = Array.from({ length: jumlah }, () => null);
		nomor++;
	}
	return { peserta: daftar, babak, juara: null };
};

export const catatMenang = (bracket, nomorBabak, index, pemenang) => {
	if (!bracket || !Array.isArray(bracket.babak)) return { ok: false, alasan: "Bracket tidak valid." };
	const babak = bracket.babak[nomorBabak - 1];
	if (!babak || !babak.pertandingan[index]) return { ok: false, alasan: "Pertandingan tidak ditemukan." };
	const pertandingan = babak.pertandingan[index];
	if (pertandingan.pememenang) return { ok: false, alasan: "Pertandingan sudah selesai." };
	if (pemenang !== pertandingan.a && pemenang !== pertandingan.b) return { ok: false, alasan: "Pemenang bukan peserta pertandingan ini." };
	pertandingan.pememenang = pemenang;
	const belum = babak.pertandingan.filter((m) => !m.pememenang).length;
	if (belum > 0) return { ok: true, selesai: false };
	const berikut = bracket.babak[nomorBabak];
	if (!berikut) {
		bracket.juara = pertandingan.pememenang;
		return { ok: true, selesai: true, juara: bracket.juara };
	}
	const lanjut = babak.pertandingan.map((m) => m.pememenang).filter(Boolean);
	berikut.pertandingan.forEach((m, i) => {
		m.a = lanjut[i * 2] || m.a;
		m.b = lanjut[i * 2 + 1] || m.b;
	});
	return { ok: true, selesai: false };
};

export const formatBracket = (bracket) => {
	if (!bracket) return "Belum ada bracket.";
	const baris = bracket.babak.map((b) => {
		const pertandingan = b.pertandingan.map((m, i) => {
			const status = m.pememenang ? `pemenang: *${m.pememenang}*` : m.b ? "belum dimainkan" : "bye";
			return `  ${i + 1}. ${m.a} vs ${m.b || "bye"} (${status})`;
		}).join("\n");
		return `*Babak ${b.babak}*\n${pertandingan}`;
	}).join("\n\n");
	return `*Bracket Turnamen*\nPeserta: ${bracket.peserta.length}\n\n${baris}${bracket.juara ? `\n\nJuara: *${bracket.juara}*` : ""}`;
};

// Double elimination v17. Upper dan lower bracket sederhana dengan final satu pertandingan.
export function buatBracketDouble(peserta) {
	const upper = buatBracket(peserta);
	if (!upper) return null;
	const kalah = [];
	for (const babak of upper.babak) {
		for (const m of babak.pertandingan) if (m.a && m.b && !m.pememenang) kalah.push(null);
	}
	const lower = { babak: [], juara: null };
	if (kalah.length >= 2) {
		const pasangan = [];
		for (let i = 0; i < kalah.length - (kalah.length % 2); i += 2) pasangan.push({ a: null, b: null, pemenang: null });
		lower.babak.push({ babak: 1, pertandingan: pasangan });
	}
	return { mode: "double", upper, lower, final: { a: null, b: null, pemenang: null }, juara: null };
}

export function formatBracketDouble(bracket) {
	if (!bracket) return "Belum ada bracket.";
	const upper = bracket.upper.babak.map((b) => `*Upper ${b.babak}*: ${b.pertandingan.length} pertandingan`).join("\n");
	const lower = bracket.lower.babak.map((b) => `*Lower ${b.babak}*: ${b.pertandingan.length} pertandingan`).join("\n") || "(belum ada)";
	return `*Bracket Double Elimination*
${upper}
${lower}

Final: ${bracket.final.a || "?"} vs ${bracket.final.b || "?"}`;
}
