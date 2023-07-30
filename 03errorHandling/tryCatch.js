//handle exception using trying and catch
// try{
//     doSomething()
// }catch(e){
//     console.log("Error Occurred");
//     console.log(e);
// }


function doSomething(){
    const data =fetch("localhost:300/api")
  // console.log("I am from doSomething function")
}

//uncaught Exception
// process.on("uncaught Exception",(err)=>{
// console.log("There was an uncaught exception")
// process.exit(1)
// });
// doSomething();


//exception with promises

const promise = new Promise((resolve,reject)=>{
  if(false){
    resolve(doSomething());
  }else{
    reject(doSomething());
  }
 
})
promise.then((val)=>{
  console.log(val)
})
.catch((err) => {
  console.log("error occured");
  console.log(err)
})