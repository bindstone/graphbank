import gql from "graphql-tag";

export const getClients = gql`
    query{
        Client{
            id
            firstName
            lastName
            currency {
                id
                iso
            }
        }
    }
`;

export const getClient = gql`
    query GetClient($id: ID) {
        Client(id: $id) {
            id
            firstName
            lastName
            currency {
                id
                iso
            }
        }
    }
`;

export const addClient = gql`
    mutation AddClient($firstName: String! $lastName: String!) {
        CreateClient(firstName: $firstName lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;

export const deleteClient = gql`
    mutation DeleteClient($id: ID!) {
        DeleteClient(id: $id) {
            id
        }
    }
`;

export const addClientCurrency = gql`
    mutation AddClientCurrency($cliendId: String! $currencyId: String!) {
        AddClientCurrency(
            from: { id: $clientId },
            to: { id: $currencyId } )
        { to { id } }
    }
`;