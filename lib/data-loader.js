// Pemuatan data malas dan cache modul.
// Pemanggil memakai await muatData("nama") saat perintah pertama dipakai.

const modul = new Map();

const DAFTAR = {
	fakta: () => import("./data-umum.js"),
	peribahasa: () => import("./data-peribahasa.js"),
	soal: () => import("./soal.js"),
	hangman: () => import("./data-game.js"),
	rumus: () => import("./rumus/index.js"),
	negara: () => import("./data-dunia.js"),
	indonesia: () => import("./data-indonesia.js"),
	edukasi: () => import("./data-edukasi.js"),
};

export async function muatData(nama) {
	const kunci = String(nama || "").toLowerCase();
	const pembuat = DAFTAR[kunci];
	if (!pembuat) return null;
	if (!modul.has(kunci)) modul.has(kunci) || modul.set(kunci, pembuat());
	return modul.get(kunci);
}

export const daftarDataLazy = () => Object.keys(DAFTAR);
