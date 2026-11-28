// Mesin aturan v24. Operator dan aksi tertutup, tanpa eval.

const OPERATOR = ["sama", "mengandung", "diawali", "lebih", "kurang"];
const AKSI = ["balas_teks", "catat_log", "tandai_user", "jalankan_tugas"];

export function daftarOperator() { return [...OPERATOR]; }
export function daftarAksi() { return [...AKSI]; }

export function buat(db, nama) {
	if (!db.aturanOtomasi) db.aturanOtomasi = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 40);
	if (!kunci || db.aturanOtomasi[kunci]) return null;
	db.aturanOtomasi[kunci] = { nama: kunci, syarat: null, aksi: null, aktif: false, at: Date.now() };
	return db.aturanOtomasi[kunci];
}

export function ambil(db, nama) {
	return db.aturanOtomasi?.[String(nama || "").toLowerCase()] || null;
}

export function aturSyarat(db, nama, field, operator, nilai) {
	const a = ambil(db, nama);
	const op = String(operator || "").toLowerCase();
	if (!a || !field || !OPERATOR.includes(op)) return null;
	a.syarat = { field: String(field).slice(0, 40), operator: op, nilai: String(nilai || "").slice(0, 200) };
	return a;
}

export function aturAksi(db, nama, aksi, nilai) {
	const a = ambil(db, nama), ak = String(aksi || "").toLowerCase();
	if (!a || !AKSI.includes(ak)) return null;
	a.aksi = { nama: ak, nilai: String(nilai || "").slice(0, 200) };
	return a;
}

function cocok(nilai, syarat) {
	const a = String(nilai ?? "").toLowerCase();
	const b = String(syarat.nilai ?? "").toLowerCase();
	if (syarat.operator === "sama") return a === b;
	if (syarat.operator === "mengandung") return a.includes(b);
	if (syarat.operator === "diawali") return a.startsWith(b);
	if (syarat.operator === "lebih") return Number(a) > Number(b);
	if (syarat.operator === "kurang") return Number(a) < Number(b);
	return false;
}

export function uji(db, nama, contoh = {}) {
	const a = ambil(db, nama);
	if (!a || !a.syarat || !a.aksi) return null;
	const nilai = contoh[a.syarat.field];
	return { cocok: cocok(nilai, a.syarat), aksi: a.aksi.nama, nilai: a.aksi.nilai };
}

export function validasi(db, nama) {
	const a = ambil(db, nama);
	if (!a) return null;
	return { lengkap: Boolean(a.syarat && a.aksi), aktif: a.aktif, alasan: !a.syarat ? "syarat kosong" : !a.aksi ? "aksi kosong" : "siap" };
}

export function setAktif(db, nama, aktif) {
	const a = ambil(db, nama);
	if (!a || !a.syarat || !a.aksi) return null;
	a.aktif = Boolean(aktif);
	return a;
}

export function daftar(db) {
	return Object.values(db.aturanOtomasi || {}).slice(0, 30);
}

export function hapus(db, nama) {
	const kunci = String(nama || "").toLowerCase();
	if (!db.aturanOtomasi?.[kunci]) return false;
	delete db.aturanOtomasi[kunci];
	return true;
}
