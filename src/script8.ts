// // inheritance
// //single inheritance
// class teacher{
//     fname:string;
//     lname:string
//     constructor(tfn:string , tln:string){
//         this.fname = tfn
//         this.lname = tln
//     }
//     display():void{
//         console.log(`${this.fname} ${this.lname}`)
//     }
// }
// class student extends teacher{
//     sname : string
//     slname:string
//     constructor(tfn:string,tln:string,sn:string,sln:string){
//         super(tfn,tln)
//         this.sname = sn
//         this.slname = sln
//     }
//     display_s(){
//         console.log(`${this.sname} ${this.slname}`)
//     }
// }
// let am = new student('chinmay','deshpande','ruchika','kumbhare')
// console.log(am.fname)
// console.log(am.lname)
// console.log(am.sname)
// am.display()
// am.display_s()

// //-------------------------------------------------------------------------------
// // mutilevel inheritance

// class grandmother{
//     gfname : string;
//     glname : string;
//     constructor(gfn:string , gln:string){
//         this.gfname = gfn
//         this.glname = gln
//     }
// }
// class mother extends grandmother{
//     mname:string
//     constructor(gfn:string,gln:string,mn:string){
//         super(gfn,gln)
//         this.mname = mn
//     }
// }
// class daughter extends mother{
//     dname:string
//     constructor(gfn:string,gln:string,mn:string,dn:string){
//         super(gfn,gln,mn)
//         this.dname=dn
//     }
// }
// let am1 = new daughter('laxmi','Bhisikar','savitri','alka')
// console.log(am1.gfname)
// console.log(am1.glname)
// console.log(am1.mname)
// console.log(am1.dname)

// //------------------------------------------------------------------------------
// // hierarchical inheritance
// class grandfather{
//     gfname : string;
//     glname : string;
//     constructor(gfn:string , gln:string){
//         this.gfname = gfn
//         this.glname = gln
//     }
// }
// class son1 extends grandmother{
//     sname11:string
//     constructor(gfn:string,gln:string,sn:string){
//         super(gfn,gln)
//         this.sname11 = sn
//     }
// }
// class son2 extends grandfather{
//     sname12:string
//     constructor(gfn:string,gln:string,sn12:string){
//         super(gfn,gln)
//         this.sname12=sn12
//     }
// }
// let am13 = new son1('onkar','kumbhare','sanjay')
// let am14 = new son2('pankaj','parate','saurabh')




// //----------------------------------------------------------------
// // practice 1
// class teacher1{
//     fname : string;
//     lname : string;
//     constructor(fn:string , ln:string){
//         this.fname = fn
//         this.lname = ln
//     }
//     display_11():void{
//         console.log(`${this.fname} ${this.lname}`)
//     }
// }

// class stu11 extends teacher1{
//     sm1 : number;
//     constructor(fn:string,ln:string , sm:number){
//         super(fn,ln)
//     this.sm1 = sm
//     }
// }
// let amol = new stu11('ruchika','kumbhare',123)

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

// single inheritance 
// multi-level
// herarchical 

class animal{
    species:string
    constructor(sp:string){
        this.species = sp
    }
    sound():void{
        console.log(`${this.species}`)
    }
}
class catt extends animal{
    bark():void{
        console.log('mewooo....')
    }
}
let aaa = new catt('cate')
console.log(aaa.species)
aaa.sound()
aaa.bark()


// Class 
//  object literal 
//  using constructor 
//  get and set method
//  using get and set keyword 


class paa{
    private _name : string
    constructor(name:string){
        this._name = name
    }
    set name(newname:string){
        this._name = newname
    }
    get name(){
        return this._name
    }
    getname(){
        return this._name
    }
    setname(){
        return this._name
    }
}
let bbb = new paa('ruchika')
bbb.name = 'ruchika'
console.log(bbb.getname)
console.log(bbb.name)
console.log(bbb.setname)
bbb.setname()

// Static belongs to the class itself , 
// We don't need  instance of class to call same 
// Generally static ====> properties information

class cal1{
    pi2:number = 3.14;
    static pi:number =3.14;
    static calculatorAreaOfCircle(radius:number){
        return cal1.pi * radius *radius
    }
}
console.log(cal1.pi)
console.log(cal1.calculatorAreaOfCircle(2))

