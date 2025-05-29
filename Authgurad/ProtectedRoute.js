// import React from 'react'
// import { Navigate } from 'react-router-dom';
// const ProtectedRoute = ({ role, allowedRoles, children }) => {
//     // Check if the user's role is allowed
//     if (!allowedRoles.includes(role)) {
//       return <Navigate to="/login" />;
//     }
  
//     // Render the protected content if the role is allowed
//     return children;
// }

// export default ProtectedRoute

import React from 'react'
import { Navigate } from 'react-router-dom';

// import Login from "../Logincomponent/Login";

// const ProtectedRoute = ({ role, allowedRoles, children }) => {
//   console.log('Role in ProtectedRoute:', role); 
//   // Debugging
//   console.log('hhjj')
//   // If the user role is not allowed, redirect to login page
//   if (!allowedRoles.includes(role)) {
//     // Optionally, you can redirect to login or home page instead of a specific path
//     // return <Navigate to="/login" />;
//     return <Navigate to="/Login-page" />;
//   }

//   // If role is allowed, render children (protected content)
//   return children;
// };

// export default ProtectedRoute



// const ProtectedRoute = ({ role, allowedRoles, children }) => {
//   // If no role is present or the role is not allowed, redirect to the login page
//   // if (!role || !allowedRoles.includes(role)) {
//   //   // return <Navigate to="/Login-page" />;
//   // }
//   if (!role) {
//     //     // Redirect to login if role is not set
//         return <Navigate to="/Login-page" />;
//       }
//   // Render the protected content if the role is allowed
//   return children;
// };

// export default ProtectedRoute;





const ProtectedRoute= ({ role, allowedRoles, children }) => {
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/login-page" />;
  }
  return children;
};

export default ProtectedRoute;



// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// const ProtectedRoute = ({ role, allowedRoles, children }) => {
//   console.log('Role in ProtectedRoute:', role); // Debugging

//   useEffect(() => {
//     // Clear any previously stored roles or related data
//     localStorage.removeItem('role');
//   }, []);

//   // If the user role is not allowed, redirect to login page
//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/Login-page" />;
//   }

//   // If role is allowed, render children (protected content)
//   return children;
// };

// export default ProtectedRoute;


// const ProtectedRoute = ({ role, allowedRoles, children }) => {
//   if (!role) {
//     // Redirect to login if role is not set
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(role)) {
//     // Redirect if role is not allowed
//     return <Navigate to="/unauthorized" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

