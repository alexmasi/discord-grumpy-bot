const Discord = require('discord.js');
const client = new Discord.Client();
const jsonfile = require('jsonfile');
var Wins = require('./wins.json')
var Auth = require('./auth.json');

client.login(Auth.client_id);

client.on('ready', () => {
  console.log('I am ready!');
});

// log
client.on('message', message => {
  console.log('[' + message.createdTimestamp + ']' +
              message.author.username + ': ' + message.content);
});

// ping
client.on('message', message => {
  if (message.content === '!ping') {
    message.reply('pong');
  }
});

// hi
client.on('message', message => {
  if (message.content === '!hi') {
    message.reply('Shut up');
  }
});

// map
client.on('message', message => {
  if (message.content === '!map') {
    const embed = new Discord.RichEmbed()
      .setTitle("A loot map for PUBG")
      .attachFile("pubg-map.jpg");
    message.channel.send({embed});
  }
});

// win
client.on('message', message => {
  if (message.content === '!win') {
    Wins.wins++;
  }
});

// wins
client.on('message', message => {
  if (message.content === '!wins') {
    message.channel.send(Wins.wins);
  }
});

// tell
client.on('message', message => {
  if (message.content.startsWith === '!tell') {
    var arr = message.content.split(' '),
        result = arr.splice(0,2);
    result.push(arr.join(' '));
    message.channel.send(result[1] + ' ' + result[2]);
  }
});

// greet
client.on('guildMemberAdd', member => {
  member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);
});
