// Assignment Code
var generateBtn = document.querySelector("#generate");


//*Declaring variables to store data.


  
var numeric = [ "02345" ];
var lowercase = [ "abcde" ];
var uppercase = [ "ABCDE" ];
var specialCharacters = [ "!$%&?" ];





//*Function Here

function generatePassword() {


//       //Password Length Validation

//         let passwordLength = prompt("Type the number of characters for password"); 
    
//         if (passwordLength >= 8 && passwordLength <= 128) {
//             console.log(passwordLength);
//         } else { //Return forces the window to close. Ends the process.
//           return window.alert("Password does not meet requirements.");
//         }
      
//       //Allows User to specify characters they want to use in password

//         let numericOption = confirm("Want numbers?"); 
//         if (numericOption) {
//          numericOption = numeric;
//          console.log(numericOption);
//        }
  
//         let lowercaseOption = confirm("Want lowercase?"); 
//         if (lowercaseOption) {
//           lowercaseOption = lowercase;
//           console.log(lowercaseOption);
//         }
        
//         let uppercaseOption = confirm("Want uppercase?"); 
//         if (uppercaseOption) {
//           uppercaseOption = uppercase;
//           console.log(uppercaseOption);
//         }
  
//         let specCharOption = confirm("Want special characters?"); 
//         if (specCharOption) {
//           specCharOption = specialCharacters;
//           console.log(specCharOption);
//         } 

//         //Ensures they select at least one option.
//         if (numericOption || lowercaseOption || uppercaseOption || specCharOption) {
//           window.alert("Success!");


//           // var i = 0;
//           // for (var i = 0; i < passwordLength; i++)  {
//           //   console.log(i);

          

            
//             //return newPassword;
//             // return this;

//             //return Math.random(); //This is returning a number, but not exclusive to true statements. True statements need to go into their own string to then be randomized? 
//           //}
          

//           //Need to take all true statements and place them in another  variable. 

//         } else {
//           window.alert("You must choose one character type. Try again.");
//         }  
        
// }

// var password = "";


// //Password Length Validation

// let passwordLength = prompt("Type the number of characters for password"); 
    
// if (passwordLength >= 8 && passwordLength <= 128) {

//     // password.length = passwordLength;

//     console.log( "This is the length: " + passwordLength);


// } else { //Return forces the window to close. Ends the process.
//   return window.alert("Password does not meet requirements.");
// }

// //Allows User to specify characters they want to use in password

// let numericOption = confirm("Want numbers?"); 
// if (numericOption) {
//   numericOption = numeric;
//   password += numeric;

// }

// let lowercaseOption = confirm("Want lowercase?"); 
// if (lowercaseOption) {
//   lowercaseOption = lowercase;
//   password += lowercase;
  
// }

// let uppercaseOption = confirm("Want uppercase?"); 
// if (uppercaseOption) {
//   uppercaseOption = uppercase;
//   password += uppercase;
 
// }

// let specCharOption = confirm("Want special characters?"); 
// if (specCharOption) {
//   specCharOption = specialCharacters;
//   password += specialCharacters;

// } 

// //Ensures they select at least one option.
// if (numericOption || lowercaseOption || uppercaseOption || specCharOption) {
//   alert("Success!");
  

  

//   let randomPassword = "";

//   for (let i = 0; i < passwordLength; i++) {

//     randomPassword = Math.floor(Math.random() * passwordLength); {
//       console.log(randomPassword); 
//     }
//     // randomPassword = password;
//     // password = randomPassword; 

    
//   }
    

// return password; 

 

// } else {
//   alert("You must choose one character type. Try again.");
// }  



// }

  
var password = "";
var passwordOptions = "";

//Password Length Validation

let passwordLength = prompt("Type the number of characters for password"); 
    
if (passwordLength >= 8 && passwordLength <= 128) {

    // password.length = passwordLength;

    console.log( "This is the length: " + passwordLength);


} else { //Return forces the window to close. Ends the process.
  return window.alert("Password does not meet requirements.");
}

//Allows User to specify characters they want to use in password

let numericOptionChoice = confirm("Want numbers?"); 
if (numericOptionChoice) {
  // numericOption = numeric;
  passwordOptions += numeric;

}

let lowercaseOptionChoice = confirm("Want lowercase?"); 
if (lowercaseOptionChoice) {
  // lowercaseOption = lowercase;
  passwordOptions += lowercase;
  
}

let uppercaseOptionChoice = confirm("Want uppercase?"); 
if (uppercaseOptionChoice) {
  // uppercaseOption = uppercase;
  passwordOptions += uppercase;
 
}

let specCharOptionChoice = confirm("Want special characters?"); 
if (specCharOptionChoice) {
  // specCharOption = specialCharacters;
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
  alert("You must choose one character type. Try again.");
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



