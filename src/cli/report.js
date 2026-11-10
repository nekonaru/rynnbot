import fs from "fs";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { select } from "@inquirer/prompts";
import { theme, showBanner, sectionHeader, logInfo, logWarning, BACK_VALUE, backChoice } from "./helpers.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

export async function reportMenu() {
	let running = true;

	while (running) {
		showBanner();
		sectionHeader("Laporan");

		const choice = await select({
			message: "Pilih laporan:",
			choices: [
				{
					name: `${theme.primary("📋")} Log Terbaru        ${theme.dim("- 30 baris output bot terakhir")}`,
					value: "logs",
				},
				{
					name: `${theme.primary("❌")} Log Error          ${theme.dim("- Error terbaru dari PM2")}`,
					value: "errors",
				},
				{
					name: `${theme.primary("🗄️")}  Cek Database       ${theme.dim("- Verifikasi integritas database")}`,
					value: "dbcheck",
				},
				{
					name: `${theme.primary("📦")} Audit Dependensi   ${theme.dim("- Cek kerentanan package")}`,
					value: "audit",
				},
				backChoice("Kembali ke Menu Utama"),
			],
		});

		switch (choice) {
			case "logs":
				await viewLogs();
				break;
			case "errors":
				await viewErrors();
				break;
			case "dbcheck":
				await checkDatabase();
				break;
			case "audit":
				await dependencyAudit();
				break;
			case BACK_VALUE:
				running = false;
				break;
		}
	}
}

async function viewLogs() {
	showBanner();
	sectionHeader("Log Terbaru");

	let logs = "";

	try {
		logs = execSync("pm2 logs --nostream --lines 30", {
			stdio: "pipe",
			timeout: 5000,
		})
			.toString()
			.trim();
	} catch {}

	if (logs) {
		const lines = logs.split("\n");
		for (const line of lines) {
			if (line.includes("error") || line.includes("Error") || line.includes("ERROR")) {
				console.log(`  ${chalk.red(line)}`);
			} else if (line.includes("warn") || line.includes("Warning") || line.includes("WARNING")) {
				console.log(`  ${chalk.yellow(line)}`);
			} else {
				console.log(`  ${theme.dim(line)}`);
			}
		}
	} else {
		logWarning("Tidak ada log PM2. Bot mungkin belum pernah dijalankan lewat PM2.");
		logInfo("Jalankan bot dulu, lalu buka laporan ini lagi untuk melihat log.");
	}

	console.log("");
	await select({
		message: "Tekan Enter untuk kembali",
		choices: [backChoice("Kembali")],
	});
}

async function viewErrors() {
	showBanner();
	sectionHeader("Log Error");

	let errors = "";

	try {
		const raw = execSync("pm2 logs --nostream --lines 100", {
			stdio: "pipe",
			timeout: 5000,
		}).toString();

		const errorLines = raw.split("\n").filter((line) => /error|Error|ERROR|exception|Exception|FATAL|fatal|TypeError|ReferenceError|SyntaxError/i.test(line));

		if (errorLines.length > 0) {
			console.log(`  ${theme.error(`Ditemukan ${errorLines.length} error di log terbaru:`)}\n`);
			for (const line of errorLines.slice(-20)) {
				console.log(`  ${chalk.red("•")} ${theme.dim(line.trim())}`);
			}
		} else {
			console.log(`  ${theme.success("✓")} ${theme.accent("Tidak ada error di log terbaru. Aman!")}`);
		}
	} catch {
		logWarning("Tidak bisa membaca log PM2. PM2 mungkin belum berjalan.");
	}

	console.log("");
	await select({
		message: "Tekan Enter untuk kembali",
		choices: [backChoice("Kembali")],
	});
}

async function checkDatabase() {
	showBanner();
	sectionHeader("Cek Integritas Database");

	const dbPath = path.join(ROOT, "database.json");
	const storePath = path.join(ROOT, "baileys_store.json");

	for (const [name, filePath] of [
		["database.json", dbPath],
		["baileys_store.json", storePath],
	]) {
		console.log(`  ${theme.primary("›")} ${theme.bold(name)}`);

		if (!fs.existsSync(filePath)) {
			console.log(`    ${theme.muted("File tidak ada - akan dibuat saat pertama kali dijalankan.")}\n`);
			continue;
		}

		const stats = fs.statSync(filePath);
		console.log(`    ${theme.dim("Ukuran:".padEnd(16))} ${formatBytes(stats.size)}`);
		console.log(`    ${theme.dim("Diubah:".padEnd(16))} ${stats.mtime.toLocaleString()}`);

		try {
			const content = fs.readFileSync(filePath, "utf-8");
			JSON.parse(content);
			console.log(`    ${chalk.green("✓ Valid JSON")}\n`);
		} catch (e) {
			console.log(`    ${chalk.red(`✗ Invalid JSON: ${e.message}`)}\n`);
		}
	}

	await select({
		message: "Tekan Enter untuk kembali",
		choices: [backChoice("Kembali")],
	});
}

async function dependencyAudit() {
	showBanner();
	sectionHeader("Audit Dependensi");

	logInfo("Memeriksa kerentanan yang diketahui...\n");

	try {
		const result = execSync('npm audit --json 2>/dev/null || echo "{}"', {
			cwd: ROOT,
			stdio: "pipe",
			timeout: 30000,
		}).toString();

		const audit = JSON.parse(result);
		const vulns = audit.metadata?.vulnerabilities || {};
		const total = (vulns.critical || 0) + (vulns.high || 0) + (vulns.moderate || 0) + (vulns.low || 0);

		if (total === 0) {
			console.log(`  ${theme.success("✓")} ${theme.accent("Tidak ada kerentanan yang diketahui!")}`);
		} else {
			console.log(`  ${theme.warning(`Ditemukan ${total} kerentanan:`)}`);
			if (vulns.critical) console.log(`    ${chalk.red(`Critical: ${vulns.critical}`)}`);
			if (vulns.high) console.log(`    ${chalk.redBright(`High:     ${vulns.high}`)}`);
			if (vulns.moderate) console.log(`    ${chalk.yellow(`Moderate: ${vulns.moderate}`)}`);
			if (vulns.low) console.log(`    ${chalk.dim(`Low:      ${vulns.low}`)}`);
			console.log(`\n  ${theme.dim('Jalankan "npm audit fix" untuk mencoba perbaikan otomatis.')}`);
		}
	} catch {
		logWarning("Tidak bisa menjalankan npm audit. Periksa koneksi internet kamu.");
	}

	console.log("");
	await select({
		message: "Tekan Enter untuk kembali",
		choices: [backChoice("Kembali")],
	});
}

function formatBytes(bytes) {
	if (bytes === 0) return "0 B";
	const k = 1024;
	const sizes = ["B", "KB", "MB", "GB"];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}
