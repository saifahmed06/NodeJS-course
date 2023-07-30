function doSomething() {
    //const data =fetch("localhost:300/api");
   console.log("I am from doSomething function");
//   return data;
}
// doSomething()
//exception with Async and Await
const someFunction = async()=>{
    try{
        await doSomething();
    }catch(err){
        throw CustomError(err.message)
    }
};
someFunction();