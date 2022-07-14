// import db from "./logger"
// console.log('hello fariba')

// import { test,name,obj } from "./logger.js";
// import{log} from "./lib/pack"


// console.log(test,name,obj)

// log()


// import {Logger} from "./logger"

// import Logger from "./logger"
// import log,{error as r} from "./logger"

// Logger.success('Hello Roocket')
// Logger.error('Hello Roocket')
// r('hello rocket')

import * as log from "./logger"

let logger=log.default
console.log(logger.success("Hello"))
console.log(log.error("hi"))

import _ from "underscore"

console.log(_.first([4,2,6,1]))