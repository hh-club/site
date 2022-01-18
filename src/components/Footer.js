import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Alert, Image, ListGroup, Badge } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar fixed="bottom" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer;