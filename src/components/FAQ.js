import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Header from './Header';
import './FAQ.css';

const FAQItem = (props) => {
    return (
        <Accordion.Item className="faq-q" eventKey={props.n}>
            <Accordion.Header className="faq-heading"><strong>{props.question}</strong></Accordion.Header>
            <Accordion.Body className="faq-body">
                {props.answer}
            </Accordion.Body>
        </Accordion.Item>
    )
}

const FAQ = () => {
    return (
        <>
            <hr style={{
                color: '#7eed34',
                backgroundColor: '#7eed34',
                height: 1,
                borderColor: '#7eed34'
            }} />
            <Container id="FAQ" className="section-container">
                <Header heading="Frequently Asked Questions" />
                <div style={{ borderColor: "#7eed34", borderStyle: "solid", borderWidth: "1px", borderRadius: "5px", padding: "10px" }}>
                    <Accordion className="faq-questions">
                        <FAQItem
                            n="0"
                            question="What is the Hungover Hedgehogs Club?"
                            answer="The Hungover Hedgehogs Club is a collection of 5,555 unique vector art 
                    Hedgehogs who are constantly getting pissed together on the Ethereum Blockchain. 
                    Owning a Hungover Hedgehog is your ticket into the our club, 
                    giving you access to many holder utilities and benefits. "
                        />
                        <FAQItem
                            n="1"
                            question="Pre-Sale Mint Cost?"
                            answer="0.05 Ξ"
                        />
                        <FAQItem
                            n="2"
                            question="Public Mint Cost?"
                            answer="0.07 Ξ"
                        />
                        <FAQItem
                            n="3"
                            question="Mint Date"
                            answer="PRE-SALE MINT: TBD
                    PUBLIC MINT: TBD"
                        />
                        <FAQItem
                            n="4"
                            question="How many can we mint per wallet?"
                            answer="Pre-Sale: 3 Max per wallet
                    Public: 8 Max per wallet"
                        />
                        <FAQItem
                            n="5"
                            question="Is there a cap on the Pre-Sale Mint?"
                            answer="Yes, out of our supply of 5,555 Hungover Hedgehogs we are allowing 1,555 for Pre-Sale"
                        />
                        <FAQItem
                            n="6"
                            question="How many whitelist spots are there?"
                            answer="There will be a total of 755 Whitelist spots available to our community, check whitelist-info to find out how to get Whitelisted."
                        />
                    </Accordion>
                </div>
            </Container>
        </>
    )

}

export default FAQ;