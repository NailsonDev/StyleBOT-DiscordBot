const Discord = require('discord.js');
const fs = require('fs');
const config = require('../../config.json');

exports.run = (bot,message,args) => {

 
    message.channel.send('**Verificando a latência**...').then(message => {
     message.delete(400)

     let keelta = new Date() - message.createdAt;

    let embed = new Discord.RichEmbed()
     
 embed.setTitle("Latência:")
 .setAuthor(message.author.username, message.author.avatarURL)
 .setColor("#498bfa")
 .addField(" API: ", Math.floor(bot.ping) + " ms", true)
 .setTimestamp()
 .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL);
 
 message.channel.send(embed)

  })
}

exports.help = {
  nome : "Ping",
  descricao: "Com esse comando você poderá ver a lantência do bot, e a resposta entre a sua mensagem ea do bot."
}