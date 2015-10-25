// JavaScript Document

// Use Modernizr.load method to conditionally load scripts depending
// on whether or not a browser supports a certain feature or not...

// The following code tests whether or not the browser supports
// CSS animations and loads either a script that uses CSS animations or
// a script that uses jQuery animations if the browser does not 
// support CSS animations

Modernizr.load({
  test: Modernizr.cssanimations,
  yep : 'scripts/css_animation_support.js',
  nope: 'scripts/no_css_animation_support.js'
});