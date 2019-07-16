import React, {Fragment} from "react";
import {Query} from "react-apollo";
import {getCurrencies} from "../../queries/currency-query";

class CurrencyCombobox extends React.Component {

    render() {
        return (
            <select className="ui dropdown">
                <Query query={getCurrencies}>
                    {({loading, error, data}) => {
                        if (loading) return <option>Loading...</option>;

                        if (error) return <option>Error</option>;

                        return this.renderItems(data.Currency);
                    }}
                </Query>
            </select>
        );
    }

    renderItems = (currencies) => {
        const items = currencies.map((ccy) =>
            <option key={ccy.id} value={ccy.iso}>
                {ccy.iso}
            </option>
        );
        return (
            <Fragment>
                {items}
            </Fragment>
        );
    };
}

export default CurrencyCombobox;