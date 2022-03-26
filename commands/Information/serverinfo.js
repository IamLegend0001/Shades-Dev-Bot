const { Command } = require("../../utils/command/command");
const ee = require(`../../settings/config`).embed
const moment= require('moment')
const Discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = new Command({
  // options
  name: "serverinfo",
  description: `info about server`,
  userPermissions: ['VIEW_CHANNELS'],
  botPermissions: ['SEND_MESSAGES'],
  category: "Information",
  premium: false,
  cooldown: 10,
  // command start
  run: async ({ client, interaction, args, prefix }) => {

    const member = interaction.guild.members.cache.size
    const serverOwner = await interaction.guild.fetchOwner();
    const user = interaction.guild.members.cache.filter(member => member.user.bot).size;
    const bots = interaction.guild.members.cache.filter(member => !member.user.bot).size;
    const roles = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId(`sr-role`)
      .setLabel(`SERVER-ROLES`)
      .setStyle("PRIMARY")
    )
    // Code
    interaction.followUp({
      embeds: [
        new Discord.MessageEmbed()
        .setTitle('ServerInfo')
        .setColor(`BLURPLE`)
        .addFields(
          {
            name: 'SERVER OWNER',
            value: `${serverOwner.user.tag}`,
            inline: false
          },
          {
            name: 'SERVER ID',
            value: `\`\`\`js\n${interaction.guildId}\`\`\``,
            inline: false
          },
          {
            name: 'Shard ID',
            value: `${interaction.guild.shardId}`,
            inline: true
          },
          {
            name: 'Membercount',
            value: `**Total Members: ${interaction.guild.memberCount} | Humans: ${user} | Bots: ${bots}**`
          },
          {
            name: 'Created',
            value: `<t:${Math.floor(Date.now()/1000) + 3600}:R>`
          }
          
        )
        
      ],
      components: [roles]
    })

    console.log(`serverinfo.js loaded`)
  },
});