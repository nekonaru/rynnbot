import fs from "fs";
import path from "path";
import chalk from "chalk";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
 * Rynn - bot WhatsApp self-hosted
 * Awalnya berbasis Hitori Bot karya Nazedev (https://github.com/nazedev/hitori),
 * dirombak total untuk proyek Rynn.
 * Maintainer: https://github.com/nekonaru
 */

// Loader .env tanpa dependency. Secret (API key, URL database) hanya hidup di
// .env, yang di-gitignore. Jangan pernah hardcode key di file ini.
(() => {
	try {
		const envPath = path.join(__dirname, ".env");
		if (!fs.existsSync(envPath)) return;
		for (const rawLine of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
			const line = rawLine.trim();
			if (!line || line.startsWith("#")) continue;
			const eq = line.indexOf("=");
			if (eq === -1) continue;
			const key = line.slice(0, eq).trim();
			if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) continue;
			let value = line.slice(eq + 1).trim();
			if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
				value = value.slice(1, -1);
			}
			if (!(key in process.env)) process.env[key] = value;
		}
	} catch {}
})();

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = (process.env.OWNER_NUMBER || "6282173282591").split(",").map((v) => v.trim()).filter(Boolean); // ['628','628'] 2 owners or more
global.author = "Nekonaruu";
global.botname = "Rynn";
global.packname = "Created By";
global.timezone = "Asia/Jakarta"; // Change with the .settimezone command
global.locale = "en"; // Change with the .setlocale command
global.listprefix = ["+", "!", "."];
global.defaultAdminKey = crypto.randomBytes(32).toString("hex");

global.pairing_code = true;
global.number_bot = process.env.NUMBER_BOT || "6285764173508"; // Bot WhatsApp number, format '628xx'

global.dns_use = "custom"; // custom / default

// Konfigurasi database terpadu. Mendukung MongoDB, MySQL, PostgreSQL, atau folder lokal.
// `path` bisa berupa connection string (mongodb://, mysql://, postgres://) atau nama folder lokal.
// `options.store` / `options.database` bernilai true berarti "pakai koneksi dari `path`".
// KEAMANAN: jangan pernah hardcode kredensial. Taruh di .env (lihat .env.example).
global.database = {
	path: process.env.MONGODB_URL || "rynn-session", // fallback to local folder if env is not set
	options: {
		store: true, // true: use `path`. false: local files. { path: 'url_or_name.json' }: separate config
		database: true, // true: use `path`. false: local files. { path: 'url_or_name.json' }: separate config
	},
};

global.listv = ["•", "◦", "▸", "◆", "✦", "»", "›", "·", "+", "=", "*", "°", "○", "●", "◉", "◈", "▪", "➤", "❖", "∙"];

// Thumbnail bersifat opsional: kalau src/media/rynn.png tidak ada, bot tetap jalan.
let thumbnail = null;
try {
	thumbnail = fs.readFileSync("./src/media/rynn.png");
} catch {
	console.warn("[WARNING] src/media/rynn.png not found. Quoted messages will be sent without a thumbnail image.");
}

global.fake = {
	anonim: "https://telegra.ph/file/95670d63378f7f4210f03.png",
	thumbnailUrl: "https://raw.githubusercontent.com/nekonaru/rynnbot/main/src/media/rynn.png",
	thumbnail,
	docs: fs.readFileSync("./src/media/fake.pdf"),
	listfakedocs: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"],
};

global.my = {
	yt: "https://youtube.com",
	gh: "https://github.com/nekonaru",
	gc: "https://web.whatsapp.com/",
	ch: "https://whatsapp.com/channel/0029VbD5pRH8qIzlIWSMQf0j",
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
	key: "Apikey limit! Silahkan upgrade: https://naze.dev",
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
	error: "Kesalahan!",
	done: "Selesai!",
};

// Naze API (https://naze.dev/api/v1) provider bawaan. Key hanya dari .env.
global.APIs = {
	naze: "https://naze.dev/api/v1",
	neosantara: "https://api.neosantara.xyz/v1",
};
global.APIKeys = {
	"https://naze.dev/api/v1": process.env.NAZE_API_KEY || "",
	"https://api.neosantara.xyz/v1": process.env.NEOSANTARA_API_KEY || "",
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
	"jembut", "j3mbut",
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
]; // Add more toxic words here.
global.chatLength = 1000;

// Peringatan saat startup kalau API key wajib belum diisi (sebelum command gagal saat runtime).
{
	const missingKeys = [];
	if (!global.APIKeys["https://naze.dev/api/v1"]) missingKeys.push("NAZE_API_KEY");
	if (!global.APIKeys["https://api.neosantara.xyz/v1"]) missingKeys.push("NEOSANTARA_API_KEY");
	if (missingKeys.length > 0) {
		console.log(chalk.yellowBright(`[WARNING] The following env vars are not set: ${missingKeys.join(", ")}. Features that depend on them (AI chat, tools, and so on) will fail until you fill them in .env.`));
	}
}

fs.watchFile(__filename, async () => {
	fs.unwatchFile(__filename);
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`));
	await import(`${import.meta.url}?update=${Date.now()}`);
});
