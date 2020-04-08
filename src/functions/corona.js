
const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    
    superagent.get('https://coronavirus-19-api.herokuapp.com/countries/brazil')

        .end((err, response) => {

        let confirmados = response.body.cases;
        let regiao = response.body.country;
        let hoje = response.body.todayCases;
        let mortes = response.body.deaths;
        let morteshoje = response.body.todayDeaths;
        let recuperados = response.body.recovered;
        let ativos =  response.body.active;
        let grave = response.body.critical;
        
        const corona = new Discord.RichEmbed()

        .setTitle(`${bot.user.username} - Coronavírus`)
        .setColor(`#498bfa`)
        .setDescription(`**Levem as mãos queridos! e se cuidem**.`)
        .addField('Estatística no Brasil:', `**Confirmados**: ${confirmados}\n **Hoje**: ${hoje}\n **Morte**s: ${mortes}\n **Mortes Hoje**: ${morteshoje}\n **Recuperados**: ${recuperados}\n **Ativos**: ${ativos}\n **Grave**: ${grave}`)

        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp()

     message.channel.send(corona)
   })	
}
exports.help = {
    nome : "Baka",
    descricao: "Comando de diversão, use esse comando para poder animar um pouco as coisas no seu servidor. Caso esteja com tédio, use ele para chamar os outros de Baka! (Idiota)"
  }