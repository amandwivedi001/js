const name = "AMAN"
const repoCount = 50;

// console.log(name + repoCount + " value"); // this is outdated so it is not used in string 

// console.log(`My name is ${name} and my repo count is ${repoCount}`);
// use backticks ans for inserting any datatypes use  $ nad enter it

const gameNmae = new String('Aman-cdr-techr');
// new method of string declaration, it gives a feacture of accessing value by key also and give various methods

// console.log(gameNmae[0].__proto__);

// console.log(gameNmae.length);

// console.log(gameNmae.toUpperCase());
// console.log(gameNmae.charAt(4));
// console.log(gameNmae.indexOf('c'));

const newString = gameNmae.substring(0,4); // it does.nt include last index like it does'nt include 4 index
console.log(newString);


const anotherString = gameNmae.slice(-5, 4);
console.log(anotherString);

const newString1 = "   aman    "
console.log(newString1);

console.log(newString1.trim()); // trim method is used to remoe spaces from string from starting and end

const url = "https;//aman.com/aman%20dwivedi";

console.log(url.replace('%20', '-')); // it is used to replace things from string

console.log(url.includes('i')); // it is used to check weather it is present or not

console.log(gameNmae.split('-')); // it is used to split a string into an array on the basis of saparator 





