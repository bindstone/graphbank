import React from "react";
import {graphql, Query} from "react-apollo";
import {deleteClient, getClients} from "../../queries/client-query";
import {withRouter} from 'react-router-dom'

class ClientList extends React.Component {


    render() {
        return (
            <Query query={getClients}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;

                    if (error) return <p>Error</p>;

                    return this.renderTable(data);
                }}
            </Query>
        );
    }

    add = () => {
        console.log("ADD");
        console.log(this.props);
        this.props.history.push('/client/new');
    };

    modify = (id) => {
        console.log("MODIFY : " + id);
        this.props.history.push(`/client/modify/${id}`);
    };

    delete = (id) => {
        console.log("DELETE : " + id);

        this.props.mutate({
            variables: {
                id: id
            },
            refetchQueries: () => ['GetClients']
        }).then(e => {
            console.log(e);
            console.log(this.props.data);
        }).catch(e => console.log(e));
    };

    renderTable = (data) => {
        return (
            <table className="ui celled padded table">
                <thead>
                <tr>
                    <th colSpan="4" width="100%">
                        <div className="ui center aligned">
                            Clients
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Currency</th>
                    <th>
                        <button className="ui button" onClick={this.add}>Add</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.renderRows(data.Client)}
                </tbody>
            </table>
        )
    };

    renderRows = (clients) => {
        return clients.map(client => {
            return (
                <tr key={client.id}>
                    <td>{client.firstName}</td>
                    <td>{client.lastName}</td>
                    <td>{client.currency == null ? '' : client.currency.iso}</td>
                    <td>
                        <button className="ui button" onClick={(e) => this.delete(client.id, e)}>delete</button>
                        <button className="ui button" onClick={(e) => this.modify(client.id, e)}>Modify</button>
                    </td>
                </tr>
            );
        });
    };
}

export default graphql(deleteClient)(withRouter(ClientList));