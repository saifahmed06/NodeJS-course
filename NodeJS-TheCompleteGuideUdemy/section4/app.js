// console.log("Bismillah")
// //////////////////////////////////



// /*const htttp = require('http');
// function rqListener(req,res){

// }
// htttp.createServer(rqListener);//this is one way
// */


// /*/better method
// //const htttp = require('http');
// http.createServer(function(req,res){

// })
// ;
// */

// //udemy course code
// // import http from 'http'

// // const server = http.createServer((req,res)=>{
// //     console.log(req)
// // });
// // server.listen(3000)




// //29.understanding the requests

// // import http from 'http'

// // const server = http.createServer((req,res)=>{
// //     console.log(req.url,req.method ,req.headers)
// // //process.exit(); = to end the server,it closes the program
// // });
// // server.listen(3000)


// //30.sending responses


// //import http from 'http'

// // const server = http.createServer((req,res)=>{
// //     console.log(req.url,req.method ,req.headers)
// // //process.exit(); = to end the server,it closes the program
// // res.setHeader('Content-Type','text/html');
// // res.writeContinue('<html>');
// // res.write('<head><title>My first page</title><head>')
// // res.write('<body><h1>Hello from Node.js Server!</h1></body>');
// // res.write('</html>') 
// // });
// // server.listen(3000)



// //31.Request & Response Headers
// //link : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

// //32.Routing Request
// //we want to load a page where the user can enter some data which we then
// // store in a file on the server once it is sent. We can do this by first of all parsing the url. I'm storing it in a new constant

// // import http from 'http'

// // const server = http.createServer((req,res)=>{
// //     const url = req.url;
// // if(url==='/'){
// //     res.write('<html>');
// // res.write('<head><title>Enter Message : </title><head>')
// // res.write('<body><form action="/message method="POST"><input type="text" name="message"><button type="Submit">Send</button></form></body>');
// // res.write('</html>');
// // return res.end();
    
// // }

// // res.setHeader('Content-Type','text/html');
// // res.write('<html>');
// // res.write('<head><title>My first page</title><head>')
// // res.write('<body><h1>Hello from Node.js Server!</h1></body>');
// // res.write('</html>');
// // res.end();
// // });
// // server.listen(3000)

// /*
// //33.Redirecting Requests
// //I want to do two things, I want to redirect the user back to slash nothing,so not leave him on /message 
// //and I want to create a new file and store the message the user entered in it.
// import http from 'http';
// import * as fs from 'fs'// fs allows us to work with the file system

// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     const method = req.method;
// if(url==='/'){
//     res.write('<html>');
//     res.write('<head><title>Enter Message : </title><head>')
//     res.write('<body><form action="/message method="POST"><input type="text" name="message"><button type="Submit">Send</button></form></body>');
//     res.write('</html>');
// return res.end();
    
// }
// //I want to be sure that we're not handling a get request but a post request here,
// if(url ==='/message' && method ==='POST'){
//     fs.writeFileSync('message.txt', 'DUMMY');
//     res.statusCode = 302; //Status code of 302 which stands for redirection
//     res.setHeader('Location', '/');
//    return res.end(); //return is mandotory or else it will keep going down and excute below lines of code
// }
// res.setHeader('Content-Type','text/html');
// res.write('<html>');
// res.write('<head><title>My first page</title><head>');
// res.write('<body><h1>Hello from Node.js Server!</h1></body>');
// res.write('</html>');
// res.end();
// });
// server.listen(3000)
// */

// //34.Parsing Request Bodies

// // import http from 'http';
// // import * as fs from 'fs'
// // const server = http.createServer((req, res) => {
// //   const url = req.url;
// //   const method = req.method;
// //   if (url === '/') {
// //     res.write('<html>');
// //     res.write('<head><title>Enter Message</title><head>');
// //     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
// //     res.write('</html>');
// //     return res.end();
// //   }
  
// //   if (url === '/message' && method === 'POST') {
// //     const body = [];
// //     req.on('data', (chunk) => {
// //       console.log(chunk);
// //       body.push(chunk);
// //     });
// //     req.on('end', () => {
// //       const parsedBody = Buffer.concat(body).toString();
// //       const message = parsedBody.split('=')[1];
// //       fs.writeFileSync('message.txt', message);
// //     });
// //     res.statusCode = 302;
// //     res.setHeader('Location', '/');
// //      return res.end();
  
// //   }
 
// //   res.setHeader('Content-Type', 'text/html');
// //   res.write('<html>');
// //   res.write('<head><title>My First Page</title><head>');
// //   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
// //   res.write('</html>');
// //   res.end();

// // });
// // // });

// // server.listen(3000);
// // server.listen(3000)





// //38.Using the node modulus system
// import http from 'http';

// import routes from './routes.js'
// console.log(routes.someText)
// const server = http.createServer(routes)
 
// server.listen(3000);
// /*
// //Modern JS methhod
// import http from 'http'

// const server = http.createServer((req,res)=>{
//     res.writeHead(200);
//     res.end("hello World !")
// //console.log( req);
// });
// server.listen(3000,()=>{
//     console.log("server is running on port 3000")
// }); 


// //normally we can access server using localhost:3000
// //To access local host server using enter IP-Address of Virtual box machine and add port number ex: 192.168.1.47:3000

// */









 










// /*/StackoverFlow mwthods

// //Lets require/import the HTTP module
// // var http = require('http');
// import http from 'http'

// //Lets define a port we want to listen to
// const PORT=8080; 

// //We need a function which handles requests and send response
// function handleRequest(request, response){
//     response.end('It Works!! Path Hit: ' + request.url);
// }

// //Create a server
// var server = http.createServer(handleRequest);

// //Lets start our server
// server.listen(PORT, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:%s", PORT);
// });
// */