function updateDOM(m, g) {
    titleText.innerText = m;
    playerChoiceText.textContent = "You chose: " + g.playerGuess;
    compChoicesText.texContent = "The computer chose: " + g.compGuess;
    winsText.textContent = "Wins: " + g.wins;
    lossesText.textContent = "Losses: " + g.losses;
}