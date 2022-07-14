class Car{
    constructor(make , model){
        this.make=make
        this.model=model
    }
}

// class IraniCar{
//     constructor(){}
// }


// let obj=new Car('ford' , 'www')

let obj2=Reflect.construct(Car,['ford','www'])

// let obj3=Reflect.construct(Car,['ford','www'],IraniCar)

// console.log(obj3)


let user={
    name:'fariba',
    email:'fariba@yahoo.com'
}

function sayHello(age){
    return `hello ${this.name} , your Email is : ${this.email} , your age : ${age}`
}

// console.log(sayHello.apply(user,[25]))
// console.log(Reflect.apply(sayHello,user,[25]))
// console.log(Reflect.getPrototypeOf(user))
// console.log(Reflect.getPrototypeOf(obj2))

// Reflect.setPrototypeOf(obj2,user)
// console.log(Reflect.getPrototypeOf(obj2))


Reflect.defineProperty(user , 'family' , {
    value:'Rashtbar',
    writable:true
})

console.log(Reflect.isExtensible(user))
user.family='rr'
// Reflect.deleteProperty(user,'name')
// console.log(user)

// let arr=['far','omid','fariba']
Reflect.preventExtensions(user)
console.log(Reflect.isExtensible(user))

// console.log(Reflect.get(arr,1))

// console.log(Reflect.has(user,'name'))

Reflect.set(user,'age',27)
console.log(user)
console.log(Reflect.ownKeys(user))