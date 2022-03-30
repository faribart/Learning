// let num=NaN
// console.log(isNaN(num))

// let num=Infinity
// console.log(isFinite(num))

// let num=1.2
// console.log(Number.isInteger(num))


// let num=0
// let num=-8
// let num=5
// let num=NaN
// console.log(Math.sign(num))


// console.log(Math.floor(-1.99))
// console.log(Math.trunc(-1.99))

// let str="fariba rashtbar"

// console.log(str.includes("ras",8))
// console.log(str.startsWith("ras",8))
// console.log(str.endsWith("ras",8))


class Class1{
    constructor(){
    this.name='fariba'

    }
}

class Class2{
constructor(){
    this.family='Rashtbar'

}
}

class Class3{
constructor(){
    this.age=27

}
}

let obj1=new Class1();
let obj2=new Class2();
let obj3=new Class3();
console.log(Object.setPrototypeOf(obj2,obj3))
// let obj4=Object.assign(obj1,obj2,obj3)
// console.log(obj1)

let obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj1)
console.log(obj2)
console.log(obj3)


//iterator

let user={
    id:1,
    name:'hessam',
    email:'hessam@gmail.com',
    posts:[
        {
            id:1,
            title:'this is one post'
        },
        {
            id:2,
            title:'this is two post'
        }

    ]
}

user[Symbol.iterator]=function(){
    let posts=this.posts;
    let step=0;
    return{
        next(){
            let obj={
                done:step>=posts.length,
                value:posts[step]
            }
            step++
            return obj
        }
    }
}

// let userit=user[Symbol.iterator]();
// console.log(userit.next())
// console.log(userit.next())
// console.log(userit.next())
// console.log(userit.next())

for (let iterator of user) {
    console.log(iterator)
}
