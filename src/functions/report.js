const Discord = require('discord.js')

exports.run = async(bot, message, args) => {

    if(!args[0]) return message.channel.send('Use: /report <nickname> <motivo + prova>')
    
    message.reply('Seu reporte foi enviado com sucesso! Evite criar novos recentemente. ✅')
    message.delete(2)
    let jogador = message.mentions.members.first() || message.guild.members.get(args[0]);

    let cargo = jogador.roles.filter((r) => r.name !== '@everyone').map((role) => role).join(', ');

    let reason = args.join(" ").slice(22)

    let embed = new Discord.RichEmbed()

    .setTitle(`⚠️ | Aviso`)
    .setDescription(`Você foi alertado, alguém reportotu você no servidor! Evite quebrar as regras do servidor isso pode gerar futuras punições!`)
    .setColor('#498bfa')
    .setFooter(`${jogador.id}`)
    .setTimestamp()


    bot.channels.get("694653404886073445").send(

        new Discord.RichEmbed()

        .setTitle('Nova denúncia!')
        .setDescription(`O jogador ${jogador} foi reportado pelo motivo: \`${reason}\``)
        .setColor('#498bfa')
        .addField('Informações:', `Vitíma: **${message.author.tag}/${message.author.id}**\nCanal: ${message.channel}\n Cargo do usuário: ${cargo}\nID do jogador reportado: \`${jogador.id}\`\nServidor: **${message.guild.name}** `)
    
  ).then(async msg => {
    
    await msg.react('✅')
    await msg.react('❌')
    await msg.react('⚙️')

    const a2 = (reaction) => reaction.emoji.name ==='✅' 
    const b2 = msg.createReactionCollector(a2, { time: 300000 });

    const a3 = (reaction) => reaction.emoji.name ==='❌' 
    const b3 = msg.createReactionCollector(a3, { time: 300000 });

    b2.on("collect", c2 => { 
        msg.channel.send('> O jogador foi alertado com sucesso! ✅')
        jogador.send(embed)
        });
        
    b3.on("collect", c3 => { 
        msg.channel.send('> Reporte negado com sucesso! ✅')
         });
   })

}

exports.help = {
    nome: 'report',
    descricao: 'Use esse comando para reportar alguém.'
}