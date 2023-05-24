
var http = require('http');
var books= require('./data/books.js');


function requestHandler(request,response){
    
    var url=request.url;
    console.log('url',url);
    //console.log('response',response);
    
    if(url==='/'){
        response.setHeader('Content-Type', 'text/html');
        response.end(`
        <h1>Welcome to Books API Server!</h1>

            You can try out

            <ul>
                <li><a href="/api/books">/api/books</a></li>
                <li><a href="/api/books/manas">/api/books/manas</a></li>
                <li><a href="/api/books/by/vivek-dutta-mishra">/api/books/by/vivek-dutta-mishra</a></li>
            </ul>
        `);
    } else if(url==='/date'){
        response.setHeader('Content-Type', 'text/plain');
        response.end("Date is "+new Date().toLocaleDateString());
    } else if (url==='/time'){
        var data={
            time: new Date().toLocaleTimeString()
        };
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(data));
    } else if (url==='/api/books'){

        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(books)) ;

    } else if(url.startsWith('/api/books/by/')){
        var authorId= url.split('/').pop();
        var authorName= authorId.split('-').join(' ').toLowerCase();
        var selectedBooks= books.filter(b=>b.author.toLowerCase().includes(authorName));
        response.end(JSON.stringify(selectedBooks));
    }    
    else if (url.startsWith('/api/books/')){
        //get book by id
        var id= url.split('/').pop();
        var book  = books.find(book=>book.id===id);
        if(book) {
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(book));            
        } else{
            var data={ error:"book not found", id };
            response.setHeader('Content-Type', 'application/json');
            response.statusCode=404;
            response.end(JSON.stringify(data));
        }

    }else{
        response.statusCode=404;
        response.setHeader('Content-Type', 'text/html');
        response.end(`
        <h1>Error 404. Not Found: ${url}</h1>
        <p>Sorry we couldn't get what your are looking for</p>           
        `);
    }
    
    
}

var server= http.createServer(requestHandler);

const port=5000;

var e= server.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});

e.on("error", error=> console.log(`Error Starting Server: ${error.message}`));

