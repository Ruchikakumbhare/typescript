// // program1
// // overloading
// class ov{
//     print(value : string):void ;
//     print(value : string):void ;
//     print(value :string|number){
//         if(typeof value == "string") {
//             console.log(`output of the string is ${value}`)
//         }
//         else{
//             console.log(`output of the number is ${value}`)
//         }
//     }
// }
// let z1 = new ov()
// z1.print('Ruchi')

// // program2
// class ov1 {
//     print(value : string):void;
//     print(value :number) :void ;
//     print(value : string|number){
//         if(typeof  value== 'string'){
//             console.log(`the output of the string is ${value}`)
//         }
//         else{
//             console.log(`the output of the number is ${value}`)
//         }
//     }
// }
// let ob = new ov1()
// ob.print(12)
// ob.print('HEllo')

// // overriding
// // program1
// class over1 {
//     makesound():void {
//         console.log('Some cars sound...')
//     }
// }
// class swift1 extends over1 {
//     makesound(): void {
//         console.log('vroom vromm ...')
//     }
// }
// let ob1 = new swift1()
// ob1.makesound()

// // program2
// class  ani{
//     bark():void{
//         console.log('the dog are barkingg....')
//     }
// }
// class dd extends ani {
//     bark(): void {
//         console.log('Likee bhooww bhooww')
//     }
// }
// let d1 = new dd()
// d1.bark()
// //---------------------------------------------------------------------------------
// // practice program -- overloading , overriding

// class ban {
//     print(value : string):void ;
//     print(value :number) :void ;
//     print(value : string |number)
//     {
//         if(typeof value == 'string'){
//           console.log(`The string is : ${value}`)
//         } 
//         else{
//             console.log(`The Number is : ${value}`)
//         }
//     }
// }
// let bx = new ban()
// bx.print('TYpescript')
// bx.print(123)
// //------------

// class hou {
//     livin():void {
//         console.log('THE small family')
//     }
// }
// class par extends hou{
//     livin(): void {
//         console.log('Husband and wife')
//     }
// }
// let v11 = new par()
// v11.livin()


let namee:string = 'ruchika'
let number :number = 123

let un1 : string | number = 'ruchika'  
let un2 : string | number = 123

let arr22 : string[] = ['q','d']

let tup22:[string , number ] = ['ruch' , 12]
console.log(typeof (arr22))