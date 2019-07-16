import "semantic-ui-css/semantic.min.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI
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
