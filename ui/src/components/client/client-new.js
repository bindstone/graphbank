import React, { useState } from "react";
import { addClientCurrency, getClients } from "../../queries/client-query";
import { graphql } from "react-apollo";
import CurrencyCombobox from "../currency/currency-combobox";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ClientNew = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currencyId, setCurrencyId] = useState("");

  const save = e => {
    e.preventDefault();

    props
      .mutate({
        variables: {
          firstName,
          lastName,
          currencyId
        },
        refetchQueries: [{ query: getClients }]
      })
      .then(e => {
        props.history.push("/client");
      })
      .catch(e => console.log(e));
  };

  return (
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
};

export default graphql(addClientCurrency)(withRouter(ClientNew));
