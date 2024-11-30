//------------------------------- program1------------------------
// function data(url:string):Promise<string>{
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(url){
//                 resolve(`data from ${url}`)
//             }
//             else{
//                 reject(`url not found`)
//             }
//         },2000)
//     })
// }
// data("https://www.youtube.com")
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('executed code')
// })
//---------------------
// async await 
// async function data1(url:string):Promise<string> {
//     if(!url) throw new Error('url is required')
//     return `Data from ${url}`
// }
// async function  processRequest() {
//     try{
//         const arr = await data1('https://www.youtube.com')
//         console.log(arr)
//     }
//     catch(error){
//         console.log('error')
//     }
//     finally{
//         console.log('completed')
//     }
// }
// processRequest()

//------------------------------------------------------------------------------
// program 2
async function data2(url:string):Promise<string> {
    if(!url)throw new Error('url is required')
        return `data from ${url}`
}
