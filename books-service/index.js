
var express = require('express'); //no relative path

//let us create the express app
//think of express like a factory to create the server app
var app = express();  


//more middlewares

var stats={};

app.get('/stats',(req,res)=>{
    res.json(stats);
});


app.use((request,response,next)=>{
    
    var url = request.url;

    if(stats[url])
        stats[url]++;
    else
        stats[url]=1;


    next();
});






//configure your routes
var configureAppRoutes=require('./app-routes');
configureAppRoutes(app);

var configureBookRoutes=require('./book-routes');
configureBookRoutes(app);


//now we will let the app listen to a port
const port = 5000;

app
    .listen(port, ()=>console.log(`server started on: http://localhost:${port}/`))
    .on('error', (err)=>console.log(`server failed to start: ${err.message}`));


