const request = require("request");
const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (bot, message, args) => {
	request("https://some-random-api.ml/img/dog", (error, _response, body) => {
		const json = JSON.parse(body);
		const { link } = json;

		const emb = new Discord.MessageEmbed();
		emb.setDescription("Your Dog Image Here:");
		emb.setColor("GREEN");
		emb.setImage(link);

		message.channel.send(emb);
	});
};

module.exports.help = {
	name: "dog",
	description: "This command is used for posting dog's images randomly.",
	usage: `${client.config.prefix}dog`,
	accessableby: "Members",
	aliases: []
};
