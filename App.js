import Navbar from "./Headcomponent/AppNavbar";

// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from "./Headcomponent/Footer";
import Upperheader from "./Headcomponent/Upperheader";
import Navbarcarosel from "./Headcomponent/Navbarcarosel";
import Login from "./Logincomponent/Login";
 import Loginpage from "./Logincomponent/Loginpage";
// import React, { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';

import AdminLayout from './Admin/AdminLayout'; 
import AppNavbar from "./Headcomponent/AppNavbar";
//  import MainLayout  from "./Headcomponent/MainLayout";
//  import  MainLayout  from "./Headcomponent/MainLayout";  // Use named import
import { MainLayout } from './Headcomponent/MainLayout';
import PublicRoutes from './Authgurad/PublicRoutes'; // Import Public Routes
import ProtectedRoutes from './Authgurad/ProtectedRoutes'; 
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import UserLayout from './User/UserLayout';
// import CustomSideNavbar from "./sharedfolder/customsidenavbar";
import Cookies from 'js-cookie';
import  Customsidenavar from "./User/Customsidenavar";
import UserenqiryRms from "./sharedfolder/UserenqiryRms";

import RMShistory from "./sharedfolder/RMShistory";
// import { rmsactionpage } from "./Admin/rmsactionpage";

import RMSActionPage from "./Admin/RmsActionPage";

import { UserProvider } from "./Authgurad/UserContext";


import { ThemeProvider } from './themprovider/ThemeProvider';
import ThemeSelector from './themprovider/ThemeSelector';
function App() {
  // const [role, setRole] = useState(null);

  // // Retrieve role from localStorage when the app loads
  // useEffect(() => {
  //   const storedRole = localStorage.getItem('role');
  //   setRole(storedRole || ''); // Set the role or default to an empty string
  // }, []);

 

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes (with Main Layout for login pages) */}
//         <Route element={<MainLayout />}>
//           {/* Use PublicRoutes here */}
//           <Route element={<PublicRoutes />}>
//             <Route path="/Loginage" element={<Loginpage setRole={setRole} />} />
//             <Route path="/login" element={<Login setRole={setRole} />} />
//           </Route>
//         </Route>

//         {/* Protected Routes (with Main Layout) */}
//         <Route >
//           <Route path="/*" element={<ProtectedRoutes role={role} />} />
//         </Route>

//         {/* Catch-All Route (redirect to login if not found) */}
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// return (
//   <Router>
//     <PublicRoutes/>
   
//     {/* Main layout wrapping the whole application */}
//     <MainLayout setRole={setRole}>
//       <Routes>
//       <Route path="/*" element={<ProtectedRoutes role={role} />} />
//         {/* Public Routes */}
//         <Route path="/login" element={<Login setRole={setRole} />} />
//         <Route path="/Loginage" element={<Loginpage setRole={setRole} />} />
        
//         {/* Protected Routes */}
        

//         {/* Catch-All Route */}
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </MainLayout>
//   </Router>
// );
// };
 


//  export default App;

// const [role, setRole] = useState(null);  // Role state initially null

 
 


// useEffect(() => {
//   const storedRole = localStorage.getItem('role');
//   setRole(storedRole || null); // Set role or default to null
// }, []);
// return (
//   <Router>
//   <PublicRoutes/>
// <MainLayout/>

//       <Routes>
//         {/* Public Routes (Login pages) */}
//         {/* <Route path="/Loginage" element={<Loginpage setRole={setRole} />} /> */}
//         {/* <Route path="/login" element={<Login setRole={setRole} />} /> */}

//         {/* Protected Routes (only accessible when logged in) */}
        

//         {/* Catch-All Route (redirect to login if not found) */}
//         <Route path="/*" element={<ProtectedRoutes role={role} />} />
//       </Routes>
 
//   </Router>
// );
// }

// export default App;


// const [role, setRole] = useState(null);  // Initialize role state to null

