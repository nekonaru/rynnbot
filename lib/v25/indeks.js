// Registi fitur v25. Menggabungkan modul pendalaman tanpa logika baru.

import * as dompet from "./dompet.js";
import * as koperasi from "./koperasi.js";
import * as kompetisi from "./kompetisi.js";
import * as rantai from "./rantai.js";
import * as pembelajaran from "./pembelajaran.js";
import * as komunitas from "./komunitas.js";
import * as pengawasan from "./pengawasan.js";
import * as studio from "./studio.js";

export { dompet, koperasi, kompetisi, rantai, pembelajaran, komunitas, pengawasan, studio };

export const MODUL_V25 = ["dompet", "koperasi", "kompetisi", "rantai", "pembelajaran", "komunitas", "pengawasan", "studio"];

export function ringkasV25(data) {
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

export function statusV25() {
	return MODUL_V25.map((nama) => ({ nama, tersedia: true }));
}
