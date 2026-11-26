// Quest harian sederhana. State ikut tersimpan di db.users.

const hariIni = () => new Date().toISOString().slice(0, 10);

const kosong = () => ({ tanggal: hariIni(), edukasi: false, game: false, harian: false, diklaim: false });

function ambil(db, sender) {
	if (!db.users) db.users = {};
	if (!db.users[sender] || typeof db.users[sender] !== "object") db.users[sender] = {};
	const q = db.users[sender].quest;
	if (!q || q.tanggal !== hariIni()) db.users[sender].quest = kosong();
	return db.users[sender].quest;
}

export function tandaiQuest(db, sender, jenis) {
	if (!["edukasi", "game", "harian"].includes(jenis)) return false;
	const q = ambil(db, sender);
	q[jenis] = true;
	return true;
}

export function lihatQuest(db, sender) {
	const q = ambil(db, sender);
	return { ...q, siap: q.edukasi && q.game && q.harian && !q.diklaim };
}

export function klaimQuest(db, sender) {
	const q = ambil(db, sender);
	if (!q.edukasi || !q.game || !q.harian || q.diklaim) return false;
	q.diklaim = true;
	db.users[sender].money = (Number(db.users[sender].money) || 0) + 1000;
	db.users[sender].limit = (Number(db.users[sender].limit) || 0) + 5;
	return true;
}
