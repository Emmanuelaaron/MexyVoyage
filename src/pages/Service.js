import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { Phone } from '@mui/icons-material';
import PageHeader from '../components/PageHeader';

const Service = () => {
  const services = [
    { icon: '/img/icon/icon-2.png', title: 'Flight Booking', description: 'Book your flights to any destination worldwide with the best prices and flexible options.' },
    { icon: '/img/icon/icon-3.png', title: 'Hotel Reservations', description: 'Find and book the perfect accommodation for your stay with our extensive hotel network.' },
    { icon: '/img/icon/icon-4.png', title: 'Tour Guides', description: 'Professional local guides to help you explore and discover hidden gems in every destination.' },
    { icon: '/img/icon/icon-7.png', title: '24/7 Support', description: 'Round-the-clock customer support to assist you before, during, and after your trip.' },
    { icon: '/img/icon/icon-8.png', title: 'Custom Itineraries', description: 'Personalized travel plans tailored to your interests, budget, and preferences.' },
    { icon: '/img/icon/icon-9.png', title: 'Transportation', description: 'Airport transfers, car rentals, and local transportation arrangements for seamless travel.' },
  ];

  return (
    <Box>
      <PageHeader title="Services" breadcrumbs={['Home', 'Pages', 'Services']} />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 5 }}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}
            >
              # Our Services
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Special Services For{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Mexy Voyage Safaris
              </Box>{' '}
              Travelers
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Phone sx={{ fontSize: 48 }} />
              <Box>
                <Typography variant="body2" sx={{ color: 'white' }}>Call for more info</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  +256 753 944 614
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3, boxShadow: 2 }}>
                <Box
                  component="img"
                  src={service.icon}
                  alt={service.title}
                  sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {String(service?.title || '')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {String(service?.description || '')}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;