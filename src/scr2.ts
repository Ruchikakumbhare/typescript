// program 1
// simple function declaration and invocation

function fx(a:string){
    console.log(`hello ${a}`)
}
fx('ruchika')

// program2
function invo(c:string){
    console.log(`hello i am ${c}`)
}
invo('nagpur')


//program3
function mul(x:number,y:number){
    console.log(x*y)
}
mul(10,2)
//---------
let mul2 = function(x:number , y:number){
    return  x*y
}
let xx=mul2(2,2)
console.log(xx)
// ---------
let mul3 = (x:number , y:number) =>{
   return x *y
}
let vv =mul3(2,3)
console.log(vv)


// program4
function raa(...num:number[]):number{
   return num.reduce(function(acc,el){
    return acc + el
   },0)
}
let yy=raa(2,3,4)
console.log(yy)


function r11(...num:number[]):number{
    return num.filter(function(el,arr,ind){
     return el < 20;
  }).length;
}
let k = r11(12,23,45)
console.log(k)  //output--1

//program5
//default parameter
function greet1(name :string = 'guess'){
     console.log('hello' , {name})
}
greet1('Welcome')
greet1();

function greet2(name : string = 'welcome'){
    console.log('how can i help you' , {name})
}
greet2('hiiee')
greet2()


// program6
//optional parameter
function details(name:string , age?:number):void{
    if(age){
        console.log(` name is ${name} and her age is ${age}`)
    }
    else{
        console.log(`${name} has no age provide `)
    }
}
details('ruchika')
details('ruchi' ,20 )


