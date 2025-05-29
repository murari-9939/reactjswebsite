// src/context/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = Cookies.get('token');
//     const userId = Cookies.get('userId');

//     if (token && userId) {
//       setUser({ userId, token });
//     }
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// Create User Context
const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(Cookies.get('role') || null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setRole(null);
      Cookies.remove('role'); // Clear role if no token
    } else {
      setRole(Cookies.get('role') || null);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};