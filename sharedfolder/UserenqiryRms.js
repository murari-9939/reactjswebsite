import React, { useState, useEffect } from 'react';
import {
  Modal,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Alert,
  CircularProgress,
  Box,
  IconButton,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { getDecodedUserId } from '../Authservice/tokenUtils';
import Swal from 'sweetalert2';

const categories = [
  'Loan Enquiry',
  'General Enquiry',
  'Complaint',
  'Feedback',
  'Service Request',
];

const UserEnquiryRms = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [userEnquiryDetail, setUserEnquiryDetail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSubmit = async () => {
    let hasError = false;
    const newErrors = {
      category: '',
      subcategory: '',
      enquiryDetail: '',
      contactNumber: '',
    };

    // Form validation
    if (!selectedCategory) {
      newErrors.category = 'Category is required.';
      hasError = true;
    }
    if (!selectedSubcategory) {
      newErrors.subcategory = 'Subcategory is required.';
      hasError = true;
    }
    if (!userEnquiryDetail) {
      newErrors.enquiryDetail = 'Enquiry detail is required.';
      hasError = true;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!contactNumber || !phoneRegex.test(contactNumber)) {
      newErrors.contactNumber = 'Enter a valid 10-digit contact number.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
    } else {
      try {
        setIsLoading(true);
        const userId = getDecodedUserId(); // Retrieve the userId from the JWT token

        // Check if the userId is available
        if (!userId) {
          Swal.fire({
            icon: 'error',
            title: 'User not authenticated!',
            text: 'Please log in to submit the enquiry.',
          });
          return;
        }

        // Prepare the data payload for the API request
        const data = {
          userId: userId,
          categoryName: selectedCategory,
          subcategoryName: selectedSubcategory,
          description: selectedDescription,
          contactName: contactNumber,  // Adjust this field if needed
          userEnquiryDetail: userEnquiryDetail,
        };

        // Send the API request to rmsinsert
        const response = await axios.post('https://localhost:44345/api/User/rmsinsert', data);
        setIsLoading(false);

        // Handle the backend response
        if (response.data.success) {
          setSubmitMessage('Enquiry Submitted Successfully!');
          setOpen(false); // Close the modal after successful submission
        } else {
          setSubmitMessage('Submission Failed: ' + response.data.message);
        }
      } catch (error) {
        setIsLoading(false);
        setSubmitMessage('Error submitting enquiry, please try again.');
        console.error('Error submitting enquiry:', error);
      }
    }
  };

  const handleCategoryChange = async (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSubcategories([]);
    setDescriptions([]);
    setSelectedSubcategory('');
    setSelectedDescription('');

    if (category) {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://localhost:44345/api/User/GetSubcategoriesByCategoryName/${encodeURIComponent(category)}`
        );
        setIsLoading(false);
        if (response.data.success) {
          setSubcategories(response.data.data.subcategoryNames);
          setDescriptions(response.data.data.descriptions);
        } else {
          setSubcategories([]);
          setDescriptions([]);
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching subcategories:', error);
        setSubcategories([]);
        setDescriptions([]);
      }
    }
  };

  const handleSubcategoryChange = (event) => {
    const subcategory = event.target.value;
    setSelectedSubcategory(subcategory);
    const index = subcategories.indexOf(subcategory);
    setSelectedDescription(descriptions[index] || '');
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Success or Error Message */}
          {submitMessage && (
            <Alert severity={submitMessage.includes('Error') ? 'error' : 'success'}>
              {submitMessage}
            </Alert>
          )}

          {/* Form */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              error={!!errors.category}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            {errors.category && <Alert severity="error">{errors.category}</Alert>}
          </FormControl>

          <FormControl fullWidth margin="normal" disabled={!subcategories.length}>
            <InputLabel>Subcategory</InputLabel>
            <Select
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
              error={!!errors.subcategory}
            >
              {subcategories.map((subcategory) => (
                <MenuItem key={subcategory} value={subcategory}>
                  {subcategory}
                </MenuItem>
              ))}
            </Select>
            {errors.subcategory && <Alert severity="error">{errors.subcategory}</Alert>}
          </FormControl>

          <TextField
            fullWidth
            margin="normal"
            label="Description"
            value={selectedDescription}
            multiline
            rows={3}
            InputProps={{ readOnly: true }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            error={!!errors.contactNumber}
            helperText={errors.contactNumber}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Enquiry Detail"
            value={userEnquiryDetail}
            onChange={(e) => setUserEnquiryDetail(e.target.value)}
            multiline
            rows={3}
            error={!!errors.enquiryDetail}
            helperText={errors.enquiryDetail}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={() => setOpen(false)} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              sx={{ ml: 2 }}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default UserEnquiryRms;
