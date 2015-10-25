// JavaScript Document

// var a = 'BCIT';

// Test to see if var a is equal to "Douglas"

// The triple equals sign is a strict way of 
// testing for equivalence

// Note: Never write a = 'Douglas' as this will 
// reasign the value of var a to be "Douglas" 
// and will return true since now your are
// just testing if a has any value 
// if(a === 'Douglas'){
//	alert('var a is equal to "Douglas"')
// }
 // second test if a is equal to "Langara"
// else if(a === 'Langara'){
//	alert('var a is equal to "Langara"');			
// }
 // this will run if all of the above "if" and "else if" 
 // statements are false 
// else{
//	alert('var a is not equal to "Langara" or "Douglas".');
// }


// Exercise script
var michael = 'instructor',
	outputParagraph = document.getElementById('p_15');

if(michael === 'instructor'){
	outputParagraph.innerHTML = 'Michael is an instructor';
}else if(michael === 'student'){
	outputParagraph.innerHTML = 'Michael is a student';		
}else{
	outputParagraph.innerHTML = 'Michael is neither a student or an instructor'; 	
}















