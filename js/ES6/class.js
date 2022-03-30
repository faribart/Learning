// function Car(make,model,year){
//     this.make=make;
//     this.year=year;
//     this.model=model;
//     this.run=function(){
//         return 'speedd up to 200';
//     }
// }

class Car{

constructor(make,model,year){
    this.make=make;
    this.year=year;
    this.model=model;

    }
    run(){
        return 'speed up to 200'
    }
}


class irancar extends Car{
    constructor(make,model,year,color){
        super(make,model,year);
        this.color=color;
    }
    static run(){
        return 'speed up to 40'
    }
     go(){
        // console.log(super.run())
        return this.run();
    }
    fly(){
        return 'car is flying';
    }
}

let car1=new Car("ford","munstag","1988")
let car2=new irancar("ford","munstag","1988",'black')
// console.log(car2.go())
console.log(irancar.run())



class advancearray extends Array{
find(value){
    let val=this.filter(item => item===value)
    return val.length===0?'error':val[0]
}
}

let list=new advancearray('fariba' , 'zahra','sara')
list.find('mina')

class fo{
    constructor(){
        this.log=[];
    }
    
    set current(value){
        this.log.push(value);
    }

    get latest(){
        if(this.log.length===0){
            return undefined;
        }
        return this.log[this.log.length-1]
    }
}


let bar=new fo();
bar.current='a'
bar.current='b'

console.log(bar.latest)



let name="hessam"
let keyname1="fullname 1"

let obj={
name,
[keyname1]:"mosavi",
"say hello"(){
    return 'hello hesam';
}
}

console.log(obj["say hello"]())


// let symbol1=Symbol('fullname');
let symbol1=Symbol.for('fullname2')
let symbol2=Symbol('fullname');

console.log(symbol1==symbol2)

let oobjj={
    name:'hessam',
    [symbol1]:22,
    [symbol2]:22

}

for(let o in oobjj){
    console.log(o)
}

console.log(oobjj[symbol1])
console.log(oobjj[symbol2])

console.log(oobjj[symbol2]==oobjj[symbol1])


let symbolN=Symbol.for('fullname2')
console.log(oobjj[symbolN])

console.log('fo'.replace('fo','bar'))


class ReplaceX{
    constructor(value){
        this.value=value;
    }

    [Symbol.replace](string){
        // return 'fariba'
        return `/${string}/${this.value}`

    }
}

console.log('fo'.replace(new ReplaceX('bar')))
console.log('fo'.replace(new ReplaceX('bar')))



//array



let list1=[1,2,4,5]
let list4=[1,2,4,5,6,7,8,9,10]

// let list2=Array(1,34,4)
// let list2=Array(2)
let list2=Array.of(2)
let list3=Array.from(list1,item =>item*3)
console.log(list3)
console.log(list3.find(item =>item%2==0))
console.log(list3.filter(item =>item%2==0))
console.log(list1.entries())
for(let item of list1.entries()){
    console.log(item)
}

let arr=list1.entries()
// console.log(arr.next())
// console.log(list1.fill(40))
console.log(list1.fill(40,1,2))

console.log(list4.copyWithin(3,4,5))
