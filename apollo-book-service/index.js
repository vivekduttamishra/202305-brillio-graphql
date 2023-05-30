
import {ApolloServer} from '@apollo/server';
import express from 'express';

//import {startStandaloneServer} from '@apollo/server/standalone';

import {expressMiddleware} from '@apollo/server/express4';
import path from 'path';

import schema from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';

var server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers

});
 
await server.start();  //Important!

var app = express();

//serve the static pages

app.use(express.static("./public"));

app.use(express.json()); //enable json body



app.use("/graphql", expressMiddleware(server));

var port=4000;

app
    .listen(port, ()=> console.log(`server started: http://localhost:${port}`))
    .on("error", (err)=> console.log(`Error: ${err.message}`));








