// Assignment Code
var generateBtn = document.querySelector("#generate");


var numberlist =["0","1","2","3","4","5","6","7","8","9"]
var symbolList =["!","@","#","$","%","^","&","*"]
var lowercaselist=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaselist=[]
function generatePassword() {

  var userinput = window.prompt("what do you want the length of the password to be")
  var passwordlength = parseInt (userinput)

  if(isNaN(passwordlength)){
    window.alert("Doese this look like a number -_-")
    return
  }

  if (passwordlength < 8 || passwordlength >128){
    window.alert("Password length must be between 8 and 128 characters")
    return;
  }

var userWantsNumbers = window.confirm("Would you like to inclue numbers in your password?")
var userWantsUppercase = window.confirm("Would you like to inclue uppercase in your password?")
var userWantsLowercase= window.confirm("Would you like to inclue lowercase in your password?")
var userWantsSymbols= window.confirm("Would you like to inclue symbols in your password?")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
