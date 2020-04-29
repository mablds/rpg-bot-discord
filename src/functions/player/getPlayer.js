const getPlayers = require('../../database/DAO/player/get');

module.exports.getAll = async (msg) => {
    const players = await getPlayers();
    console.log(players)
    let messageToReply = `\n\n`;
    
    players.forEach(element => {
        messageToReply += `**${element.name}**: ${element.health}   :heart:\n`
    });

    msg.reply(messageToReply)
}

module.exports.getOne = (msg, msgSent) => {
    
}