const q=20;
function f2(){
    const q=10 //can redeclare inside functio0n/another block using const
    console.log(q)
}
console.log(q)
f2()
console.log(q)
// const r=10 syntaxerror cannot redeclare const in same scope
// const r=20

const r1=21
// r1=15 // typeerror cannot change value of const variable even without keyword let,const,var
 console.log(r1)

// console.loglog(r3) reference error 
// const r3=2