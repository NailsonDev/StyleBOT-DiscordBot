const Discord = require('discord.js')
const fs = require('fs');
const config = require('../../config.json');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("você não tem permissão de `KICK_MEMBERS`")
    let member = message.mentions.members.first()

     
    const user = message.mentions.users.first();
    
    let prefix = config.prefix; 
    
    if(!member) return message.channel.send('Use: /Kick <jogador>')

    if(!member.kickable)
      return message.reply("eu não posso expulsar esse jogador, ele tem um cargo maior que o meu.")

    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Não foi informado."

    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author}, não consigo expulsar esse jogador, devido: ${error}`))
 
      message.channel.send(`${message.author}`)

      let pEmbed = new Discord.RichEmbed()
      
          .setTitle("Jogador Expulso:")
          .addField("Jogador expulso:", `<@${member.user.id}>`)
          .addField("Author:", `<@${message.author.id}>`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("#498bfa").setTimestamp()

          message.channel.send(pEmbed)

        const mutee = new Discord.RichEmbed()

         .setTitle('Punição')
         .setColor('#498bfa')
         .setDescription(`Jogador expulso: **${user}**\nAutor da punição: ${message.author}\nTipo de punição: Kick`) 

         let banschannel = message.guild.channels.find(`id`, "693162992308715630"); //<--- ID do canal que será enviado a mensagem de punição.
         if(!banschannel) return message.channel.send(":x: | Você deve informa o **ID** que será enviada a mensagem de punição. ");
  
         message.delete().catch(O_o=>{});

         banschannel.send(mutee)
          
}

exports.help = {
  nome : "Kick",
  descricao: "Achou alguém bagunçando ou atrapalhando no seu servidor? Não deixe-o fazer isso, use esse comando para expulsa-lo do servidor."
}