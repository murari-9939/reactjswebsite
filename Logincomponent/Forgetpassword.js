


import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Forgetpassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  
    const handleEmailChange = (e) => setEmail(e.target.value);
  
    const handleSubmit = () => {
      // Logic for handling password reset (like API call) can go here
      console.log('Password reset link sent to:', email);
      // Navigate back to the login page after submission
      navigate('/login');
    };
  return (
   

    <>

<div className="forget-password-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Forget Password</h2>
      <p>Enter your email address to reset your password.</p>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className="bg-primary text-white">@</InputGroup.Text>
        <Form.Control
          type="email"
          placeholder="Email Address"
          aria-label="Email"
          value={email}
          onChange={handleEmailChange}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      
      <Button variant="primary" className="w-100" onClick={handleSubmit}>
        Send Reset Link
      </Button>
    </div>
   
  </>
  )
}

export default Forgetpassword