//----------- function declartion

function sub(x:number,y:number){
    return x-y
}
let a=sub(10,5)
console.log(a)

//----------- function experession
let sub1 =function(x:number,y:number){
    return x-y
}
let a1=sub1(10,5)
console.log(a1)

//------------arrow function
let sub2 =(x:number,y:number)=>{
    return x-y
}
let a2=sub1(10,5)
console.log(a2)

// npx ts-node  src/script5.ts


//----------------------------------------------------------------------------------------------
// program1 --> interface
interface student{
    name:string
    rollNo:number
}
let anju:student = {
    name:'ruchi',
    rollNo:21
}

//program2 --> optional 

interface teacher{
    name:string
    age:number
    number?:string
}
let t1:teacher = {
     name:'sunita',
     age:22
}

let t2:teacher = {
    name:'sunita',
    age:12,
    number : '123'
}


// program 3 --> Read only

interface man{
     readonly name:string
     age:number
}
let s1:man = {
     name:'ravan',
     age:45
}
//s1.name = 'saqee'     //Cannot assign to 'name' because it is a readn

// program 4 -->

interface calcy {
    add(a:number , b:number) :number;
    sub(a:number , b:number) :number
}
let cal:calcy = {
    add:(a,b) => a+b,
    sub:(a,b) => a-b
}
cal.add(10,21)
cal.sub(15,2)


//program5 ---> Function type


interface Greet {
    (name:string):string //rule for function
}

let greete:Greet = (name:string)=> "Hello"  // arrow function

let gr:Greet = function(name:string):string{
    return "hello"
}
gr("bye")

