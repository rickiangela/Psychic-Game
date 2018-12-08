var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log("Computer: " + computerChoice);



document.onkeypress = function (event) {

var userGuess = event.key;

console.log("User: " + userGuess);

guessesSoFar.push(userGuess);

console.log("Guesses so far:" +guessesSoFar);



if (userGuess === computerChoice && guesses != 0){
    
    wins++;
    guesses = 11;
    guessesSoFar = [];

    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log("Computer: " + computerChoice);
}
if (userGuess != computerChoice && guesses != 0) {
    guesses--;
}

if (guesses === 0) {
    losses++
    guesses = 10;
    guessesSoFar = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
}

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guesses-left').innerHTML = "Guesses left: " + guesses;
document.getElementById('guess-so-far').innerHTML = "Guesses so far: " + guessesSoFar;

}