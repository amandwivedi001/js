// const userEmail = "aman@saurbh.ai"
const userEmail = []

// if(userEmail){
//     console.log("Got user emial");
// }else{
//     console.log("Dont have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " , [], {}, function(){} 

// if(userEmail.length == 0){
//     console.log("Array is Empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is Empty");
}

//Nullish Coalescing Operator (??): null undefined --> it is used to handle null and undefined value

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1)

// Terniaru Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");


