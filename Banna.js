const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();
const kick = require("./kick.js");
const ban = require("./ban.js");
const help = require("./help.js");
const clear = require("./clear.js");
const mute = require("./mute.js");
const addrole = require("./addrole.js");
const removerole = require("./removerole.js");
const joinrole = require("./JoinRole.js");



var prefix = config.prefix
bot.login(config.token);

// https://discordapp.com/oauth2/authorize?client_id=567819120708550735&permissions=8&scope=bot 

// cd /storage/emulated/0/Documents/Banna










bot.on('ready' ,function(){
	console.log("le bot est connecté avec succès" )
	bot.user.setActivity ( " Bot ", { type : "STREAMING" })
	
	}) 

bot.on('message' ,function(message){
	if(message.content.startsWith('ping'))
	message.channel.send('pong')
	});



















bot.on('message' ,function(message){
	if(message.content.includes(prefix + 'off')){
	if(!message.member.hasPermission("ADMINISTRATOR")) { 
		return message.channel.send(" **Vous n'avez pas la permission d'uliliser cette commande.**")}
    		message.channel.send('**Banna : OFF**')
    		message.delete().then(bot.destroy())
    
		}
    })

bot.on('message' ,function(message){
	if(message.content.includes(prefix + 'exit')){
	if(!message.member.hasPermission("ADMINISTRATOR")) { 
		return message.channel.send(" **Vous n'avez pas la permission d'uliliser cette commande.**")}
    		message.delete()
            message.guild.leave();
    
		}
    })
