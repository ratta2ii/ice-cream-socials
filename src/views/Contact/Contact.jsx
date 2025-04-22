import React from 'react';
import { Box, Typography } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ padding: '40px 20px', color: '#ffffff' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        For bookings or inquiries, please reach out via the contact form below.
      </Typography>
      {/* Placeholder for contact form component */}
    </Box>
  );
}

export default Contact;
