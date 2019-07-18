import React from 'react';
import AppMenu from "./app-menu";
import {Route, Router} from "react-router-dom";
import history from "../../history";
import AppInfo from "./app-info";
import Currency from "../currency/currency";
import Client from "../client/client";
import ClientAdd from "../client/client-add";

function App() {
    return (
        <Router history={history}>
            <div>
                <AppMenu/>
                <div className="ui container" style={{marginTop: "80px"}}>
                    <Route path="/" exact component={AppInfo}/>
                    <Route path="/currency" exact component={Currency}/>
                    <Route path="/client" exact component={Client}/>
                    <Route path="/client/Add" exact component={ClientAdd}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
