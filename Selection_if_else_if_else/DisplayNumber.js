// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,..
let power = Math.floor(Math.random()*10)%7;
let number = 10**power;
console.log("Number : "+number);

if (number == 1) 
{
    console.log("Unit");
} 
else if (number == 10) 
{
    console.log("Ten");
} 
else if (number == 100) 
{
    console.log("Hundred");
} 
else if (number == 1000) 
{
    console.log("Thousand");
} 
else if (number == 10000) 
{
    console.log("Tens of thousand");
} 
else if (number == 100000) 
{
    console.log("Hundreds  of Thousands");
} 
else if (number == 100000) 
{
    console.log("Millions");
} 
else 
{
    console.log("Digit Overloaded");
}
