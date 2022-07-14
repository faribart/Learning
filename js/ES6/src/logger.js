// let db={


// }

// export default db;


// function test(){
//     console.log('test')
// }

// let name='fariba'

// let obj={
//     age:20
// }

// export{
//     test,
//     name,
//     obj
// }



class Logger{
    static success(message){
        console.log(`%c ${message}`,`color:green`)
    }
    static error(message){
        console.log(`%c ${message}`,`color:red`)
    }
}

// class Logger{
//      success(message){
//         console.log(`%c ${message}`,`color:green`)
//     }
//      error(message){
//         console.log(`%c ${message}`,`color:red`)
//     }
// }

// class Car{
//     static error(message){
//         console.log(`%c ${message}`,`color:red`)
//     }    
// }

const error=function(message){
    Logger.error(message +'Hello')
}

// export {Logger}
export default Logger;
export{
    error
}
// export default new Logger()
// export default Car;