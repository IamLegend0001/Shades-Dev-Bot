const { Command } = require('reconlx');
const ee = require(`../../settings/config`).embed
const Discord = require('discord.js')
const cmd = require("../../events/interactionCreate")
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
    name: 'purge',
    description: `lClear's Messages From Channel`,
    botPermissions: ["MANAGE_MESSAGES"],
    userPermissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: `amount`,
            description: `amount of messages to be deleted`,
            type: 'NUMBER',
            required: false
        }
    ],
    run: async({ interaction }) => {
        const amount = interaction.options.getNumber('amount')
       
        
        if(amount > 100) return interaction.followUp({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(`ff0000`)
                .setDescription(`You Can Purge Up To \`100\` Messages `)
                .setFooter({
                    text: `Note: Message's Older Than 2weeks Can't be removed`
                })
            ]
        })
        
        interaction.channel.bulkDelete(amount)
        interaction.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                .setColor('AQUA')
                .setDescription(`\`${amount}\` Messages Were Cleared In ${interaction.channel} By ${interaction.user}`)
                
            ]
        })
    }
})