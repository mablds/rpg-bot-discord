const getPlayers = require('../../database/DAO/player/get');

module.exports.getAll = async (msg) => {
    const players = await getPlayers(msg);
    let messageToReply = `\n\n`;
    if(typeof(players) === 'object'){
        players.forEach(element => {
            const emojis = element.health > 0 ? emojiQuantity(element.health) : ":ghost:";
            messageToReply += `**${element.name}**: ${element.health}  ${emojis}\n`
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
            const emojis = playerSelected.health > 0 ? emojiQuantity(playerSelected.health) : ":ghost:";
            msg.reply(`\n\n**${playerSelected.name}**: ${playerSelected.health}  ${emojis}`);
        } else {
            msg.reply(`Player ${msgSent[1]} não encontrado.`);
        }
    } else {
        msg.reply(`\n\n ${players}`);
    }
}

const emojiQuantity = (playerHealth) => {
    let response = "";
    for(let emojiQtd = 0; emojiQtd <= playerHealth; emojiQtd++){
        response += ":heart: "
    }
    return response;
}