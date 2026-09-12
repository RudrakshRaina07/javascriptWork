const User = {
    _email: 'ru@r.com',
    _password: "rudrMann",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const Rudr = Object.create(User)
console.log(Rudr.email);
