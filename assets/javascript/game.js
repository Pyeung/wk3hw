var winScore = 0
var LooseScore = 0
var tieScore = 0





var compChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function myGuess() {
  var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  var userGuess = document.onkeyup;

    if (userGuess === compGuess) {
      document.write("You're correct")
    }
}



  