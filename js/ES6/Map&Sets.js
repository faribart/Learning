// let list=new Map();
// let MySymbol=Symbol('my data');
// list.set('key1','fariba')
// list.set('key2','Omid');
// list.set('key3','Darya');
// list.set(MySymbol,22);

// console.log(list.size)

// console.log(list.get('key3'))

// list.delete(MySymbol)
// console.log(list.size)

// // list.clear()

// // console.log(list)

// list.forEach((val,key)=>{
// console.log(val,key)
// })

// console.log(list.has('key4'))

// console.log(list.entries())

// for (const [key , val] of list) {
//     console.log(key,val)
// }

// for (const key of list.keys()) {
//     console.log(key)
// }

// for (const val of list.values()) {
//     console.log(val)
// }

// let arr=[['k1','far'],['k2','om'],['k3','da']]

// console.log(arr)


// sets

let list=new Set()

list.add(1)
list.add('far')
list.add(2)
list.add(1)

console.log(list)

list.delete(1)

console.log(list)

// list.clear()

console.log(list)

console.log(list.entries())

console.log([... list])