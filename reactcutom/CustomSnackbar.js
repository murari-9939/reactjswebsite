// import React from 'react';
// import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
// import { Close as CloseIcon } from '@mui/icons-material';

// const CustomSnackbar = ({ open, message, severity, onClose }) => {
//   const getSeverityStyles = () => {
//     switch (severity) {
//       case 'success':
//         return { backgroundColor: '#4caf50', color: '#ffffff' };
//       case 'error':
//         return { backgroundColor: '#f44336', color: '#ffffff' };
//       case 'info':
//         return { backgroundColor: '#2196f3', color: '#ffffff' };
//       default:
//         return { backgroundColor: '#333333', color: '#ffffff' };
//     }
//   };

//   return (
//     <Snackbar
//       open={open}
//       autoHideDuration={6000}
//       onClose={onClose}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//     >
//       <SnackbarContent
//         message={message}
//         style={getSeverityStyles()}
//         action={
//           <IconButton
//             size="small"
//             color="inherit"
//             onClick={onClose}
//             aria-label="close"
//           >
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         }
//       />
//     </Snackbar>
//   );
// };

// export default CustomSnackbar;
import React from 'react';
import { Snackbar, Alert } from '@mui/material';

function CustomSnackbar({ open, message, severity, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  // Position Snackbar at the top-center
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;

