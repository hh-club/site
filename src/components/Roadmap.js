import React from 'react';
import { Container, Row, Col, Alert, Image, ListGroup, Badge } from 'react-bootstrap';

const Roadmap = () => {
    return (
        <Container id="Roadmap" style={{ paddingTop: "12vh" }}>
            <Row>
                <Container variant="dark" style={{ color: "white" }}>
                    <Alert.Heading className="heading">The Roadmap</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                </Container>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    <ListGroup>
                        <ListGroup.Item variant="primary"><Badge bg="secondary">01</Badge>{' '}Cras justo odio</ListGroup.Item>
                        <ListGroup.Item variant="primary"><Badge bg="secondary">02</Badge>{' '}Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item variant="primary"><Badge bg="secondary">03</Badge>{' '}Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item variant="primary"><Badge bg="secondary">04</Badge>{' '}Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item variant="dark"><Badge bg="secondary">05</Badge>{' '}Cras justo odio</ListGroup.Item>
                        <ListGroup.Item variant="dark"><Badge bg="secondary">06</Badge>{' '}Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item variant="dark"><Badge bg="secondary">07</Badge>{' '}Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item variant="dark"><Badge bg="secondary">08</Badge>{' '}Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item variant="dark"><Badge bg="secondary">09</Badge>{' '}Cras justo odio</ListGroup.Item>
                        <ListGroup.Item variant="dark"><Badge bg="secondary">10</Badge>{' '}Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item variant="dark"><Badge bg="secondary">11</Badge>{' '}Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item variant="dark"><Badge bg="secondary">12</Badge>{' '}Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={6} md={4}>
                    <Image variant="bottom" style={{ minHeight: "100%" }} src="holder.js/100px180" />
                </Col>
            </Row >
        </Container >
    )
}

export default Roadmap;