const { Command } = require('reconlx');
const Discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton, } = require('discord.js')
const { duration } = require('../../handlers/functions');
const prettyMilliseconds = require('pretty-ms')

module.exports = new Command({
    name: 'ticket-close',
    description: `Close's a Ticket`,
    userPermissions: ["MANAGE_GUILD"],
    run: async ({ interaction }) => {
        const dcembed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Confirmation`)
        .setDescription(`**Are You Sure You Want To Delete This Ticket Click On <:closed:954647585136713728> To Close The Ticket**`)
        .setThumbnail(`${interaction.guild.iconURL({dynamic: true})}`)
        .setFooter({
            text: ``
        })
        const dlt = new MessageActionRow().addComponents(
            new MessageButton()
            .setCustomId(`DELETE`)
            .setEmoji(`<:closed:954647585136713728>`)
            .setStyle(`DANGER`)
        )
        interaction.channel.send({content: `${interaction.user}`, components: [dlt], embeds: [dcembed]})
    }
})