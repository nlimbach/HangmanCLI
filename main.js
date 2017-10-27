var inquirer = require("inquirer");
var createWord = require("./CreateWord");
var underscores = ["_ "];
var NewWord = new createWord;
var wordLength;
// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
            {
                type: "confirm",
                message: "Are you ready to play hangman?",
                name: "playGame"
            }
        ])
    .then(function(inquirerResponse) {
    if (inquirerResponse.playGame) {

        NewWord = NewWord.selectWord;
        wordLength = NewWord.length;
        console.log(NewWord);

        console.log("Let's play! Guess the word. You only have " + NewWord.length + " guesses. If you guess the word correctly, then you win!");

        for(var i = 1; i < NewWord.length; i++) {
            underscores.push("_ ");
        }

        console.log(underscores.join(" "));


        playGame();
    }
    else {
        console.log("Thats okay, you can play later.")
    }

});

function playGame(){
    //Make user guess letter
    inquirer
        .prompt([
            // Here we create a basic text prompt.
            {
                type: "input",
                message: "Input Letter: ",
                name: "letter"
            }
        ])

        .then(function(Letter) {

            var userGuess = Letter.letter;

            if (NewWord.indexOf(userGuess) >=0 ){
                var userGuessIndex = NewWord.indexOf(userGuess);
                underscores[NewWord.indexOf(userGuess)] = userGuess;

                // if userGuess occurs multiple times, replace each underscore with userGuess
                for (var i = 1; i < count(NewWord, userGuess); i++) {
                    var wordWithoutOccurance;

                    wordWithoutOccurance = NewWord.substr(0, userGuessIndex) + NewWord.substr(userGuessIndex + 1);
                    var findNewIndex = wordWithoutOccurance.indexOf(userGuess);

                    underscores[findNewIndex + i] = userGuess;


                }
            }
            else{
                wordLength--;
                console.log("Wrong. You have " + wordLength + " guesses left.")
            }
            console.log(underscores.join(" "));

            if (underscores.indexOf("_ ") < 0 ) {
               console.log("congrats you win!")
            }
            else if(wordLength === 0){
                    console.log("you lose! you ran out of guesses")
                }
            else{
                playGame();
                }


        })
}

function count(string,char) {
    var re = new RegExp(char,"gi");
    return string.match(re).length;
}