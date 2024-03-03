import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddItem = async () => {
    try {
      // Send a POST request to the JSON server
      await axios.post('http://localhost:3800/details', { //use your api here guys
        username : username,
        password : password
      });

      // Optionally, you can fetch the updated data to reflect changes
      // For example:
      // const response = await axios.get('http://localhost:3001/items');
      // console.log(response.data);

      // Reset the input field
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  return (
    <div className='container'>
      
      <form onSubmit={handleAddItem}>
        <div>
        <h2>Login</h2>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <div className='rajesh'>
          <h4>
               New User?
          </h4>
          <Link to='/reg'>Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
