// Callback Functions

//1. Addition of numbers
function add(x,y,sum)
{
    sum(x+y);
}
add (5,10,function(result){
    console.log(`Addition : `, result);
});

// 2. Subtraction of Numbers
function sub(x,y,diff)
{
    diff(x-y);
}
sub(10,5,function (result){
    console.log("Subtraction : ", result);
});

// 3. Multiplication of Numbers
function mul(x,y,multiply)
{
    multiply(x*y);
}
mul (10, 5, function(result){
    console.log("Multiplication : ",result);
});

// 4. Division of Numbers
function div(x,y,divide)
{
    divide(x/y);
}
div(10,5,function(result){
    console.log("Division : ",result);
});

// 5. Modulus of Numbers
function mod(x,y,modulus)
{
    modulus(x % y);
}
mod(10,3,function(result){
    console.log("Modulus : ",result);
});

// 6. Even Number or not
function even(x,evenNumber)
{
    evenNumber(x);
}
even(4,function(result){
    if(result%2==0)
        console.log("Even Number");
    else
    console.log("Odd Number");
});

// 7. Odd Number 
function odd(y,oddNumber)
{
    oddNumber(y);
}
odd (5, function(result){
    if(result%2 !== 0)
    console.log("Odd Number");
    else
    console.log("Even Number");
});

// 8. Prime Number
function prime(x,primeNumber)
{
    primeNumber(x);
}
prime(10,function(result){
    if((result%2 ==0) && (result%2 ==0))
    console.log("Prime Number");
    else
    console.log("Not a Prime Number");
});

// 9. Square Number
function square(x,squareNumber)
{
    squareNumber(x*x);
}
square(5,function(result){
    console.log("Square of a Number : ", result);
});

// 10. cubes of Number
function cube(y,cubeNumber)
{
    cubeNumber(y*y*y);
}
cube(3,function(result){
    console.log("Cubes of a Number : ", result);
});