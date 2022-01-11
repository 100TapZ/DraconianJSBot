const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {
	const { body } = await superagent.get("https://nekos.life/api/v2/img/ngif");

	const embed = new Discord.MessageEmbed()
		.setColor("#ff9900")
		.setTitle("OwO, Heres your Neko Gif")
		.setImage(body.url)
		.setFooter("© Draconian Workshop");
	message.channel.send({ embed });
};

module.exports.help = {
	name: "ngif",
	description: "This command is used for generating ngif.",
	usage: `${client.config.prefix}ngif`,
	accessableby: "Members",
	aliases: []
};
