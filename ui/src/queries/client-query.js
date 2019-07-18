import gql from "graphql-tag";

export const getClients = gql`
    query{
        Client{
            id
            firstName
            lastName
            currency{
                id
                iso
            }
        }
    }
`;

export const addClient = gql`
    mutation AddClient($firstName: String! $lastName: String!) {
        addClient(fistName: $firstName lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;