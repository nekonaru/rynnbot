// Guild dan komunitas v13.

export function guildBuat(db, nama, chat) {
	if (!db.guild) db.guild = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 40);
	if (!kunci || db.guild[kunci]) return null;
	db.guild[kunci] = { nama: String(nama).slice(0, 60), anggota: [], chat: [chat], pesan: [] };
	return db.guild[kunci];
}

export function guildGabung(db, nama, jid) {
	const g = db.guild?.[String(nama || "").toLowerCase()];
	if (!g || g.anggota.includes(jid)) return null;
	g.anggota.push(jid);
	return g;
}

export function guildKeluar(db, nama, jid) {
	const g = db.guild?.[String(nama || "").toLowerCase()];
	if (!g) return null;
	g.anggota = g.anggota.filter((x) => x !== jid);
	return g;
}

export function guildPapan(db) {
	return Object.values(db.guild || {})
		.map((g) => ({ nama: g.nama, jumlah: g.anggota.length }))
		.sort((a, b) => b.jumlah - a.jumlah);
}

export function rekomendasiTeman(anggota, sendiri) {
	return [...new Set(anggota || [])].filter((x) => x !== sendiri).slice(0, 8);
}

export function kartuPerkenalan(nama, kata) {
	return `*Perkenalan*\n\nNama: ${String(nama || "").slice(0, 40)}\nKata kunci: ${String(kata || "").slice(0, 80)}`;
}

export function statistikKomunitas(db, anggota) {
	return {
		pengguna: Object.keys(db.users || {}).length,
		grup: Object.keys(db.set || {}).filter((x) => x.endsWith("@g.us")).length,
		guild: Object.keys(db.guild || {}).length,
		anggota: (anggota || []).length,
	};
}
