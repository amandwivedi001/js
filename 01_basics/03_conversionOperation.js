let score = "33abc";

// console.log(typeof score)

let ValueInNumber = Number(score);

// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0 

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => true
// "" => false; 
// "aman" => true

let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ************************ Operations ************************

let str1 = "hello";
let str2 = " aman";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "3");

// console.log(+true);
// console.log(+"");

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);