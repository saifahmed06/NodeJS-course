// import http from 'http';
import express from 'express';
// import routes from './routes';

const app = express();
app.use((req,res,next)=>{
    console.log('In the middleware!');
   
      next();
});

app.use((req,res,next)=>{
    console.log('In the next middleware!')
    res.send('<h1>Hello from express</h1>')
});


// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)
