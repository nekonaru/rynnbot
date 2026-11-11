import { test } from "node:test";
import assert from "node:assert/strict";
import {
	getRandom,
	runtime,
	clockString,
	isUrl,
	extractUrl,
	pickRandom,
	similarity,
	levenshtein,
	antiSpam,
	compressMessage,
	decompressMessage,
} from "../lib/function.js";

test("getRandom returns a string ending with the extension", () => {
	const r = getRandom(".jpg");
	assert.equal(typeof r, "string");
	assert.ok(r.endsWith(".jpg"));
});

test("runtime formats durations", () => {
	assert.equal(runtime(3661), "1 hour, 1 minute, 1 second");
	assert.equal(runtime(86400), "1 day, ");
});

test("clockString zero-pads", () => {
	assert.equal(clockString(3661000), "01:01:01");
});

test("extractUrl finds and prefers priority domain", () => {
	assert.equal(extractUrl("download ini https://youtu.be/abc123", "youtu"), "https://youtu.be/abc123");
	assert.equal(extractUrl("gunakan https://www.tiktok.com/@a/video/123 sekarang", "tiktok"), "https://www.tiktok.com/@a/video/123");
	assert.equal(extractUrl("tidak ada link sama sekali"), null);
});

test("extractUrl strips trailing punctuation", () => {
	assert.equal(extractUrl("https://www.example.com/a."), "https://www.example.com/a");
});

test("isUrl returns matching urls", () => {
	assert.deepEqual(isUrl("https://a.com https://b.com"), ["https://a.com", "https://b.com"]);
	assert.equal(isUrl("no urls here"), null);
});

test("similarity is 1 for identical strings and low for unrelated", () => {
	assert.equal(similarity("kucing", "kucing"), 1);
	assert.ok(similarity("kucing", "xyzzy") < 0.5);
});

test("levenshtein distance", () => {
	assert.equal(levenshtein("kitten", "sitting"), 3);
	assert.equal(levenshtein("same", "same"), 0);
});

test("pickRandom returns a member of the list", () => {
	const list = ["a", "b", "c"];
	assert.ok(list.includes(pickRandom(list)));
});

test("antiSpam flags a sender after addFilter", () => {
	antiSpam.addFilter("tester@s.whatsapp.net");
	assert.equal(antiSpam.isFiltered("tester@s.whatsapp.net"), true);
	assert.equal(antiSpam.isFiltered("other@s.whatsapp.net"), false);
});

test("compressMessage and decompressMessage round-trip preserves the key id", () => {
	const msg = {
		key: { remoteJid: "628111111111@s.whatsapp.net", fromMe: false, id: "TESTID123" },
		message: { conversation: "halo" },
	};
	const compressed = compressMessage(msg);
	const decompressed = decompressMessage(compressed);
	assert.equal(decompressed.key.id, "TESTID123");
});
