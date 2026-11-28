// Koperasi v25. Simpanan koperasi bersifat lokal dan tidak nyata.

import { ubahSaldo } from "../transaksi.js";
import { koperasiBuat, koperasiGabung, koperasiSetor, koperasiRekap, koperasiTutup } from "../v16/koperasi.js";
import { tokoAmbil } from "../v15/toko.js";

const BATAS_ANGGOTA = 50;
const BATAS_STOK = 1000000;
const BATAS_ITEM = 20;
const BATAS_TOKO = 50;

// Mengembalikan angka positif yang aman, atau 0 bila tidak valid.
function nominalValid(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n > 0 ? n : 0;
}

function angkaSaldo(nilai) {
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n >= 0 ? n : 0;
}

function bersihJid(jid) {
	return String(jid ?? "").trim().slice(0, 120);
}

function koperasiKunci(chat, nama) {
	const ruang = String(chat ?? "");
	const label = String(nama ?? "");
	if (!ruang.trim() || !label.trim()) return "";
	return `${ruang}:${label.toLowerCase().slice(0, 30)}`;
}

export function ambilKoperasi(db, chat, nama) {
	const kunci = koperasiKunci(chat, nama);
	if (!kunci || !db?.koperasi || typeof db.koperasi !== "object" || Array.isArray(db.koperasi)) return null;
	const k = db.koperasi[kunci];
	return k && typeof k === "object" && !Array.isArray(k) ? k : null;
}

export function simpan(db, chat, nama, jid, nominal) {
	const n = nominalValid(nominal);
	const id = bersihJid(jid);
	if (!n || !id || !koperasiKunci(chat, nama) || !db || typeof db !== "object") return false;
	let k = ambilKoperasi(db, chat, nama);
	if (!k) k = koperasiBuat(db, chat, nama);
	if (!k) return false;
	const potong = ubahSaldo(db, id, "money", -n, "koperasi:simpan");
	if (!potong) return false;
	if (!Array.isArray(k.anggota)) k.anggota = [];
	if (!k.anggota.includes(id)) {
		if (k.anggota.length >= BATAS_ANGGOTA) {
			ubahSaldo(db, id, "money", n, "koperasi:rollback");
			return false;
		}
		koperasiGabung(k, id);
	}
	if (!k.simpanan || typeof k.simpanan !== "object" || Array.isArray(k.simpanan)) k.simpanan = {};
	if (!koperasiSetor(k, id, n)) {
		ubahSaldo(db, id, "money", n, "koperasi:rollback");
		return false;
	}
	return true;
}

export function tarik(db, chat, nama, jid, nominal) {
	const n = nominalValid(nominal);
	const id = bersihJid(jid);
	if (!n || !id) return false;
	const k = ambilKoperasi(db, chat, nama);
	if (!k || !Array.isArray(k.anggota) || !k.anggota.includes(id)) return false;
	if (!k.simpanan || typeof k.simpanan !== "object" || Array.isArray(k.simpanan)) k.simpanan = {};
	const sisa = angkaSaldo(k.simpanan[id]);
	if (sisa < n) return false;
	const tambah = ubahSaldo(db, id, "money", n, "koperasi:tarik");
	if (!tambah) return false;
	k.simpanan[id] = sisa - n;
	return true;
}

export function dividen(db, chat, nama) {
	const k = ambilKoperasi(db, chat, nama);
	if (!k || !Array.isArray(k.anggota) || !k.simpanan || typeof k.simpanan !== "object" || Array.isArray(k.simpanan)) return [];
	const daftar = k.anggota.slice(0, BATAS_ANGGOTA);
	const total = daftar.reduce((n, jid) => n + angkaSaldo(k.simpanan[jid]), 0);
	if (total < 1) return [];
	return daftar.map((jid) => {
		const simpanan = angkaSaldo(k.simpanan[jid]);
		return { jid, simpanan, bagian: Math.round((simpanan / total) * 10000) / 100 };
	});
}

export function anggota(db, chat, nama) {
	return koperasiRekap(ambilKoperasi(db, chat, nama));
}

export function rapat(db, chat, nama) {
	const k = ambilKoperasi(db, chat, nama);
	const rekap = koperasiRekap(k);
	return {
		nama: String(k?.nama ?? nama ?? "").slice(0, 40),
		anggota: Array.isArray(k?.anggota) ? k.anggota.length : 0,
		totalSimpanan: rekap.reduce((n, x) => n + angkaSaldo(x.simpanan), 0),
		totalPinjaman: rekap.reduce((n, x) => n + angkaSaldo(x.pinjaman), 0),
	};
}

export function tutup(db, chat, nama) {
	const k = ambilKoperasi(db, chat, nama);
	return k ? koperasiTutup(k) : false;
}

function tokoKunci(chat, nama) {
	const ruang = String(chat ?? "");
	const label = String(nama ?? "");
	if (!ruang.trim() || !label.trim()) return "";
	return `${ruang}:${label.toLowerCase().slice(0, 30)}`;
}

