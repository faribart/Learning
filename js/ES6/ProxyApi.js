class Car{
    constructor(make,model){
        this.make=make
        this.model=model
    }
}

let CarObj=new Car('saipa','tiba')

// let handler={
//     get(obj,propkey){
//     return 'hello'
//     }
// }


// let handler={
//     get(obj,propkey){
//     return propkey in obj ? obj[propkey] : 'does not exit'
//     }
// }

// let handler={
//     get(obj,propkey){
//     return Reflect.has(obj,propkey) ? Reflect.get(obj,propkey) : `does not exit`
//     },
// has(obj,propkey){
// console.log('do something')
// return Reflect.has(obj,propkey)
// },
// set(obj,propkey,value){
//     console.log(typeof value)
// if(typeof value=='number'){
//     Reflect.set(obj,propkey,value)
// }
// }
// }


// let proxy=new Proxy(CarObj,handler)

// console.log(proxy.make)
// console.log(proxy.make)

// console.log(proxy.make)

// console.log(proxy.year)

// proxy.year=2000
// console.log(Reflect.get(proxy,'year'))

// console.log('year' in proxy)
// console.log(Reflect.has(proxy,'year'))

// let proxy=new Proxy({},handler)
// Reflect.setPrototypeOf(CarObj,proxy)

// CarObj.year=200
// console.log(Reflect.get(proxy,'year'))


//Part2

// function sum(a,b){
//     return a+b
// }


// let handler={
//     apply(target,ThisArg,args){
//         console.log(`Arguments: ${args}`)
//         // return target(args[0],args[1])*2
//         return target(...args)*2
//     }
// }

let handler={
    get(obj,propkey){
    return Reflect.has(obj,propkey) ? Reflect.get(obj,propkey) : `does not exit`
    },
has(obj,propkey){
console.log('do something')
return Reflect.has(obj,propkey)
},
set(obj,propkey,value){
    console.log(typeof value)
if(typeof value=='number'){
    Reflect.set(obj,propkey,value)
}
}
}

let {proxy,revoke}=Proxy.revocable({},handler)
Reflect.setPrototypeOf(CarObj,proxy)
revoke()
CarObj.year=200
console.log(Reflect.get(proxy,'year'))