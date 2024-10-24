// inheritance
//single inheritance
class teacher{
    fname:string;
    lname:string
    constructor(tfn:string , tln:string){
        this.fname = tfn
        this.lname = tln
    }
    display():void{
        console.log(`${this.fname} ${this.lname}`)
    }
}
class student extends teacher{
    sname : string
    slname:string
    constructor(tfn:string,tln:string,sn:string,sln:string){
        super(tfn,tln)
        this.sname = sn
        this.slname = sln
    }
    display_s(){
        console.log(`${this.sname} ${this.slname}`)
    }
}
let am = new student('chinmay','deshpande','ruchika','kumbhare')
console.log(am.fname)
console.log(am.lname)
console.log(am.sname)
am.display()
am.display_s()

//-------------------------------------------------------------------------------
// mutilevel inheritance

class grandmother{
    gfname : string;
    glname : string;
    constructor(gfn:string , gln:string){
        this.gfname = gfn
        this.glname = gln
    }
}
class mother extends grandmother{
    mname:string
    constructor(gfn:string,gln:string,mn:string){
        super(gfn,gln)
        this.mname = mn
    }
}
class daughter extends mother{
    dname:string
    constructor(gfn:string,gln:string,mn:string,dn:string){
        super(gfn,gln,mn)
        this.dname=dn
    }
}
let am1 = new daughter('laxmi','Bhisikar','savitri','alka')
console.log(am1.gfname)
console.log(am1.glname)
console.log(am1.mname)
console.log(am1.dname)

//------------------------------------------------------------------------------
// hierarchical inheritance
class grandfather{
    gfname : string;
    glname : string;
    constructor(gfn:string , gln:string){
        this.gfname = gfn
        this.glname = gln
    }
}
class son1 extends grandmother{
    sname11:string
    constructor(gfn:string,gln:string,sn:string){
        super(gfn,gln)
        this.sname11 = sn
    }
}
class son2 extends grandfather{
    sname12:string
    constructor(gfn:string,gln:string,sn12:string){
        super(gfn,gln)
        this.sname12=sn12
    }
}
let am13 = new son1('onkar','kumbhare','sanjay')
let am14 = new son2('pankaj','parate','saurabh')