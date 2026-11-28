// Ekonomi simulasi lanjutan v14. Semua angka adalah contoh, bukan data pasar nyata.

export function portofolio(u = {}) {
	const inv = u.investasi ? Math.floor(u.investasi.pokok * (1 + 0.01 * (u.investasi.hari || 0))) : 0;
	const tabungan = u.tabungan || 0;
	const rekening = Object.values(u.rekening || {}).reduce((n, v) => n + Number(v || 0), 0);
	const emas = (u.emasGram || 0) * 1000000;
	const saham = (u.sahamLot || 0) * 10000;
	return { saldo: u.money || 0, tabungan, rekening, investasi: inv, emas, saham, utang: u.utang || 0 };
}

export function dividen(nominal, persen = 5) {
	const n = Number(nominal);
	if (!Number.isFinite(n) || n < 0) return null;
	return { nominal: n, persen, hasil: Math.floor((n * persen) / 100) };
}

export function obligasi(nominal, hari) {
	const n = Number(nominal), h = Number(hari);
	if (!Number.isInteger(n) || n < 1 || !Number.isInteger(h) || h < 1) return null;
	const bunga = Math.floor(n * 0.003 * h);
	return { pokok: n, hari: h, bunga, total: n + bunga };
}

export function emasSimulasi(gram) {
	const g = Number(gram);
	if (!Number.isFinite(g) || g < 0) return null;
	const hargaContoh = 1000000;
	return { gram: g, hargaContoh, nilai: Math.floor(g * hargaContoh) };
}

export function sahamSimulasi(nama, lot) {
	const l = Number(lot);
	if (!Number.isInteger(l) || l < 1) return null;
	const hargaContoh = 10000;
	return { nama: String(nama || "contoh").slice(0, 20), lot: l, hargaContoh, nilai: l * hargaContoh };
}

export function kursSimulasi(mataUang, data = {}) {
	const nilai = data[String(mataUang || "").toLowerCase()];
	return Number.isFinite(nilai) ? { mataUang, nilai } : null;
}

export function inflasi(nominal, persen) {
	const n = Number(nominal), p = Number(persen);
	if (!Number.isFinite(n) || n < 0 || !Number.isFinite(p) || p < 0) return null;
	const setelah = Math.floor(n / (1 + p / 100));
	return { nominal: n, persen: p, setelah };
}

export function warisanSimulasi(nominal, pembagian) {
	const n = Number(nominal);
	const jumlah = Number(pembagian);
	if (!Number.isInteger(n) || n < 1 || !Number.isInteger(jumlah) || jumlah < 1) return null;
	return { total: n, pembagian: jumlah, perBagian: Math.floor(n / jumlah), sisa: n % jumlah };
}

export function infoMataUang(mataUang, data = []) {
	const q = String(mataUang || "").toLowerCase();
	const baris = (Array.isArray(data) ? data : []).find((x) => String(x[0] || "").toLowerCase() === q || String(x[1] || "").toLowerCase().includes(q));
	if (!baris) return null;
	return { kode: baris[0], nama: baris[1], simbol: baris[2], negara: baris[3] };
}
