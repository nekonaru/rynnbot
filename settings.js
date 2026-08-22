import fs from "fs";
import chalk from "chalk";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

/*
 * Create By Nekonaruu
 * Follow https://github.com/nekonaru
 * Instagram : https://instagram.com/nekonaruu
 *
 * Upgraded with features ported from Hitori Bot (nazedev)
 */

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ["6282173282591"]; // ['628','628'] 2 owner atau lebih
global.author = "Nekonaruu";
global.botname = "Rynn";
global.packname = "Created By";
global.timezone = "Asia/Jakarta"; // Ganti pakai command .settimezone
global.locale = "en"; // Ganti pakai command .setlocale
global.listprefix = ["+", "!", "."];
global.defaultAdminKey = crypto.randomBytes(32).toString("hex");

global.pairing_code = true;
global.number_bot = "6285764173508"; // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.dns_use = "custom"; // custom / default

// ── Unified database config (baru) ──
// Mendukung MongoDB, MySQL, PostgreSQL, atau folder lokal.
// `path` bisa berupa connection string (mongodb://, mysql://, postgres://) atau nama folder lokal.
// `options.store` / `options.database` = true artinya ikut `path` di atas (satu koneksi untuk store & database, seperti setup lama).
global.database = {
	path: "mongodb+srv://bersiha03:nikolasdwidharma12@cluster0.iqesdvw.mongodb.net/rynn?appName=Cluster0",
	options: {
		store: true, // jika true ikut path di atas. jika false, otomatis local. jika { path: 'url_or_name.json' } menjadi terpisah
		database: true, // jika true ikut path di atas. jika false, otomatis local. jika { path: 'url_or_name.json' } menjadi terpisah
	},
};

global.listv = ["•", "●", "■", "✿", "▲", "➩", "➢", "➣", "➤", "✦", "✧", "△", "❀", "○", "□", "♤", "♡", "◇", "♧", "々", "〆"];

global.fake = {
	anonim: "https://telegra.ph/file/95670d63378f7f4210f03.png",
	thumbnailUrl: "https://ibb.co.com/x8K6QFKk",
	thumbnail: fs.readFileSync("./src/media/naze.png"),
	docs: fs.readFileSync("./src/media/fake.pdf"),
	listfakedocs: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"],
};

global.my = {
	yt: "https://youtube.com",
	gh: "https://github.com/nekonaru",
	gc: "https://web.whatsapp.com/",
	ch: "-",
};

global.limit = {
	free: 20,
	premium: 999,
	vip: 900,
};

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000,
};

global.mess = {
	key: "Apikey limit! Silahkan Upgrade",
	owner: "Khusus Owner!",
	admin: "Khusus Admin!",
	botAdmin: "Bot harus Admin!",
	onWa: "Nomor tersebut tidak terdaftar di WhatsApp!",
	group: "Khusus Grup!",
	private: "Khusus Private Chat!",
	quoted: "Reply pesannya!",
	limit: "Limit habis!",
	prem: "Khusus Premium!",
	text: "Masukkan teksnya!",
	media: "Kirim medianya!",
	wait: "Proses...",
	fail: "Gagal!",
	error: "Error!",
	done: "Selesai!",
};

global.APIs = {
	naze: "https://api.naze.biz.id",
	neosantara: "https://api.neosantara.xyz/v1",
};
global.APIKeys = {
	"https://api.naze.biz.id": "***REMOVED***",
	"https://api.neosantara.xyz/v1": "***REMOVED***",
};

// Lainnya
global.jadwalSholat = {
	Subuh: "04:30",
	Dzuhur: "12:06",
	Ashar: "15:21",
	Maghrib: "18:08",
	Isya: "19:00",
};

