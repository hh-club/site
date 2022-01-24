import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

const InfoItem = (props) => {
    return (
        <Col>
            <div style={{ borderColor: "var(--accent)", borderStyle: "solid", borderWidth: "1px", borderRadius: "5px", minHeight: '100%' }}>
                <Card bg="dark" style={{ minHeight: '100%' }} text="white">
                    <Card.Body>
                        <Card.Img style={{ marginBottom: "1vh" }} variant="bottom" src={props.src} />
                        <Card.Text align="center">
                            {props.content}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

const Info = () => {
    return (
        <>
            <HR />
            <Container id="Info" className="section-container">
                <Header
                    heading="Club Info"
                    content={["By holding a Hungover Hedgehog, you’re not just buying an insanely awesome PFP to flex to your friends. No, with your Hedgehog you gain access to an exclusive club which provides TONS of benefits and utilities. Your Hungover Hedgehog can act as your digital identity, and open countless opportunities. Here's some of our crazy utilities that you will receive just by holding a Hungover Hedgehog:"]}
                />
                <Row>
                    <InfoItem border="warning" src="holder.js/100px180?theme=industrial"
                        content="Over $40,000 in prizes for WANTED Hedgehogs"
                    />
                    <InfoItem border="danger" src="holder.js/100px180?theme=industrial"
                        content="$THORN utility token"
                    />
                    <InfoItem border="info" src="holder.js/100px180?theme=industrial"
                        content="Free HHC Merchandise"
                    />
                </Row>
                <br />
                <Row>
                    <InfoItem border="primary" src="holder.js/100px180?theme=industrial"
                        content="Exclusive Mint Access to future Hungover Projects"
                    />
                    <InfoItem border="success" src="holder.js/100px180?theme=industrial"
                        content="Holder only invites to Luxury Bars & Events across the world"
                    />
                    <InfoItem border="light" src="holder.js/100px180?theme=industrial"
                        content="Access to Metaverse HHC Land & Future Games"
                    />
                </Row>
            </Container >
        </>
    )
}

export default Info;