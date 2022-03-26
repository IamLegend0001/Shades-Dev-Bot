const Discord = require('discord.js')
const { Command } = require('reconlx')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')
const client = require('../../index')

module.exports = new Command({
    name: 'giveaway',
    description: `Create's a Giveaway in ur server`,
    userPermissions: ["MANAGE_GUILD"],
    options: [
        {
            name: 'duration',
            description: `Duration of the giveaway`,
            type: 'STRING',
            required: true
        },
        {
            name: 'winners',
            description: `Winners for the giveaway`,
            type: 'INTEGER',
            required: true
        },
        {
            name: 'prize',
            description: `Prize of the giveaway`,
            type: 'STRING',
            required: true
        }
    ],
    run: async ({ interaction }) => {
        const duration = interaction.options.getString('duration');
        const winnercount = interaction.options.getInteger('winners');
        const prize = interaction.options.getString('prize');

        client.giveawaysManager.start(interaction.channel, {
            duration: ms(duration),
            winnercount,
            prize
        }).then((gData) => {
            console.log(gData); // {...} (messageId, end date and more)
        })
        .catch((err) => {
            interaction.followUp({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor("ff0000")
                    .setTitle("ERROR!")
                    .setDescription(`\`\`\`${err}\`\`\``)
                    .setFooter('use /report to report this bug')
                ],
            ephemeral: true})
            console.log(`Logged Error And Sent Empeheral Message  Cmd executed by ${interaction.user.tag} Error Was: ${err}`)
        });
    }
})