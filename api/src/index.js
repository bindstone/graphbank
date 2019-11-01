const {express: voyagerMiddleware} = require('graphql-voyager/middleware');
const {GraphQLServer} = require('graphql-yoga');
const {v1: neo4j} = require("neo4j-driver");
const {makeAugmentedSchema} = require("neo4j-graphql-js");
const dotenv = require("dotenv");
const path = require("path");
const fs = require('fs');

// ENVIRONMENT
dotenv.config();

// GRAPHQL Definition
const typeDefs = fs
    .readFileSync(
        process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql")
    )
    .toString("utf-8");

const schema = makeAugmentedSchema({
    typeDefs
    // resolvers,
});

// NEO Driver
const driver = neo4j.driver(
    process.env.NEO4J_URI || "bolt://localhost:7687",
    neo4j.auth.basic(
        process.env.NEO4J_USER || "neo4j",
        process.env.NEO4J_PASSWORD || "neo4j"
    )
);

// SERVER
const options = {
    port: 4000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
};
const server = new GraphQLServer({typeDefs, schema, context: {driver}});
server.use('/voyager', voyagerMiddleware({endpointUrl: '/graphql'}));
server.start(options, () => {
    console.log('Server is running on http://localhost:' + options.port);
    console.log('Server is running on http://localhost:' + options.port + '/graphql');
    console.log('Server is running on http://localhost:' + options.port + '/playground');
    console.log('Server is running on http://localhost:' + options.port + '/voyager');
});
