// JavaScript Document

//Add Class
$('.box:first').addClass('box_26');

//Remove Class
$('.box_27').removeClass('box_27');

//Toggle Class
$('.btn_14').click(function(){
	$('.box_28').toggleClass('toggle_box');	
});

//Toggle Class with Transition

// The .click jQuery method is similar to using the
// the pure JavaScript .onclick method
$('.btn_15').click(function(){
	$('.box_29').toggleClass('toggle_box_transition');	
});