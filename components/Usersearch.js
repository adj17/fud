import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button ,Form,Image,Card,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Usersearch() 
{const [fud, setFuds] = useState([]); 
    const [searchInput, setSearchInput] = useState('');
    const [filteredfuds, setFilteredfuds] = useState([]);
    useEffect(() => { 
      // Fetch data from the server 
      const fetchData = async () => { 
        try { 
          const response = await fetch('/fud'); // Assuming you have a route to get all users 
          const data = await response.json(); 
          setFuds(data); 
        } catch (error) { 
          console.error('Error fetching data:', error); 
        } 
      }; 
   
      fetchData(); 
    }, []); 
    useEffect(() => {
        const filteredData = fud.filter((fud) =>
          fud.Fooditem.toLowerCase().includes(searchInput.toLowerCase()) ||
          fud.rate.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredfuds(filteredData);
      }, [searchInput, fud]);
  return (
  
  <><div className='dash'>
          <Navbar expand="lg" className="bg-body-tertiary">

              <Container className='con'><Image className='img' src="https://play-lh.googleusercontent.com/RWmZ1BTPBJXLYx48SyjLPIpOJg-JlRcnOWgsAxkLAypadk5bEsnoY71TJ3p4orcJzw"></Image>
                  <Navbar.Brand href="#home"><h1 className='head1'>User-search</h1></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto ">
                      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search for your favorite food"
          className="me-2"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className='bot' variant="primary">
          <i className="fa-brands fa-searchengin"></i>
        </Button>
      </Form> <Nav.Link href="#link"></Nav.Link>
                          <Nav.Link href="#link"></Nav.Link>
                          <Nav className="me-2">
                      <Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link></Nav>
                          <Nav.Link href="#link"></Nav.Link>
                          <Nav.Link href="#link"></Nav.Link>
                          <Link to="/Userpage" >       <button class="Btn">

                              <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                              <div class="text">Userdash</div>
                          </button></Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>

      </div>
      <div className='joj'>
  <div>
    <h2 className='head2'>Fud Available</h2>
    <div className="fud-container">
      {filteredfuds.map((fud) => (
        <div className="fud-card" key={fud._id}>
          <Card>
            <Card.Body>
              <Card.Title>{fud.Fooditem}</Card.Title>
              <Card.Text>
                <strong>Role: {fud.rate}</strong>
              </Card.Text>
              <Link to="/Orderplace">
                <Button className='bot' variant="danger">Order now</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  </div>
</div>

      
      
      
      
      
      
      
      
      
      
      <div className='container'></div><div>
              <h1 className='head3'>Today's special</h1><div className='card1'>
                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_3zC9nBSqom_na7tzoXRotK9OzdtyCh1BcDcU_5jlADpsGSJ9s3Ife694Gn6hOi3RnA&usqp=CAU" />
                      <Card.Body>
                          <Card.Title>Paris love bite </Card.Title>
                          <Card.Text>
                             
                          

                          </Card.Text>
                          <Link to="/Orderplace"> <Button className='bot' variant="danger"> Order now</Button></Link>
                      </Card.Body>
                  </Card>


                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200" />
                      <Card.Body>
                          <Card.Title>Pink cake  </Card.Title>
                          <Card.Text>
                     

                          </Card.Text>
                          <Link to="/Orderplace"> <Button className='bot' variant="danger"> Order now</Button></Link>
                      </Card.Body>
                  </Card>




                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://i.pinimg.com/originals/ac/6b/fd/ac6bfd9ed461fab5aad246a4e4d46cd8.png" />
                      <Card.Body>
                          <Card.Title> Hot & crispy lunch  </Card.Title>
                          <Card.Text>
                             

                          </Card.Text>
                          <Link to="/Orderplace"> <Button className='bot' variant="danger"> Order now</Button></Link>
                      </Card.Body>
                  </Card>




                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFJX3orhUX0bvpadwwTsbnJ3_WWAuhTsFsg&usqp=CAU" />
                      <Card.Body>
                          <Card.Title>Smoothy</Card.Title>
                          <Card.Text>
                 

                          </Card.Text>
                          <Link to="/Orderplace"> <Button className='bot' variant="danger"> Order now</Button></Link>
                      </Card.Body>
                  </Card>



              </div>
              {/* card2 */}




          </div></>
    
  
  );
}








export default Usersearch;