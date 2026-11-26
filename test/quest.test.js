import { test } from "node:test";
import assert from "node:assert/strict";
import { tandaiQuest, lihatQuest, klaimQuest } from "../lib/quest.js";

test("quest harian menuntut tiga misi", () => {
	const db = { users: {} };
	const sender = "s@s.whatsapp.net";
	tandaiQuest(db, sender, "edukasi");
	assert.equal(klaimQuest(db, sender), false);
	tandaiQuest(db, sender, "game");
	tandaiQuest(db, sender, "harian");
	const q = lihatQuest(db, sender);
	assert.equal(q.siap, true);
	assert.equal(klaimQuest(db, sender), true);
	assert.equal(db.users[sender].money, 1000);
	assert.equal(db.users[sender].limit, 5);
	assert.equal(klaimQuest(db, sender), false);
});

test("jenis quest invalid ditolak", () => {
	const db = { users: {} };
	assert.equal(tandaiQuest(db, "s", "ngawur"), false);
});
