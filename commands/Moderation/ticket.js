const { Command } = require('reconlx');
const ee = require(`../../settings/config`).embed
const Discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = new Command({
    name: `ticket-panel`,
    description: `Send's A Ticket Pannel `,
    userPermissions: ["MANAGE_GUILD"],
    run: async ({ interaction }) => {
        const ticketembed = new MessageEmbed()
        .setColor(`AQUA`)
        .setDescription(`Create A Ticket By Clicking <:ticketo:954433979308703884>`)
        .setFooter(`${interaction.user.tag}`)
        const ticket = new MessageActionRow().addComponents(
            new MessageButton()
            .setCustomId(`Ticket`)
            .setEmoji(`<:ticketo:954433979308703884>`)
            .setStyle("SECONDARY")
        )
        interaction.channel.send({components: [ticket], embeds: [ticketembed]})
    }
})