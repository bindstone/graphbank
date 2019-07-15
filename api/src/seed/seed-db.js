import ApolloClient from "apollo-client";
import gql from "graphql-tag";
import dotenv from "dotenv";
import seednodes from "./seed-nodes";
import seedrelations from "./seed-relations";
import fetch from "node-fetch";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {v1 as neo4j} from "neo4j-driver";

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
