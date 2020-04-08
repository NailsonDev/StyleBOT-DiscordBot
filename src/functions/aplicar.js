const Discord = require('discord.js');
const config = require('../../config.json')
const cooldown = new Set();

exports.run = async(bot,message,args) => {

    let aplicacao = args.join(" ")
    let prefix = config.prefix;

    if(!aplicacao) return message.reply(`Use: ${prefix}aplicar <respostas>`)
    
    if (cooldown.has(message.author.id)) {

    let cooldownemb = new Discord.RichEmbed()

    .setAuthor(`${message.author.username} : Pendente.`, message.author.displayAvatarURL )
    .setDescription(`Você já criou uma aplicação antes, espera até fazer novamente!`)
    .setColor(`#498bfa`)
    .setFooter(bot.user.username)

    return message.channel.send(cooldownemb)
    
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 72e+6);

message.reply('Sua aplicação foi enviada com sucesso! Evite criar outras, ou será negado!')

 let embed = new Discord.RichEmbed() 

 .setTitle(`Aplicação de: ${message.author.username}`)
 .addField(`ID do jogador:`, +'\`'+ message.author.id +'\`')
 .addField(`Formulário / Entrevista: `, `${aplicacao}`)
 .setColor('#498bfa')
 .setTimestamp()
 .setFooter('Equipe - Style Network')

     let aplica = message.guild.channels.find(`name`, "🔵┇aplicações"); //<--- ID do canal que será enviado a mensagem de punição.
     if(!aplica) return message.channel.send(":x: | Você deve informa o **ID** que será enviada a mensagem de aplição. ");

     message.delete().catch(O_o=>{});

     aplica.send(embed)
     .then(async message => {
        await message.react('✅')
        await message.react('❌')
      })

}