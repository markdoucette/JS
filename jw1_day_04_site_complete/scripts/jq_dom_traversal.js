// JavaScript Document

// ------------------------------------------------

// Select a parent on hover...
$('.box_38').hover(function(){

// mouse enter function
$('.box_38').parent().css('border', '3px solid red');	
	
},function(){
	
// mouse leave function

// remove in styles from parent element
$('.box_38').parent().removeAttr('style');
	
});

// -----------------------------------------------

// Select a child element on hover...
$('.box_outer_02').hover(function(){

// mouse enter function
$('.box_outer_02').children('.box_39').addClass('crazy_trasition');	
	
},function(){
	
// mouse leave function

// remove in styles from parent element
$('.box_outer_02').children('.box_39').removeClass('crazy_trasition');
	
});

// -----------------------------------------------

// Select the next element from the element that is hovered...
$('.box_40').hover(function(){

// mouse enter function
$('.box_40').next().addClass('fall');	
	
},function(){
	
// mouse leave function

// remove in styles from parent element
$('.box_40').next().removeClass('fall');
	
});

// -----------------------------------------------

// Select the next element from the element that is hovered...
$('.box_40').hover(function(){

// mouse enter function
$('.box_40').next().addClass('fall');	
	
},function(){
	
// mouse leave function

// remove in styles from parent element
$('.box_40').next().removeClass('fall');
	
});

// -----------------------------------------------

// Select the previous element from the element that is clicked
$('.box_43').click(function(){
	
	$('.box_43').prev().slideToggle(300);
	
});

// -----------------------------------------------

// Select the siblings of an element from the element that is clicked
$('.btn_25').click(function(){
	
	var siblingItems = $('.btn_25').siblings();
	
	if(siblingItems.is(':visible')){
		siblingItems.css('display', 'none');
	}else{
		siblingItems.css('display', 'block');	
	}
	
});

// Select certain siblings only
$('.btn_26').click(function() {
    var siblingBox = $('.btn_26').siblings('.box');
	siblingBox.toggleClass('box_rotate');
});

// -----------------------------------------------

// Use Chaining to select two elements previous to the "Click Me" button
$('.btn_27').click(function(){
	
	$('.btn_27').prev().prev().toggleClass('box_scale');	
	
});







