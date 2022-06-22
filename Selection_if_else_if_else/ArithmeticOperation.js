// Enter 3 Numbers do Arithmetic Operation
let a = Math.floor(Math.random()*90) + 1;
let b = Math.floor(Math.random()*90) + 1;
let c = Math.floor(Math.random()*90) + 1;
console.log("Numbers : "+a,b,c);

Eq1=a+b*c;     Eq2=a%b+c;     Eq3=c+a/b;     Eq4=a*b+c;
console.log("Calculated Equation values are : a+b*c = "+Eq1+" , a%b+c = "+Eq2+" , c+a/b = "+Eq3+" , a*b+c = "+Eq4);

let max = Eq1;
if(max<Eq2)
{
    max = Eq2;
}
if(max<Eq3)
{
    max = Eq3;
}
if(max<Eq4)
{
    max = Eq4;
}

let min = Eq1;
if(min>Eq2)
{
    min = Eq2;
}
if(min>Eq3)
{
    min = Eq3;
}
if(min>Eq4)
{
    min =Eq4;
}

console.log("Minimum value : " + min);
console.log("Maximum value : " + max);
