import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
    const auth = useSelector(state => state.auth); //similar to map state to props

    const renderUserName = () => {
        if (!auth) {
            return (
                <a href="/auth/google">
                    <Button variant="danger" className="ml-3">
                        Log in with Google
                    </Button>
                </a>
            );
        } else {
            return (
                <Nav>
                    <Navbar.Text className="mx-2">
                        <Link>
                            <i class="fas fa-comments"></i>
                        </Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link className="mx-2">
                            <i class="fas fa-bell"></i>
                        </Link>
                    </Navbar.Text>

                    <Navbar.Text className="ml-3">
                        <Link to="/user">{auth.name}</Link>
                    </Navbar.Text>
                    <Navbar.Text className="ml-3">
                        <a href="/auth/logout">logout</a>
                    </Navbar.Text>
                </Nav>
            );
        }
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Social Network</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            {renderUserName()}>
        </Navbar>
    );
};

export default Header;
