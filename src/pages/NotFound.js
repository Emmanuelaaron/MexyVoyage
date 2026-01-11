import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { Warning } from '@mui/icons-material';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Container maxWidth="md" sx={{ py: 12, textAlign: 'center' }}>
        <Warning
          sx={{
            fontSize: 120,
            color: 'primary.main',
            mb: 3,
          }}
        />
        <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 700, mb: 2 }}>
          404
        </Typography>
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
          We're sorry, the page you have looked for does not exist in our website! Maybe go to our
          home page or try to use a search?
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
          sx={{ px: 5, py: 1.5 }}
        >
          Go Back To Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;