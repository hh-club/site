import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Container variant="dark" className="header-container">
            <Alert.Heading className="heading">{props.heading}</Alert.Heading>
            <p className="header-content">
                {props.content}
            </p>
        </Container>
    )
}

export default Header;