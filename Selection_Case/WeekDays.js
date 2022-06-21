//Read a Number and Display the week day (Sunday, Monday,…) using Case
const prompt = require("prompt-sync")();

let dayNumber = prompt("Enter day number : ");
switch(dayNumber)
{
    case '0':
        console.log("Sunday");
        break;
    case '1': 
        console.log("Monday");
        break;
    case '2': 
        console.log("Tuesday");
        break;
    case '3': 
        console.log("Wednesday");
        break;
    case '4':
        console.log("Thursday");
        break;
    case '5':
        console.log("Friday");
        break;
    case '6':
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input");
        break;
}