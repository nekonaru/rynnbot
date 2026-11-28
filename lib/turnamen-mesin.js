// Mesin turnamen v19. Dipakai turnamen, liga, kuis, dan wordle.
// State murni: semua perubahan lewat fungsi di sini, mudah diuji.

const MODE = ["single", "double", "roundrobin"];
const MENANG = 3;
const SERI = 1;

const bersih = (nama) => [...new Set((Array.isArray(nama) ? nama : [])
	.filter((x) => typeof x === "string" && x.trim())
	.map((x) => x.trim().replace(/^@/, "")))];

function pasangan(daftar) {
	const hasil = [];
	for (let i = 0; i < daftar.length; i += 2) {
		hasil.push({ a: daftar[i], b: daftar[i + 1] || null, pemenang: null });
	}
	return hasil;
}

function klasemenKosong(peserta) {
	return Object.fromEntries(peserta.map((p) => [p, { menang: 0, kalah: 0, seri: 0, poin: 0, skor: 0 }]));
}

function perbaruiKlasemen(state, a, b, pemenang, skorA = 0, skorB = 0) {
	const k = state.klasemen;
	if (!k[a] || !k[b]) return;
	k[a].skor += Number(skorA) || 0;
	k[b].skor += Number(skorB) || 0;
	if (pemenang === "seri") {
		k[a].seri++; k[b].seri++;
		k[a].poin += SERI; k[b].poin += SERI;
	} else if (pemenang === a) {
		k[a].menang++; k[b].kalah++; k[a].poin += MENANG;
	} else {
		k[b].menang++; k[a].kalah++; k[b].poin += MENANG;
	}
}

function buatBabak(daftar, nomorAwal = 1) {
	const babak = [];
	let jumlah = daftar.length;
	let slot = daftar;
	while (jumlah > 1) {
		const pertandingan = pasangan(slot);
		for (const m of pertandingan) if (!m.b && m.a && !m.pemenang) m.pemenang = m.a;
		babak.push({ babak: babak.length + nomorAwal, pertandingan });
		jumlah = Math.ceil(jumlah / 2);
		slot = Array.from({ length: jumlah }, () => null);
	}
	return babak;
}

function majuBabak(babak) {
	for (let i = 0; i < babak.length; i++) {
		const sekarang = babak[i];
		if (sekarang.pertandingan.some((m) => !m.pemenang)) return null;
		const berikut = babak[i + 1];
		if (!berikut) return sekarang.pertandingan[0]?.pemenang || null;
		const lanjut = sekarang.pertandingan.map((m) => m.pemenang);
		berikut.pertandingan.forEach((m, index) => {
			if (!m.a) m.a = lanjut[index * 2] || null;
			if (!m.b) m.b = lanjut[index * 2 + 1] || null;
			if (!m.b && m.a && !m.pemenang) m.pemenang = m.a;
		});
	}
	return null;
}

export function buatKejuaraan({ nama = "Turnamen", mode = "single", peserta = [], seed = [] } = {}) {
	const daftar = bersih(peserta);
	const m = MODE.includes(mode) ? mode : "single";
	if (daftar.length < 2) return null;

	const seedValid = bersih(seed).filter((x) => daftar.includes(x));
	const urutan = [...seedValid, ...daftar.filter((x) => !seedValid.includes(x))].slice(0, 32);
	const state = {
		id: Math.random().toString(36).slice(2, 8).toUpperCase(),
		nama: String(nama).slice(0, 80),
		mode: m,
		peserta: urutan,
		seed: seedValid,
		klasemen: klasemenKosong(urutan),
		hasil: [],
		jadwal: [],
		juara: null,
		selesai: false,
		at: Date.now(),
	};

	if (m === "single") {
		state.bracket = buatBabak(urutan);
	} else if (m === "double") {
		state.upper = buatBabak(urutan);
		state.loserPool = [];
		state.lower = [];
		state.final = { a: null, b: null, pemenang: null };
	} else {
		state.pertandingan = [];
		for (let i = 0; i < urutan.length; i++) {
			for (let j = i + 1; j < urutan.length; j++) {
				state.pertandingan.push({ a: urutan[i], b: urutan[j], pemenang: null });
			}
		}
	}
	return state;
}

export function pertandinganTersedia(state) {
	if (!state || state.selesai) return [];
	if (state.mode === "single") {
		for (const babak of state.bracket || []) for (const m of babak.pertandingan) if (!m.pemenang && m.a && m.b) return [m];
		return [];
	}
	if (state.mode === "double") {
		for (const babak of state.upper) for (const m of babak.pertandingan) if (!m.pemenang && m.a && m.b) return [m];
		for (const babak of state.lower) for (const m of babak.pertandingan) if (!m.pemenang && m.a && m.b) return [m];
		if (state.final.a && state.final.b && !state.final.pemenang) return [state.final];
		return [];
	}
	return (state.pertandingan || []).filter((m) => !m.pemenang);
}

