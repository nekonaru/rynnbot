// Facade data malas v10.0.0.
// Modul data dimuat sekali saat perintah pertama memakainya.

const cache = new Map();

const PEMETAAN = {
	fakta: () => import("./data-umum.js"),
	peribahasa: () => import("./data-peribahasa.js"),
	soal: () => import("./soal.js"),
	hangman: () => import("./data-game.js"),
	rumus: () => import("./rumus/index.js"),
	negara: () => import("./data-dunia.js"),
	indonesia: () => import("./data-indonesia.js"),
	edukasi: () => import("./data-edukasi.js"),
};

export async function muat(nama) {
	const kunci = String(nama || "").toLowerCase();
	const pembuat = PEMETAAN[kunci];
	if (!pembuat) return null;
	if (!cache.has(kunci)) cache.set(kunci, pembuat());
	return cache.get(kunci);
}

export const daftarModul = () => Object.keys(PEMETAAN);
