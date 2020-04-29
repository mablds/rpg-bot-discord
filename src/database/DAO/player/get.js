const Player = require('../../model/playersSchema');

module.exports = async () => {
    const playersInDB = await Player.find({});
    const existentsPlayers = playersInDB[0].players;
    return existentsPlayers;
}