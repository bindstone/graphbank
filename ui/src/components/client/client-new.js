import React from 'react';
import {addClient} from "../../queries/client-query";
import {graphql} from "react-apollo";
import CurrencyCombobox from "../currency/currency-combobox";
import {withRouter} from 'react-router-dom'

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

        this.props.mutate({
            variables: {
                firstName: this.state.firstName,
                lastName: this.state.lastName
            },
            refetchQueries: ['GetClients']
        }).then(e => {
            console.log(e);
            this.props.history.push('/client');
        }).catch(e => console.log(e));
    };

    render() {
        return (
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
        )
    }
}

export default (graphql(addClient)(withRouter(ClientNew)));
