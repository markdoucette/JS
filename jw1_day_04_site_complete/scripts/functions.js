// JavaScript Document

// Create and call a function

// set variables
// var outputWidth = document.getElementById('p_19');
// var outputHeight = document.getElementById('p_20');

// call function on window resize event
// window.onresize = outputWindowSize;

// output window width and height
// function
// function outputWindowSize() {
	// var w = window.outerWidth;
	// var h = window.outerHeight;
	// outputWidth.innerHTML = 'Window Width = ' + w + 'px';
	// outputHeight.innerHTML = 'Window Height = ' + h + 'px';
// }

// Create function, call function 
// and pass parameters to 
// a function

// set variables
// var btn01 = document.getElementById('btn_01');
// var num01 = 8;
// var num02 = 7;

// add an onclick event to the btn
// btn01.onclick = function(){ addNum(num01, num02) }

// addNum function which takes
// two parameters and adds them
// together
// function addNum(a, b){
	// alert(a + b);	
// }

// Exercise script

// Exercise 01

var outputWidth = document.getElementById('p_19');
var outputHeight = document.getElementById('p_20');

window.onresize = outputWindowSize;

function outputWindowSize() {
   var w = window.outerWidth;
   var h = window.outerHeight;
   outputWidth.innerHTML = 'Window Width = ' + w + 'px';
   outputHeight.innerHTML = 'Window Height = ' + h + 'px';
}

// Exercise 02

var numA = parseFloat(document.getElementById('p_21').innerHTML);
var numB = parseFloat(document.getElementById('p_22').innerHTML);
var outputSumNum = document.getElementById('p_23');

addNum(numA, numB);

function addNum(a, b) {
	var sumNum = ( a + b );
	outputSumNum.innerHTML += ' ' + sumNum;		
}





















