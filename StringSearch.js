let str1 = "Don't stop when you are tired stop when you are done";
console.log("indexOf() Method : "+ str1.indexOf("stop"));   //indexOf() Method searches the first occurence of the word
console.log(str1.indexOf("stop",12));
console.log("lastIndexOf() Method : "+str1.lastIndexOf("stop"));  //lastIndexOf() Method search last occurences of the word
// indexOf() and lastIndexOf() both returns -1 when search element is not found
console.log("Test : "+str1.indexOf("Hello"));

console.log("search() Method : "+str1.search("stop"));  //search() Method returns the first occurence of the word
// indexOf() and search() Methods are not same , Because search() does not take second argument but indexOf() takes
let str2 = "Love yourself as no one Loves you";
console.log("match() Method : "+str2.match("ove"));


console.log("includes() Method : "+str1.includes("Don't"));  // checkes whether it has specified values or not
console.log(str1.includes("stop",12)); //checks from that position 

console.log("startsWith() Method : "+ str2.startsWith("Love"));  // checks whether the string starts with specified values or not
console.log(str2.startsWith("Love",5)); // checks whether specified value starts from that index or not

console.log("endsWith() Method : "+str2.endsWith("you"));  //checks string ends with specified values



