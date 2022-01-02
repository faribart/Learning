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
function name(items) {
    


// items.forEach(function(item) {
//     console.log(item);
// });

return items.reduce(function(total,value) {
   console.log(total,value) 
// return total,value
});
}

name(items);