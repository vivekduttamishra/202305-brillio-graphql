import {graphqlHTTP} from 'express-graphql';

import {schema} from './graphql/book-schema.js';

export function configureGraphQL(app){

    app.use("/graphql", graphqlHTTP({
        schema: schema,
        graphiql:true
    }));
} 