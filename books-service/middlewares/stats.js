
export  function useStats(app){

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
}
