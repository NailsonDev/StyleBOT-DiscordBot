const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
       if(message.guild === null)return;

  let jogador = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("você não tem permissão de `MUTE_MEMBERS`");

  let mutetime = args[1];
  
  if(!mutetime) return message.channel.send('Use: /mute <jogador> <1s/h>');

  if(!jogador) return
  
  let muterole = message.guild.roles.find(`name`, "Mutado");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mutado.",
        color: "#4e2022",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  await(jogador.addRole(muterole.id));
  message.react('✅')

  let user = message.mentions.users.first();

  bot.channels.get("674043752951840828").send( // canal onde vai notificar aos usuários.

    new Discord.RichEmbed()

    .setTitle(`${message.guild.name}`)
    .setDescription(`O jogador ${user.toString()} Foi silenciado por: **${ms(ms(mutetime))}** `)
    .setColor('#498bfa')
   )

  let mute = new Discord.RichEmbed()

   mute.setTitle(`Olá, você foi punido: `, message.guild.name)
   mute.setDescription(`Olá prezado, você foi silenciado no servidor **${message.guild.name}**.`)
   mute.addField("Tipo de puniçao", `Mute`)
   mute.addField("Tempo restante:", `Falta: **${ms(ms(mutetime))}**`)
   mute.addField("Autor da punição:", message.author)
   mute.addField("ID da punição: ", `${user.id}`)
   mute.setThumbnail(message.guild.iconURL)
   mute.setColor('#498bfa')
   mute.setFooter(`${bot.user.username} - Moderação.`, message.client.user.avatarURL)
  jogador.send(mute)

  const mutee = new Discord.RichEmbed()

         .setTitle('Punição')
         .setColor('#498bfa')
         .setDescription(`Jogador punido: **${user}**\nAutor da punição: ${message.author}\nTipo de punição: Mute`) 

         let reportschannel = message.guild.channels.find(`id`, "693162992308715630");
         if(!reportschannel) return message.channel.send(":x: | Não consegui achar o chat `denúncias-logs`.");
  
         message.delete().catch(O_o=>{});

         reportschannel.send(mutee)
         
        
         

  setTimeout(function(){

    jogador.removeRole(muterole.id);
    message.channel.send(`<@${jogador.id}>, **não está mais silenciado**! ⛔`);

    let mute1 = new Discord.RichEmbed()

    mute1.setTitle(message.guild.name)
    mute1.setDescription(`Olá **denovo**, só vim avisar que você não está mais silenciado no servidor **${message.guild.name}**!`)
    mute1.addField("Tipo de puniçao", `Mute`)
    mute1.addField("Motivo:", `Não informado.`)
    mute1.addField("Servidor:", `${message.guild.name}`)
    mute1.addField("ID da punição", `${user.id}`)
    mute1.setThumbnail(message.guild.iconURL)
    mute1.setColor('#498bfa')
    mute1.setFooter(`${bot.user.username} - Moderação.`, message.client.user.avatarURL)

    jogador.send(mute1);
  }, ms(mutetime));

}

exports.help = {
  nome : "Mute",
  descricao: "Com esse comando você vai fazer os usuários ficarem MUDOS, você acha que alguns usuários está falando de mais, você pode mutar o mesmo por alguns minutos ou até dias..."
}