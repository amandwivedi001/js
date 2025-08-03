// for of

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
}

const Greeeting = "Hello World!"

for (const greet of Greeeting) {
    // console.log(`Each char is ${greet}`); 
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key + ':-' + value);
}

// [key , value ] in for loop is help to write both key 
// and value differently in maps otherwise when we write normally 
// it write in form of array for every key-value pair

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key + ':-' + value);
// }

// forof loop is not working for objects


