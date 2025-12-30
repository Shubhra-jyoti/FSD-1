// x=7
// y=8
// //z=y++//z=8 y=9
// a=z++ + ++x//z=9 x=8 a=16
// b=x-- //b=8 x=7

let n=["a","b","c"]
n.forEach(n1 =>{
    console.log(n1)
})
var i1=5
for(var i1=0;i1<2;i1++){
    console.log(i1)
}
console.log(i1)//i1=2 because var is function scoped not block scoped
let z=10
if(true){
    z=20
}
console.log(z);
