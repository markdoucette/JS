// JavaScript Document

var btn05 = document.getElementById('btn_05');
var ranNum = genRanNum();

btn05.onclick = checkGuess;
	
function genRanNum(){
	
	// set low value
	var lowValue = 97;
	
	// set high value 
	// We add 1 to the high value
	// because Math.floor will 
	// always round down, which
	// means that the high value
	// will never be selected
	// unless we add 1 to the 
	// highValue's value
	var highValue = (100) + 1;
		
	var randomValue = Math.floor( Math.random() * (highValue - lowValue)) + lowValue;
	console.log(randomValue);
	return randomValue;
		
};

alert(lowValue);

function checkGuess(){
	
	var numberOfGuesses = parseFloat(document.getElementById('number_of_guesses').innerHTML);
	var returnNumberOfGuesses = document.getElementById('number_of_guesses');
	
	//alert(numberOfGuesses);
	
	var guessNum = parseFloat(document.getElementById('guess').value);
	var returnMes = document.getElementById('return_message');
	
	// if statement for checking the following:
	//
	//    1. Is the value a number
	//    2. Is the value less than zero or greater than 100
	//    3. Is the value less than the random number
	//    4. Is the value greater than the random number 
	//
	//    If all of the above returns false than the user 
	//    guessed correctly 
	
	if( isNaN(guessNum) ){
	
		returnNumberOfGuesses.innerHTML = numberOfGuesses + 1;
		returnMes.innerHTML='You did not enter a number';
			
	}else if( (guessNum < 0) || (guessNum > 100) ){
		
		returnNumberOfGuesses.innerHTML = numberOfGuesses + 1;
		returnMes.innerHTML='You chose a number less than zero or greater than 100';
				
	}else if( guessNum < ranNum ){
	
		returnNumberOfGuesses.innerHTML = numberOfGuesses + 1;
		returnMes.innerHTML='choose a higher number';	
				
	}else if( guessNum > ranNum ){
		
		returnNumberOfGuesses.innerHTML = numberOfGuesses + 1;
		returnMes.innerHTML='choose a lower number';
			
	}else{
		
		returnNumberOfGuesses.innerHTML = numberOfGuesses + 1;
		totalGuesses = numberOfGuesses + 1;
		
		if( totalGuesses == 1){
			returnMes.innerHTML='Wow mind reader!<br /><br />You guessed correctly.';
		}else if( totalGuesses <= 5 ){
			returnMes.innerHTML='Pretty good!<br /><br />You guessed correctly.';
		}else{
			returnMes.innerHTML='Ok!<br /><br />You guessed correctly.';	
		}
		
	};
	
};























