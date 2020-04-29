const Player = require('../../model/playersSchema');

module.exports = async (msg, playerObj) => {
    try {
        const playerExistsAlready = await Player.find({});
        if (playerExistsAlready.length > 1) return 'Contate o administrador. Utilize o comando /help para as informações de contatao';
        
        const playersArray = playerExistsAlready[0].players;
        if(!playersArray.find(el => el.name === playerObj.name)) {
            playersArray.push(playerObj);
        } else {
            return 'Player já criado!';
        }

        await Player.findByIdAndUpdate(playerExistsAlready[0]._id, { players: playersArray })
        return `Player ${playerObj.name} criado`;
    }  catch(err) {
        console.log(err)
        return 'Algum erro de comunicação no processo de criação de personagem ocorreu. Tente novamente. Ou contate o responsável. Informações de contato em /help';
    }
}