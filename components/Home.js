import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import { Button ,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Basic() {
  return (
    <><div className='jav'>
          <Navbar className="nav  ">
              <Container className='con'><Image className='img' src="https://play-lh.googleusercontent.com/RWmZ1BTPBJXLYx48SyjLPIpOJg-JlRcnOWgsAxkLAypadk5bEsnoY71TJ3p4orcJzw"></Image> <Nav.Link href="#home"></Nav.Link>
                  <Navbar.Brand href="#home"><h1 className='head1'>Rio-Fud</h1></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Form className="d-flex">
                          <Form.Control
                              type="search"
                              placeholder="Search for your favorite food"
                              className="me-2"
                              aria-label="Search" /><Button className='bot' variant="danger">
<i class="fa-brands fa-searchengin"></i></Button>
                      </Form><Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link>
                      <Nav className="me-2">
                          

                          <Link to="/Register"> <Button className='bot' variant="danger"> Register</Button> </Link><Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link>
                          <Link to="/Signin">  <Button className='bot' variant="danger">Log-in</Button></Link><Nav.Link href="#home"></Nav.Link>
                      </Nav>

                  </Navbar.Collapse>
       
              </Container>
          </Navbar><br></br>

      </div><div className='container'>
      
        <Image className='cardp'
 
         
          src="https://www.cholaindianrestaurant.com.au/wp-content/uploads/2022/09/chola.png"></Image>
    
    </div>
        </>
  );
}

export default Basic;
