//-------------- falsy value -------
// false, 0, -0, bigInt 0n, "", null, undefined, 

//  ------------ truthy values ------------
// true, "0", "false", [], {}, function(){}, " "

const email = []

// if(email){
//     console.log("email exists");
    
// }

// if(email.length === 0){
//     console.log("email doesn't exists");
    
// }

const User = {}

// if(Object.keys(User).length === 0){
//     console.log("user is empty");
    
// }

//  ------------ NULLISH COALESCING OPERATOR (??): null , undefined ----------- 

let val1;
// val1 = null ?? 10;
val1 = null ?? undefined ?? 8;

console.log(val1);
