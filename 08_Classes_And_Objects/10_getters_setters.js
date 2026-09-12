class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        // if we will use password then it will give maximum stack error as it is will call constructor function again and again
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value   
    }


}

const Rudr = new User("r@r.com", "rudrMann")
console.log(Rudr.password);
