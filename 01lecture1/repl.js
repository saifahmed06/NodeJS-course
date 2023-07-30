//REPL = read,eveluate,print, loop
import repl from "repl"
const local = repl.start("The node console started $ ")


local.on('exit',()=>{
    console.log("nodeJS closed")
    process.exit();
})

































/*
const names = ["saif","ammi","didi"]
const naam = ["1saif","2ammi","3didi"]
const myForEach = (arr,cb)=>{
    for(let i=0;i< arr.length ;i++){
        const element = arr[i];
        cb(element);
}
}
myForEach(naam,(name)=>{
    console.log(name)})
 */