import { test } from "node:test";
import assert from "node:assert/strict";
import { slug } from "../lib/slug.js";

test("slug dasar", () => {
	assert.equal(slug("Halo Dunia 123"), "halo-dunia-123");
	assert.equal(slug("  Belajar   Rynn!  "), "belajar-rynn");
	assert.equal(slug("Aku & Kamu"), "aku-kamu");
});

test("slug aksen dan pemisah kustom", () => {
	assert.equal(slug("Café à São Paulo"), "cafe-a-sao-paulo");
	assert.equal(slug("Satu Dua Tiga", "_"), "satu_dua_tiga");
	assert.equal(slug("!!!"), "");
	assert.equal(slug(123), null);
});
