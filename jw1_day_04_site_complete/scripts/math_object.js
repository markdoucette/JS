// JavaScript Document

// Creates a number between 0 and 1 (but not including 1)
// var a = Math.random();

// Creates a number that has been rounded up or down
// to the nearest integer (0.5 and greater is rounded up)
// var b = Math.round(7.82);

// Creates a number that has been rounded down to the 
// nearest integer
// var c = Math.floor(7.82);

// alert ("a = " + a + ", b = " + b + ", and c = " + c);

// Exercise script

var minNum = 50, maxNum = 100;

var ranNum = ( (Math.random() * (maxNum - minNum) ) + minNum );

var ranNumRound = Math.round(ranNum);

var ranNumFloor = Math.floor(ranNum); 

document.getElementById('p_11').innerHTML = ranNum;
document.getElementById('p_12').innerHTML = ranNumRound;
document.getElementById('p_13').innerHTML = ranNumFloor;












