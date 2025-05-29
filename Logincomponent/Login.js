// import React from 'react'
// import { useState } from 'react';
// import {Button ,Card,Modal,InputGroup ,Nav,Form } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// // Example in Login.js
// //  import { loginUser } from '../Authservice/loginUser';
// import { loginUser1 } from '../Authservice/loginUser1';
// import { loginUser } from '../AuthService1/authService'; 
// // service apprach
// const Login = ({ setRole }) => {

  

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const navigate = useNavigate();
   
  // const handleForgetPasswordClick = () => {
  //   navigate('/forget-password');
  // };
  // const handleLogin12 = () => {
  //   loginUser(username, password, setRole, navigate);
  // };

  // // Handle login logic
  // const handleLogin = async () => {
  //   try {
  //     // Call loginUser function to handle the login logic
  //     await loginUser1(username, password, setRole, navigate);
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     Swal.fire({
  //       title: 'Error',
  //       text: 'An error occurred while logging in',
  //       icon: 'error',
  //       confirmButtonText: 'Try Again',
  //     });
  //   }
  // };

  // we are doing with context aprach
 
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const navigate = useNavigate();
  // const handleForgetPasswordClick = () => {
  //     navigate('/forget-password');
  //   };
  // const handleLogin = async () => {
  //   try {
  //     await loginUser1(username, password, setRole,navigate);
  //   } catch (error) {
  //     Swal.fire({
  //       title: 'Error',
  //       text: 'An error occurred while logging in',
  //       icon: 'error',
  //       confirmButtonText: 'Try Again',
  //     });
  //   }
  // };
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); // Use useNavigate hook for navigation
//   const [error, setError] = useState('');
//   const handleForgetPasswordClick = () => {
//         navigate('/forget-password');
//       };
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const result = await loginUser(username, password); // Call the login function
//     if (result.success) {
//       navigate('/dashboard'); // Redirect to dashboard if login is successful
//     } else {
//       setErrorMessage(result.message); // Show error message if login fails
//     }
//   }

//      const handleLogin1= async () => {
//       try {
//         const response = await axios.post('https://localhost:44345/api/Userloginfetch/Login', {
//           name: username,
//           password: password,
//         });
  
//         const data = response.data;
//         console.log(data);
  
//         if (data.token) {
//           // Store tokens and role in localStorage
//           localStorage.setItem('token', data.token);
//           localStorage.setItem('refreshToken', data.refreshToken);
//           localStorage.setItem('role', data.role); // Store dynamic user role
  
//           // Update role in the state
//           setRole(data.role);
  
//           // Display success alert
//           Swal.fire({
//             title: 'Success',
//             text: data.message,
//             icon: 'success',
//             confirmButtonText: 'Okay',
//           });
  
//           // Redirect based on role
//           if (data.role === 'Admin') {
//             navigate('/admin-dashboard');
//             console.log('admin')
//           } else if (data.role === 'User') {
//             navigate('/user-dashboard');
//             console.log('user')
//           }
//         } else {
//           Swal.fire({
//             title: 'Error',
//             text: data.message || 'Invalid login credentials',
//             icon: 'error',
//             confirmButtonText: 'Try Again',
//           });
//         }
//       } catch (error) {
//         console.error('Login error:', error);
//         Swal.fire({
//           title: 'Error',
//           text: 'An error occurred while logging in',
//           icon: 'error',
//           confirmButtonText: 'Try Again',
//         });
//       }
//     };
  
//   const handleClose = () => {
//     navigate(-1); // Navigate back to the previous route
//   };
  
//   return (
//     <>
//       <Modal show onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
//             <img
//               src="/assests/image.png"
//               alt="Logo"
//               style={{ width: '40px', height: '40px', marginRight: '10px' }}
//             />
//             E-bax
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img
//             src="/assests/image copy.png"
//             alt="Logo"
//             style={{
//               width: '90%',
//               maxWidth: '400px',
//               height: 'auto',
//               marginRight: '10px',
//             }}
//           />
//           <InputGroup className="mb-3">
//             <InputGroup.Text id="basic-addon1" className="bg-primary text-white">
//               @
//             </InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-label="Username"
//               aria-describedby="basic-addon1"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </InputGroup>
//           <InputGroup className="mb-3">
//             <InputGroup.Text id="basic-addon2" className="bg-primary text-white">
//               🔒
//             </InputGroup.Text>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               aria-label="Password"
//               aria-describedby="basic-addon2"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </InputGroup>
//           {error && <div className="text-danger">{error}</div>}
//         </Modal.Body>
//         <div className="d-flex justify-content-center w-100">
//           <Button variant="secondary" className="mx-2" onClick={handleLogin}>
//             Login
//           </Button>
//           <Nav.Link as={Link} to="/forget-password">
//             <Button variant="secondary" className="mx-2">
//               Forget Password
//             </Button>
//           </Nav.Link>
//    <Button
//           variant="secondary"
//           className="mx-2"
//           onClick={handleForgetPasswordClick}
//         >
//           Forget Password
//         </Button>
//         </div>
//       </Modal>
//     </>
  
//   )
// }

// export default Login
// import React, { useState } from 'react';
// import { Button, Card, Modal, InputGroup, Nav, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import { loginUser } from '../AuthService1/authService'; // Use your login service here

// const Login = ({ setRole }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); // Use useNavigate hook for navigation

//   const handleForgetPasswordClick = () => {
//     navigate('/forget-password');
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     // Validate that 'name' and 'password' are not empty
//     if (!username || !password) {
//       setErrorMessage('Both fields are required');
//       return;
//     }
  
//     try {
//       const response = await axios.post('https://localhost:44345/api/Userloginfetch/Login', {
//         name: username,
//         password: password
//       });
  
//       const data = response.data;
  
//       if (data.token) {
//         // Store tokens and role in localStorage
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('refreshToken', data.refreshToken);
//         localStorage.setItem('role', data.role); // Store dynamic user role
  
//         // Update role in the state
//         setRole(data.role);
  
//         // Display success alert
//         Swal.fire({
//           title: 'Success',
//           text: data.message,
//           icon: 'success',
//           confirmButtonText: 'Okay',
//         });
  
//         // Redirect based on role
//         if (data.role === 'Admin') {
//           navigate('/admin-dashboard');
//         } else if (data.role === 'User') {
//           navigate('/user-dashboard');
//         }
//       } else {
//         Swal.fire({
//           title: 'Error',
//           text: data.message || 'Invalid login credentials',
//           icon: 'error',
//           confirmButtonText: 'Try Again',
//         });
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       Swal.fire({
//         title: 'Error',
//         text: 'An error occurred while logging in',
//         icon: 'error',
//         confirmButtonText: 'Try Again',
//       });
//     }
//   };
  

//   return (
//     <Modal show onHide={() => navigate(-1)} centered>
//       <Modal.Header closeButton>
//         <Modal.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
//           <img
//             src="/assests/image.png"
//             alt="Logo"
//             style={{ width: '40px', height: '40px', marginRight: '10px' }}
//           />
//           E-bax
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <img
//           src="/assests/image copy.png"
//           alt="Logo"
//           style={{
//             width: '90%',
//             maxWidth: '400px',
//             height: 'auto',
//             marginRight: '10px',
//           }}
//         />
//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon1" className="bg-primary text-white">
//             @
//           </InputGroup.Text>
//           <Form.Control
//             type="text"
//             placeholder="Username"
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </InputGroup>
//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon2" className="bg-primary text-white">
//             🔒
//           </InputGroup.Text>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             aria-label="Password"
//             aria-describedby="basic-addon2"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </InputGroup>
//         {errorMessage && <div className="text-danger">{errorMessage}</div>}
//       </Modal.Body>
//       <div className="d-flex justify-content-center w-100">
//         <Button variant="secondary" className="mx-2" onClick={handleLogin}>
//           Login
//         </Button>
//         <Button variant="secondary" className="mx-2" onClick={handleForgetPasswordClick}>
//           Forget Password
//         </Button>
//       </div>
//     </Modal>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import { Button, Modal, InputGroup, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { loginUser } from '../AuthService1/authService';


// const Login = ({ setRole }) => {
//   const [name, setName] = useState(''); // Change username to name
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleForgetPasswordClick = () => {
//     navigate('/forget-password');
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     if (!name || !password) {
//       setErrorMessage('Both fields are required');
//       return;
//     }
  
//     try {
//       const response = await loginUser(name, password); // Pass name instead of username
  
//       if (response.success) {
//         sessionStorage.setItem('role', response.role);
//         setRole(response.role);
  
//         Swal.fire({
//           title: 'Success',
//           text: response.message,
//           icon: 'success',
//           confirmButtonText: 'Okay',
//         });
  
//         if (response.role === 'Admin') {
//           navigate('/admin-dashboard');
//         } else if (response.role === 'User') {
//           navigate('/user-dashboard');
//         }
//       } else {
//         Swal.fire({
//           title: 'Error',
//           text: response.message,
//           icon: 'error',
//           confirmButtonText: 'Try Again',
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         title: 'Error',
//         text: 'An error occurred while logging in',
//         icon: 'error',
//         confirmButtonText: 'Try Again',
//       });
//     }
//   };
  

//   return (
//     <Modal show onHide={() => navigate(-1)} centered>
//       <Modal.Header closeButton>
//         <Modal.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
//           <img src="/assests/image.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
//           E-bax
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <img
//           src="/assests/image copy.png"
//           alt="Logo"
//           style={{
//             width: '90%',
//             maxWidth: '400px',
//             height: 'auto',
//             marginRight: '10px',
//           }}
//         />
//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon1" className="bg-primary text-white">
//             🧑‍💼
//           </InputGroup.Text>
//           <Form.Control
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)} // Use name for login
//           />
//         </InputGroup>
//         <InputGroup className="mb-3">
//           <InputGroup.Text id="basic-addon2" className="bg-primary text-white">
//             🔒
//           </InputGroup.Text>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </InputGroup>
//         {errorMessage && <div className="text-danger">{errorMessage}</div>}
//       </Modal.Body>
//       <div className="d-flex justify-content-center w-100">
//         <Button variant="secondary" className="mx-2" onClick={handleLogin}>
//           Login
//         </Button>
//         <Button variant="secondary" className="mx-2" onClick={handleForgetPasswordClick}>
//           Forget Password
//         </Button>
//       </div>
//     </Modal>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Button, Modal, InputGroup, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { loginUser } from '../AuthService1/authService';

// const Login = ({ setRole }) => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleForgetPasswordClick = () => {
//     navigate('/forget-password');
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!name || !password) {
//       setErrorMessage('Both fields are required');
//       return;
//     }

//     try {
//       const response = await loginUser(name, password);

//       if (response.success) {
//         sessionStorage.setItem('role', response.role);
//         setRole(response.role);

//         Swal.fire({
//           title: 'Success',
//           text: response.message,
//           icon: 'success',
//           confirmButtonText: 'Okay',
//         });

//         if (response.role === 'Admin') {
//           navigate('/admin-dashboard');
//         } else if (response.role === 'User') {
//           navigate('/user-dashboard');
//         }
//       } else {
//         Swal.fire({
//           title: 'Error',
//           text: response.message,
//           icon: 'error',
//           confirmButtonText: 'Try Again',
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         title: 'Error',
//         text: 'An error occurred while logging in',
//         icon: 'error',
//         confirmButtonText: 'Try Again',
//       });
//     }
//   };

//   return (
//     <Modal show onHide={() => navigate(-1)} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>E-bax</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <InputGroup className="mb-3">
//           <InputGroup.Text>🧑‍💼</InputGroup.Text>
//           <Form.Control
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </InputGroup>
//         <InputGroup className="mb-3">
//           <InputGroup.Text>🔒</InputGroup.Text>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </InputGroup>
//         {errorMessage && <div className="text-danger">{errorMessage}</div>}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="primary" onClick={handleLogin}>
//           Login
//         </Button>
//         <Button variant="secondary" onClick={handleForgetPasswordClick}>
//           Forget Password
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Button, Modal, InputGroup, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie'; 
// import { loginUser } from '../AuthService1/authService';
import { loginUser } from '../Authservice/authService';


import CryptoJS from 'crypto-js';
const Login = ({ setRole }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
// Inside the handleLogin function:
 // Helper function to decrypt sensitive cookie data
 // Handle form submission


 const handleLogin = async (e) => {

  e.preventDefault();
  setLoading(true);
  setErrorMessage('');

  try {
    const result = await loginUser(name, password);

    if (result.success) {
      const userName = sessionStorage.getItem('name');
      const userRole = sessionStorage.getItem('role');
    // const userName = Cookies.get('name');
    //   const userRole = Cookies.get('role');
      console.log(userRole)
      Swal.fire({
        icon: 'success',
        title: 'Welcome!',
        text: `Hello ${userName}, you have logged in successfully.`,
      });

      setName('');
      setPassword('');

      // Redirect user based on role
      if (userRole === 'Admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } else {
      setErrorMessage(result.message);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: result.message,
      });
    }
  } catch (error) {
    setErrorMessage('An unexpected error occurred. Please try again.');
  }

  setLoading(false);
};

 const handleLogin233444 = async (e) => {
  e.preventDefault();
  setLoading(true);
  setErrorMessage("");

  try {
    const result = await loginUser(name, password);

    if (result.success) {
      const userName = sessionStorage.getItem("name");
      const userRole = sessionStorage.getItem("role");

      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: `Hello ${userName}, you have logged in successfully.`,
      });

      setName("");
      setPassword("");

      // Redirect user based on role
      navigate(userRole === "Admin" ? "/admin-dashboard" : "/user-dashboard");
    } else {
      setErrorMessage(result.message);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: result.message,
      });
    }
  } catch (error) {
    setErrorMessage("An unexpected error occurred. Please try again.");
  }

  setLoading(false);
};
 const handleLogin4555 = async (e) => {
  e.preventDefault();
  setLoading(true);
  setErrorMessage(""); // Clear previous errors

  try {
    const result = await loginUser(name, password);

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: `Hello ${sessionStorage.getItem("name")}, you have logged in successfully.`,
      });

      setName("");
      setPassword("");

      // Redirect user based on role
      const userRole = sessionStorage.getItem("role");
      if (userRole === "Admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } else {
      setErrorMessage(result.message);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: result.message,
      });
    }
  } catch (error) {
    setErrorMessage("An unexpected error occurred. Please try again.");
  }

  setLoading(false);
};

 // Helper function to decrypt sensitive cookie data
 const handleLogin12344 = async (e) => {
  e.preventDefault(); // Prevent form submission

  if (!name || !password) {
    setErrorMessage('Both fields are required');
    return;
  }

  try {
    const response = await loginUser(name, password);
    if (response.success) {
      // Store additional user details in cookies
      Cookies.set('username', name, { expires: 7 });
      Cookies.set('role', response.role, { expires: 7 });

      // Store the userID from response
      Cookies.set('userID', response.userID, { expires: 7 });

      // Handle the role and navigation
      setRole(response.role);
      Swal.fire({
        title: 'Success',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'Okay',
      });

      navigate(response.role === 'Admin' ? '/admin-dashboard' : '/user-dashboard');
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
  }
};



  const handleLogin12 = async (e) => {
    e.preventDefault();
    if (!name || !password) {
      setErrorMessage('Both fields are required');
      return;
    }

    try {
      const response = await loginUser(name, password);
      if (response.success) {
        sessionStorage.setItem('role', response.role);
        setRole(response.role);

        Swal.fire({
          title: 'Success',
          text: response.message,
          icon: 'success',
          confirmButtonText: 'Okay',
        });

        navigate(response.role === 'Admin' ? '/admin-dashboard' : '/user-dashboard');
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
    }
  };

  return (
    <Modal show onHide={() => navigate(-1)} centered>
      <Modal.Header closeButton>
      <Modal.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
           <img
              src="/assests/image.png"
              alt="Logo"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            E-bax
          </Modal.Title>
       
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-primary text-white">🧑‍💼</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-primary text-white">🔒</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        {errorMessage && <div className="text-danger">{errorMessage}</div>}
      </Modal.Body>
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="secondary" onClick={() => navigate('/forget-password')}>
          Forget Password
        </Button>
      </div>
    </Modal>
  );
};

export default Login;
