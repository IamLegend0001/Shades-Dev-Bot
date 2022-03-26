const { Command } = require('reconlx');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const { userInfo } = require('os');

module.exports = new Command({
    name: 'avatar',
    description: `Get's Avatar Of A User`,
    userPermissions: ["SEND_MESSAGES"],
    botPermissions: ["EMBED_LINKS"],
    options: [
        {
            name: 'user',
            description: 'select the user whose avatar u want',
            type: 'USER',
            required: true,
        }
    ],
    run: async({ interaction }) => {
        const user = interaction.options.getUser('user')
        interaction.followUp({
            embeds: [
                new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle(`Avatar Of ${user.tag}`)
                .setImage(`${user.displayAvatarURL({dynamic: true})}`)
                .setTimestamp()
            ]
        })
          interaction.channel.send({components:[row]})
    }
})