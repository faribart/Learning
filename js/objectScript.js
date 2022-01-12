'use strict'
var car={
    make:'ford',
    moddel:'munstag',
    year:1996,
    "year-old":1900,
    detail:{
        color:['red','black','blue'],
        wheels:4
    },
    summery:function(){
        return this.moddel+' '+this.year
    }
}
console.log(car.make)
car.make='saipa'
console.log(car.make)
car.name='irankhodro'
console.log(car)
car["year-old"]=1800
console.log(car["year-old"])
console.log(car.summery())

var car_2=new Object()
car_2.name='dena'
car_2.year=1400
console.log(car_2)

//------------constructor--------------
// function Car(){
// this.make="ford"
//  this.run=function(){
//     return "Speed up to 200";
// }
// }

// var car_3=new Car();
// // car_3.moddel="ford"

function Car(make,model,year){
this.make=make;
this.model=model;
this.year=year;
this.run=function(){
    return "Speed Of to 200";
}
}
Car.prototype.ww=function(){
    return "fun";
}
var car_3=new Car("saipa","pride",1990)
var car_4=new Car("saipa","pride",1990)
car_4.color="blue"
car_4.makeSmile=function(){
    console.log(":)")
}

var car_5=Object.create(null);
car_5.sayHello=function(){
    console.log("hello!");
}
var car_6=Object.create(car_4);
car_6.makeSmile=function(){
    console.log(":(");
}
var car_7=Object.create(car_5);



var car={
    make:"saipa",
    model:1995,
    displaydetails:function(){
        return "maker"+this.make+" model"+this.model
    }
}