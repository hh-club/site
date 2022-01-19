import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Header from './Header';

const InfoItem = (props) => {
    return (
        <Col align="center">
            <Card border={props.border} bg="dark" text="white">
                <Card.Body>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                    <Card.Img variant="bottom" src={props.src} />
                </Card.Body>
            </Card>
        </Col>
    )
}

const Info = () => {
    return (
        <>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor: '#000000'
            }} />
            <Container id="Info" className="section-container">
                <Header
                    heading="Club Info"
                    content="Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content. Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content."
                />
                <Row>
                    <InfoItem border="warning" src="holder.js/100px180?theme=industrial"
                        content="5,555 unique Hungover Hedgehog Club tokens"
                    />
                    <InfoItem border="danger" src="holder.js/100px180?theme=industrial"
                        content="Launching with both a pre-sale and public sale"
                    />
                    <InfoItem border="info" src="holder.js/100px180?theme=industrial"
                        content="Ownership given to the consumer over their NFT"
                    />
                </Row>
                <br />
                <Row>
                    <InfoItem border="primary" src="holder.js/100px180?theme=industrial"
                        content="Some quick example text. Some quick example text"
                    />
                    <InfoItem border="success" src="holder.js/100px180?theme=industrial"
                        content="Some quick example text. Some quick example text"
                    />
                    <InfoItem border="light" src="holder.js/100px180?theme=industrial"
                        content="Some quick example text. Some quick example text"
                    />
                </Row>
            </Container >
        </>
    )
}

export default Info;