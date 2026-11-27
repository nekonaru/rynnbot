// Antrean per kunci. Menjamin hanya satu tugas aktif untuk satu kunci,
// sehingga dua perintah dari user yang sama tidak bisa saling menimpa state.

const antrean = new Map();

export function jalankanBerkunci(kunci, tugas) {
	const sebelumnya = antrean.get(kunci) || Promise.resolve();
	const berikutnya = sebelumnya.catch(() => {}).then(tugas);
	antrean.set(kunci, berikutnya);
	const bersihkan = () => {
		if (antrean.get(kunci) === berikutnya) antrean.delete(kunci);
	};
	berikutnya.then(bersihkan, bersihkan);
	return berikutnya;
}

export const jumlahAntrean = () => antrean.size;
