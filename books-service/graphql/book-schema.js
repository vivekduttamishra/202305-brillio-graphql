
import {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList
} from 'graphql';

import books from '../data/books.js';
import authors from '../data/authors.js';

//define a new type called Book

const Author = new GraphQLObjectType({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        biography:{type:GraphQLString},
    })
});

const Book = new GraphQLObjectType({
    name:"Book",

    fields: () =>({
      
        id: {type: GraphQLString},
        title:{type: GraphQLString},
        price:{type:GraphQLInt},
        author: {
            type: Author,
            //tell how to find the author
            resolve(parent){

                return authors.find(a=>a.id===parent.authorId);

                
            }
        },

        rating: {type: GraphQLFloat},
        description: {type: GraphQLString},
    })
});


const rootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        book:{
            type: Book,
            args: { 
                id: {type: GraphQLString}
            },
            resolve(parent,args){
                var id = args.id;
                return books.find(book=> book.id===id);
            }
        },

        books:{
            type: new GraphQLList(Book), //it will return a list of book,
            resolve(){
                return books;
            }
        },

        recommendedBook:{
            type: Book,

            resolve(){
                return books[0]; //recommended book
            }
        }
    }

})

export const schema = new GraphQLSchema({
    query:rootQuery
});

