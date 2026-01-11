import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import PageHeader from '../components/PageHeader';
import Counter from '../components/Counter';
import TestimonialCarousel from '../components/TestimonialCarousel';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <PageHeader title="About Us" breadcrumbs={['Home', 'Pages', 'About Us']} />

      {/* About Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}
            >
              # Welcome To Mexy Voyage Safaris
            </Typography>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Why Choose{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Mexy Voyage Safaris
              </Box>{' '}
              For Your Travel!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Mexy Voyage Safaris is a leading travel company dedicated to creating unforgettable travel experiences. 
              With years of expertise in the travel industry, we offer carefully curated tours, 
              personalized service, and exceptional value to travelers worldwide.
            </Typography>
            {[
              'Expert Travel Consultants',
              'Best Price Guarantee',
              '24/7 Customer Support',
              'Worldwide Destinations',
            ].map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircle sx={{ color: 'primary.main', mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {feature}
                </Typography>
              </Box>
            ))}
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/about')}
              sx={{ mt: 4, px: 5, py: 1.5 }}
            >
              Read More
            </Button>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                position: 'relative',
                minHeight: 400,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: '3rem',
                  bottom: '3rem',
                  border: '5px solid',
                  borderColor: 'primary.main',
                },
              }}
            >
              <Box
                component="img"
                src="/img/mexyVoyage.jpeg"
                alt="About Mexy Voyage Safaris"
                sx={{
                  position: 'absolute',
                  top: '3rem',
                  left: '3rem',
                  width: 'calc(100% - 3rem)',
                  height: 'calc(100% - 3rem)',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=About+Mexy+Voyage+Safaris';
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Facts Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/bg-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 8,
          my: 5,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {[
              { icon: '✈️', label: 'Destinations', value: 150 },
              { icon: '👥', label: 'Happy Travelers', value: 50000 },
              { icon: '🎫', label: 'Tour Packages', value: 500 },
              { icon: '⭐', label: '5-Star Reviews', value: 4500 },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center', color: 'white' }}>
                  <Typography variant="h3" sx={{ mb: 2, fontSize: '3rem' }}>
                    {String(stat?.icon || '')}
                  </Typography>
                  <Counter end={stat?.value || 0} />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {String(stat?.label || '')}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700 }}>
          Our Clients Say!
        </Typography>
        <TestimonialCarousel />
      </Container>
    </Box>
  );
};

export default About;