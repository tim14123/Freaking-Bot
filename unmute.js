const Discord = require ('discord.js')

module.exports.run = async (bot, message, args) => {

    const target = message.mentions.users.first();
    if (target) {
        let muteRole = message.guild.roles.cache.find(role => role.id  === '829472848346611754')
        let mainRole = message.guild.roles.cache.find(role => role.id  === '829434726720471131')

        let memberTarget = message.guild.members.cache.get(target.id);

        memberTarget.roles.add(mainRole.id);
        memberTarget.roles.remove(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> à  retrouvait ça voix`);
    } else {
        message.channel.send('Merci de mentionner la personne à mute !')
    }
}

module.exports.config = {
    name: 'unmute'
}