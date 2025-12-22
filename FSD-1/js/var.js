// a=10 global
// let a=12 local
// const b=15 local 
// var c=15 global

var a=10;//global accesible throghout js
function my(){
   var b=20;//local only accessible inside function
    console.log(a,b);
}
console.log(a);
my();
// console.log(b); not accesible outside function
console.log(c)
var c=10; // undefined in above line
// var c=2  can ovverwride while using var and redeclare 
let c=6// let cannot be used to redeclare a variable
// console.log(c)   Uncaught SyntaxError: Identifier 'c' has already been declared (at var.js:17:5)





