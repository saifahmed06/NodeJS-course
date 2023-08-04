console.log("start operation");

function sleep(milliseconds){
console.log("operation is running");
setTimeout(()=>{
    console.log('Operation has completed');
},milliseconds);
}
sleep(1000);
console.log("do something else...")

//output
// start operation
// operation is running
// do something else...
// Operation has completed