module.exports = `

mutation {
    rel1: AddClientCurrency(from: { id: "CLI_1" }, to: {id: "CUR_1"}){from{id}}
    rel2: AddClientCurrency(from: { id: "CLI_2" }, to: {id: "CUR_1"}){from{id}}
    rel3: AddClientCurrency(from: { id: "CLI_3" }, to: {id: "CUR_2"}){from{id}}
    rel4: AddClientCurrency(from: { id: "CLI_4" }, to: {id: "CUR_3"}){from{id}}
    rel5: AddClientCurrency(from: { id: "CLI_5" }, to: {id: "CUR_3"}){from{id}}
}

`;

//mutation($client1: String!, $ccy1: String!) {
//    rel1: AddClientCurrency(from: { id: $client1 }, to: {id: $ccy1}){from{id}}
//}

//mutation {
//    rel1: AddClientCurrency(from: { id: "CLI_1" }, to: {id: "CUR_1"}){from{id}}
//}
