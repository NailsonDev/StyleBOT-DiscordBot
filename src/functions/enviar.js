const Discord = new require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    message.delete()

    let video = args.join(" ")

    if(!video) return message.reply('Use: /enviar <URL>.')
    .then(msg => {
     msg.delete(5000)
    })

  
    let palavra = ['https://www.youtube.com/watch?v=', 'https://www.youtube.com']
    let texto = false;

     for(var i in palavra){
       if(message.content.toLocaleLowerCase().includes(palavra[i].toLocaleLowerCase())) 
        texto = true;
     }
  
     if(texto) {

        message.reply('Seu vídeo foi enviado com sucesso, iremos avisa-lo em breve! ✅')

        bot.channels.get("693840116132610108").send( // <- ID do canal que será enviado a sugestão.
           
            new Discord.RichEmbed()
    
            .setColor('#498bfa')
            .addField('▶️ Vídeo - YouTube', `Link: [Clique aqui para acessar](${video})`)
            .setThumbnail('https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png')
            .setFooter(`Canal do: ${message.author.username}`, `${message.author.displayAvatarURL}`))
            .then(async msg => {
    
        await msg.react('✅')
        await msg.react('❎')
    
       })
     } else {
         message.reply('Você deve fornecer um link válido do youtube.')
     }
    
    
}
