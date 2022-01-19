import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Header from './Header';

const TeamMember = (props) => {
    return (
        <Col>
            <Card border={props.border} bg="dark" text="white" style={{ height: "100%" }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.role}</Card.Subtitle>
                    <Card.Img variant="bottom" src={props.src} />
                </Card.Body>
            </Card>
        </Col>
    )
}

const Team = () => {
    return (
        <>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor: '#000000'
            }} />
            <Container id="Team" className="section-container">
                <Header
                    heading="The Team"
                    content="HHC was created by five friends who set out to make some cool hedgehogs, see what we could do and try to make something fun."
                />
                <Row>
                    <TeamMember
                        border="warning"
                        name="Haze"
                        role="Marketing Genius and Project Lead"
                        src="holder.js/100px180?theme=industrial"
                        description="Bossing me around and some other stuff I hope"
                    />
                    <TeamMember
                        border="danger"
                        name="Saucey"
                        role="The Picasso of Vector Art"
                        src="holder.js/100px180?theme=industrial"
                        description="Create NFT Layers, Graphics for Websites and Socials and Logo's"
                    />
                    <TeamMember
                        border="info"
                        name="Chips"
                        role="Social Media Manager Extraordinaire"
                        src="holder.js/100px180?theme=industrial"
                        description="Manages Twitter, Instagram and Discord"
                    />
                </Row>
                <br />
                <Row>
                    <TeamMember
                        border="primary"
                        name="Zio"
                        role="Discord manager and moderator"
                        src="holder.js/100px180?theme=industrial"
                        description="Community manager and original discord moderator"
                    />
                    <TeamMember
                        border="success"
                        name="Leaf"
                        role="Keyboard Presser"
                        src="holder.js/100px180?theme=industrial"
                        description="Website, Minting DAPP, Smart Contract and NFT Generation"
                    />
                    <TeamMember
                        border="light"
                        name="Thena"
                        role="Moral Support for Leaf"
                        src="holder.js/100px180?theme=industrial"
                        description="Cat"
                    />
                </Row>
            </Container>
        </>
    )
}

export default Team;