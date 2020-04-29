const deletePlayer = require('../../database/DAO/player/delete');

module.exports = async (msg, msgSent) => {
    const deletando = await deletePlayer(msg, msgSent);
    msg.reply(deletando)
}