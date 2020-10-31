// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define variables
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*(){}[]=<>/,.|~?";
var numChar = "1234567890";



//Determine password characters by a serious of prompts, check to make sure
//the are within proper parameters.
function writePassword() {
  
  var passwordChar = "";

  var passwordLength = prompt("Please input a number between 8 and 128 (this will be your password length)")
    if (passwordLength >= 8 && passwordLength <= 128) {
      var inclLowcase = confirm("Include lowercase letters?");

      var inclUpcase = confirm("Include uppercase letters?");

      var inclNum = confirm("Include numbers?");

      var inclSpec = confirm("Include special characters?");


      if (inclLowcase === false && inclUpcase === false && inclNum === false && inclSpec === false){
        alert("You must select at least one option.");
      }

    }
    
    else if (isNaN(passwordLength)) {
      alert("Not a valid entry. Please input a number between 8 and 128.");
    }

    else if (passwordLength <8 || passwordLength > 128) 
      alert("Input must be no less than 8 and no more than 128.");


//determine what the password will include
      if (inclLowcase === true) {
        passwordChar = passwordChar + lowChar
      }

      if (inclUpcase === true) {
      passwordChar = passwordChar + upChar
      }

      if (inclNum === true) {
      passwordChar = passwordChar + numChar
      }

      if (inclSpec === true) {
      passwordChar = passwordChar + specialChar
      }


//Write password to the #password input
    function generatePassword() {
      var securePassword = "";

      var passwordCharLength = passwordChar.length;

      for (var i = 0; i < passwordLength; i++) {
        securePassword += passwordChar.charAt(Math.floor(Math.random() * passwordCharLength));
      }

      return securePassword;
    }

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
