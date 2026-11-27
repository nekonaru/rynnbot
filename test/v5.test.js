import { test } from "node:test";
import assert from "node:assert/strict";
import { bangunMenu, kategoriDariNama, ringkasanKategori } from "../lib/menu-builder.js";
import { SEJARAH, TOKOH, OLAHRAGA, SINGKATAN, SINONIM, ANTONIM } from "../lib/data-v5.js";

test("generator menu memakai registry", () => {
	const teks = bangunMenu("edukasi", "•", ".");
	assert.ok(teks && teks.includes(".rumus"));
	assert.match(teks, /「 \*EDUKASI\* 」/);
	assert.equal(kategoriDariNama("grup"), "GROUP");
	assert.equal(kategoriDariNama("tidak-ada"), null);
	assert.match(ringkasanKategori(), /EDUKASI/);
});

test("data v5 lengkap dan bersih", () => {
	assert.ok(SEJARAH.length >= 25);
	assert.ok(TOKOH.length >= 20);
	assert.ok(OLAHRAGA.length >= 40);
	assert.ok(SINGKATAN.length >= 90);
	assert.ok(SINONIM.length >= 50);
	assert.ok(ANTONIM.length >= 50);
	assert.ok(SINGKATAN.some(([s]) => s === "KTP"));
	assert.ok(SINONIM.every(([a, b]) => a !== b));
	assert.ok(ANTONIM.every(([a, b]) => a !== b));
});
