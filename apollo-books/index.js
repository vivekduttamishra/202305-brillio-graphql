import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import typeDefs from './graphql/root-query.js';
import resolvers from './graphql/resolvers.js';
import {connect} from './db/connections.js';

var server = new ApolloServer({
    typeDefs,
    resolvers
});

await connect();
console.log('database connected...');
const {url}=await startStandaloneServer(server,{
    listen:5000
})
console.log(`server started ${url}`);

