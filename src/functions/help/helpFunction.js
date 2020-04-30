module.exports = (msg, sentUser) => {
    msg.reply(
        `
        ** Olá humanos, olá ${sentUser}.** \n
        Sou a Enfermeira Joy e sirvo para auxiliar em seus jogos de RPG neste servidor. Comigo você pode criar e excluir personagens, informar sua Vida Base, controlar aumento e diminuição de vida. Tente:

        /add              Ex: **/add mablds 15**
        /del              Ex: **/del mablds**
        /showAll                 Ex: **/showAll**
        /show                  Ex: **/show mablds**
        /+h          Ex: **/+h mablds 15**
        /-h          Ex: **/-h mablds 15**

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