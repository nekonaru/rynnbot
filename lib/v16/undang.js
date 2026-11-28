// Undangan dan referral v16. Kode lokal, tanpa jejak eksternal.

export function undangBuat(db, sender) {
	if (!db.undang) db.undang = {};
	const kode = Math.random().toString(36).slice(2, 8).toUpperCase();
	db.undang[kode] = { kode, dari: sender, dipakai: [], at: Date.now() };
	const milik = Object.values(db.undang).filter((u) => u.dari === sender);
	if (milik.length > 10) for (const u of milik.slice(0, milik.length - 10)) delete db.undang[u.kode];
	return db.undang[kode];
}

export function undangPakai(db, kode, sender) {
	const u = db.undang?.[String(kode || "").toUpperCase()];
	if (!u || u.dari === sender || u.dipakai.includes(sender)) return null;
	u.dipakai.push(sender);
	u.dipakai = u.dipakai.slice(-30);
	return u;
}

export function undangMilik(db, sender) {
	return Object.values(db.undang || {}).filter((u) => u.dari === sender).slice(-10);
}

export function referralPapan(db) {
	return Object.values(db.undang || {})
		.map((u) => ({ jid: u.dari, jumlah: u.dipakai.length }))
		.filter((x) => x.jumlah > 0)
		.sort((a, b) => b.jumlah - a.jumlah)
		.slice(0, 10);
}

export function hadiahReferral(jumlah) {
	if (jumlah >= 5) return "lencana perak";
	if (jumlah >= 2) return "lencana perunggu";
	return "belum ada";
}