//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');  // Get role from localStorage
//     console.log('Stored role:', storedRole);  // Debugging line
//     setRole(storedRole || null);  // Set the role or default to null
//   }, []);  // Run only once when the component mounts

//   return (
//     <Router>
//       <PublicRoutes />
//       <Routes>
//       {/* 
{/* <Route path="/Loginage" element={<Loginpage setRole={setRole} />} /> */}
//       <Route path="/login" element={<Login setRole={setRole} />} /> */}
//         {/* Public Routes */}
//         {/* Add specific path for public routes */}

//         {/* Protected Routes */}
//         {role ? (
//           <Route path="/*" element={<ProtectedRoutes role={role} />} />
//         ) : (
//           <Route path="/*" element={<MainLayout />} />
//         )}

//         {/* Admin Layout for Admin role */}
//         {role === 'Admin' ? (
//           <Route path="/Admin/*" element={<AdminLayout />} />
//         ) : null}

//         {/* User Layout for User role */}
//         {role === 'user' ? (
//           <Route path="/user/*" element={<UserLayout />} />
//         ) : null}

//         {/* Redirect if no role is set */}
//         {role === null && <Route path="/*" element={<Navigate to="/" />} />}
//       </Routes>
//     </Router>
//   );
// };
// export default App;
// const [role, setRole] = useState(null);  // Initialize role state to null




// c

// const [role, setRole] = useState(null); // User role
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   // Handle successful login
//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);  // Update login state to show the layout
//   };

//   return (
//     <Router>
//       {/* Conditionally render MainLayout based on login status */}
//        <PublicRoutes /> {/* This will render public routes before login */}
//       {isLoggedIn && <MainLayout />}  {/* This will render MainLayout after login */}

//       <Routes>
//         {/* Public Routes (Login pages) */}
//         <Route path="/Loginage" element={<Loginpage setRole={setRole} />} />
//         <Route path="/login" element={<Login setRole={setRole}  />} />

//         {/* Protected Routes (only accessible when logged in) */}
        
//         <Route path="/*" element={<ProtectedRoutes role={role} />} />
        
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// return (
//   <Router>
//       <PublicRoutes/>
//     <MainLayout>
    
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/Loginage" element={<Loginpage setRole={setRole} />} />
//            <Route path="/login" element={<Login setRole={setRole} />} />
       

//         {/* Protected Routes */}
//         <Route path="/*" element={<ProtectedRoutes role={role} />} />
        
//       </Routes>
//     </MainLayout>
//   </Router>

// );
// };

// return (
//   <Router>
//     {/* Public Routes inside MainLayout */}
//     <Routes>
//       <Route element={<MainLayout />}>
//         {/* Public Routes */}
//         <Route path="/loginpage" element={<Loginpage setRole={setRole} />} />
//         <Route path="/login" element={<Login setRole={setRole} />} />
//         <Route path="/*" element={<PublicRoutes />} />
//       </Route>

//       {/* Protected Routes outside MainLayout */}
//       <Route path="/protected/*" element={<ProtectedRoutes role={role} />} />
//     </Routes>
//   </Router>
// );
// };
// const [role, setRole] = useState(null);

// // Retrieve role from localStorage when the app loads
// useEffect(() => {
//   const storedRole = localStorage.getItem('role');
//   setRole(storedRole || ''); // Set the role or default to an empty string
// }, []);

// return (
//   <>
  
  
  
  
 
  

//  <Router> 
//  <MainLayout />
//  <PublicRoutes />
 
//     {/* Public Routes inside MainLayout */}
//     <Routes>
    
//     <Route path="/Loginage" element={<Loginpage setRole={setRole} />} />
//          <Route path="/login" element={<Login setRole={setRole}  />} />

//       {/* Public Routes */}
      
     

//       {/* Protected Routes outside MainLayout */}
//       <Route path="/*" element={<ProtectedRoutes role={role} />} />
//     </Routes>
//   </Router></>
// );
// };

