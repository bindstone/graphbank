export default `
mutation{
  CCY1 : CreateCurrency(id: "CUR_1" iso: "EUR" description: "Euro" exchange: 1) {id}
  CCY2 : CreateCurrency(id: "CUR_2" iso: "USD" description: "Euro" exchange: 0.8) {id}
  CCY3 : CreateCurrency(id: "CUR_3" iso: "CHF" description: "Euro" exchange: 1.2) {id}
  CLIENT1 : CreateClient(id: "CLI_1" firstName: "Alex" lastName: "Brown") {id}
}
`;
