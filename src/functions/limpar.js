const Discord = require("discord.js");
const cooldown = new Set();
const fs = require('fs');
const config = require('../../config.json');

exports.run = (bot,message,args) => {
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

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão de `MANAGE_MESSAGES`");

    let mensagemDeletar = args.slice(0).join(" ");
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

        if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
            prefixes: config.prefix
          };
        }

        let prefix = prefixes[message.guild.id].prefixes; 

       if(!args[0]) return message.channel.send(`> Use: ${prefix}limpar <número>`)

let limpar = new Discord.RichEmbed()   

    if(isNaN(args[0])) return message.reply("indique a quantidade que deseja deletar.")   
    
    message.channel.bulkDelete(mensagemDeletar).catch(error => message.reply("algumas mensagens não pode ser deletadas, porque tem mais de 14 dias. <a:Demon_Smirk:637059545319079950>")); 

    limpar.setTitle(`${message.guild.name}`)
    limpar.setDescription(`Limpando **${mensagemDeletar}** mensagens do servidor, no canal **${message.channel}**\n**Autor**: ${message.author}`)
    limpar.setColor('#498bfa')
    limpar.setFooter('Essa mensagem será deletada automaticamente.')
    message.channel.send(limpar).then( message => {
        message.delete(20000)
    })

    //message.channel.send(`> Foram limpas **${mensagemDeletar}** mensagens. <a:GhostWave:637060941481246743>\n> <a:redealert:637058611948027923> Este chat foi limpo por ${message.author}.`)
      
}


exports.help = {
  nome : "Limpar",
  descricao: "Esse comando server para poder limpar o chat, evitar muitas mensagens desnecessárias."

}