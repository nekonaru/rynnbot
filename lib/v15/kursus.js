// Kursus mini berurutan v15. Materi berasal dari data lokal atau ditambahkan owner.

export function kursusBuat(db, nama, langkah) {
	if (!db.kursus) db.kursus = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 40);
	const daftar = Array.isArray(langkah) ? langkah.filter(Boolean).slice(0, 20) : [];
	if (!kunci || !daftar.length) return null;
	db.kursus[kunci] = { nama: String(nama).slice(0, 40), langkah: daftar.map((x) => String(x).slice(0, 300)) };
	return db.kursus[kunci];
}

export function kursusMulai(u, db, nama) {
	const k = db.kursus?.[String(nama || "").toLowerCase()];
	if (!k) return null;
	u.kursusAktif = { nama: k.nama, indek: 0 };
	return { judul: k.nama, langkah: k.langkah[0], nomor: 1, total: k.langkah.length };
}

export function kursusLanjut(u, db) {
	const aktif = u.kursusAktif;
	const k = db.kursus?.[String(aktif?.nama || "").toLowerCase()];
	if (!k) return null;
	aktif.indek += 1;
	if (aktif.indek >= k.langkah.length) return { selesai: true };
	return { judul: k.nama, langkah: k.langkah[aktif.indek], nomor: aktif.indek + 1, total: k.langkah.length };
}

export function kursusSelesai(u) {
	const aktif = u.kursusAktif;
	if (!aktif) return null;
	u.kursusSelesai = u.kursusSelesai || [];
	u.kursusSelesai.push(aktif.nama);
	u.kursusAktif = null;
	return u.kursusSelesai.slice(-20);
}

export function sertifikat(nama) {
	return `*Sertifikat*\n\nDengan ini dinyatakan bahwa peserta telah menyelesaikan kursus *${String(nama || "Kursus").slice(0, 40)}*.\n\nDiterbitkan oleh Rynn.`;
}

export function materiTambah(db, judul, isi) {
	if (!db.materi) db.materi = {};
	const kunci = String(judul || "").toLowerCase().slice(0, 40);
	if (!kunci) return null;
	db.materi[kunci] = { judul: String(judul).slice(0, 40), isi: String(isi || "").slice(0, 1000) };
	return db.materi;
}

export function materiCari(db, kata) {
	const q = String(kata || "").toLowerCase();
	return Object.values(db.materi || {}).filter((m) => m.judul.toLowerCase().includes(q) || m.isi.toLowerCase().includes(q)).slice(0, 8);
}
