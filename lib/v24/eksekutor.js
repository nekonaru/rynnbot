// Eksekutor otomasi nyata v24. Hanya aksi dari daftar tertutup yang dijalankan.

import * as event from "./event.js";
import * as aturan from "./aturan.js";
import * as penjadwal from "./penjadwal.js";

const BATAS_LOG = 100;
const BATAS_RIWAYAT = 50;

function catat(db, kunci, entri, batas) {
	if (!db[kunci]) db[kunci] = [];
	db[kunci].push(entri);
	db[kunci] = db[kunci].slice(-batas);
}

function terapkan(db, a, opsi) {
	if (a.aksi === "balas_teks") return { tipe: "balas", teks: a.nilai };
	if (a.aksi === "catat_log") {
		catat(db, "otomasiLog", { aksi: a.nilai, at: Date.now() }, BATAS_LOG);
		return { tipe: "log" };
	}
	if (a.aksi === "tandai_user" && opsi?.sender) {
		if (!db.users) db.users = {};
		if (!db.users[opsi.sender]) db.users[opsi.sender] = {};
		db.users[opsi.sender].tandaOtomasi = true;
		return { tipe: "tanda" };
	}
	if (a.aksi === "jalankan_tugas" && penjadwal.ambilTugas(db, a.nilai)) {
		penjadwal.catatJalan(db, a.nilai, true);
		return { tipe: "tugas" };
	}
	return null;
}

export function jalankanEventNyata(db, namaEvent, opsi = {}) {
	const daftar = event.jalankan(db, namaEvent, true);
	const hasil = daftar.map((a) => terapkan(db, a, opsi)).filter(Boolean);
	catat(db, "eventRiwayat", { event: String(namaEvent).toLowerCase(), jumlah: hasil.length, at: Date.now() }, BATAS_RIWAYAT);
	return hasil;
}

export function evaluasiAturanNyata(db, konteks = {}) {
	const hasil = [];
	for (const a of aturan.daftar(db)) {
		if (!a.aktif) continue;
		const uji = aturan.uji(db, a.nama, konteks);
		if (!uji?.cocok) continue;
		const diterapkan = terapkan(db, { aksi: uji.aksi, nilai: uji.nilai }, konteks);
		if (diterapkan) hasil.push({ aturan: a.nama, ...diterapkan });
	}
	return hasil;
}
