// JavaScript Document

//Remove elements
$('.si_fi li').remove(':contains("Star Wars")');

//Add elements
$('.btn_16').click(function(){
	$('<li>Star Wars</li>').appendTo('li:contains("Star Trek")');	
});