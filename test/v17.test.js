import { test } from "node:test";
import assert from "node:assert/strict";
import { ubahSaldo, pindahSaldo, riwayatTransaksi, rekonsiliasi } from "../lib/transaksi.js";
import { bersihkanJawaban, cocokJawaban, hurufJawaban } from "../lib/game-jawaban.js";
import { buatBracketDouble, formatBracketDouble } from "../lib/turnamen.js";
import { bangunRespons } from "../lib/respons.js";
import { getBuffer, fetchJson } from "../lib/function.js";
import { pasangSweeperState } from "../lib/handler/state-sweeper.js";

test("transaksi menolak nominal invalid", () => {
	const db = { users: {} };
	assert.equal(ubahSaldo(db, "a", "money", NaN), null);
	assert.equal(ubahSaldo(db, "a", "money", 1.5), null);
	assert.equal(ubahSaldo(db, "a", "money", 0), null);
	assert.equal(ubahSaldo(db, "a", "unknown", 5), null);
	assert.equal(ubahSaldo(db, "a", "money", 100).akhir, 100);
	assert.equal(ubahSaldo(db, "a", "money", -200), null);
	assert.equal(db.users.a.money, 100);
});

test("pindah saldo mencatat dan bisa rollback", () => {
	const db = { users: { a: { money: 100 }, b: { money: 0 } } };
	assert.ok(pindahSaldo(db, "a", "b", "money", 40));
	assert.equal(db.users.a.money, 60);
	assert.equal(db.users.b.money, 40);
	assert.equal(pindahSaldo(db, "a", "b", "money", 999), null);
	assert.equal(riwayatTransaksi(db, "money", 5).length, 2);
	assert.equal(rekonsiliasi(db).find((x) => x.field === "money").field, "money");
});

test("jawaban game dibersihkan dan dicocokkan", () => {
	assert.equal(bersihkanJawaban("  Soekarno! "), "soekarno");
	assert.equal(cocokJawaban("Bung Karno", "Soekarno"), false);
	assert.equal(cocokJawaban("air.", "Air"), true);
	assert.equal(cocokJawaban("a", "a"), true);
	assert.equal(hurufJawaban("B. dunia"), 1);
});

test("double elimination menghasilkan upper dan lower", () => {
	const b = buatBracketDouble(["A", "B", "C", "D"]);
	assert.equal(b.mode, "double");
	assert.ok(b.upper.babak.length >= 2);
	assert.ok(b.lower.babak.length >= 1);
	assert.match(formatBracketDouble(b), /Double Elimination/);
	assert.equal(buatBracketDouble(["A"]), null);
});

test("mode ringkas memendekkan balasan", () => {
	global.modeBotAktif = "ringkas";
	const teks = bangunRespons({ judul: "Judul", isi: "Isi", catatan: "Catatan", footer: "Footer" });
	global.modeBotAktif = "normal";
	assert.match(teks, /Judul/);
	assert.match(teks, /Catatan/);
	assert.match(teks, /Footer/);
});

test("domain blokir ditolak pada helper jaringan", async () => {
	global.domainBlokir = ["contoh.test"];
	const hasil = await getBuffer("https://contoh.test/file").catch((e) => e);
	assert.ok(hasil instanceof Error || hasil?.message);
	const json = await fetchJson("https://contoh.test/api");
	assert.ok(json instanceof Error && /diblokir/.test(json.message));
	global.domainBlokir = [];
});

test("sweeper membersihkan state tebak urutan", () => {
	const g = { tebakUrutanState: { lama: { at: Date.now() - 3600000 }, baru: { at: Date.now() } } };
	pasangSweeperState({ globalObj: g, batasMenit: 15, intervalMenit: 600 });
	assert.equal("lama" in g.tebakUrutanState, false);
	assert.equal("baru" in g.tebakUrutanState, true);
	clearInterval(g._stateSweeper);
});
