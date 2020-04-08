const Discord = require('discord.js');
const cooldown = new Set()

exports.run = async(bot, message, args) => {

     if(message.author.id == '604013925352079371'){

    if(!args[0]) return message.channel.send('Usa certo minha FIA, é /atirar <nickname>')
    
    if (cooldown.has(message.author.id)) {

            let cooldownemb = new Discord.RichEmbed()
        
            .setAuthor(`${message.author.username} : Pendente.`, message.author.displayAvatarURL )
            .setDescription(`Oi amiga, espere 1 minuto para enviar novamente :)`)
            .setColor(`#498bfa`)
            .setFooter(bot.user.username)
        
            return message.channel.send(cooldownemb)
            
            }
            cooldown.add(message.author.id);
            setTimeout(() => {
                cooldown.delete(message.author.id);
            }, 120000);

      const jogador = message.mentions.users.first();
     
       let embed = new Discord.RichEmbed()
       
       .setTitle(`${bot.user.username}`)
       .setDescription(`<@${message.author.id}> **deu um tiro em** ${jogador}`)
       .setColor('#498bfa')
       .setImage('https://i.imgur.com/TwcmQxd.gif')
       .setFooter(`${message.author.tag}`)

      message.channel.send(embed)

      setTimeout(() => {
        
        message.channel.send('> - @SrDeDO_: Socorro! Ela tá armada até os dentes caralho corre!')

     }, 1000)

    setTimeout(() => {
        
        message.channel.send('> - @SirDrexD: A não, corre beg!')

     }, 3000)
    setTimeout(() => {
        
        message.channel.send('> - @Niskyn: Não quero morrer AAAAAA!')

     }, 5000)

     } else {
         message.channel.send('> Apenas uma pessoa pode fazer isso.')
     };

     
 
}