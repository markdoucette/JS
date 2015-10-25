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

$form.submit( function(e) {
    var isValid = true;
    var eMess = [];

    // Get the elements that were checked 
    var checked = $(".form-02 input[type='checkbox']:checked");

    // validate name
    if ($name.val().trim() === '') {
        eMess.push(ErrorMessages.nameBlank);
        isValid = false;
    }

    if ($email.val().trim() === '') {
        eMess.push(ErrorMessages.emailBlank);
        isValid = false;
    } else if (emailPattern.test($email.val().trim()) === false) {
        eMess.push(ErrorMessages.emailInvalid);
        isValid = false;
    }
    
    if ($pw.val().trim() === '') {
        eMess.push(ErrorMessages.passwordBlank);
        isValid = false;
    } else if ($pw.val().trim().length < 6) {
        eMess.push(ErrorMessages.passwordToShort);
        isValid = false;
    } else if ($pw.val().trim() !== $pwConf.val().trim()) {
        eMess.push(ErrorMessages.passwordNoMatch);
        isValid = false;
    }

    // validate position
    if (checked.length === 0) {
        eMess.push(ErrorMessages.positionBlank);
        isValid = false;
    }

    if (isValid === false) {
        e.preventDefault();

        var errorOut = "<ul>";

        for (i = 0; i < eMess.length; ++i) {
            errorOut += "<li>" + eMess[i] + "</li>";
        }

        errorOut += "</ul>";

        $(".errors").html(errorOut);
        $(".errors").show();
    }
}
);


