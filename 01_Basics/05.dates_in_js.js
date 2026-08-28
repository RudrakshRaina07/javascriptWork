let date = new Date();
// console.log(date)

// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toUTCString())

const myCreatedDate = new Date("08-28-2026")
// console.log(myCreatedDate.toDateString());

const newDate = Date.now()
// console.log(newDate)

// console.log(myCreatedDate.getTime())

//------------ TO CONVERT MILISECS IN SECS --------------

// console.log(myCreatedDate.getTime()/1000)   
// console.log(Math.floor(Date.now()/1000))


const myDate = new Date()

// console.log(myDate.getMonth()+1)   ZERO BASED INDEXING

// console.log(myDate.getDay())  {  5  }

console.log(myDate.toLocaleString("default", {
    weekday: "long",
}));

