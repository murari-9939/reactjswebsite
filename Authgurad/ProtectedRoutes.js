import React from 'react';
// import { Route } from 'react-router-dom';
// import ProtectedRoute from './Authgurad/ProtectedRoute'; // This will check user roles

  
  import AdminDashboar from "../Admin/AdminDashboar"; 
  import UserDashboard from "../User/UserDashboard ";
  // import ProtectedRoute from '../ProtectedRoute';
  // import ProtectedRoute from '../Authgurad/ProtectedRoute';


 // Correct path for UserDashboard
import ProtectedRoute from './ProtectedRoute';
// import ProfileInfo from '../sharedfolder/profileinfo';
// import ProfileInfo from '../sharedfolder/Profileinfo';

import UserprofileInfo from '../sharedfolder/UserprofileInfo';
import UserEnquiryRms from '../sharedfolder/UserenqiryRms';
  import { Routes, Route, Navigate } from 'react-router-dom';
import RMShistory from '../sharedfolder/RMShistory';
import { UserProvider } from './UserContext'; 
 
  // const ProtectedRoutes = ({ role }) => {
  //   console.log('Role in ProtectedRoutes:', role); // Log role to debug
  
  //   return (
  //     <Routes>
  //       <Route
  //         path="/admin-dashboard"
  //         element={
  //           <ProtectedRoute role={role} allowedRoles={['Admin']}>
  //             <AdminDashboar/>
  //           </ProtectedRoute>
  //         }
  //       />
  //       <Route
  //         path="/user-dashboard" // Adding wildcard for nested routes
  //         element={
  //           <ProtectedRoute role={role} allowedRoles={['User']}>
  //             <UserDashboard />
  //           </ProtectedRoute>
  //         }
  //       />
  //       {/* <Route path="*" element={<Navigate to="/Login-page"/>}/>  */}
  //     </Routes>
  //   );
  // };
  
  // export default ProtectedRoutes;
 
 
  // const ProtectedRoutes = ({ role }) => {
  //   console.log('Role in ProtectedRoutes:', role); // Debugging role
  
  //   return (
  //     <Routes>
  //       {/* Admin Dashboard Route */}
  //       <Route
  //         path="/admin-dashboard"
  //         element={
  //           <ProtectedRoute role={role} allowedRoles={['Admin']}>
  //             <AdminDashboar />
  //           </ProtectedRoute>
  //         }
  //       />
  
  //       {/* User Dashboard Route */}
  //       <Route
  //         path="/user-dashboard"
  //         element={
  //           <ProtectedRoute role={role} allowedRoles={['User']}>
  //             <UserDashboard />
  //           </ProtectedRoute>
  //         }
  //       >
  //         {/* Nested Routes under User Dashboard */}
  //         <Route
  //           path="sharedfolder/profile-info" // This is the nested route
  //           element={
  //             <ProtectedRoute role={role} allowedRoles={['User', 'Admin']}>
  //               <ProfileInfo />
  //             </ProtectedRoute>
  //           }
  //         />
  //       </Route>
  
  //       {/* Fallback Route: Redirect if no match */}
  //       {/* <Route path="*" element={<Navigate to="/login" />} /> */}
  //     </Routes>
  //   );
  // };

 
 
  const ProtectedRoutes = ({ role }) => {
    return (
      <Routes>
        {/* Admin Dashboard Route */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role={role} allowedRoles={['Admin']}>
              <AdminDashboar />
            </ProtectedRoute>
          }
        />
  
    {/*admin dasbord layout action pages  */}
  <Route
          path="/Admin/rms-actionpages"
          element={
            <ProtectedRoute role={role} allowedRoles={['User']}>

<AdminDashboar />
             {/* User dashboard layout */}
            </ProtectedRoute>
          }
        >
          {/* Other nested routes for user-dashboard (if any) */}
        </Route>
        {/* User Dashboard Layout Route */}
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute role={role} allowedRoles={['User']}>


              <UserDashboard />  {/* User dashboard layout */}
            </ProtectedRoute>
          }
        >
          {/* Other nested routes for user-dashboard (if any) */}
        </Route>


{/* 
        <Route
  path="/sharedfolder/User-Enquiry"
  element={
    <ProtectedRoute role={role} allowedRoles={['User']}>
       <UserDashboard/>
      <UserEnquiryRms />
     
    </ProtectedRoute>
  }
/> */}
 
<Route
  path="/sharedfolder/User-Enquiry"
  element={
    <ProtectedRoute role={role} allowedRoles={['User']}>
      <UserEnquiryRms autoOpen={true} />
      <UserDashboard/>
    </ProtectedRoute>
  }
/>

    
        {/* Route for ProfileInfo, displayed inside UserDashboard layout */}
        <Route
          path="/sharedfolder/profile-info"
          element={
            <ProtectedRoute role={role} allowedRoles={['User', 'Admin']}>
              <UserDashboard>
                {/* <ProfileInfo /> */}
                <UserprofileInfo/>
              </UserDashboard>
            </ProtectedRoute>
          }
        />
         <Route
          path="/sharedfolder/previous-history"
          element={
            <ProtectedRoute role={role} allowedRoles={['User', 'Admin']}>
              <UserDashboard>
                {/* <ProfileInfo /> */}
                <RMShistory/>
              </UserDashboard>
            </ProtectedRoute>
          }
        />
    
        {/* Fallback Route */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    );
  };
  
  export default ProtectedRoutes;
  


