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

function dosomething(callback,error){
setTimeout(() => {
    let title='this is article one'
    if(!title){error('err')}
    setTimeout(() => {
        let data={user:''}
        if(!data){error('error data')
    return}
        callback(data)
    }, 2000);
}, 2000);
}


console.log('run1')
dosomething(function(data){
console.log(data)},function(error){
console.log(error)
}
)
console.log('run3')
