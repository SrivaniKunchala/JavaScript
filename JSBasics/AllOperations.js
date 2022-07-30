var X = 20; var Y = 30;
var add = addValues();
var sub = subValues();
var mul = mulValues();
var div = divValues();
var mod = modValues();
function addValues() {
   return X + Y;     //Adding values
}
function subValues() {
   return  X - Y;    //Subtrating values
}
function mulValues() {
   return X * Y;    //Multiplying values
}
function divValues() {
   return X / Y;   //Dividing Values (here we get division)
 }
function modValues() {
    return X % Y;   //Modulus (here we get division Remainder)
}
console.log("Addition of " + X + " and "+ Y + " is "+ add);
console.log("Subtraction of " + X + " and "+ Y + " is "+ sub);
console.log("Multiplication of " + X + " and "+ Y + " is "+ mul);
console.log("Division of " + X + " and "+ Y + " is "+ div);
console.log("Modulus of " + X + " and "+ Y + " is "+ mod);
