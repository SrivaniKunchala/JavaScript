const array1 = ["c","c++","java","javascript","python"];
let a1Lth = array1.length;
//displaying all array elements and length of the array
console.log("Length of array 1 : "+a1Lth);
console.log("All Array Elemnts are... ");
console.log(array1);
//sorting of array
const array2 = ['c','e','h','a','b'];
console.log("Sorting of elements... "+array2.sort());   //sorting

//Adding Elements to the array ... there are two ways
//first adding using push() method
array1.push("HTML");
console.log("Push() -- "+array1);

//second method is to use length method
array1[array1.length]="Ruby";
console.log("length -- "+ array1);  // It is easier to append the elements into an array using length
//we can also use unshift() to add elements at the start 
array1.unshift("Pearl");
console.log("unshift() -- "+ array1);
//Removing Elements from the array..
array1.pop();   //removes elements from the end
console.log("pop() -- "+array1);

array1.shift();
console.log("shift() -- "+array1);  //removes elements from the start

//checking typeOf array
let type = typeof array1;
console.log("Type of array1 is.. "+ type);  // In javascript array is an object to solve this we use isArray() Method
console.log("Using isArray() .. " +Array.isArray(array1));
//Converting arrays to strings using toString()
console.log("using toString().. " +array2.toString());

//using join() array converting to string
console.log("using join().. "+ array2.join("--"));

//Merging arrays
const flower = ["Rose","Lily","Jasmine"];
const scents = ["Lavender","Sweet","Gulab"];
const fruit = ["Apple","Orange","grapes"];
console.log("Merging arrays..  "+ flower.concat(scents)); // concatenating 2 arrays
console.log("concatenating 3 arrays.. "+flower.concat(scents,fruit));  // concatenating 3 arrays

//sorting array elements which are numbers
const num1 = [45,100,25,14,7,3];
const num2 = [6,12,85,2,47,96,3];
console.log("Sorting number arrays in ascending order.. "+ num1.sort(function(a,b){return a-b}));
console.log("Sorting number arrays in descending order.. "+ num1.sort(function(a,b){return b-a}));

//Maximum number in array
function maxNumber(max)
{
    return Math.max.apply(null,max);
}
console.log("Maximum array number is .."+ maxNumber(num2)); // displays maximum number

//Minimum number in array
function minNumber(min)
{
    return Math.min.apply(null,min);
}
console.log("Minimum array number is .."+ minNumber(num2)); // displays minimum number


