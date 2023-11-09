import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
function Order()  {
  const [orders, setorders] = useState([]);
  console.log(orders)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/showorder');
        setorders(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <><div>
          <h2>Order Details</h2>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>No</th>
                      <th>Username</th>
                      <th>email</th>
                      <th>Orders</th>
                 
               
                  </tr>
              </thead>
              <tbody>
                  {orders.map((orders, index) => (
                      <tr key={orders._id}>
                          <td>{index + 1}</td>
                          <td>{orders.username}</td>
                          <td>{orders.email}</td>
                          <td>{orders.order}</td>
                          <td>
                             
                          </td>
                         
                      </tr>
                  ))}
              </tbody>
          </Table>

        
      </div><div className="text-center mt-3">
              <Link to="/admin">
                  <Button className="bot1" variant="danger">
                      Admin Dashboard
                  </Button>
              </Link>
          </div></>
  
  );
}
export default Order;
