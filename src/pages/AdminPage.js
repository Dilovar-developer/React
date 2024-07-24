import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AdminPage = ({ updateContent }) => {
  const [formData, setFormData] = useState({
    header: 'Welcome to Our Website!',
    text: 'We are glad to have you here. Feel free to explore our content.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContent(formData);
    alert('Content updated successfully!');
  };

  return (
    <Container className="mt-5">
      <h2>Admin Panel</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formHeader">
          <Form.Label>Header</Form.Label>
          <Form.Control
            type="text"
            name="header"
            value={formData.header}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default AdminPage;
