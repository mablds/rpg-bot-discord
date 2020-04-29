require('dotenv').config();
const Discord = require('discord.js')

const bot = new Discord.Client()

//initializer bot
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.login(process.env.DISCORD_TOKEN)