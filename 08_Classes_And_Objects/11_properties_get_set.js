function User(email, password){
    this._email = email,
    this._password = password

    Object.defineProperty(this, 'email', {
        set: function(value){
            this._email = value
        },
        
        get: function(){
            return this._email.toUpperCase()
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password
        },

        set: function(value){
            this._password = value
        }
    })
}

const rudr = new User("r@r.com", "rudrMann")

console.log(rudr.email);
