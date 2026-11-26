import { test } from "node:test";
import assert from "node:assert/strict";
import { formatUptime, statusApiKey, laporanDiagnosa } from "../lib/diagnosa.js";

test("formatUptime", () => {
	assert.equal(formatUptime(0), "0 detik");
	assert.equal(formatUptime(90061000), "1 hari 1 jam 1 menit 1 detik");
	assert.equal(formatUptime(-1), "-");
	assert.equal(formatUptime(NaN), "-");
});

test("statusApiKey tidak membocorkan nilai", () => {
	assert.equal(statusApiKey(true), "terisi");
	assert.equal(statusApiKey(false), "kosong (fitur berbasis API tidak aktif)");
});

test("laporanDiagnosa berisi ringkasan tanpa kunci", () => {
	const laporan = laporanDiagnosa({
		nodeVersion: "v24.16.0",
		platform: "win32",
		uptimeMs: 3600000,
		ffmpeg: false,
		naze: true,
		neosantara: false,
		dbTipe: "lokal",
		mode: "self",
		prefix: [".", "!"],
		zona: "Asia/Jakarta",
		totalData: 1629,
	});
	assert.equal(laporan.length, 11);
	assert.match(laporan.join("\n"), /Node\.js: v24\.16\.0/);
	assert.match(laporan.join("\n"), /1 jam 0 detik/);
	assert.match(laporan.join("\n"), /NAZE_API_KEY: terisi/);
	assert.ok(!laporan.join("\n").includes("nz-"));
});
