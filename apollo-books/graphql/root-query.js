
export default `#graphql

    type Book{
        id: String!,
        title: String!,
        description: String!,
        authorId: String!
        
        price:Int,
        rating: Float
        author: Author!
    }

    type Author{
        id: String!
        name: String!
        biography:String!
        tags:[String!]
        photo:String
        books:[Book]!
    }

    type Query{
        books:[Book],
        book(id:String):Book
        authors:[Author]
        author(id:String):Author
    }

    type Mutation{
        addAuthor(id:String, name:String, biography:String, photo:String): Author
        addBook(id:String, title:String, authorId:String, description:String, price:Int, rating:Float):Book
    }


`;