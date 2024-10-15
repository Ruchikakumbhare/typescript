//-------------------------------- program1
// simple functions 
function greeting(nam:string){
      console.log('hye',{nam})
}
greeting('ruchi')

//------------------------------------------- 
// function add(x:number , y:number):number{
//     return x+y
// }
// let a = add(2,1)
// console.log(a)
//----------------------------------------------------------------
//----------------------------------program2
//-----------------------------------------------------------------
//function declaration 

function add1(a:number , b:number){
    console.log(a+b)
}
add1(20,1)

//---------------------------------program3---------------------
// function expression 

let add2=function(x1:number,y1:number){
   return x1 + y1
}
let m =add2(1,2)
console.log(m)

//-----------------------------program4--------------------------
let add3 =(m:number,n:number) =>{
    return m + n
}
let aa=add3(12,2)
console.log(aa)










