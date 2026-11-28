// Game baru v13. Semua memakai data lokal atau simpulan acak, tanpa konten pihak ketiga.

const TOKOH = ["Soekarno", "Hat ta", "Kartini", "Sudirman", "Habibie", "Natsir", "Sukarno"];

export function sudokuBuat(tingkat = "mudah") {
	const ukuran = 4;
	const pola = [
		[1, 2, 3, 4],
		[3, 4, 1, 2],
		[2, 3, 4, 1],
		[4, 1, 2, 3],
	];
	const kosong = tingkat === "sulit" ? 8 : tingkat === "sedang" ? 6 : 4;
	const papan = pola.map((baris) => [...baris]);
	let tersembunyi = 0;
	for (let i = 0; i < ukuran && tersembunyi < kosong; i++) {
		for (let j = 0; j < ukuran && tersembunyi < kosong; j++) {
			if ((i + j) % 2 === 0) { papan[i][j] = 0; tersembunyi++; }
		}
	}
	return papan;
}

export function sudokuIsi(papan, baris, kolom, angka) {
	if (!Array.isArray(papan)) return null;
	const b = Number(baris), k = Number(kolom), a = Number(angka);
	if (!papan[b] || k < 0 || k >= papan[b].length || !Number.isInteger(a) || a < 1 || a > 4) return null;
	const salinan = papan.map((x) => [...x]);
	salinan[b][k] = a;
	return salinan;
}

export function formatSudoku(papan) {
	return papan.map((baris) => baris.map((n) => n || ".").join(" ")).join("\n");
}

export function game2048Baru() {
	const papan = Array.from({ length: 4 }, () => Array(4).fill(0));
	tambahUbin(papan);
	tambahUbin(papan);
	return papan;
}

function tambahUbin(papan) {
	const kosong = [];
	for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) if (!papan[i][j]) kosong.push([i, j]);
	if (!kosong.length) return;
	const [i, j] = kosong[Math.floor(Math.random() * kosong.length)];
	papan[i][j] = Math.random() < 0.9 ? 2 : 4;
}

function geserBaris(baris) {
	const angka = baris.filter(Boolean);
	const hasil = [];
	for (let i = 0; i < angka.length; i++) {
		if (angka[i] === angka[i + 1]) {
			hasil.push(angka[i] * 2);
			i++;
		} else hasil.push(angka[i]);
	}
	return [...hasil, ...Array(4 - hasil.length).fill(0)];
}

export function gerak2048(papan, arah) {
	if (!["atas", "bawah", "kiri", "kanan"].includes(String(arah || "").toLowerCase())) return null;
	const arahKecil = arah.toLowerCase();
	let p = papan.map((b) => [...b]);
	if (arahKecil === "kiri") {
		p = p.map(geserBaris);
	} else if (arahKecil === "kanan") {
		p = p.map((b) => geserBaris([...b].reverse()).reverse());
	} else {
		let t = [0, 1, 2, 3].map((j) => [0, 1, 2, 3].map((i) => p[i][j]));
		t = arahKecil === "atas" ? t.map(geserBaris) : t.map((b) => geserBaris([...b].reverse()).reverse());
		p = [0, 1, 2, 3].map((j) => [0, 1, 2, 3].map((i) => t[i][j]));
	}
	tambahUbin(p);
	return p;
}

export function kartuIngatan(jumlah = 8) {
	const pasangan = Math.max(2, Math.min(jumlah, 12)) / 2;
	const kartu = [];
	for (let i = 1; i <= pasangan; i++) kartu.push(i, i);
	return kartu.sort(() => Math.random() - 0.5);
}

export function tebakTokoh() {
	return TOKOH[Math.floor(Math.random() * TOKOH.length)];
}

export function riddleAi(daftar) {
	if (!Array.isArray(daftar) || !daftar.length) return null;
	return daftar[Math.floor(Math.random() * daftar.length)];
}

export function hadiahGamePass(hari) {
	return hari >= 7 ? "lencana mingguan" : hari >= 3 ? "lencana harian" : "belum ada";
}
