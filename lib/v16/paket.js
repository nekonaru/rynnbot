// Paket layanan simulasi v16. Tanpa pembayaran nyata.

const PAKET = {
	dasar: { nama: "Dasar", batasLimit: 10, fitur: ["rumus", "data", "quiz"] },
	plus: { nama: "Plus", batasLimit: 50, fitur: ["rumus", "data", "quiz", "ai", "media"] },
	pro: { nama: "Pro", batasLimit: 200, fitur: ["rumus", "data", "quiz", "ai", "media", "ekonomi", "turnamen"] },
};

export function daftarPaket() {
	return Object.entries(PAKET).map(([kunci, p]) => ({ kunci, ...p }));
}

export function pilihPaket(u, nama) {
	const kunci = String(nama || "").toLowerCase();
	if (!PAKET[kunci]) return null;
	u.paket = kunci;
	u.paketRiwayat = u.paketRiwayat || [];
	u.paketRiwayat.push({ paket: kunci, at: Date.now() });
	u.paketRiwayat = u.paketRiwayat.slice(-10);
	return PAKET[kunci];
}

export function paketAktif(u) {
	return PAKET[u.paket || "dasar"];
}

export function bandingPaket(a, b) {
	const satu = PAKET[String(a || "").toLowerCase()];
	const dua = PAKET[String(b || "").toLowerCase()];
	if (!satu || !dua) return null;
	return { satu, dua };
}

export function batasPaket(u) {
	return paketAktif(u).batasLimit;
}
