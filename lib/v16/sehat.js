// Pemeriksaan integritas dataset lokal v16.

export function cekDataset(data, nama) {
	const entri = Object.entries(data || {});
	return {
		nama: String(nama || "dataset"),
		jumlah: entri.length,
		kunciKosong: entri.filter(([k]) => !k).length,
		nilaiKosong: entri.filter(([, v]) => v === null || v === undefined || v === "").length,
	};
}

export function duplikatDataset(data) {
	if (!Array.isArray(data)) return [];
	const melihat = new Set();
	const hasil = [];
	for (const x of data) {
		const k = typeof x === "string" ? x : JSON.stringify(x);
		if (melihat.has(k)) hasil.push(k.slice(0, 60));
		melihat.add(k);
	}
	return hasil.slice(0, 20);
}

export function kosongDataset(data) {
	if (!Array.isArray(data)) return [];
	return data.filter((x) => x === null || x === undefined || x === "").length;
}

export function ukuranDataset(obj) {
	return Object.fromEntries(Object.entries(obj || {}).map(([k, v]) => [k, Array.isArray(v) ? v.length : Object.keys(v || {}).length]));
}

export function laporanSehat(daftar) {
	return daftar.map((d) => `- ${d.nama}: ${d.jumlah} entri, kunci kosong ${d.kunciKosong}, nilai kosong ${d.nilaiKosong}`);
}

export function perbaikiDuplikat(data) {
	if (!Array.isArray(data)) return null;
	return [...new Set(data)];
}
