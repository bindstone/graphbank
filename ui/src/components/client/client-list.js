import React from "react";
import { Table } from "react-bootstrap";
import { graphql, Query } from "react-apollo";
import { deleteClient, getClients } from "../../queries/client-query";
import { withRouter } from "react-router-dom";

const ClientList = props => {
  const addClient = () => {
    props.history.push("/client/new");
  };

  const modClient = id => {
    props.history.push(`/client/modify/${id}`);
  };

  const delClient = id => {
    props
      .mutate({
        variables: {
          id
        },
        refetchQueries: () => ["GetClients"]
      })
      .then()
      .catch(e => console.log(e));
  };

  const renderTable = data => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="4" width="100%">
              <div className="ui center aligned">Clients</div>
            </th>
          </tr>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Currency</th>
            <th>
              <button
                type="button"
                className="btn btn-light"
                onClick={addClient}
              >
                Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{renderRows(data.Client)}</tbody>
      </Table>
    );
  };

  const renderRows = clients => {
    return clients.map(client => {
      return (
        <tr key={client.id}>
          <td>{client.firstName}</td>
          <td>{client.lastName}</td>
          <td>{client.currency == null ? "" : client.currency.iso}</td>
          <td>
            <button
              type="button"
              className="btn btn-light mr-2"
              onClick={e => delClient(client.id, e)}
            >
              delete
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={e => modClient(client.id, e)}
            >
              Modify
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Query query={getClients}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;

        if (error) return <p>Error</p>;

        return renderTable(data);
      }}
    </Query>
  );
};

export default graphql(deleteClient)(withRouter(ClientList));
