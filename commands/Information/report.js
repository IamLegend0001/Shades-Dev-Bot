const Discord = require('discord.js')
const moment = require('moment')
const { Command } = require('../../utils/command/command')
const { MessageEmbed } = require('discord.js')
const client = require('../..')

module.exports = new Command({
    name: 'report',
    description: `Report's A Bug`,
    options: [
        {
            name: 'bug',
            description: `Bug To be Reported`,
            type: 'STRING',
            required: true
        },
    ],
    run: async ({ interaction }) => {
        const rchannel = client.channels.cache.get("956964312604373072")
        const rowners1 = client.users.cache.get("788745942777462794")
        const rowners2 = client.users.cache.get("795903672549638194")
        const bug = interaction.options.getString('bug')

        const reportEmbed = new MessageEmbed()
        .setColor("ff0000")
        .setTitle("BUG REPORTED!")
        .setAuthor({
            name: `${interaction.user.tag}`,
            iconURL: `${interaction.user.displayAvatarURL({dynamic: true})}`
        })
        .addFields(
            {
                name: 'BUG',
                value: `**${bug}**`
            },
            {
                name: 'Reported By',
                value: `${interaction.user.tag}`
            },
            {
                name: 'Was Reported In',
                value: `${interaction.guild.name}`
            }
        )
        .setFooter(`If You Are Reading This msg In dm then u are the owner of the bot`)
        rchannel.send({embeds: [reportEmbed]})
        rowners1.send({embeds: [reportEmbed]})
        rowners2.send({embeds: [reportEmbed]})
        interaction.followUp({
            embeds: [
                new Discord.MessageEmbed()
                .setColor("AQUA")
                .setDescription(`Your Bug Was Reported And Sent To ${rchannel} and Bot's Owner`)
                .addFields(
                    {
                        name: 'BUG',
                        value: `\`${bug}\``
                    }
                )
                .setThumbnail(`${interaction.guild.iconURL({dynamic: true})}`)
            ]
        })
    }
})