import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function LocationPage() {
  const location = useLocation();
  const slug = location.pathname.split('/')[1];

  const formattedLocation = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Box sx={{ padding: '40px 20px', color: '#ffffff' }}>
      <Typography variant="h4" gutterBottom>
        Ice Cream Events in {formattedLocation}
      </Typography>
      <Typography variant="body1">
        We offer white glove sundae bar catering and drop-off service in {formattedLocation} and surrounding areas.
      </Typography>
    </Box>
  );
}

export default LocationPage;