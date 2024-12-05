//program1 --interface          
interface grand{
    name : string ,
    age:number,
    city:string
}
let anu:grand = {
    name : 'ruchi',
    age:22,
    city :'Nagpur'
} 
console.log(anu.name)
console.log(anu.age)
console.log(anu.city)

// program2
// optional interface
interface tea{
    name:string
    age?:number
    variety?:string
}
let xx1:tea = {
    name : 'mango',
    age : 112
}

let xx2:tea = {
    name : 'orange',
    variety : 'orange'
}
console.log(xx1.name)
console.log(xx1.age)
console.log(xx2.name)
console.log(xx2.age)
xx1.age = 99
console.log(xx1.age)

// program3
// readonly
interface bz{
    readonly name:string 
    number:number
}
let l3:bz = {
    name:'PAris_heart',
    number :100000000
}
// l3.name = 'ppp' not access
console.log(l3.name)
console.log(l3.number)


// program4
interface calculator {
    ad(x:number , y:number):number,
    sub(x:number ,y:number):number 
}
let ca:calculator = {
    ad:(x,y) =>(x+y) ,
    sub:(x,y) =>(x-y)
}
console.log(ca.ad(10,20))


//program5 
interface num {
    mul(a:number , b:number):number ,
    div(a:number , b:number) :number
}
let c2:num = {
    mul:(a,b) => (a*b),
    div:(a,b) =>(a/b)
}
console.log(c2.mul(2,2))
console.log(c2.div(2,2))

// program6
// function type
interface greeting {
    (name:string):string
}
let c3:greeting = (name:string) =>'hiie'

let c4:greeting =function(name:string) :string{
    return 'hyeee'
}



  