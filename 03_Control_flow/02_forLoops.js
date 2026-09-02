let arrays = [1,2,3,4,6,7,7]

for (const num of arrays) {
    // console.log(num)
}

for (const key in arrays) {
    // console.log(key)
}

// arrays.forEach((val) => {
//     console.log(val);
    
// });

arrays.forEach(function (val){
    // console.log(val);    
});

let langs = {
    js : "javascript",
    cpp : "c++",
    py : "Python"
}

// for (const [key, val] of langs) {
//     // console.log(`${key} -> ${val}`)   --------------ERROR-------------
// }

for (const key in langs) {
    // console.log(`${key} -->> ${langs[key]}`);  
}

// -------FOR EACH DOESNOT WORK IN OBJECTS ---------------
// langs.forEach((val) => {
//     console.log(val);
    
// });

const map = new Map()

map.set("IN", "India")
map.set("RS", "Russia")
map.set("FR", "France")

for (const [key, val] of map) {
    // console.log(`${key} -> ${val}`)
}

// console.log(Object.keys(map))

// for (const key in map) {
//     console.log(key);   // ------- PRINT NOTHING-------
    
// }

map.forEach((key, val) => {
    // console.log(`${key} -> ${val}`);   ------ GIVE OPPOSITE-----    ---->>VAL -> KEY
    
});

map.forEach((val, key) => {
    // console.log(`${key} -> ${val}`);
    
});