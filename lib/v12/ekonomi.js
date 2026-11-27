// Ekonomi simulasi lanjutan v12. Semua nilai bersifat simulasi bot.

const HARI = 86400000;

export function investasiHarian(u, sekarang = Date.now()) {
	const inv = u?.investasi;
	if (!inv) return null;
	const hari = Math.max(0, Math.floor((sekarang - (inv.sejak || inv.at || sekarang)) / HARI));
	const nilai = Math.floor(inv.pokok * (1 + 0.01 * hari));
	return { pokok: inv.pokok, hari, nilai, untung: nilai - inv.pokok };
}

export function grafikTabungan(tabungan, target) {
	if (!target || target < 1) return "[----------] 0%";
	const porsi = Math.max(0, Math.min(1, tabungan / target));
	const penuh = Math.round(porsi * 10);
	return `[${"#".repeat(penuh)}${"-".repeat(10 - penuh)}] ${Math.round(porsi * 100)}%`;
}

export function jadwalUtang(utang, tanggal) {
	return { nominal: Number(utang) || 0, tanggal: String(tanggal || "").slice(0, 30), dicatat: Date.now() };
}

export function riwayatDompet(u, batas = 10) {
	return Array.isArray(u?.uangLog) ? u.uangLog.slice(-batas).reverse() : [];
}

export function pasarSimulasi(seed = Date.now()) {
	const acak = (n) => Math.abs(Math.sin(seed + n) * 10000) % 100;
	const barang = ["beras", "minyak", "gula", "kopi", "teh", "cabai"];
	return barang.map((nama, i) => ({ nama, harga: 1000 + Math.floor(acak(i) * 90) * 100 }));
}

export function sisaAnggaran(u) {
	const anggaran = Object.values(u?.anggaran || {}).reduce((a, b) => a + b, 0);
	const keluar = (u?.pengeluaran || []).reduce((a, x) => a + (x.nominal || 0), 0);
	return { anggaran, keluar, sisa: anggaran - keluar };
}

export function formatPasar(barang) {
	return barang.map((b) => `- ${b.nama}: ${b.harga.toLocaleString("id-ID")}`).join("\n");
}