function selesaikanDouble(state) {
	if (state.selesai) return;
	const juaraUpper = majuBabak(state.upper);
	if (juaraUpper && !state.final.a) {
		state.final.a = juaraUpper;
		state.lower = buatBabak(state.loserPool);
	}
	const juaraLower = state.lower.length ? majuBabak(state.lower) : (state.loserPool[0] || null);
	if (state.final.a && !state.final.b && juaraLower) state.final.b = juaraLower;
	if (state.final.a && state.final.b && state.final.pemenang) {
		state.juara = state.final.pemenang;
		state.selesai = true;
	}
}

export function catatHasil(state, { a, b, pemenang, skorA = 0, skorB = 0 } = {}) {
	if (!state || state.selesai) return { ok: false, alasan: "Turnamen tidak aktif." };
	if (state.mode !== "roundrobin" && pemenang === "seri") return { ok: false, alasan: "Eliminasi tidak menerima seri." };
	if (pemenang !== "seri" && pemenang !== a && pemenang !== b) return { ok: false, alasan: "Pemenang bukan peserta pertandingan ini." };

	if (state.mode === "roundrobin") {
		const m = state.pertandingan.find((x) => !x.pemenang && ((x.a === a && x.b === b) || (x.a === b && x.b === a)));
		if (!m) return { ok: false, alasan: "Pertandingan tidak ditemukan atau sudah selesai." };
		const pembalik = m.a !== a;
		m.pemenang = pemenang;
		m.skorA = pembalik ? skorB : skorA;
		m.skorB = pembalik ? skorA : skorB;
		perbaruiKlasemen(state, a, b, pemenang, skorA, skorB);
		state.hasil.push({ a, b, pemenang, skorA, skorB, at: Date.now() });
		if (state.pertandingan.every((x) => x.pemenang)) {
			state.juara = klasemen(state)[0]?.nama || null;
			state.selesai = true;
		}
		return { ok: true, selesai: state.selesai };
	}

	const daftar = state.mode === "single"
		? (state.bracket || []).flatMap((x) => x.pertandingan)
		: [...state.upper.flatMap((x) => x.pertandingan), ...state.lower.flatMap((x) => x.pertandingan), state.final];
	const m = daftar.find((x) => !x.pemenang && x.a === a && x.b === b);
	if (!m) return { ok: false, alasan: "Pertandingan tidak ditemukan atau sudah selesai." };
	m.pemenang = pemenang;
	m.skorA = skorA; m.skorB = skorB;
	perbaruiKlasemen(state, a, b, pemenang, skorA, skorB);
	state.hasil.push({ a, b, pemenang, skorA, skorB, at: Date.now() });

	if (state.mode === "single") {
		const juara = majuBabak(state.bracket);
		if (juara) { state.juara = juara; state.selesai = true; }
	} else {
		const diUpper = state.upper.some((babak) => babak.pertandingan.includes(m));
		if (diUpper) {
			const kalah = m.a === pemenang ? m.b : m.a;
			if (kalah && !state.loserPool.includes(kalah)) state.loserPool.push(kalah);
		}
		if (m !== state.final) selesaikanDouble(state);
		else if (state.final.a && state.final.b && state.final.pemenang) {
			state.juara = state.final.pemenang;
			state.selesai = true;
		}
	}
	return { ok: true, selesai: state.selesai };
}

export function klasemen(state) {
	return Object.entries(state?.klasemen || {})
		.sort((a, b) => b[1].poin - a[1].poin || b[1].skor - a[1].skor || a[0].localeCompare(b[0]))
		.map(([nama, stat]) => ({ nama, ...stat }));
}

export function jadwalkan(state, a, b, waktu) {
	if (!state) return null;
	state.jadwal.push({ a, b, waktu: String(waktu || "").slice(0, 40), at: Date.now() });
	state.jadwal = state.jadwal.slice(-20);
	return state.jadwal;
}

export function formatRingkas(state) {
	if (!state) return "Belum ada turnamen.";
	return [
		`*${state.nama}* (${state.mode})`,
		`ID: ${state.id}`,
		`Peserta: ${state.peserta.length}`,
		`Hasil: ${state.hasil.length}`,
		`Juara: ${state.juara || "belum ditentukan"}`,
	].join("\n");
}

export function formatKlasemen(state) {
	return klasemen(state).map((x, i) => `${i + 1}. ${x.nama}: ${x.poin} poin (${x.menang} menang, ${x.seri} seri)`).join("\n") || "(belum ada)";
}
