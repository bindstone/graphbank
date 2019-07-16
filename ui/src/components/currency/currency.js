import React from 'react';
import CurrencyList from "./currency-list";
import CurrencyCombobox from "./currency-combobox";

function Currency() {
    return (
        <div>
            <CurrencyCombobox/>
            <CurrencyList/>
        </div>
    );
}

export default Currency;