global.badWords = [
	// ===== MAKIAN UMUM =====
	"anjing", "anjir", "anjer", "anjg", "4njing", "4njir", "anj1ng", "anj!ng", "@njing", "@njir",
	"bangsat", "bngsat", "bgst", "b4ngsat", "bangs4t", "b@ngsat", "bngst",
	"babi", "b4bi", "bab1", "b@bi",
	"bajingan", "bajngn", "b4jingan", "bjngn",
	"brengsek", "brengsk", "br3ngsek", "br3ngs3k",
	"keparat", "kprt", "k3parat", "kpr4t",
	"sialan", "s1alan", "s14lan",
	"bedebah", "b3d3bah",
	"setan", "syetan", "s3tan", "sy3tan",
	"jahanam", "j4hanam",
	"laknat", "l4knat",
	"terkutuk", "t3rkutuk",
	"kurang ajar", "krg ajar",
	"ndasmu", "ndas", "nds",
	"jancok", "jancuk", "j4ncok", "j4ncuk", "cok", "cuk", "j@ncok", "j@ncuk", "jncok", "jncuk",
	"asu", "4su", "@su",
	"tengik", "t3ngik",
	"mati saja", "mati lo", "mati kau", "matilo", "matikau",
	"ga ada otak", "gak ada otak", "nggak ada otak",
	"otakmu mana",

	// ===== KATA KOTOR =====
	"kontol", "k0ntol", "kntl", "k0nt0l", "kont0l", "k*ntol", "k@ntol", "kont@l",
	"memek", "m3m3k", "mmk", "m3mek", "m@mek",
	"ngentot", "ng3ntot", "ngentt", "ngentod", "ng3ntod", "ng3ntot", "ngent0t",
	"entot", "3ntot", "ent0t", "3nt0t",
	"pepek", "p3p3k", "p3pek",
	"pantat", "pntt", "p4ntat", "p@ntat",
	"toket", "tokat", "t0ket", "t0k3t",
	"jembut", "j3mbut", "j3mbut",
	"pelacur", "plcr", "p3lacur", "p3l4cur",
	"lonte", "l0nte", "l0nt3", "l@nte",
	"jalang", "j4lang",
	"titit", "t1t1t", "tit1t",
	"colmek", "c0lmek", "c@lmek",
	"coli", "c0li", "c@li",
	"bokep", "b0k3p", "b@kep",
	"mesum", "m3sum", "m@sum",
	"cabul", "c4bul",
	"bugil", "bug1l",
	"telanjang", "t3lanjang",
	"sex", "s3x", "seks", "s3ks",
	"porn", "p0rn", "p@rn",
	"hentai", "h3ntai",
	"kimak", "k1mak", "k!mak",
	"pukimak", "puki", "puk1",
	"peler", "p3ler",
	"onani", "on4ni",
	"masturbasi",
	"oral",
	"ereksi",
	"orgasme",

	// ===== PENGHINAAN =====
	"goblok", "g0bl0k", "gbk", "g0blok", "g@blok",
	"tolol", "t0l0l", "tll", "t0lol",
	"idiot", "idi0t", "1diot", "1di0t",
	"dungu", "dng",
	"bego", "beg0", "b3go", "b3g0",
	"tai", "t4i", "t41", "t@i",
	"tahi", "t4hi", "t@hi",
	"loser", "l0ser",
	"stupid", "stup1d",
	"dumb", "dmb",
	"moron", "m0ron",
	"freak", "fr34k",

	// ===== ANCAMAN =====
	"bunuh", "bunuhin", "kubunuh", "maubunuh",
	"bacok", "b4cok", "b@cok",
	"tikam", "t1kam",
	"tampar", "t4mpar",
	"aniaya", "4niaya",
	"siksa", "s1ksa",
	"cincang", "c1ncang",
	"mutilasi",
	"penggal",

	// ===== UJARAN KEBENCIAN/SARA =====
	"kafir", "k4fir",
	"murtad", "murt4d",
	"negro", "nigga",
	"nigger", "n*gger", "nig",
	"racist", "rasis",

	// ===== BAHASA INGGRIS KASAR =====
	"fuck", "f*ck", "fck", "fuk", "f**k", "f@ck", "fvck", "fuuck",
	"shit", "sh*t", "sht", "sh1t", "sh!t", "sh@t",
	"bitch", "b*tch", "btch", "b1tch", "b!tch",
	"asshole", "a**hole", "assh0le", "@sshole",
	"bastard", "b4stard",
	"dick", "d*ck", "d1ck",
	"cock", "c*ck", "c0ck",
	"pussy", "p*ssy",
	"penis", "p3nis",
	"vagina", "v4gina",
	"motherfucker", "mf", "mofo",
	"son of a bitch", "sob",
	"go to hell",
	"go die",
]; // input kata-kata toxic yg lain.
global.chatLength = 1000;
global.GROQ_API_KEY = "***REMOVED***"; // ← paste API key Groq kamu di sini

fs.watchFile(__filename, async () => {
	fs.unwatchFile(__filename);
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`));
	await import(`${import.meta.url}?update=${Date.now()}`);
});
