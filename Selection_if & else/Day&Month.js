// Prints true if day of month is between March 20 and June 20,
let Day=(Math.floor(Math.random() * 10)%31)+1;
let Month=(Math.floor(Math.random() * 10)%6)+1;

console.log("Day : " +Day+ " & Month : " +Month);
if ( Day> 20 && Day< 31 && Month == 3 )
{
console.log("Given Date is Between Range.");
}
else if ( Day> 1 && Day< 30 && Month == 4 )
{
console.log("Given Date is Between Range.");
}
else if ( Day> 1 && Day< 31 && Month == 5 )
{
console.log("Given Date is Between Range.");
}
else if ( Day> 1 && Day< 20 && Month == 6 )
{
console.log("Given Date is Between Range.");
}
else
{
console.log("False");
}