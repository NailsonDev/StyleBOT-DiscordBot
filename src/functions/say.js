const Discord = require('discord.js')
const fs = require('fs');
const config = require('../../config.json');

exports.run = async (bot, message, args, level) => {
   
    let member = args.slice(0).join(" ");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão de `MANAGE_MESSAGES`")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }

    let prefix = prefixes[message.guild.id].prefixes; 
  
 if(!member) return;
           
   message.delete(0)
   
   let mensagem = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(mensagem); 
}

 
exports.help = {
  nome : "Say",
  descricao: "Esse comando irá fazer o bot escrever as mesma mensagens que a sua."
}