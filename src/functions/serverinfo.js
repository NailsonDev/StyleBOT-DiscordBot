const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');
const fs = require('fs');
const config = require('../../config.json');

exports.run = (bot, message, args) => {
    
  

    let embed = new Discord.RichEmbed()

    let bots = message.guild.members.filter((mem) => mem.user.bot === true).size;
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    
    embed.setTimestamp()
    embed.setTitle(`${message.guild.name}`)
    embed.setThumbnail(message.guild.iconURL)
    embed.setColor("#498bfa")
    embed.setDescription(`Algumas informações do nosso Discord: **${message.guild.name}**!`)
    embed.addField(`✅ ID do servidor`, `\`${message.guild.id}\``)
    embed.addField(`⚠️ Fundador do Servidor`, message.guild.owner, true)
    embed.addField(`🏳️ Região do Servidor`, message.guild.region, true)
    embed.addField(`🔊 Total de Canais`, message.guild.channels.size)
    embed.addField(`👩‍🦰 Membros (${message.guild.memberCount})\n🤖 Bots: [${bots}]\n`, `Online: \`${online}\`\nOcupado: \`${ocupado}\`\nAusente: \`${ausente}\`\nOffiline: \`${offline}\``)
   // embed.addField(`Cargos (${message.guild.roles.size - 1})`, message.guild.roles.map(a => a).join(", "))
    embed.setFooter(bot.user.username, message.client.user.avatarURL)
    message.react('🆗');
    message.channel.send(embed);
}

exports.help = {
  nome : "Serverinfo",
  descricao: "Quer saber as informações do servidor que está? Basta usar esse comando e irá obter todas informações possíveis."
}