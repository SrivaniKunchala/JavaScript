//forEach() function
const num = [45, 4, 9, 16, 25];
let txt = "";
num.forEach(testFunction);
console.log(txt);
function testFunction(each) {
  txt += each + "\t";
}

//map() function
const num2 = num.map(addValue);
console.log(num2);
function addValue(result) {
  return result + 10;
}

//filter() function
const fil = num.filter(greaterThan);
console.log(fil);
function greaterThan(maxi) {
  return maxi > 10;
}

//indexOf in arrays
const things = ["Table","Chair","Bed","Pen","Chair","Bed"];
let index = things.indexOf("Chair") + 1;
console.log("Index value is  = "+ index);   // Gives the indexOf chair
// we can also use second argument method 
//indexOf returns -1 if element is not found

//lastIndexOf in arrays
let lastIndex = things.lastIndexOf("Chair")+1;
console.log("Last Index value is  = "+ lastIndex );   //gives the index value of the element

//Arrays.keys() in arrays  -- It returns an Array Iterator object
let keys=things.keys();
let res ="";
for(let k of keys)
{
    res += k + "\t";
} 
console.log(res);

//entries() Method
let t = things.entries();
for (x of t)
{
    console.log(x);
}
