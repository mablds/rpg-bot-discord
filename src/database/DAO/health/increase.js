const Player = require('../../model/playersSchema');

module.exports = async(msg, playerInfo) => {
    const playerExistsAlready = await Player.find({ guild: msg.channel.guild.id });
    const playersArray = playerExistsAlready[0].players;

    //se existe mais de um registro deste grupo no banco de dados
    if (playerExistsAlready.length > 1) return 'Contate o administrador. Utilize o comando /help para as informações de contatao';

    //se existe registro deste grupo no banco de dados
    if (playerExistsAlready.length === 1) {
        let lastHealth;
        let actualHealth;
        const userToIncrease = playersArray.forEach(element => {
            if(element.name === playerInfo.name) {
                lastHealth = element.health;
                element.health = parseInt(element.health) + parseInt(playerInfo.health);
                actualHealth = element.health;
            }
        });
        await Player.findByIdAndUpdate(playerExistsAlready[0]._id, { players: playersArray });
        return `\n${playerInfo.name}'s Health incrementada em ${playerInfo.health} com sucesso.\n${playerInfo.name}: ${lastHealth} + ${playerInfo.health} = ${actualHealth}`;
    }
}