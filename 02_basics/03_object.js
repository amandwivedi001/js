// singleton
// object.create()

//object literals (not singleton)

const mySym = Symbol("Key1");
const JsUser = {
    name: "Aman",
    "full name" : "Aman Dwivedi",
    [mySym] : "myKey1",
    age: 20,
    IsLoggedIn: true,
    email: "aman@gmaqil.com",
    LastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "amandwivedi@gmail.com"
// Object.freeze(JsUser);
// JsUser.email = "abcd@gmail.com"
// console.log(JsUser);

JsUser.greeeting = function(){
    console.log("hello JS user"); 
}

JsUser.greeetingTwo = function(){
    console.log(`hello JS user, ${this.name}`); 
}

console.log(JsUser.greeeting());
console.log(JsUser.greeetingTwo());



