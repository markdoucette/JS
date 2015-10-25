// JavaScript Document

// display the user agent string of the browser running the web page
alert(navigator.userAgent);

// Display the result of the SVG support test
alert(svgSupport)


// Replace all the SVG images with PNG images if the browser fails
// The SVG support test that is run in the head section of the web page
// only run if the SVG support test returned false
if(!svgSupport){
	// selects all the images that are in the SVG format
	svgImgs = $('img[src$="svg"]');
	$('body').addClass('no_svg'); // allows targeting non-svg supporting browsers with custom CSS styles
	// loops through all the svg images and changes the end of their src
	// attribute value to ".png"
	svgImgs.each(function(){
		$(this).attr('src', $(this).attr('src').replace(/\.svg/, '.png'));
	});
};


