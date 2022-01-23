import React from 'react';
import './Roadmap.css'
import { Container, Row, Col, Alert, ListGroup, Badge } from 'react-bootstrap';
import Header from './Header';

const RoadmapItem = (props) => {
    return (
        <>
            <div style={{ borderColor: "#7eed34", borderStyle: "solid", borderWidth: "1px", borderRadius: "5px" }}>
                <Alert variant="none" style={{ marginBottom: 0 }} text="white">
                    <Row>
                        <Col md={2} lg={2} className="my-auto percent-box">
                            <h1 className="percent heading">
                                {props.n}
                            </h1>
                        </Col>
                        <Col>
                            <ListGroup>
                                {props.item_1 && <ListGroup.Item variant="dark"><Badge bg="secondary">1</Badge>{' '}{props.item_1}</ListGroup.Item>}
                                {props.item_2 && <ListGroup.Item variant="dark"><Badge bg="secondary">2</Badge>{' '}{props.item_2}</ListGroup.Item>}
                                {props.item_3 && <ListGroup.Item variant="dark"><Badge bg="secondary">3</Badge>{' '}{props.item_3}</ListGroup.Item>}
                                {props.item_4 && <ListGroup.Item variant="dark"><Badge bg="secondary">4</Badge>{' '}{props.item_4}</ListGroup.Item>}
                                {props.item_5 && <ListGroup.Item variant="dark"><Badge bg="secondary">5</Badge>{' '}{props.item_5}</ListGroup.Item>}
                                {props.item_6 && <ListGroup.Item variant="dark"><Badge bg="secondary">6</Badge>{' '}{props.item_6}</ListGroup.Item>}
                            </ListGroup>
                        </Col>
                    </Row>
                </Alert>
            </div>
            <br />
        </>
    )
}

const Roadmap = () => {
    return (
        <>
            <hr style={{
                color: '#7eed34',
                backgroundColor: '#7eed34',
                height: 1,
                borderColor: '#7eed34'
            }} />
            <Container id="Roadmap" className="section-container">
                <Header
                    heading="The Roadmap"
                    content=""
                />

                <RoadmapItem
                    n="25%"
                    border="primary"
                    item_1="5,555 Genesis Hedgehogs Launch"
                    item_2="Daily giveaways for our community"
                    item_3="Aggressive advertising campaign, giving away whitelist spots to early supporters"
                    item_4="Sold Out and listing on secondary marketplaces (Opensea)"
                    item_5="Distribute HHC NFTs to the giveaway winners after public sale complete"
                    item_6="Prizes for up to $3000 in ETH for lucky holders who mint 1 of the 10 WANTED hedgehogs"
                />
                <RoadmapItem
                    n="50%"
                    border="warning"
                    item_1="Celebrity and Influencers promotions after sell out"
                    item_2="Crypto whales will be brought in to sweep the floor and raise the value of our hedgehogs"
                    item_3="Announcement of $THORN token in which a large percentage will be reserved for HHC holders. $THORN can be used to purchase upcoming merchandise as well as"
                    item_4="A Defi platform will be created that will work integrated with our token and NFTs"
                    item_5="Listing in exchanges"
                />
                <RoadmapItem
                    n="75%"
                    border="danger"
                    item_1="4,444 Hungover Foxes will be introduced as a second collection to the genesis hedgehogs and HHC holders who own at least 5 hungover hedgehogs will be granted 1 free mint pass with holders of under 5 being granted a free whitelist pass. (Production for this collection has already started)"
                />
                <RoadmapItem
                    n="100%"
                    border="success"
                    item_1="Community wallet / Liquidity pool / Metaverse land"
                    item_2="Over 50 ETH will be added to the community wallet, and the liquidity pool will be initialized"
                    item_3="Purchase of metaverse land for community where we will begin development of the Hungover Hedgehog Nightclub where holders will be able to meet up and have conversations with one another while completing missions to conquer different territories in the sewers"
                />

            </Container >
        </>
    )
}

export default Roadmap;