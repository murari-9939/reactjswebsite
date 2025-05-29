import React from 'react';
// import { Route } from 'react-router-dom';

// import { Route, Routes } from 'react-router-dom';

import { Routes, Route, Navigate } from 'react-router-dom';

import ForgetPassword from "../Logincomponent/Forgetpassword";

import Login from "../Logincomponent/Login";
import Loginpage from "../Logincomponent/Loginpage";
// import ForgetPassword from "../Logincomponent/ForgetPassword";


const PublicRoutes = () => (
 

<Routes>
    {/* Public Login Route */}
    
    {/* Public Forget Password Route */}
    {/* <Route path="/Login-page" element={< Loginpage/>} /> */}
  
    <Route path="/forget-password" element={<ForgetPassword />} />

   
  </Routes>
  // <Routes>
    
  //   <Route path="/forget-password" element={<ForgetPassword />} />

    
  // </Routes>
 

);

export default PublicRoutes;