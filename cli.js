#!/usr/bin/env node

import ora from "ora";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { select } from "@inquirer/prompts";

import { theme, showBanner, sectionHeader, logSuccess, logWarning, logError, EXIT_VALUE } from "./src/cli/helpers.js";
import { runSetupWizard, isFirstRun } from "./src/cli/setup.js";
import { settingsMenu } from "./src/cli/settings-menu.js";
import { statusDashboard } from "./src/cli/status.js";
import { reportMenu } from "./src/cli/report.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/*
 * Rynn CLI - Entry Point Utama
 *
 * Usage:
 *   rynn              Buka menu interaktif
 *   rynn --setup      Jalankan wizard setup pertama
 *   rynn settings     Buka menu pengaturan langsung
 *   rynn start        Jalankan bot langsung
 *   rynn status       Tampilkan kesehatan sistem
 *   rynn report       Tampilkan laporan
 */

// ── Parse CLI Arguments ──────────────────────────────────────────────
const args = process.argv.slice(2);
const command = args[0]?.toLowerCase();

async function main() {
	try {
		if (command === "--setup" || command === "setup") {
			await runSetupWizard();
			process.exit(0);
		}

		if (command === "settings") {
			await settingsMenu();
			process.exit(0);
		}

		if (command === "start" || command === "run") {
			await startBot();
			process.exit(0);
		}

		if (command === "status") {
			await statusDashboard();
			process.exit(0);
		}

		if (command === "report") {
			await reportMenu();
			process.exit(0);
		}

		if (command === "--help" || command === "-h") {
			showHelp();
			process.exit(0);
		}

		if (isFirstRun()) {
			const completed = await runSetupWizard();
			if (!completed) {
				process.exit(0);
			}
		}

		await mainMenu();
	} catch (error) {
		if (error.name === "ExitPromptError" || error.message?.includes("User force closed")) {
			console.log(`\n${theme.muted("  Sampai jumpa! 👋")}\n`);
			process.exit(0);
		}
		logError(`Kesalahan tidak terduga: ${error.message}`);
		process.exit(1);
	}
}

async function mainMenu() {
	let running = true;
	while (running) {
		showBanner();
		const choice = await select({
			message: "Apa yang ingin kamu lakukan?",
			choices: [
				{
					name: `${theme.accent("▶")}  Mulai Bot          ${theme.dim("- Jalankan bot WhatsApp")}`,
					value: "start",
				},
				{
					name: `${theme.primary("⚙")}  Pengaturan        ${theme.dim("- Atur opsi bot")}`,
					value: "settings",
				},
				{
					name: `${theme.primary("💚")} Status / Kesehatan ${theme.dim("- Cek kesiapan sistem")}`,
					value: "status",
				},
				{
					name: `${theme.primary("📋")} Laporan           ${theme.dim("- Lihat log dan diagnostik")}`,
					value: "report",
				},
				{
					name: `${theme.error("✕")}  Keluar`,
					value: EXIT_VALUE,
				},
			],
		});

		switch (choice) {
			case "start":
				await startBot();
				break;
			case "settings":
				await settingsMenu();
				break;
			case "status":
				await statusDashboard();
				break;
			case "report":
				await reportMenu();
				break;
			case EXIT_VALUE:
				console.log(`\n${theme.muted("  Sampai jumpa! 👋")}\n`);
				running = false;
				break;
		}
	}

	process.exit(0);
}

async function startBot() {
	showBanner();
	sectionHeader("Menjalankan Bot");

	const spinner = ora({
		text: theme.dim("Menyiapkan proses bot..."),
		spinner: "dots12",
		color: "cyan",
	}).start();

	await new Promise((r) => setTimeout(r, 800));
	spinner.succeed(theme.accent("Menjalankan Rynn..."));
	console.log(`  ${theme.dim("Tekan Ctrl+C untuk menghentikan bot dan kembali ke terminal.")}\n`);

	return new Promise((resolve) => {
		const startFile = path.join(__dirname, "start.js");
		const child = spawn(process.execPath, [startFile], {
			cwd: __dirname,
			stdio: "inherit",
		});

		child.on("exit", (code) => {
			if (code === 0) {
				logSuccess("Bot berhenti dengan normal.");
			} else {
				logWarning(`Bot berhenti dengan kode ${code}.`);
			}
			resolve();
		});

		child.on("error", (err) => {
			logError(`Gagal menjalankan bot: ${err.message}`);
			resolve();
		});
	});
}

function showHelp() {
	showBanner();
	console.log(`  ${theme.bold("Penggunaan:")}  rynn ${theme.dim("[perintah]")}\n`);
	console.log(`  ${theme.bold("Perintah:")}`);
	console.log(`    ${theme.accent("(kosong)".padEnd(16))} Buka menu interaktif`);
	console.log(`    ${theme.accent("start".padEnd(16))} Jalankan bot langsung`);
	console.log(`    ${theme.accent("settings".padEnd(16))} Buka manajer pengaturan`);
	console.log(`    ${theme.accent("status".padEnd(16))} Tampilkan dashboard kesehatan sistem`);
	console.log(`    ${theme.accent("report".padEnd(16))} Lihat log dan diagnostik`);
	console.log(`    ${theme.accent("--setup".padEnd(16))} Jalankan wizard setup pertama`);
	console.log(`    ${theme.accent("--help, -h".padEnd(16))} Tampilkan bantuan ini`);
	console.log("");
}

main();
