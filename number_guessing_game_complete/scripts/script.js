// JavaScript Document

// Global game variables
var ranNum = genRanNum(1,100);
console.log(ranNum)
var $numberInput = $('#number_input');
var $btnEnterGuess = $('#btn_enter_guess');
var $messageOutput = $('#message_output');
var counterGuess = 0;
var gameFinished = false;

// Click handler
$btnEnterGuess.click(function(){
	
	if(gameFinished === false){
		checkGuess();
	}else{
		$messageOutput.text('Game finished, refresh the page to play again');	
	}

});

// Game Functions

// Generate random number between two numbers (inclusive)
function genRanNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Check the Guess function
function checkGuess(){
  
  // Increase the guess counter by 1
  counterGuess++;
  
  // get value from the input element
  var guessedNum = $numberInput.val();
  console.log(guessedNum);
  
  // test if value entered is valid
  var numIsValid = validateGuess(guessedNum, $messageOutput);
  
  // Check Guess against random number
  if(numIsValid === true){
	if(guessedNum > ranNum){
		$messageOutput.text('To high, try a lower number');
	}else if(guessedNum < ranNum){
		$messageOutput.text('To low, try a higher number');	
	}else{
		endGame(counterGuess);		
	}
  } 

} // end checkGuess function

// Validate Guess function
function validateGuess(num, el){
	
	if($.isNumeric(num) === false){
		el.text('Please enter a valid number');
		return false;	
	}else if(num < 1 || num > 100){
		el.text('Please enter a number between 1 and 100');
		return false; 	
	}else{
		return true;	
	}
	
} // end validateGuess


// Game Finished function
function endGame(numberOfGuesses){
  
  gameFinished = true;
  
  if(numberOfGuesses === 1){
	  $messageOutput.text('Wow mind reader, you guessed correctly on your first guess');
  }else if(numberOfGuesses <= 5){
	  $messageOutput.text('Not bad it took you only ' + numberOfGuesses + ' guesses to guess the correct number');
  }else{
	  $messageOutput.text('You guessed correctly. It took you ' + numberOfGuesses + ' guesses to guess the correct number');
  }			
} // end gameFinished function

