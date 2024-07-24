import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2 ">
                            <Nav.Item>
                                <Nav.Link eventKey="first">First</Nav.Link>
                                <Nav.Link  eventKey="second">Second</Nav.Link>
                                <Nav.Link  eventKey="third">Third</Nav.Link>
                                <Nav.Link  eventKey="fourth">Fourth</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3 ">
                            <Tab.Pane eventKey="first">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfpdtzBxIoo_ACzBg0H7DTBDSFEH_uxR3AQ&s" alt="first" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKUZO9pbdBasvDiAOGdajHLQDgRulIo77Sw&s" alt="second" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-0aA4Sl3zTSlmPYGNowHkgbmeemYA3pPLPQ&s" alt="third" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKUZO9pbdBasvDiAOGdajHLQDgRulIo77Sw&s" alt="fourth" />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default About;
