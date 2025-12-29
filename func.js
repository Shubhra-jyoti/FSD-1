function abc(){
    document.write("hello world");
}
abc();
function xyz(a,b){
    console.log(a+b);
}
xyz(10,20);
//
(function(){
    console.log("Example");
})(); //this is an IIFE full form Immediately Invoked Function Expression no name function or anonymous function immediately called here semicolon is must after the function call in anonymous function

function out(a,b){
    return a+b; //no statement after return because it will not be executed
}
console.log(out(5,10));

function printname(fn,ln){
    document.write("<br>"+"First Name: "+fn+"<br>"+"Last Name: "+ln);
}
function printadd(a,b){
    document.writeln(out(a,b));
}
var g=function(a,b){
    return a*b;
}
//testing template literals
var p=3
var q=4
console.log(g(5,6));
console.log("hello"+" world");//string concatenation
var x=`Hello world ${p} !`; //template literals using backticks ``
console.log(x);
console.log(`the multiplication of ${3} and ${4} is ${g(3,4)}`); //template literals using backticks ``
console.log(`the multiplication of ${p} and ${q} is ${g(p,q)}`); //template literals using backticks ``
var a="hello\nworld"
console.log(a);
var a1=`hello
world`
console.log(a1);
// var a2="hello
// world" //this will give error
document.write(`hello
    world`); //template literals using backticks ``

//arrow finctions or es6 functions
const abc1=(a)=> a*a; //single parameter no need to use parenthesis no return keyword and curly braces
const abc2=(a)=>{
    var x=a*a;
    return x;
} //multiple statements need curly braces and return keyword

const sum=a=>{a+a;} //single parameter no need to use parenthesis gives undefined because no return keyword
console.log(sum(5));
const mul=(a,b)=>
    `multiplication of ${a} and ${b} is ${a*b}`;//' `

console.log(mul(5,6));
//rest and spread operators
function abc3(x,y,...z){//rest operator will give array of remaining parameters
    console.log("x: "+x);
    console.log("y: "+y);
    console.log("z: "+z);
    console.log("z length: "+z.length);
    console.log(typeof z); //array
    x=[1,2,3,4,5]
    y=[6,7,8,9,10]
    z=[...x,...y]; //spread operator will give individual elements of array
    console.log("z after spread operator: "+z);

}
abc3(1,2,3,4,5,6,7,8,9);
