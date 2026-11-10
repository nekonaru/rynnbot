import "../settings.js";
import fs from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";

import { reSize } from "./function.js";

const __filename = fileURLToPath(import.meta.url);

async function setTemplateMenu(sock, type, m, prefix, setv, db, options = {}) {
	let hitObj = db?.hit || {};
	let total = Object.entries(hitObj)
		.sort((a, b) => b[1] - a[1])
		.slice(0, Math.min(7, Object.keys(hitObj).length))
		.filter(([command]) => command !== "totalcmd" && command !== "todaycmd")
		.slice(0, 5);

	let text = `╭──❍「 *MENU TERATAS* 」❍\n`;

	if (total && total.length >= 5) {
		total.forEach(([command, hit], index) => {
			text += `│${setv} ${prefix}${command}: ${hit} hits\n`;
		});
		text += "╰──────❍";
	} else
		text += `│${setv} ${prefix}ai
│${setv} ${prefix}brat
│${setv} ${prefix}tiktok
│${setv} ${prefix}cekmati
│${setv} ${prefix}allmenu
╰──────❍`;

	if (type == 1 || type == "buttonMessage") {
		await sock.sendButtonMsg(
			m.chat,
			{
				text: `Halo @${m.sender.split("@")[0]}\n` + text,
				footer: options.ucapanWaktu,
				mentions: [m.sender],
				contextInfo: {
					forwardingScore: 10,
					isForwarded: true,
				},
				buttons: [
					{
						buttonId: `${prefix}allmenu`,
						buttonText: { displayText: "Semua Menu" },
						type: 1,
					},
					{
						buttonId: `${prefix}sc`,
						buttonText: { displayText: "SC" },
						type: 1,
					},
				],
			},
			{ quoted: m },
		);
	} else if (type == 2 || type == "listMessage") {
		await sock.sendButtonMsg(
			m.chat,
			{
				text: `Halo @${m.sender.split("@")[0]}\n` + text,
				footer: options.ucapanWaktu,
				mentions: [m.sender],
				contextInfo: {
					forwardingScore: 10,
					isForwarded: true,
				},
				buttons: [
					{
						buttonId: `${prefix}allmenu`,
						buttonText: { displayText: "Semua Menu" },
						type: 1,
					},
					{
						buttonId: `${prefix}sc`,
						buttonText: { displayText: "SC" },
						type: 1,
					},
					{
						buttonId: "list_button",
						buttonText: { displayText: "list" },
						nativeFlowInfo: {
							name: "single_select",
							paramsJson: JSON.stringify({
								title: "Daftar Menu",
								sections: [
									{
										title: "Daftar Menu",
										rows: [
											{
												title: "Semua Menu",
												id: `${prefix}allmenu`,
											},
											{
												title: "Menu Bot",
												id: `${prefix}botmenu`,
											},
											{
												title: "Menu Grup",
												id: `${prefix}groupmenu`,
											},
											{
												title: "Menu Pencarian",
												id: `${prefix}searchmenu`,
											},
											{
												title: "Menu Download",
												id: `${prefix}downloadmenu`,
											},
											{
												title: "Menu Kutipan",
												id: `${prefix}quotesmenu`,
											},
											{
												title: "Menu Alat",
												id: `${prefix}toolsmenu`,
											},
											{
												title: "Menu AI",
												id: `${prefix}aimenu`,
											},
											{
												title: "Menu Stalker",
												id: `${prefix}stalkermenu`,
											},
											{
												title: "Menu Random",
												id: `${prefix}randommenu`,
											},
											{
												title: "Menu Anime",
												id: `${prefix}animemenu`,
											},
											{
												title: "Menu Game",
												id: `${prefix}gamemenu`,
											},
											{
												title: "Menu Hiburan",
												id: `${prefix}funmenu`,
											},
											{
												title: "Menu Owner",
												id: `${prefix}ownermenu`,
											},
										],
									},
								],
							}),
						},
						type: 2,
					},
				],
			},
			{ quoted: m },
		);
	} else if (type == 3 || type == "documentMessage") {
		let profile;
		try {
			profile = await sock.profilePictureUrl(m.sender, "image");
		} catch (e) {
			profile = global.fake?.anonim || "";
		}
		const ownerNum = (global.owner && global.owner[0]) || "0";
		const menunya = `
╭──❍「 *INFO USER* 」❍
├ *Nama* : ${m.pushName ? m.pushName : "Tanpa Nama"}
├ *Id* : @${m.sender.split("@")[0]}
├ *User* : ${options.isVip ? "VIP" : options.isPremium ? "PREMIUM" : "FREE"}
├ *Limit* : ${options.isVip ? "VIP" : (db?.users?.[m.sender]?.limit ?? 0)}
├ *Uang* : ${db?.users?.[m.sender] ? db.users[m.sender].money.toLocaleString("id-ID") : "0"}
╰─┬────❍
╭─┴─❍「 *INFO BOT* 」❍
├ *Nama Bot* : ${db?.set?.[options.botNumber]?.botname || "Rynn"}
├ *Owner* : @${ownerNum.split("@")[0]}
├ *Mode* : ${sock.public ? "Public" : "Self"}
├ *Prefix* :${db?.set?.[options.botNumber]?.multiprefix ? "「 MULTI-PREFIX 」" : " *" + prefix + "*"}
╰─┬────❍
╭─┴─❍「 *TENTANG* 」❍
├ *Date* : ${options.date}
├ *Day* : ${options.locale_day}
├ *Time* : ${options.date_time}
╰──────❍\n`;
		await m.reply({
			text: menunya + text,
			title: options.author,
			description: options.packname,
			thumbnailUrl: profile,
			sourceUrl: global.my?.gh || "",
			mentions: [m.sender, "0@s.whatsapp.net", ownerNum.includes("@") ? ownerNum : ownerNum + "@s.whatsapp.net"],
			contextInfo: {
				forwardingScore: 1,
				isForwarded: true,
				forwardedNewsletterMessageInfo: {
					newsletterJid: global.my?.ch || "",
					serverMessageId: null,
					newsletterName: "Gabung Untuk Info",
				},
			},
		});
	} else if (type == 4 || type == "locationMessage") {
		let thumb;
		try {
			thumb = await reSize(global.fake?.thumbnail || fs.readFileSync("./src/media/rynn.png"), 300, 300);
		} catch (e) {
			thumb = null;
		}
		await sock.sendButtonMsg(
			m.chat,
			{
				location: {
					name: `${db?.set?.[options.botNumber]?.botname || "Rynn"}`,
					address: `Dibuat oleh ${options.author}`,
					...(thumb ? { jpegThumbnail: thumb } : {}),
				},
				text: `${options.ucapanWaktu} @${m.sender.split("@")[0]}\n${text}`,
				footer: "Klik tombol di bawah untuk melihat semua menu.",
				mentions: [m.sender],
				buttons: [
					{ buttonId: ".allmenu", buttonText: { displayText: "🔖 Semua Menu" }, type: 1 },
					{ buttonId: ".donasi", buttonText: { displayText: "💵 Donasi" }, type: 1 },
				],
			},
			{ quoted: m },
		);
	} else if (type == 5 || type == "videoMessage") {
	} else {
		m.reply(`${options.ucapanWaktu} @${m.sender.split("@")[0]}\nSilahkan Gunakan ${prefix}allmenu\nUntuk Melihat Semua Menunya`);
	}
}

let currentSetTemplateMenu = setTemplateMenu;

export default async function (...args) {
	return currentSetTemplateMenu(...args);
}

fs.watchFile(__filename, async () => {
	fs.unwatchFile(__filename);
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`));
	const newModule = await import(`${import.meta.url}?update=${Date.now()}`);
	currentSetTemplateMenu = newModule.default;
});
