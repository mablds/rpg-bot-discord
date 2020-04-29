const getPlayers = require('../../database/DAO/player/get');

module.exports.getAll = async (msg) => {
    const players = await getPlayers(msg);
    let messageToReply = `\n\n`;
    if(typeof(players) === 'object'){
        players.forEach(element => {
            messageToReply += `**${element.name}**: ${element.health}   :heart:\n`
        });
    } else {
        messageToReply += players;
    }
    msg.reply(messageToReply)
}

module.exports.getOne = async (msg, msgSent) => {
    const players = await getPlayers(msg);
    if(typeof(players) === 'object'){
        const playerSelected = players.find(el => el.name === msgSent[1]);
        if(playerSelected) {
            msg.reply(`\n\n**${playerSelected.name}**: ${playerSelected.health}  :heart:`);
        } else {
            msg.reply(`Player ${msgSent[1]} não encontrado.`);
        }
    } else {
        msg.reply(`\n\n ${players}`);
    }
}