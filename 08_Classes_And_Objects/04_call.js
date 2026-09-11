function setUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("MannRudr", "r@r.com", 21)
console.log(user);
