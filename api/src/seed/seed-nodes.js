export default `
mutation{
  CCY1 : CreateCurrency(id: "CUR_1" iso: "EUR" description: "Euro" exchange: 1) {id}
  CLIENT1 : CreateClient(id: "CLI_1" firstName: "Alex" lastName: "Brown") {id}
}

`;
