import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <CircularProgress size={60} thickness={4} />
    </Box>
  );
};

export default Spinner;