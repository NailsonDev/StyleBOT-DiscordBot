
const Discord = require('discord.js');
const fs = require('fs')
const config = require('../../config.json')

exports.run =  async(bot, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("você não tem permissão de `MANAGE_MESSAGES`")
  
    const args1 = args.join(" ").slice(22);

    let membro = message.content.toLowerCase(22).split(' ')
    membro = message.mentions.users.first()
    
    let prefix = config.prefix;
          if(!args1[0])  return message.reply(`Use: ${prefix}alert <jogador> <aviso>`)

         message.reply('o jogador foi alertado com sucesso!')
    
         let embed = new Discord.RichEmbed()

        .setTitle(`⚠️ | Aviso`)
        .setDescription(`${args1}`)
        .setColor('#498bfa')
        .setFooter(`${membro.id}`)
        .setTimestamp()
        membro.send(embed)


}