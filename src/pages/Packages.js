import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
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
        <Grid container spacing={4}>
          {tourPackages.map((packageItem, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  minHeight: 500,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={packageItem.image}
                  alt={packageItem.title}
                  sx={{ opacity: 0.3 }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Tour+Package';
                  }}
                />
                <CardContent sx={{ position: 'relative', p: 4 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: '6rem',
                      fontWeight: 700,
                      color: 'transparent',
                      WebkitTextStroke: '2px',
                      WebkitTextStrokeColor: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {String(packageItem?.number || '')}
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                    {String(packageItem?.title || '')}
                  </Typography>
                  <Typography variant="h3" sx={{ color: 'primary.main', mb: 3, fontWeight: 700 }}>
                    {String(packageItem?.price || '')}
                  </Typography>
                  {packageItem?.features?.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CheckCircle sx={{ color: 'primary.main', mr: 2 }} />
                      <Typography variant="body1" sx={{ color: 'white' }}>{String(feature || '')}</Typography>
                    </Box>
                  )) || []}
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 3,
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'primary.main',
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
