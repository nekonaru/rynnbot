// Peringatan hari bersejarah yang umum diperingati di Indonesia untuk .haribersejarah
// Tanggal peristiwa yang sudah mapan dan banyak didokumentasikan.

export const HARI_BERSEJARAH = [
	{ tanggal: "1 Januari", info: "Tahun Baru Masehi." },
	{ tanggal: "14 Februari", info: "Hari Valentine." },
	{ tanggal: "21 April", info: "Hari Kartini. RA Kartini lahir pada 21 April 1879 di Jepara." },
	{ tanggal: "22 April", info: "Hari Bumi Internasional." },
	{ tanggal: "1 Mei", info: "Hari Buruh Internasional." },
	{ tanggal: "2 Mei", info: "Hari Pendidikan Nasional, memperingati lahirnya Ki Hadjar Dewantara pada 2 Mei 1889." },
	{ tanggal: "20 Mei", info: "Hari Kebangkitan Nasional, memperingati berdirinya Budi Utomo pada 20 Mei 1908." },
	{ tanggal: "1 Juni", info: "Hari Lahir Pancasila. Soekarno menyampaikan dasar negara Pancasila dalam sidang BPUPKI pada 1 Juni 1945." },
	{ tanggal: "17 Agustus", info: "Proklamasi Kemerdekaan Republik Indonesia dibacakan pada 17 Agustus 1945." },
	{ tanggal: "28 Oktober", info: "Sumpah Pemuda diikrarkan pada 28 Oktober 1928." },
	{ tanggal: "10 November", info: "Hari Pahlawan, memperingati Pertempuran Surabaya yang pecah pada 10 November 1945." },
	{ tanggal: "22 Desember", info: "Hari Ibu, berasal dari Kongres Perempuan Indonesia pertama pada 22 Desember 1928." },
	{ tanggal: "25 Desember", info: "Hari Natal." },
];

const BULAN = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];

// Cari berdasarkan "21 april" atau "21-04". Kembalikan entri atau null.
export const cariHari = (query) => {
	const arg = String(query || "").trim().toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ");
	const mt = arg.match(/^(\d{1,2})\s+([a-z]+)$/);
	if (!mt) return null;
	const hari = Number(mt[1]);
	const bulan = BULAN.indexOf(mt[2]);
	if (hari < 1 || hari > 31 || bulan < 0) return null;
	const kunci = `${hari} ${BULAN[bulan]}`;
	return HARI_BERSEJARAH.find((h) => h.tanggal.toLowerCase() === kunci) || null;
};

export const hariHariIni = (date = new Date()) => {
	const kunci = `${date.getDate()} ${BULAN[date.getMonth()]}`;
	return HARI_BERSEJARAH.find((h) => h.tanggal.toLowerCase() === kunci) || null;
};
