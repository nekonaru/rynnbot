import { test } from "node:test";
import assert from "node:assert/strict";
import { parseEnv, serializeEnvLine } from "../src/env.js";

test("parseEnv membaca pasangan kunci nilai", () => {
	const hasil = parseEnv("# komentar\nNAZE_API_KEY=nz-contoh\n\nNEOSANTARA_API_KEY='nsk-contoh'\nOWNER_NUMBER=6281\nbaris rusak\n");
	assert.equal(hasil.get("NAZE_API_KEY"), "nz-contoh");
	assert.equal(hasil.get("NEOSANTARA_API_KEY"), "nsk-contoh");
	assert.equal(hasil.get("OWNER_NUMBER"), "6281");
	assert.equal(hasil.get("baris rusak"), undefined);
});

test("serializeEnvLine menolak nama dan nilai berbahaya", () => {
	assert.equal(serializeEnvLine("NAZE_API_KEY", "abc"), "NAZE_API_KEY=abc");
	assert.throws(() => serializeEnvLine("NAZE API", "abc"), /nama/i);
	assert.throws(() => serializeEnvLine("KEY", "a\nb"), /baris baru/i);
});
