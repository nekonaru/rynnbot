// Audit menu v21. Gagal bila ada kategori di luar taksonomi atau penumpukan ekstrem.

import { daftarCommandV2, daftarKategoriCommand } from "../lib/command-registry.js";

const BAKU = new Set([
	"UMUM", "BOT", "GRUP", "EKONOMI", "GAME", "TURNAMEN", "EDUKASI", "AI",
	"MEDIA", "PENCARIAN", "KOMUNITAS", "STATISTIK", "KEAMANAN", "OWNER",
]);

const daftar = daftarCommandV2().filter((e) => !e.hidden);
const kategori = daftarKategoriCommand();
const asing = kategori.filter((k) => !BAKU.has(k.kategori)).map((k) => k.kategori);
const berat = kategori.filter((k) => k.jumlah > 200).map((k) => `${k.kategori}: ${k.jumlah}`);
const tanpaContoh = daftar.filter((e) => !e.contoh || !e.contoh.startsWith(".")).length;
const tanpaKategori = daftar.filter((e) => !BAKU.has(e.kategori)).length;

console.log(JSON.stringify({ perintah: daftar.length, kategori: kategori.length, asing, berat, tanpaContoh, tanpaKategori }, null, 2));
if (asing.length || berat.length || tanpaKategori) process.exit(1);
