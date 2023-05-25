

function configureAppRoutes(app){
    
    app.get("/", (request,response)=>{
    
        response.send(`
            <h1>Welcome to Book Service</h1>
            <p>Here are some important API End Points</p>
            <ul>
                <li><a href="/api/books">/api/books</a></li>
                <li><a href="/api/books/manas">/api/books/manas</a></li>
                <li><a href="/api/books/by/vivek-dutta-mishra">
                    /api/books/by/vivek-dutta-mishra</a>
                </li>
            </ul>
    
        `);
    
    });
    
    app.get("/date", function(req, res){
        var date=new Date();
        res.send(`Today is ${date.toLocaleDateString()}`);
    });
    
    app.get("/time", function(req, res){
        var date=new Date();
        var result = {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
            timeZoneOffset: date.getTimezoneOffset()
        }
    
        res.send(result);
    });

}

module.exports=configureAppRoutes