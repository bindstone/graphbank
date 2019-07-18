import gql from "graphql-tag";

export const getCurrencies = gql`
    query {
        Currency{
            id iso exchange
        }
    }
`;