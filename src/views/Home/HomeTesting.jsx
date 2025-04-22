import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutUsImages from '../../components/AboutUsImages/AboutUsImages';
import AboutUsBio from '../../components/AboutUsBio/AboutUsBio';

function Home() {
  return (
    <Box sx={{ padding: '40px 20px', color: '#ffffff', height: 1500 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Ice Cream Socials
      </Typography>
      <Typography variant="body1">
        We offer white glove ice cream sundae catering and drop-off delivery in the Inland Northwest and Seattle Metro.
      </Typography>
      <AboutUsImages />
      <AboutUsBio />
    </Box>
  );
}

export default Home;