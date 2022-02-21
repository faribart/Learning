'use strict'

/*var i=0
var list=[]

while(i<10){
    if(i%2===0){
console.log('a');
    }
    else{
console.log('b');
    }
    if(i%2!=0){
        list.push(i);
    }
    i++;
}

console.log(list)
*/
try{

    if(true){
        throw{name:'aerror' , message:'this is an error'}
    }
}
catch(error){
    console.log(error.name , error.message);

}
finally{
    console.log('the end')
}