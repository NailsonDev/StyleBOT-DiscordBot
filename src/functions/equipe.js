const Discord = require('discord.js')

exports.run = async(bot,message,args) => {

 let texto = args.join(" ")

 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("você não tem permissão de `MANAGE_MESSAGES`")

 if(!texto) return message.channel.send('> Você esqueceu de informar os argumentos.')

     let embed = new Discord.RichEmbed() 

     .setTitle("Atualização da equipe.")
     .setDescription('Aqui estão todos os membros da equipe atualmente, sempre estamos tentando atualizar vocês.')
     .addField(`Equipe: `, `${texto}`)
     .setColor('#498bfa')
     .setTimestamp()
     .setFooter('Equipe - Style Network')
     message.channel.send(embed)
} 

exports.help = {
    name: "Equipe", 
    descricao: null
}