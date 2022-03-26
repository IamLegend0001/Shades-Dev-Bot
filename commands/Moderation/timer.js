const { Command } = require('reconlx');
const ms = require('ms')
const config = require('../../config.json')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = new Command({
    name: 'timer',
    description: `Set's A Timer And Remind's You`
})