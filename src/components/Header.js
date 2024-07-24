import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar sticky='top' collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            height="22"
                            width="100"
                            className="d-inline-block align-center"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                            <Nav.Link as={Link} to="/Contacts">Contacts</Nav.Link>
                            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
