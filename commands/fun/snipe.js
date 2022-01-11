const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = (client, message, args) => {
	const msg = client.snipes.get(message.channel.id);
	if (!msg)
		return message.channel.send(
			"There are no deleted messages in this channel!"
		);
	const embed = new Discord.MessageEmbed()
		.setAuthor(msg.author)
		.setDescription(msg.content);
	if (msg.image) embed.setImage(msg.image);

	message.channel.send(embed);
};

module.exports.help = {
	name: "snipe",
	description:
		"This command is used for sniping latest message been deleted by members.",
	usage: `${client.config.prefix}snipe`,
	accessableby: "Member",
	aliases: []
};
