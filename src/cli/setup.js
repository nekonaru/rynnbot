import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { input, confirm } from "@inquirer/prompts";
import { parsePhoneNumber } from "awesome-phonenumber";

import { theme, showBanner, sectionHeader, logSuccess, logInfo, logWarning, separator } from "./helpers.js";
import { readSetting, writeSettings, isFirstRun as checkFirstRun } from "./settings-parser.js";

export { checkFirstRun as isFirstRun };

export async function runSetupWizard() {
	showBanner();
	sectionHeader("Setup Pertama");

	console.log(`  ${theme.dim("Selamat datang! Mari atur hal-hal pentingnya.")}\n` + `  ${theme.dim("Kamu bisa mengubahnya nanti dengan")} ${theme.accent("rynn settings")}\n`);

	separator();

	logInfo("Nomor telepon owner - dipakai untuk hak akses admin bot.");
	console.log(`  ${theme.dim("Format: kode negara + nomor, misalnya 628123456789")}`);
	console.log(`  ${theme.dim("Pisahkan beberapa nomor dengan koma.")}\n`);

	let currentOwner = readSetting("owner") || [];
	if (!Array.isArray(currentOwner)) currentOwner = [String(currentOwner)];
	const ownerRaw = await input({
		message: "Nomor owner:",
		default: currentOwner.join(", "),
		validate: (val) => {
			if (!val.trim()) return "Minimal satu nomor owner wajib diisi.";
			const nums = val.split(",").map((n) => n.trim());
			for (const n of nums) {
				const cleanNum = n.replace(/^\+/, "");
				if (!/^\d+$/.test(cleanNum)) return `Format tidak valid: "${n}". Gunakan angka saja.`;

				const pn = parsePhoneNumber("+" + cleanNum);
				if (!pn.valid) {
					return `Nomor tidak valid: "${n}". Masukkan nomor internasional yang valid dengan kode negara (misalnya 628...).`;
				}
			}
			return true;
		},
	});
	const ownerNumbers = ownerRaw.split(",").map((n) => n.trim());

	separator();

	logInfo("Nama author - ditampilkan di info bot dan stiker.");

	const authorName = await input({
		message: "Nama author:",
		default: readSetting("author") || "Nekonaruu",
	});

	separator();

	logInfo("Nama bot - nama tampilan bot kamu.");

	const botName = await input({
		message: "Nama bot:",
		default: readSetting("botname") || "Rynn",
	});

	separator();

	logInfo("Naze API Key - get yours at https://naze.dev");
	console.log(`  ${theme.dim("Tekan Enter untuk memakai key yang sekarang.")}\n`);

	const currentKey = readSetting("nazeApiKey");
	const apiKey = await input({
		message: "Naze API Key:",
		default: currentKey || "",
	});

	const finalApiKey = apiKey.trim();

	if (!finalApiKey) {
		logWarning("API Key belum diisi! Beberapa fitur bot akan error dan tidak bisa dipakai.");
	}

	separator();

	logInfo("Nomor WhatsApp Bot - dipakai untuk pairing code.");
	console.log(`  ${theme.dim("Format: 628123456789. Kosongkan untuk skip.")}\n`);

	const currentBotNumber = readSetting("number_bot") || "";
	const botNumberRaw = await input({
		message: "Nomor Bot:",
		default: currentBotNumber,
		validate: (val) => {
			if (!val.trim()) return true;
			const cleanNum = val.trim().replace(/^\+/, "");
			if (!/^\d+$/.test(cleanNum)) return "Format tidak valid. Gunakan angka saja.";
			const pn = parsePhoneNumber("+" + cleanNum);
			if (!pn.valid) return `Nomor telepon tidak valid.`;
			return true;
		},
	});

	const botNumber = botNumberRaw.trim().replace(/^\+/, "");

	separator();

	console.log("\n");
	sectionHeader("Periksa Konfigurasi");

	const display = [
		["Owner", ownerNumbers.join(", ")],
		["Author", authorName],
		["Bot Name", botName],
		["API Key", finalApiKey ? finalApiKey.slice(0, 6) + "*****" : theme.error("Belum diisi")],
		["Bot Number", botNumber || theme.muted("Belum diisi (akan ditanyakan saat start)")],
	];

	for (const [label, value] of display) {
		console.log(`  ${theme.primary("•")} ${theme.dim(label.padEnd(14))} ${theme.bold(value)}`);
	}
	console.log("");

	const confirmed = await confirm({
		message: "Simpan konfigurasi ini?",
		default: true,
	});

	if (!confirmed) {
		logWarning("Setup dibatalkan. Jalankan lagi dengan: rynn --setup");
		return false;
	}

	writeSettings({
		owner: ownerNumbers,
		author: authorName,
		botname: botName,
		...(finalApiKey ? { nazeApiKey: finalApiKey } : {}),
		number_bot: botNumber,
	});

	logSuccess("Konfigurasi tersimpan.");

	const markerPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..", ".rynn_setup_done");
	fs.writeFileSync(markerPath, "1", "utf-8");

	console.log(`  ${theme.dim("Tips: gunakan perintah")} ${theme.accent("'rynn start'")} ${theme.dim("kapan pun untuk menjalankan bot.")}\n`);

	return true;
}
