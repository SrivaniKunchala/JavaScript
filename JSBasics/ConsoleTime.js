// console.time() fucntion runs for a particular time of interval
// it can be used to check the efficiency of that loop and is used for testing purpose majorly

console.time('Test');   //paramater is a lable which is optional

let a = 5;
let b = 4;
let add = 0;
const sum = () => {
    for (let i =1; i<= 10; i++)
    {
        add += i;
    }
    console.log('Addition of 1 to 10 is ',add);
    let add2 = a+b;
  console.log(`sum of ${a} and ${b} is ${add2}`);
}
sum();
console.timeEnd('Test');
