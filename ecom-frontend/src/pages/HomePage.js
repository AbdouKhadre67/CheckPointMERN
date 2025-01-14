import React, { useEffect, useState } from 'react';
import API from '../services/api';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await API.get('http://localhost:5000/api/users');
      setUsers(data);
    };
      
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

