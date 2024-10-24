//program 1
// class person{
//     name : string;
//     age:number;

//     constructor(nm:string,ag:number){
//         this.name=nm,
//         this.age=ag
//     }
//     display_n():void{
//         console.log(this.name)
//     }
// }
// let person1=new person('ruchi',22)
// console.log(person1.name)
// console.log(person1.age)
// -----------------------------------------------------------------
// program1 practice
// class stu{
//     fname:string;
//     lname:string;
//     No:number;
//     constructor(fn:string , ln:string,N:number){
//         this.fname = fn,
//         this.lname = ln,
//         this.No=N
//     }

//     display():void{
//         console.log(`${this.fname} sanjay ${this.lname}`)
//     }
// }
// let st1 = new stu('ruchika','kumbhare',123)
// console.log(st1.fname)
// console.log(st1.lname)
// console.log(st1.No)
// st1.display()



//------------------------------------------------------------------------
// program 2
class Animal{
    public species:string;
    private sound:String;
    constructor(species:string,sound:string){
        this.species = species
        this.sound = sound
    }
    public makesound():void{
        console.log(`${this.sound}`)
    }
    private getsound():string{
        return `${this.sound}`
    }
    public call():void{
        this.getsound()
    }
}
let lion = new Animal('dog','new')
console.log(lion.species)
lion.call()

//--------------------------------------------------------------
// public - property or method - can be accessed outside the class
// private - property or method can not be accessed outside the class
//(both private property and method can be accesses with public method
    //of same class
//)


//------------ program 3 

class vegi{
    readonly fruit:string;
    constructor(fruit:string){
        this.fruit = fruit
    }
    display_vegitables():void{
        console.log(`${this.fruit}`)
    }
}
let ff = new vegi('mango')
console.log(ff.fruit)
ff.display_vegitables()

//using single inheritance
class p {
    fname:string;
    lname:string;
    age : number;
    constructor(fn:string,ln:string,ag:number){
       this.fname = fn,
       this.lname = ln,
       this.age = ag
    }

}
class p1 extends p {
     pnumber:number;
    constructor(fn:string,ln:string,ag:number,pn:number){
        super(fn,ln,ag)
        this.pnumber = pn 
    }
}
let m1 = new p1('ruchi','kumbhare',22,12345)
console.log(m1.fname)
console.log(m1.lname)
console.log(m1.age)
console.log(m1.pnumber)

// class po{
//     name:string;
//     age:number;
//     constructor(nm:string ,ag:number){
//         this.name = nm
//         this.age =ag
//     }
//     display_x():void{
//         console.log(`the name is ${this.name} and age is ${this.age}`)
//     }
// }

// let ab = new po('ruchika',22)
// console.log(ab.name)
// console.log(ab.age)
// ab.display_x()
