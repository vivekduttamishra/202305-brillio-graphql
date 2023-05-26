
import {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
    GraphQLBoolean
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
        books:{
            type: new GraphQLList(Book),
            resolve(parent){
                return books.filter(b=>b.authorId===parent.id);
            }
        }
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
        },

        authors:{
            type: new GraphQLList(Author),
            resolve(){
                return authors;
            }
        },
        author:{
            type: Author,
            args:{
                id:{type:GraphQLString}
            },
            resolve(_, {id}){
                return authors.find(a=>a.id===id);
            }
        }
    }

})

const Result = new GraphQLObjectType({
    name:"Result",
    fields:()=>({
        success:{type:GraphQLBoolean}
    })
});

const mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:()=>({
        addAuthor:{
            type: Author,
            args:{
                id:{type:GraphQLString},
                name:{type:GraphQLString},
                biography:{type:GraphQLString}
            },
            resolve(_, {id,name,biography}){
                var author={id,name,biography};
                authors.push(author);
                return author;
            }
        },
        deleteBook:{
            type: Result,
            args:{
                id: {type:GraphQLString}
            },
            resolve(_,{id}){
                console.log('id',id);
                var index=-1;
                books.forEach((b,i)=>{
                    if(b.id===id)
                        index=i;
                })
                console.log('index',index);
                
                if(index<0)
                    return {success:false};
                else{
                    books.splice(index,1);
                    return {success:true};
                }
                    
            }
        }
    })
});


export const schema = new GraphQLSchema({
    query:rootQuery,
    mutation:mutation
});

 