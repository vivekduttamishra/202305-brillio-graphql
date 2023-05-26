

const schema=`#graphql

type Author{
    id: String!,
    name:String!,
    biography:String!,
    photo:String,
    tags:[String],
    books:[Book]
},

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

type Query{
    books: [Book],
    book(id:String):Book,
    recommendedBooks: Book,
    authors: [Author],
    author(id:String):Author
}

type Mutation{
    addAuthor(id:String!, name:String!, biography:String!, photo:String, tags:[String]=[]): Author,
    addBook(id:String!, title:String!, description:String!, 
    coverPhoto:String, tags:[String]=[], price:Int!, rating:Float=5): Book,
}

`;

export default schema;