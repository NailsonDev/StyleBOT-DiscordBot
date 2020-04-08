
const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR');
const fs = require('fs');
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
  var mention = message.guild.member(message.mentions.users.first());


    if(!mention) return message.channel.send("> Use: /Userinfo <@Usuário>")

  let userlol = new Discord.RichEmbed()

   let total = mention.presence.status;

  userlol.setThumbnail(mention.user.avatarURL)
  userlol.setColor("#498bfa")
  userlol.setAuthor(message.author.username, message.author.avatarURL)
  userlol.setTitle(`Informações do usuário ${mention.user.username} 📲`)
  userlol.addField(`📥 Conta foi criada no dia:`, moment(mention.user.createdAt).format('LLL'))
  userlol.addField(`🔰 Primeiro login:`, moment(mention.user.joinedAt).format('LLL'))
  userlol.addField(`🏷 Cargos do usuário:`, mention.roles.filter((r) => r.name !== '@everyone').map((role) => role.name).join(', '))
  userlol.addField(`🌐 Status do ${mention.user.username}`, `${total}`)
  userlol.addField(`⚠️ Usuário:`, mention.user.tag)
  userlol.addField(`🔱 ID:`,mention.user.id)

  message.channel.send(userlol).catch(userlol)

}

exports.help = {
  nome : "Userinfo",
  descricao: "Com esse comando você saberá suas informações e de outros usuários."
}