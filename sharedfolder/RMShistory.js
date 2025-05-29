// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Divider } from '@mui/material';

// const RMShistory = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchEnquiries = async () => {
//       try {
//         const response = await fetch('https://localhost:44345/api/User/GetUserEnquiries?userId=1');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEnquiries(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnquiries();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!enquiries.length) {
//     return <div>No enquiries found.</div>;
//   }

//   return (
//     <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
//       <Typography variant="h4" gutterBottom>
//         User Enquiries
//       </Typography>
//       <Card>
//         <CardContent>
//           {enquiries.map((enquiry, index) => (
//             <div key={enquiry.userEnquiryToken}>
             
//               <Typography variant="body2" color="textSecondary">
//                 <strong>categoryName:</strong> { enquiry.categoryName}
//               </Typography>

//               <Typography variant="body2" color="textSecondary">
//                 <strong>Subcategory:</strong> {enquiry.subcategoryName}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Description:</strong> {enquiry.description}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Status:</strong> {enquiry.status}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Created At:</strong> {new Date(enquiry.createdAt).toLocaleString()}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Token:</strong> {enquiry.userEnquiryToken}
//               </Typography>
//               {/* Divider between enquiries */}
//               {index < enquiries.length - 1 && <Divider style={{ margin: '10px 0' }} />}
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default RMShistory;


// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Divider } from '@mui/material';
// // Import the Loader component
// import Loader from '../sharedfolder/Loader';
// const RMShistory = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchEnquiries = async () => {
//       try {
//         const response = await fetch('https://localhost:44345/api/User/GetUserEnquiries?userId=1');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEnquiries(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnquiries();
//   }, []);

//   if (loading) {
//     return <Loader />; // Display the Loader while data is loading
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!enquiries.length) {
//     return <div>No enquiries found.</div>;
//   }

//   return (
//     <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
//       <Typography variant="h4" gutterBottom>
//         User Enquiries
//       </Typography>
//       <Card>
//         <CardContent>
//           {enquiries.map((enquiry, index) => (
//             <div key={enquiry.userEnquiryToken}>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Category Name:</strong> {enquiry.categoryName}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Subcategory:</strong> {enquiry.subcategoryName}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Description:</strong> {enquiry.description}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Status:</strong> {enquiry.status}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Created At:</strong> {new Date(enquiry.createdAt).toLocaleString()}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 <strong>Token:</strong> {enquiry.userEnquiryToken}
//               </Typography>
//               {/* Divider between enquiries */}
//               {index < enquiries.length - 1 && <Divider style={{ margin: '10px 0' }} />}
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Divider, Button } from '@mui/material';
// import Loader from './Loader'; // Import a loader component
// import { getDecodedUserId } from '../Authservice/tokenUtils';

// const RMShistory = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchEnquiries = async () => {
//          const userId = getDecodedUserId();
//               console.log('Decoded userId:', userId);
//       try {
//         // const response = await fetch('https://localhost:44345/api/User/GetUserEnquiries?${userId}`');
//         // const response = await fetch('https://localhost:44345/api/User/GetUserEnquiries?${userId}`');

