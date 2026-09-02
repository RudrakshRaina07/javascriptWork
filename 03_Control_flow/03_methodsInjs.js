// map(), filter(), reduce()

let arrays = [1,2,3,4,5,6,7,8,9]

const newNums = arrays.filter((num) => (num > 3))

// console.log(newNums);

const mapNums = arrays.map(function(num){
    return num*10
})

// console.log(mapNums);

const reduceNums = arrays.reduce((acc, num) => (acc+num), 0)
console.log(reduceNums);
