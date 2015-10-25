// JavaScript Document

// Variables

// Select boxes
var box01 = $('.box_01');
var box02 = $('.box_02');
var box03 = $('.box_03');

// Boxes CSS values
var boxBgColorStart = box01.css('background-color');

// Select buttons
var btnChangeColor = $('.btn_01, .btn_03, .btn_05');
var btnReset = $('.btn_02, .btn_04, .btn_06');

// Change Colors
btnChangeColor.click(function(){
	
	var selectedBtn = $(this);
	var selectedBox = selectedBtn.siblings('div');
	var selectedColor = $(this).siblings('select').val();
		
	bgColorChange(selectedBox , selectedColor);
			 
});

// Reset Colors
btnReset.click(function(){
	
	// Get the current box that is a sibling
	// of the current reset button
	currentBox = $(this).siblings('div');
	
	// reset the color to the original color
	currentBox.css('background-color', boxBgColorStart);
		
});

function bgColorChange(element, newColor){
	
	element.css('background-color', newColor);
	
};