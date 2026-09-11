class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

    addCourse(){
        console.log(`course added by ${this.username}`);
        
    }
}

const rudr = new Teacher("Rudrmann", "r@r.com")
console.log(rudr);

rudr.addCourse()
rudr.logMe()

const user1 = new User("uddhav")
