// Bus event v24. Aksi hanya dari daftar tertutup.

const EVENT = ["pesan", "perintah", "perintah_ditolak", "user_baru", "aksi_owner", "tugas_selesai"];
const AKSI = ["balas_teks", "catat_log", "tandai_user", "jalankan_tugas"];

export function daftarEvent() { return [...EVENT]; }
export function daftarAksi() { return [...AKSI]; }

export function pasang(db, event, aksi, nilai = "") {
	const e = String(event || "").toLowerCase();
	const a = String(aksi || "").toLowerCase();
	if (!EVENT.includes(e) || !AKSI.includes(a)) return null;
	if (!db.eventOtomasi) db.eventOtomasi = {};
	(db.eventOtomasi[e] ||= []);
	if (db.eventOtomasi[e].length >= 30) return null;
	const item = { id: Math.random().toString(36).slice(2, 7).toUpperCase(), event: e, aksi: a, nilai: String(nilai || "").slice(0, 200), aktif: true };
	db.eventOtomasi[e].push(item);
	return item;
}

export function lihat(db, event) {
	return (db.eventOtomasi?.[String(event || "").toLowerCase()] || []).slice(0, 30);
}

export function lepas(db, id) {
	for (const [e, list] of Object.entries(db.eventOtomasi || {})) {
		const sebelum = list.length;
		db.eventOtomasi[e] = list.filter((x) => x.id !== String(id || "").toUpperCase());
		if (db.eventOtomasi[e].length < sebelum) return true;
	}
	return false;
}

export function setAktif(db, id, aktif) {
	for (const list of Object.values(db.eventOtomasi || {})) {
		const item = list.find((x) => x.id === String(id || "").toUpperCase());
		if (item) { item.aktif = Boolean(aktif); return item; }
	}
	return null;
}

export function jalankan(db, event, kering = true) {
	const list = lihat(db, event).filter((x) => x.aktif);
	const hasil = list.map((x) => ({ id: x.id, aksi: x.aksi, nilai: x.nilai, kering }));
	if (!kering && !db.eventRiwayat) db.eventRiwayat = [];
	if (!kering) {
		db.eventRiwayat.push({ event, jumlah: hasil.length, at: Date.now() });
		db.eventRiwayat = db.eventRiwayat.slice(-50);
	}
	return hasil;
}

export function riwayat(db) {
	return (db.eventRiwayat || []).slice(-15).reverse();
}
