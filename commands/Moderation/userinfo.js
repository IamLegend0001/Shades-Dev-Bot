const { Command } = require('reconlx');
const moment = require('moment')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json')
const prettyMilliseconds = require('pretty-ms')
const { userInfo } = require('os');

module.exports = new Command({
    name: 'userinfo',
    description: `Get's some info about a user`,
    userPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    botPermissions: ["EMBED_LINKS"],
    options: [
        {
            name: 'user',
            description: `Info about the user u want`,
            type: 'USER',
            required: true
        }
    ],
    run: async({ interaction }) =>{
        const user = interaction.options.getUser('user') || interaction.user
        const member = interaction.guild.members.cache.get(user.id)
        let game;
        let presence = member.presence
     
        if(presence?.activities[0]?.name === "Custom Status") game = presence?.activities[1]?.name
        else game = 'Not Playing Anything' //presence?.activites[0]?.name
       
       
    var status = member.presence?.status;
   
    if(!status == 'dnd') status = "Do Not Disturb " 
    if (!status== 'online') status ="Online "
    if(!status) status = "Offline  "
    if(!status == 'idle') status = "Idle "
        let x = Date.now() - member.createdAt;
        let y = Date.now() -interaction.guild.members.cache.get(member.id).joinedAt;
        const created = Math.floor(x / 86400000);
        const joined = Math.floor(y / 86400000);
        
    
        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        
        const createddate = moment.utc(member.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        const flags = {
            DISCORD_EMPLOYEE: '<:discordemployee:945309705000083476>',
            PARTNERED_SERVER_OWNER: '<:owner:951532081547198484>',
            DISCORD_PARTNER: '<a:at_partner:924293351203819590>' ,
            HYPESQUAD_EVENTS: 'Hypesquad Events',
            BUGHUNTER_LEVEL_1: '<:BugHunter1:951532682968436786>',
            HOUSE_BRAVERY: '<:House_Bravery:951500225388900422>',
            HOUSE_BRILLIANCE: '<:briliance:951533027958345749>',
            HOUSE_BALANCE: '<:House_Balance:951530402269524048>',
            EARLY_SUPPORTER: '<a:early:946290888487886898>',
            SYSTEM: 'System',
            BUGHUNTER_LEVEL_2: '<:BugHunterLvl2:951532880776007791>',
            VERIFIED_BOT: '<:VerifiedBot:951529663312855151>',
            EARLY_VERIFIED_BOT_DEVELOPER: '<a:bot_dev:930456128813404211>'
        }
        const userflags = member.user.flags.toArray();
        interaction.followUp({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(`ff0000`)
                .setAuthor({
                    name: `${member.user.tag}`,
                    iconURL: `${member.displayAvatarURL({dynamic: true})}`
                })
                .addField('Badges', `${userflags.length ? userflags.map(flag => flags[flag]).join(', ') : 'No badges'}`)
                .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
                .addField('Discriminator', `${user.discriminator}`)
                .addFields(
                    {
                        
                        name: 'Joined Discord',
                        value: `${moment(user.createdAt)}`
                    },
                    {
                        name: 'Joined Server',
                        value: `${member.joinedAt.toLocaleDateString("en-us")}`
                    },
                    {
                        name: 'SERVER ADMIN',
                        value: `${member.permissions.has("ADMINISTRATOR") || "<a:Cross:948849995405209630>"} `
                    },
                    {
                        name: 'Nickname',
                        value: `${member.displayName || "No Nickname"}`,
                        inline: true
                    },
                    {
                        name: 'User Id',
                        value: `${member.id}`,
                        inline: false
                    },
                    {
                        name: `Highest Role`,
                        value: `<@&${member.roles.highest.id}>`
                    },
                    {
                        name: 'User Is Bot?',
                        value: `${member.user.bot}`
                    },
                    {
                        name: 'Permissions',
                        value: `${member.permissions.toArray().map(p=>`\`${p}\``).join(", ")}`
                    },
                    {
                        name:  'Voice Channel',
                        value: `${member.voice.channel}` 
                    }
                )
            ]
        })
    }
    
})