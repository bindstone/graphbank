import React from 'react';
import {withRouter} from "react-router";
import {graphql, Query} from "react-apollo";
import {getClient, updateUserWithCurrency} from "../../queries/client-query";
import Form from "react-bootstrap/Form";
import CurrencyCombobox from "../currency/currency-combobox";
import {Button} from "react-bootstrap";


class ClientModify extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clientId: "",
            firstName: "",
            lastName: "",
            currencyId: ""
        };
    };

    render() {
        const id = this.props.match.params.id;
        return (
            <Query query={getClient} variables={{id}} onCompleted={this.updateStates}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;

                    if (error) return <p>Error</p>;

                    return this.renderForm(data);
                }}
            </Query>
        );
    }

    updateStates = (data) => {
        const client = data.Client[0];
        this.setState({firstName: client.firstName});
        this.setState({lastName: client.lastName});
        this.setState({clientId: client.id});
        this.setState({currencyId: client.currency.id});
    };

    save = (e) => {
        e.preventDefault();
        const variables = {
            clientId: this.state.clientId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            currencyId: this.state.currencyId
        };
        console.log(variables);

        this.props.mutate({
            variables: variables,
            refetchQueries: ['GetClients', 'GetClient']
        }).then(e => {
            this.props.history.push('/client');
        }).catch(e => console.log(e));
    };

    renderForm() {
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

export default (graphql(updateUserWithCurrency)(withRouter(ClientModify)));
