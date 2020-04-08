const Discord = require('discord.js')
const fs = require('fs')

exports.run = async(bot, message, args) => {

      if(!args[0])  return message.reply('Use: /8ball <dúvida>')
       
    let respostas = [
        'Sim.',
        'Não.',
        'Não sei.',
        'Provavelmente sim.',
        'Provavelmente não.',
        'Verdade.',
        'Nunca na vida.',
        'Concordo.',
        'Pode ser...',
        'Talvez',
        'Claro que sim'
    ]
    
let respostas1 = respostas[Math.floor(Math.random()* (respostas.length))] 
              
    let embed = new Discord.RichEmbed()

    .setTitle("🎱 Bola mágica ")
    .setDescription(respostas1)
    .setFooter(bot.user.username + ' - 8Ball')
    .setColor('#498bfa')

    message.reply(embed).catch(error => message.channel.send(`Oshhh, deu merda em algum lugar do meu sistema! \`${error}\` ⚠️`))
}

exports.help = {
 nome: "8Ball",
 descricao: null
}