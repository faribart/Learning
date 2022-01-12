'use strict'
// // console.log("hello")


// var num=4
// // console.log(num)

// // var Num=[4,"fariba",true]
// // var x=6
// // console.log(Num)
// // console.log(x)

// switch (num) {
//     case 3:
//     case 4:
//         console.log("print 3+")
//         break;
//     // case 4:
//     //     console.log("print 4")
//     //     break;
//     case 5:
//         console.log("print 5")
//         break;
//     default:
//         console.log("wrong")
//         break;
// }

// switch (true) {
//     case (num==4 || num==3):
//         console.log("print 3+")
//         break;
//     // case 4:
//     //     console.log("print 4")
//     //     break;
//     case (num==5):
//         console.log("print 5")
//         break;
//     default:
//         console.log("wrong")
//         break;
// }
var items=[1,2,3,4,5,6,75]
function sum(items) {
    


// items.forEach(function(item) {
//     console.log(item);
// });

return items.reduce(function(total,value) {
   console.log(total,value) 
// return total,value
});
}

console.log(sum(items));


///////arrey
var list=['item',1,8,6,7,52,33]
var list2=[19,66]
// console.log(list[3]);
// console.log(list.push(13))
// console.log(list);
// console.log(list.pop())
// console.log(list);
// console.log(list.indexOf(52))
// console.log(list[list.indexOf(33)])
// console.log(list.shift())
// console.log(list.unshift('fariba'))
// console.log(list.splice(1,3))
// console.log(list.slice(2,5))
// console.log(list.join())
// console.log(list);
// console.log(list.join('-'))
// console.log(list);
// console.log(list.concat(list2))
// console.log(list.sort())
// console.log(list.reverse())
// var filterList=list.filter(function(item){
//    return item%2==1
// })
// console.log(filterList)
// var mapList=list.map(function(item){
//    return item+3
// })
// console.log(mapList)