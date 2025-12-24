let names=["abc","xyz","pqz"]
var a=names.push("mno")//adds an element to last of te list returns new length aafter adding
console.log(names)
console.log(a)

var b=names.pop()//rem last elem also returns the removed element
console.log(names)
console.log(b)


let num=[10,20,30,40];
let mul=num.map(n=>n*2)// maps each value to new value n represents each element of the array
console.log(mul)

let num2=[10,15,32,25,31,30]
let fac=num2.filter(n=>n%5==0)// only returns those values in array which satisfies given condition
console.log(fac)


console.log(names.includes("pqz"))
console.log(names.includes("dfr"))

let user=[{id:1,name:"hello"},{name:"xyz",id:2},{name:"hello",id:3}]
u=user.find(u1=>u1.name==="hello") //find returns only the first element that satisfies the condition whereas filtr returns all the elements in an array
console.log(u)







