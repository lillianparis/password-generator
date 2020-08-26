// Write password
function writePassword() {
    let password = generatePassword[]
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Tools to build password, criteria
// Inputs/strings
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeric = "0123456789"
const special = "!@#$%^&*()"

// generate password to certain criteria
function generatePassword(){
    // criteria from ReadMe
    let userLowerCase = confirm("Choose the amount of charectors between 8 to 128")
    let userUpperCase = confirm("Do you want lowercase letters?")
    let numeric
    let special 
}

let password = "";
passwordSelections = "";
// once all inputs have been received, generate an output for amount of charectors user chose...
if (userLowerCase === true) {
    passwordSelections + lowerCase
}
// Create a string of random charectors 
// use mathRandom from 8 - 128 charectors, using it as a 