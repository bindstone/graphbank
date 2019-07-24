import React from "react";

const AppMenu = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/currency">Currency</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/client">Client</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default AppMenu;
