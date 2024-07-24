import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = '7263430812:AAGLQnh1zGFJ52-ZBvFJQww0aloiMYehpbo';
    const chatId = '1203330385';
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setFormStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          setFormStatus('Failed to send message.');
        }
      })
      .catch((error) => {
        setFormStatus('Error sending message.');
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>Send Your message</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {formStatus && <p className="mt-3">{formStatus}</p>}
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
