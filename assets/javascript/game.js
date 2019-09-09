<script>

var compChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.onkeyup = function(event) {
    
    var userGuess = event.key;

    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess == "a") || (userGuess == "b") || (userGuess == "c") || (userGuess == "d") || (userGuess == "e") || (userGuess == "f") ||  (userGuess == "g") || (userGuess == "h") || (userGuess == "i") || (userGuess == "j") || (userGuess == "k") || (userGuess == "l") ||    (userGuess == "m") || (userGuess == "n") || (userGuess == "o") || (userGuess == "p") || (userGuess == "q") || (userGuess == "r") ||    (userGuess == "s") || (userGuess == "t") || (userGuess == "u") ||(userGuess == "v") || (userGuess == "w") || (userGuess == "x") ||     (userGuess == "y") || (userGuess == "z")) {
​
    alert("User guess: " + userGuess);
    alert("Computer guess: " + computerGuess);
​
  }
};


</script>
