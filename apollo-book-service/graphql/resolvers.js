import {getAllAuthors, getAuthorById} from '../services/author-service.js';
import {getAllBooks,getBookById} from '../services/book-service.js';


const resolvers={

    Query:{
        
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

        books: async ()=> {             
            return await getAllBooks();
        },







        


        book: (_, args)=>{  return {id:args.id}    },
        
        recommendedBooks: ()=>{  return null;      },


    },

    Mutation:{
        addAuthor(_,args) {return null},
        addBook(_,args) {return null},         
    }

};


export default resolvers;