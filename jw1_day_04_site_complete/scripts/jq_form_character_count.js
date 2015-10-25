// JavaScript Document

var $textArea = $('#message');
var $charCount = $('.character_count');
var maxChar = 200;

$charCount.text(maxChar - $textArea.val().length);

$textArea.keypress(function(e){
	
	var text = $(this).val();
	var textLength = text.length;
	var charRemain = maxChar - textLength;
	
	if(charRemain >= 0){
		$charCount.text(charRemain);	
	}else {
		e.preventDefault();	
	}
	
});