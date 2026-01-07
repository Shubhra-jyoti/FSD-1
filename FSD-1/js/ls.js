localStorage.setItem("username","jyoti") //  key,value
sessionStorage.setItem("email","jyoti@gmail.com")
let u=localStorage.getItem("username")
let e=sessionStorage.getItem("email")
console.log(` username ${u} email ${e}`)
//to remove a particular item localStorage.removeItem("key") similar for sessionStorage
// localStorage.clear()
// sessionStorage.clear()