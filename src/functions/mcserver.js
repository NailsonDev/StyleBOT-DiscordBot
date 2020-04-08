
const superagent = require("snekfetch");
const Discord = require('discord.js')
const fs = require('fs');
const config = require('../../config.json');

exports.run = async (bot, message, args) => {


let prefix = config.prefix;


    if(!args[0])  return message.reply(`Use: ${prefix}mcserver <nomeDoServer>`)

    superagent.get(`https://api.mcsrvstat.us/2/${args}`)

        .end((err, response) => {

         
              
            let online1 = 'Online!'
            let offline1 = 'Offline!'

            let On = response.body.online ? online1 : offline1

            let version1 = 'Não disponível.'
            let version2 = response.body.version

            let Versionn = response.body.version ? version2 : version1

            let hostnamee = 'Não disponível.'
            let host1 = response.body.hostname

            let host = response.body.hostname ? host1 : hostnamee
            
            let online = response.body.players.online
            let maximo = response.body.players.max

            const lewdembed = new Discord.RichEmbed()

                 .setTitle(`Buscando por: ${args.join(" ")}`)
                 .setDescription(`**Status**: ${On}\n**Versão**: ${Versionn}\n**Jogadores**: \`${online}\` / \`${maximo}\`\n**IP**: \`${args}\`\n**Hostname**: \`\`\`${host}\`\`\``)
                 .setColor('#498bfa')
                 .setTimestamp()
                 .setThumbnail(`https://api.mcsrvstat.us/icon/${args}`)
                 .setFooter(bot.user.username)
                  message.channel.send(lewdembed)
                }).catch(O_o => {
                  message.channel.send('> Não consegui achar esse servidor.')
                })
              }

exports.help = {
    nome : "Mcserver",
    descricao: "Obterá algumas informações de um servidor."
  }