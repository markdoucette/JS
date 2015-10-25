// JavaScript Document

var $heading = $('.box_22 h2');
var $button = $('.btn_26');

// runs the click event only once...
$button.one('click', function(){

	$heading.addClass('animated');	
	
})
