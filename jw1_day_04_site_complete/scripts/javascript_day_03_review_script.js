// JavaScript Document

var $box44 = $('.box_44');
var $marginOut = $('.margin_out');
var $paddingOut = $('.padding_out');
var $btn25 = $('.btn_25');

$btn25.click(function(){
	var boxMarginValue = $box44.css('margin');
	var boxPaddingValue = $box44.css('padding');
	$marginOut.text('margin: ' + boxMarginValue);
	$paddingOut.text('padding: ' + boxPaddingValue);	
});