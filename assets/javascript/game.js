var winScore = 0
var LooseScore = 0
var tieScore = 0

var playerChoiceText = document.getElementById("playerChoiceText");
var compChoicesText = document.getElementById("compChoicesText");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText")


var compChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


document.onkeyup = function(event) {

  var playerGuess = event.key;

  var compChoices = compChoices[Math.floor(Math.random() * compChoices.length)];

  if (playerGuess === compChoices) {

     (i = 0, i < compChoices.length, i++);
    console.log("Player win"); {
      wins++;
      // else {
      //   lossses++;
      // }

      playerChoiceText.textContent = "You chose: " + playerGuess;
      compChoicesText.texContent = "The computer chose: " + compGuess;
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
    }
  }
}


  