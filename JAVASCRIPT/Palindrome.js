const prompt = require("prompt-sync")();

let text = prompt("Enter a string: ");

let palindrome = "";
for(let character of text){
palindrome = character + palindrome; 
}

if(text==palindrome){
console.log("is a Palindrome");
}
else{
console.log("not a Palindrome");
}