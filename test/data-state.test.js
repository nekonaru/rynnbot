import { test } from "node:test";
import assert from "node:assert/strict";
import { siapkanData, siap } from "../lib/data-state.js";
import * as data from "../lib/data-state.js";

test("dataset tetap kosong sebelum siapkanData dipanggil", () => {
	assert.equal(siap(), false);
	assert.equal(data.FAKTA, undefined);
	assert.equal(data.statistikRumus, undefined);
});

test("siapkanData mengisi binding live sekali saja", async () => {
	const janji = siapkanData();
	assert.equal(siap(), true);
	assert.equal(siapkanData(), janji, "janji harus sama");
	await janji;
	assert.ok(Array.isArray(data.FAKTA) && data.FAKTA.length > 0);
	assert.equal(typeof data.statistikRumus, "function");
	assert.ok(data.statistikRumus().total > 10000);
	assert.ok(data.SOAL && Object.keys(data.SOAL).length > 0);
});
