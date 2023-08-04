// const promise = new Promise((resolve,reject)=>{
//     console.log("Aysnc task execution");
//     if(true){
//         resolve();
//     }else{
//         reject();
//     }
// });

// promise.then(
//     ()=>{
// console.log("Passed !");
// },
// ()=>{
//     console.log("Failed !");
// }
// );

/*
////Promise chaining

const p = Promise.resolve("done");

p.then((val)=>{
    console.log(val);
    return "done2";
})
.then((val)=>{
    console.log(val);
    return "done3"

})
.then((val)=>console.log(val))

//reject one
const q = Promise.reject("failed");

q.then((val)=>{
    console.log(val);
    return "done2";
})
.then((val)=>{
    console.log(val);
    return "done3"

})
.then((val)=>console.log(val))
.catch((val)=>console.log(val));


*/
/////////////////////////////
//Promise.all() AND promise.race()
/*
const makeApiCall = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This APi executed in: " + time )
        },time)
    })
}
makeApiCall(1000).then((val)=> console.log(val))
*/
//when we want multiple API calls to execute simulteneously instead of one by one
const makeApiCall = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This APi executed in: " + time )
        },time)
    })
}
let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
Promise.all(multiApiCall).then((values)=>{
    console.log(values)
});
Promise.race(multiApiCall).then((value)=>{
    console.log(value);
})