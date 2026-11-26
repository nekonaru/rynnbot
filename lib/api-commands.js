// Perintah yang benar-benar memerlukan NAZE_API_KEY.
// Perintah lokal seperti .rumus, .kalkulasi, dan .statistik tetap jalan tanpa key.

export const API_COMMANDS = new Set([
	"ai", "autoai", "bijak", "bingimg", "brat", "bratvideo", "bucin", "caklontong", "cekkhodam", "cekmati",
	"claude", "colorblind", "colorfull", "dadu", "dare", "deepseek", "emojimix", "fakechat", "family100",
	"fbvideo", "gemini", "get", "gimage", "glm", "google", "grok", "hd", "hitung", "igdl", "iqc", "archipelago",
	"lirik", "mf", "motivasi", "npmjs", "pint", "pixiv", "qr", "quotes", "r1", "renungan", "ringtone",
	"search", "shortlink", "spotifydl", "spotifysearch", "ssweb", "stikermeme", "style", "susunkata",
	"tebakbendera", "tebakgambar", "tebakkata", "tebakkimia", "tebaklirik", "tebaknegara", "tekateki",
	"tenor", "tiktokaudio", "tiktokvideo", "toblack", "tospech", "tr", "triggered", "truth", "wallpaper",
	"wasted", "weather", "cuaca", "youtubesearch", "ytplayaudio", "ytplayvideo", "ytsearch", "ytmp3", "ytmp4",
	"translate", "tts", "shorturl", "ssweb", "pinterest", "spotify",
]);
