import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contacts = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p>If you have any questions or need further information, feel free to contact us through the details provided below:</p>
        </Col>

        <Col md={6}>
          <h2>Our Contact Information</h2>
          <p><strong>Address:</strong> 123 Real Estate St, City, Country</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> info@realestateagency.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
