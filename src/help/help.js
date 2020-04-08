const Discord = require('discord.js')
const fs = require('fs');
const config = require('../../config.json');

exports.run = (bot, msg, args) => {

    if (!args[0]) {
       
        let embed = new Discord.RichEmbed()

        let prefix = config.prefix;
         
        embed.setAuthor(bot.user.username, bot.user.avatarURL)
        embed.setTitle('Comandos / Suporte / Ajuda.')
        embed.setDescription(`Olá <@${msg.author.id}>, aqui estão todas minhas funcionalidades. Temos no total de **${bot.commands.size}** comandos para você explorar!`)
        embed.addField(`Como usar.`, `\` ${prefix}help <nomeComando>\`\n\n**Categorias:**\n▫️ **${prefix}info \`admin\`\n▫️ ${prefix}info \`functions\`**\n\nComandos mais usados:\n **▫️ ${prefix}aplicação** - Fazer aplição do jeito mais rápido\n**▫️ ${prefix}requisitos** - Todos os requisitos da tag YouTube\n **▫️ ${prefix}form** - Formulário Google\n**▫️ ${prefix}sugestão** - Sugestão para o servidor`)
        embed.setColor(`#498bfa`)
        embed.setFooter(`Versão atual: 13.4.6`)
        
       msg.channel.send(embed)
  
    } else {

    let command = args[0];
    
    if(bot.commands.has(command)) {

      command = bot.commands.get(command);

      let naoDefinido = 'Esse comando ainda não tem uma descrição definida.'; // Descrição do comando.
      let simDefinido = command.help.descricao;

      let nomeNaoDefinido = 'Não definido.'; // Nome do comando.
      let nomeSimDefinido = command.help.nome;

      let nome = command.help.nome ? nomeSimDefinido : nomeNaoDefinido // Nome do comando
      let descricao = command.help.descricao ? simDefinido : naoDefinido // Descrição do comando.

      let embed1 = new Discord.RichEmbed() 
  
      embed1.setTitle(`Comando: ${nome}`)
      embed1.setColor(`#498bfa`)
      embed1.setFooter(`${bot.user.username}`, `${bot.user.avatarURL}`)
      embed1.addField(`Descrição:`, `${descricao}`)
      embed1.setTimestamp()

      msg.channel.send(embed1)
     
      
}else {
  let dados = '> Não conseguir achar esse comando no meu banco de dados... 😩'; // caso não ache o comando.
  msg.channel.send(dados)
}
 }
  }


exports.help = {
  nome : "Help",
  descricao: "Esse comando server para poder visualizar outros comandos."
}