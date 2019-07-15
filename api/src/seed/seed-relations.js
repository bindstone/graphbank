export default `

mutation {
    rel1: AddClientCurrency(from: { id: "CLI_1" }, to: {id: "CUR_1"}){from{id}}
}

`;

//mutation($client1: String!, $ccy1: String!) {
//    rel1: AddClientCurrency(from: { id: $client1 }, to: {id: $ccy1}){from{id}}
//}

//mutation {
//    rel1: AddClientCurrency(from: { id: "CLI_1" }, to: {id: "CUR_1"}){from{id}}
//}