console.log("Bismillah")
//////////////////////////////////



/*const htttp = require('http');
function rqListener(req,res){

}
htttp.createServer(rqListener);//this is one way
*/


/*/better method
//const htttp = require('http');
http.createServer(function(req,res){

})
;
*/

//udemy course code
// import http from 'http'

// const server = http.createServer((req,res)=>{
//     console.log(req)
// });
// server.listen(3000)




//29.understanding the requests

// import http from 'http'

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method ,req.headers)
// //process.exit(); = to end the server,it closes the program
// });
// server.listen(3000)


//30.sending responses


import http from 'http'

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method ,req.headers)
// //process.exit(); = to end the server,it closes the program
// res.setHeader('Content-Type','text/html');
// res.writeContinue('<html>');
// res.write('<head><title>My first page</title><head>')
// res.write('<body><h1>Hello from Node.js Server!</h1></body>');
// res.write('</html>') 
// });
// server.listen(3000)



//31.Request & Response Headers
//link : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

//32.Routing Request
//we want to load a page where the user can enter some data which we then
// store in a file on the server once it is sent. We can do this by first of all parsing the url. I'm storing it in a new constant

import http from 'http'

const server = http.createServer((req,res)=>{
    const url = req.url;
if(url==='/'){
    res.write('<html>');
res.write('<head><title>Enter Message : </title><head>')
res.write('<body><form><inpHello from Node.js Server!</form></body>');
res.write('</html>');
res.end();
    
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My first page</title><head>')
res.write('<body><h1>Hello from Node.js Server!</h1></body>');
res.write('</html>');
res.end();
});
server.listen(3000)






/*
//Modern JS methhod
import http from 'http'

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end("hello World !")
//console.log( req);
});
server.listen(3000,()=>{
    console.log("server is running on port 3000")
}); 


//normally we can access server using localhost:3000
//To access local host server using enter IP-Address of Virtual box machine and add port number ex: 192.168.1.47:3000

*/









 










/*/StackoverFlow mwthods

//Lets require/import the HTTP module
// var http = require('http');
import http from 'http'

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
*/