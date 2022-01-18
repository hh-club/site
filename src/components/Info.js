import React from 'react';
import { Container, Card, Row, Col, Alert, Image, ListGroup, Badge } from 'react-bootstrap';

const Info = () => {
    return (
        <Container id="Info" style={{ paddingTop: "12vh" }}>
            <Container variant="dark" style={{ minHeight: "60%", color: "white", padding: 0 }}>
                <Alert.Heading className="heading">Club Info</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content. Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content.
                </p>
            </Container>
            <Row>
                <Col align="center">
                    <Card border="warning" bg="dark" text="white">
                        <Card.Body>
                            <Card.Text>
                                5,555 unique Hungover Hedgehog Club tokens
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card border="danger" bg="dark" text="white">
                        <Card.Body>
                            <Card.Text>
                                Launching with both a pre-sale and public sale
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card border="info" bg="dark" text="white">
                        <Card.Body>
                            <Card.Text>
                                Ownership given to the consumer over their NFT
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card border="primary" bg="dark" text="white">
                        <Card.Body>
                            <Card.Text>
                                Some quick example text. Some quick example text
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card border="success" bg="dark" text="white">
                        <Card.Body>
                            <Card.Text>
                                Some quick example text. Some quick example text
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default Info;