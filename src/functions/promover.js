const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Você não tem permissão para isso.");

 
    let membro = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(!membro) return message.channel.send('Use: /promover <nick> <cargo>')
    let cargo = args.join(" ").slice(22);
    if(!cargo) return message.channel.send('Use: /promover <nick> <cargo>');

    const role1 = message.guild.roles.find('name', cargo);
     if(!role1) return message.channel.send('Esse cargo não existe.')

     if(membro.roles.has(role1.id)) return message.reply("Não consegui promover esse jogador.");
     await(membro.addRole(role1.id));

    message.delete(0);

    let embed = new Discord.RichEmbed()

    .setTitle(`Promovido:`)
    .setDescription(`O jogador ${membro} foi promovido à ${cargo}`)
    .setColor('#498bfa')
    .setFooter(bot.user.username, bot.user.avatarURL)

  if(cargo === 'Ajudante'){

    message.channel.send(embed)
    membro.addRole(role1)

  }else if(cargo === 'Moderador'){
    message.channel.send(embed)
    membro.addRole(role1)

  }else if(cargo === 'Administrador'){

    message.channel.send(embed)
    membro.addRole(role1)

  }else if(cargo === 'Gerente'){

    message.channel.send(embed)
    membro.addRole(role1)

  }else if(cargo === 'Diretor'){

    message.channel.send(embed)
    membro.addRole(role1)

  }else if(cargo === 'Master'){

    message.channel.send(embed)
    membro.addRole(role1)

  }else{
    message.channel.send(embed)
};


}

exports.help = {
  nome: "Promover"
}