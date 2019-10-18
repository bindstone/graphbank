import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { getCurrencies } from "../../queries/currency-query";

const CurrencyCombobox = props => {
  const renderItems = currencies => {
    const items = currencies.map(ccy => {
      if (ccy.id === props.value) {
        return (
          <option selected key={ccy.id} value={ccy.id}>
            {ccy.iso}
          </option>
        );
      } else {
        return (
          <option key={ccy.id} value={ccy.id}>
            {ccy.iso}
          </option>
        );
      }
    });
    return (
      <Fragment>
        <option value={null}>---</option>
        {items}
      </Fragment>
    );
  };

  return (
    <select className="ui dropdown" onChange={props.onChange}>
      <Query query={getCurrencies}>
        {({ loading, error, data }) => {
          if (loading) return <option>Loading...</option>;

          if (error) return <option>Error</option>;

          return renderItems(data.Currency);
        }}
      </Query>
    </select>
  );
};

export default CurrencyCombobox;
