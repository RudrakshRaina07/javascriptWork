function User(username, loginCount, loggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.loggedIn = loggedIn

    this.greeting = function () {
        console.log(`Username: ${this.username}`);
    }

    return this
}

// ##  WRONG USAGE
// const userOne = User("Rudr", 12, false)
// THIS userTwo WILL OVERRIDE THE userOne values
// const userTwo = User("mann", 7, true)
// console.log(userOne);

const userOne = new User("Rudr", 12, false)
const userTwo = new User("Rudr", 12, false)
console.log(userOne);
console.log(userTwo);