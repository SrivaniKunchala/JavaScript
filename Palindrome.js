//Program to check whether the given String is Palindrome or not

function checkPalindrome(str)
{
    const strLen = str.length;
    for (let i=0;i<strLen/2;i++)
    {
        if(str[i]!=str[strLen-1 -i]){
            return str +" is not a Palindrome"; 
        }
        else
        return str+" is Palindrome";

    }

}
const string1= "maddam";
const string2= "hello";
const res1 = checkPalindrome(string1);
const res2 = checkPalindrome(string2);
console.log(res1);
console.log(res2);