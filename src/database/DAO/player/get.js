const Player = require('../../model/playersSchema');

module.exports = async (msg) => {
    const playersInDB = await Player.find({ guild: msg.channel.guild.id });
    const existentsPlayers = playersInDB.length > 0 ? playersInDB[0].players : `Não há players registrados neste servidor. Crie algum player para iniciar o seu RPG ou volte para o servidor em que estava jogando.`;
    return existentsPlayers;
}