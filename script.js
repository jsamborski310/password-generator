// Assignment Code
var generateBtn = document.querySelector("#generate");


//*Declaring variables to store data.


var numeric = [ "0", "2", "3", "4", "5" ];
var lowercase = [ "a", "b", "c", "d", "e" ];
var uppercase = [ "A", "B", "C", "D", "E" ];
var specialCharacters = [ "!", "$", "%", "&", "?" ];





//*Function Here

function generatePassword() {


      //Password Length Validation

        let passwordLength = prompt("Type the number of characters for password"); 
    
        if (passwordLength >= 8 && passwordLength <= 128) {
            console.log(passwordLength);
        } else { //Return forces the window to close. Ends the process.
          return window.alert("Password does not meet requirements.");
        }
      
      //Allows User to specify characters they want to use in password

        let numericOption = confirm("Want numbers?"); 
        if (numericOption) {
         numericOption = numeric;
         console.log(numericOption);
       }
  
        let lowercaseOption = confirm("Want lowercase?"); 
        if (lowercaseOption) {
          lowercaseOption = lowercase;
          console.log(lowercaseOption);
        }
        
        let uppercaseOption = confirm("Want uppercase?"); 
        if (uppercaseOption) {
          uppercaseOption = uppercase;
          console.log(uppercaseOption);
        }
  
        let specCharOption = confirm("Want special characters?"); 
        if (specCharOption) {
          specCharOption = specialCharacters;
          console.log(specCharOption);
        } 

        //Ensures they select at least one option.
        if (numericOption || lowercaseOption || uppercaseOption || specCharOption) {
          window.alert("Success!"); {



            
            //return newPassword;
            return this;

            //return Math.random(); //This is returning a number, but not exclusive to true statements. True statements need to go into their own string to then be randomized? 
          }
          

          //Need to take all true statements and place them in another  variable. 

        } else {
          window.alert("You must choose one character type. Try again.");
        }  
        
}


        // for (var i = 0; i < passwordLength; i++) {
        //   console.log(i);
        // }


      // generatePassword.length = passwordLength;
        // fullPassword.length = passwordLength;
        // fullPassword = passwordOptions(numpericOption || lowercaseOption || uppercaseOption || specCharOption);

        // for (var i = 0; i < generatePassword.length; i++) {
        //   console.log(generatePassword[i]);
        // }
        


//Loop goes first then Random. 

        // for (var i = 0; i < 5; i++) { 
        //         console.log(generatePassword);
        // }
 
        // return Math.floor(Math.random() * max);
      



  

//Instead of passwordRequirement +=... use an array, and add each of those into the array. 
//Find out how to add variable values to an array?

//Look into "while" to see how to convert inputs into variable values.









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



