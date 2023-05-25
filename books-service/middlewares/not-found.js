
var db={};

export function addNotFoundUrl(url){
    if(db[url])
        db[url]++;
    else
        db[url]=1;
}

export function useNotFound(app){

    app.use( (request,response,next)=>{

        next(); //lets call the next first
    
        //when next has completed and returning
        if(response.statusCode===404){
            addNotFoundUrl(request.originalUrl);
        }
    
    });

    app.get("/404", (request,response)=>{
        response.json(db);
    }) ;

}