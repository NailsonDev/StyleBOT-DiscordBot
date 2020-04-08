
const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');
const fs = require('fs');
const config = require('../../config.json');

exports.run = (bot, message, args) => {
   

    let embed = new Discord.RichEmbed()
    
    let prefix = config.prefix;

    message.delete(0);

    embed.setTitle(`${bot.user.username}`)
    embed.setDescription(``)
    embed.addField(`Nome:`, `\`${bot.user.username}\``)
    embed.addField(`Usuários:`, ` ${bot.users.size}`)
    embed.addField(`Canais:`, ` ${bot.channels.size}`, true)
    embed.addField(`País:`, `:flag_br: Brazil`)
    embed.addField(`Total de comandos:`, `(${bot.commands.size})`)
    embed.setFooter(`${bot.user.username} foi criada pelo SrDeDo_`, bot.user.avatarURL)
    embed.setThumbnail('https://cdn.discordapp.com/avatars/627704612857839629/bf7034526da28c7d3c8fbf4f0af98a3e.png?size=2048')
    embed.setTimestamp()
    embed.setColor("#498bfa")

    message.channel.send(embed);
}

exports.help = {
  nome : "Botinfo",
  descricao: "Ver todas informações do bot."
}
