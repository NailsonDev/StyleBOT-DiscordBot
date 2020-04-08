const Discord = require('discord.js')
const cooldown = new Set();
const fs = require('fs');
const config = require('../../config.json');
module.exports = {
    run: (bot, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("você não tem permissão de `ADMINISTRATOR`")
        message.delete(200).catch()

        let splitarg = args.join(" ").split(0)

        let anuncio = splitarg[0]
        
        let prefix = config.prefix;
        
        if(!anuncio) return message.channel.send(`Use: ${prefix}anunciar <texto>`)

        let aviso = new Discord.RichEmbed()

        aviso.setColor("#498bfa")
        aviso.setDescription(`**Você realmente deseja mencionar todos os usuários?**`)
        aviso.setTimestamp();

        return message.channel.send(aviso).then(async msg => {

             msg.react("✅")

            let anunciar = new Discord.RichEmbed()  

            .setTitle('⚠️ Anúncio:')
            .setColor("#498bfa")
            .setDescription(`${anuncio}`)
            .setFooter(`Publicado por ${message.author.username}`, bot.user.avatarURL)
            .setTimestamp();

            const a1 = (reaction, user) => reaction.emoji.name ==='✅' && user.id === message.author.id
            const b1 = msg.createReactionCollector(a1, { time: 1300000 });
           
            b1.on("collect", c1 => {
            msg.delete(aviso)
            msg.channel.send(anunciar).then(msg => {
              msg.edit('@everyone')
              
         })
            msg.edit(aviso)
            c1.remove(message.author.id)

       })

    })
}
}
exports.help = {
    nome : "Anunciar",
    descricao: "Esse comando serve para fazer anúncios em seu servidor, caso precise mencionar todos do server use ele para fazer algum tipo de anúncio ou até mesmo um aviso."
  }