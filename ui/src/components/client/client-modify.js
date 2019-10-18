import React, { useState } from "react";
import { withRouter } from "react-router";
import { graphql, Query } from "react-apollo";
import { getClient, updateUserWithCurrency } from "../../queries/client-query";
import Form from "react-bootstrap/Form";
import CurrencyCombobox from "../currency/currency-combobox";
import { Button } from "react-bootstrap";

const ClientModify = props => {
  const [id] = useState(props.match.params.id);
  const [clientId, setClientId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currencyId, setCurrencyId] = useState("");

  const save = e => {
    e.preventDefault();
    console.log("ssss");

    props
      .mutate({
        variables: {
          clientId,
          firstName,
          lastName,
          currencyId
        },
        refetchQueries: [{ query: getClient }]
      })
      .then(e => {
        props.history.push("/client");
      })
      .catch(e => console.log(e));
  };

  const updateStates = data => {
    const client = data.Client[0];
    console.log(client);
    if (client != null) {
      setClientId(client.id);
      setFirstName(client.firstName);
      setLastName(client.lastName);
      setCurrencyId(client.currency.id);
    }
  };

  const renderForm = () => (
    <Form onSubmit={e => save(e)}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          placeholder="First Name"
          type="text"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          placeholder="Last Name"
          type="text"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Currency</Form.Label>
        <CurrencyCombobox
          className="form-control"
          onChange={e => setCurrencyId(e.target.value)}
          value={currencyId}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );

  return (
    <Query query={getClient} variables={{ id }} onCompleted={updateStates}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;

        if (error) return <p>Error</p>;

        return renderForm(data);
      }}
    </Query>
  );
};

export default graphql(updateUserWithCurrency)(withRouter(ClientModify));
