// let newArr = new Array(1, 2, 3, 4, 5)

// console.log("A ", newArr)

// // SLICE
// console.log(newArr.slice(1, -1))
// console.log("B ", newArr)

// // SPLICE
// console.log(newArr.splice(1, 3))
// console.log("C ", newArr)

// MORE ABOUT ARRAYS

let avengers = ["ironman", "hulk", "thor"]
let dc_heros = ["superman", "batman", "flash"]

// avengers.push(dc_heros)
// console.log(avengers)

const allHeros = avengers.concat(dc_heros)
// console.log(allHeros);

console.log(Array.isArray(allHeros))
console.log(Array.isArray("allHeros"))
console.log(Array.from("allHeros"))
console.log(Array.of("allHeros"))

console.log(Array.from([100, 200, 300]))

console.log(Array.of(100, 200, 300, "", null, undefined, "rudr"))


const allHeros2 = [...avengers, ...dc_heros]
console.log((allHeros2));


const badArray = [1,2,3,[4,5,6],7,8,[6,5,3,[5,6]]]
console.log(badArray)

const goodArray = badArray.flat(Infinity)
console.log(goodArray);
