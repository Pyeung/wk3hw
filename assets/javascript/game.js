
var winScore = 0
var LooseScore = 0
var tieScore = 0

var titleText = document.getElementById("titleText");
var playerChoiceText = document.getElementById("playerChoiceText");
var compChoicesText = document.getElementById("compChoicesText");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText")


var compChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


document.onkeyup = function(event) {

  var playerGuess = event.key;

  var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];


  // Below I tried to match player guess to computer choice in array, it does not work

  if ((playerGuess === compChoices.length)) {


    if (i = 0, i < compChoices.length, i++);
    console.log('Player guess is ', playerGuess); {
      wins++;
      // else {
      //   lossses++;
      }


      // Attempted to add text content to get by ID, something is not connecting. Nothing show on the HTML side

      titleText.textContent = "The Psychic Game!";
      playerChoiceText.textContent = "You chose: " + playerGuess;
      compChoicesText.texContent = "The computer chose: " + compGuess;
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
    }
  };



  