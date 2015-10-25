// JavaScript Document

// Select ".box_23" and store it in variable "box23"
var box23 = $('.box_23');

// Get CSS value

// Get the height of box_23 and store the returned value
// in the variable "boxHeight"
//
// Note:
//   - Notice how jQuery returns a number with "px"
//     attached to it

var boxHeight = box23.css('height');
var boxColor = box23.css('background-color');

// alert the value of variable "boxHeight"
// "\n" equals a new line inside an alert box
alert( 'The css box height of box_23 is: ' + boxHeight + '\n\n'  + 'The css background-color of box_23 is: ' + boxColor );




