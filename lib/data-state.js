// State dataset malas. Semua binding diekspor live, sehingga pemakai di handler.js
// membaca nilai terbaru setelah modul data dimuat pada pesan pertama.

export let FAKTA;
export let PUISI;
export let PANTUN;
export let SOAL;
export let PERIBAHASA;
export let NAMA_BAYI_COWO;
export let NAMA_BAYI_CEWE;
export let SUKU;
export let KULINER;
export let RESEP;
export let LAGU_DAERAH;
export let WISATA;
export let WAYANG;
export let PROVINSI;
export let NEGARA;
export let UNSUR;
export let PLANET;
export let HANGMAN_KATA;
export let MBTI_PERTANYAAN;
export let MBTI_TIPES;
export let hitungMBTI;
export let BAHASA;
export let cariBahasa;
export let DANAU;
export let GUNUNG;
export let PULAU;
export let SUNGAI;
export let HARI_BERSEJARAH;
export let cariHari;
export let hariHariIni;
export let KOTA_WAKTU;
export let cariKota;
export let waktuDi;
export let SURAT;
export let cariSurat;
export let FAUNA;
export let FLORA;
export let cariFauna;
export let cariFlora;
export let daftarKategori;
export let daftarSubkategori;
export let halamanRumus;
export let cariRumus;
export let rumusAcak;
export let rumusDetail;
export let statistikRumus;
export let formatRumus;
export let semuaRumus;
export let API_COMMANDS;
export let SEJARAH;
export let TOKOH;
export let OLAHRAGA;
export let SINGKATAN;
export let SINONIM;
export let ANTONIM;
export let MATAUANG;
export let NEGARA_TAMBAHAN;
export let SUKU_TAMBAHAN;
export let BAHASA_TAMBAHAN;
export let PLANET_TAMBAHAN;
export let DANAU_TAMBAHAN;
export let GUNUNG_TAMBAHAN;
export let PULAU_TAMBAHAN;
export let SUNGAI_TAMBAHAN;
export let BUDAYA;

let janjiData = null;

export function siapkanData() {
	if (!janjiData) janjiData = isiData();
	return janjiData;
}

async function isiData() {
	const modul = await Promise.all([
		import("./data-umum.js"),
		import("./soal.js"),
		import("./data-peribahasa.js"),
		import("./namabayi.js"),
		import("./data-indonesia.js"),
		import("./provinsi.js"),
		import("./data-dunia.js"),
		import("./data-game.js"),
		import("./mbti.js"),
		import("./data-bahasa-daerah.js"),
		import("./data-danau.js"),
		import("./data-gunung.js"),
		import("./data-pulau.js"),
		import("./data-sungai.js"),
		import("./data-hari-bersejarah.js"),
		import("./data-waktu.js"),
		import("./data-surat.js"),
		import("./data-fauna-flora.js"),
		import("./rumus/index.js"),
		import("./api-commands.js"),
		import("./data-v5.js"),
		import("./data-edukasi.js"),
	]);
	const [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21] = modul;	({ FAKTA, PUISI, PANTUN } = m0);
	({ SOAL } = m1);
	({ PERIBAHASA } = m2);
	({ NAMA_BAYI_COWO, NAMA_BAYI_CEWE } = m3);
	({ SUKU, KULINER, RESEP, LAGU_DAERAH, WISATA, WAYANG } = m4);
	({ PROVINSI } = m5);
	({ NEGARA, UNSUR, PLANET } = m6);
	({ HANGMAN_KATA } = m7);
	({ MBTI_PERTANYAAN, MBTI_TIPES, hitungMBTI } = m8);
	({ BAHASA, cariBahasa } = m9);
	({ DANAU } = m10);
	({ GUNUNG } = m11);
	({ PULAU } = m12);
	({ SUNGAI } = m13);
	({ HARI_BERSEJARAH, cariHari, hariHariIni } = m14);
	({ KOTA_WAKTU, cariKota, waktuDi } = m15);
	({ SURAT, cariSurat } = m16);
	({ FAUNA, FLORA, cariFauna, cariFlora } = m17);
	({ daftarKategori, daftarSubkategori, halamanRumus, cariRumus, rumusAcak, rumusDetail, statistikRumus, formatRumus, semuaRumus } = m18);
	({ API_COMMANDS } = m19);
	({ SEJARAH, TOKOH, OLAHRAGA, SINGKATAN, SINONIM, ANTONIM } = m20);
	({ MATAUANG, NEGARA_TAMBAHAN, SUKU_TAMBAHAN, BAHASA_TAMBAHAN, PLANET_TAMBAHAN, DANAU_TAMBAHAN, GUNUNG_TAMBAHAN, PULAU_TAMBAHAN, SUNGAI_TAMBAHAN, BUDAYA } = m21);
}

export const siap = () => janjiData !== null;