export function tokoAmbilV25(db, chat, nama) {
	if (!tokoKunci(chat, nama) || !db?.toko || typeof db.toko !== "object" || Array.isArray(db.toko)) return null;
	const t = tokoAmbil(db, chat, String(nama ?? ""));
	return t && typeof t === "object" && !Array.isArray(t) ? t : null;
}

function itemPertama(toko) {
	if (!toko || !toko.barang || typeof toko.barang !== "object" || Array.isArray(toko.barang)) return null;
	const entri = Object.entries(toko.barang)[0];
	const item = entri?.[1];
	return item && typeof item === "object" && !Array.isArray(item) ? item : null;
}

export function tokoStok(db, chat, nama) {
	const toko = tokoAmbilV25(db, chat, nama);
	if (!toko?.barang || typeof toko.barang !== "object" || Array.isArray(toko.barang)) return [];
	return Object.values(toko.barang).slice(0, BATAS_ITEM).filter((x) => x && typeof x === "object" && !Array.isArray(x)).map((x) => ({
		nama: String(x.nama || "").slice(0, 40),
		harga: angkaSaldo(x.harga),
		stok: angkaSaldo(x.stok),
		diskon: Math.min(90, angkaSaldo(x.diskon)),
	}));
}

export function tokoRestok(db, chat, nama, jumlah) {
	const n = nominalValid(jumlah);
	const item = itemPertama(tokoAmbilV25(db, chat, nama));
	if (!n || !item) return false;
	const stok = angkaSaldo(item.stok) + n;
	if (!Number.isSafeInteger(stok) || stok > BATAS_STOK) return false;
	item.stok = stok;
	return true;
}

export function tokoHarga(db, chat, nama, nominal) {
	const n = nominalValid(nominal);
	const item = itemPertama(tokoAmbilV25(db, chat, nama));
	if (!n || !item) return false;
	item.harga = n;
	return true;
}

export function tokoDiskon(db, chat, nama, persen) {
	if (typeof persen !== "number" && typeof persen !== "string") return false;
	const n = Number(persen);
	if (!Number.isSafeInteger(n) || n < 1 || n > 90) return false;
	const item = itemPertama(tokoAmbilV25(db, chat, nama));
	if (!item) return false;
	item.diskon = n;
	return true;
}

export function tokoBeliV25(db, chat, jid, nama, jumlah) {
	const n = nominalValid(jumlah);
	const id = bersihJid(jid);
	const toko = tokoAmbilV25(db, chat, nama);
	const item = itemPertama(toko);
	if (!n || !id || !item || toko?.tutup) return false;
	const stok = angkaSaldo(item.stok);
	const harga = angkaSaldo(item.harga);
	const total = harga * n;
	if (stok < n || harga < 1 || !Number.isSafeInteger(total)) return false;
	const bayar = ubahSaldo(db, id, "money", -total, "toko:beli");
	if (!bayar) return false;
	item.stok = stok - n;
	return true;
}

export function tokoJual(db, chat, jid, nama, jumlah) {
	const n = nominalValid(jumlah);
	const id = bersihJid(jid);
	const toko = tokoAmbilV25(db, chat, nama);
	const item = itemPertama(toko);
	if (!n || !id || !item || toko?.tutup) return false;
	const harga = angkaSaldo(item.harga);
	const total = harga * n;
	const stok = angkaSaldo(item.stok) + n;
	if (harga < 1 || !Number.isSafeInteger(total) || !Number.isSafeInteger(stok) || stok > BATAS_STOK) return false;
	const tambah = ubahSaldo(db, id, "money", total, "toko:jual");
	if (!tambah) return false;
	item.stok = stok;
	return true;
}

export function tokoLaporan(db, chat) {
	const ringkasan = { nama: String(chat ?? "").slice(0, 60), jumlahItem: 0, totalNilai: 0 };
	const peta = db?.toko;
	if (!peta || typeof peta !== "object" || Array.isArray(peta)) return ringkasan;
	for (const toko of Object.values(peta).slice(0, BATAS_TOKO)) {
		if (!toko || typeof toko !== "object" || Array.isArray(toko) || toko.chat !== chat) continue;
		const barang = toko.barang;
		if (!barang || typeof barang !== "object" || Array.isArray(barang)) continue;
		for (const item of Object.values(barang).slice(0, BATAS_ITEM)) {
			if (!item || typeof item !== "object" || Array.isArray(item)) continue;
			const nilai = angkaSaldo(item.harga) * angkaSaldo(item.stok);
			ringkasan.jumlahItem++;
			ringkasan.totalNilai += Number.isSafeInteger(nilai) ? nilai : 0;
		}
	}
	if (!Number.isSafeInteger(ringkasan.totalNilai)) ringkasan.totalNilai = Number.MAX_SAFE_INTEGER;
	return ringkasan;
}

export function tokoTutup(db, chat, nama) {
	const toko = tokoAmbilV25(db, chat, nama);
	if (!toko || toko.tutup) return false;
	toko.tutup = true;
	return true;
}
