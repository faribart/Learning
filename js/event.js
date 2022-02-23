'use strict'
//  alert('hello world!');
// console.log(confirm('are you ready?'));
console.log(prompt('whats your name?'));

// var title=document.querySelector('#title');
// title.onclick
var el1=document.querySelector('.el1');
var el2=document.querySelector('.el2');


// title.addEventListener('click',function(){
//     console.log('handeler1')
// })

// title.addEventListener('click',function(){
//     console.log('handeler2')
// })

var funcRem=function(e){
    e.stopPropagation();
    console.log('el2');
}

el1.addEventListener('click' , function(e){
    console.log('el1');
})
el2.addEventListener('click' , funcRem)

var a=document.querySelector('#web');

a.addEventListener('click',function(e){
    e.preventDefault();
    console.log('click');
})

// setTimeout(() => {
//     el2.removeEventListener('click',funcRem)
// }, 2000);