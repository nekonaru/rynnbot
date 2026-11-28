// Jalur belajar, ujian, dan kartu hafalan v25. Dataset berasal dari berkas lokal.

import { sertifikat } from "../v15/kursus.js";
import { kartuHarian } from "../v12/belajar.js";
import { ambilDataset } from "../data-v23/indeks.js";
import { SOAL } from "../soal.js";
import { buatTurnamen } from "../v12/kompetisi.js";
import { papanKuis } from "../v16/papan.js";
import { tambahPoin } from "../v15/poin.js";

const BATAS_KARTU = 5;
const BATAS_KATEGORI = 10;
const BATAS_SATU_KATEGORI = 20;

function bilangan(nilai, min = 0) {
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n >= min ? n : null;
}

function teks(nilai, panjang = 40) {
	return String(nilai ?? "").trim().slice(0, panjang);
}

function kunci(nilai) {
	return teks(nilai, 30).toLowerCase();
}

function ubahEntri(entri) {
	if (Array.isArray(entri)) return entri.map((x) => teks(x, 100)).filter(Boolean).join(" - ");
	return teks(entri, 200);
}

export function jalur(u) {
	const k = u?.kursus;
	return k && typeof k === "object" && !Array.isArray(k) ? k : {};
}

export function harian(u) {
	const set = ambilDataset("Peribahasa");
	if (!set?.data?.length) return null;
	const hari = bilangan(u?.hari);
	return kartuHarian(set.data, hari === null ? Date.now() : hari * 86400000);
}

export function ujian(u, kategori, jawaban) {
	const daftar = SOAL[kunci(kategori)];
	if (!Array.isArray(daftar)) return { benar: 0, total: 0, skor: 0 };
	let benar = 0;
	for (let i = 0; i < daftar.length; i++) {
		const soal = daftar[i];
		const beri = Array.isArray(jawaban) ? jawaban[i] : jawaban?.[i] ?? jawaban?.[soal.id];
		const n = bilangan(beri);
		if (n !== null && n === Number(soal.a)) benar += 1;
	}
	const skor = Math.round((benar / daftar.length) * 100);
	if (u && typeof u === "object") u.skorBelajar = Math.max(bilangan(u.skorBelajar) || 0, skor);
	return { benar, total: daftar.length, skor };
}

export function nilai(u) {
	return bilangan(u?.skorBelajar) || 0;
}

export function sertifikatBelajar(u) {
	const selesai = Array.isArray(u?.kursusSelesai) ? u.kursusSelesai[u.kursusSelesai.length - 1] : null;
	const nama = teks(selesai || u?.kursusAktif?.nama || u?.nama || "Belajar", 40);
	return sertifikat(nama);
}

export function kartuBuat(u, kategori) {
	const k = teks(kategori, 30);
	if (!u || typeof u !== "object" || !k) return 0;
	const set = ambilDataset(kategori);
	if (!set?.data?.length) return 0;
	if (!u.kartuV25 || typeof u.kartuV25 !== "object") u.kartuV25 = {};
	const daftar = set.data.slice(0, BATAS_KARTU)
		.map((x) => ({ teks: ubahEntri(x), benar: 0, salah: 0 }))
		.filter((x) => x.teks)
		.slice(0, BATAS_SATU_KATEGORI);
	u.kartuV25[k] = daftar;
	const nama = Object.keys(u.kartuV25);
	if (nama.length > BATAS_KATEGORI) {
		for (const n of nama.slice(0, nama.length - BATAS_KATEGORI)) delete u.kartuV25[n];
	}
	return daftar.length;
}

export function kartuUlang(u) {
	const hasil = [];
	for (const [kategori, daftar] of Object.entries(u?.kartuV25 || {})) {
		if (!Array.isArray(daftar)) continue;
		for (const kartu of daftar) {
			if (kartu && (Number(kartu.salah) > 0 || kartu.salah === true)) hasil.push({ kategori, ...kartu });
		}
	}
	return hasil.slice(0, BATAS_KATEGORI * BATAS_SATU_KATEGORI);
}

export function kartuKategori(u) {
	return Object.keys(u?.kartuV25 || {});
}

export function kartuStatistik(u) {
	let benar = 0;
	let salah = 0;
	for (const daftar of Object.values(u?.kartuV25 || {})) {
		if (!Array.isArray(daftar)) continue;
		for (const kartu of daftar) {
			benar += bilangan(kartu?.benar) || 0;
			salah += bilangan(kartu?.salah) || 0;
		}
	}
	return { benar, salah, total: benar + salah };
}

export function kartuHapus(u, kategori) {
	const k = teks(kategori, 30);
	if (!k || !u?.kartuV25 || !Object.hasOwn(u.kartuV25, k)) return false;
	delete u.kartuV25[k];
	return true;
}

export function kuisKategori(kategori) {
	const set = ambilDataset(kategori);
	return set?.data?.slice(0, BATAS_KARTU) || [];
}

export function kuisTurnamen(db, chat, nama) {
	return buatTurnamen(db, chat, nama);
}

export function kuisPapan(db) {
	return papanKuis(db).slice(0, 10);
}

export function kuisHadiah(db, jid, skor) {
	const u = db?.users?.[jid];
	const n = bilangan(skor, 1);
	if (!u || !n) return null;
	return tambahPoin(u, n, "kuis");
}
