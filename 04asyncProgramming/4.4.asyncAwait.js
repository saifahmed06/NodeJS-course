import readline from  "readline-sync";


const userlogin =()=>{
    console.log("Enter username and password")
    let username = readline.question("Enter username: ");
    let password = readline.question("Enter password: ")
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("performing user Authentication");
        if(username==="saif"&& password ==="saif"){
        resolve("user Authenticated");
    }else{
        reject("Authentication failed!");
    }
    },1000);

});
};
function goToHomePage(userAuthStatus){
    return Promise.resolve(`Go to homepage as : ${userAuthStatus}`)
}
userlogin().then((response)=>{
    console.log("validated user");
    return goToHomePage(response);
})
.then((userAuthStatus)=>{
    console.log(userAuthStatus);
})
.catch((err)=>{
    console.log(err);

})
/////////////////////////////////////
//above we used .then but we can write code more clean and precisely using async await
//////////////////////////////////////