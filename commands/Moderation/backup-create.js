const { Command } = require('reconlx');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { options } = require('../..');

module.exports = new Command({
    name: 'backup-create',
    description: `Create's A backup for Your Server`,
    userPermissions: ["MANAGE_GUILD"],
    run: async ({ interaction }) => {
        const backup = require('discord-backup')

        backup.create(interaction.guild, {
            jsonBeautify: true
        }).then((backupData) => {
            // And send informations to the backup owner
            interaction.user.send("The backup has been created! To load it, type this command on the server of your choice: `"+settings.prefix+"load "+backupData.id+"`!");
            interaction.followUp(":white_check_mark: Backup successfully created. The backup ID was sent in dm!");
        });
    }
})