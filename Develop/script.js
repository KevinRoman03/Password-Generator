// Assignment Code
var generateBtn = document.querySelector("#generate");


var number =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols =["!", "@", "#", "$", "%", "^", "&", "*"]
var lowercase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase =[]
var passwordlist= []

for (var i = 0; i < lowercase.length; i++) {
	uppercase[i] = lowercase[i].toUpperCase()
}

function generatePassword() {

var userinput = window.prompt("what do you want the length of the password to be")
var passwordlength = parseInt(userinput)

if (isNaN(passwordlength)) {
	window.alert("Does this look like a number")
	return;
}

if (passwordlength > 8 || passwordlength < 128) {
	window.alert("Password must be between 8 and 128 characters")


	var userWantsNumbers = window.confirm("Would you like to have numbers included in your password??");
	var userWantsUppercase = window.confirm("Would you like to have uppercases letters included in your password?");
	var userWantsLowercase = window.confirm("Would you like to have lowercase letters included in your password?");
	var userWantsSymbols = window.confirm("Would you like to have symbols included in your password?");
}
if (userWantsLowercase === true) {
	passwroldlist=passwordlist.concat(lowercase)
}
if (userWantsNumbers === true) {
	passswordlist=passwordlist.concat(number);
}
if (userWantsSymbols === true) {
	passswordlist=  passwordlist.concat(symbols);
}
if (userWantsUppercase == true) {
	passwordlist =passwordlist.concat(uppercase);
}

if (userWantsLowercase === false && userWantsUppercase === false && userWantsNumbers === false && userWantsSymbols === false) {
	window.alert("pick at least one character!");
	return;
}

var password = ""

for (var i = 0; i < passwordlength; i++) {
	password += (passwordlist[Math.floor(Math.random() * passwordlist.length)]);

	console.log(password);
}
	return password
}


// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);