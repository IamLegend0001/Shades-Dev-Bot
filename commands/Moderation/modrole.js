const { Command } = require('reconlx');
const ee = require(`../../settings/config`).embed
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const prettyMilliseconds = require('pretty-ms');

module.exports = new Command({
    name: 'modrole',
    description: `Set's modrole for server  | Able To use moderation commands`,
    userPermissions: ["MANAGE_GUILD"],
    options: [
        {
            name: 'role',
            description: `Role You want to set as Modrole`,
            type: 'ROLE',
            required: true
        }
    ],
    run: async ({ interaction }) => {
        const role = interaction.options.getRole('role')
        const modrole = interaction.guild.roles.cache.get(role.id)
 
         role.permissions.add("MANAGE_MESSAGES")
        interaction.followUp({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(`AQUA`)
                .setDescription(`Modrole Set To ${modrole}`)
            ]
        })
    }
})