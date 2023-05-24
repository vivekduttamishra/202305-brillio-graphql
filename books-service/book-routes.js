var books=require('./data/books');

module.exports= (app)=>{

    app.get('/api/books', (request, response)=>{
        response.json(books); //also sets content-type
    });

    app.post("/api/books",(request,response)=>{
        console.log('request.body',request.body);
        
        books.push(request.body);

        response.status(201);
        response.json(request.body);
        
    });
  


    app.get('/api/books/:id', (request, response)=>{

        var id = request.params.id;

        var book  = books.find(book=>book.id === id);
        if(book)
            return response.json(book);
        else{
            response.status(404);
            response.json({error:'Invalid book id',id});
        }

    });

    app.delete("/api/books/:id", function(request, response) {
        var {id} = request.params;
        books=books.filter(b=>b.id!==id);

        response.status(204); //no content
        response.send();
    });

  

    app.get('/api/books/by/:authorName', function(req, res){
        
        var {authorName} = req.params;
        authorName=authorName.split('-').join(' ').toLowerCase();

        var result = books.filter(b=>b.author.toLowerCase().includes(authorName));

        res.json(result);
    });

    
};