import React from 'react';
import AppMenu from "./app-menu";
import {Route, Router} from "react-router-dom";
import history from "../history";
import Info from "./info";
import Currency from "./currency";

function App() {
    return (
        <Router history={history}>
            <div>
                <AppMenu/>
                <div className="ui container" style={{marginTop: "80px"}}>
                    <Route path="/" exact component={Info}/>
                    <Route path="/currency" exact component={Currency}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
