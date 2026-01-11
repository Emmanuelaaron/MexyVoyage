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

const Membership = () => {
  const membershipPlans = [
    {
      number: '01',
      title: 'Popular',
      price: '$99.00',
      image: '/img/animal-lg-1.jpg',
      features: ['10% discount', '2 adult and 2 child', 'Free animal exhibition'],
    },
    {
      number: '02',
      title: 'Standard',
      price: '$149.00',
      image: '/img/animal-lg-2.jpg',
      features: ['15% discount', '4 adult and 4 child', 'Free animal exhibition'],
    },
    {
      number: '03',
      title: 'Premium',
      price: '$199.00',
      image: '/img/animal-lg-3.jpg',
      features: ['20% discount', '6 adult and 6 child', 'Free animal exhibition'],
    },
  ];

  return (
    <Box>
      <PageHeader title="Membership" breadcrumbs={['Home', 'Pages', 'Membership']} />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center" sx={{ mb: 5 }}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}
            >
              # Membership
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              You Can Be A Proud Member Of{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Mexy Voyage Safaris
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ textAlign: { xs: 'left', lg: 'right' } }}>
            <Button variant="contained" size="large" sx={{ px: 5, py: 1.5 }}>
              Special Pricing
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {membershipPlans.map((plan, index) => (
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
                  image={plan.image}
                  alt={plan.title}
                  sx={{ opacity: 0.3 }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Membership';
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
                    {String(plan?.number || '')}
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                    {String(plan?.title || '')}
                  </Typography>
                  <Typography variant="h3" sx={{ color: 'primary.main', mb: 3, fontWeight: 700 }}>
                    {String(plan?.price || '')}
                  </Typography>
                  {plan?.features?.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CheckCircle sx={{ color: 'primary.main', mr: 2 }} />
                      <Typography variant="body1">{String(feature || '')}</Typography>
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
                    Get Started
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

export default Membership;