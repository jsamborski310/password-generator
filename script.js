// Assignment Code
var generateBtn = document.querySelector("#generate");


// Declaring variables to store data.

var numeric = ["023456789"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCharacters = [" !#$%&'()*+,-./:;<=>?@[_'{| "];



//*Function Here

function generatePassword() {



  var password = "";

  var passwordOptions = ""; // Allows values to be stored in one variable. Will be adding arrays that are selected in here. 



  //Password Length Validation

  let passwordLength = prompt("Type the number of characters you would like for your password.");

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("This is the length: " + passwordLength);


  } else { //Return forces the window to close. Ends the process.
    return window.alert("Password does not meet requirements. You must select a number between 8 and 128. Try again.");
  }

  // Allows User to specify characters they want to use in password.

  let numericOptionChoice = confirm("Want to include numbers? If yes, click 'Okay'. ");
  if (numericOptionChoice) {
    passwordOptions += numeric;

  }

  let lowercaseOptionChoice = confirm("Want to include lowercase? If yes, click 'Okay'. ");
  if (lowercaseOptionChoice) {
    passwordOptions += lowercase;

  }

  let uppercaseOptionChoice = confirm("Want to include uppercase? If yes, click 'Okay'. ");
  if (uppercaseOptionChoice) {
    passwordOptions += uppercase;

  }

  let specCharOptionChoice = confirm("Want to include special characters? If yes, click 'Okay'. ");
  if (specCharOptionChoice) {
    passwordOptions += specialCharacters;

  }

  //Ensures they select at least one option.
  if (numericOptionChoice || lowercaseOptionChocie || uppercaseOptionChoice || specCharOptionChoice) {

    window.alert("Success!");

    //Window closes if they press no on Special Characters.



    for (let i = 0; i < passwordLength; i++) {

      password += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]


    }


    return password;



  } else {
    alert("Opps! You must choose one character type. Try again.");
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



