// Game lanjutan v14.

export function timBuat(db, chat, nama, jid) {
	if (!db.gameTim) db.gameTim = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 30);
	if (!kunci || db.gameTim[kunci]) return null;
	db.gameTim[kunci] = { nama: String(nama).slice(0, 40), anggota: [jid], skor: 0, chat };
	return db.gameTim[kunci];
}

export function timGabung(db, nama, jid) {
	const t = db.gameTim?.[String(nama || "").toLowerCase()];
	if (!t || t.anggota.includes(jid)) return null;
	t.anggota.push(jid);
	return t;
}

export function skorTim(db, nama) {
	return db.gameTim?.[String(nama || "").toLowerCase()] || null;
}

export function tebakUrutan() {
	const angka = Array.from({ length: 4 }, () => Math.floor(Math.random() * 9) + 1);
	return angka;
}

export function cocokanUrutan(tebakan, jawaban) {
	const bersih = (x) => Array.isArray(x) ? x.join("") : String(x || "").replace(/[^0-9]/g, "");
	return bersih(tebakan) === bersih(jawaban);
}

export function kartuTaruhan(u, nominal) {
	if (!u || !Number.isInteger(nominal) || nominal < 1 || (u.money || 0) < nominal) return null;
	u.money -= nominal;
	const menang = Math.random() < 0.5;
	if (menang) u.money += nominal * 2;
	return { menang, nominal, saldo: u.money };
}

export function papanSkorHarian(hit) {
	return Object.entries(hit || {})
		.filter(([k]) => /^(quiz|wordle|sudoku|game2048|turnamen|tebaktokoh)$/.test(k))
		.sort((a, b) => b[1] - a[1]);
}
