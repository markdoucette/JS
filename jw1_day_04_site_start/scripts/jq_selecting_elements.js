// JavaScript Document

// jQuery code

//Select the the 4th paragraph and change it's color to red
$('p:nth-of-type(4)').css('color', 'red');

//Select elements with the class of "select_me" and change their colour to green
$('.select_me').css('color', 'green');

//Select elements with the ID of "some_id" and chang it's color to blue
$('#some_id').css('color', 'blue');

//Select elemtents using jQuery filters

//Selects first element of selection match
$('.list_01 li:first').css('background-color', 'green');

//Selects the third element of selection match..."eq()" is zero based so 2 equals the third element
$('.list_01 li:eq(2)').css('background-color', 'green');

//Selects the last element of selection match
$('.list_01 li:last').css('background-color', 'green');

//Select even elements of selection match
$('.list_02 li:even').css('background-color', 'yellow');

//Select odd elements of selection match
$('.list_02 li:odd').css('background-color', 'purple');