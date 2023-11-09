import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Profile() {
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
  <h1  className='head5'>User Profile</h1>
  {user ? (
    <div className='head6'>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>User Type: {user.usertype}</p>
    </div>
      ) : (
        <p>No user details found in local storage.</p>
      )}<Link to="/Userpage">
      <Button className="bot1" variant="danger">
          user Dashboard
      </Button>
  </Link></div>
    </div>
  );
}

export default Profile;
