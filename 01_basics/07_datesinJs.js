const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 6, 31);
// let myCreatedDate = new Date(2025, 6, 31, 5, 3);
// let myCreatedDate = new Date("2025-07-31");
let myCreatedDate = new Date("07-31-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDATE =new Date();
console.log(newDATE);
console.log(newDATE.getMonth() + 1);
console.log(newDATE.getDay());

newDATE.toLocaleString('default', {
    weekday : "long",
})



