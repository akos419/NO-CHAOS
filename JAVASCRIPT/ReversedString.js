const prompt = require("prompt-sync")();

text = prompt("Enter a string here: ");

reversedString = "";

for(let letter of text){
reversedString = letter + reversedString;
}

console.log(reversedString);