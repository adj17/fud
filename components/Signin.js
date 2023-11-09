import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Signin() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUserType] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/slogin', {
        email,
        password,
        usertype,
      });

      const { token,user  } = response.data;

      if (token) {
        // Store the token and user details in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        if (usertype === 'admin') {
          history('/Admin', { state: { id: email, usertype } });
        } else if (usertype === 'user') {
          history('/UserPage', { state: { id: email, usertype } });
        } else {
          alert('Invalid usertype');
        }
      } else {
        alert('Authentication failed');
      }
    } catch (error) {
      alert('Error occurred while logging in.');
      console.error(error);
    }
  }

  return (
    <div className="reg">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="registration-box">
              <h2 className="head1">Sign-IN</h2>

              <form onSubmit={submit}>
                <input
                  className="form-control"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  autoComplete="on"
                />
                <br />
                <input
                  className="form-control"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <br />
                <div>
                  <label className="head1">User Type:</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="admin"
                    name="userType"
                    value="admin"
                    checked={usertype === 'admin'}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label className="head1" htmlFor="admin">
                    Admin
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="user"
                    name="userType"
                    value="user"
                    checked={usertype === 'user'}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label className="head1" htmlFor="user">
                    User
                  </label>
                </div>

                <Button className="bot1" variant="danger" type="submit">
                  Login
                </Button>
                <br />
                <br />
                <h4 className="head1">If you haven't registered</h4>
                <Link to="/Register">
                  <Button className="bot1" variant="danger" type="submit">
                    Register Now
                  </Button>
                </Link>
        
              </form>    <br></br>    <Link to="/"><button class="buttonhome">
    Home
</button></Link> 
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signin;
