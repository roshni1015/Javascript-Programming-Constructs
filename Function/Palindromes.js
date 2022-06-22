const prompt = require("prompt-sync")();
var n = prompt("Please enter the number : ");

function rev(n, temp)
{
    if (n == 0)
        return temp;
 
    temp = (temp * 10) + (n % 10);
 
    return rev(Math.floor(n / 10), temp);
} 
    let temp = rev(n, 0);
     
    if (temp == n)
    {
        console.log("Number is Palindrome");
    }
    else
    {
        console.log("Number is not Palindrome");
    }
 

