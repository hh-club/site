import React from 'react';
import { Image, Container } from 'react-bootstrap';
import bg_1 from '../images/sewer_concept.png';

const Bg = () => {
    return (
        <>
            <Container>
                <Image variant="top" style={{ maxWidth: "100%", marginBottom: "12vh" }} src={bg_1} />
            </Container>
        </>
    )
}

export default Bg;