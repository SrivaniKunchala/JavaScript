//using async await
// const addition = (a,b) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(`Addition of ${a} and ${b} is ${a+b}`)
//         });
//     },1500);
// }

// const promise1 = async() => {
//     try {
//         const sum = await addition(10,20);
//         console.log(sum);
//     } catch (err) {
//         console.error(err);
//     }
// } 
// promise1();

const addition = (a,b) => {
    return new Promise((resolve,reject) => {
       setTimeout(()=> {
        resolve(`Addition of ${a} and ${b} is ${a+b}`);
       },1500);     
    });
}
const subtraction = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(`Subtraction of ${a} and ${b} is ${a-b}`);
        },1500);
    });
} 
const multiplication = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(`Multiplication of ${a} and ${b} is ${a*b}`);
        },1500);
    });
} 
const division = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(`Division of ${a} and ${b} is ${a/b}`);
        },1500);
    });
} 
const modulus = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(`Modulus of ${a} and ${b} is ${a%b}`);
        },1500);
    });
}

const output = async() => {
    try {
        const add = await addition(20,10);
        const sub = await subtraction(20,10);
        const mul = await multiplication(20,10);
        const div = await division(20,10);
        const mod = await modulus(20,10);
       console.log(add);
       console.log(sub);
       console.log(mul);
       console.log(div);
       console.log(mod);
    } catch(err) {
        console.error(err);
    }
}
output();