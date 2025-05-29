// import React, { useEffect, useState } from 'react';
// import {
//   DataGrid,
//   GridToolbar,
// } from '@mui/x-data-grid';
// import {
//   Modal,
//   Box,
//   Button,
//   TextField,
//   MenuItem,
//   CircularProgress,
// } from '@mui/material';
// import { getDecodedUserId } from '../Authservice/tokenUtils';

// import CustomSnackbar from '../reactcutom/CustomSnackbar';
// const modalStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '16px',
// };

// const loadingStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
// };

// export default function DataGridWithModal() {
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [remarks, setRemarks] = useState('');
//   const [status, setStatus] = useState('');
//   const [searchText, setSearchText] = useState('');
//   const [filteredRows, setFilteredRows] = useState([]);
//   const [errors, setErrors] = useState({ remarks: '', status: '' });

//   // Fetch data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       const userId = getDecodedUserId();
//       try {
//         const response = await fetch(
//           `https://localhost:44345/api/User/GetUserEnquiries?userId=${userId}`
//         );
//         const data = await response.json();

//         const mappedData = data.map((item, index) => ({
//           id: index + 1,
//           userId: item.userId,
//           categoryName: item.categoryName,
//           subcategoryName: item.subcategoryName,
//           description: item.description,
//           contactName: item.contactName,
//           status: item.status,
//           remarks: item.remarks || 'No Remarks',
//           createdAt: new Date(item.createdAt).toLocaleString(),
//           userEnquiryToken: item.userEnquiryToken,
//         }));

//         setRows(mappedData);
//         setFilteredRows(mappedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Search functionality
//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchText(value);

//     const filteredData = rows.filter((row) =>
//       Object.values(row).some((val) =>
//         String(val).toLowerCase().includes(value)
//       )
//     );
//     setFilteredRows(filteredData);
//   };

//   const handleOpenModal = (row) => {
//     setSelectedRow(row);
//     setRemarks(row.remarks || '');
//     setStatus(row.status || '');
//     setErrors({ remarks: '', status: '' });
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedRow(null);
//   };

//   const validateForm = () => {
//     const newErrors = { remarks: '', status: '' };
//     if (!remarks) newErrors.remarks = 'Remarks are required.';
//     if (!status) newErrors.status = 'Status is required.';
//     setErrors(newErrors);
//     return !newErrors.remarks && !newErrors.status;
//   };

//   const handleComplete1 = async () => {
//     if (selectedRow && validateForm()) {
//       const payload = {
//         userId: selectedRow.userId, // Ensure to send the correct userId
//         remarks,
//         status,
//       };
  
//       try {
//         const response = await fetch(
//           'https://localhost:44345/api/User/updateenquiry',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//           }
//         );
  
//         if (response.ok) {
//           setRows((prevRows) =>
//             prevRows.map((row) =>
//               row.userId === selectedRow.userId
//                 ? { ...row, remarks, status }
//                 : row
//             )
//           );
//           alert('Enquiry updated successfully!');
//         } else {
//           alert('Failed to update enquiry.');
//         }
//       } catch (error) {
//         console.error('Error updating enquiry:', error);
//       } finally {
//         handleCloseModal();
//       }
//     }
//   };
//   const handleComplete = async () => {
//     if (selectedRow && validateForm()) {
//       const payload = {
//         userId: selectedRow.userId,
//         remarks,
//         status,
//       };

//       try {
//         const response = await fetch(
//           'https://localhost:44345/api/User/updateenquiry',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//           }
//         );

//         const data = await response.json(); // Parse the API response
//         if (response.ok) {
//           setRows((prevRows) =>
//             prevRows.map((row) =>
//               row.userId === selectedRow.userId
//                 ? { ...row, remarks, status }
//                 : row
//             )
//           );
//           setSnackbarMessage(data.message || 'Enquiry updated successfully!');
//           setSnackbarSeverity('success');
//         } else {
//           setSnackbarMessage(data.message || 'Failed to update enquiry.');
//           setSnackbarSeverity('error');
//         }
//       } catch (error) {
//         console.error('Error updating enquiry:', error);
//         setSnackbarMessage('An error occurred. Please try again.');
//         setSnackbarSeverity('error');
//       } finally {
//         handleCloseModal();
//         setOpenSnackbar(true); // Open the snackbar
//       }
//     }
//   };

//   const handleSnackbarClose = () => {
//     setOpenSnackbar(false); // Close the snackbar
//   };

