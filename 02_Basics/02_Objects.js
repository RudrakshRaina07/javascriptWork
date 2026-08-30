// ---------- OBJECT LITERALS

const mySym = Symbol("Key1") // symbol declaration and usage in objects

let JsUser = {
    name: "rudraksh",
    age:  21,
    loggedInDays: ["Monday", "Tuesday"],
    [mySym]: "myKey1",
}

// console.log(JsUser)

// console.log(JsUser.loggedInDays);
// console.log(JsUser["name"]);

// --------- SYMBOL USAGE --------
        // console.log(JsUser[mySym]);

        // console.log(mySym);

// ADDING FILEDS AND FREEZING OBJECT FROM GETTING CHANGED
        // JsUser.location = "Jammu"
        // console.log(JsUser);
        // JsUser.location = "Mumbai"
        // console.log(JsUser);

        // Object.freeze(JsUser)
        // JsUser.location = "Pune"
        // console.log(JsUser);

// ADDING FUNCTIONS IN OBJECTS

        // JsUser.greetings = function() {
        //     console.log("hello Js user")
        // }

        // console.log(JsUser.greetings);

        // JsUser.greetingsTwo = function(){
        //     console.log(`Hello jsUser : ${JsUser.name}`);
        // }

        // console.log(JsUser.greetingsTwo())

// ---------- SINGLETON OBJECT-----------

const obj = new Object()
// console.log(obj)
obj.name = "rudr"
obj.email = "r@g.com"
obj.isLoggedIn = true

// console.log(obj);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

const obj3 = {obj1, obj2}
// console.log(obj3);

const obj4 = Object.assign(obj1, obj2) // assign obj2 key:value to obj1
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2) // assign obj1 and obj2 value to empty object
// console.log(obj5);

const obj6 = {...obj1, ...obj2}
// console.log(obj6);

const User = {
    name: "rudr",
    email: "r@r.com",
    isLoggedIn: true
}

console.log(Object.keys(User))
console.log(Object.values(User))
console.log(Object.entries(User))
console.log(Object.hasOwnProperty('isLoggedIn'))