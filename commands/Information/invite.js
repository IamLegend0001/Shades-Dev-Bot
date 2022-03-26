const { Client, Message, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js');
const { Command } = require('reconlx');

module.exports = new Command({
    name: 'invite',
    description: `Get's the invite link of bot`,
    userPermissions: ["VIEW_CHANNEL"],
    run: async ({ interaction }) => {
        interaction.followUp({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(`AQUA`)
                .setTitle(`**Invite The Bot's By Clicking Button's**`)
                .addFields(
                    {
                        name: '<a:premium:946081055398580284> Notifire',
                        value: `Click On First Button To Invite Notifire`,
                        inline: true
                    },
                    {
                        name: '<a:premium:946081055398580284> Notifire Prime',
                        value: `Click On the Second Button to Invite Notifire Prime`,
                        inline: true
                    }
                )
                .setThumbnail(`${interaction.user.displayAvatarURL({dynamic: true})}`)
            ]
        })
        const button = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel("INVITE ME")
            .setStyle("LINK")
            .setEmoji("<a:premium:946081055398580284>")
            .setURL('https://discord.com/api/oauth2/authorize?client_id=935432770879119430&permissions=1120922824311&scope=bot%20applications.commands')
        )
        interaction.channel.send({components: [button]})
    }
})