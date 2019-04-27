const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = process.env.BOT_PREFIX
bot.login(process.env.BOT_TOKEN);
var dispatcher;
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





bot.on('message', message => {
	if(message.conten[0] === prefix) {
		let splitMessage = message.content.split(" ");
		if(splitMessage[0] = "'play") {
			if(splitMessage.length === 2)
			{
				if(message.member.voiceChannel)
				{
					message.member.voiceChannel.join().then(connection => {
						dispatcher = connection.playArbitaryInput(splitMessage[1]);

						dispatcher.on('error', e => {
							console.log(e);
								});
						dispatcher.on('error', e => {
							dispatcher = undefined;
							console.log('fin du son');
								});
							});
						}
						else
							sendError(message, "Erreur, Vous devez d'abord rejoindre un canal vocal");
					}
					else
						sendError(message, "Erreur, Problème dans les paramètres");
				}
				else if(splitmessage[0] === "'pause") {
					if(dispatcher !== undefined)
						dispatcher.pause();
				}
				else if(splitmessage[0] === "'resume") {
					if(dispatcher !== undefined)
						dispatcher.resume();
			}
		}
	});









bot.on('message' ,function(message){
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
	if(command === 'grole'){
	message.delete()
		if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Désolé,Vous n'avez pas ma permission d'utiliser cette commande");
	let member = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);
		if(!member) return message.reply("il faut mentionner une personne pour lui ajouté un role");
	let role = args.join(" ").slice(22);
		if(!role) return message.reply("il faut mettre le nom d'un role :warning:");
	let grole = message.guild.roles.find('name', role);
		if(!grole) return message.reply("role introuvable :warning:");

		if(member.roles.has(grole.id)) return message.reply("L'utilisateur a déjà le role"), grole.name;
	member.addRole(grole.id);

		message.channel.send(`Role ajouté à ${member}`)
	}
});

bot.on('message', message => {
  if (!message.guild) return;
  if(!message.member.hasPermission("BAN_MEMBERS"));
  if (message.content.startsWith("'ban")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {

        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`${user.tag} a été banni`);
        }).catch(err => {
          message.reply(`${user.tag}vous ne pouvez pas bannir`);
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});

bot.on('message', function(message) {
    if(message.content.includes(prefix + 'clear')){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission");
			let args = message.content.split(" ").slice(1);
	if(!args[0]) return message.channel.send("Vous n'avez pas défini le nombre de messages a supprimer")
			message.delete()
			message.channel.bulkDelete(args[0]).then(() => {
			
			})
		}
	});

bot.on('message' ,function(message){
	if(message.content.includes(prefix + 'help')){
	message.delete()
   	 message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Bot invitation link",
    url: "https://discordapp.com/oauth2/authorize?bot_id=567819120708550735&permissions=8&scope=bot",
    fields: [{
        name: "ban",
        value: ".ban @user"
      },
      {
        name: "kick",
        value: ".kick @user"
		},
      {
        name: "clear",
        value: ".clear (nombre de message a supprimer)"
		},
      {
        name: "grole",
        value: "grole (@user @role)"
		},
      {
        name: "rrole",
        value: "rrole (@user @role))"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL
					}
				}
			})
		}
	});

bot.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  if(!message.member.hasPermission("KICK_MEMBERS"));

  // If the message content starts with "!kick"
  if (message.content.startsWith("'kick")) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`${user.tag} a été kick`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
      message.delete()
    }
  }
});


bot.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ')
        .setFooter('Nous sommes désormais :' + member.guild.memberCount)
    member.guild.channels.get('571478998211624962').send(embed) // METTRE LID DU CHANNEL
	let jrole = member.guild.roles.find('name', 'Membre');
    member.addRole(jrole)// METTRE LID DU ROLE
 
});
 
bot.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ')
        .setFooter('Nous sommes désormais :' + member.guild.memberCount)
    member.guild.channels.get('571478998211624962').send(embed)
 
});

bot.on('message' ,function(message){
	if(message.content.includes(prefix + 'mute')){
  message.delete()
  let mute_role = message.guild.roles.find("name", "Muted"); // this is where you can replace the role name
  let member = message.mentions.members.first();
  member.addRole(mute_role); // <- this assign the role
  setTimeout(() => {member.removeRole(mute_role);}, 900  * 1000); // <- sets a timeout to unmute the user.                                                     V this is where the URL or the local path goes                                    V
  message.channel.send(` ${member} a été réduit au silence pour 15 minutes.`, {file: "https://lumiere-a.akamaihd.net/v1/images/databank_forcechoke_01_169_93e4b0cf.jpeg"});
}
});

bot.on('message' ,function(message){
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
	if(command === 'rrole'){
	message.delete()
		if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Désolé,Vous n'avez pas ma permission d'utiliser cette commande");
	let member = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);
		if(!member) return message.reply("il faut mentionner une personne pour lui supprimé un role");
	let role = args.join(" ").slice(22);
		if(!role) return message.reply("il faut mettre le nom d'un role :warning:");
	let rrole = message.guild.roles.find('name', role);
		if(!rrole) return message.reply("role introuvable :warning:");

		if(!member.roles.has(rrole.id)) return message.reply("L'utilisateur n'a pas le role"), rrole.name;
	member.removeRole(rrole.id);

		message.channel.send(`Role enlevé de ${member}`)

		}
	});





bot.on('message' ,function(message){
	console.log(message.content);
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
