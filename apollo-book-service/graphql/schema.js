

const schema=`#graphql





type Author{
    id: String!,
    name:String!,
    biography:String!,
    photo:String,
    tags:[String],
    books:[Book],
    booksCount:Int!
},


type NotFoundMessage{
    message:String!,
    id: String!
   
}

union AuthorByIdReturn = Author | NotFoundMessage 


type Book{
    id: String!,
    title:String!,
    description:String!,
    coverPhto:String!,
    author:Author!,
    rating:Float!,
    tags:[String],
    price:Int!
}

input BookSearchFilter{

    title:String,

    author: String,

    tags: String,

    minRating: Float

}



type Query{

    author(id:String): AuthorByIdReturn,


    books(filter:BookSearchFilter): [Book],
    book(id:String):Book,
    recommendedBooks: Book,
    authors: [Author],


    
}

type Mutation{
    addAuthor(id:String!, name:String!, biography:String!, photo:String, tags:[String]=[]): Author,
    addBook(id:String!, title:String!, description:String!, 
    coverPhoto:String, tags:[String]=[], price:Int!, rating:Float=5): Book,
}

`;

export default schema;