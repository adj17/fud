import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link,useNavigate } from 'react-router-dom';
import { Button ,Image} from 'react-bootstrap';
function Admin() {
  const history = useNavigate();
  function handleLogout() {

    localStorage.removeItem('token');
 
    history('/Signin');
  }
  return (<><><div className='dash'>
    <Navbar expand="lg" className="bg-body-tertiary">

      <Container className='con'><Image className='img' src="https://play-lh.googleusercontent.com/RWmZ1BTPBJXLYx48SyjLPIpOJg-JlRcnOWgsAxkLAypadk5bEsnoY71TJ3p4orcJzw"></Image>
        <Navbar.Brand href="#home"><h1 className='head1'>Admin-Dash</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home"></Nav.Link>
            <Link to="/Adminview"> <Button className='bot' variant="danger"> View Fud</Button></Link>
            <Nav.Link href="#link"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <Link to="/Viewu"><Button className='bot' variant="danger"> View users</Button></Link>
            <Nav.Link href="#link"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>

            <Link to="/Addfud"><Button className='bot' variant="danger"> Add Fud</Button></Link>
            <Nav.Link href="#link"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <Link to="/Order"><Button className='bot' variant="danger"> Orders</Button></Link>
            <Nav.Link href="#link"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <Link to="/Adminprofile"><Button className='bot' variant="danger"> Profile</Button></Link>    <Nav.Link href="#link"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <Link to="/Signin"> <button class="Btn"onClick={handleLogout}>

              <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

              <div class="text">Logout</div>
            </button>
            </Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div><Image className='hop' src="https://i.pinimg.com/736x/fa/fd/f6/fafdf634be99182031a4b0a99fc0ef8a.jpg"></Image></></>





  );
}

export default Admin;