//   const getStatusProgress = (status) => {
//     switch (status) {
//       case 'Pending':
//         return 33;
//       case 'In Progress':
//         return 66;
//       case 'Completed':
//         return 100;
//       default:
//         return 0;
//     }
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 80 },
//     { field: 'userId', headerName: 'User ID', width: 120 },
//     { field: 'categoryName', headerName: 'Category Name', width: 150 },
//     { field: 'subcategoryName', headerName: 'Subcategory Name', width: 200 },
//     { field: 'description', headerName: 'Description', width: 250 },
//     { field: 'contactName', headerName: 'Contact Name', width: 150 },
//     {
//       field: 'status',
//       headerName: 'Status',
//       width: 150,
//       renderCell: (params) => (
//         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//           <CircularProgress
//             variant="determinate"
//             value={getStatusProgress(params.row.status)}
//             size={30}
//           />
//           {params.row.status}
//         </div>
//       ),
//     },
//     { field: 'remarks', headerName: 'Remarks', width: 200 },
//     { field: 'createdAt', headerName: 'Created At', width: 180 },
//     {
//       field: 'action',
//       headerName: 'Action',
//       width: 120,
//       renderCell: (params) => (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => handleOpenModal(params.row)}
//         >
//           Action
//         </Button>
//       ),
//     },
//   ];

//   if (loading) {
//     return (
//       <div style={loadingStyle}>
//         <CircularProgress size={50} />
//       </div>
//     );
//   }

//   return (
//     <div style={{ height: 600, width: '100%' }}>
//       <TextField
//         label="Search"
//         value={searchText}
//         onChange={handleSearch}
//         size="small"
//         variant="outlined"
//         margin="dense"
//         fullWidth
//       />
//       <DataGrid
//         rows={filteredRows}
//         columns={columns}
//         disableSelectionOnClick
//         slots={{
//           toolbar: GridToolbar,
//         }}
//       />
//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box sx={modalStyle}>
//           <h2>Update Enquiry</h2>
//           <TextField
//             label="Remarks"
//             value={remarks}
//             onChange={(e) => setRemarks(e.target.value)}
//             multiline
//             rows={4}
//             error={!!errors.remarks}
//             helperText={errors.remarks}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Status"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             select
//             error={!!errors.status}
//             helperText={errors.status}
//             fullWidth
//             margin="normal"
//           >
//             <MenuItem value="Pending">Pending</MenuItem>
//             <MenuItem value="In Progress">In Progress</MenuItem>
//             <MenuItem value="Completed">Completed</MenuItem>
//           </TextField>
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Button variant="contained" onClick={handleCloseModal} color="secondary">
//               Close
//             </Button>
//             <Button variant="contained" onClick={handleComplete} color="primary">
//               Submit
//             </Button>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import {
//   DataGrid,
//   GridToolbar,
// } from '@mui/x-data-grid';
// import {
//   Modal,
//   Box,
//   Button,
//   TextField,
//   MenuItem,
//   CircularProgress,
// } from '@mui/material';
// import { getDecodedUserId } from '../Authservice/tokenUtils';
// import CustomSnackbar from '../reactcutom/CustomSnackbar';

// const modalStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '16px',
// };

// const loadingStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
// };

// export default function DataGridWithModal() {
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [remarks, setRemarks] = useState('');
//   const [status, setStatus] = useState('');
//   const [searchText, setSearchText] = useState('');
//   const [filteredRows, setFilteredRows] = useState([]);
//   const [errors, setErrors] = useState({ remarks: '', status: '' });

//   // Fetch data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       const userId = getDecodedUserId();
//       try {
//         const response = await fetch(
//           `https://localhost:44345/api/User/GetUserEnquiries?userId=${userId}`
//         );
//         const data = await response.json();

//         const mappedData = data.map((item, index) => ({
//           id: index + 1,
//           userId: item.userId,
//           categoryName: item.categoryName,
//           subcategoryName: item.subcategoryName,
//           description: item.description,
//           contactName: item.contactName,
//           status: item.status,
//           remarks: item.remarks || 'No Remarks',
//           createdAt: new Date(item.createdAt).toLocaleString(),
//           userEnquiryToken: item.userEnquiryToken,
//         }));

//         setRows(mappedData);
//         setFilteredRows(mappedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Search functionality
//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchText(value);

//     const filteredData = rows.filter((row) =>
//       Object.values(row).some((val) =>
//         String(val).toLowerCase().includes(value)
//       )
//     );
//     setFilteredRows(filteredData);
//   };

