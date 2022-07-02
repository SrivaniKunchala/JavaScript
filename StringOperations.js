let string1 = "JavaScript Training";
let string2 = "Evening Session";
let lengthOfStr1 = string1.length;  //using length method
let lengthOfStr2 = string2.length;
console.log("Length Of "+ string1 + " is "+ lengthOfStr1);
console.log("Length of "+ string2 + " is "+ lengthOfStr2);
let str1 = "We are 'Computer Science' Students";
console.log(str1);
//String Methods
console.log("slice() Method  : " +string1.slice(11,19));   // String slice() Method used to extract the part of a string (end is not included)
console.log("slice() method with negative values  : "+ string1.slice(-9,19)); //slice() with negative extracts the string part from the end

console.log("substring() Method  : "+ string1.substring(0,10));   // String substring() is same as slice() method

//Difference between slice() and substring() is that substring treats start and end values less than 0 as 0

console.log("substr() Method  : "+string1.substr(11,8));   //String substr() Method is similar to slice() , difference is takes end part as the length to be extracted 

console.log("replace() Method  : "+string2.replace("Evening","Morning"));  // replace() Method is case sensitive, we can use /i to avoid it

console.log("toUppercase() Method : "+str1.toUpperCase());  //converts string to upper case
console.log("toLowercase() Method : "+str1.toLowerCase());  //converts string to lower case

console.log("concat() Method : "+ string1.concat(" ",string2));  //concat() Method combines two strings

let str2 = "  Welcome to Hyderabad   ";
console.log(str2.trim());  //removes spaces from the start and end

// String Character Methods
console.log("charAt() Method  : "+str1.charAt(0));  // returns the value at index 0
console.log("charCodeAt() Method  : "+str1.charCodeAt(0));   //returns the unicode value of index 0

