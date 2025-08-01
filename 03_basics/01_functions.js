function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName(); --> this is excution
// sayMyName; --> this is reference


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let number = number1 + number2;
    // return number;

    return number1 + number2
}

const result = addTwoNumbers(4,6);

// console.log(result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name")
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Aman"));

function calculateCartPrice(...num1){ // ... is rest operator which take more than one value and return it in form of array

    return num1;
}

// console.log(calculateCartPrice(200, 300, 3300));

const user = {
    userName: "Aman",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user);

handleObject({
    userName : "Lalla",
    price: 100000000
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2 ,3, 4]));
