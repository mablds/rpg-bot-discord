module.exports = (msg, sentUser) => {
    msg.reply(
        `
        ** Olá humanos, olá ${sentUser}.** \n
        Sou a Enfermeira Joy e sirvo para auxiliar em seus jogos de RPG neste servidor. Comigo você pode criar e excluir personagens, informar sua Vida Base, controlar aumento e diminuição de vida. Tente:

        /createPlayer              Ex: **/createPlayer mablds 15**
        /deletePlayer              Ex: **/deletePlayer mablds**
        /getPlayers                 Ex: **/getPlayers**
        /getPlayer                  Ex: **/getPlayer mablds**
        /increaseHealth          Ex: **/increaseHealth mablds 15**
        /decreaseHealth          Ex: **/decreaseHealth mablds 15**

        --------
        
        Pull requests são bem vindos:
        
        GitHub: https://github.com/mablds/rpg-bot-discord

        --------
        Contato:

        LinkedIn: https://www.linkedin.com/in/marcelo-arthur-701929175/
        Telegram: @mablds
        Twitter: https://twitter.com/meuconsagrado

        `
    )
}