// export default App;

// const [role, setRole] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Retrieve role and login status from localStorage when the app loads
//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');
//     const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    
//     if (storedRole) {
//       setRole(storedRole);
//     }
//     if (storedIsLoggedIn === 'true') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         {/* <Route path="/loginpage" element={<Loginpage setRole={setRole} setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/login" element={<Login setRole={setRole} setIsLoggedIn={setIsLoggedIn} />} /> */}

//         {/* Protected Routes */}
//         <Route
//           path="/*"
//           element={
//             isLoggedIn ? (
//               <ProtectedRoutes role={role} />
//             ) : (
//               <>
//                 <MainLayout />
//                 <PublicRoutes />
//               </>
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




// const [role, setRole] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Retrieve role and login status from localStorage when the app loads
//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');
//     const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    
//     console.log('Initial login check:', storedIsLoggedIn); // Debugging line
//     if (storedRole) {
//       setRole(storedRole);
//     }
//     if (storedIsLoggedIn === 'true') {
//       setIsLoggedIn(true); // Update the state if user is logged in
//     }
//   }, []);

//   // Login handler to set the role and login status
//   const handleLogin = (role) => {
//     setRole(role);
//     setIsLoggedIn(true);
//     localStorage.setItem('role', role); // Store role in localStorage
//     localStorage.setItem('isLoggedIn', 'true'); // Store login status in localStorage
//     console.log('User logged in:', role); // Debugging line
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route
//           path="/loginpage"
//           element={<Loginpage setRole={setRole} setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route
//           path="/login"
//           element={<Login setRole={setRole} setIsLoggedIn={setIsLoggedIn} />}
//         />

//         {/* Protected Routes */}
//         <Route
//           path="/*"
//           element={
//             <>
//               <MainLayout />
//               <PublicRoutes /> {/* This will always be visible */}
//               {isLoggedIn && <ProtectedRoutes role={role} />} {/* Protected routes only visible if logged in */}
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// const [role, setRole] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Retrieve role and login status from localStorage when the app loads
//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');
//     const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

//     console.log('Initial login check:', storedIsLoggedIn); // Debugging line
//     if (storedRole) {
//       setRole(storedRole);
//     }
//     if (storedIsLoggedIn === 'true') {
//       setIsLoggedIn(true); // Update the state if user is logged in
//     }
//   }, []);

//   // Login handler to set the role and login status
//   const handleLogin = (role) => {
//     setRole(role);
//     setIsLoggedIn(true);
//     localStorage.setItem('role', role); // Store role in localStorage
//     localStorage.setItem('isLoggedIn', 'true'); // Store login status in localStorage
//     console.log('User logged in:', role); // Debugging line
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route
//           path="/loginpage"
//           element={<Loginpage setRole={setRole} setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route
//           path="/login"
//           element={<Login setRole={setRole} setIsLoggedIn={setIsLoggedIn} />}
//         />

//         {/* Conditional Rendering for Layout and Routes */}
//         <Route
//           path="/*"
//           element={
//             isLoggedIn ? (
//               <ProtectedRoutes role={role} /> // Show protected routes if logged in
//             ) : (
//               <>
//                 <MainLayout /> {/* Show main layout if not logged in */}
//                 {/* <PublicRoutes /> */}
//               </>
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };
// const [role, setRole] = useState(null);

//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');  // Get role from localStorage
//     console.log('Stored role:', storedRole);  // Debugging line
//     setRole(storedRole || null);  // Set the role or default to null
//   }, []);  // Run only once when the component mounts
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     // Get role from sessionStorage instead of localStorage
//     const storedRole = sessionStorage.getItem('role');
//     console.log('Stored role:', storedRole); // Debugging line
//     setRole(storedRole || null); // Set role or default to null
//   }, []);
//   return (
//     <Router>
//       <PublicRoutes/>
//       <Routes>
//       <Route path="/Loginage" element={<Loginpage setRole={setRole} />} />
//       <Route path="/login" element={<Login setRole={setRole} />} />
//         {/* Public Routes */}
//         <Route path="/" element={<MainLayout />} />  {/* Ensure MainLayout is always accessible */}
//         {/* <Route path="/login" element={<Login setRole={setRole} />} />  */}
   
