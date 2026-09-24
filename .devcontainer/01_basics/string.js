const name = "sangram"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Sangram-Chowdhury")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));


const newString = gameName.substring(0, 4)

const anotherString = gameName.slice(-8, 4)

console.log(newString);
console.log(anotherString);


const newStringOne = "   Sangram   "
console.log(newStringOne)
console.log(newStringOne.trim())