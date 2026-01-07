var a=10
var b="abc"
var c=true
var d; //undefined  meaning value is not defined
var e=null;
// immutable cannot change above
var x=5
var y="5"
console.log(x==y);
console.log(x===y); //check data type is also same 
//non primitive datatype below non primitive
var a=["abc","xyz","cdf"] //typeof array is object
var b={
    name:"abc",
    age:20
} //object  

var b=10
var c="pqr"
var d;
var e=5
var f="5"
var g=null
console.log("type of b is",typeof(b))
console.log("type of c is",typeof(c))
console.log("type of d is",typeof(d))
console.log("type of g is",typeof(g))
console.log(e==5)
var x=3+4+"5"
var y="5"+2+0
console.log(x,y)
console.log("type of a is",typeof(a))

