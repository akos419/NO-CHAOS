const prompt = require("prompt-sync")();
let score = Number(prompt("Enter your score here(-1 to stop): "));

let average = 0;
let sum = 0;
let count = 0;

while(score != -1){
count++;
sum += score;
average = sum/count;
console.log(`Your average is ${average}`)
score = Number(prompt("Enter your score here(-1 to stop): "));

}