//var books=require('./data/books');
import books from '../data/books.js';

import express from 'express';

const router = express.Router();

router.get("/", (request, response)=>{
    response.json(books); //also sets content-type
});

router.post("/",(request,response)=>{
    console.log('request.body',request.body);
    
    books.push(request.body);

    response.status(201);
    response.json(request.body);
    
});


router.get("/:id", (request, response)=>{

    var id = request.params.id;

    var book  = books.find(book=>book.id === id);
    if(book)
        return response.json(book);
    else{
        response.status(404);
        response.json({error:'Invalid book id',id});
    }

});

router.delete("/:id", function(request, response) {
    var {id} = request.params;
    books=books.filter(b=>b.id!==id);

    response.status(204); //no content
    response.send();
});

router.get("/by/:authorName", function(req, res){
    
    var {authorName} = req.params;
    authorName=authorName.split('-').join(' ').toLowerCase();

    var result = books.filter(b=>b.author.toLowerCase().includes(authorName));

    res.json(result);
});

export default router;


