// Promises.All() is a function which can call all the created promises at teh same time

const { rejects } = require("assert");
const { Agent } = require("http");
const { resolve } = require("path");

// let myName = new Promise ((resolve,rejects) => {
//     resolve(`My Name is Srivani Kunchala`)
// })

// let myAge = new Promise ((resolve,rejects) => {
//     resolve(`My Age is 24`)
// })

// let myEducation = new Promise((resolve,rejects) => {
//     resolve(`I am from MLR graduated in 2020`)
// })

// Promise.all([
//     myName,
//     myAge,
//     myEducation
// ]).then((intro) => {
//     console.log(intro)   
// })


const name = 'Srivani Kunchala'
const age = 0
const collegeName = 'MLR'
const batchNo = 2020

const myName = new Promise((resolve,rejects) => {
    if (name != null)
    {
        resolve(`My Name is ${name}`)
    } else {
        rejects(`Name is Empty`)
    }
})

const myAge = new Promise ((resolve,rejects) => {
    if((age != 0) && (age >= 18)) {
        resolve(`My Age is ${age}`)
    } else {
        rejects(`under Age`)
    }
})

const myEducation = new Promise((resolve,rejects) => {
    if ((collegeName != null)) {
        if((batchNo != 0)){
            resolve(`I am from ${collegeName} graduated in ${batchNo}`)
        }
        else
        rejects('Batch number is Empty')
    } else {
        rejects(`CollegeName is empty`)
    }
})

Promise.all([
    myName,
    myAge,
    myEducation
]).then((intro) => {
    console.log(intro)
}).catch((err) => {
    console.log(err)
})