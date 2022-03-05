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
    run(){
        return 'speed up to 200'
    }
}
}

let car1=new Car("ford","munstag","1988")

console.log(car1)