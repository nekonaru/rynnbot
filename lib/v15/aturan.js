// Aturan balasan otomatis v15.

export function aturanBuat(db, chat, nama, kata, balasan) {
	if (!db.aturan) db.aturan = {};
	if (!db.aturan[chat]) db.aturan[chat] = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 30);
	if (!kunci || db.aturan[chat][kunci]) return null;
	db.aturan[chat][kunci] = {
		nama: String(nama).slice(0, 30),
		kata: String(kata || "").toLowerCase().slice(0, 60),
		balasan: String(balasan || "").slice(0, 500),
		aktif: true,
	};
	return db.aturan[chat];
}

export function aturanAmbil(db, chat, nama) {
	return db.aturan?.[chat]?.[String(nama || "").toLowerCase()] || null;
}

export function aturanHapus(db, chat, nama) {
	const kunci = String(nama || "").toLowerCase();
	if (!db.aturan?.[chat]?.[kunci]) return false;
	delete db.aturan[chat][kunci];
	return true;
}

export function aturanMatikan(db, chat, nama, aktif) {
	const a = aturanAmbil(db, chat, nama);
	if (!a) return null;
	a.aktif = Boolean(aktif);
	return a;
}

export function aturanUji(db, chat, teks) {
	const semua = Object.values(db.aturan?.[chat] || {}).filter((a) => a.aktif);
	return semua.find((a) => a.kata && String(teks || "").toLowerCase().includes(a.kata)) || null;
}

export function filterTambah(db, chat, kata) {
	if (!db.filterKata) db.filterKata = {};
	const list = db.filterKata[chat] || [];
	const k = String(kata || "").toLowerCase().slice(0, 60);
	if (!k || list.includes(k)) return null;
	list.push(k);
	db.filterKata[chat] = list.slice(-30);
	return db.filterKata[chat];
}

export function filterHapus(db, chat, kata) {
	const list = db.filterKata?.[chat] || [];
	const i = list.indexOf(String(kata || "").toLowerCase());
	if (i === -1) return false;
	list.splice(i, 1);
	return true;
}
