// JavaScript Document

// Create variable
// Store src attribute of the "dragon" image element

// Dragon variables
var dragon = document.getElementById('dragon');
var dragonImageSrc 	= document.getElementById('dragon').getAttribute('src');

var dragonNoAction 	= 'images/dragon_no_action.gif';
var dragonFire 		= 'images/dragon_fire_animated.gif';
var dragonGrowl 	= 'images/dragon_growl_animated.gif';  

// Button Variables
var btnBreathFire 		= document.getElementById('btn_06');
var btnBreathFireStop 	= document.getElementById('btn_07');
var btnGrowl	 		= document.getElementById('btn_08');
var btnGrowlStop 		= document.getElementById('btn_09');
var btnDisplayName 		= document.getElementById('btn_10');
var btnDisplayAge 		= document.getElementById('btn_11');

// Text Output Variables
var dragonNameOut = document.getElementById('d_name');
var dragonAgeOut = document.getElementById('d_age');

// Counter
var counterName = 0;
var counterAge =0;


// should equal: images/dragon_no_flames.gif

// Create new Dragon object
var Dragon = {

	// Dragon Properties
	name: 'Smaug',
	age: 520,
	
	// Dragon Methods
	breathFire: function(){
		if(dragonImageSrc === dragonNoAction || dragonImageSrc === dragonGrowl){
			dragon.setAttribute('src', dragonFire);
			dragonImageSrc = dragonFire;
		}	
	},
	growl: function(){
		if(dragonImageSrc === dragonNoAction || dragonImageSrc === dragonFire){
			dragon.setAttribute('src', dragonGrowl);
			dragonImageSrc = dragonGrowl;
		}		
	},
	stopMethods: function(){
		if(dragonImageSrc === dragonFire || dragonImageSrc === dragonGrowl){
			dragon.setAttribute('src', dragonNoAction);
			dragonImageSrc = dragonNoAction;
		}			
	}
};

btnBreathFire.onclick = Dragon.breathFire;
btnBreathFireStop.onclick = Dragon.stopMethods;

btnGrowl.onclick = Dragon.growl;
btnGrowlStop.onclick = Dragon.stopMethods;

btnDisplayName.onclick = function(){
	if(counterName === 0){
		dragonNameOut.innerHTML += Dragon.name;
		counterName++	
	}	
};

btnDisplayAge.onclick = function(){
	if(counterAge === 0){
		dragonAgeOut.innerHTML += Dragon.age + 'yrs';
		counterAge++	
	}	
};



