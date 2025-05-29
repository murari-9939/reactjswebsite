// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { getDecodedUserId } from '../Authservice/tokenUtils';

// const UserprofileInfo = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchUserDetails = async () => {
//     try {
//       const userId = getDecodedUserId();
//       console.log('Decoded userId mk:', userId);

//       if (!userId) {
//         setError('User not authenticated');
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(
//         `https://localhost:44345/api/User/GetUserProfile/${userId}`
//       );

//       console.log('API Response Data:', response.data);

//       const userProfile = response.data.data[0]; // Assuming data contains a single object
//       setUser(userProfile);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching user details:', err);
//       setError('Failed to fetch user details');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   if (loading) {
//     return (
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundColor: '#f5f5f5'
//       }}>
//         <div style={{
//           width: '300px',
//           height: '200px',
//           borderRadius: '8px',
//           border: '1px solid #ddd',
//           backgroundColor: '#fff',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'relative',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//         }}>
//           <div style={{
//             border: '8px solid #f3f3f3',
//             borderTop: '8px solid #3498db',
//             borderRadius: '50%',
//             width: '50px',
//             height: '50px',
//             animation: 'spin 2s linear infinite'
//           }} />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{
//       maxWidth: '600px',
//       margin: '0 auto',
//       padding: '20px',
//       textAlign: 'center'
//     }}>
//       <h1>User Profile</h1>
//       <div style={{
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//         padding: '20px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#fff'
//       }}>
//         <div style={{ marginBottom: '15px' }}>
//           <h2>{user?.name || 'N/A'}</h2>
//         </div>
//         <div style={{ padding: '10px 0' }}>
//           <p><strong>UserId:</strong> {user?.userId || 'N/A'}</p>
//           <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {user?.mobileno || 'N/A'}</p>
//           <p><strong>Birthdate:</strong> {user?.dateOfBirthFormatted || 'N/A'}</p>
//           <p><strong>Active:</strong> {user?.active ? 'Yes' : 'No'}</p>
//           <p><strong>Address:</strong> {user?.address || 'N/A'}</p>
//           <p><strong>Image:</strong> {user?.img ? <img src={user.img} alt="User profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} /> : 'No image available'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserprofileInfo;
// UserprofileInfo.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { getDecodedUserId } from '../Authservice/tokenUtils';
// import Loader from '../sharedfolder/Loader';  // Import the Loader component

// const UserprofileInfo = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchUserDetails = async () => {
//     try {
//       const userId = getDecodedUserId();
//       console.log('Decoded userId mk:', userId);

//       if (!userId) {
//         setError('User not authenticated');
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(
//         `https://localhost:44345/api/User/GetUserProfil/${userId}`
//       );

//       console.log('API Response Data:', response.data);

//       const userProfile = response.data.data[0]; // Assuming data contains a single object
//       setUser(userProfile);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching user details:', err);
//       setError('Failed to fetch user details');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   if (loading) {
//     return <Loader />;  // Use the Loader component when loading
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{
//       maxWidth: '600px',
//       margin: '0 auto',
//       padding: '20px',
//       textAlign: 'center'
//     }}>
//       <h1>User Profile</h1>
//       <div style={{
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//         padding: '20px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#fff'
//       }}>
//         <div style={{ marginBottom: '15px' }}>
//           <h2>{user?.name || 'N/A'}</h2>
//         </div>
//         <div style={{ padding: '10px 0' }}>
//           <p><strong>UserId:</strong> {user?.userId || 'N/A'}</p>
//           <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {user?.mobileno || 'N/A'}</p>
//           <p><strong>Birthdate:</strong> {user?.dateOfBirthFormatted || 'N/A'}</p>
//           <p><strong>Active:</strong> {user?.active ? 'Yes' : 'No'}</p>
//           <p><strong>Address:</strong> {user?.address || 'N/A'}</p>
//           <p><strong>Image:</strong> {user?.img ? <img src={user.img} alt="User profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} /> : 'No image available'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserprofileInfo;





// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import axios from 'axios';  // You can use Axios for making HTTP requests
// import Loader from '../sharedfolder/Loader';  // Import the Loader component
// import { Card, CardContent, Typography, Avatar } from '@mui/material';

// const UserprofileInfo = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Retrieve the token from cookies
//     const token = Cookies.get('token');

//     if (!token) {
//       setError('User is not authenticated');
//       setLoading(false);
//       return;
//     }

//     // Fetch user profile using the stored token
//     axios
//       .get('https://localhost:44345/api/User/GetUserProfile/1', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setUser(response.data.data[0]); // Assuming the API returns user data in an array
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Failed to fetch user profile');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Loader />;  // Show loader while data is loading
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
//       <h1>User Profile</h1>
//       <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
//         <CardContent>
//           <Avatar
//             alt="User Profile"
//             src={user?.img || 'default-profile-image-url'} // Fallback image if img is empty
//             sx={{ width: 100, height: 100, margin: '0 auto 15px', borderRadius: '50%' }}
//           />
//           <Typography variant="h5" component="div" align="center">
//             {user?.name || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>UserId:</strong> {user?.userId || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Email:</strong> {user?.email || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Phone:</strong> {user?.mobileno || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Birthdate:</strong> {user?.dateOfBirthFormatted || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Active:</strong> {user?.active ? 'Yes' : 'No'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Address:</strong> {user?.address || 'N/A'}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UserprofileInfo;


// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import axiosInstance from '../Authservice/axiosInstance';
// import Loader from '../sharedfolder/Loader';  // Import the Loader component
// import { Card, CardContent, Typography, Avatar } from '@mui/material';

// const UserprofileInfo = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Retrieve the token from cookies
//     const token = Cookies.get('token');

//     if (!token) {
//       setError('User is not authenticated');
//       setLoading(false);
//       return;
//     }

//     // Fetch user profile using the stored token
//     axiosInstance
//       .get('User/GetUserProfile/1) // Use axiosInstance instead of directly using axios
//       .then((response) => {
//         setUser(response.data.data[0]); // Assuming the API returns user data in an array
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Failed to fetch user profile');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Loader />;  // Show loader while data is loading
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
//       <h1>User Profile</h1>
//       <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
//         <CardContent>
//           <Avatar
//             alt="User Profile"
//             src={user?.img || 'default-profile-image-url'} // Fallback image if img is empty
//             sx={{ width: 100, height: 100, margin: '0 auto 15px', borderRadius: '50%' }}
//           />
//           <Typography variant="h5" component="div" align="center">
//             {user?.name || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>UserId:</strong> {user?.userId || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Email:</strong> {user?.email || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Phone:</strong> {user?.mobileno || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Birthdate:</strong> {user?.dateOfBirthFormatted || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Active:</strong> {user?.active ? 'Yes' : 'No'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Address:</strong> {user?.address || 'N/A'}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UserprofileInfo;







// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import axios from 'axios';  // You can use Axios for making HTTP requests
// import Loader from '../sharedfolder/Loader';  // Import the Loader component
// import { Card, CardContent, Typography, Avatar } from '@mui/material';

// const UserprofileInfo = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Retrieve the token from cookies
//     const token = Cookies.get('token');

//     if (!token) {
//       setError('User is not authenticated');
//       setLoading(false);
//       return;
//     }

//     // Fetch user profile using the stored token
//     axios
//       .get('https://localhost:44345/api/User/GetUserProfile/1', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setUser(response.data.data[0]); // Assuming the API returns user data in an array
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Failed to fetch user profile');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Loader />;  // Show loader while data is loading
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
//       <h1>User Profile</h1>
//       <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
//         <CardContent>
//           <Avatar
//             alt="User Profile"
//             src={user?.img || 'default-profile-image-url'} // Fallback image if img is empty
//             sx={{ width: 100, height: 100, margin: '0 auto 15px', borderRadius: '50%' }}
//           />
//           <Typography variant="h5" component="div" align="center">
//             {user?.name || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>UserId:</strong> {user?.userId || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Email:</strong> {user?.email || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Phone:</strong> {user?.mobileno || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Birthdate:</strong> {user?.dateOfBirthFormatted || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Active:</strong> {user?.active ? 'Yes' : 'No'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Address:</strong> {user?.address || 'N/A'}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UserprofileInfo;

// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import axios from 'axios';
// import Loader from '../sharedfolder/Loader';
// import { Card, CardContent, Typography, Avatar } from '@mui/material';

// const UserprofileInfo = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Retrieve the token from cookies
//     const token = Cookies.get('token');

//     if (!token) {
//       setError('User is not authenticated');
//       setLoading(false);
//       return;
//     }

//     // Send the token in the Authorization header (no need for UserId in API parameters)
//     axios
//       .get('https://localhost:44345/api/User/GetUserProfile', {
//         headers: {
//           'Authorization': `Bearer ${token}`, // Passing token in header
//         },
//       })
//       .then((response) => {
//         setUser(response.data.data[0]); // Assuming the API returns user data in an array
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Failed to fetch user profile');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Loader />;  // Show loader while data is loading
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
//       <h1>User Profile</h1>
//       <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
//         <CardContent>
//           <Avatar
//             alt="User Profile"
//             src={user?.img || 'default-profile-image-url'} // Fallback image if img is empty
//             sx={{ width: 100, height: 100, margin: '0 auto 15px', borderRadius: '50%' }}
//           />
//           <Typography variant="h5" component="div" align="center">
//             {user?.name || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>UserId:</strong> {user?.userId || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Email:</strong> {user?.email || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Phone:</strong> {user?.mobileno || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Birthdate:</strong> {user?.dateOfBirthFormatted || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Active:</strong> {user?.active ? 'Yes' : 'No'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Address:</strong> {user?.address || 'N/A'}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UserprofileInfo;

//  import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import axios from 'axios';  // You can use Axios for making HTTP requests
// import Loader from '../sharedfolder/Loader';  // Import the Loader component
// import { Card, CardContent, Typography, Avatar } from '@mui/material';

// const UserprofileInfo = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Retrieve the token from cookies
//     const token = Cookies.get('token');
//     const userId = Cookies.get('userId');  // Assuming the user ID is saved in cookies

//     if (!token || !userId) {
//       setError('User is not authenticated');
//       setLoading(false);
//       return;
//     }

//     // Fetch user profile using the stored token and user ID dynamically
//     axios
//       .get(`https://localhost:44345/api/User/GetUserProfile/${userId}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setUser(response.data.data[0]); // Assuming the API returns user data in an array
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Failed to fetch user profile');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Loader />;  // Show loader while data is loading
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
//       <h1>User Profile</h1>
//       <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
//         <CardContent>
//           <Avatar
//             alt="User Profile"
//             src={user?.img || 'default-profile-image-url'} // Fallback image if img is empty
//             sx={{ width: 100, height: 100, margin: '0 auto 15px', borderRadius: '50%' }}
//           />
//           <Typography variant="h5" component="div" align="center">
//             {user?.name || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>UserId:</strong> {user?.userId || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Email:</strong> {user?.email || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Phone:</strong> {user?.mobileno || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Birthdate:</strong> {user?.dateOfBirthFormatted || 'N/A'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Active:</strong> {user?.active ? 'Yes' : 'No'}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             <strong>Address:</strong> {user?.address || 'N/A'}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };


// export default UserprofileInfo;



import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../Authservice/apiService'; // Import API call
import Loader from '../sharedfolder/Loader';  // Import Loader component
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const UserprofileInfo = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const data = await fetchUserProfile();
        if (data.success) {
          setUserProfile(data.data);  // ✅ Extract `data` from API response
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message || 'An error occurred while fetching the user profile');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div style={{ textAlign: 'center', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h1>User Profile</h1>
      <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
        <CardContent>
          <Avatar
            alt="User Profile"
            src={userProfile?.img || 'default-profile-image-url'}  // ✅ Use lowercase `img`
            sx={{ width: 100, height: 100, margin: '0 auto 15px', borderRadius: '50%' }}
          />
          <Typography variant="h5" component="div" align="center">
            {userProfile?.name || 'N/A'}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>UserId:</strong> {userProfile?.userId || 'N/A'}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Email:</strong> {userProfile?.email || 'N/A'}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Phone:</strong> {userProfile?.mobileno || 'N/A'}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Birthdate:</strong> {userProfile?.dateOfBirthFormatted || 'N/A'}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Active:</strong> {userProfile?.active ? 'Yes' : 'No'}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Address:</strong> {userProfile?.address || 'N/A'}  
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserprofileInfo;

