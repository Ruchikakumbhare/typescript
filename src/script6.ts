//--------------- program1  interface
interface stu{
    name:string,
    age:number
}
let r1:stu ={
    name:'ruchika',
    age:22
}
console.log(`name:${r1.name} , age:${r1.age}`)


//-----------------------------------------------------------------------------------------

//---------------program 2 Optional properties

interface stu1 {
      name : string,
      age : number,
      rollN?: number

}
let r2:stu1 = {
    name : 'ritik',
    age : 23
}
console.log(`name:${r2.name} , age:${r2.age} , roll:${r2.rollN}`)

//----------------------------------------------------------------------------------------

// program 3  Read only properties 

interface book{
    readonly title:string,
    author:string,
    amount:number
}

let r3:book={
    title:'harry_potter',
    author:'harray',
    amount : 900000
}
// r3.title = 'sam' -->it cannot be change
r3.amount = 2000
console.log(`name:${r3.title} ,author:${r3.author} , amount:${r3.amount}`)

//-------------------------------------------------------------------------------------
// Program 4

interface cal{
    add(a:number , b:number):number;
    sub(a:number,b:number):number
}
let r4:cal={
    add:(a,b) => a+b,
    sub:(a,b) => a-b
}

let x11 =r4.add(10,20)
let x12=r4.sub(40,10)
console.log(x11)
console.log(x12)

//------------------------------------------------------------------------
//program 5

interface Animal{
    name:String
}
interface cat extends Animal{
    breed:string
}
let r5:Animal={
    name:'tiger'
}

let r6:cat={
    name:'cutecat',
    breed:'catie'
}



// interface accountOpen {
//     name:string;
//     age:number;
//     address:string;
//     adharNo:string
//     panCard:string
// }
// interface loan extends accountOpen {
//     type:string
// }

// let chinmay:loan = {
//     name:"chinmay",
//     age:23,
//     address:"gardenia",
//     adharNo:"123",
//     panCard:"AWKPD4769P",
//     type:"home"

// }










