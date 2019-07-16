import React from "react";
import {Query} from "react-apollo";
import {getCurrencies} from "../../queries/currency-query";

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
            <table className="ui celled padded table">
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
            </table>
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