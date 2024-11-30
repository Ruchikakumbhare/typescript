// Advanced types 
// // Union types 
//---------------------- program 1
function getLength(input:string | number){
    if(typeof input == 'string'){
        return input.length
    }
    else{
        return input.toString().length
    }
}
getLength(1234)
getLength('ruchikaaaaa')

//--------------------------------------------------
//program 2
// Intersection type 
interface PersonA1{
    name : string
}
interface EmpA{
    employid: number
}
type per_EmpA = PersonA1 & EmpA
let emp89 : per_EmpA = {
     name : 'ruchika',
     employid : 123
}

//-----------------------------------------------------
//program 3
// Type alais
type Point = {x:number ,y:number};
function printPoint(point:Point):void{
    console.log(`${point.x} ${point.y}`)
}
printPoint({x:11,y:54})

//-----------------------------------------------------
// program 4
//  Type assertion
let someValue : any = 'holla'
let xyz = (someValue as string).length
console.log(xyz)
//-----------------------------------------------------
//program 5
//Literal types 
type Direction = 'up'|'down'|'left'|'right'
function move(dir:Direction){
    console.log(dir)
}
move('down')
//-----------------------------------------------------
//program 6
// // Nullable types 

function greet(name:string|null):void{
    if(name){
        console.log('hello, ${name}')
    }
    else{
        console.log('heloo stranger')
    }
}
greet('ruchzzz')
greet(null)

//null,undefined 0 .8 > 3,"",NAN
//------------------------------------------------

//program7
//Generic type
function identity<l>(value:l):l{
    return value
}
console.log(identity<number>(76))
console.log(identity<string>('bye'))
console.log(identity<boolean>(true))


// ----->
function getFirstElement<T>(arr:T[]):T|undefined{
    return arr[2];
}
console.log(getFirstElement<string>(['a']))
console.log(getFirstElement<number>([1,22]))


// function getFirstElement<T>(arr:T[]):T|undefined{
//     return arr[3];
// }
// getFirstElement<string>(["chinmay","sarika"])
// getFirstElement<number>([1,22,44])
// getFirstElement<boolean>([true,false])