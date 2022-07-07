// Map() Function using Arrow and callback fu7nctions
const number = [3,2,5,7,9];
const num = number.map( res => res +10);

console.log("Before using map() : ", number);
console.log("After using map() : ", num);

const filterResponse = number.filter(value =>  value > 3);
console.log(filterResponse);

const reduceResponse = number.reduce((previousValue, currentValue)=> previousValue+currentValue);
console.log(reduceResponse);

