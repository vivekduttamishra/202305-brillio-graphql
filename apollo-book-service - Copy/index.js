
import {ApolloServer} from '@apollo/server';

import {startStandaloneServer} from '@apollo/server/standalone';

import schema from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';

var server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers

});

var {url} = await startStandaloneServer(server,{
    listen:4000
});

console.log(`server started : ${url}`);