//         //  `https://localhost:44345/api/User/GetUserProfile/${userId}`
//          const response = await fetch(`https://localhost:44345/api/User/GetUserEnquiries?userId=${userId}`);

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEnquiries(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnquiries();
//   }, []);



// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Divider, Button, CircularProgress } from '@mui/material';
// import { getDecodedUserId } from '../Authservice/tokenUtils';

// const RMShistory = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchEnquiries = async () => {
//       const userId = getDecodedUserId();
//       console.log('Decoded userId:', userId);
//       try {
//         const response = await fetch(`https://localhost:44345/api/User/GetUserEnquiries?userId=${userId}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEnquiries(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnquiries();
//   }, []);

//   const handleCloseEnquiry = (enquiryId) => {
//     // Logic to handle closing the enquiry and making remarks visible
//     const updatedEnquiries = enquiries.map((enquiry) =>
//       enquiry.userEnquiryToken === enquiryId ? { ...enquiry, isClosed: true } : enquiry
//     );
//     setEnquiries(updatedEnquiries);
//   };

//   if (loading) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress size={50} />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ color: 'red', textAlign: 'center' }}>
//         <Typography variant="h6">{error}</Typography>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {enquiries.length === 0 ? (
//         <Typography variant="h6" align="center">
//           No enquiries found.
//         </Typography>
//       ) : (
//         enquiries.map((enquiry) => (
//           <Card key={enquiry.userEnquiryToken} style={{ marginBottom: '20px' }}>
//             <CardContent>
//               <Typography variant="h6">Enquiry {enquiry.userEnquiryToken}</Typography>
//               <Divider style={{ margin: '10px 0' }} />
//               <Typography variant="body1">
//                 Category: {enquiry.categoryName}
//               </Typography>
//               <Typography variant="body1">
//                 Subcategory: {enquiry.subcategoryName}
//               </Typography>
//               <Typography variant="body1">
//                 Description: {enquiry.description}
//               </Typography>
//               <Typography variant="body1">
//                 Status: <span style={{ color: enquiry.status === 'Pending' ? 'orange' : 'green' }}>{enquiry.status}</span>
//               </Typography>

//               {/* Open and Close buttons */}
//               {enquiry.status === 'Pending' && (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   style={{ marginRight: '10px' }}
//                 >
//                   Open
//                 </Button>
//               )}

//               {enquiry.status === 'Completed' && !enquiry.isClosed && (
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleCloseEnquiry(enquiry.userEnquiryToken)}
//                 >
//                   Close
//                 </Button>
//               )}

//               {/* Show Remarks and Remarks Date when enquiry is closed */}
//               {enquiry.isClosed && (
//                 <div style={{ marginTop: '10px' }}>
//                   <Typography variant="body1">
//                     Remarks: {enquiry.remarks || 'No remarks available'}
//                   </Typography>
//                   <Typography variant="body1">
//                     Remarks Date: {enquiry.remarksDate || 'No remarks date available'}
//                   </Typography>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// };

// export default RMShistory;
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Divider, Button, CircularProgress } from '@mui/material';
// import { getDecodedUserId } from '../Authservice/tokenUtils';

// const RMShistory = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchEnquiries = async () => {
//       const userId = getDecodedUserId();
//       console.log('Decoded userId:', userId);
//       try {
//         const response = await fetch(`https://localhost:44345/api/User/GetUserEnquiries?userId=${userId}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEnquiries(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnquiries();
//   }, []);

//   const handleCloseEnquiry = (enquiryId) => {
//     // Update the state to show remarks and closed status
//     const updatedEnquiries = enquiries.map((enquiry) =>
//       enquiry.userEnquiryToken === enquiryId ? { ...enquiry, isClosed: true, remarks: 'stringmkkkcomme', remarksDate: new Date().toISOString() } : enquiry
//     );
//     setEnquiries(updatedEnquiries);
//   };

//   if (loading) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress size={50} />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ color: 'red', textAlign: 'center' }}>
//         <Typography variant="h6">{error}</Typography>
//       </div>
//     );
//   }

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//       {enquiries.length === 0 ? (
//         <Typography variant="h6" align="center">
//           No enquiries found.
//         </Typography>
//       ) : (
//         <Card
//           sx={{
//             width: {
//               xs: '100%', // Full width on mobile
//               sm: '80%',  // 80% width on tablets
//               md: '60%',  // 60% width on desktops
//             },
//             padding: '20px',
//             boxSizing: 'border-box',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//             borderRadius: '8px',
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5" align="center" style={{ marginBottom: '20px' }}>
//               All Enquiries
//             </Typography>
//             {enquiries.map((enquiry) => (
//               <div key={enquiry.userEnquiryToken} style={{ marginBottom: '15px' }}>
//                 <Typography variant="h6" style={{ fontWeight: 'bold' }}>
//                   Enquiry {enquiry.userEnquiryToken}
//                 </Typography>
//                 <Divider style={{ margin: '10px 0' }} />
//                 <Typography variant="body1">
//                   <strong>Category:</strong> {enquiry.categoryName}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Subcategory:</strong> {enquiry.subcategoryName}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Description:</strong> {enquiry.description}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Status:</strong> <span style={{ color: enquiry.status === 'Pending' ? 'orange' : 'green' }}>{enquiry.status}</span>
//                 </Typography>

