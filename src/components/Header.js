import React from 'react';
import { Container, Alert } from 'react-bootstrap';



const Header = (props) => {
    return (
        <Container variant="dark" className="header-container">
            <Alert.Heading className="heading">{props.heading}</Alert.Heading>
            <div>{
                props.content.map(line => (<p>{line}</p>))
            }</div>
        </Container>
    )
}

export default Header;