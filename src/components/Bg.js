import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Bg = () => {
    return (
        <>
            <Container>
                <Image variant="top" style={{ minHeight: '90vh', marginBottom: "12vh" }} src="holder.js/100px180?theme=industrial" />
            </Container>
        </>
    )
}

export default Bg;