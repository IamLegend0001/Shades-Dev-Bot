const { Command } = require("../../utils/command/command");
const ee = require("../../settings/config").embed
const { readdirSync } = require("fs");
const Discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
const prettyMilliseconds = require("pretty-ms");

module.exports = new Command({
  // options
  name: "help",
  description: `Get Help :)`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  category: "Information",
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    interaction.followUp({
      embeds: [
        new Discord.MessageEmbed()
        .setColor("ff0000")
        .setAuthor({
          name: `${client.user.username}'s Help Panel`,
          iconURL: `${client.user.displayAvatarURL({dynamic: true})}`
        })
        .setDescription(`**Hey <@${interaction.user.id}> My Name Is <@${client.user.id}>
        
                        I am A Discord Bot Which Has Features Like Moderation, Info, Fun, Utility, Embed's etc I Support \`/\` Slash Commands Only

                        Catogries Of My Commands
                        
                        <:Super_Mod:952988759790583868> \`-\` Moderation Commands

                        <:Melody_utility:952991229891731476> \`-\` Utility Commands
                        
                        <:Info:947773109807767563> \`-\` Info Commands
                        
                        <a:_laugh:952991869049114715> \`-\` Fun Commands

                        <:bot_developer:945309986001674250> \`-\` Developer's Info
                        
                        Select The Buttons From Below
                        
                        [Invite Me](https://discord.com/api/oauth2/authorize?client_id=935432770879119430&permissions=1120922824311&scope=bot%20applications.commands)[Support Server](https://dsc.gg/shades-dev)**`)
                        .setFooter({
                          text: `Made With 💓 By </Legend>.js#0001`
                        })
      ]
    })
    const moderation = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("HELP MOD")
      .setEmoji('<:Super_Mod:952988759790583868>')
      .setStyle('SECONDARY'),
      new MessageButton()
      .setCustomId("UTILITY")
      .setEmoji("<:Melody_utility:952991229891731476>")
      .setStyle('DANGER'),
      new MessageButton()
      .setCustomId("INFO")
      .setEmoji("<:Info:947773109807767563>")
      .setStyle('SUCCESS'),
      new MessageButton()
      .setCustomId("FUN")
      .setEmoji("<a:_laugh:952991869049114715>")
      .setStyle("PRIMARY"),
      new MessageButton()
      .setCustomId("DEV")
      .setEmoji("<:bot_developer:945309986001674250>")
      .setStyle("SECONDARY")
    )
    
    interaction.channel.send({components: [moderation]})

    
    
  },
});