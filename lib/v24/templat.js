// Templat otomasi v24. Menyimpan dan memakai spec aturan tanpa kode bebas.

import { buat, aturSyarat, aturAksi, ambil } from "./aturan.js";

const BAWAAN = [
	{
		nama: "sambutan-user-baru",
		deskripsi: "Balas sambutan saat user baru masuk grup",
		syarat: { field: "peristiwa", operator: "sama", nilai: "user_baru" },
		aksi: { nama: "balas_teks", nilai: "Selamat datang di grup!" },
	},
	{
		nama: "log-perintah-owner",
		deskripsi: "Catat setiap perintah owner",
		syarat: { field: "role", operator: "sama", nilai: "owner" },
		aksi: { nama: "catat_log", nilai: "perintah owner" },
	},
	{
		nama: "cleanup-state",
		deskripsi: "Jalankan tugas pembersih state",
		syarat: { field: "peristiwa", operator: "sama", nilai: "tugas_selesai" },
		aksi: { nama: "jalankan_tugas", nilai: "sweeper-state" },
	},
	{
		nama: "pemeriksaan-memori",
		deskripsi: "Catat pemeriksaan memori harian",
		syarat: { field: "peristiwa", operator: "sama", nilai: "tugas_selesai" },
		aksi: { nama: "catat_log", nilai: "pemeriksaan memori" },
	},
];

export function daftarTemplat(db) {
	return [...BAWAAN, ...Object.values(db?.templatOtomasi || {}).slice(0, 30)];
}

export function ambilTemplat(db, nama) {
	return daftarTemplat(db).find((t) => t.nama === String(nama || "").toLowerCase()) || null;
}

export function pakaiTemplat(db, nama) {
	const t = ambilTemplat(db, nama);
	if (!t) return null;
	const aturan = buat(db, t.nama + "-pakai");
	if (!aturan) return null;
	aturSyarat(db, aturan.nama, t.syarat.field, t.syarat.operator, t.syarat.nilai);
	aturAksi(db, aturan.nama, t.aksi.nama, t.aksi.nilai);
	return aturan;
}

export function simpanTemplat(db, namaAturan, namaTemplat) {
	const a = ambil(db, namaAturan);
	if (!a || !a.syarat || !a.aksi) return null;
	const kunci = String(namaTemplat || namaAturan).toLowerCase().slice(0, 40);
	if (!kunci) return null;
	if (!db.templatOtomasi) db.templatOtomasi = {};
	db.templatOtomasi[kunci] = {
		nama: kunci,
		deskripsi: "Templat dari aturan " + a.nama,
		syarat: { ...a.syarat },
		aksi: { ...a.aksi },
		at: Date.now(),
	};
	return db.templatOtomasi[kunci];
}

export function hapusTemplat(db, nama) {
	const kunci = String(nama || "").toLowerCase();
	if (!db.templatOtomasi?.[kunci]) return false;
	delete db.templatOtomasi[kunci];
	return true;
}
