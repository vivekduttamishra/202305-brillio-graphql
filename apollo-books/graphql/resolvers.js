import books from '../data/books.js';
import authors from '../data/authors.js';

import {addAuthor,getAllAuthors,getAuthorById} from '../services/author-service.js';
import {addBook,getAllBooks,getBookById,getBooksByAuthor} from '../services/book-service.js';


const resolvers={
    Query:{
        books: async ()=>await getAllBooks(),

        book:async (_,args)=>{
            //return books.find(b=> b.id===args.id);
            return await getBookById(args.id);
        },

        authors: async ()=>await getAllAuthors(),

        async author(_,{id}){
            //return authors.find(a=> a.id ===id);
            return await getAuthorById(id);
        }
    },
    Book:{
        async author(parent){
            //return authors.find(a=>a.id===parent.authorId);
            return await getAuthorById(parent.authorId);
        }
    },
    Author:{
        async books(parent){
            //return books.filter(b=> b.authorId===parent.id)
            //console.log('parent',parent);
            
            
            var books= await getBooksByAuthor(parent.id);
            //console.log('author',author);
            
            return books;
        }
    },
    Mutation:{
        async addAuthor(_, {id,name,biography,photo}){
            var author={id,name,biography,photo};
            // console.log('author',author);
            // authors.push(author);
            var result= await addAuthor(author);
            console.log('result',result);
            return result; 
        },

        async addBook(_,{id, title, authorId, description, price, rating}){
            return await addBook({id, title, authorId, description, price, rating});
        }
    }
}  

export default resolvers;