import { select, input } from "@inquirer/prompts";
import { parsePhoneNumber } from "awesome-phonenumber";

import { theme, showBanner, sectionHeader, logSuccess, logWarning, separator, BACK_VALUE, backChoice } from "./helpers.js";
import { readAllSettings, readSetting, writeSetting, readDatabaseConfig, writeDatabaseConfig } from "./settings-parser.js";

export async function settingsMenu() {
	let running = true;

	while (running) {
		showBanner();
		sectionHeader("Pengaturan");

		const choice = await select({
			message: "Pilih kategori:",
			choices: [
				{
					name: `${theme.primary("⚙")}  Umum              ${theme.dim("- Nama, timezone, locale, prefix")}`,
					value: "general",
				},
				{
					name: `${theme.primary("👤")} Owner             ${theme.dim("- Kelola nomor telepon owner")}`,
					value: "owner",
				},
				{
					name: `${theme.primary("🔑")} API Keys          ${theme.dim("- Lihat dan ubah API key")}`,
					value: "apikeys",
				},
				{
					name: `${theme.primary("🗄️")} Database          ${theme.dim("- Koneksi database (Lokal/Mongo/MySQL)")}`,
					value: "database",
				},
				{
					name: `${theme.primary("📊")} Limit             ${theme.dim("- Limit free, premium, dan VIP")}`,
					value: "limits",
				},
				backChoice("Kembali ke Menu Utama"),
			],
		});

		switch (choice) {
			case "general":
				await generalSettings();
				break;
			case "owner":
				await ownerSettings();
				break;
			case "apikeys":
				await apiKeySettings();
				break;
			case "database":
				await databaseSettings();
				break;
			case "limits":
				await limitSettings();
				break;
			case BACK_VALUE:
				running = false;
				break;
		}
	}
}

async function generalSettings() {
	let running = true;

	while (running) {
		showBanner();
		sectionHeader("Pengaturan Umum");

		const fields = [
			["Nama Bot", readSetting("botname") || "Rynn"],
			["Nomor Bot", readSetting("number_bot") || theme.muted("Belum diisi (ditanya saat start)")],
			["Author", readSetting("author") || "Nekonaruu"],
			["Nama Pack", readSetting("packname") || "Bot WhatsApp"],
			["Timezone", readSetting("timezone") || "Asia/Jakarta"],
			["Locale", readSetting("locale") || "en"],
			["Prefix", (Array.isArray(readSetting("listprefix")) ? readSetting("listprefix") : ["+", "!", "."]).join("  ")],
		];

		for (const [label, value] of fields) {
			console.log(`  ${theme.primary("•")} ${theme.dim(label.padEnd(14))} ${theme.bold(value)}`);
		}
		console.log("");

		const choice = await select({
			message: "Apa yang ingin kamu ubah?",
			choices: [
				{ name: "Nama Bot", value: "botname" },
				{ name: "Nomor Bot", value: "number_bot" },
				{ name: "Author", value: "author" },
				{ name: "Nama Pack", value: "packname" },
				{ name: "Timezone", value: "timezone" },
				{ name: "Locale", value: "locale" },
				{ name: "Prefix", value: "listprefix" },
				backChoice("Kembali"),
			],
		});

		if (choice === BACK_VALUE) {
			running = false;
			continue;
		}

		if (choice === "listprefix") {
			let current = readSetting("listprefix") || ["+", "!", "."];
			if (!Array.isArray(current)) current = [String(current)];
			const val = await input({
				message: "Masukkan prefix pisah spasi (misalnya: + ! .):",
				default: current.join(" "),
			});
			writeSetting("listprefix", val.split(/\s+/).filter(Boolean));
		} else {
			const labels = {
				botname: "Nama Bot",
				number_bot: "Nomor Bot",
				author: "Author",
				packname: "Nama Pack",
				timezone: "Zona Waktu",
				locale: "Bahasa",
			};
			const val = await input({
				message: `${labels[choice]}:`,
				default: readSetting(choice) || "",
				validate: (inputVal) => {
					if (choice === "number_bot" && inputVal.trim() !== "") {
						const cleanNum = inputVal.trim().replace(/^\+/, "");
						if (!/^\d+$/.test(cleanNum)) return "Format tidak valid. Gunakan angka saja.";
						const pn = parsePhoneNumber("+" + cleanNum);
						if (!pn.valid) return `Nomor telepon tidak valid.`;
					}
					return true;
				},
			});

			const finalVal = choice === "number_bot" ? val.trim().replace(/^\+/, "") : val;
			writeSetting(choice, finalVal);
		}

		logSuccess("Pengaturan tersimpan ke settings.js");
	}
}

