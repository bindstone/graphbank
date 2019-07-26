import React from 'react';
import {addClientCurrency} from "../../queries/client-query";
import {graphql} from "react-apollo";
import CurrencyCombobox from "../currency/currency-combobox";
import {withRouter} from 'react-router-dom'
import {Button} from "react-bootstrap"
import Form from "react-bootstrap/Form";

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
                lastName: this.state.lastName,
                currencyId: this.state.currencyId
            },
            refetchQueries: ['GetClients']
        }).then(e => {
            this.props.history.push('/client');
        }).catch(e => console.log(e));
    };

    render() {
        return (
            <Form onSubmit={e => this.save(e)}>

                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First Name" type="text"
                                  onChange={e => this.setState({firstName: e.target.value})}
                                  value={this.state.firstName}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last Name" type="text"
                                  onChange={e => this.setState({lastName: e.target.value})}
                                  value={this.state.lastName}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Currency</Form.Label>
                    <CurrencyCombobox className="form-control"
                                      onChange={e => this.setState({currencyId: e.target.value})}
                                      value={this.state.currencyId}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Save</Button>
            </Form>
        )
    }
}

export default (graphql(addClientCurrency)(withRouter(ClientNew)));
