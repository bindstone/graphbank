import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    dataIdFromObject: o => o.id
});

const Main = () => (
    <div className="ui container">
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </div>
);

ReactDOM.render(<Main/>, document.getElementById("root"));
registerServiceWorker();