async function ownerSettings() {
	let running = true;

	while (running) {
		showBanner();
		sectionHeader("Nomor Owner");

		let owners = readSetting("owner") || [];
		if (!Array.isArray(owners)) owners = [String(owners)];
		if (owners.length === 0) {
			logWarning("Belum ada nomor owner.");
		} else {
			owners.forEach((num, i) => {
				console.log(`  ${theme.accent(`${i + 1}.`)} ${theme.bold(num)}`);
			});
		}
		console.log("");

		const choice = await select({
			message: "Pilih aksi:",
			choices: [
				{ name: `${theme.accent("+")} Tambah nomor owner`, value: "add" },
				...(owners.length > 0
					? [
							{
								name: `${theme.error("−")} Remove owner number`,
								value: "remove",
							},
						]
					: []),
				backChoice("Kembali"),
			],
		});

		if (choice === BACK_VALUE) {
			running = false;
			continue;
		}

		if (choice === "add") {
			const num = await input({
				message: "Masukkan nomor telepon (misalnya 628123456789):",
				validate: (val) => {
					const cleanNum = val.trim().replace(/^\+/, "");
					if (!/^\d+$/.test(cleanNum)) return "Format tidak valid. Gunakan angka saja.";
					const pn = parsePhoneNumber("+" + cleanNum);
					if (!pn.valid) return `Nomor tidak valid. Masukkan nomor internasional yang valid dengan kode negara.`;
					return true;
				},
			});
			const cleanNum = num.trim().replace(/^\+/, "");
			writeSetting("owner", [...owners, cleanNum]);
			logSuccess(`Owner ditambahkan: ${cleanNum}`);
		}

		if (choice === "remove") {
			const toRemove = await select({
				message: "Pilih nomor yang dihapus:",
				choices: [...owners.map((num) => ({ name: num, value: num })), backChoice("Batal")],
			});

			if (toRemove !== BACK_VALUE) {
				writeSetting(
					"owner",
					owners.filter((n) => n !== toRemove),
				);
				logSuccess(`Owner dihapus: ${toRemove}`);
			}
		}
	}
}

async function apiKeySettings() {
	let running = true;

	while (running) {
		showBanner();
		sectionHeader("API Keys");

		const apiKey = readSetting("nazeApiKey");
		const masked = (key) => (key ? key.slice(0, 6) + "••••••" : theme.muted("(belum diisi)"));

		console.log(`  ${theme.primary("•")} ${theme.dim("Naze API".padEnd(20))} ${theme.bold(masked(apiKey))}`);
		console.log("");

		const choice = await select({
			message: "Pilih aksi:",
			choices: [{ name: "Ubah Naze API Key", value: "naze" }, backChoice("Kembali")],
		});

		if (choice === BACK_VALUE) {
			running = false;
			continue;
		}

		if (choice === "naze") {
			const val = await input({
				message: "Naze API Key:",
				default: apiKey || "",
			});
			const finalVal = val.trim();
			if (!finalVal) {
				logWarning("API Key kosong. Key yang lama dibiarkan.");
				continue;
			}
			writeSetting("nazeApiKey", finalVal);
			logSuccess("API key tersimpan ke .env");
		}
	}
}

async function limitSettings() {
	let running = true;

	while (running) {
		showBanner();
		sectionHeader("Limit & Ekonomi");

		const fields = [
			["Free Limit", readSetting("limitFree") ?? 20],
			["Premium Limit", readSetting("limitPremium") ?? 999],
			["VIP Limit", readSetting("limitVip") ?? 900],
		];

		for (const [label, value] of fields) {
			console.log(`  ${theme.primary("•")} ${theme.dim(label.padEnd(20))} ${theme.bold(String(value))}`);
		}
		console.log("");

		const choice = await select({
			message: "Apa yang ingin kamu ubah?",
			choices: [{ name: "Free Limit", value: "limitFree" }, { name: "Premium Limit", value: "limitPremium" }, { name: "VIP Limit", value: "limitVip" }, backChoice("Kembali")],
		});

		if (choice === BACK_VALUE) {
			running = false;
			continue;
		}

		if (choice === BACK_VALUE) {
			running = false;
			continue;
		}

		const labels = {
			limitFree: "Free Limit",
			limitPremium: "Premium Limit",
			limitVip: "VIP Limit",
		};
		const val = await input({
			message: `${labels[choice]}:`,
			default: String(readSetting(choice) ?? ""),
			validate: (v) => /^\d+$/.test(v.trim()) || "Masukkan angka yang valid.",
		});
		writeSetting(choice, parseInt(val.trim(), 10));
		logSuccess("Limit tersimpan ke settings.js");
	}
}

