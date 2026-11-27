// Pembagian kelompok dan tim. Fungsi murni, tanpa efek samping.

export const bagiKelompok = (jumlahAnggota, jumlahKelompok) => {
	const n = Number(jumlahAnggota);
	const k = Number(jumlahKelompok);
	if (!Number.isInteger(n) || !Number.isInteger(k) || n < 1 || k < 1) return null;
	if (k > n) return null;
	const perKelompok = Math.floor(n / k);
	const sisa = n % k;
	const distribusi = Array.from({ length: k }, (_, i) => perKelompok + (i < sisa ? 1 : 0));
	return { jumlahAnggota: n, jumlahKelompok: k, perKelompok, sisa, distribusi };
};

const UKURAN_GAME = {
	"mobile legend": 5, "ml": 5, "mlbb": 5,
	"pubg": 4, "pubg mobile": 4,
	"free fire": 4, "ff": 4,
	"valorant": 5, "valorant mobile": 5,
	"dota": 5, "dota 2": 5,
	"cs": 5, "counter strike": 5,
	"cod": 5, "call of duty": 5,
	"arena of valor": 5, "aov": 5,
};

export const ukuranTimGame = (nama) => UKURAN_GAME[String(nama || "").trim().toLowerCase()] || null;

export const bagiTim = (jumlahPemain, ukuranTim) => {
	const n = Number(jumlahPemain);
	const u = Number(ukuranTim);
	if (!Number.isInteger(n) || !Number.isInteger(u) || n < 2 || u < 2 || u > n) return null;
	const jumlahTim = Math.floor(n / u);
	const sisa = n % u;
	const formasi = jumlahTim >= 2 ? `${u}v${u}` : `${u} pemain`;
	return { jumlahPemain: n, ukuranTim: u, jumlahTim, sisa, formasi };
};

export const formatPembagian = (hasil) => {
	if (!hasil) return "Data tidak valid.";
	if (hasil.distribusi) {
		return `*Pembagian Kelompok*\n\nAnggota: ${hasil.jumlahAnggota}\nKelompok: ${hasil.jumlahKelompok}\nPer kelompok: ${hasil.perKelompok}\nSisa: ${hasil.sisa}\n\n${hasil.distribusi.map((n, i) => `Kelompok ${i + 1}: ${n} anggota`).join("\n")}`;
	}
	return `*Pembagian Tim*\n\nPemain: ${hasil.jumlahPemain}\nUkuran tim: ${hasil.ukuranTim}\nJumlah tim: ${hasil.jumlahTim}\nSisa: ${hasil.sisa}\nFormasi: ${hasil.formasi}`;
};
