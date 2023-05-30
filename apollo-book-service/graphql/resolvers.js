import {getAllAuthors, getAuthorById} from '../services/author-service.js';
import {getAllBooks,getBookById, getBooksByAuthor} from '../services/book-service.js';


const resolvers={

    AuthorByIdReturn :{

        __resolveType: obj=>{
            if(obj.name)
                return "Author";
            else if (obj.message)
                return "NotFoundMessage";
            else
                return null ; //invalid type
        }
    },






    

    Author:{

        books: async(parent)=>{

            var authorId=parent.id;
            return await getBooksByAuthor(authorId);
        },


        booksCount: async ({id})=>{
            var books = await getBooksByAuthor(id);
            return books.length;
        }

       

    },




    Book:{
        author:async (parent)=>{
            return await getAuthorById(parent.authorId);            
        },
        
        price: ()=> 0  //all books are now free!
    },   





    Query:{

        books: async (_, args)=> {             
            console.log('args',args);
            
            var books= await getAllBooks();

            if(args.filter){

                console.log('filtering...');
                if(args.filter.title){
                    console.log('filtering on title', args.filter.title);
                    books = books.filter( b=> b.title.toLowerCase().includes( args.filter.title.toLowerCase()))
                }

                if(args.filter.author){
                    var author=args.filter.author.toLowerCase();
                    books=books.filter(b=>b.author.toLowerCase().includes(author));
                }

                if(args.filter.tags){
                    var _tag=arg.filter.tags.toLowerCase();
                    books= books.filter(book=> book.tags.filter(tag=>tag.toLowerCase().equals(_tag)));
                }

                if(args.filter.minRating){
                    books=books.filter(book=>book.rating>=args.filter.minRating);
                }

            }


            return books;
        },        


        book: async (_, args)=>{  
            
            var book = await getBookById(args.id);
           
            return book;
        },
        
        authors: ()=>{ 
            
           return  getAllAuthors();    
            
        },
        
        author(_, args){ 

            return getAuthorById(args.id)
                    .then( author => author)
                    .catch(error=>{
                        return  {
                            message: "No Found",
                            id: args.id
                        }
                    });

         },



        
        
        recommendedBooks: async ()=>{  

            var books=await getAllBooks();
            var index= Math.floor(Math.random() * books.length);
            return books[index];

        },


    },

    Mutation:{
        addAuthor(_,args) {return null},
        addBook(_,args) {return null},         
    }

};


export default resolvers;