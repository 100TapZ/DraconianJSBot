const { MessageEmbed } = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {
	const settings = require("../../config/settings.json");
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const helpArgs = args[0];

	if (!helpArgs) {
		const embed = new MessageEmbed()
			.setAuthor(
				`${client.user.username} Commands list`,
				client.user.displayAvatarURL()
			)
			.setColor("GREEN")
			.setDescription(
				`**My prefix:** \`${prefixesdatabase.prefix}\` , ${emojis.slash} Slash Commands list for \`/help\`\nClick [HERE].`
			)
			.addField("**📱Basic**", "`help`, `ping`, `vote`, `uptime`")
			.addField(
				"**⚙utility**",
				"`aes256`, `avatar`, `channel`, `embed`, `roleinfo`, `reverse`, `setafk`, `snipe`, `stats`, `timer`, `translate`, `whois`, `weather`, `youtube`"
			)
			.addField(
				"**🎃Fun**",
				"`8ball`, `cat`, `deaes256`, `kiss`, `meme`, `ngif`, `pat`, `poke`, `smug`, `thigh`, `tickle`"
			)
			.addField(
				"**:tada:Giveaways**",
				"`start-giveaway`, `reroll`, `end-giveaway`"
			)
			.addField(
				"**:frame_photo:Image**",
				"`captcha`, `circle`, `delete`, `gay`, `changemymind`, `trigger`, `clyde`, `petpet`, `magik`, `iphonex`"
			)
			.addField(
				"**:musical_note:Music**",
				"`play`, `stop`, `skip`, `queue`, `autoplay`, `loop`, `volume`, `pause`, `resume`"
			)
			.addField(
				"**🛠️Moderation**",
				"`ban`, `clear`, `clearwarn`, `createchannel`, `createemoji`, `kick`, `lockchannel`, `mute`, `rename`, `slowmode`, `unban`, `unlockchannel`, `unmute`, `warn`, `warnings`"
			)
			.addField("**:gear:Custom Function**", "`setprefix`")
			.setFooter(
				`© ${nowyear} ${client.user.username} | This command is requested by ${message.author.username}#${message.author.discriminator}`
			);
		return message.channel.send({ embed });
	};

	if (helpArgs) {
		//let command = helpArgs
			const command = client.commands.has(helpArgs) ? client.commands.get(helpArgs) : client.aliases.has(helpArgs) ? client.commands.get(client.aliases.get(helpArgs)) : null;
            if(!command) {
				const embeds = new MessageEmbed()
				.setDescription(`${emojis.cross} Command is not found!`)
				.setColor("RED");
			   return message.channel.send(embeds);
			};
			if (command.help.aliases < 1) alia = "No aliases";
			const embed = new MessageEmbed()
				.setAuthor(
					`Command: ${command.help.name}`,
					client.user.displayAvatarURL()
				)
				.setDescription(
					`
            **Description:**\n\`\`\`${
							command.help.description ||
							"There is no Description for this command."
						}\`\`\`\n**Usage:**\n\`\`\`${
						command.help.usage || "No Usage"
					}\`\`\`\n**Permissions:**\n\`\`\`${
						command.help.accessableby || "Members"
					}\`\`\`\n**Aliases:**\n\`\`\`${alia}\`\`\``
				)
				.setColor("#4a4b4d")
				.setFooter(
					`© ${nowyear} ${client.user.username} | This command requested by ${message.author.username}#${message.author.discriminator}`
				);
			return message.channel.send(embed);
	}
};

module.exports.help = {
	name: "help",
	description: "This command is used for displaying all commands.",
	usage: `${client.config.prefix}help`,
	accessableby: "Members",
	aliases: []
};