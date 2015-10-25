// JavaScript Document

// Globals
var $form		= $('.form-02');
var $errorBox 	= $('.errors');
var $name 		= $('#name');
var $email		= $('#email');
var $pw 		= $('#password');
var $pwConf 	= $('#passconf');

// The following pattern from:
// Murach's JavaScript and jQuery
// by: Zak Ruvalcaba and Mike Murach
// pg. 299
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

// Error Messages Object
var ErrorMessages = {
	
	nameBlank: 'Name not filled in',
	emailBlank: 'Email not filled in',
	passwordBlank: 'Password not filled in',
	positionBlank: 'Position not selected',
	
	emailInvalid: 'Email is in an incorrect format',
	
	passwordToShort: 'Password must be at least 6 characters long',
	passwordNoMatch: 'Passwords do not match'
		
}

$form.submit(function(e){
	
	var isValid = true;
	
	var errorMessageArray = []
	var errorOutput;
	
	var nameVal = $name.val();
	var emailVal = $email.val();
	var pwVal = $pw.val();
	var pwConfVal = $pwConf.val();
	var checked = $('.form-02 input[type="checkbox"]:checked');
	
	// Validate name
	if(nameVal === ''){
		errorMessageArray.push(ErrorMessages.nameBlank);
		isValid = false;	
	}
	
	// Validate email
	if(emailVal === ''){
		errorMessageArray.push(ErrorMessages.emailBlank);
		isValid = false;	
	}else if(emailPattern.test(emailVal) === false){
		errorMessageArray.push(ErrorMessages.emailInvalid);
		isValid = false;	
	}
	
	// Validate password
	if(pwVal === ''){
		errorMessageArray.push(ErrorMessages.passwordBlank);
		isValid = false;	
	}else if(pwVal.length < 6){
		errorMessageArray.push(ErrorMessages.passwordToShort);
		isValid = false;	
	}else if(pwVal !== pwConfVal){
		errorMessageArray.push(ErrorMessages.passwordNoMatch);
		isValid = false;	
	}
	
	// Validate position
	if(checked.length === 0){
		errorMessageArray.push(ErrorMessages.positionBlank);
		isValid = false;	
	}
	
	if(isValid === false){
		e.preventDefault();
		
		errorOutput = '<ul>'
		
		console.log(errorMessageArray);
		
		for(i = 0; i < errorMessageArray.length; i++){
			errorOutput += '<li>' + errorMessageArray[i] + '</li>';		
		}
		
		errorOutput += ' </ul>';
		
		$errorBox.html(errorOutput);
		$errorBox.show();	
	}
	
}) // end submit event handler



