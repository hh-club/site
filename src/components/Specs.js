import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Header from './Header';

const Specs = () => {
    return (
        <>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor: '#000000'
            }} />
            <Container id="Specs" className="section-container">
                <Row style={{ height: "40vh" }}>
                    <Col xs={12} md={8}>
                        <Header heading="The Specs"
                            content="
                        Each Hungover Hedgehog is completely unique and programmatically generated from over
                        200 possible attributes, including clothing, headwear and more. All Hedgehogs are
                        cool, but some are rarer than others.
            
                        The hedgehogs are stored as tokens on the Ethereum blockchain and are hosted on IPFS.
                        Purchasing a Hedgehog in the pre-sale costs 0.06 ETH and 0.08 ETH in the public sale.
                        "
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={{ minHeight: "100%" }} src="holder.js/100px180?theme=industrial" />
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Specs;