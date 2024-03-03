import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
  };const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
  
    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed with form submission
      handleAddItem();
    } else {
      // Update the state with validation errors
      setErrors(validationErrors);
    }
  };
  
  const handleAddItem = async () => {
    try {
      // Send a POST request to the JSON server
      await axios.post('http://localhost:3900/details', {
        name : formData.name,
        username: formData.username,
        gmail: formData.gmail,
        rollno: formData.rollno,
        password: formData.password,
        confirmPassword : formData.confirmPassword
      });
  
      // Optionally, you can fetch the updated data to reflect changes
      // For example:
      // const response = await axios.get('http://localhost:3900/details');
      // console.log(response.data);
  
      // Reset the input field
      setFormData({
        username: '',
        name: '',
        gmail: '',
        rollno: '',
        password: '',
        confirmPassword: ''
      });
  
      // Optionally, you can handle other state changes or actions after successful registration
    } catch (error) {
      console.error('Error adding item:', error);
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
            required // Mark the field as required

          />
          {errors.name && <span className='errormessage'>{errors.name}</span>}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required // Mark the field as required

          />
          {errors.username && <span className='errormessage'>{errors.username}</span>}
        </div>
        
        <div>
          <label>Roll No:</label>
          <input
            type="text"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            required // Mark the field as required

          />
          {errors.rollno && <span className='errormessage'>{errors.rollno}</span>}
        </div>
        <div>
          <label>Gmail:</label>
          <input
            type="email"
            name="gmail"
            value={formData.gmail}
            onChange={handleChange}
            required // Mark the field as required

          />
          {errors.gmail && <span className='errormessage'>{errors.gmail}</span>}
        </div>
        <div>
          <label id='pass'>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required // Mark the field as required

          />
          {errors.password && <span className='errormessage'>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required // Mark the field as required

          />
          {errors.confirmPassword && <span className='errormessage'>{errors.confirmPassword}</span>}
        </div>
        <button type="submit" onClick={fired}>Register</button>
        <div className='raj'>
          <h6>
               Have already an account?
          </h6>
          <h6><Link to='/'>Login here</Link></h6>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