async function databaseSettings() {
	let running = true;

	while (running) {
		showBanner();
		sectionHeader("Pengaturan Database");

		const dbConfig = readDatabaseConfig();
		const currentPath = dbConfig.path || "database.json";

		let storeVal = "true";
		let dbVal = "true";

		if (dbConfig.options) {
			if (dbConfig.options.store === false) storeVal = "false";
			else if (typeof dbConfig.options.store === "object") storeVal = dbConfig.options.store.path;

			if (dbConfig.options.database === false) dbVal = "false";
			else if (typeof dbConfig.options.database === "object") dbVal = dbConfig.options.database.path;
		}

		console.log(`  ${theme.primary("•")} ${theme.dim("Main Path".padEnd(14))} ${theme.bold(currentPath)}`);
		console.log(`  ${theme.primary("•")} ${theme.dim("Store Path".padEnd(14))} ${theme.bold(storeVal === "true" ? "Ikut Path Utama" : storeVal === "false" ? "Lokal (baileys_store.json)" : storeVal)}`);
		console.log(`  ${theme.primary("•")} ${theme.dim("Bot DB Path".padEnd(14))} ${theme.bold(dbVal === "true" ? "Ikut Path Utama" : dbVal === "false" ? "Lokal (database.json)" : dbVal)}`);
		console.log("");

		const choice = await select({
			message: "Apa yang ingin kamu ubah?",
			choices: [
				{
					name: `${theme.primary("\u{1F517}")} Path Utama      ${theme.dim("- Session Folder / MongoDB / MySQL URL")}`,
					value: "path",
				},
				{
					name: `${theme.primary("\u{1F4E6}")} Path Store      ${theme.dim("- Tempat menyimpan chat history")}`,
					value: "store",
				},
				{
					name: `${theme.primary("\u{1F5C3}\u{FE0F}")} Path DB Bot     ${theme.dim("- Tempat menyimpan user, limit, grup")}`,
					value: "database",
				},
				backChoice("Kembali"),
			],
		});

		if (choice === BACK_VALUE) {
			running = false;
			continue;
		}

		if (choice === "path") {
			const val = await input({
				message: `Masukkan Path Utama:\n  ${theme.dim("(pakai 'rynn-session' untuk folder lokal, atau 'mongodb://...' untuk URL cloud)")}`,
				default: currentPath,
			});
			dbConfig.path = val;
		} else {
			const isStore = choice === "store";
			const typeChoice = await select({
				message: `Pilih mode untuk ${isStore ? "STORE (Chat History)" : "DATABASE (User & Limit)"}:`,
				choices: [
					{ name: `${theme.primary("\u{1F504}")} Ikut Path Utama ${theme.dim("- Pakai URL yang sama dengan Path Utama")}`, value: "true" },
					{ name: `${theme.primary("\u{1F4C4}")} File Lokal      ${theme.dim("- Simpan lokal sebagai file .json")}`, value: "false" },
					{ name: `${theme.primary("\u{1F50C}")} URL Custom      ${theme.dim("- Pakai URL database yang berbeda")}`, value: "custom" },
				],
			});

			if (!dbConfig.options) dbConfig.options = { store: true, database: true };

			if (typeChoice === "true") {
				dbConfig.options[choice] = true;
			} else if (typeChoice === "false") {
				dbConfig.options[choice] = false;
			} else if (typeChoice === "custom") {
				const val = await input({
					message: `Masukkan URL custom untuk ${choice} (misalnya mongodb://...):`,
				});
				dbConfig.options[choice] = { path: val };
			}
		}

		writeDatabaseConfig(dbConfig);
		logSuccess("Pengaturan database tersimpan ke settings.js");
	}
}
