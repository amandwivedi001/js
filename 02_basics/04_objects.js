// singlton
// const  tinderUser = new Object(); 


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.email = "user@email.com"

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userName: {
            fisrtName: "Aman",
            lastName: "Dwivedi"
        }
    }
}

// console.log(regularUser.fullname.userName.fisrtName);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    5: "f",
    6: "e",
    7: "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // {} at first show target which include all object inside it which all are source

const obj3 = {...obj1, ...obj2} // most used object sprederer
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@email.com"
    },
    {},
    {}
]
// this is used in data base where a array contain different object and info of users

// user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // this gives all keys of object in form of array
console.log(Object.values(tinderUser)); // this gives all values of object in form of array
console.log(Object.entries(tinderUser)); // this gives all key and values of object in form of array in array

console.log(tinderUser.hasOwnProperty('mail'));







