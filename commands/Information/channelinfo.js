const Discord = require('discord.js')
const moment = require('moment')
const { Command } = require('../../utils/command/command')
const { MessageEmbed } = require('discord.js')

module.exports = new Command({
    name: 'channelinfo',
    description: `Get's info about a channel`,
    userPermissions: ["VIEW_CHANNEL"],
    options: [
        {
            name: 'channel',
            description: `Channel whose info u want`,
            type: 'CHANNEL',
            required: false
        }
    ],
    run: async ({ interaction }) => {
        const channel = interaction.options.getChannel('channel') || interaction.channel
        

        const infoEmbed = new MessageEmbed()
        .setColor(`AQUA`)
        .setTitle(`${channel.name}`)
        .addFields(
            {
                name: 'Channel ID',
                value: `#${channel.id}`,
                inline: false
            },
            {
                name: 'Created At',
                value: `${moment(channel.createdAt)}`,
                inline: true
            }
        )
        .setFooter(`${moment.now}`)
        interaction.followUp({embeds: [infoEmbed]})
    }
})