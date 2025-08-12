const promiseOne = new Promise(function(resolve, reject){
      //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task Completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2 Called');
        resolve()
    },1000)
}).then(function(){
    console.log('Asyn task 2 completed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task Completed');
        resolve({user: "Aman", email : 'amandwivedi@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName: 'Aman', email:'aman@gmail.com'})
        }else{
            reject('ERROR: Somthing Went Wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.userName;
}).then(function(UserName){
    console.log(UserName);
}).catch(function(error){
    console.log(error);
})

// here we chain then and catch first then return value goes to  next then and continues to 
// last then 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: 'JavaScript', email:'aman@gmail.com'})
        }else{
            reject('ERROR: JS Went Wrong')
        }
    },1000)
})

async function PromiseFiveConsume(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

PromiseFiveConsume();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.