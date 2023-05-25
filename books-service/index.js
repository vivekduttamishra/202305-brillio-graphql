

import express from 'express';
import appRouter from './routes/app-routes.js';
import bookRouter from './routes/book-routes.js';
import {useStats} from './middlewares/stats.js';

import {useNotFound} from './middlewares/not-found.js';



//let us create the express app
//think of express like a factory to create the server app
var app = express();  

//configure middlewares


app.use(express.json()); 
useStats(app);
useNotFound(app); 




//configure routes
app.use(appRouter);
app.use("/api/books", bookRouter);





//now we will let the app listen to a port
const port = 5000;

app
    .listen(port, ()=>console.log(`server started on: http://localhost:${port}/`))
    .on('error', (err)=>console.log(`server failed to start: ${err.message}`));


