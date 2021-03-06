import React from "react";
import AppMenu from "./app-menu";
import { Route, Router } from "react-router-dom";
import history from "../../history";
import AppInfo from "./app-info";
import Currency from "../currency/currency";
import Client from "../client/client";
import ClientNew from "../client/client-new";
import ClientModify from "../client/client-modify";

const App = () => (
  <Router history={history}>
    <div>
      <AppMenu />
      <div className="mt-2">
        <Route path="/" exact component={AppInfo} />
        <Route path="/currency" exact component={Currency} />
        <Route path="/client" exact component={Client} />
        <Route path="/client/new" exact component={ClientNew} />
        <Route path="/client/modify/:id" exact component={ClientModify} />
      </div>
    </div>
  </Router>
);

export default App;
