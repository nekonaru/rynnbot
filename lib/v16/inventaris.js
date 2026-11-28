// Inventaris dan avatar teks v16.

const kunciNama = (nama) => String(nama || "").toLowerCase().slice(0, 30);

export function inventarisBuat(u, nama) {
	if (!u.inventaris) u.inventaris = {};
	const kunci = kunciNama(nama);
	if (!kunci || u.inventaris[kunci]) return null;
	u.inventaris[kunci] = { nama: String(nama).slice(0, 30), barang: [] };
	return u.inventaris;
}

export function inventarisTambah(u, nama, barang) {
	const k = u.inventaris?.[kunciNama(nama)];
	if (!k || !barang) return null;
	k.barang.push({ nama: String(barang).slice(0, 60), dipakai: false });
	k.barang = k.barang.slice(-30);
	return k.barang;
}

export function inventarisPakai(u, barang) {
	let hasil = null;
	for (const k of Object.values(u.inventaris || {})) {
		const b = k.barang.find((x) => x.nama.toLowerCase() === kunciNama(barang));
		if (b) { b.dipakai = true; hasil = b; }
	}
	return hasil;
}

export function inventarisJual(u, barang) {
	for (const k of Object.values(u.inventaris || {})) {
		const i = k.barang.findIndex((x) => x.nama.toLowerCase() === kunciNama(barang));
		if (i !== -1) return k.barang.splice(i, 1)[0];
	}
	return null;
}

export function inventarisCari(u, kata) {
	const q = String(kata || "").toLowerCase();
	return Object.values(u.inventaris || {}).flatMap((k) => k.barang.filter((b) => b.nama.toLowerCase().includes(q))).slice(0, 10);
}

export function avatarBuat(u, nama) {
	if (!u.avatar) u.avatar = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 30);
	if (!kunci || u.avatar[kunci]) return null;
	u.avatar[kunci] = { nama: String(nama).slice(0, 30), teks: `Avatar ${nama}` };
	return u.avatar;
}

export function avatarPakai(u, nama) {
	const a = u.avatar?.[kunciNama(nama)];
	if (!a) return null;
	u.avatarAktif = a.nama;
	return a;
}
