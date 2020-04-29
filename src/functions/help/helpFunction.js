module.exports = (msg, sentUser) => {
    msg.reply(
        `
        ** Olá humanos, olá ${sentUser}.** \n
        Sou a Enfermeira Joy e sirvo para auxiliar em seus jogos de RPG neste servidor. Comigo você pode criar e excluir personagens, informar sua Vida Base, controlar aumento e diminuição de vida. Tente:

        /createPlayer         **nome-do-usuario/vida-base**  Ex: /createPlayer mablds/15
        /deletePlayer         **nome-do-usuario**                       Ex: /deletePlayer mablds
        /increaseHealth    **nome-do-usuario/vida-base**  Ex: /increaseHealth mablds/15
        /decreaseHealth   **nome-do-usuario/vida-base**  Ex: /decreaseHealth mablds/15
        `
    )
}