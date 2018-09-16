

var inquirer = require("inquirer");
var chalk = require("chalk");

var answers = [
    "Harry Potter", "Ron Weasley", "Hermione Granger", "Albus Dumbledore", "Severus Snape", "Rubius Hagrid", "Remus Lupin", "Sirius Black", "Vernon Dursley", "Draco Malfoy", "Bellatrix LaStrange", "Lord Voldemort", "Tom Riddle",  "Ginny Weasley", "Neville Longbottom", "Luna Lovegood" 
];


var divider =
"\n\n";


var currentanswer;
var correctguess = 0;
var indexarray = [];
var remain = 10;



var guessLetter = function() {

    var wordarray = [];


        for (i=0; i<currentanswer.length; i++) {
            currentanswer.split("")
            wordarray.push(currentanswer[i]);
        }


        // console.log(wordarray);

        var emptyarray = [];

        for (j=0; j<wordarray.length; j++) {
            emptyarray.push("_");
        }

        console.log(emptyarray + divider);

    inquirer.prompt({
        type: "input",
        name: "letter",
        message: "Guess a letter!"
    }).then(function(userguess) {
        for (k=0; k<wordarray.length; k++) {
            if (userguess.letter === wordarray[k]) {
                correctguess++
                indexarray.push(k)
            }
        }

        if (correctguess > 0) {
            console.log(chalk.green("CORRECT!!!"));
            correctguess = 0;
            console.log(indexarray);
            for (l=0; l<indexarray; l++) {
                var current = indexarray[l]
                a = a.emptyarray[current].replaceWith(wordarray[current]);
            }
            console.log(emptyarray)
            guessLetter();

        } else {
            console.log(chalk.red("\nINCORRECT!!!\n"));
            remain--;
            console.log(`Only ${remain} Guesses Remaining!\n`);
            if (remain === 0) {
                lose();
            } else {
            guessLetter();
            }
        }

        
    
    });
    

};



var newWord = function() {
var rand = Math.floor((Math.random() * answers.length) + 1);


currentanswer = answers[rand].toLowerCase();

console.log(currentanswer);

guessLetter();


};


function lose() {
    console.log("Looks like youve lost! Let's try that again shall we?");
    newWord();
};


newWord();
