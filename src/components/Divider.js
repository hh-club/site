import React from 'react';
import { Container } from 'react-bootstrap';

const HR = () => {
    return (
        <Container>
            <hr style={{
                color: 'var(--accent)',
                backgroundColor: 'var(--accent)',
                height: 3,
                borderColor: 'var(--accent)',
                margin: 0,
                opacity: "0.75"
            }} />
        </Container>
    )
}

export default HR;