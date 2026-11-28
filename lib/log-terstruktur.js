// Log terstruktur v18. Nilai sensitif tidak pernah dicetak.

const REDAKSI = /(api[_-]?key|token|password|secret|authorization|auth|pwd|pass|credential|cookie|kunci|sandi)/i;

function redaksiTeks(teks) {
	return String(teks || "")
		.replace(/\bBearer\s+\S+/gi, "Bearer [diredaksi]")
		.replace(new RegExp(`(${REDAKSI.source})["']?\\s*[=:]\\s*["']?[^\\s"',}]+`, "gi"), "$1=[diredaksi]");
}

export function redaksi(objek) {
	const hasil = { ...(objek || {}) };
	for (const kunci of Object.keys(hasil)) {
		if (REDAKSI.test(kunci)) hasil[kunci] = "[diredaksi]";
		else if (typeof hasil[kunci] === "string") hasil[kunci] = redaksiTeks(hasil[kunci]);
	}
	return hasil;
}

export function formatLog({ level = "info", perintah = "", pengirim = "", pesan = "", waktu = Date.now() } = {}) {
	const aman = redaksi({ level, perintah, pengirim, pesan });
	return JSON.stringify({ waktu: new Date(waktu).toISOString(), ...aman });
}

export function catatLog(db, entri) {
	if (!db.logTerstruktur) db.logTerstruktur = [];
	db.logTerstruktur.push(formatLog(entri));
	db.logTerstruktur = db.logTerstruktur.slice(-100);
	return db.logTerstruktur;
}

export function hapusLogPengirim(db, pengirim) {
	if (!db.logTerstruktur || !pengirim) return 0;
	const sebelum = db.logTerstruktur.length;
	db.logTerstruktur = db.logTerstruktur.filter((baris) => !baris.includes(`"pengirim":"${pengirim}"`));
	return sebelum - db.logTerstruktur.length;
}
