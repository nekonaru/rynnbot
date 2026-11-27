// Pembagian kelompok dan tim lanjutan v12.

export function bagiAcak(orang, jumlahKelompok) {
	const daftar = [...new Set(orang.filter(Boolean))];
	const k = Number(jumlahKelompok);
	if (daftar.length < 2 || !Number.isInteger(k) || k < 1 || k > daftar.length) return null;
	const acak = daftar.sort(() => Math.random() - 0.5);
	const hasil = Array.from({ length: k }, () => []);
	acak.forEach((n, i) => hasil[i % k].push(n));
	return hasil;
}

export function timSeimbang(orang, ukuran) {
	const daftar = [...orang.filter(Boolean)];
	const u = Number(ukuran);
	if (daftar.length < 2 || !Number.isInteger(u) || u < 2 || u > daftar.length) return null;
	const k = Math.floor(daftar.length / u);
	const hasil = Array.from({ length: k }, () => []);
	daftar.sort(() => Math.random() - 0.5).forEach((n, i) => hasil[i % k].push(n));
	return hasil;
}

export function beriNama(grup, nama) {
	return grup.map((anggota, i) => ({
		nama: `${nama || "Kelompok"} ${i + 1}`,
		anggota,
	}));
}

export function rotasiTim(tim) {
	if (!Array.isArray(tim) || tim.length < 2) return null;
	const semua = tim.flat();
	const geser = semua.shift();
	semua.push(geser);
	return tim.map((_, i) => semua.slice(i * tim[0].length, (i + 1) * tim[0].length));
}

export function formatGrup(grup, judul = "Pembagian") {
	const baris = grup.map((g, i) => {
		if (Array.isArray(g)) return `${i + 1}. ${g.join(", ")} (${g.length})`;
		return `${i + 1}. ${g.nama}: ${g.anggota.join(", ")}`;
	});
	return `*${judul}*\n\n${baris.join("\n")}`;
}
