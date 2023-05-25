//var books=require('./data/books');
import _books from '../data/books.js';

var books=[..._books];

import express from 'express';

let router = express.Router();

router
    .route("/")
    .get((request, response) => {
        response.json(books); //also sets content-type
    })
    .post((request, response) => {
        console.log('request.body', request.body);

        books.push(request.body);

        response.status(201);
        response.json(request.body);

    });



router
    .route("/:id")
    .get((request, response) => {

        var id = request.params.id;

        var book = books.find(book => book.id === id);
        if (book)
            return response.json(book);
        else {
            response.status(404);
            response.json({ error: 'Invalid book id', id });
        }

    })
    .delete(function (request, response) {
        var { id } = request.params;
        books = books.filter(b => b.id !== id);

        response.status(204); //no content
        response.send();
    });

    router.get("/by/:authorName", function (req, res) {

        var { authorName } = req.params;
        authorName = authorName.split('-').join(' ').toLowerCase();

        var result = books.filter(b => b.author.toLowerCase().includes(authorName));

        res.json(result);
    });

export default router;


