const coffee = function(num1, num2){
    console.log(this)
    return num1+num2
}

// coffee(2,3);

// ARROW FUNCTION WITH THIS

const tea = () => {
    console.log(this)
}

// tea();

const addNum = (num1, num2) => {
    return num1 + num2;
}

// console.log(addNum(2,3));

const addNum2 = (num1, num2) => num1 + num2;

const addNum3 = (num1, num2) => (num1 + num2);

// const user = () => {username: "rudr"}

// console.log(user())

const user = () => ({username: "rudr"})

console.log(user())