const Discord = require('discord.js')
const fs = require('fs');
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("você não tem permissão de `BANS_MEMBERS`")
    let member = message.mentions.members.first()

    const user = message.mentions.users.first();

    let prefix = config.prefix;  

     if(!member) return message.channel.send(`Use: ${prefix}banir <@Usuário> <Motivo>`)

        if(!member.bannable)
        return message.reply("Eu não posso banir esse usuário, ele pode ter um cargo maior que o meu.")

        let reason = args.slice(1).join(' ');

   let anuncioembed = new Discord.RichEmbed()
   anuncioembed.setColor("#4e2022")
   anuncioembed.setDescription(`Você está presta a banir o ${user.toString()} você tem certeza?`)
   anuncioembed.setTimestamp();
   
   return message.channel.send(anuncioembed).then(async msg => {
   
        await msg.react("✅") 
        await msg.react("❌")

       const a1 = (reaction, user) => reaction.emoji.name ==='✅' && user.id === message.author.id
       const b1 = msg.createReactionCollector(a1, { time: 3000000 });
      
       const a2 = (reaction, user) => reaction.emoji.name ==='❌' && user.id === message.author.id
       const b2 = msg.createReactionCollector(a2, { time: 3000000 });
       
       b1.on("collect", c1 => {
        msg.delete(anuncioembed)
        if(!reason) reason = "Não informado"
        member.ban(reason)

         .catch(error => message.reply(`Desculpe ${message.author} não consigo expulsar esse jogador, devido ao erro: ${error}`));

        let pEmbed = new Discord.RichEmbed()

        .setDescription(`O jogador ${user.toString()} foi banido. Motivo: ${reason}`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("#498bfa").setTimestamp()
        
         msg.channel.send(pEmbed)

         const banimento = new Discord.RichEmbed()

         .setTitle('Punição')
         .setColor('#498bfa')
         .setDescription(`Jogador punido: **${user}**\nAutor da punição: ${message.author}\nTipo de punição: Banimento.`) 

         let banschannel = message.guild.channels.find(`name`, "⭕┇denúncias"); //<--- ID do canal que será enviado a mensagem de punição.
         if(!banschannel) return message.channel.send(":x: | Você deve informa o **ID** que será enviada a mensagem de punição. ");
  
         message.delete().catch(O_o=>{});

         banschannel.send(banimento)

})
  b2.on("collect", c2 => {
    msg.delete(0) 
    
    })
})

}
exports.help = {
  nome : "Banir",
  descricao: "Um usuário está atrapalhando ou bagunçando no seu servidor? Não deixe use esse comando para banir ele."
}