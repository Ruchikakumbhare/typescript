//------------------ overloading 
class pr{
    print(value:string):void;
    print(value:number):void;
    print(value:string|number){
        if(typeof value =='string'){
            console.log('output of the text :', `${value}`)
        }
        else{
            console.log('output of the number :' , `${value}`)
        }
    }
}
let a11 = new pr()
let a12 =a11.print('hye')
let a13=a11.print(12222)
//-----------------------------------------------------------------------------
// overriding 

class pr1 {
    makesound():void{
        console.log('some generic animal sound.....')
    }
}
class dog extends pr1{
    makesound(): void {
        console.log('wooff wooff')
    }
}
let a14 = new pr1()
a14.makesound()

let a15 =new dog()
a15.makesound()

//-----------------------------------------------------------------------------
// ducktypting
// class ---- same method ----- polymorphism 
// same method name 

// abstract method
// only signature no body 

interface Fylable {
    fly():void
}


class Bird implements Fylable {
    fly():void {
        console.log("Bird is fying")   
    }
}

class Airplane implements Fylable {
    fly():void {
        console.log("Aeroplane is fying")   
    }
}

class Kite implements Fylable {
    fly():void {
        console.log("Kite is fying")   
    }
}

function startFlying(obj:Fylable){
    obj.fly()
}

let aaaa = new Airplane()
let bb = new Bird()
let kk = new Kite()


startFlying(aaaa)
startFlying(bb)
startFlying(kk)