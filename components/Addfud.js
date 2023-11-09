import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form ,Col,Row,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Add() {
   const [formData, setFormData] = useState({

    Fooditem: '',
    rate: '',

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
      const response = await fetch('/add', {
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
            <h2 className='head1'>Add-fud</h2>

            <Form onSubmit={handleSubmit}>
            <label>Fud name:</label>
            <input
        type="text"
        name="Fooditem"
        className='form-control'
 
        onChange={handleChange}
      />
     <br></br><label>rate:</label>
      <input
        type="text"
        name="rate"
        className='form-control'
        onChange={handleChange}
      /><br></br>
    
              <Button className='bot1' variant="danger"  type="submit">
                Add
              </Button><Link to="/Admin"> <button class="Btn">

<div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

<div class="text">Admindash</div>
</button>
</Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
 
    </div>
  );
}

export default Add;
