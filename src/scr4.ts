// program1 
// class with constructor
// class stu{
//     name:string ;
//     age:number;
//     constructor (nm:string ,ag:number){
//         this.name = nm
//         this.age = ag
//     }
//     display_n():void{
//         console.log(`${this.name} and  her age is : ${this.age}`)
//     }

// }
// let q2 =new stu('Arshi' , 30)
// console.log(q2.name)
// console.log(q2.age)
// q2.display_n()

// // program2
// class car {
//     public model:string;
//     private sound :string;
//     constructor(model : string , sound:string){
//        this.model = model
//        this.sound = sound
//     }
//     public makesoundd():void{
//         console.log(`${this.sound}`)
//     }
//     private getsoundee():string{
//         return `${this.sound}`
//     }
//     public call():void{
//         this.getsoundee()
//     }
// }
// let swift  = new car('BMW' , 'HIglysound')
// console.log(swift.model)
// // console.log(swift.call)


// // program3
// class color1 {
//     readonly cname : string;
//     cost : number;
//     constructor(cname : string , cost:number){
//         this.cname = cname ,
//         this.cost = cost
//     }
// }
// let v2 = new color1('pink' , 100)
// console.log(v2.cname)
// console.log(v2.cost)
// v2.cname = 'yello' not access beacause of readonly

// program4
// single inheritance
class grandfather{
    gfname : string ;
    gflname : string ;
    gage:number;
    constructor(gfn:string , gln:string,ga:number){
      this.gfname = gfn ,
      this.gflname = gln ,
      this.gage = ga
    }
    display():void{
        console.log(`${this.gfname} ${this.gflname}`)
    }
}
class father extends grandfather{
    fname:string;
    constructor(gfn:string , gln:string,ga:number, fname:string){
        super(gfn ,gln,ga)
        this.fname = fname
    }
    display_F(): void {
        console.log(`${this.fname} ${this.gflname}`)
    }
}
let v1 = new father('Omkar' , 'Kumbhare' ,60 ,'Sanchit')
console.log(v1.gfname)
console.log(v1.gflname)
console.log(v1.gage)
console.log(v1.fname)
v1.display()
v1.display_F()

// program5
// multilevel Inheritance
class grandfather1{
  gname : string ;
  glname : string;
  constructor(gn:string , gl:string){
    this.gname =gn,
    this.glname = gl
  }
  display():void{
    console.log(`${this.gname} ${this.glname}`)
  }
}
class father1 extends grandfather1{
    fname:string;
    constructor(gn:string , gl:string,fn:string){
        super(gn,gl)
        this.fname=fn
     }
     display1():void{
        console.log(`${this.fname} ${this.glname}`)
      }
}
class son1 extends father1{
    sname:string 
    constructor(gn:string , gl:string,fn:string,sn:string){
        super(gn,gl,fn)
        this.sname = sn
    }
    display2():void{
        console.log(`${this.sname} ${this.glname}`)
      }
}
let v2 = new son1('ranveer' , 'kapoor','ruhan','rushi')
v2.display()
v2.display1()
v2.display2()

// program6
// hierarchical inheritance
class grandmother {
    gmname : string ; 
    glname : string ;
    constructor(gm : string , gl : string){
        this.gmname = gm 
        this.glname = gl
    }
    display11():void{
        console.log(`${this.gmname} ${this.glname}`)
    }
}
class daughter1 extends grandmother {
    dname1 : string
    constructor(gm : string , gl : string,dn1 : string){
        super(gm,gl)
        this.dname1 = dn1
    }
    display12():void{
        console.log(`${this.dname1} ${this.glname}`)
    }
}
class daughter2 extends grandmother {
    dname2 : string
    constructor(gm : string , gl : string,dn2 : string){
        super(gm,gl)
        this.dname2 = dn2
    }
    display13():void{
        console.log(`${this.dname2} ${this.glname}`)
    }
}
let dn1 = new daughter1('Neetu' ,'Kapoor' , 'Karishma') 
let dn2 = new daughter2('Neetu' , 'Kapoor' , 'Kareena')
dn1.display11()
dn1.display12()
dn2.display13()
