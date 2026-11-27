// Benchmark startup: membandingkan muat data eager dan malas.
// Tiap pengukuran dijalankan di proses terpisah agar cache modul tidak saling memengaruhi.

import { spawnSync } from "node:child_process";

const ukur = (kode) => {
	const hasil = spawnSync(process.execPath, ["--input-type=module", "-e", kode], {
		encoding: "utf8",
		cwd: process.cwd(),
	});
	if (hasil.status !== 0) throw new Error(hasil.stderr || "gagal mengukur benchmark");
	return Number(hasil.stdout.trim().split("\n").pop());
};

const eager = ukur(`
import { performance } from "node:perf_hooks";
const mulai = performance.now();
await import("./lib/rumus/index.js");
await import("./lib/data-umum.js");
await import("./lib/data-game.js");
await import("./lib/soal.js");
console.log((performance.now() - mulai).toFixed(1));
`);

const lazy = ukur(`
import { performance } from "node:perf_hooks";
const mulai = performance.now();
await import("./lib/data-state.js");
console.log((performance.now() - mulai).toFixed(1));
`);

const data = await import("../lib/data-state.js");
const tMulai = performance.now();
await data.siapkanData();
const durasiData = performance.now() - tMulai;

console.log("Muat eager :", eager.toFixed(1), "ms");
console.log("Muat malas :", lazy.toFixed(1), "ms");
console.log("Dihemat saat startup:", (eager - lazy).toFixed(1), "ms");
console.log("Biaya data saat pesan pertama:", durasiData.toFixed(1), "ms");
console.log("Fakta:", data.FAKTA.length, "Pantun:", data.PANTUN.length, "Puisi:", data.PUISI.length);
console.log("Hangman:", data.HANGMAN_KATA.length, "Soal:", Object.values(data.SOAL).reduce((n, a) => n + a.length, 0));
console.log("Rumus:", data.statistikRumus().total);