// Protected Routes Component





// const ProtectedRoutes = ({ role }) => {
//   console.log('Role in ProtectedRoutes:', role); // Debugging role

//   return (
//     <Routes>
//       <Route
//         path="/admin-dashboard"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['Admin']}>
//             <AdminDashboar />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/user-dashboard/*"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['User']}>
//             <UserDashboard />
//           </ProtectedRoute>
//         }
//       />
 

//  <Route
//   path="/profile-info"
//   element={
//     <ProtectedRoute role={role} allowedRoles={['User', 'Admin']}>
//       <ProfileInfo />
//     </ProtectedRoute>
//   }
// />

 
     
//       {/* Fallback route */}
//       {/* <Route path="*" element={<Navigate to="/login" />} /> */}
//     </Routes>
//   );
// };

// export default ProtectedRoutes;

// const ProtectedRoutes = ({ role }) => {
//   console.log('Role in ProtectedRoutes:', role); // Debugging role

//   return (
//     <Routes>
//       <Route
//         path="/admin-dashboard"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['Admin']}>
//             <AdminDashboar />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/user-dashboard/*"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['User']}>
//             <UserDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/sharedfolder/profile-info"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['User', 'Admin']}>
//             <ProfileInfo />
//           </ProtectedRoute>
//         }
//       />
//       {/* Fallback route */}
//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   );
// };

// export default ProtectedRoutes;





// const ProtectedRoutes = ({ role }) => {
//   console.log('Role in ProtectedRoutes:', role); // Debugging role

//   return (
//     <Routes>
//       {/* Admin Dashboard Route */}
//       <Route
//         path="/admin-dashboard"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['Admin']}>
//             <AdminDashboar />
//           </ProtectedRoute>
//         }
//       />

//       {/* User Dashboard Route */}
//       <Route
//         path="/user-dashboard"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['User']}>
//             <UserDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Profile Info Route directly at /sharedfolder/profile-info */}
//       <Route
//         path="/sharedfolder/profile-info"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['User', 'Admin']}>
//             <ProfileInfo />
//           </ProtectedRoute>
//         }
//       />

//       Fallback Route: Redirect if no match
//       {/* <Route path="*" element={<Navigate to="/login" />} /> */}
//     </Routes>
//   );
// };

// export default ProtectedRoutes;


// const ProtectedRoutes = ({ role }) => {
//   console.log('Role in ProtectedRoutes:', role); // Debugging role

//   return (
//     <Routes>
//       {/* Admin Dashboard Route */}
//       <Route
//         path="/admin-dashboard"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['Admin']}>
//             <AdminDashboar/>
//           </ProtectedRoute>
//         }
//       />

//       {/* User Dashboard Route */}
//       <Route
//         path="/user-dashboard"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['User']}>
//             <UserDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Profile Info Route */}
//       <Route
//         path="/sharedfolder/profile-info"
//         element={
//           <ProtectedRoute role={role} allowedRoles={['User', 'Admin']}>
//             <ProfileInfo />
//           </ProtectedRoute>
//         }
//       />

//       {/* Fallback Route: Redirect if no match */}
//       {/* <Route path="*" element={<Navigate to="/login" />} /> */}
//     </Routes>
//   );
// };

// export default ProtectedRoutes;