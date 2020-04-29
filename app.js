require('dotenv').config();
const config =  require('./config/config').config(); //execting the module exported
const Discord = require('discord.js');

const bot = new Discord.Client();

//help function
const helpFunction = require('./src/functions/help/helpFunction');

//player functions
const createPlayer = require('./src/functions/player/createPlayer');
const deletePlayer = require('./src/functions/player/deletePlayer');
const getPlayer = require('./src/functions/player/getPlayer');

//player's health functions
const decreaseHealth = require('./src/functions/healthControl/decrease');
const increaseHealth = require('./src/functions/healthControl/increase');

//initializer bot
bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}!`));

//Bot listening to the new messages
bot.on("message", msg => {
    let sentUser = msg.author.username ? msg.author.username: msg.member.user.username;
    let msgSent = msg.content.split(" "); //set username and msgSent words array
    //bot command functions
    if(msgSent.length === 3){
        if(msgSent[0] === "/createPlayer") createPlayer(msg, msgSent)
    }

    if(msg.content === "/help") helpFunction(msg, sentUser);
    if(msg.content === "/getPlayers") getPlayer.getAll(msg, msgSent);
})

bot.login(process.env.DISCORD_TOKEN);