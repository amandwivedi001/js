const user = {
    userName: "Aman",
    price: 999,

    welcomMassage: function(){
        console.log(`${this.userName} , welcome to website` )
        console.log(this);
        
    }
}

// user.welcomMassage()
// user.userName = "sam"
// user.welcomMassage()

// console.log(this);

// function chai(){
    // userName: "Hitesh"
//     console.log(this.UserName); --> it gives an error this only works for objects
// }

// chai();

const chai = () => { // -> this is an arrow function
//     userName: "Hitesh"
//     console.log(this.UserName); --> It also gives an error
}

// chai();

// const addTwo = (num1, num2) => num1 + num2; 
// const addTwo = (num1, num2) => (num1 + num2); 

// this is an implicit return, when you remonve paranthisis then don not need any return type it automatically return

const addTwo = (num1, num2) => ({userName: "Aman"}); 


console.log(addTwo(5,6))

// const myArray = [1,3,4,2,4,6]

// myArray.forEach()