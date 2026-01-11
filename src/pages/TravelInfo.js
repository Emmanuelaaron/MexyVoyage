import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import PageHeader from '../components/PageHeader';

const TravelInfo = () => {
  const officeHours = [
    { day: 'Monday', hours: '9:00AM - 5:00PM' },
    { day: 'Tuesday', hours: '9:00AM - 5:00PM' },
    { day: 'Wednesday', hours: '9:00AM - 5:00PM' },
    { day: 'Thursday', hours: '9:00AM - 5:00PM' },
    { day: 'Friday', hours: '9:00AM - 5:00PM' },
    { day: 'Saturday', hours: '9:00AM - 12:00PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <Box>
      <PageHeader title="Travel Information" breadcrumbs={['Home', 'Pages', 'Travel Information']} />

      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/bg-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 8,
          my: 5,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ color: 'white', mb: 4, fontWeight: 700 }}>
                Office Hours
              </Typography>
              <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.15)', borderRadius: 1 }}>
                {officeHours.map((schedule, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 2,
                      borderBottom: index < officeHours.length - 1 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                      color: 'white',
                    }}
                  >
                    <Typography variant="body1">{String(schedule?.day || '')}</Typography>
                    <Typography variant="body1">{String(schedule?.hours || '')}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ color: 'white', mb: 4, fontWeight: 700 }}>
                Contact Info
              </Typography>
              <Box
                component="table"
                sx={{
                  width: '100%',
                  bgcolor: 'rgba(0, 0, 0, 0.15)',
                  color: 'white',
                  '& td': {
                    p: 2,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                  },
                  '& tr:last-child td': {
                    borderBottom: 'none',
                  },
                }}
              >
                <tbody>
                  <tr>
                    <td>Main Office</td>
                    <td>Plot 2 Portal Road - Entebbe, Uganda, East Africa</td>
                  </tr>
                  <tr>
                    <td>Branch Office</td>
                    <td>456 Avenue, Los Angeles, USA</td>
                  </tr>
                  <tr>
                    <td>Booking</td>
                    <td>
                      <Typography variant="body2">+256 753 944 614</Typography>
                      <Typography variant="body2">booking@mexyvoyages.com</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td>
                      <Typography variant="body2">+256 753 944 614</Typography>
                      <Typography variant="body2">support@mexyvoyages.com</Typography>
                    </td>
                  </tr>
                </tbody>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default TravelInfo;
