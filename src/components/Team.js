import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

import leaf from '../images/team_icons/leaf.png';
import haze from '../images/team_icons/haze.png';
import saucey from '../images/team_icons/saucey.png';
import lynx from '../images/team_icons/lynx.png';
import zio from '../images/team_icons/zio.png';
import thena from '../images/team_icons/thena.png';

const TeamMember = (props) => {
    return (
        <Col>
            <div>
                <Card bg="dark" text="white" style={{ height: "100%" }}>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.role}</Card.Subtitle>
                        <br />
                        <Card.Img style={{ padding: "3px", borderRadius: "100%", borderColor: "var(--accent)", borderStyle: "solid", borderWidth: "2px" }} variant="bottom" src={props.src} />
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

const Team = () => {
    return (
        <>
            <HR />
            <Container id="Team" className="section-container">
                <Header
                    heading="The Team"
                    content={["HHC was created by five friends who set out to make some cool hedgehogs, see what we could do and try to make something fun."]}
                />
                <Row>
                    <TeamMember
                        border="warning"
                        name="Haze"
                        role="Marketing Genius and Project Lead"
                        src={haze}
                        description="Bossing me around and some other stuff I hope"
                    />
                    <TeamMember
                        border="danger"
                        name="Saucey"
                        role="The Picasso of Vector Art"
                        src={saucey}
                        description="Create NFT Layers, Graphics for Websites and Socials and Logo's"
                    />
                    <TeamMember
                        border="info"
                        name="Lynx"
                        role="Social Media Manager Extraordinaire"
                        src={lynx}
                        description="Manages Twitter, Instagram and Discord"
                    />
                </Row>
                <br />
                <Row>
                    <TeamMember
                        border="primary"
                        name="Zio"
                        role="Discord manager and moderator"
                        src={zio}
                        description="Community manager and original discord moderator"
                    />
                    <TeamMember
                        border="success"
                        name="Leaf"
                        role="Programmer and Keyboard Presser"
                        src={leaf}
                        description="Website, Minting DAPP, Smart Contract and NFT Generation"
                    />
                    <TeamMember
                        border="light"
                        name="Thena"
                        role="Moral Support for Leaf"
                        src={thena}
                        description="Cat"
                    />
                </Row>
            </Container>
        </>
    )
}

export default Team;