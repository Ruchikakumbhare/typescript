// program1
let na:string = 'ruchika'
console.log(na)

// program2
let arr:number[]  = [1,2,3,4]
console.log(arr)

// program3
let tup:[string , number] = ['hello' , 12]
console.log(tup)
console.log(tup[1])

//program4
enum color{
    orange,
    green,
    purple
}                   
console.log(color.green)

// program5
let un :string|number = 100
console.log(un)

// program6
let n1:string = 'ruchika'
let n2:string = 'kumbhare'
console.log(`${n1} ${n2}`)


// program7
// function declaration
function addx(x:number , y:number){
       console.log(x+y)
}
addx(100,12)

// program8
// func experession
let addy = function(x:number , y :number){
    return x+y
}
let aq =addy(10,19)
console.log(aq)

// program9
// arrow function
let addz = (x:number , y :number) =>{
    return x+y
}
let aqq =addz(10,19)
console.log(aqq)

// program10
//funct exp -func dec - func arrow

function sub11(a:number,b:number){
   console.log(a+b)
}
sub11(1,1)

let sub12 = function(a:number , b:number){
   return a+b
}
let cc=sub12(12,12)
console.log(cc)

let sub13 = (a:number , b:number) =>{
    console.log(a+b)
}
sub13(11,11)