//------------- Generics
// function identity<T>(value:T):T{
//     return value
// }
// console.log(identity<string>("hello"))
// console.log(identity<number>(1111))
// //---------------------------------
// function ide<q>(value:q):q{
//     return value
// }
// console.log(ide<string>("byeee"))


//---program 2
function reverseArray<a>(arr:a[]):a[]{
    return arr.reverse()
}
reverseArray([1,2,3])
reverseArray(['hi','hello'])
// console.log(reverseArray)


//--- program 3
interface KeyValue<a,b>{
    key : a,
    value:b
}
const kv1:KeyValue<number,string>={key:11,value:'ruchi'}
const kv2:KeyValue<number,number>={key:11,value:988}

//--- program 4
//Generics with class 
class Container<T>{
    private value:T;
    constructor(value:T){
        this.value = value
    }
    getvalue():T{
        return this.value;
    }
}
let str = new Container<string>('hye')
let num = new Container<number>(1000)

//---------------------------------------------
//program 5
//contraints with generics
function logLength<T extends{length:number}>(item:T):void{
    console.log(item.length)
}
logLength('heee')
logLength([1,2,3])
//----------------------------------------------
// program 6
function processData<t = string>(data:t){
    return data
}
processData<number>(233)
processData<boolean>(true)
processData('122')

//---------------------------------------------
// Keyof Generics 
// function getProperty<T,a extends key of T>(obj:T ,key:a):T[a]{
//     return obj[key]
// }
// let info = {
//     name:'ruchi',
//     lnamee:'kumbhare'
// }


