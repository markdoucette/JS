// JavaScript Document

// Create Variables

// Boxes
var imgBox01 = document.querySelector('.box_20 .image_box');
var imgBox02 = document.querySelector('.box_21 .image_box');
var imgBox03 = document.querySelector('.box_22 .image_box');

// Output Paragraphs
var p01 = document.querySelectorAll('.box_20 p');
var p02 = document.querySelectorAll('.box_21 p');
var p03 = document.querySelectorAll('.box_22 p');

// Dragon Pictures
var graugPic = '<img src="images/graug.gif"  alt="Graug the dragon">';
var smaugPic = '<img src="images/smaug.gif"  alt="Smaug the dragon">';
var taugPic = '<img src="images/taug.gif"  alt="Taug the dragon">';

// Dragon Contructor
function Dragon(name, age, picture){
	this.name = name;
	this.age = age;
	this.pic = picture;
}

// Create Instances of the Dragon Object
var Smaug = new Dragon('Smaug', 520, smaugPic);
var Graug = new Dragon('Graug', 300, graugPic);
var Taug = new Dragon('Taug', 32, taugPic);

// Output the properties of the
// new instances of the Dragon object
imgBox01.innerHTML = Smaug.pic;
p01[0].innerHTML = Smaug.name;

imgBox02.innerHTML = Graug.pic;
p02[0].innerHTML = Graug.name;

imgBox03.innerHTML = Taug.pic;
p03[0].innerHTML = Taug.name;





