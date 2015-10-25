// JavaScript Document

// Add Event listener - New Browsers only
var p04 = document.getElementById('p_04');

//

// addEventListener - Explained
//  
// addEventListener only works in IE9+ and other modern
// browsers 
//
// ...( "event" - what event to listen for:
//
// 		Common events include:
//						- click
//						- mouseover
//                      - mouseout
//                      - keypress
//                      - load
//                      - submit
//                      - resize
//
// ...(..., someFunction - a function or an anyonmous
// function to run when the event is triggered
//
// ...(..., ..., false - to prevent event capturing...usually
// set as false... 
 
p_04.addEventListener("click", alertClick, false);


function alertClick(){
	alert('I was clicked on');	
}

