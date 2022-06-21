//Unit Conversion of different Length units
const prompt = require("prompt-sync")();

console.log("Options : \n1)Feet to inch \n2)Inch to feet \n3)Feet to meter \n4)Meter to feet" );

let InputLength = prompt("Enter Length : ");
let option =prompt("Please Choose the Option : ");
                   
switch (option)
{
   case '1' :
       console.log("Feet to inch = " +InputLength*12);
       break;
   case '2' :
       console.log("Inch to feet = " +InputLength/12);
       break;
   case '3' :
       console.log("Feet to meter = " +InputLength/3.2808);
       break;
   case '4':
       console.log("Meter to feet = " +InputLength*3.2808);
       break;
   default :
       console.log("Wrong Input");
       break;           

}