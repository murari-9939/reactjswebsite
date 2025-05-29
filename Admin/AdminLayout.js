import React from 'react'
// import AdminDashboar from '.Admin//AdminDashboar'

import  AdminDashboar from "../Admin/AdminDashboar";
import propertycarosel from "../Admin/propertycarosel";
import { Trail } from '../Admin/Trail';
const AdminLayout = () => {
  return (
   <>
   
   <propertycarosel />
   <Trail/>
   </>
    
  )
}

export default AdminLayout