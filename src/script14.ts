
//----------------------------------- decorator
//program1
// Class decorator
function logClass(target:Function){
    console.log(`class decorator applied : ${target.name} `)
}
@logClass
class personA{
    constructor(public name : string){

    }
}
const ax = new personA('ruchika')

//-----------------------------------------------------------------------------
//program2
// Method Decorator

// class prototype ---> Calcy
// propertyKey --> add
// descriptor --> describes a method
function LogMethod(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    let originalMethod = descriptor.value
    descriptor.value = function(...args : any[]){
        console.log(`method ${propertyKey} called with arguments : ${args}`)
        return originalMethod.apply(this,args)
    }
}
class Calcy{
    @LogMethod
    add(a:number , b: number){
        return a + b
    }
}
const ax2 = new Calcy()
console.log(ax2.add(10,10))

//--------------------------------------------------------------------------------
// program3
// Property Decorator 

function LogProperty(target:any,propertyKey :string){
    console.log(`property Decorator applied to : ${propertyKey}`)
}
class fruit{
    @LogProperty
    fname : string
    constructor(f:string){
        this.fname = f
    }
}
const ax3 = new fruit('mango')
console.log(ax3.fname)

//--------------------------------------------------------------------
// program4
// LogAccessor

function LogAccessor(target:any , propertyKey:string , descriptor:PropertyDescriptor){
    console.log(`${propertyKey} is called`)
}
class pro{
    private abc:string
    constructor(ab:string){
        this.abc = ab
    }
    @LogAccessor
    get valueAbc(){
        return this.abc
    }
    set valueAbc(m:string){
        this.abc = m
    }
}
let ax4 = new pro('Clothes')
console.log(ax4.valueAbc)
//--------------------------------------------------------

