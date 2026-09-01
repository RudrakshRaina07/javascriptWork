// Immediately Invoked Function Expressions (IIFE)
// Global scope ke pollution se problem hoti hai kahi baar toh uss pollution ko hatane ke liye iife use krte hai (function ko instantly execute krna)


// iife function invoked ho jata hai lakin usse yeh nhi pata hota ki context kab rokna hai toh iske liye semicolon (;) end main use krna hota hai
// named iife
(function coffee(){
    console.log("DB connected")
})();

// unnamed iife with parameters
( (username) => {
    console.log(`DB connected two,  ${username}`);
})('rudr');

( (username) => {
    console.log(`DB connected two,  ${this.username}`);
})('rudr');

( function coffee2(username){
    console.log(`DB connected two,  ${this.username}`);
})('rudr')