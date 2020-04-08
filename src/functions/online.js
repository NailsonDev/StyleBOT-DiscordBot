
const superagent = require("snekfetch");
const Discord = require('discord.js')

const fs = require('fs');
const config = require('../../config.json');

exports.run = async (bot, message, args) => {
                                              //  coloque em baixo  //  
    superagent.get('https://api.mcsrvstat.us/2/jogar.redetwisty.tk') ////// <- Coloque o IP do seu servidor 
        .end((err, response) => {

            let online1 = 'Sim!'
            let offline1 = 'Não!'

            let On = response.body.online ? online1 : offline1

            let version1 = 'Não disponível!'
            let version2 = response.body.version

            let Versionn = response.body.version ? version2 : version1

            let online = response.body.players.online
            let maximo = response.body.players.max
            
            const lewdembed = new Discord.RichEmbed()

                 .setTitle(`${message.guild.name}`)
                 .setDescription(`**Online**: ${On}\n**Versão**: ${Versionn}\n**Jogadores**: **${online}** / **${maximo}**`)
                 .setColor('#498bfa')
                 .setThumbnail(`https://api.mcsrvstat.us/icon/jogar.redetwisty.tk`)
                 .setTimestamp()
                 .setFooter(bot.user.username)
                  message.channel.send(lewdembed)
                }).catch(O_o => {
                  message.channel.send('> Não estou conseguindo sicronizar meu banco de dados com o IP, alguém colocou um IP inexistente no meu sistema.')
                })
               }
exports.help = {
    nome : "Stats",
    descricao: null
  }