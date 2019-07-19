import React from 'react';
import {addClient} from "../../queries/client-query";
import {Mutation} from "react-apollo";
import CurrencyCombobox from "../currency/currency-combobox";

class ClientNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            currencyId: ''
        };
    };

    save = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <Mutation mutation={addClient}>
                {(addTodo, {data}) => (
                    <div className="ui form">
                        <form onSubmit={e => this.save(e)}>

                            <div className="field">
                                <label>First Name</label>
                                <input placeholder="First Name" type="text"
                                       onChange={e => this.setState({firstName: e.target.value})}
                                       value={this.state.firstName}
                                />
                            </div>

                            <div className="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" type="text"
                                       onChange={e => this.setState({lastName: e.target.value})}
                                       value={this.state.lastName}
                                />
                            </div>

                            <div className="field">
                                <label>Currency</label>
                                <CurrencyCombobox
                                    onChange={e => this.setState({currencyId: e.target.value})}
                                    value={this.state.currencyId}
                                />
                            </div>

                            <button className="ui submit button" type="submit">Save</button>
                        </form>
                    </div>
                )}
            </Mutation>
        );
    };
}

export default ClientNew;
