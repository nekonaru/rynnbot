import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENV_FILE = path.resolve(__dirname, "..", ".env");

const LINE_RE = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=/;

function parseEnv(content) {
	const entries = new Map();
	for (const rawLine of content.split(/\r?\n/)) {
		const line = rawLine.trim();
		if (!line || line.startsWith("#")) continue;
		const eq = line.indexOf("=");
		if (eq === -1) continue;
		const key = line.slice(0, eq).trim();
		if (!LINE_RE.test(rawLine)) continue;
		let value = line.slice(eq + 1).trim();
		if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
			value = value.slice(1, -1);
		}
		entries.set(key, value);
	}
	return entries;
}

export function readEnvValue(name) {
	if (process.env[name] !== undefined) return process.env[name];
	try {
		if (!fs.existsSync(ENV_FILE)) return undefined;
		return parseEnv(fs.readFileSync(ENV_FILE, "utf8")).get(name);
	} catch {
		return undefined;
	}
}

export function writeEnvValue(name, value) {
	const stringValue = String(value);
	let lines = [];
	try {
		if (fs.existsSync(ENV_FILE)) lines = fs.readFileSync(ENV_FILE, "utf8").split(/\r?\n/);
	} catch {}

	const keyRe = new RegExp(`^\\s*${name}\\s*=`);
	const serialized = `${name}=${stringValue}`;
	let replaced = false;
	lines = lines.map((line) => {
		if (keyRe.test(line)) {
			replaced = true;
			return serialized;
		}
		return line;
	});
	if (!replaced) {
		if (lines.length > 0 && lines[lines.length - 1].trim() !== "") lines.push("");
		lines.push(serialized);
	}

	fs.writeFileSync(ENV_FILE, lines.join("\n"), { mode: 0o600 });
	process.env[name] = stringValue;
}
