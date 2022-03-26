const Discord = require('discord.js')
const { Command } = require("../../utils/command/command");
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')
const canvas = require('canvas')
const { Canvas, resolveImage} = require('canvas-constructor')

module.exports = new Command({
    name: 'rickroll',
    description: `rickroll's a user`,
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'user',
            description: `user to be rickrolled`,
            type: 'USER',
            required: false
        }
    ],
    run: async ({ interaction }) => {
        const user = interaction.options.getUser('user') || interaction.user
        const member = interaction.guild.members.cache.get(user.id)

        if(user.id === config.botId){
            return interaction.followUp(`You Can't Rickroll Me I am innocent`)
        }

        let pfp = await resolveImage(member.displayAvatarURL({
            format: "png",
            size: 128
        }))

const background = await resolveImage('https://i.imgur.com/cRNVEOI.jpg');

let rickroll = new Canvas(1192, 624)
    .printImage(background, 0, 0, 1192, 624)
    .printCircularImage(pfp, 607, 86, 100, 100)
    .toBuffer(); 

    const msg = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Rickrolled!!!`)
    .setDescription(`**${member} was Rickrolled!!!**`)



     interaction.followUp({embeds: [msg]})
     interaction.channel.send({files: [rickroll]})
     interaction.channel.lastMessage.react("<:kamal_hehe:953691962081419264>")
    }
})