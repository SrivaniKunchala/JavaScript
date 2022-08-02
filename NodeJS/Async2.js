const checkPalindrome = (string) => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            const strLen = string.length;
            for (let i = 0; i < strLen ; i++)
            {
                if(string[i] == string[strLen-1 -i])
                {
                    resolve(`${string} is a Palindrome`);
                } else {
                    reject(`${string} is not a Palindrome`);
                }
            }
        });
    });
}
const checkArmstrong = (number) => {
    return new Promise((resolve,reject) => {
        let sum = 0;
        let temp = number;
        while (temp > 0)
        {
            let remainder = temp % 10;
            sum += remainder * remainder * remainder;
            temp = parseInt(temp/10);
        }
        if (sum == number) {
            resolve(`${number} is a Armstrong Number`);
        } else {
            reject(`${number} is not a Armstrong Number`);
        }
    });
}

const pal = async() => {
    try{
        const result = await checkPalindrome('madam');
        const result1 = await checkArmstrong(153);
        console.log(result);
        console.log(result1);
    } catch(err) {
        console.log(err);
    }
}
pal();