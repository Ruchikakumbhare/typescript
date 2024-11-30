
// class mother{
//     fname:string;
//     lname:string;
//     constructor(fn:string , ln:string){
//         this.fname = fn,
//         this.lname =  ln
//     }
//     display():void{
//         console.log(`${this.fname} ${this.lname}  `)
//     }
// }

// let xx = new mother('Ruchika' , 'Kumbhare')
// console.log(xx.fname)
// xx.display()

//-------------------------------------------------------------


// single inheritance

// class father{
//     fname : string;
//     lname : string;
//     constructor(fn:string , ln : string){
//         this.fname = fn ,
//         this.lname = ln
//     }
// }
// class son extends father{
//     sfname : string;
//     constructor(fn:string , ln : string,sn : string){
//         super(fn,ln)
//         this.sfname = sn
//     }
// }
// let sg1 = new son('sanjay' , 'Kumbhare' , 'rohit')
// console.log(sg1.fname)
// console.log(sg1.lname)
// console.log(sg1.sfname)

//-----------------------------------------------------------

// multilevel inheritance

// class Gfather{
//     first_name : string;
//     last_name : string;
//     constructor(fn:string , ln :string){
//         this.first_name = fn ,
//         this.last_name = ln 
//     }
//     dis1():void{
//         console.log(`${this.first_name} ${this.last_name}`)
//     }
// }
// class father extends Gfather{
//     ffname : string ; 
//     constructor(fn:string ,ln:string , ffn:string ){
//         super(fn,ln)
//         this.ffname = ffn
//     }
//     dis2():void{
//         console.log(`${this.ffname} ${this.last_name}`)
//     }
// }
// class son extends father{
//     sfname : string ; 
//     constructor(fn:string ,ln:string , ffn:string ,sn : string){
//         super(fn,ln,ffn)
//         this.sfname = sn
//     }
//     dis3():void{
//         console.log(`${this.sfname} ${this.last_name}`)
//     }
// }
// let sg2 = new son('Mukesh' , 'Dewane' , 'RItik' , 'Rushi')
// sg2.dis1()
// sg2.dis2()
// sg2.dis3()