# rpg-bot-discord

Discord bot created to manage RPG's character while play in discord servers.

## Wanna use this code as an example?
That's ok. This is not the best code evermade, but can give a pretty ideia about how this libs works. To install it and run in your machine, you'll need these things:

 - Node.js installed (with npm or yarn)
 - install dependencies (commando: yarn or npm install)
 - file named as .env with the following properties:
    - MONGO_URI="yourMongoURIverySecure" (if you want to create a free database with mongoDB use AtlasDB, very easy)
    - DISCORD_TOKEN="yourDiscordToken" (This token you generate when you create your bot on the Discord Developers page)

## Usage
You can use the bot as it is by adding it to your own Discord's server. You can do this by using [this URL](https://discord.com/oauth2/authorize?client_id=705550811991769089&permissions=8&scope=bot) or pasting this on your browser:

```https://discord.com/oauth2/authorize?client_id=705550811991769089&permissions=8&scope=bot```

After this, you only need to follow the steps. (You will need to be logged on your account at the discordapp website.) Or, you can use my code to create your new Bot with new functionalities or delete some of them. Feel free!

**Pull requestes are welcome.**

## Functionalities
The commands was being structured using the "/" on the beggining. There only a few ones:
- /add {character-name} {base-health}
  
  ```/add Pirate 15```
- /del {character-name}
  
  ```/del Pirate```
- /showAll

  ```/showAll```
- /show {character-name}
  
  ```/show Pirate```
- /+h {character-name} {health-to-increase}
  
  ```/+h Pirate 10```
- /-h {character-name} {health-to-decrease}
  
  ```/-h Pirate 15```
- /help
    
## Resources
* [Express](https://expressjs.com/pt-br/api.html)
* [Discord.js](https://discordjs.guide/)
* [Heroku](https://devcenter.heroku.com/categories/reference)
