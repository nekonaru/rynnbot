// Generator kreatif v14. Semua hasil dari perpaduan suku kata lokal, bukan data faktual.

const SUKU = ["ra", "di", "nu", "sa", "ri", "ma", "la", "yu", "ka", "ti"];
const TEMA = ["cerah", "tenang", "kuat", "baru", "jujur", "hangat"];

function pilih(daftar, seed) {
	return daftar[Math.abs(seed) % daftar.length];
}

export function namaMerek(kata) {
	const dasar = String(kata || "rynn").toLowerCase().replace(/[^a-z]/g, "").slice(0, 6) || "rynn";
	return `${dasar}${pilih(SUKU, dasar.length)}${pilih(TEMA, dasar.charCodeAt(0))}`;
}

export function namaGrup(tema) {
	return `Grup ${pilih(TEMA, String(tema || "").length)} ${pilih(SUKU, String(tema || "").charCodeAt(0))}`;
}

export function caption(teks) {
	const isi = String(teks || "").slice(0, 120);
	return `${isi}\n\n#DibuatDenganRynn`;
}

export function hashtag(topik) {
	const bersih = String(topik || "rynn").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 20) || "rynn";
	return [`#${bersih}`, `#${bersih}HariIni`, `#Rynn${bersih}`];
}

export function tagline(nama) {
	const n = String(nama || "Rynn").slice(0, 30);
	return [`${n}, mulai dari langkah kecil.`, `${n}: sederhana, jelas, dekat.`, `Bersama ${n}, pelan tapi terus.`];
}

export function judulAlternatif(teks) {
	const inti = String(teks || "cerita").trim().slice(0, 60);
	return [`Catatan tentang ${inti}`, `${inti} dalam langkah kecil`, `Satu sudut pandang: ${inti}`];
}

export function dialogPendek(topik) {
	const t = String(topik || "belajar").slice(0, 60);
	return `A: "Kita mulai dari mana untuk ${t}?"\nB: "Dari satu langkah yang bisa kita lakukan sekarang."`;
}

export function suratPendek(nama, pesan) {
	return `Yth. ${String(nama || "Sahabat").slice(0, 40)},\n\n${String(pesan || "").slice(0, 300)}\n\nHormat kami,\nRynn`;
}
