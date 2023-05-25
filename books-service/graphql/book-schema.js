
import {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList
} from 'graphql';

import books from '../data/books.js';

//define a new type called Book

const Book = new GraphQLObjectType({
    name:"Book",

    fields: () =>({
      
        id: {type: GraphQLString},
        title:{type: GraphQLString},
        price:{type:GraphQLInt},
        author: {type: GraphQLString},
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

