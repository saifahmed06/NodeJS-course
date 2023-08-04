console.log("Task start")
function asyncTask(cb){
    console.log("Task running");
    setTimeout( cb,10)
}
asyncTask(()=>  console.log(name))
console.log("Task End")
const name = "saif"