const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("promise one executed");
        
    }, 1000);
})

promiseOne
.then(function(){
    console.log("promise one then executed");
    
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("promise Two executed");
        resolve()
    }, 1000);
})

promiseTwo
.then(function(){
    console.log("promise Two then executed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("promise three executed");
        resolve({username: "rudrMann", age: 21})
    }, 1000);
})

promiseThree
.then(function(user){
    console.log(user.username);  
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 4");
        resolve()
    })
}).then(() => {
    console.log("task 4 resolved");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve("promise five ")
        }else{
            reject("Error")
        }
    })
})

// promiseFive
// .then((message) => {
//     console.log("message: ", message);
// })
// .catch((error) =>{
//     console.log("Something went wrong");
// })
// .finally(() => {
//     console.log("prommise is either resolved or rejected");
// })

async function consumePromiseFive() {
    try {
        const res = await promiseFive
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getUsers() {
    try {
        const res = await fetch("url")
        const data = await res.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

getUsers()

fetch("url")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log(err)
)