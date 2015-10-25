// JavaScript Document

var p05 = document.getElementById('p_05');


addEvent(p05, 'click', alertClick);

function alertClick(){
	alert('I was clicked on');	
}


// Simple cross browser event handler
function addEvent(element, type, fn) {
	if (element.addEventListener) {
		element.addEventListener(type, fn, false);
	} else {
		element.attachEvent("on" + type, fn);
	}
}
