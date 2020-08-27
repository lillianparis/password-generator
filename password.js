

// Creating arrays using let https://www.w3schools.com/js/js_arrays.asp 

let numberValue = "0123456789";
let specialCharector = "!@#$%^&*()_+";
let lowerCase =  "abcdefghijklmnopqrstuvwxyz"; 
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let possibleSelection = "";
let passLength;
let generateBtn = document.getElementById("generate");
let passwordDisplay = document.getElementById("password");
// Interactivity, promt asks user the length of the password in charectors
// The if statement sees if the user chooses a number between 8-128 charectors, if not then it prompts user to retry
function promptUser() {
// parseInt changes to a number
passLength = parseInt(prompt("Choose a password length between 8-128 charectors"));

if (passLength < 8 || passLength > 128) {
    alert("Please choose a whole number between 8 and 128 charectors");
}
if (confirm("Would you like to use upper case letters?")) {
    possibleSelection = possibleSelection + upperCase 
}
if (confirm("Would you like to use lower case letters?")){
    possibleSelection = possibleSelection + lowerCase
}
if (confirm("Would you like to use special charectors?")){
    possibleSelection = possibleSelection + specialCharector
}
if (confirm("Would you like to use number values?")){
    possibleSelection = possibleSelection + numberValue
}
// function stops running
return
}

generateBtn.addEventListener("click", function() {
    promptUser()
    generatePassword()
})




function generatePassword() {
    let password = "";
for(let i = 0; i < passLength; i++){
   password = password + possibleSelection[Math.floor(Math.random() * possibleSelection.length)]
}
passwordDisplay.value = password
}



















