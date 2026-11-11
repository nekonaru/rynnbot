import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Wizard setup pertama (first pairing) ─────────────────────
export const FIRST_SETUP_MARKER = path.join(__dirname, "..", ".rynn_first_setup_done");
export const firstSetupStates = new Map(); // senderJid -> step

export function firstSetupStepText(step) {
	switch (step) {
		case "nama":
			return `*Langkah 1/6 — Nama kamu*\n\nNama author yang muncul di info bot.\nContoh: *Nekonaruu*\n\nBalas *skip* untuk pakai bawaan, atau *batal* untuk berhenti.`;
		case "botname":
			return `*Langkah 2/6 — Nama bot*\n\nNama bot yang muncul di info bot, menu, dan paket stiker.\nContoh: *Rynn*\n\nBalas *skip* untuk pakai bawaan, atau *batal* untuk berhenti.`;
		case "packname":
			return `*Langkah 3/6 — Nama paket stiker*\n\nNama pack stiker yang dibuat bot.\nContoh: *RynnBot*\n\nBalas *skip* untuk pakai bawaan, atau *batal* untuk berhenti.`;
		case "owner": {
			const current = global.owner?.length ? global.owner.join(", ") : "(belum ada)";
			return `*Langkah 4/6 — Nomor owner*\n\nOwner sekarang: *${current}*\n\nKirim daftar nomor owner (pisah koma), misalnya:\n*6282173282591, 628123456789*\n\nAtau balas *skip* untuk tetap memakai yang sekarang. Ketik *batal* untuk berhenti.`;
		}
		case "apikey":
			return `*Langkah 5/6 — Naze API key (WAJIB)*\n\nSemua fitur download dan AI membutuhkan key ini.\n\nCara mengambil:\n1. Buka *https://naze.dev*\n2. Daftar / login\n3. Buka menu *API Keys* (atau *Profile → API*)\n4. Salin key (diawali *nz-*)\n\nKirim key kamu sekarang. Ketik *batal* untuk berhenti.`;
		case "neosantara":
			return `*Langkah 6/6 — Neosantara AI (opsional)*\n\nUntuk model AI tambahan (claude, gemini, r1, glm).\n\nCara mengambil:\n1. Buka *https://app.neosantara.xyz*\n2. Login → buka menu *API Keys*\n3. Salin key (diawali *nsk_*)\n\nKirim key, atau balas *skip* kalau tidak dipakai. Ketik *batal* untuk berhenti.`;
		default:
			return "";
	}
}

export async function sendFirstSetupIntro(sock, jid) {
	const intro =
		`*╭── ✦ SETUP Rynn ✦ ──╮*\n\n` +
		`Bot baru terhubung ke WhatsApp kamu.\n` +
		`Sebelum dipakai, isi konfigurasi ini dulu, cuma ±1 menit.\n\n` +
		`Jawab satu per satu. Untuk memakai bawaan, balas *skip*.\n\n` +
		`*Aturan*\n` +
		`✦ Naze API key *WAJIB* diisi\n` +
		`✦ Jangan bagikan API key kamu ke siapa pun\n\n` +
		`*╰──── ✦ ✦ ✦ ────╯*\n\n` +
		firstSetupStepText("nama");

	await sock.sendMessage(jid, { text: intro });
}
