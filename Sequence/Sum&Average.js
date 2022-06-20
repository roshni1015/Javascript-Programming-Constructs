//Reads 5 Random 2 Digit Values Then Find Their Sum and the Average
let num1 = Math.floor(Math.random() * 99) +1;
let num2 = Math.floor(Math.random() * 99) +1;
let num3 = Math.floor(Math.random() * 99) +1;
let num4 = Math.floor(Math.random() * 99) +1;
let num5 = Math.floor(Math.random() * 99) +1;
let Sum = num1 + num2 + num3 + num4 + num5;
let Avg = Sum / 5;

console.log("Sum of Random 2 Digit Numbers : " + Sum);
console.log("Average of 5 Random 2 Digit Number : " + Avg)