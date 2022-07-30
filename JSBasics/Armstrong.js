let res = 0;
const num = 123 ;   //153 370 371
let temp = num;
while (temp > 0)
{
    let remainder = temp % 10;
    res += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}

if (res == num)
{
    console.log(`${num} is an Armstrong Number`);
}
else
{
    console.log(`${num} is not an Armstrong Number`);
}