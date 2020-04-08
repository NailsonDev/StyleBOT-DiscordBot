const Discord = require("discord.js");
const fs = require("fs");
const cooldown = new Set()

exports.run = async (bot, message, args) => {
  
  if (cooldown.has(message.author.id)) {

    let cooldownemb = new Discord.RichEmbed()

    .setAuthor(`${message.author.username} espere...`, message.author.displayAvatarURL)
    .setDescription(`Você precisa esperar um pouco para executar novamente!`)
    .setColor(`#498bfa`)
    .setFooter(`Está bem, vou esperar. ⛔`)

    return message.channel.send(cooldownemb).then(message => {
     message.react('⛔') 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 3000);

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("você não tem permissão de `ADMINISTRATOR`");
  
  if(!args[0]) return message.channel.send('> Use: /setprefix <prefixo>')
          

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let embed = new Discord.RichEmbed()
 
 .setTitle('Prefixo do servidor foi alterado.')
 .setDescription(`Novo prefixo: ${args[0]}`)
 .setColor('ORANGE')
  message.channel.send(embed);

}

exports.help = {
  nome : "Setprefix",
  descricao: "Esse comando serve para alterar o prefixo do bot no servidor."
}