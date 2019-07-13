import gql from "graphql-tag";

export const getCurrencies = gql`{Currency{id iso exchange}}`;