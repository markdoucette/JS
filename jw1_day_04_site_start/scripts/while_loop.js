// JavaScript Document

// create a variable for the 
// output text
var outputMessage = '';
		
// While loop

// Create a variable for the number
// var number = 10;

// Create a counter variable for the while loop
// var counter = 0;

// Run the code inside the curly braces until the variable "counter"
// is no longer less than or equal to "10"

// <= less than or equal to
// while(counter <= 10){
	
	// += will add to the current value of the 
	// var output message
	// outputMessage += number + ' ';
	
	// This is a shorthand way of writing
	// number = number - 1;
	// number--;
	
	// This is a shorthand way of writing
	// counter = counter + 1;
	// counter++;
	
// };

// Only display the output text if 
// the var outputMessage is 
// not equal to ''.

// !== not equal to
// if(outputMessage !== ''){
	// alert(outputMessage);	
// };

// Exercise script

var outputText = document.getElementById('p_16');

var colour = [];

colour[0] = 'red';
colour[1] = 'green';
colour[2] = 'blue';
colour[3] = 'purple';
colour[4] = 'orange';

var colourArrayLength = colour.length;

var counter = 0;

while(counter < colourArrayLength){

	outputText.innerHTML += colour[counter] + '<br />';
	
	counter++;	
	
}
















