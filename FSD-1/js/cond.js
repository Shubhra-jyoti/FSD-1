let a=35
if(a>5){
    console.log("pass")
}
else{
    console.log("fail")
}

var role="voldemort"
switch (role){
    case "admin":
        console.log("full access");
        break;
    case "editor":
        console.log("edit access");
        break;
    case "viewer":
        console.log("read only");
        break;
    default:
        console.log("invalid access");           
}
//ternary
let age=18
console.log(age>=18 ? "adult":"kid")


//scope

//var x=10
if(true){
    var x=3
}
console.log(x) //value changed at global scope 

let xy=10
if(true){
    let xy=3
}
console.log(xy) //the value 3 exists only inside the block let has block scope
