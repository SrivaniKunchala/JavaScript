// Hoisting is applied for var type and functions only
x = 20;
y = 10;
sum = x + y;
console.log(`sum of ${x} and ${y} is `,sum);
var x, y, sum;
square(4);
cube(3);
function square(s){
    res = s * s;
    console.log(`square of ${s} is`,res);
    var res,s;
    
}
function cube(c){
    res = c * c * c;
    console.log(`cube of ${c} is`,res);
    var res,c;
}