import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserList.css'; // Import your CSS file for component-specific styles

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <div className="user-cards">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <Link to={`/albums/${user.id}`} className="user-action-button">
              View Albums
            </Link>
            <Link to={`/photos/${user.id}`} className="user-action-button">
              View Photos
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
