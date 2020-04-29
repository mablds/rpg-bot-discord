const Player = require('../../model/playersSchema');

module.exports = async (msg, msgSent) => {
    const playersInDB = await Player.find({ guild: msg.channel.guild.id });
    const userToDelete = msgSent[1];
    const playersObj = playersInDB[0].players;
    const playersAfterExclusion = playersObj.filter(el => el.name !== userToDelete);
    try {
        if(playersInDB.length === 0) return 'Nenhum player cadastrado no seu servidor.'
        if(playersInDB.length === 1) {
            if(playersObj.find(el => el.name == userToDelete))
            await Player.findByIdAndUpdate(playersInDB[0]._id, { players: playersAfterExclusion });
            return `\nAdeus **${userToDelete}** :wave:. \nPlayer excluído com sucesso.`
        }
        if(playersInDB.length > 1) return 'Contate o responsável pelo Bot. Algo que não cheira bem foi encontrado. Em /help tem os contatos daquele gord... digo, do responsável.'
    } catch (err) {
        console.log(err)
        return err;
    }
}