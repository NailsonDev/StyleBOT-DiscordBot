exports.run = async (bot, message, args, level) => { // eslint-disable-line no-unused-vars
	
	const Discord = require('discord.js');
    

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Você não tem permissão de `ADMINISTRATOR` ");

  let member = args[0];

if(!member) return message.channel.send('Use: /unban <id>')

	const reason = args.splice(1, args.length).join(' ') || `Não informado.`;
  let user = message.mentions.users.first();
  
	message.guild.unban(member).then(() => {

        const embed = new Discord.RichEmbed()
        let icon = message.guild.iconURL

        embed.setColor('#498bfa')
        embed.setTimestamp()
        embed.setTitle(`Jogador despunido:`)
        embed.addField(`Usuário:`, `<@${member}>`)
        embed.addField(`Autor:`, `<@${message.author.id}>`)
        embed.addField(`Motivo:`, `${reason}`)
        embed.setFooter(`${bot.user.username}`);
		   message.channel.send(embed)
	})
    .catch(error => message.reply('Esse jogador não está banido.'));

    const unbann = new Discord.RichEmbed()

         .setTitle('Punição')
         .setColor('#498bfa')
         .setDescription(`Jogador despunido: **<@${args.join(" ")}>**\nAutor do desbanimento: ${message.author}`) 

         let banschannel = message.guild.channels.find(`name`, "⭕┇logs"); //<--- ID do canal que será enviado a mensagem de punição.
         if(!banschannel) return message.channel.send(":x: | Você deve informa o **ID** que será enviada a mensagem de punição. ");
  
         message.delete().catch(O_o=>{});

         banschannel.send(unbann)
};

exports.help = {
  nome : "Unban",
  descricao: "Com esse comando você pode desbanir usuários que estavam banidos... Apenas use caso ache que ele foi punido injustamente."
}