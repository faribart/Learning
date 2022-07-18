let Name='Fariba'
console.log(Name.padStart(10))
console.log(Name.length)
console.log(Name.padStart(10,'+'))

let obj={a:11,b:22,c:33}

Object.keys(obj).forEach(key=>{
    console.log(obj[key])
})

console.log("\n")

for(let key of Object.keys(obj)){
    console.log(obj[key])
}

console.log("\n")

Object.values(obj).forEach(val =>console.log(val))
console.log("\n")

Object.entries(obj).forEach((arr) => console.log(arr) )
console.log("\n")

Object.entries(obj).forEach(([key , val]) => console.log(key , val) )
console.log("\n")


//async & await

// const fetchData=(url , callback) =>{
//     setTimeout(() => {
//         let data={name:'fariba',family:'Rashtbar'}
//         callback(data)
//     }, 2000);
// }
// const SaveDataToDB=(data , callback)=>{
//     setTimeout(() => {
//         callback(true)
//     }, 2000);
// }


// try{
//     fetchData('roocket.ir',(data)=>{
//         try{
//             SaveDataToDB(data,(status)=>{
//                 console.log(status)
//                     })
//                     // console.log(data)
        
//         }
//         catch(err){
// //err
//         }
//     })
// }        
// catch(err){
// //err
// }


// console.log('Hi Fariba')

//promise



// const fetchData=(url) =>{
//         return new Promise((resolve,reject)=>{
//                 let data={name:'fariba',family:'Rashtbar'}
//                 if(true)
//                 resolve(data)
//                 else
//                 reject('error')
//         })
//     }





//     const SaveDataToDB=(data)=>{
//         return new Promise((resolve,reject)=>{
//             if(true)
//             resolve(true)
//             else
//             reject('error')
//         })
//     }

//     fetchData("Roocket.ir")
//     .then((data)=> SaveDataToDB(data))
//     .then((status)=>console.log(status))
//     .catch((err)=>console.log(err))
    
    
//Async & await

// async function FetchData(){

// }


const fetchData=async(url)=>{
    let data={name:'Fariba',family:'Rashtbar'}
    if(true)
    return data
    else
    throw new Error('error URL')
}

const SaveDataToDB=async(data)=>{
    if(true)
    return true
    else
    throw new Error('error DB')
}

// fetchData('roocket.ir')
// .then((data)=>SaveDataToDB(data))
// .then((status)=>console.log(status))
// .catch((err)=>console.log(err))

let executeFetchData=async()=>{
    try{
        let data=await fetchData('roocket.ir')
        let status=await SaveDataToDB(data)
        console.log(status)
    }catch(err){
        console.log(err)
    }
}

executeFetchData()

    console.log('Hi Fariba')