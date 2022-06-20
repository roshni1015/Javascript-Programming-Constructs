//Unit Conversion
// 1ft = 12 in then 42 in = ? ft
let Inches = 42;
let InchetoFeet = Inches / 12;
console.log("1ft = 12 in Then 42 in = " + InchetoFeet + "ft");


// Rectangular Plot of 60 feet x 40 feet in meters
let AreaInFeet = 60*40;
let AreaInMeter = AreaInFeet / 10.764;
console.log("Aera In Meter = " + AreaInMeter);


//Calculate area of 25 such plots in acres
let AreaInAcre = AreaInFeet * 25 / 43560;
console.log("Area of 25 Plots in Acre = " + AreaInAcre);