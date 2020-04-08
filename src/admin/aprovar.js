
const Discord = require('discord.js');
const fs = require('fs')
const config = require('../../config.json')

exports.run =  async(bot, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("você não tem permissão de `MANAGE_MESSAGES`")
  
    const args1 = args.join(" ").slice(22);

    let membro = message.content.toLowerCase(22).split(' ')
    membro = message.mentions.users.first()
    

         message.reply('o jogador foi aceito com sucesso!')
    
         let embed = new Discord.RichEmbed()

        .setTitle(`⚠️ | Aviso`)
        .setDescription(`Olá ${membro}, você foi aceito nas novas seleções de novos ajudantes para a Rede.\nQuero dar meus parabéns a você! Mas primeiro quero saber se você quer realmente entrar na equipe! Caso queria clique no link abaixo para entrar em nosso grupo da equipe. Lá você vai ler todos os tópicos e também a introdução que é bem importate.`)
        .addField('Grupo:', '[Clique aqui para acessar o grupo da equipe](https://discord.gg/K9zV2nX)')
        .setColor('GREEN')
        .setFooter(`${membro.id}`)
        .setTimestamp()

        membro.send(embed).then(message => message.delete(120000))


}