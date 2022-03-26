const { Command } = require("../../utils/command/command");
const ee = require(`../../settings/config`).embed
const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
module.exports = new Command({
    name: 'badge',
    description: `Display's User's Badges if they have one`,
    userPermissions: ["VIEW_CHANNELS"],
    options: [
        {
            name: 'user',
            description: `User's whos badges you want`,
            type: 'USER',
            required: false
        }
    ],
    run: async ({ client, interaction, args, prefix }) => {
        const user = interaction.options.getUser('user') ||  interaction.user
        const member = interaction.guild.members.cache.get(user.id)
  const flags = {

    DISCORD_EMPLOYEE: 'Discord Employee',
    PARTNERED_SERVER_OWNER: 'Partnered Server Owner',
    DISCORD_PARTNER: 'Discord Partner' ,
    HYPESQUAD_EVENTS: 'Hypesquad Events',
    BUGHUNTER_LEVEL_1: 'Bug Hunter (level 1)',
    HOUSE_BRAVERY: 'House Of Bravery',
    HOUSE_BRILLIANCE: 'House of Brilliance',
    HOUSE_BALANCE: 'House of Balance',
    EARLY_SUPPORTER: 'Early Supporter',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    BUGHUNTER_LEVEL_2: 'Bug Hunter (level 2)',
    VERIFIED_BOT: 'Verified Bot',
    VERIFIED_DEVELOPER: 'Verified Developer'

        }

 const userflags = member.user.flags.toArray();

userflags.length ? userflags.map(flag => flags[flag]).join(', ') : 'No badges'
interaction.followUp(`${userflags}`)

    }
})