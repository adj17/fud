import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Orderplace() {



  const [formData, setFormData] = useState({

    username: '',
    email: '',
    Fooditem:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch('/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Handle the response as needed (e.g., show a success message).
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='reg'>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="registration-box">
              <h2 className='head1'>Application-Form</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>username</Form.Label>
                  <Form.Control type="text" name="username"placeholder="username" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email"placeholder="email"onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="position">
                  <Form.Label>Ordered item</Form.Label>
                  <Form.Control type="text" placeholder="confirm your item"  name="Fooditem"onChange={handleChange}/>
                </Form.Group>
              
                <Button className='bot1' variant="danger" type="submit">
                  Order
                </Button><br></br><br></br>
                <Link to="/Usersearch"><Button className='bot' variant="danger"> Search Fuds</Button></Link>
              </Form>
             
            
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Orderplace;
