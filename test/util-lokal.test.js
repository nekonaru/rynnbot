import { test } from "node:test";
import assert from "node:assert/strict";
import { morseEncode, morseDecode, binaryEncode, binaryDecode, hexEncode, hexDecode, rot13, toRoman, fromRoman, zodiacFor } from "../lib/util-lokal.js";

test("morse roundtrip", () => {
	const kode = morseEncode("halo dunia");
	assert.equal(morseDecode(kode), "HALO DUNIA");
});

test("binary roundtrip", () => {
	const kode = binaryEncode("Halo 123");
	assert.equal(binaryDecode(kode), "Halo 123");
	assert.equal(binaryDecode("abc"), null);
});

test("hex roundtrip", () => {
	const kode = hexEncode("Halo 123");
	assert.equal(hexDecode(kode), "Halo 123");
	assert.equal(hexDecode("zz"), null);
});

test("rot13 berlaku dua kali", () => {
	assert.equal(rot13(rot13("Rynn Bot 123")), "Rynn Bot 123");
});

test("angka Romawi", () => {
	for (const n of [1, 4, 9, 40, 90, 400, 900, 1994, 2026, 3999]) {
		const r = toRoman(n);
		assert.equal(fromRoman(r), n, `${n} -> ${r}`);
	}
	assert.equal(toRoman(4000), null);
	assert.equal(fromRoman("MMMM"), null);
});

test("zodiacFor", () => {
	assert.match(zodiacFor(25, 12).nama, /Capricorn|Kaprikorn/);
	assert.match(zodiacFor(21, 3).nama, /Aries/);
});
