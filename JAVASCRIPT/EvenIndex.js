const prompt = require("prompt-sync")();

text = prompt("Enter a string here: ");

for(let index in text){
	for(let letter of text){
		if(index%2==0){
		console.log(letter);
		}
	}
}