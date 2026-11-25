import { test } from "node:test";
import assert from "node:assert/strict";
import { hashTeks, urlEncode, urlDecode, validasiJson } from "../lib/devutils.js";

test("hashTeks", () => {
	assert.equal(hashTeks("sha256", "abc"), "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
	assert.equal(hashTeks("md5", "abc"), "900150983cd24fb0d6963f7d28e17f72");
	assert.equal(hashTeks("sha1", "abc"), "a9993e364706816aba3e25717850c26c9cd0d89d");
	assert.equal(hashTeks("sha512", "abc").length, 128);
	assert.equal(hashTeks("md4", "abc"), null);
	assert.equal(hashTeks("sha256", ""), "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
});

test("urlEncode / urlDecode", () => {
	assert.equal(urlEncode("a b&c=d"), "a%20b%26c%3Dd");
	assert.equal(urlDecode("a%20b%26c%3Dd"), "a b&c=d");
	assert.equal(urlDecode("%E0%A4%A"), null);
});

test("validasiJson", () => {
	assert.deepEqual(validasiJson('{"a":1}'), { ok: true, hasil: null, tipe: "object" });
	assert.deepEqual(validasiJson("[1,2]"), { ok: true, hasil: null, tipe: "array" });
	assert.equal(validasiJson('{"a":1}', { rapi: true }).hasil, '{\n  "a": 1\n}');
	assert.equal(validasiJson("{rusak").ok, false);
	assert.equal(validasiJson("x".repeat(10001)).ok, false);
});