//   const handleOpenModal = (row) => {
//     setSelectedRow(row);
//     setRemarks(row.remarks || '');
//     setStatus(row.status || '');
//     setErrors({ remarks: '', status: '' });
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedRow(null);
//   };

//   const validateForm = () => {
//     const newErrors = { remarks: '', status: '' };
//     if (!remarks) newErrors.remarks = 'Remarks are required.';
//     if (!status) newErrors.status = 'Status is required.';
//     setErrors(newErrors);
//     return !newErrors.remarks && !newErrors.status;
//   };

//   const handleComplete = async () => {
//     if (selectedRow && validateForm()) {
//       const payload = {
//         userId: selectedRow.userId,
//         remarks,
//         status,
//       };

//       try {
//         const response = await fetch(
//           'https://localhost:44345/api/User/updateenquiry',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//           }
//         );

//         const data = await response.json(); // Parse the API response
//         if (response.ok) {
//           setRows((prevRows) =>
//             prevRows.map((row) =>
//               row.userId === selectedRow.userId
//                 ? { ...row, remarks, status }
//                 : row
//             )
//           );
//           setSnackbarMessage(data.message || 'Enquiry updated successfully!');
//           setSnackbarSeverity('success');
//         } else {
//           setSnackbarMessage(data.message || 'Failed to update enquiry.');
//           setSnackbarSeverity('error');
//         }
//       } catch (error) {
//         console.error('Error updating enquiry:', error);
//         setSnackbarMessage('An error occurred. Please try again.');
//         setSnackbarSeverity('error');
//       } finally {
//         handleCloseModal();
//         setOpenSnackbar(true); // Open the snackbar
//       }
//     }
//   };

//   const handleSnackbarClose = () => {
//     setOpenSnackbar(false); // Close the snackbar
//   };

//   const getStatusProgress = (status) => {
//     switch (status) {
//       case 'Pending':
//         return 33;
//       case 'In Progress':
//         return 66;
//       case 'Completed':
//         return 100;
//       default:
//         return 0;
//     }
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 80 },
//     { field: 'userId', headerName: 'User ID', width: 120 },
//     { field: 'categoryName', headerName: 'Category Name', width: 150 },
//     { field: 'subcategoryName', headerName: 'Subcategory Name', width: 200 },
//     { field: 'description', headerName: 'Description', width: 250 },
//     { field: 'contactName', headerName: 'Contact Name', width: 150 },
//     {
//       field: 'status',
//       headerName: 'Status',
//       width: 150,
//       renderCell: (params) => (
//         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//           <CircularProgress
//             variant="determinate"
//             value={getStatusProgress(params.row.status)}
//             size={30}
//           />
//           {params.row.status}
//         </div>
//       ),
//     },
//     { field: 'remarks', headerName: 'Remarks', width: 200 },
//     { field: 'createdAt', headerName: 'Created At', width: 180 },
//     {
//       field: 'action',
//       headerName: 'Action',
//       width: 120,
//       renderCell: (params) => (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => handleOpenModal(params.row)}
//         >
//           Action
//         </Button>
//       ),
//     },
//   ];

//   if (loading) {
//     return (
//       <div style={loadingStyle}>
//         <CircularProgress size={50} />
//       </div>
//     );
//   }

//   return (
//     <div style={{ height: 600, width: '100%' }}>
//       <TextField
//         label="Search"
//         value={searchText}
//         onChange={handleSearch}
//         size="small"
//         variant="outlined"
//         margin="dense"
//         fullWidth
//       />
//       <DataGrid
//         rows={filteredRows}
//         columns={columns}
//         disableSelectionOnClick
//         slots={{
//           toolbar: GridToolbar,
//         }}
//       />
//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box sx={modalStyle}>
//           <h2>Update Enquiry</h2>
//           <TextField
//             label="Remarks"
//             value={remarks}
//             onChange={(e) => setRemarks(e.target.value)}
//             multiline
//             rows={4}
//             error={!!errors.remarks}
//             helperText={errors.remarks}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Status"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             select
//             error={!!errors.status}
//             helperText={errors.status}
//             fullWidth
//             margin="normal"
//           >
//             <MenuItem value="Pending">Pending</MenuItem>
//             <MenuItem value="In Progress">In Progress</MenuItem>
//             <MenuItem value="Completed">Completed</MenuItem>
//           </TextField>
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Button variant="contained" onClick={handleCloseModal} color="secondary">
//               Close
//             </Button>
//             <Button variant="contained" onClick={handleComplete} color="primary">
//               Submit
//             </Button>
//           </div>
//         </Box>
//       </Modal>
//       <CustomSnackbar
//         open={openSnackbar}
//         message={snackbarMessage}
//         severity={snackbarSeverity}
//         onClose={handleSnackbarClose}
//       />
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Modal, Box, Button, TextField, MenuItem, CircularProgress } from '@mui/material';
import { getDecodedUserId } from '../Authservice/tokenUtils';
import CustomSnackbar from '../reactcutom/CustomSnackbar';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const loadingStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

