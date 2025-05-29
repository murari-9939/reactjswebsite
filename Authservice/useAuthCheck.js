// import { checkIfTokenExpired } from './tokenUtils';

// export const isTokenExpired = () => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     console.error('No token found');
//     return true;
//   }

//   return checkIfTokenExpired(token);
// };
import { checkIfTokenExpired } from './tokenUtils';

export const isTokenExpired = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found');
    return true;
  }

  return checkIfTokenExpired(token);
};

