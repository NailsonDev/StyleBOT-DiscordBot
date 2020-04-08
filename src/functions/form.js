const Discord = require('discord.js')

exports.run = async(bot, message, args) => {

     let embed = new Discord.RichEmbed() 

     .setTitle("Formulário Google!")
     .setDescription('Aqui está o **[formulário](http://abre.ai/formulariostyle)** caso queira fazer de outra forma, e rápida use /aplicação e leia com atenção.')
     .setColor('#498bfa')
     .setTimestamp()
     .setFooter('Atenciosamente - Style Network')

     message.channel.send(embed)
} 

exports.help = {
    name: "Equipe", 
    descricao: null
}