
//let
// function func(){
// let x=10;
// if(true){
//    let x='fariba'
//    console.log(x)
// }
// console.log(x);
// }

// func()

// var array=[1,2,3,4];
// for(var index=0;index<=array.length;index++){

// }
// console.log(index);


//const

// const x=4;
// x=3
// console.log(x)

// const x=[1,5,6]

// x.push(4)

// console.log(x)

// const NAME={age:23}
// // NAME={age:25}
// NAME.age=20
// console.log(NAME)


//arrow

// let sum=(a,b) => a+b
//return object
// let sum=(a,b) => ({a:a,b:b})
//or
// let sum=(a,b) => ({a,b})
// console.log(sum(4,8))
// let arr=[3,6,2]
// console.log(arr.map(function(item){
//     return item*3
// }))

// console.log(arr.map((item) => item*3))
// console.log(arr.map(item => item*3))

// function person(){
//     this.age=20
// // let that=this;
//     setInterval(() => {
//         this.age++
//         console.log(this.age)
//     }, 1000);
// }

// let pPerson=new person()
// let arguments=[1,3,8,9]

// function sum(a,b){
//     console.log(arguments)
// }
// let sum=(a,b) =>console.log(arguments)

// sum(1,5)
// console.log(sum(3,6))

// let obj={
//     a:10,
//     b:function(){
//         console.log(this.a,this)
//     },
//     c:() =>{
//         console.log(this.a,this)
//     }
// }


// obj.b()
// obj.c()

//default parameter

// function sum(x,y){
// // let a=typeof x==='undefined'?1:x
// let a=x||1;
// // let b=typeof y==='undefined'?1:y
// let b=y||1;
// console.log(a,b)
// }

// function sum(a=1,b=1){
//     console.log(a,b)
// }


// sum()


//rest

// function sum(...c){
//     return c.reduce((pre,current)=>{
//         return pre+current
//     })
// }


// console.log(sum(1,2,3,4,5,6,8,9))


//spread

function sum(a,b,c){
    console.log(a+b+c)
}

let list=[1,2,3]

// sum.apply(null,list)

sum(...list)