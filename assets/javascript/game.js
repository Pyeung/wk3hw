
var game = {
  wins: 0,
  losses: 0,
  playerGuess: undefined,
  compGuess: undefined
};

//var wins = 10
//var losses = 5
var tieScore = 0

var titleText = document.getElementById("titleText");
var playerChoiceText = document.getElementById("playerChoiceText");
var compChoicesText = document.getElementById("compChoicesText");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText")


var compChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


document.onkeyup = function (event) {

  game.playerGuess = event.key.toUpperCase();
  console.log(game.playerGuess)

  game.compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
  console.log(game.compGuess)



  if (game.playerGuess === game.compGuess) {
    game.wins++;
    updateDOM("Found Match!", game);

  } else {
    game.losses++;
    updateDOM("No Match!", game);
  }

};

updateDOM("Play the game!", game);