//                 {/* Open and Close buttons */}
//                 {enquiry.status === 'Pending' && (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     style={{ marginRight: '10px', marginTop: '10px' }}
//                   >
//                     Open
//                   </Button>
//                 )}

//                 {enquiry.status === 'Completed' && !enquiry.isClosed && (
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => handleCloseEnquiry(enquiry.userEnquiryToken)}
//                     style={{ marginTop: '10px' }}
//                   >
//                     Close
//                   </Button>
//                 )}

//                 {/* Show Remarks and Remarks Date when enquiry is closed */}
//                 {enquiry.isClosed && (
//                   <div style={{ marginTop: '10px' }}>
//                     <Typography variant="body1">
//                       <strong>Remarks:</strong> {enquiry.remarks || 'No remarks available'}
//                     </Typography>
//                     <Typography variant="body1">
//                       <strong>Remarks Date:</strong> {enquiry.remarksDate || 'No remarks date available'}
//                     </Typography>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default RMShistory;



import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";
import { getDecodedUserId } from "../Authservice/tokenUtils";

const RMShistory = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const fetchEnquiries = async () => {
      const userId = getDecodedUserId();
      try {
        const response = await fetch(
          `https://localhost:44345/api/User/GetUserEnquiries?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEnquiries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  const handleCardFlip = (token) => {
    setFlippedCards((prev) => ({
      ...prev,
      [token]: !prev[token],
    }));
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>
        <Typography variant="h6">{error}</Typography>
      </div>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>
      {enquiries.length === 0 ? (
        <Typography variant="h6" align="center">
          No enquiries found.
        </Typography>
      ) : (
        <div>
          <Typography
            variant="h5"
            align="center"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            User Enquiries
          </Typography>
          {enquiries.map((enquiry) => (
            <Card
              key={enquiry.userEnquiryToken}
              sx={{
                marginBottom: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <CardContent>
                <Typography variant="h6">
                  Category Name: {enquiry.categoryName}
                </Typography>
                <Typography variant="h6">
                  Subcategory Name: {enquiry.subcategoryName}
                </Typography>
                <Divider sx={{ margin: "10px 0" }} />
                <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                  Description: {enquiry.description}
                </Typography>
                <Box sx={{ marginTop: "20px" }}>
                  <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                    User Enquiry Detail: {enquiry.userEnquiryDetail}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                    Status:{" "}
                    <span
                      style={{
                        color:
                          enquiry.status === "Completed" ? "green" : "orange",
                      }}
                    >
                      {enquiry.status}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                    User Enquiry Token: {enquiry.userEnquiryToken}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                    Created At:{" "}
                    {new Date(enquiry.createdAt).toLocaleString()}
                  </Typography>

                  {/* Display buttons based on status */}
                  {enquiry.status === "Pending" ? (
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "10px" }}
                      onClick={() => handleCardFlip(enquiry.userEnquiryToken)}
                    >
                      Open
                    </Button>
                  ) : enquiry.status === "Completed" ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ marginTop: "10px" }}
                      onClick={() => handleCardFlip(enquiry.userEnquiryToken)}
                    >
                      Close
                    </Button>
                  ) : null}

                  {/* Expanded content when card is flipped */}
                  {flippedCards[enquiry.userEnquiryToken] && (
                    <Box sx={{ marginTop: "20px" }}>
                      <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                        Remarks: {enquiry.remarks || "N/A"}
                      </Typography>
                      <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                        Remarks Date:{" "}
                        {enquiry.remarksDate
                          ? new Date(enquiry.remarksDate).toLocaleString()
                          : "N/A"}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Box>
  );
};

export default RMShistory;















      









