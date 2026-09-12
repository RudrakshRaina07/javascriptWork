class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

    // USING STATIC NO OBJECT OF THIS CLASS AND PARENT CLASS CAN ACCESS THIS METHOD
    static createId(){
        return "123"
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