export default function DataGridWithModal() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [remarks, setRemarks] = useState('');
  const [status, setStatus] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);
  const [errors, setErrors] = useState({ remarks: '', status: '' });

  useEffect(() => {
    const fetchData = async () => {
      const userId = getDecodedUserId();
      try {
        const response = await fetch(
          `https://localhost:44345/api/User/GetUserEnquiries?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }
        const data = await response.json();
        const mappedData = data.map((item, index) => ({
          id: index + 1,
          ...item,
          remarks: item.remarks || 'No Remarks',
          createdAt: new Date(item.createdAt).toLocaleString(),
        }));
        setRows(mappedData);
        setFilteredRows(mappedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    const filteredData = rows.filter((row) =>
      Object.values(row).some((val) => String(val).toLowerCase().includes(value))
    );
    setFilteredRows(filteredData);
  };

  const handleOpenModal = (row) => {
    setSelectedRow(row);
    setRemarks(row.remarks || '');
    setStatus(row.status || '');
    setErrors({ remarks: '', status: '' });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  const validateForm = () => {
    const newErrors = { remarks: '', status: '' };
    if (!remarks.trim()) newErrors.remarks = 'Remarks are required.';
    if (!status.trim()) newErrors.status = 'Status is required.';
    setErrors(newErrors);
    return !newErrors.remarks && !newErrors.status;
  };
  const handleComplete = async () => {
    if (selectedRow && validateForm()) {
      const payload = {
        userEnquiryToken: selectedRow.userEnquiryToken, // Include token
        userId: selectedRow.userId,
        remarks,
        status,
      };
      try {
        const response = await fetch(
          'https://localhost:44345/api/User/updateenquiry',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload), // Send the updated payload
          }
        );
  
        const data = await response.json();
        if (response.ok) {
          // Update the rows with the modified data
          setRows((prevRows) =>
            prevRows.map((row) =>
              row.userEnquiryToken === selectedRow.userEnquiryToken
                ? { ...row, remarks, status }
                : row
            )
          );
          setSnackbarMessage(data.message || 'Enquiry updated successfully!');
          setSnackbarSeverity('success');
        } else {
          setSnackbarMessage(data.message || 'Failed to update enquiry.');
          setSnackbarSeverity('error');
        }
      } catch (error) {
        console.error('Error updating enquiry:', error);
        setSnackbarMessage('An error occurred. Please try again.');
        setSnackbarSeverity('error');
      } finally {
        handleCloseModal();
        setOpenSnackbar(true); // Open the snackbar
      }
    }
  };
  
 
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const getStatusProgress = (status) => {
    switch (status) {
      case 'Pending':
        return 33;
      case 'In Progress':
        return 66;
      case 'Completed':
        return 100;
      default:
        return 0;
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'userId', headerName: 'User ID', width: 120 },
    { field: 'categoryName', headerName: 'Category Name', width: 150 },
    { field: 'subcategoryName', headerName: 'Subcategory Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'contactName', headerName: 'Contact Name', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <CircularProgress
            variant="determinate"
            value={getStatusProgress(params.row.status)}
            size={30}
          />
          {params.row.status}
        </div>
      ),
    },
    { field: 'remarks', headerName: 'Remarks', width: 200 },
    { field: 'createdAt', headerName: 'Created At', width: 180 },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal(params.row)}
        >
          Action
        </Button>
      ),
    },
  ];

  if (loading) {
    return (
      <div style={loadingStyle}>
        <CircularProgress size={50} />
      </div>
    );
  }

  return (
    <div style={{ height: 600, width: '100%' }}>
      <TextField
        label="Search"
        value={searchText}
        onChange={handleSearch}
        size="small"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        disableSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <h2>Update Enquiry</h2>
          <TextField
            label="Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            multiline
            rows={4}
            error={!!errors.remarks}
            helperText={errors.remarks}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            select
            error={!!errors.status}
            helperText={errors.status}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </TextField>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              onClick={handleCloseModal}
              color="secondary"
            >
              Close
            </Button>
            <Button variant="contained" onClick={handleComplete} color="primary">
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
      <CustomSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </div>
  );
}

