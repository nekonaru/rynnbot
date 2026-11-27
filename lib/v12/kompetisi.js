// Kompetisi v12: double elimination, seed, jadwal, hasil, arsip, dan liga lanjutan.

const KUNCI = "kompetisiV12";

function ruang(db, chat) {
	if (!db[KUNCI]) db[KUNCI] = {};
	if (!db[KUNCI][chat]) db[KUNCI][chat] = { turnamen: [], liga: {}, pengingat: [] };
	return db[KUNCI][chat];
}

export function buatTurnamen(db, chat, nama, mode = "single", seed = []) {
	const s = ruang(db, chat);
	const item = {
		id: Math.random().toString(36).slice(2, 7).toUpperCase(),
		nama: String(nama || "Turnamen").slice(0, 80),
		mode: ["single", "double"].includes(mode) ? mode : "single",
		seed: [...new Set(seed.filter(Boolean))].slice(0, 32),
		peserta: [],
		hasil: [],
		juara: null,
		waktu: Date.now(),
	};
	s.turnamen.push(item);
	s.turnamen = s.turnamen.slice(-20);
	return item;
}

export function daftarTurnamen(db, chat) {
	return ruang(db, chat).turnamen;
}

export function turnamenAktif(db, chat) {
	const d = daftarTurnamen(db, chat);
	return d[d.length - 1] || null;
}

export function tambahPeserta(db, chat, nama) {
	const t = turnamenAktif(db, chat);
	if (!t) return null;
	const bersih = String(nama || "").replace(/^@/, "").slice(0, 40);
	if (!bersih || t.peserta.includes(bersih)) return null;
	t.peserta.push(bersih);
	return t;
}

export function catatHasil(db, chat, pemenang, kalah) {
	const t = turnamenAktif(db, chat);
	if (!t) return null;
	t.hasil.push({ pemenang, kalah, waktu: Date.now() });
	t.hasil = t.hasil.slice(-50);
	return t;
}

export function tetapkanJuara(db, chat, nama) {
	const t = turnamenAktif(db, chat);
	if (!t) return null;
	t.juara = String(nama || "").replace(/^@/, "").slice(0, 40);
	suratArsip(db, chat, t);
	return t;
}

function suratArsip(db, chat, t) {
	const s = ruang(db, chat);
	s.arsip = s.arsip || [];
	s.arsip.push({ id: t.id, nama: t.nama, juara: t.juara, waktu: t.waktu });
	s.arsip = s.arsip.slice(-20);
}

export function arsipTurnamen(db, chat) {
	return ruang(db, chat).arsip || [];
}

export function ligaBuat(db, chat, nama) {
	const s = ruang(db, chat);
	s.liga[chat] = { nama: String(nama || "Liga").slice(0, 60), anggota: {}, skor: {}, jadwal: [] };
	return s.liga[chat];
}

export function ligaAmbil(db, chat) {
	return ruang(db, chat).liga[chat] || null;
}

export function ligaTransfer(db, chat, dari, ke, nama) {
	const l = ligaAmbil(db, chat);
	if (!l) return null;
	const p = String(nama || "").replace(/^@/, "");
	if (!l.anggota[dari] || l.anggota[ke] === undefined) return null;
	l.anggota[dari] = l.anggota[dari].filter((x) => x !== p);
	l.anggota[ke].push(p);
	return l;
}

export function ligaJadwal(db, chat, lawan, waktu) {
	const l = ligaAmbil(db, chat);
	if (!l) return null;
	l.jadwal.push({ lawan: String(lawan || "").slice(0, 40), waktu: String(waktu || "").slice(0, 40) });
	l.jadwal = l.jadwal.slice(-20);
	return l;
}

export function klasemen(liga) {
	return Object.entries(liga?.skor || {}).sort((a, b) => b[1] - a[1]);
}

export function ingatPertandingan(db, chat, tim, waktu) {
	const s = ruang(db, chat);
	s.pengingat.push({ tim: String(tim || "").slice(0, 40), waktu: String(waktu || "").slice(0, 40), at: Date.now() });
	s.pengingat = s.pengingat.slice(-20);
	return s.pengingat;
}

export function formatTurnamen(t, modeLabel) {
	if (!t) return "Belum ada turnamen.";
	const baris = [
		`*${t.nama}* (${modeLabel(t.mode)})`,
		`ID: ${t.id}`,
		`Peserta: ${t.peserta.length}`,
		`Seed: ${t.seed.length ? t.seed.join(", ") : "(belum ada)"}`,
		`Hasil: ${t.hasil.length}`,
		`Juara: ${t.juara || "belum ditentukan"}`,
	];
	return baris.join("\n");
}

export function formatKlasemen(l) {
	const entri = klasemen(l);
	return entri.length ? entri.map(([n, s], i) => `${i + 1}. ${n}: ${s} poin`).join("\n") : "(belum ada skor)";
}
