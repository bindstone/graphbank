export default `
mutation{
  CCY1 : CreateCurrency(id: "CUR_1" iso: "EUR" description: "Euro" exchange: 1) {id}
  CCY2 : CreateCurrency(id: "CUR_2" iso: "USD" description: "US Dollar" exchange: 0.8) {id}
  CCY3 : CreateCurrency(id: "CUR_3" iso: "CHF" description: "Swiss Franc" exchange: 1.2) {id}
  CLIENT1 : CreateClient(id: "CLI_1" firstName: "Alex" lastName: "Brown") {id}
  CLIENT2 : CreateClient(id: "CLI_2" firstName: "Carla" lastName: "White") {id}
  CLIENT3 : CreateClient(id: "CLI_3" firstName: "Johnny" lastName: "Red") {id}
  CLIENT4 : CreateClient(id: "CLI_4" firstName: "Micky" lastName: "Blue") {id}
  CLIENT5 : CreateClient(id: "CLI_5" firstName: "Anna" lastName: "Green") {id}
}
`;
