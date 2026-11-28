// Workflow berurutan v24. Langkah memakai aksi tertutup.

const AKSI = ["balas_teks", "catat_log", "tandai_user", "jalankan_tugas", "jalankan_aturan"];

export function daftarAksi() { return [...AKSI]; }

export function buat(db, nama) {
	if (!db.workflowOtomasi) db.workflowOtomasi = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 40);
	if (!kunci || db.workflowOtomasi[kunci]) return null;
	db.workflowOtomasi[kunci] = { nama: kunci, langkah: [], aktif: false, posisi: 0, at: Date.now() };
	return db.workflowOtomasi[kunci];
}

export function ambil(db, nama) { return db.workflowOtomasi?.[String(nama || "").toLowerCase()] || null; }

export function tambahLangkah(db, nama, aksi, nilai = "") {
	const w = ambil(db, nama), a = String(aksi || "").toLowerCase();
	if (!w || !AKSI.includes(a) || w.langkah.length >= 20) return null;
	w.langkah.push({ aksi: a, nilai: String(nilai || "").slice(0, 200) });
	return w.langkah;
}

export function urutLangkah(db, nama, daftarIndex) {
	const w = ambil(db, nama);
	if (!w) return null;
	const index = String(daftarIndex || "").split(/[\s,]+/).map(Number).filter((n) => Number.isInteger(n) && n >= 1 && n <= w.langkah.length);
	if (index.length !== w.langkah.length || new Set(index).size !== index.length) return null;
	w.langkah = index.map((i) => w.langkah[i - 1]);
	return w.langkah;
}

export function jalankan(db, nama, kering = true) {
	const w = ambil(db, nama);
	if (!w || !w.langkah.length) return null;
	const hasil = w.langkah.map((l, i) => ({ nomor: i + 1, aksi: l.aksi, nilai: l.nilai, kering }));
	if (!kering) w.posisi = w.langkah.length;
	return hasil;
}

export function status(db, nama) {
	const w = ambil(db, nama);
	return w ? { langkah: w.langkah.length, posisi: w.posisi, aktif: w.aktif } : null;
}

export function daftar(db) { return Object.values(db.workflowOtomasi || {}).slice(0, 30); }

export function setAktif(db, nama, aktif) {
	const w = ambil(db, nama);
	if (!w || !w.langkah.length) return null;
	w.aktif = Boolean(aktif);
	return w;
}

export function hapus(db, nama) {
	const kunci = String(nama || "").toLowerCase();
	if (!db.workflowOtomasi?.[kunci]) return false;
	delete db.workflowOtomasi[kunci];
	return true;
}
