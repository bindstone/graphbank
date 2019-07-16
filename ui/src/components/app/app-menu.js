import React from "react";
import {Container, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

const AppMenu = () => (
    <div>
        <Menu fixed="top" inverted>
            <Container>

                <Menu.Item as={Link} to="/">
                    Home
                </Menu.Item>

                <Menu.Item as={Link} to="/currency">
                    Currency
                </Menu.Item>

                <Menu.Item as={Link} to="/client">
                    Client
                </Menu.Item>

            </Container>
        </Menu>
    </div>
);

export default AppMenu;
