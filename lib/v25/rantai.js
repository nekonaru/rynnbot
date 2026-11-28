// Rantai pertanian, hewan, dan karier v25. Semua nilai bersifat simulasi.

import { ubahSaldo } from "../transaksi.js";
import { daftarHasil } from "../v22/kebun.js";
import { tambahPoin } from "../v15/poin.js";

const BATAS_PESANAN = 10;
const JABATAN = ["magang", "staf", "senior", "spesialis", "manajer", "direktur"];

function bilangan(nilai, min = 0) {
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n >= min ? n : null;
}

function teks(nilai, panjang = 40) {
	return String(nilai ?? "").trim().slice(0, panjang);
}

function tanamanPertama(u, belumSiap = false) {
	const lahan = u?.kebun?.lahan;
	if (!Array.isArray(lahan)) return null;
	return lahan.find((t) => t && typeof t === "object" && (!belumSiap || !t.siap)) || null;
}

function jumlahPanen(u) {
	const k = u?.kebun;
	if (!k) return 0;
	const gudang = Object.values(k.gudang || {}).reduce((n, v) => n + (bilangan(v) || 0), 0);
	return Math.max(bilangan(k.panen) || 0, bilangan(k.aksi) || 0, gudang);
}

function peringkat(u) {
	const level = bilangan(u?.pet?.level) || 0;
	const panen = jumlahPanen(u);
	const jabatan = teks(u?.karir?.jabatan, 20).toLowerCase();
	const indeks = JABATAN.indexOf(jabatan);
	return {
		level,
		panen,
		jabatan: jabatan || "-",
		nilai: level + panen + (indeks < 0 ? 0 : indeks + 1),
	};
}

export function bantuKebun(u, db, jid) {
	const level = bilangan(u?.pet?.level, 1);
	const tanaman = tanamanPertama(u, true);
	if (!level || !tanaman) return false;
	const tambah = 1 + level;
	tanaman.tumbuh = Math.min(100, (bilangan(tanaman.tumbuh) || 0) + tambah);
	if (tanaman.tumbuh >= 100) tanaman.siap = true;
	return true;
}

export function pakaiHasil(u, db, jid) {
	if (!u?.pet || !u?.kebun?.gudang) return false;
	const nama = Object.keys(u.kebun.gudang).find((k) => (bilangan(u.kebun.gudang[k], 1) || 0) >= 1);
	if (!nama) return false;
	u.kebun.gudang[nama] -= 1;
	u.petBarang = u.petBarang || {};
	u.petBarang[nama] = (bilangan(u.petBarang[nama]) || 0) + 1;
	return true;
}

export function hadiahPanen(u, db, jid) {
	const level = bilangan(u?.pet?.level, 1);
	if (!level) return null;
	const hari = new Date().toISOString().slice(0, 10);
	if (u.hadiahPanenV25 === hari) return null;
	const hadiah = 5 * level;
	const hasil = ubahSaldo(db, jid, "money", hadiah, "kebun:panen");
	if (!hasil) return null;
	u.hadiahPanenV25 = hari;
	return hadiah;
}

export function prestasiLintas(u) {
	const syarat = [
		{ nama: "PetSetia", tercapai: Boolean(u?.pet && (bilangan(u.pet.level) || 0) >= 5) },
		{ nama: "KebunSubur", tercapai: Boolean(u?.kebun && jumlahPanen(u) >= 10) },
		{ nama: "KarierMapan", tercapai: Boolean(u?.karir && (bilangan(u.karir.kinerja) || 0) >= 20) },
		{ nama: "RantaiLengkap", tercapai: Boolean(u?.pet && u?.kebun && u?.karir) },
	];
	return syarat;
}

export function kompos(u, db, jid) {
	const tanaman = tanamanPertama(u);
	if (!tanaman) return false;
	tanaman.pupuk = Math.min(3, (bilangan(tanaman.pupuk) || 0) + 1);
	return true;
}

