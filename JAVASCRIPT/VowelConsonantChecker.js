const prompt = require("prompt-sync")();

text = prompt("Enter a string here: ");

let vowel = "aeiou";
let consonant = "qwrtypsdfghjklzxcvbnm";
let vowel_count = 0;
let consonant_count = 0;
let vowel_check = "";
let consonant_check = "";

for(let letter of text){
	for(let alphabet of vowel){
	if(alphabet==letter && not in vowel_check){
	vowel_count += 1;
	}
	}
	for(let character of consonant){
	if(character==letter && not in consonant_check){
	consonant_count += 1;
	}
	}
}
console.log("There are " + vowel_count + "vowels")
console.log("There are " + consonant_count + "consonants")