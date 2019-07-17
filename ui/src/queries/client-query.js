import gql from "graphql-tag";

export const getClients = gql`query{Client{id firstName lastName currency{id iso}}}`;