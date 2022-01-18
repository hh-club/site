import React from 'react';
import { Container, Row, Col, Alert, Image } from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container id="About" style={{ paddingTop: "12vh" }}>
            <Row>
                <Col xs={12} md={8}>
                    <Container variant="dark" style={{ minHeight: "60%", color: "white", padding: 0 }}>
                        <Alert.Heading className="heading">Welcome to the Hungover Hedgehogs Club</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content. Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
                        </p>
                    </Container>
                </Col>
                <Col xs={6} md={4}>
                    <Row>
                        <Col><Image style={{ paddingBottom: '12px' }} variant="top" src="holder.js/100px180" /></Col>
                        <Col><Image style={{ paddingBottom: '12px' }} variant="top" src="holder.js/100px180" /></Col>
                    </Row>
                    <Row>
                        <Col><Image style={{ paddingTop: '12px' }} variant="top" src="holder.js/100px180" /></Col>
                        <Col><Image style={{ paddingTop: '12px' }} variant="top" src="holder.js/100px180" /></Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}

export default Welcome;