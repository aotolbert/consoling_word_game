

var inquirer = require("inquirer");
var chalk = require("chalk");

var answers = [
    "Harry Potter", "Ron Weasley", "Hermione Granger", "Albus Dumbledore", "Severus Snape", "Rubius Hagrid", "Remus Lupin", "Sirius Black", "Vernon Dursley", "Draco Malfoy", "Bellatrix LaStrange", "Lord Voldemort", "Tom Riddle",  "Ginny Weasley", "Neville Longbottom", "Luna Lovegood" 
];



var guessLetter = function() {
    inquirer.prompt({
        type: "input",
        name: "letter",
        message: "Guess a letter!"
    }).then(function(userguess) {

        
    });
    


    guessLetter();
};