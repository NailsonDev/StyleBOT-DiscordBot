const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()

    .setTitle(`Requisitos - YouTube`)
    .setDescription(`**Olá queridos, aqui estão os requisitos da tag YouTube**:\n\nTer no minímo:\n ▫️ **240 incritos;\n▫️ 50+ likes por vídeo;\n▫️ 250+ views em cada vídeo.**.`)
    .addField('Eu tenho os requisitos.', 'Caso você tenha os requisitos, basta você digitar `/enviar <link do vídeo>` e aguarda até alguém responder.')
    .setThumbnail('https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png')
    .setColor('#498bfa')
    .setFooter(bot.user.username, bot.user.avatarURL)

    message.channel.send(embed)

}

exports.help = {
  nome: "Promover"
}