const createPlayer = require('../../database/DAO/player/create')

module.exports = async(msg, msgSent) => {
    const playerInfo = {
        name: msgSent[1],
        health: parseInt(msgSent[2], 10)
    }

    // se for um numero valido
    if(!isNaN(playerInfo.health)) {
        msg.reply(await createPlayer(msg, playerInfo));
    } else {
        msg.reply('Dados de Vida inválidos. Por favor inserir números válidos.')
    }
}