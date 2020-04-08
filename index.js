const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
const links = require('./links.json');
const config = require('./config.json');
const fs = require('fs');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('keelta.json') 
const discloud = require("discloud-status");
const { admin, functions } = require('./comandos.js')
const db = low(adapter)

bot.commands = new Discord.Collection();
console.log('|SRC  |Status|')
console.log('|------------|')


 fs.readdir("./src/admin/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/admin/${file}`);
      let commandName = file.split(".")[0];
      console.log(`| ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });

  fs.readdir("./src/functions/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/functions/${file}`);
      let commandName = file.split(".")[0];
      console.log(`| ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
  
  fs.readdir("./src/help/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/help/${file}`);
      let commandName = file.split(".")[0];
      console.log(`| ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
bot.on('message', message => {
    responseObject = links;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
}); 

//{name: `Você gosta das minhas funções? Me adicione | -invite 📣`, type: 'STREAMING', url: 'https://twitch.tv/srdedo_'}, {name: `Me adicione no seu servidor!| -invite 📣`, type: 'PLAYING'}

bot.on('ready', () => {
    
    console.log(`Jogadores: ${bot.users.size} Canais: ${bot.channels.size} Servidores: ${bot.guilds.size}`)
     let status = [  
         {name: `jogar.stylenetwork.tk` , type: 'WATCHING'} 
     ]
         function setStatus() {
             let altStatus = status[Math.floor(Math.random()*status.length)]
             bot.user.setPresence({game: altStatus})
         }
         setStatus();
         setInterval(() => setStatus(), 10000)
 });

 bot.on('raw', async dados => {

  
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  
  if(dados.d.message_id != "693639150393622619") return

    let servidor = bot.guilds.get("693162584072781864")

    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('693639290231586837')
       
    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.name === "👽"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }
    }
  });

  bot.on('raw', async dados => {

  
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    
    if(dados.d.message_id != "694335078972784680") return
  
      let servidor = bot.guilds.get("693162584072781864")
  
      let membro = servidor.members.get(dados.d.user_id)
  
      let cargo1 = servidor.roles.get('693163637644460113')
         
      if(dados.t === "MESSAGE_REACTION_ADD"){
          if(dados.d.emoji.name === "✅"){
              if(membro.roles.has(cargo1)) return
              membro.addRole(cargo1)
          }
      }
    });

bot.on('message', message => { 
  
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return message.channel.send('Por favor use aqui: <#665303087262466048>');

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }

    let prefix = prefixes[message.guild.id].prefixes; 
    
    let mencionar = new Discord.RichEmbed()

    .setDescription(`🌐 **Olá <@${message.author.id}>, meu prefixo é \`${prefix}\`, caso tenha dúvida use \`${prefix}help\`** `)
    .setColor("#245fd3")

    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)){
      return message.channel.send(mencionar)
      
  
    } 

    let palavra = ['fdp', 'tmnc', 'pnc', 'filho da puta', 'filhodaputa', 'pau no cu', 'paunocu', 'seu viado', 'tomar no cu', 'vai tomar no cu', 'https://discord.gg/', 'serverlixo', 'server lixo', 'serve lixo', 'server faliu', 'serverfaliu', 'vsfd', 'vsf','seu preto', 'sua puta', 'arrombado', 'arromb', 'arrombad', 'porra krl', ' seu cuzão'];
    let texto = false;

     for(var i in palavra){
       if(message.content.toLocaleLowerCase().includes(palavra[i].toLocaleLowerCase())) 
        texto = true;
     }
  
     if(texto) {
         
         bot.channels.get('693162992308715630').send('**O jogador** ' + '<@'+ message.author.id +'>' +` **foi reportado cujo id é: \`${message.author.id}\`, prova**: ` + '\`'+message.content + '\`')
         message.delete()
         message.channel.send(`> ⚠️ Alerta: <@${message.author.id}>, você quebrou uma das nossas regras, iremos reportar você para um superior.`)
         .then(message => {
             message.delete(10000)
         })
     }


    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    let arquivocmd = bot.commands.get(command.toLowerCase().slice(prefix.length));
  
    if(arquivocmd) return arquivocmd.run(bot, message, args);
    
    if(message.content.startsWith(prefix + 'info admin')){

      let embed = new Discord.RichEmbed()
      .setTitle('Comandos De Admin')
      .setColor('#498bfa')
      .setDescription(`\`${admin}\``)

      message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + 'info functions')){

      let embed = new Discord.RichEmbed()
      .setTitle('Comandos De Functions')
      .setColor('#498bfa')
      .setDescription(`\`${functions}\``)

      message.channel.send(embed)
    }
  })

bot.login(config.token)