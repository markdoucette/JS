// JavaScript Document

// var outputMessage = '';
	
// "do while" loop

// var number = 10;

// var counter = 12;

// Since the conditional code is run before the condition 
// is checked the conditional code will run at least once 
// even though in this case the condition never equaled 
// true

// do{
	// outputMessage += number + ' ';
	// number--;
	// counter++;
// }

// while(counter <= 10);

// if(outputMessage !== ''){
	// alert(outputMessage);	
// };


// Exercise script

var outputText = document.getElementById('p_17');

var colour = [];

colour[0] = 'red';
colour[1] = 'green';
colour[2] = 'blue';
colour[3] = 'purple';
colour[4] = 'orange';

var colourArrayLength = colour.length;

var counter = 0;

do{
	
	outputText.innerHTML += colour[counter] + '<br />';
	counter++;
		
}

while(counter < colourArrayLength);
















