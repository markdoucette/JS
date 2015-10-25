// JavaScript Document

// Store the element with an id of "slide" in the variable "mainSlide" 
var mainSlide = document.getElementById('slide');

// store the element with an id of "image_description"
// in the variable "kittenImageDescriptionText".
var kittenImageDescriptionText = document.getElementById('image_description');

// store the the button elements 
var btn02 = document.getElementById('btn_02');
var btn03 = document.getElementById('btn_03');
var btn04 = document.getElementById('btn_04');

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
var kittenImagesLength = (kittenImages.length);

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

// attach onclick event to btn03 and run
// prevImage function
btn03.onclick = prevImage;

// attach onclick event to btn02 and run
// nextImage function
btn04.onclick = nextImage;

// function to change the picture to a different picture
function changePictureAndDescription(){

	// The following lines of code are used to get the current image 
	// and store it in a variable and remove it from the array.
  	
	// Get the currently displayed image's "src" attribute value and store it
	// in a variable called "currentImage".
	var currentImage = document.getElementById('slide').getAttribute('src');
	
	// Get the currently displayed image's description text and store it
	// in a variable called "currentDescription".
	var currentDescription = document.getElementById('image_description').innerHTML;
	
	// Set the randomIndexNumber to "0";
	var randomIndexNumber = 0;
		
	// Below is an example of a while loop.
	
	// keep looping while the current image 
	// is equal to kittenImages[randomValue] 
		
	var isCurrentImage = true;
	
	while(isCurrentImage == true){
		
		// Create a random number
		var randomValue = Math.floor( Math.random() * (kittenImagesLength) );
		
		// Test to see if kittenImages[randomValue]
		// is equal to the current image
		if(kittenImages[randomValue] != currentImage){
			randomIndexNumber = randomValue;	
			isCurrentImage = false;	
		};
		
	}
	
	// Set the "src" attribute of the variable "mainSlide" to the value
	// stored in the kittenImages[randomIndexNumber] location	
	mainSlide.setAttribute('src', kittenImages[randomIndexNumber]);
	
	// replace the text in "kittenImageDescriptionText" with the text stored in
	// the "kittenImageDescriptions[randomIndexNumber]" array item.
	kittenImageDescriptionText.innerHTML = kittenImageDescriptions[randomIndexNumber];
	
};

function prevImage(){
		
	var currentImage = document.getElementById('slide').getAttribute('src');
	
	var imageNumber;
	
	for( var i = 0; i < kittenImagesLength; i++){
		
		if(kittenImages[i] == currentImage){
			
			imageNumber = i;			
			
		};
			
	};
	
	if( imageNumber == 0 ){
		imageNumber = ( kittenImagesLength - 1 );	
	}else{
		imageNumber--;	
	};
	
	mainSlide.setAttribute('src', kittenImages[imageNumber]);
	
	kittenImageDescriptionText.innerHTML = kittenImageDescriptions[imageNumber];
		
};

function nextImage(){
	
	var currentImage = document.getElementById('slide').getAttribute('src');
	
	var imageNumber;
			
	for( var i = 0; i < kittenImagesLength; i++){
		
		if(kittenImages[i] == currentImage){
		
			imageNumber = i;
				
		};
			
	};
	
	if( imageNumber == ( kittenImagesLength - 1 ) ){
		imageNumber = 0;	
	}else{
		imageNumber++;	
	};
	
	mainSlide.setAttribute('src', kittenImages[imageNumber]);
	
	kittenImageDescriptionText.innerHTML = kittenImageDescriptions[imageNumber];
	
};






















