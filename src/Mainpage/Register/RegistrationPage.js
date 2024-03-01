import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    gmail: '',
    rollno: '',
    password: '',
    confirmPassword: ''
  });

  const fired = () =>{
     console.log("FUIRED")
  }

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic goes here
      console.log('Form submitted successfully:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    } else if (!/^[a-z0-9]+$/.test(data.username)) {
      errors.username = 'Username should contain only lowercase letters and digits';
    }

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else if (!/^[A-Z ]+$/.test(data.name)) {
      errors.name = 'Name should contain only capital letters and spaces';
    }

    if (!data.gmail.trim()) {
      errors.gmail = 'Gmail is required';
    } else if (!isValidEmail(data.rollno, data.gmail)) {
      errors.gmail = 'Email format should be like RollNumber@gmail.com';
    }

    if (!data.rollno.trim()) {
      errors.rollno = 'Roll number is required';
    } else if (!/^\w{2}22\wA\d{4}$/.test(data.rollno)) {
      errors.rollno = 'Roll number format should be like XX22XAXXXX';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }else if (data.password !== data.confirmPassword)
    {
      errors.confirmPassword = 'Passwords do not match';
    }
    

    return errors;
  };
  const isValidEmail = (rollno, email) => {
    const rollNumberSuffix = rollno + '@gmail.com';
    return email === rollNumberSuffix;
  };
  return (
    <div className='container'>
      
      <form onSubmit={handleSubmit}>
      <h1>Registration</h1>
        
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        
        <div>
          <label>Roll No:</label>
          <input
            type="text"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
          />
          {errors.rollno && <span>{errors.rollno}</span>}
        </div>
        <div>
          <label>Gmail:</label>
          <input
            type="email"
            name="gmail"
            value={formData.gmail}
            onChange={handleChange}
          />
          {errors.gmail && <span>{errors.gmail}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit" onClick={fired}>Register</button>
        <div className='raj'>
          <h4>
               Have already an account?
          </h4>
          <Link to='/'>Login here</Link>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
