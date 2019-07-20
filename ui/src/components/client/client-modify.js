import React, {Fragment} from 'react';
import {withRouter} from "react-router";
import {Query} from "react-apollo";
import {getClient} from "../../queries/client-query";


class ClientModify extends React.Component {

    render() {
        const id = this.props.match.params.id;
        console.log(id);

        return (
            <Query query={getClient} variables={{id}}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;

                    if (error) return <p>Error</p>;

                    return this.renderClient(data);
                }}
            </Query>
        );
    }

    renderClient(clients) {
        const client = clients != null && clients.Client.length > 0 ? clients.Client[0] : {};
        console.log(clients);
        return (
            <Fragment>
                <div>{client.id}</div>
                <div>{client.firstName}</div>
                <div>{client.lastName}</div>
                <div>{client.currency == null ? '' : client.currency.iso}</div>
            </Fragment>
        );
    }
}

export default withRouter(ClientModify);
