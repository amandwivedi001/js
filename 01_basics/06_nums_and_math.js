const score = 400;
console.log(score);

const balance = new Number(100);
console.log((balance));

console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherNumber = 260.6343242;

console.log(otherNumber.toPrecision(3));

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

//  console.log(Math);
//  console.log(Math.abs(3-5));
//  console.log(Math.round(4.35453));
//  console.log(Math.ceil(4.35453));
//  console.log(Math.floor(4.35453));
//  console.log(Math.min(4 ,5 , 6,2 ,3));
//  console.log(Math.max(4 ,5 , 6,2 ,3));

console.log(((Math.random() * 7) + 1));

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min));
// It gives number between

