import React from 'react';
import './Welcome.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Header from './Header';
import HR from './Divider';

const Welcome = () => {
    return (
        <>
            <HR />
            <Container id="About" className="section-container">
                <Row>
                    <Col xs={12} md={8}>
                        <Header heading="Welcome to the Hungover Hedgehogs Club"
                            content={['5555 Hedgehogs have been forced to migrate down into an elusive underground society, where they spend most of their days partying away in a withered and scrappy nightclub. Never sober, and always doing something stupid, all Hungover Hedgehogs are unique and better not pick a fight with them or you might find yourself with a thorn in your back. ']}
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Row>
                            <Col><Image className="top-row-img" src="holder.js/100px180?theme=industrial" /></Col>
                            <Col><Image className="top-row-img" src="holder.js/100px180?theme=industrial" /></Col>
                        </Row>
                        <Row>
                            <Col><Image className="bottom-row-img" src="holder.js/100px180?theme=industrial" /></Col>
                            <Col><Image className="bottom-row-img" src="holder.js/100px180?theme=industrial" /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Welcome;