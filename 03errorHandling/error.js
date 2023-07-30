//Error Object

// const error = new Error("something went wrong!")
// console.log(error.stack)//shows all details along with error messge
// console.log(error.message)//only shows error messge
// throw new Error("I am An Error object")//same as stack


import {customError} from "./customError.js"
throw new customError("This is a custom Error object")