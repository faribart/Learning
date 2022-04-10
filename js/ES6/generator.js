// const { setTimeout } = require("timers")



// function* createnames(){
//     console.log('process hesam')
//     yield 'hessam'
//     console.log('process ali')
//     yield 'ali'
//     console.log('process reza')
//     yield 'reza'

//     return 'all name'

// }


// let namesIt=createnames()

// // console.log(namesIt.next())
// // console.log(namesIt.next())
// // console.log(namesIt.next())
// // console.log(namesIt.next())

// // for(const name of createnames()){
// //     console.log(name)
// // }

// // console.log([...createnames()])

// // let obj={
// //     name:'hessam',
// //     age:23,
// //     [Symbol.iterator](){
// //         let list=[1,2,3,6,8]
// //         let step=0
// //         return{
// //             next(){
// //                 let ob={
// //                     done:step>=list.length,
// //                     value:list[step]
// //                 }
// //                 step++
// //                 return ob
// //             }
// //         }
// //     }
// // }

// let obj={
//     name:'hessam',
//     age:23,
//     *[Symbol.iterator](){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
//     yield 5

//     }
// }

// let myobj=obj[Symbol.iterator]()
// console.log(myobj.next())
// for (const item of obj) {
//     console.log(item)
// }


// let user={
//     id:1,
//     name:'hessam',
//     email:'hessam@gmail.com',
//     posts:[
//         {
//             id:1,
//             title:'this is one post'
//         },
//         {
//             id:2,
//             title:'this is two post'
//         }

//     ],
//     *[Symbol.iterator](){
//             yield* this.posts;
//     }
// }



// // let userit=user[Symbol.iterator]();
// // console.log(userit.next())
// // console.log(userit.next())
// // console.log(userit.next())
// // console.log(userit.next())

// for (let iterator of user) {
//     console.log(iterator)
// }


//call back

// function dosomething(callback,error){
// setTimeout(() => {
//     let title='this is article one'
//     if(!title){error('err')}
//     setTimeout(() => {
//         let data={user:''}
//         if(!data){error('error data')
//     return}
//         callback(data)
//     }, 2000);
// }, 2000);
// }


// console.log('run1')
// dosomething(function(data){
// console.log(data)},function(error){
// console.log(error)
// }
// )
// console.log('run3')


//promise

// let MyFirstPromise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // resolve('run2')
//         reject('this is an error')
//     }, 2000);
// })

// // console.log(MyFirstPromise)
// MyFirstPromise.then(data =>{
// console.log(date)
// }
// // , function(err){
// //     console.log(err)
// // }
// )
// .catch(err=>console.log(err))


//without promise

// function Getdata(url){
//     const httpRequest=new XMLHttpRequest();
//     httpRequest.open("GET",url)
//     httpRequest.onreadystatechange=function(){
//         console.log(XMLHttpRequest.DONE)
//         if(this.readyState==XMLHttpRequest.DONE){
//             if(this.status==200){
//                 return this.responseText
//             }
//             else if(this.status==404)
//             {
//                 return 'data not find'
//             }
//             else{
//                 return "somthings goes wrong"
//             }
//         }
//     }
//     httpRequest.send("https://jsonplaceholder.typicode.com/todos")
// }


function Getdata(url){
return new Promise((resolve,reject)=>{
    const httpRequest=new XMLHttpRequest();
    httpRequest.open("GET",url)
    httpRequest.onreadystatechange=function(){
        console.log(XMLHttpRequest.DONE)
        if(this.readyState==XMLHttpRequest.DONE){
            if(this.status==200){
             resolve(this.responseText)
            }
            else if(this.status==404)
            {
                reject('data not find')
            }
            else{
                reject("somthings goes wrong")
            }
        }
    }
    httpRequest.send();
})
}

function ParsetoJson(dataText){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            try {
                resolve(JSON.parse(dataText))
            } catch (error) {
                reject(error)
            }
        }, 2000);
    })
}

Getdata("https://jsonplaceholder.typicode.com/todos")
.then(data =>{
    ParsetoJson(data).then((json)=>{
        console.log(json)
    })
})
    .catch(err=>console.log(err))

Getdata("https://jsonplaceholder.typicode.com/todos")
.then(data =>ParsetoJson(data))
    .then((json)=>{
    console.log(json)
    })
    
