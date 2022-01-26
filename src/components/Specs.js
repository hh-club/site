import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

import hedgehogs from '../images/hedgehogs.gif';

const Specs = () => {
    return (
        <>
            <HR />
            <Container id="Specs" className="section-container">
                <Row style={{ height: "40vh" }}>
                    <Col xs={12} md={8}>
                        <Header heading="The Details"
                            content={["Each Hungover Hedgehog is completely unique and programmatically generated from over 150 possible attributes, including clothing, headwear and more. All Hedgehogs are cool, but some are rarer than others.",
                                "The hedgehogs are stored as tokens on the Ethereum blockchain and are hosted on IPFS. Purchasing a Hedgehog in the pre-sale costs 0.05 Ξ and 0.07 Ξ in the public sale."]}
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={{ minHeight: "100%", maxWidth: "100%", borderRadius: "3%" }} src={hedgehogs} />
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Specs;