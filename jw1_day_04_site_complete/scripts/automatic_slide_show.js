// JavaScript Document

var listNode = $('#image_list');    
var links = $('#image_list a');
var captionNode = $('#caption');
var imageNode = $('#image');
var image;
var imageCache = [];

// Loop through lists of links
links.each(function() {
    $this = $(this);
	image = new Image
	image.src = $this.attr('href');
	image.title = $this.attr('title');
	imageCache.push(image);
});

// Start slide show
var imageCounter = 0;
var  timer = setInterval(
  function () { 
	imageCounter = (imageCounter + 1) % imageCache.length;
	image = imageCache[imageCounter];
	imageNode.attr('src', image.src);
	captionNode.text(image.title);
  }, 2000);
