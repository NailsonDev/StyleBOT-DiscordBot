const Discord = new require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    message.delete()
    let sugestao = args.join(" ")

    if(!sugestao) return message.reply('**você precisa escrever sua sugestão**.')
    .then(msg => {
     msg.delete(5000)
    })

    message.reply('Sua sugestão foi enviada com sucesso!')

    bot.channels.get("693212131482665001").send( // <- ID do canal que será enviado a sugestão.

        new Discord.RichEmbed()

        .setColor('#498bfa')
        .addField('💡 Sugestão', `${sugestao}`)
        .setThumbnail()
        .setFooter(`Sugestão enviada por: ${message.author.username}`, `${message.author.displayAvatarURL}`))
        .then(async msg => {

    await msg.react('✅')
    await msg.react('❎')

   })
}
