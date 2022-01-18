import React from 'react';
import { Container, Card, Row, Col, Alert } from 'react-bootstrap';

const Team = () => {
    return (
        <Container id="Team" style={{ paddingTop: "12vh", paddingBottom: "12vh" }}>
            <Row>
                <Col>
                    <Container variant="dark" style={{ color: "white", padding: 0 }}>
                        <Alert.Heading className="heading">The Team</Alert.Heading>
                        <p>
                            HHC was created by four friends who set out to make some cool hedgehogs, see what we could do and try to make something fun.
                        </p>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card border="primary" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title>Haze</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Marketing Genius and Project Lead</Card.Subtitle>
                            <Card.Text>
                                Bossing me around and some other stuff I hope
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="danger" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title>Sleek Duck</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">The Picasso of Vector Art</Card.Subtitle>
                            <Card.Text>
                                Create NFT Layers, Graphics for Websites and Socials and Logo's
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="warning" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title>Bebz</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Social Media Manager Extraordinaire</Card.Subtitle>
                            <Card.Text>
                                Social media accounts and discord server management
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="success" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title>$</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Keyboard Presser</Card.Subtitle>
                            <Card.Text>
                                Website, Minting DAPP, Smart Contract and NFT Generation
                            </Card.Text>
                            <Card.Img variant="bottom" src="holder.js/100px180" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Team;