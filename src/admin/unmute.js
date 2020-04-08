const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
  

  if(message.guild === null)return;

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!tomute) return message.channel.send('Use: /unmute <jogador>')

 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Você não tem permissão de `MANAGE_MESSAGES`");
  

  let muterole = message.guild.roles.find(`name`, "silenciado")

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mutado.",
        color: "#498bfa",
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

  let mutetime = args[1];

  await
  message.channel.send(`<@${tomute.id}> **não está mais silenciado**!`)
  (tomute.removeRole(muterole.id)).catch(O_o => {});

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> **não está mais silenciado**!`);
  }, ms(mutetime)).catch(O_o => {});


}

exports.help = {
  nome : "Unmute",
  descricao: "Você acha que aplicou uma punição injusta? Não problemas, você pode usar esse comando para desmuta um jogador e fazer ele falar novamente. (Risos)"
}