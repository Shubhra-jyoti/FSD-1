console.log("for loop below")

for(let i=1;i<=5;i++){
    console.log(i)
}
console.log("while below")

let i=3
while(i<=6){
    i++;
    console.log(i)
}

//exit control loop do while
console.log("do while below");
let r=6;
do{
    console.log(r);
    r++;

}while(r<=5);

console.log("for of below")
var f=["banana","apple","pineapple"]
for (let i of f){
    console.log(i);
}
for(let i in f){
    console.log(i)
}

var obj={name:"abc",age:20,city:"abad"}
for(let key in obj){
    console.log(obj[key])
    console.log(key,":",obj[key])
}//in array for in loop returns index of every element


var i1=5
for(var i1=0;i1<2;i1++){
    console.log(i1)
}
console.log(i1)
