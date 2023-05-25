import {Router} from 'express';

var router = Router();

    
router.get("/", (request,response)=>{

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

router.get("/date", function(req, res){
    var date=new Date();
    res.send(`Today is ${date.toLocaleDateString()}`);
});

router.get("/time", function(req, res){
    var date=new Date();
    var result = {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
        timeZoneOffset: date.getTimezoneOffset()
    }

    res.send(result);
});



export default router;