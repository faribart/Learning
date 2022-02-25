'use strict'

// var ajax=new XMLHttpRequest();
// ajax.open('GET','https://jsonplaceholder.typicode.com/users')

// ajax.send();

// ajax.onreadystatechange=function(){
//     if(this.readyState==XMLHttpRequest.DONE){
//         if(this.status==200){
//         console.log(this.responseText);
//         }
//       else if(this.status==404){
//           console.log("not available URL")
//       }
//     }
// }

// ajax.addEventListener('load',function(){
//     if(this.readyState==XMLHttpRequest.DONE){
//                 if(this.status==200){
//                 console.log(this.responseText);
//                 }
//               else if(this.status==404){
//                   console.log("not available URL")
//               }
//             }
// })

// ajax.send();



var ajax=new XMLHttpRequest();


var data={
    username:'fariba74',
    email:'fariba@gmail.com'
}
ajax.open('POST','https://jsonplaceholder.typicode.com/users');
ajax.setRequestHeader('Content-type',"application/json; charset=UTF-8");

ajax.addEventListener('load',function(){
    if(this.readyState==XMLHttpRequest.DONE){
        if(this.status==201)
        {
            console.log('done')
            var data=JSON.parse(this.responseText);
            console.log(data)
        }
        else{
            console.log(this.status)
        }
    }
})

ajax.send(JSON.stringify(data));