// JavaScript Document

// store the element with an id of "slide" in the variable "mainSlide". 		
var mainSlide = document.getElementById('slide');

// store the element with an id of "image_description"
// in the variable "kittenImageDescriptionText".
var kittenImageDescriptionText = document.getElementById('image_description');

// store the element with an id of "btn02"
// in the variable "btn02"
var btn02 = document.getElementById('btn_02');

// create a new array called kittenImages
var kittenImages = [];

// declare values of the kittenImages array
kittenImages[0] = "images/kittens_01.jpg";
kittenImages[1] = "images/kittens_02.jpg";
kittenImages[2] = "images/kittens_03.jpg";
kittenImages[3] = "images/kittens_04.jpg";
kittenImages[4] = "images/kittens_05.jpg";
kittenImages[5] = "images/kittens_06.jpg";
kittenImages[6] = "images/kittens_07.jpg";

// get length of kittenImages array 
var kittenImagesArrayLength = (kittenImages.length);

// create a new array called kittenImageDescriptions
var kittenImageDescriptions = [];

// declare values of the kittenImageDescriptions array
kittenImageDescriptions[0] = "An orange kitten";
kittenImageDescriptions[1] = "A brown and black striped kitten";
kittenImageDescriptions[2] = "Three kittens";
kittenImageDescriptions[3] = "An orange kitten laying in the grass";
kittenImageDescriptions[4] = "A white kitten laying on a blanket";
kittenImageDescriptions[5] = "Four kittens on a lawn";
kittenImageDescriptions[6] = "A brown and black striped kitten on a purple blanket";

// attach onclick event to btn02 and run
// changePictureAndDescription function
btn02.onclick = changePictureAndDescription;


// function to change the picture and it's description 
// to a different picture and description.
function changePictureAndDescription(){

  	// generate a random number between "0" and the length of the kitten array.
	var randomValue = Math.floor( Math.random() * kittenImagesArrayLength);
		
	// set the "src" attribute of the variable "mainSlide" to the value
	// stored in the kittenImages[randomValue] location.
	mainSlide.setAttribute('src', kittenImages[randomValue]);
	
	// replace the text in "kittenImageDescriptionText" with the text stored in
	// the "kittenImageDescriptions[randomValue]" array item.
	kittenImageDescriptionText.innerHTML = kittenImageDescriptions[randomValue];
	
};






















