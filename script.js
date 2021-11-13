// Assignment Code
var generateBtn = document.querySelector("#generate");


//*Declaring variables to store data.


var numeric = [ "0", "2", "3", "4", "5" ];
var lowercase = [ "a", "b", "c", "d", "e" ];
var uppercase = [ "A", "B", "C", "D", "E" ];
var specialCharacters = [ "!", "$", "%", "&", "?" ];




//*Function Here


//function generatePassword() {



//     let passwordLength = prompt("Type the number of characters for password"); {

//         if (passwordLength >= 8 && passwordLength <= 128) {
//             console.log(passwordLength);

//             let numericOption = confirm("Want numbers?"); 
//             console.log(numericOption);

//             let lowercaseOption = confirm("Want lowercase?"); 
//             console.log(lowercaseOption);

//             let uppercaseOption = confirm("Want uppercase?"); 
//             console.log(uppercaseOption);

//             let specCharOption = confirm("Want special characters?"); 
//             console.log(specCharOption);

//         } else {
//           window.alert("Password does not meet requirements.");
//         }
      
//         if (numberOption || lowerCaseOption || uppercaseOption || specCharOption) {
//             window.alert("Success! Grab your password below.");
//             console.log();
//         } else {
//             window.alert("You must choose one character type. Try again.");
//         }
//     }
// }
 




// function generatePassword() {



//   function lengthVerification() {
  
//       let passwordLength = prompt("Type the number of characters for password"); 
  
//       if (passwordLength >= 8 && passwordLength <= 128) {
//           console.log(passwordLength);
//       } else {
//         window.alert("Password does not meet requirements.");
//       }
//     }

//   function characters () {

//       let numericOption = confirm("Want numbers?"); 
//       if (numericOption) {
//         passwordRequirements += numeric;
//       }

//       let lowercaseOption = confirm("Want lowercase?"); 
//       if (lowercaseOption) {
//         passwordRequirement += lowercase;
//         console.log(lowercaseOption);
//       }
      
//       let uppercaseOption = confirm("Want uppercase?"); 
//       if (uppercaseOption) {
//         passwordRequirement += uppercase;
//         console.log(uppercaseOption);
//       }

//       let specCharOption = confirm("Want special characters?"); 
//       if (specCharOption) {
//         passwordRequirement += specialCharacters;
//         console.log(specCharOption);
//       }
//       // if (passwordRequirement) {
//       //   window.alert("Success!");
//       // }
//       else {
//         window.alert("You must choose one character type. Try again.");
//       }
//   }

// }

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
          window.alert("Success!");
        
        } else {
          window.alert("You must choose one character type. Try again.");
        }    
      }
      
      
      generatePassword()
  

//Instead of passwordRequirement +=... use an array, and add each of those into the array. 
//Find out how to add variable values to an array?

//if, else if (error message), else if (confirms), else. 
//Look into "while" to see how to convert inputs into variable values.












//*Loop it Here

//for (var i = 0; i < passwordLength.length; i++) { 
//  console.log(generatePassword[i]);
//}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



