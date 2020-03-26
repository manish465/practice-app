import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styled = styled.div`
    .navbar {
        background-color: #555;
    }

    .navbar-brand,
    .navbar-nav,
    .nav-link {
        color: #bbb;
        &:hover {
            color: white;
        }
    }
`;

const NavBar = () => (
    <Styled>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styled>
);

export default NavBar;
