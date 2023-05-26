

const resolvers={

    Query:{
        books: ()=>{  return [];   },
        book: (_, args)=>{  return {id:args.id}    },
        recommendedBooks: ()=>{  return null;      },
        authors: ()=>{ return []  },
        author(_, args){ return {id:args.id};  }

    },

    Mutation:{
        addAuthor(_,args) {return null},
        addBook(_,args) {return null},         
    }

};


export default resolvers;