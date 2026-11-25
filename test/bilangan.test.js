import { test } from "node:test";
import assert from "node:assert/strict";
import { kataBilangan, ucapanWaktu, hurufKe, angkaKeHuruf } from "../lib/bilangan.js";

test("kataBilangan bilangan kecil", () => {
	assert.equal(kataBilangan(0), "nol");
	assert.equal(kataBilangan(1), "satu");
	assert.equal(kataBilangan(11), "sebelas");
	assert.equal(kataBilangan(20), "dua puluh");
	assert.equal(kataBilangan(25), "dua puluh lima");
	assert.equal(kataBilangan(100), "seratus");
	assert.equal(kataBilangan(101), "seratus satu");
	assert.equal(kataBilangan(235), "dua ratus tiga puluh lima");
});

test("kataBilangan ribuan", () => {
	assert.equal(kataBilangan(1000), "seribu");
	assert.equal(kataBilangan(2000), "dua ribu");
	assert.equal(kataBilangan(1234), "seribu dua ratus tiga puluh empat");
	assert.equal(kataBilangan(1000000), "satu juta");
	assert.equal(kataBilangan(1234567), "satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh");
	assert.equal(kataBilangan(1e12), null);
});

test("ucapanWaktu", () => {
	assert.equal(ucapanWaktu(8), "Selamat pagi");
	assert.equal(ucapanWaktu(13), "Selamat siang");
	assert.equal(ucapanWaktu(16), "Selamat sore");
	assert.equal(ucapanWaktu(20), "Selamat malam");
	assert.equal(ucapanWaktu(24), null);
});

test("hurufKe dan angkaKeHuruf", () => {
	assert.equal(hurufKe(1), "A");
	assert.equal(hurufKe(26), "Z");
	assert.equal(hurufKe(27), null);
	assert.equal(angkaKeHuruf("a"), 1);
	assert.equal(angkaKeHuruf("z"), 26);
	assert.equal(angkaKeHuruf("ab"), null);
});
