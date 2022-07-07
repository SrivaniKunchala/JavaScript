//Arrow Functions

// 1. adding of elements
const add = (a,b) => {     //const add = (a,b) => a+b;
    return (a+b);
}

// 2. Subtracting of elements
const sub = (a,b) => {    //const sub = (a,b) => a-b;
    return a-b;
}

// 3. Multiplication of elements
const mul = (a,b) => {    //const mul = (a,b) => a*b;
    return a * b;
}

// 4. Dividing of elements
const div = (a,b) => {    //const div = (a,b) => a/b;
    return a / b;
}

// 5. Modulus of elements
const mod = (a,b) => {     // const mod = (a,b) => a%b;
    return a % b;
}

// 6. Square of number
const square = (a) => {    //const square = (a) => a*a;
    return a * a;
}

// 7. cube of a number
const cube = (a) => {
    return a*a*a;
}
// 8. Even Number or not
const even = (a) => {
    if(a%2 === 0)
        return "Even Number";
    else
        return "Odd Number.";
}

// 9. Odd Number or not
const odd = (b) => {
    if (!a%2 === 0)
    return "Odd Number";
    else
    return "Even Number";
}

// 10. Prime Number or not
const prime = (b) => {
    if((b%1 ==0) && (b%b==0))
    return "Prime Number";
    else 
    return "Not a Prime Number";
}
let a = 10, b = 5;

console.log(`Addition of $[a] and $[b] is.. `, add(a,b));
console.log(`subtraction of $[a] and $[b] is.. `, sub(a,b));
console.log(`Multiplication of $[a] and $[b] is.. `, mul(a,b));
console.log(`Division of $[a] and $[b] is.. `, div(a,b));
console.log(`Modulus of $[a] and $[b] is.. `, mod(a,b));
console.log(`Square of $[a] is.. `, square(a));
console.log(`Cube of $[a] is.. `, cube(a));
console.log(even(a));
console.log(odd(b));
console.log(prime(b));