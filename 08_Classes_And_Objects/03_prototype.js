let myHeros = ["Thor","Hulk"]

let User = {
    username: "RUdr",
    age: 21,

    getUsername: function(){
        console.log(`user name is: ${this.username}`);
        
    }
}

Object.prototype.hobby = function(){
    console.log("music");
    
}

// console.log(User.hobby());
// ACCESSING OBJECT FUNCTION BY ARRAYS ARRAYS CAN ACCCES BECOUSE THEY ARE OBJECTS AND HAVE OBJECTS PROTOTYPE
// console.log(myHeros.hobby());

// INHERITANCE
// PROTOTYPAL INHERITANCE

let student = {
    rolNO: 1
}

let Teacher = {
    subject: "maths"
}

let TeacherSupport = {
    addSubject: "physics"
}

let TA = {
    fullTime: true,
    __proto__: TeacherSupport // OLD SYNTAX FOR PROTOTYPCAL INHERITANCE
}

Teacher.__proto__ = student

// mordern syntax:
Object.setPrototypeOf(Teacher, TeacherSupport)


let anotherUsername = "MannRudr        "

String.prototype.trueLength = function(){
    console.log(`The true length of string is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"cricket   ".trueLength()