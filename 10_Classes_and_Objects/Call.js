function SetUserName(user){
    this.username =  user;
    console.log('called');
    
}


function createUser(username, email, password)
{
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}

const UserOne = new createUser('Aman', '123@fb.com', '123')
console.log(UserOne);


