// Pepatah dan peribahasa Indonesia untuk perintah .peribahasa.
// Semua item adalah pepatah yang umum dikenal dalam budaya Indonesia.

import { PERIBAHASA_BARU, dedupeArray } from "./data-tambahan.js";
import { PERIBAHASA_EKSPANSI } from "./data-ekspansi.js";
import { PERIBAHASA_FINAL } from "./data-final.js";

export const PERIBAHASA = [
	{ pepatah: "Bagai padi, kian berisi kian merunduk", makna: "Semakin banyak ilmu yang dimiliki, semakin rendah hati." },
	{ pepatah: "Air cucuran atap jatuh ke pelimbahan juga", makna: "Sifat atau tabiat anak biasanya mengikuti orang tuanya." },
	{ pepatah: "Tak ada gading yang tak retak", makna: "Tidak ada manusia yang sempurna." },
	{ pepatah: "Genggam bara biar sampai jadi api", makna: "Menjalankan suatu usaha dengan tekun sampai berhasil." },
	{ pepatah: "Berakit-rakit ke hulu, berenang-renang ke tepian", makna: "Bersusah-susah dulu, baru kemudian bersenang-senang." },
	{ pepatah: "Sambil menyelam minum air", makna: "Melakukan satu pekerjaan dan sekaligus mendapat pekerjaan lain." },
	{ pepatah: "Genggam bara sampai jadi api", makna: "Mengembangkan sesuatu yang kecil menjadi besar dengan usaha." },
	{ pepatah: "Ada udang di balik batu", makna: "Ada maksud atau niat tertentu di balik suatu tindakan." },
	{ pepatah: "Bersakit-sakit dahulu, bersenang-senang kemudian", makna: "Berusaha keras dulu sebelum menikmati hasilnya." },
	{ pepatah: "Air tenang menghanyutkan", makna: "Orang pendiam biasanya lebih dalam pemikirannya." },
	{ pepatah: "Duduk sama rendah, berdiri sama tinggi", makna: "Sama derajatnya, sederajat." },
	{ pepatah: "Besar pasak daripada tiang", makna: "Pengeluaran lebih besar daripada pendapatan." },
	{ pepatah: "Seperti katak dalam tempurung", makna: "Orang yang sempit wawasannya." },
	{ pepatah: "Bagaikan pinang dibelah dua", makna: "Sangat mirip." },
	{ pepatah: "Lain padang, lain belalang", makna: "Di setiap tempat ada kebiasaan yang berbeda." },
	{ pepatah: "Sedikit-sedikit lama-lama jadi bukit", makna: "Usaha kecil yang terus-menerus akhirnya menjadi besar." },
	{ pepatah: "Bagai air di daun talas", makna: "Orang yang mudah berubah pendapat." },
	{ pepatah: "Air dicincang tiada putus", makna: "Persaudaraan atau hubungan baik tidak bisa diputus." },
	{ pepatah: "Gajah di pelupuk mata tidak tampak, semut di seberang lautan tampak", makna: "Hal besar di sekitar tidak disadari, sedangkan hal kecil di kejauhan diperhatikan." },
	{ pepatah: "Seperti menarik rambut di dalam tepung", makna: "Melakukan sesuatu yang sangat sulit tanpa merusak." },
	{ pepatah: "Seperti meliuk di ujung jarum", makna: "Sesuatu yang tidak mungkin terjadi." },
	{ pepatah: "Seperti kodok di bawah tempurung", makna: "Orang yang sempit wawasannya." },
	{ pepatah: "Seperti buku terbuka", makna: "Sesuatu yang sudah jelas dan transparan." },
	{ pepatah: "Ada gula, ada semut", makna: "Di mana ada kebaikan, banyak orang berkumpul." },
	{ pepatah: "Bagai telur di ujung tanduk", makna: "Berada dalam keadaan bahaya atau genting." },
	{ pepatah: "Di mana bumi dipijak, di situ langit dijunjung", makna: "Hormatilah adat istiadat tempat kita berada." },
	{ pepatah: "Ada asap, ada api", makna: "Setiap kejadian pasti ada sebabnya." },
	{ pepatah: "Sekali mendayung, dua tiga pulau terlampaui", makna: "Melakukan satu pekerjaan sekaligus mendapat beberapa keuntungan." },
	{ pepatah: "Muka buruk, cermin ditepuk", makna: "Menyalahkan orang lain, padahal sumber masalahnya dari diri sendiri." },
	{ pepatah: "Seperti api makan sekam", makna: "Cinta atau perasaan yang dipendam rapat tanpa diungkapkan." },
	{ pepatah: "Bagaikan cendawan tumbuh sesudah hujan", makna: "Bermunculan dengan cepat dan banyak." },
	{ pepatah: "Tak kenal maka tak sayang", makna: "Seseorang baru bisa menyayangi setelah mengenalnya." },
	{ pepatah: "Karena nila setitik, rusak susu sebelanga", makna: "Satu kesalahan kecil dapat merusak semuanya." },
	{ pepatah: "Jauh panggang dari api", makna: "Jauh berbeda dari yang diharapkan." },
	{ pepatah: "Berdiri di atas kaki sendiri", makna: "Tidak bergantung pada pertolongan orang lain." },
	{ pepatah: "Tak lekang oleh panas, tak lapuk oleh hujan", makna: "Tetap kuat dan abadi, tidak mudah rusak oleh keadaan." },
	{ pepatah: "Air susu dibalas air tuba", makna: "Kebaikan dibalas dengan kejahatan." },
	{ pepatah: "Asam di gunung, garam di laut, bertemu di belanga", makna: "Jodoh atau urusan yang tampaknya berjauhan pada akhirnya bertemu." },
	{ pepatah: "Mengukur baju di atas badan sendiri", makna: "Menilai sesuatu hanya berdasarkan kemampuan atau keadaan dirinya sendiri." },
	{ pepatah: "Tong kosong, nyaring bunyinya", makna: "Orang yang tidak berilmu biasanya justru banyak bicara." },
	{ pepatah: "Seperti kacang lupa akan kulitnya", makna: "Orang yang melupakan asal-usul atau orang yang berjasa padanya." },
	{ pepatah: "Nasi sudah menjadi bubur", makna: "Sesuatu yang sudah terjadi tidak dapat diubah lagi." },
	{ pepatah: "Laksana bebek pulang petang", makna: "Berjalan dengan sangat lambat." },
	{ pepatah: "Bagai anjing menggonggong tulang", makna: "Orang serakah yang tidak pernah merasa puas." },
];

// Peribahasa baru v3.18.0 (duplikat pepatah dibuang otomatis).
PERIBAHASA.push(...PERIBAHASA_BARU, ...PERIBAHASA_EKSPANSI, ...PERIBAHASA_FINAL);
dedupeArray(PERIBAHASA, (p) => p.pepatah);
