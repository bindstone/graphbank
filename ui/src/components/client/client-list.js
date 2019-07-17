import React from "react";
import {Query} from "react-apollo";
import {getClients} from "../../queries/client-query";

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

    renderTable = (data) => {
        return (
            <table className="ui celled padded table">
                <thead>
                <tr>
                    <th colSpan="3" width="100%">
                        <div className="ui center aligned">
                            Clients
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Currency</th>
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
                    <td>{client.currency.iso}</td>
                </tr>
            );
        });
    };
}

export default ClientList;