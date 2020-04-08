const Discord = require('discord.js');
const config = require('../../config.json')
const cooldown = new Set();

exports.run = async(bot,message,args) => {
 let prefix = config.prefix;

       message.react('✅')

       let embed1 = new Discord.RichEmbed() 

      .setTitle(`Olá ${message.author.username}`)
      .setDescription('Para ter uma boa aplicação, você deve fornecer ao **máximo sobre você**, e nos conte **o por que deseja fazer parte da nossa equipe**! Não aceitamos aplicações sem **formalidade**, você deve mostrar total responsabilidade sobre seu ato. Ao executar o comando, queremos que você escreva ao máximo sobre você! Fale seus pontos positivos e negativos, diga-nos por que você acha que seria adequado para essa equipe!\n**Bom, aqui está todas as perguntas, responda com calma e fale sobre você o máximo possível! Boa sorte.**')
      .addField(`Seu ID foi registrado, por tanto evite criar novas aplicações recentemente:`, + message.author.id) 
      .setTimestamp()
      .addField(`Rascunho:`, `Isso é um rascunho, você deve usar isso quando for se aplicar! **Use: ${prefix}aplicar <Sua aplição respondida na ordem>**`)
      .addField('1° pergunta:', `\`Qual seu nome?\``)
      .addField(`2° pergunta:`,`\`Qual sua idade?\``)
      .addField(`3° pergunta:`,`\`Defina maturidade para você!\``)
      .addField(`4° pergunta:`,`\`Defina responsabilidade para você!\``)
      .addField(`5° pergunta:`,`\`Fale sobre você!\` \n(Escreve no minímo 5 linhas sobre você e seus desejo na equipe)`)
      .addField(`Digite o comando:`,`\`${prefix}aplicar <Sua aplição com todas respostas\``)
      .addField('Alternativa:', `Caso não queria fazer o formulário do Discord, use o do Google: [Clique aqui](http://abre.ai/formulariostyle)`)
      .setColor('#498bfa')
      .setFooter('Equipe - Style Network')
        
      message.member.send(embed1);

} 

exports.help = {
    name: "Equipe", 
    descricao: null
}