import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, InputGroup, Alert } from 'react-bootstrap';
// import { loginUser } from '../Authservice1/loginUser';
import Swal from 'sweetalert2';
// import { loginUser } from '../AuthService1/authService';
import { loginUser } from '../Authservice/authService';

const Loginpage = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation check before making API call
    if (!username || !password) {
      setErrorMessage('Username and password are required');
      return;
    }

    setIsSubmitting(true); // Disable the login button during the API request
    try {
      const response = await loginUser(username, password); // Corrected variable name
      if (response.success) {
        sessionStorage.setItem('role', response.role); // Save the role to sessionStorage
        setRole(response.role); // Update role in the parent component

        Swal.fire({
          title: 'Success',
          text: response.message,
          icon: 'success',
          confirmButtonText: 'Okay',
        });

        // Redirect to the appropriate dashboard based on the role
        navigate(response.role === 'Admin' ? '/admin-dashboard' : '/user-dashboard');
        resetForm(); // Reset form after successful login
      } else {
        Swal.fire({
          title: 'Error',
          text: response.message,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while logging in',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    } finally {
      setIsSubmitting(false); // Re-enable the button after API call
    }
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <Card className="mx-auto mt-5 shadow-sm" style={{ maxWidth: '400px' }}>
      <Card.Body>
      <img
  src="assests/image copy.png"
  alt="Logo"
  style={{
    width: '90%',
    maxWidth: '400px',
    height: 'auto',
    marginRight: '10px',
  }}
/>

     
        <h3 className="text-center mb-4">Login</h3>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
          <InputGroup className="mb-3">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>🔒</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <Button
            variant="primary"
            className="w-100"
            onClick={handleLogin}
            disabled={isSubmitting || !username || !password} // Disable button if loading or fields are empty
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
            {/* <Button variant="secondary" onClick={() => navigate('/forget-password')}>
                    Forget Password
                  </Button> */}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Loginpage;