export function kirimToko(u, db, jid, barang, jumlah) {
	const nama = teks(barang, 30).toLowerCase();
	const n = bilangan(jumlah, 1);
	if (!nama || !n || !u?.kebun?.gudang) return false;
	const harga = bilangan(daftarHasil().find((x) => x.nama === nama)?.harga, 1);
	if (!harga || (bilangan(u.kebun.gudang[nama]) || 0) < n) return false;
	const hasil = ubahSaldo(db, jid, "money", harga * n, "kebun:toko");
	if (!hasil) return false;
	u.kebun.gudang[nama] -= n;
	return true;
}

export function pesananBuat(u, barang, jumlah) {
	const nama = teks(barang, 30);
	const n = bilangan(jumlah, 1);
	if (!u || typeof u !== "object" || !nama || !n) return null;
	if (!Array.isArray(u.pesananKebun)) u.pesananKebun = [];
	const pesanan = {
		id: Math.random().toString(36).slice(2, 7).toUpperCase(),
		barang: nama,
		jumlah: n,
		status: "menunggu",
		at: Date.now(),
	};
	u.pesananKebun.push(pesanan);
	u.pesananKebun = u.pesananKebun.slice(-BATAS_PESANAN);
	return pesanan;
}

export function pengiriman(u) {
	if (!Array.isArray(u?.pesananKebun)) return [];
	return u.pesananKebun.slice(-BATAS_PESANAN).map((p) => ({ ...p }));
}

export function gajiDompet(db, jid, nominal) {
	const u = db?.users?.[jid];
	const n = bilangan(nominal, 1);
	if (!u?.karir || u.karir.cuti || !n) return null;
	const hasil = ubahSaldo(db, jid, "money", n, "karir:gaji");
	return hasil ? n : null;
}

export function danaKebun(db, jid, nominal) {
	const n = bilangan(nominal, 1);
	const u = db?.users?.[jid];
	if (!n || !u?.kebun) return false;
	const keluar = ubahSaldo(db, jid, "money", -n, "kebun:dana");
	if (!keluar) return false;
	const masuk = ubahSaldo(db, jid, "tabungan", n, "kebun:dana");
	if (!masuk) {
		ubahSaldo(db, jid, "money", n, "kebun:dana:rollback");
		return false;
	}
	u.kebun.modal = (bilangan(u.kebun.modal) || 0) + n;
	return true;
}

export function kinerjaPet(u) {
	return (bilangan(u?.karir?.kinerja) || 0) + (bilangan(u?.pet?.level) || 0);
}

export function sertifikatKarir(u) {
	const keahlian = u?.karir?.keahlian;
	if (!keahlian || typeof keahlian !== "object") return null;
	let terbaik = null;
	for (const [nama, nilai] of Object.entries(keahlian)) {
		if (nama.includes(":")) continue;
		const n = bilangan(nilai, 1);
		if (n && (!terbaik || n > terbaik.nilai)) terbaik = { nama: teks(nama, 30), nilai: n };
	}
	if (!terbaik) return null;
	return `*Sertifikat Karier*\n\nKeahlian terbaik: ${terbaik.nama} (${terbaik.nilai}).\n\nDiterbitkan oleh Rynn.`;
}

export function statusRantai(u) {
	return {
		pet: Boolean(u?.pet),
		kebun: Boolean(u?.kebun),
		karir: Boolean(u?.karir),
		pesanan: Array.isArray(u?.pesananKebun) ? u.pesananKebun.length : 0,
	};
}

export function papanRantai(db) {
	return Object.entries(db?.users || {})
		.map(([jid, u]) => ({ jid, ...peringkat(u) }))
		.filter((x) => x.nilai > 0)
		.sort((a, b) => b.nilai - a.nilai || b.level - a.level)
		.slice(0, 10);
}

export function hadiahRantai(db, jid) {
	const u = db?.users?.[jid];
	if (!u || (!u.pet && !u.kebun && !u.karir)) return null;
	const hari = new Date().toISOString().slice(0, 10);
	if (u.hadiahRantaiV25 === hari) return null;
	const hadiah = 5 + peringkat(u).nilai;
	const hasil = tambahPoin(u, hadiah, "rantai");
	if (!hasil) return null;
	u.hadiahRantaiV25 = hari;
	return hasil;
}
