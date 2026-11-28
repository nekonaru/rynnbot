// Registi fitur v26. Menggabungkan modul pendalaman tanpa logika baru.

import * as ai from "./ai.js";
import * as laporan from "./laporan.js";
import * as pencarian from "./pencarian.js";
import * as game from "./game.js";
import * as moderasi from "./moderasi.js";
import * as media from "./media.js";
import * as profil from "./profil.js";
import * as bot from "./bot.js";

export { ai, laporan, pencarian, game, moderasi, media, profil, bot };

export const MODUL_V26 = ["ai", "laporan", "pencarian", "game", "moderasi", "media", "profil", "bot"];

export function ringkasV26(data) {
	if (data === null || data === undefined) return "";
	if (Array.isArray(data)) {
		return data.map((x, i) => {
			if (x && typeof x === "object") {
				return `${i + 1}. ${Object.entries(x).map(([k, v]) => `${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`).join(", ")}`;
			}
			return `${i + 1}. ${x}`;
		}).join("\n");
	}
	if (typeof data === "object") {
		return Object.entries(data).map(([k, v]) => `- ${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`).join("\n");
	}
	return String(data);
}

export function statusV26() {
	return MODUL_V26.map((nama) => ({ nama, tersedia: true }));
}
