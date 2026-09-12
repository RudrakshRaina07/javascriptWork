const mathPi = Object.getOwnPropertyDescriptor(Math, "PI")
// ITS PROPERTY WRITABLE IS FALSE WHICH IS DONE THORUGH C++ CODE THORUGH WHICH JAVASCRIPT ENGINE IS WRITTEN....
// SO WE CANNOT CHANGE ITS PROPERTY
// console.log(mathPi);

const User = {
    name: 'Rudr',
    age: 21,

    getInfo: function () {
        console.log(`${this.name} age is ${this.age}`);
        
    }
}

// console.log((Object.getOwnPropertyDescriptor(User, "name")));

Object.defineProperty(User, "name", {
    enumerable: false // Cannot iterator on this value
})

for (let [key, value] of Object.entries(User)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        
    }   
}