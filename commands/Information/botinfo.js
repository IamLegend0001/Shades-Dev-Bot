const { Command } = require("../../utils/command/command");
const ee = require(`../../settings/config`).embed
const { MessageEmbed, version } = require(`discord.js`);
const Discord = require('discord.js')
const os = require('os')
const prettyMilliseconds = require('pretty-ms')
const ms = require('ms')
const emoji = require(`../../settings/config`).emoji
const { duration } = require(`../../handlers/functions`);
const { stat } = require("fs");
const { pid } = require("process");


module.exports = new Command({
  // options
  name: `stats`,
  description: `basic info about notifier`,
  userPermissions: [`SEND_MESSAGES`],
  botPermissions: [`SEND_MESSAGES`],
  category: `Information`,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    const channel = client.channels.cache.size
        const user = interaction.guild.members.cache.filter(channel => !channel).size;
    const bots = interaction.guild.members.cache.filter(channel => !member.user.bot).size;
    interaction.followUp({
      embeds: [
        new Discord.MessageEmbed()
        .setColor("#ff000")
        .setDescription(`Stats From Brandan`)
        .setColor("#ff000")
        .setDescription(`Stats From ${client.user.username}`)
        .addField("<:data:949287660277612636> Memory Used", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
          .addField("⌚️ Uptime ", `\`\`\`js\n${prettyMilliseconds(client.uptime)}\`\`\``)
          .addField("<:Users:949287340579381349> Users", `${client.users.cache.size}`)
          .addField("<:servers:949287224871125003> Servers", `${client.guilds.cache.size}`)
          .addField("<:discordjs:947506908254863461> Discord.js", `v${version}`)
          .addField("<:nodejs:949286713895813150> Node", `${process.version}`)
          .addField("⚡ CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("✔️ Arch", `${os.arch()}`)
          .addField("Bot Permissions", `${interaction.guild.me.permissions.toArray().map(p=>`\`${p}\``).join(", ")}`)
          .addField("💻 Windows version", `\`\`\`js\n${os.release()}\`\`\``)
          .addField("💻 Hosted On", `${os.hostname()}`)
          .addField("💻 Platform", `${os.platform}`)
          .addField("Channels")
      ]
    })

    const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
      .setCustomId("DANGER")
      .setEmoji("<a:early:946290888487886898>")
      .setLabel("DANGER")
      .setStyle("DANGER")
    )
    interaction.channel.send({components:[row]})
  },
});
