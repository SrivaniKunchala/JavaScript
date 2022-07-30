// promises are similar to callbacks in javacript
// when there is requirement of multiple callbacks within themselves then it is called callback Hell
//to avoid callback Hell we use promises for simple and understandable code

const { rejects } = require("assert");
const { resolve } = require("path");
let a= 10
let b= 20

let p = new Promise((resolve,rejects) => {  // Finding sum
   
    sum = a + b
    if (sum != 0)
    {
        resolve(`The sum of ${a} and ${b} is ${sum}`)
    } else {
        rejects(`The sum is Null or 0`)
    }
})

p.then((result) => {
    console.log(result)
    return new Promise((resolve,rejects) => {    // finding sum is even or odd  
        if (sum % 2 == 0)
        {
            resolve(`The sum ${sum} is a Even Number`)
        } else {
            rejects(`The sum ${sum} is a Odd Number`)
        }
    })
}).then((result) => {
    console.log(result)
    return new Promise ((resolve,rejects) => {   // square root of sum
        let square = sum * sum
        resolve(`the square of ${sum} is ${square}`)
        
    })
}).then((result) => {
    console.log(result)
}).catch((result) => {
    console.log(result)
})