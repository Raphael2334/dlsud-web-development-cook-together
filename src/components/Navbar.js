import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/landing">Cook Together</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navbar;