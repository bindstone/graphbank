import React from "react";
import {Query} from "react-apollo";
import {getCurrencies} from "../../queries/currency-query";
import {Table} from "react-bootstrap";

class CurrencyList extends React.Component {

    render() {
        return (
            <Query query={getCurrencies}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;

                    if (error) return <p>Error</p>;

                    return this.renderTable(data);
                }}
            </Query>
        );
    }

    renderTable = (data) => {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th colSpan="2" width="100%">
                        <div className="ui center aligned">
                            Currencies
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>ISO</th>
                    <th>Exchange</th>
                </tr>
                </thead>
                <tbody>
                {this.renderRows(data.Currency)}
                </tbody>
            </Table>
        )
    };

    renderRows = (currencies) => {
        return currencies.map(currency => {
            return (
                <tr key={currency.id}>
                    <td>{currency.iso}</td>
                    <td>{currency.exchange}</td>
                </tr>
            );
        });
    };
}

export default CurrencyList;