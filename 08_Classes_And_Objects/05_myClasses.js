// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         console.log(`${this.username.toUpperCase()}`);
        
//     }
// }

// const user1 = new User("MannRudr", "r@r.com", "mann")
// console.log(user1.encryptPassword());


// user1.changeUsername()

// BEHIND THE SCENE ------>

function User(username, password){
    this.username = username
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    console.log(`${this.username.toUpperCase()}`);
}

const user1 = new User("rudr", "rudrmann")

user1.changeUsername()
console.log(user1.encryptPassword());
