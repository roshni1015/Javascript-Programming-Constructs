// Check Input Year is a Leap Year or not.
let Year = (Math.floor(Math.random() *9000)+1000); 
console.log("Year : "+Year);
CheckLeap1=Year % 400;
CheckLeap2=Year % 100;
CheckLeap3=Year % 4;
if (CheckLeap1 == 0 || CheckLeap2 !=0 && CheckLeap3 == 0)
{
    console.log("Given year is a Leap year.");
}
else console.log("Given year is not a Leap year.");
