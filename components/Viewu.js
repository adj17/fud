import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

function Tableu() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users'); // Use axios for fetching data
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/usersdata/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h2>User Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
   
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
        
             
              <td>
                <Button variant="danger" onClick={() => handleDelete(user._id)}>
                  Delete Data
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center mt-3">
        <Link to="/admin">
          <Button className='bot1' variant="danger">Admin Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default Tableu;
