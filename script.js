// Assignment Code
var generateBtn = document.querySelector("#generate");


// Declaring variables to store data.

var numeric = ["023456789"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[_'{|"];



//*Function Here

function generatePassword() {



  var password = ""; // Need this to tie it all in later.
  var passwordOptions = ""; // Allows values to be stored in one variable. Will be adding arrays that are selected in here. 



  //Password Length Validation

  var passwordLength = prompt("Type the number of characters you would like for your password.");

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("This is the length: " + passwordLength);


  } else { //Return forces the window to close. Ends the process.
    return alert("Password does not meet requirements. You must select a number between 8 and 128. Try again.");
  }

  // Allows User to specify characters they want to use in password.

  var numericCharacterOption = confirm("Want to include numbers? If yes, click 'Okay'.");
  if (numericCharacterOption) {
    passwordOptions += numeric;

  }

  var lowercaseCharacterOption = confirm("Want to include lowercase? If yes, click 'Okay'.");
  if (lowercaseCharacterOption) {
    passwordOptions += lowercase;

  }

  var uppercaseCharacterOption = confirm("Want to include uppercase? If yes, click 'Okay'.");
  if (uppercaseCharacterOption) {
    passwordOptions += uppercase;

  }

  var specialChararacterOption = confirm("Want to include special characters? If yes, click 'Okay'.");
  if (specialChararacterOption) {
    passwordOptions += specialCharacters;

  }

  //Ensures they select at least one option.
  if (numericCharacterOption || lowercaseCharacterOption || uppercaseCharacterOption || specialChararacterOption) {
    alert("Success!");

  
    // Grabs all of the password options, places them in a string, and loops through it, up until it reaches the passwordLength entered by the user. 

    for (var i = 0; i < passwordLength; i++) {

      // Randomizes the password, and assigns the value to the password variable.
      password += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]

    }

    // Password variable now contains all of the selected characters up to the selected length. This is used to return and generate the password.
    return password;

    //If User fails to select at lease one character option, they will not receive a password and will see this message.
  } else {
    alert("Oops! You must choose one character type. Try again.");
  }
  

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



