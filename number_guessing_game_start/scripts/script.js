// JavaScript Document

(function($) {
    'use strict';

    // get html elements
    var $num = $('#number-input');
    var $btn = $('#btn_enter_guess');
    var $out = $('#message_output');

    // Game state variables
    var randNum = genRandNum(1, 100);
    console.log(randNum); // cheat codeo
    var counter = 0;
    var isGameOver = false;

    // Event handlers
    $btn.click(function() {
        runGame();
    });

    // Game functions
    //

    function genRandNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function runGame() {
        if (isGameOver) {
            $out.html('Game over.. refresh to play again');
        } else {
            checkGuess();
        }
    }

    function checkGuess() {
        ++counter; // increase the counter
        var guess = $num.val();

        // validate guess
        var isNumValid = validate(guess);
        if (isNumValid) {
            if (guess < randNum) {
                $out.html("Too Low");
            } else if ( guess > randNum) {
                $out.html("Too High");
            } else {
                endGame();
            }
        }
    }

    function validate(theGuess) {
        if(!$.isNumeric(theGuess)) {
            $out.html("Please enter a numeric guess");
            return false;
        } else if (theGuess < 1 || theGuess > 100) {
            $out.html("Please enter a numeric guess between 1 and 100");
            return false;
        } else {
            return true;
        }
    }

    function endGame() {
       isGameOver = true;
       if (counter === 1) {
            $out.html("Wow first guess");
       } else if (counter < 5) {
            $out.html("Not bad it took you " + counter + " guesses");
       } else {
            $out.html("So so..it took you " + counter + " guesses");
       } 
    }

})(jQuery);


