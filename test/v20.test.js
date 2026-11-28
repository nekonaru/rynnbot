import { test } from "node:test";
import assert from "node:assert/strict";
import { buatKejuaraan, catatHasil } from "../lib/turnamen-mesin.js";
import {
	normJid,
	catatJuara,
	papanJuara,
	beriPoinJuara,
	klasemenLigaDariMesin,
	skorGameTerpadu,
	aktivitasTerpadu,
	formatJadwal,
	ringkasanJuara,
	klasemen,
} from "../lib/v20/integrasi.js";

test("juara tercatat dan menambah poin serta lencana", () => {
	const db = { users: { A: { poin: 5, badge: [] } } };
	const kejuaraan = buatKejuaraan({ nama: "Liga", mode: "single", peserta: ["A", "B"] });
	catatJuara(db, kejuaraan, "A");
	assert.equal(papanJuara(db)[0].juara, "A@s.whatsapp.net");
	assert.equal(beriPoinJuara(db, "A"), 15);
	assert.ok(db.users.A.badge.includes("juara"));
	assert.match(ringkasanJuara(papanJuara(db)), /A - Liga/);
});

test("juara dinormalisasi ke JID dan diberi poin", () => {
	const db = { users: { "628123@s.whatsapp.net": { poin: 1, badge: [] } } };
	const kejuaraan = { id: "ABC", nama: "Liga", mode: "single", peserta: ["628123"], juara: "628123" };
	const jid = normJid(kejuaraan.juara);
	assert.equal(jid, "628123@s.whatsapp.net");
	catatJuara(db, kejuaraan, jid, "g@g.us");
	assert.equal(papanJuara(db)[0].chat, "g@g.us");
	beriPoinJuara(db, jid);
	assert.equal(db.users[jid].poin, 11);
	assert.match(ringkasanJuara(papanJuara(db)), /@628123/);
});

test("klasemen liga memakai mesin", () => {
	const s = buatKejuaraan({ mode: "roundrobin", peserta: ["A", "B"] });
	catatHasil(s, { a: "A", b: "B", pemenang: "A" });
	assert.match(klasemenLigaDariMesin(s), /A: 3 poin/);
	assert.equal(klasemen(s)[0].nama, "A");
});

test("skor game terpadu diurutkan", () => {
	const hasil = skorGameTerpadu({ quiz: 2, wordle: 5, unknown: 99 });
	assert.equal(hasil[0].nama, "wordle");
	assert.equal(hasil.some((x) => x.nama === "unknown"), false);
});

test("aktivitas user terpadu", () => {
	const a = aktivitasTerpadu({ poin: 3, skorBelajar: 2, koleksi: ["x"], badge: ["y"], riwayat: ["z"] });
	assert.equal(a.poin, 3);
	assert.equal(a.koleksi, 1);
	assert.equal(a.badge, 1);
});

test("jadwal dan juara kosong", () => {
	assert.equal(formatJadwal({}), "(belum ada jadwal)");
	assert.equal(ringkasanJuara([]), "(belum ada juara)");
	const s = buatKejuaraan({ mode: "single", peserta: ["A", "B"] });
	s.jadwal.push({ a: "A", b: "B", waktu: "19:00" });
	assert.match(formatJadwal(s), /A vs B/);
});
