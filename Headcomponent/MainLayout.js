import React from 'react';
import Footer from "../Headcomponent/Footer";
import Upperheader from "../Headcomponent/Upperheader";
import Navbarcarosel from "../Headcomponent/Navbarcarosel";
import AppNavbar from "../Headcomponent/AppNavbar";
import Login from "../Logincomponent/Login";
 import Loginpage from "../Logincomponent/Loginpage";
 import { Routes, Route } from 'react-router-dom';
// export const MainLayout = ({ children }) => {
//   return (
//     <div>
//       {/* Always displayed header */}
//       <Upperheader />
//       {/* <AppNavbar />  */}
//       <Navbarcarosel /> {/* Always displayed navbar */}
     
//       {/* Page-specific content */}
//       <div className="main-content">
//         {children} {/* Content passed from routes */}
//       </div>

//       {/* Always displayed footer */}
//       <Footer />
//     </div>

  
//   );
// };
// import { Routes, Route } from 'react-router-dom'; // Make sure to import these if you haven't already

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Always displayed header */}
      <Upperheader />
      
      {/* Always displayed navbar */}
      <AppNavbar /> {/* Added AppNavbar */}
      {/* <Routes>
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/Login-page" element={<Loginpage setRole={setRole} />} />
      </Routes> */}
      {/* Always displayed navbar carousel */}
      <Navbarcarosel /> 
      <div className="main-content">
        {children} {/* Content passed from routes */}
      </div>
      {/* Routes for specific pages */}
     
   {/* Page-specific content */}
   
      {/* Page-specific content */}
     

      {/* Always displayed footer */}
      <Footer />
    
    </div>
  );
};