//         {/* Protected Routes */}
//         {role ? (
//           <Route path="/*" element={<ProtectedRoutes role={role} />} />
//         ) : (
//           <Route path="/*" element={<MainLayout />} />  // Default route if not logged in
//         )}

       
        
//       </Routes>
//     </Router>
//   );
// };


// export default App;
// const [role, setRole] = useState(null);

// useEffect(() => {
//   // Get role from sessionStorage instead of localStorage
//   const storedRole = sessionStorage.getItem('role');
//   console.log('Stored role:', storedRole); // Debugging line
//   setRole(storedRole || null); // Set role or default to null
// }, []);

// return (
//   <Router>
//     <PublicRoutes />
//     <Routes>
   
//       {/* Public Routes */}
//       {/* Always accessible */}
//       <Route path="/Login-page" element={<Loginpage setRole={setRole} />} />
//       <Route path="/login" element={<Login setRole={setRole} />} />
//       <Route path="/" element={<MainLayout />} />

//       {/* Protected Routes */}
//       {role ? (
//         <Route path="/*" element={<ProtectedRoutes role={role} />} />
//       ) : (
//         // Redirect unauthenticated users to the login page or main layout
//         <Route path="/*" element={<MainLayout />} />
//       )}
//     </Routes>
//   </Router>
// );
// };

// export default App;




  // const [role, setRole] = useState(null);

  // useEffect(() => {
  //   // Retrieve the role from sessionStorage
  //   const storedRole = sessionStorage.getItem('role');
  //   console.log('Stored role:', storedRole);
  //   setRole(storedRole || null); // Set the role or default to null
  // }, []);
  // useEffect(() => {
  //   // Retrieve the role from localStorage (sessionStorage can also be used)
  //   const storedRole = localStorage.getItem('role');
  //   console.log('Stored role:', storedRole);
  //   setRole(storedRole || null); // Set the role or default to null
  // }, []);


  // const [role, setRole] = useState(null);

  // useEffect(() => {
  //   const storedRole = sessionStorage.getItem('role');
  //   setRole(storedRole || null);
  // }, []);

  // const [role, setRole] = useState(null);

  // // Load the stored role on initial render
  // useEffect(() => {
  //   const storedRole = sessionStorage.getItem('role');
  //   setRole(storedRole || null);
  // }, []);


const [role, setRole] = useState(Cookies.get('role') || null);

useEffect(() => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // If no token, reset role and clear cookies (if desired)
    setRole(null);
    Cookies.remove('role'); // Optionally remove role from cookies
  } else {
    // Fetch role from cookies when token is present
    setRole(Cookies.get('role') || null);
  }
}, []);
  
  
  // const [role, setRole] = useState(sessionStorage.getItem('role') || null);
  // const [role, setRole] = useState(sessionStorage.getItem('role') || null);

  // useEffect344(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     setRole(null);
  //   }
  // }, []);
  return (
   
    <Router>
      <PublicRoutes/>
      <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h1>React Theme Switcher</h1>
        <ThemeSelector />
        <p>
          This is a simple React application that allows you to dynamically
          change the website theme.
        </p>
      </div>
    </ThemeProvider>
     
     

     {/* <Customsidenavar/> */}
   <Routes>
  
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />} />
       
        <Route path="/Login-page" element={<Loginpage setRole={setRole} />} />
        {/* <Route path="/Login-page" element={<Loginpage setRole={setRole} />} /> */}
        <Route path="/login" element={<Login setRole={setRole} />} />

        {/* Protected Routes */}
        <Route path="/*" element={<ProtectedRoutes role={role} />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
       
  );
};


export default App;
