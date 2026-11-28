// Log terstruktur v18. Nilai sensitif tidak pernah dicetak.

const REDAKSI = /(api[_-]?key|token|password|secret|authorization)/i;

export function redaksi(objek) {
	const hasil = { ...(objek || {}) };
	for (const kunci of Object.keys(hasil)) {
		if (REDAKSI.test(kunci)) hasil[kunci] = "[diredaksi]";
		else if (typeof hasil[kunci] === "string") {
			hasil[kunci] = hasil[kunci].replace(/(api[_-]?key|token|password|secret|authorization)\s*[=:]\s*\S+/gi, "$1=[diredaksi]");
		}
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
