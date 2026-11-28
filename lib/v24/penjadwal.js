// Penjadwala tugas internal v24. Tidak menjalankan kode bebas.

const BAWAAN = [
	{ nama: "sweeper-state", deskripsi: "Membersihkan state kedaluwarsa", aktif: true },
	{ nama: "cleanup-temp", deskripsi: "Membersihkan berkas sementara", aktif: true },
	{ nama: "rotasi-backup", deskripsi: "Memutar berkas backup lama", aktif: true },
	{ nama: "sinkron-db", deskripsi: "Menulis database ke disk", aktif: true },
];

const batas = 30;

export function daftarTugas(db) {
	if (!db.tugasInternal) db.tugasInternal = BAWAAN.map((t) => ({ ...t, jeda: false, jalan: 0, terakhir: null }));
	return db.tugasInternal.slice(0, batas);
}

export function ambilTugas(db, nama) {
	return daftarTugas(db).find((t) => t.nama === String(nama || "").toLowerCase()) || null;
}

export function jedaTugas(db, nama, jeda = true) {
	const t = ambilTugas(db, nama);
	if (!t) return null;
	t.jeda = Boolean(jeda);
	return t;
}

export function aktifTugas(db, nama, aktif = true) {
	const t = ambilTugas(db, nama);
	if (!t) return null;
	t.aktif = Boolean(aktif);
	return t;
}

export function catatJalan(db, nama, sukses = true) {
	const t = ambilTugas(db, nama);
	if (!t) return null;
	t.jalan += 1;
	t.terakhir = { sukses, at: Date.now() };
	if (!db.tugasRiwayat) db.tugasRiwayat = {};
	(db.tugasRiwayat[t.nama] ||= []).push({ sukses, at: Date.now() });
	db.tugasRiwayat[t.nama] = db.tugasRiwayat[t.nama].slice(-20);
	return t;
}

export function riwayatTugas(db, nama) {
	return (db.tugasRiwayat?.[String(nama || "").toLowerCase()] || []).slice(-10).reverse();
}

export function tugasGagal(db) {
	return daftarTugas(db).filter((t) => t.terakhir && !t.terakhir.sukses);
}
