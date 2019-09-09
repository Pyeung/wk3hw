document.getElementById("guessLeft").innerHTML = 9;

var compChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.onkeyup = function(event) {
    
    var userGuess = event.key;

    var compGuess = compChoices[Math.floor(Math.random() * computerChoices.length)];

    function userWins () {
      for (i = 0, i < computerChoices, i++);
      console.log("Wins");
    }