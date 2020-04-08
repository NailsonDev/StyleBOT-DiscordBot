const Discord = require('discord.js')
const fs = require('fs')

exports.run = async(bot, message, args) => {

    let respostas = [
        'Grandidierite_',
        'Bomberman455',
        'ChikiSenpai',
        'Mikip123',
        'IBeJizzin',
        'Liamdt123',
        'BIGGOODHAZZAGANG',
        'KelssTwin',
        'iSweekZ',
        'Fyza',
        'mjburns24',
        'Heinz_Josef',
        'yudikodama',
        'Sagenether_star',
        'Npc_Size',
        'LCLeebear',
        'Sirenas',
        'JoniHo',
        'FartAfk31',
        '00Asa00',
        'sxcked',
        'GonWyte',
        'StarGirl2336',
        'xXMagic_KratosXx',
        'BierLuder',
        'Killer215',
        'Zippo1',
        'hawman',
        'smokedbyravn',
        'leagueOfLewdog',
        'Grima16',
        'Aethiest',
        '40clip',
        'Hy_KaK_TaK',
        'blumiger',
        'BigWhopper',
        'Kumakyuu',
        'Hozki_',
        'amoliik',
        'SupremeEgg',
        'EnjoyMyCorona',
        'AbelI',
        'Nice_SuXiaZ',
        'DiegoRigales',
        'aurallity',
        'Rebranding',
        'Naty_SmilePvP',
        'GraunT',
        'BenAksln',
        'FI5PEKTIK',
        'Navy_Stickman',
        'lilLaceeh',
        'ZlaaBiaa_',
        'giugno93',
        'I_Like_Addison',
        'Okocal',
        'xDIVIN3x',
        'Dakorr_',
        '0k4mi_',
        'priestly',
        'JavLuvsIsa',
        'sylwiakula',
        'BulbiXXX51377081',
        '_Libe',
        'Mayanese',
        'zMasterG4mer_',
        'FireFlash_01',
        'Annoyingg',
        'dross666',
        'KennyCMc',
        'MasterY4Y',
        '______Knck______',
        'StivenMC',
        'PeeMan_Official',
        'Narutez',
        'Rifelez'
    ]
    
    message.reply('aguarde... Estou gerando uns nomes aleatório para você.')
    .then(message => message.delete(7000))
    
setTimeout(() => {

    let gerador = respostas[Math.floor(Math.random()* (respostas.length))] 
    let gerador2 = respostas[Math.floor(Math.random()* (respostas.length))] 
    let gerador3 = respostas[Math.floor(Math.random()* (respostas.length))] 
    let gerador4 = respostas[Math.floor(Math.random()* (respostas.length))] 
    let gerador5 = respostas[Math.floor(Math.random()* (respostas.length))] 
    let gerador6 = respostas[Math.floor(Math.random()* (respostas.length))] 
              
    let embed = new Discord.RichEmbed()

    .setTitle("Gerador de nicknames")
    .setDescription(`Aqui está alguns nicknames:\n **1:** \`${gerador}\`\n **2:** \`${gerador2}\`\n **3:** \`${gerador3}\`\n **4:** \`${gerador4}\`\n **5:** \`${gerador5}\`\n **6:** \`${gerador6}\` `)
    .setFooter(bot.user.username + ' - Gerador')
    .setColor('#498bfa')

    message.reply(embed).catch(error => message.channel.send(`Oshhh, deu merda em algum lugar do meu sistema! \`${error}\` ⚠️`))

}, 7000);
    
}

exports.help = {
 nome: "New",
 descricao: null
}