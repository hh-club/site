import React from 'react';
import './NavBar.css'
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import hhc_logo_1 from '../images/hhctest.png';
// import hhc_logo_2 from '../images/hhctest2.png';

const NavBar = () => {
    return (

        <Navbar sticky="top" className="nav-main" expand="lg" bg="dark" variant="dark" >

            <Container>
                <Image className="nav-logo" variant="top" src={hhc_logo_1} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link style={{ paddingRight: "1.5vw" }} href="#About">about</Nav.Link>
                        <Nav.Link style={{ paddingRight: "1.5vw" }} href="#Roadmap">roadmap</Nav.Link>
                        <Nav.Link style={{ paddingRight: "1.5vw" }} href="#Team">team</Nav.Link>
                        <Nav.Link style={{ paddingRight: "1.5vw" }} href="#">mint</Nav.Link>
                        <strong><Nav.Link href="#">discord</Nav.Link></strong>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >

    )
}

export default NavBar;