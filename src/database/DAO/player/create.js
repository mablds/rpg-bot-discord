const Player = require('../../model/playersSchema');

module.exports = async (msg, playerObj) => {
    try {
        const playerExistsAlready = await Player.find({ guild: msg.channel.guild.id });
        
        //se existe mais de um registro deste grupo no banco de dados
        if (playerExistsAlready.length > 1) return 'Contate o administrador. Utilize o comando /help para as informações de contatao';

        //se existe registro deste grupo no banco de dados
        if (playerExistsAlready.length === 1) { 
            const playersArray = playerExistsAlready[0].players;
            if(!playersArray.find(el => el.name === playerObj.name)) {
                playersArray.push(playerObj);
            } else {
                return 'Player já criado! Por um acaso eles são gêmeos?';
            }
            await Player.findByIdAndUpdate(playerExistsAlready[0]._id, { players: playersArray })
        }

        //se não encontrar nenhum registro deste servidor:
        if(playerExistsAlready.length === 0) {
            Player.create({
                guild: msg.channel.guild.id,
                players: [playerObj]
            })
        }

        return `\n Player ${playerObj.name} criado com sucesso!`;
    }  catch(err) {
        console.log(err)
        return 'Algum erro de comunicação no processo de criação de personagem ocorreu. Tente novamente. Ou contate o responsável. Informações de contato em /help';
    }
}