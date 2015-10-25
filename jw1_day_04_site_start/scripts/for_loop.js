// JavaScript Document

// var outputMessage = '';
	
// for loop

// create a variable for the number
// var number = 10;
	
// run the code inside the curly braces until 
// the variable "counter" is no longer less 
// than or equal to "10"

// The variable "i" is short for incrementer 
// and is commonly used in "for" loops but 
// this variable can have any name

// The "for" loop's condition statement is 
// divided into three parts:
//
//     1. var i = 0; - this is the counter 
//        variable commonly called "i" for 
//        "index" but could be a variable 
//        of any name              
//
//     2. i <= 10; - this is the condition 
//        which determines whether or not
//        to run the conditional code of 
//        the loop, if this statement is 
//        true then the conditional code 
//        is run, if it is false then 
//        the loop stops
//
//     3. i++ - increments the counter 
//        variable by "1", this prevents 
//        the for loop from running forever, 
//        which would cause a browser to 
//        hang. You do not have to increment 
//        the counter variable by "1", 
//        you can increment the counter 
//        by any number.  
  
// for( var i = 0; i <= 10; i++ ){

	// outputMessage += number + ' ';
	// number--;

// };

// if(outputMessage !== ''){
   // alert(outputMessage);	
// };

// Exercise script

var outputText = document.getElementById('p_18');

var colour = [];

colour[0] = 'red';
colour[1] = 'green';
colour[2] = 'blue';
colour[3] = 'purple';
colour[4] = 'orange';

var colourArrayLength = colour.length;

for(var i = 0; i < colourArrayLength; i++){
	outputText.innerHTML += colour[i] + '<br />';
};

















