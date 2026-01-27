import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import PageHeader from '../components/PageHeader';

const Packages = () => {
  const tourPackages = [
    {
      number: '01',
      title: 'Budget',
      price: '$599',
      image: '/img/animal-lg-1.jpg',
      features: ['3 Days / 2 Nights', 'Economy Hotel', 'Breakfast Included', 'City Tour'],
    },
    {
      number: '02',
      title: 'Standard',
      price: '$999',
      image: '/img/animal-lg-2.jpg',
      features: ['5 Days / 4 Nights', '3-Star Hotel', 'All Meals', 'Guided Tours'],
    },
    {
      number: '03',
      title: 'Premium',
      price: '$1,499',
      image: '/img/animal-lg-3.jpg',
      features: ['7 Days / 6 Nights', '5-Star Hotel', 'All Meals', 'VIP Services'],
    },
  ];

  return (
    <Box>
      <PageHeader title="Tour Packages" breadcrumbs={['Home', 'Pages', 'Tour Packages']} />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center" sx={{ mb: 5 }}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}
            >
              # Tour Packages
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Choose Your Perfect{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Mexy Voyage Safaris
              </Box>{' '}
              Package
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ textAlign: { xs: 'left', lg: 'right' } }}>
            <Button variant="contained" size="large" onClick={() => window.location.href = '/contact'} sx={{ px: 5, py: 1.5 }}>
              Custom Package
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {tourPackages.map((packageItem, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 2,
                  minHeight: { xs: 450, md: 500 },
                  backgroundImage: `url(${packageItem.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1,
                  },
                }}
              >
                <CardContent
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4,
                    color: 'white',
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '4rem', md: '5rem' },
                      fontWeight: 700,
                      color: 'transparent',
                      WebkitTextStroke: '2px',
                      WebkitTextStrokeColor: 'primary.main',
                      lineHeight: 1,
                      mb: 2,
                    }}
                  >
                    {String(packageItem?.number || '')}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    {String(packageItem?.title || '')}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'primary.main',
                      mb: 4,
                      fontWeight: 700,
                      textAlign: 'center',
                    }}
                  >
                    {String(packageItem?.price || '')}
                  </Typography>
                  <Box sx={{ flexGrow: 1, mb: 3 }}>
                    {packageItem?.features?.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                        }}
                      >
                        <CheckCircle
                          sx={{
                            color: 'primary.main',
                            mr: 1.5,
                            fontSize: '1.5rem',
                          }}
                        />
                        <Typography variant="body1" sx={{ color: 'white' }}>
                          {String(feature || '')}
                        </Typography>
                      </Box>
                    )) || []}
                  </Box>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Packages;
