// Pertanian simulasi v22. Nama tanaman bersifat umum, bukan data faktual.

const BENIH = {
	beras: { harga: 10, hasil: "padi" },
	jagung: { harga: 12, hasil: "jagung" },
	cabai: { harga: 15, hasil: "cabai" },
	tomat: { harga: 14, hasil: "tomat" },
	kopi: { harga: 20, hasil: "kopi" },
};
const HARGA_HASIL = { padi: 15, jagung: 18, cabai: 25, tomat: 22, kopi: 40 };
const OLAHAN = { padi: "tepung", jagung: "tepung jagung", cabai: "saus", tomat: "saus tomat", kopi: "bubuk kopi" };

export function daftarBenih() { return Object.entries(BENIH).map(([nama, v]) => ({ nama, harga: v.harga })); }
export function daftarHasil() { return Object.entries(HARGA_HASIL).map(([nama, harga]) => ({ nama, harga })); }

export function buatKebun(u, nama) {
	if (u.kebun) return null;
	u.kebun = { nama: String(nama || "Kebun").slice(0, 40), lahan: Array.from({ length: 4 }, () => null), gudang: {}, benih: {}, ternak: {}, aksi: 0 };
	return u.kebun;
}

export function beliBenih(u, nama, jumlah = 1) {
	const b = BENIH[String(nama || "").toLowerCase()];
	const n = Number(jumlah) || 1;
	if (!u.kebun || !b || (u.money || 0) < b.harga * n) return null;
	u.money -= b.harga * n;
	u.kebun.benih[nama] = (u.kebun.benih[nama] || 0) + n;
	return n;
}

export function tanam(u, nama, index) {
	const k = u.kebun, i = Number(index) - 1;
	const benih = String(nama || "").toLowerCase();
	if (!k || !k.lahan || !(i in k.lahan) || k.lahan[i] !== null || !BENIH[benih] || (k.benih[benih] || 0) < 1) return null;
	k.benih[benih] -= 1;
	k.lahan[i] = { benih, air: 0, pupuk: 0, tumbuh: 0, siap: false };
	k.aksi += 1;
	return k.lahan[i];
}

export function rawat(u, index, jenis = "siram") {
	const k = u.kebun, i = Number(index) - 1;
	const tanaman = k?.lahan?.[i];
	if (!tanaman || tanaman.siap) return null;
	if (jenis === "siram") tanaman.air = Math.min(3, tanaman.air + 1);
	else if (jenis === "pupuk") tanaman.pupuk = Math.min(3, tanaman.pupuk + 1);
	else return null;
	tanaman.tumbuh = Math.min(100, tanaman.tumbuh + (jenis === "pupuk" ? 25 : 15));
	if (tanaman.tumbuh >= 100) tanaman.siap = true;
	k.aksi += 1;
	return tanaman;
}

export function cekHama(u, index) {
	const k = u.kebun, i = Number(index) - 1;
	const tanaman = k?.lahan?.[i];
	if (!tanaman) return null;
	const ada = tanaman.air < 1;
	if (ada) tanaman.tumbuh = Math.max(0, tanaman.tumbuh - 10);
	return { ada, tumbuh: tanaman.tumbuh };
}

export function panen(u, index) {
	const k = u.kebun, i = Number(index) - 1;
	const tanaman = k?.lahan?.[i];
	if (!tanaman || !tanaman.siap) return null;
	const hasil = BENIH[tanaman.benih].hasil;
	k.gudang[hasil] = (k.gudang[hasil] || 0) + 1;
	k.lahan[i] = null;
	k.aksi += 1;
	return hasil;
}

export function jualHasil(u, nama, jumlah = 1) {
	const hasil = String(nama || "").toLowerCase();
	const n = Number(jumlah) || 1;
	const harga = HARGA_HASIL[hasil];
	if (!u.kebun || !harga || (u.kebun.gudang[hasil] || 0) < n) return null;
	u.kebun.gudang[hasil] -= n;
	u.money = (u.money || 0) + harga * n;
	return harga * n;
}

export function olah(u, nama) {
	const hasil = String(nama || "").toLowerCase();
	const produk = OLAHAN[hasil];
	if (!u.kebun || !produk || (u.kebun.gudang[hasil] || 0) < 2) return null;
	u.kebun.gudang[hasil] -= 2;
	u.kebun.gudang[produk] = (u.kebun.gudang[produk] || 0) + 1;
	return produk;
}

export function perluas(u) {
	const k = u.kebun;
	if (!k) return null;
	const biaya = 100 * (k.lahan.length / 4);
	if ((u.money || 0) < biaya) return null;
	u.money -= biaya;
	k.lahan.push(null);
	return biaya;
}

export function ternak(u, jenis) {
	const j = String(jenis || "").toLowerCase();
	if (!u.kebun || !["ayam", "kambing", "sapi"].includes(j)) return null;
	u.kebun.ternak[j] = (u.kebun.ternak[j] || 0) + 1;
	return u.kebun.ternak[j];
}

export function panenTernak(u) {
	if (!u.kebun || !Object.keys(u.kebun.ternak).length) return null;
	const hasil = { ayam: "telur", kambing: "susu", sapi: "susu" };
	const keluar = [];
	for (const [jenis, jumlah] of Object.entries(u.kebun.ternak)) {
		if (!jumlah) continue;
		const produk = hasil[jenis];
		u.kebun.gudang[produk] = (u.kebun.gudang[produk] || 0) + jumlah;
		keluar.push(produk);
	}
	return keluar;
}

export function statusKebun(k) {
	if (!k) return null;
	const lahan = k.lahan.map((t, i) => `${i + 1}. ${t ? `${t.benih} ${t.tumbuh}%${t.siap ? " siap" : ""}` : "kosong"}`).join("\n");
	const gudang = Object.entries(k.gudang).map(([n, v]) => `${n}: ${v}`).join(", ") || "(kosong)";
	return `*${k.nama}*\n\n${lahan}\n\nGudang: ${gudang}\nAksi: ${k.aksi}`;
}

export function papanKebun(db) {
	return Object.entries(db.users || {})
		.map(([jid, u]) => ({ jid, aksi: u.kebun?.aksi || 0 }))
		.filter((x) => x.aksi > 0)
		.sort((a, b) => b.aksi - a.aksi)
		.slice(0, 10);
}

export function bongkar(u) {
	if (!u.kebun) return false;
	delete u.kebun;
	return true;
}
