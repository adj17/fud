import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Adminprofile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user details from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <div className='profile'>
        <div className='mode'>
      <h1  className='head5'>Admin Profile</h1>
      {user ? (
        <div className='head6'>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>User Type: {user.usertype}</p>
        </div>
      ) : (
        <p>No user details found in local storage.</p>
      )}<Link to="/Admin">
      <Button className="bot1" variant="danger">
          Admin Dashboard
      </Button>
  </Link></div>
    </div>
  );
}

export default Adminprofile;
