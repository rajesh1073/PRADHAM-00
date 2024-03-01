import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your login logic, such as sending a request to your backend server
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='container'>
      
      <form onSubmit={handleSubmit}>
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
