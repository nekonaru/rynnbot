// Pembersih state game dan tes yang ditinggalkan user. Dipindah dari handler.js
// agar router tetap tipis dan perilaku ini bisa diuji terpisah.

const NAMA_STATE = ["quizState", "quizBeruntunState", "mbtiState", "hangmanState", "soalState", "tebakState", "wordleState", "sudokuState", "game2048State", "tebakTokohState", "tebakLaguState", "riddleState", "tebakUrutanState"];

export function pasangSweeperState({ globalObj = global, batasMenit = 15, intervalMenit = 5 } = {}) {
	if (globalObj._stateSweeper) return globalObj._stateSweeper;
	const bersihkan = () => {
		const batas = Date.now() - batasMenit * 60 * 1000;
		for (const nama of NAMA_STATE) {
			const peta = globalObj[nama];
			if (!peta || typeof peta !== "object") continue;
			if (peta instanceof Map) {
				for (const [kunci, nilai] of peta) {
					if (!nilai || typeof nilai.at !== "number" || nilai.at < batas) peta.delete(kunci);
				}
			} else {
				for (const [kunci, nilai] of Object.entries(peta)) {
					if (!nilai || typeof nilai.at !== "number" || nilai.at < batas) delete peta[kunci];
				}
			}
		}
	};
	bersihkan();
	globalObj._stateSweeper = setInterval(bersihkan, intervalMenit * 60 * 1000);
	globalObj._stateSweeper.unref?.();
	return globalObj._stateSweeper;
}
