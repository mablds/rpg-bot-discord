const createPlayer = require('../../database/DAO/player/create')

module.exports = async(msg, msgSent) => {
    const playerInfo = {
        name: msgSent[1],
        health: msgSent[2]
    }

    msg.reply(await createPlayer(msg, playerInfo));
}