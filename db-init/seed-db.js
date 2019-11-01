const {ApolloClient} = require('apollo-client');
const gql = require('graphql-tag');
const dotenv = require('dotenv');
const seednodes = require('./seed-nodes');
const seedrelations = require('./seed-relations');
const fetch = require('node-fetch');
const {HttpLink} = require('apollo-link-http');
const {InMemoryCache} = require('apollo-cache-inmemory');
const {v1: neo4j} = require('neo4j-driver');

dotenv.config();

const driver = neo4j.driver(
    process.env.NEO4J_URI || "bolt://localhost:7687",
    neo4j.auth.basic(
        process.env.NEO4J_USER || "neo4j",
        process.env.NEO4J_PASSWORD || "neo4j"
    )
);

(async () => {
    const session = driver.session();

    console.log("Clear database...");
    const promise1 = await session.run(
        'MATCH (n) DETACH DELETE n'
    ).then(console.log("Database cleared..."));

    await promise1;
    session.close();
    driver.close();

    console.log("Create Nodes...");
    let data;
    const client = new ApolloClient({
        link: new HttpLink({uri: process.env.GRAPHQL_URI, fetch}),
        cache: new InMemoryCache()
    });

    const promise2 = client
        .mutate({
            mutation: gql(seednodes)
        })
        .then(val => data = val)
        .catch(error => console.error(error));

    await promise2;

    const vv = {
        "ccy1": data.data.CCY1.id,
        "client1": data.data.CLIENT1.id
    };
    console.log(vv);

    console.log("Creating Relations...");
    const promise3 = client
        .mutate({
            mutation: gql(seedrelations),
            variables: vv
        })
        .then()
        .catch(error => console.error(error));

    await promise3;

    // Close all
    console.log("Ending");
    client.stop();

})();
