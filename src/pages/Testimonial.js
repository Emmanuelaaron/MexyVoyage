import React from 'react';
import {
  Container,
  Typography,
} from '@mui/material';
import PageHeader from '../components/PageHeader';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Testimonial = () => {
  return (
    <div>
      <PageHeader title="Testimonial" breadcrumbs={['Home', 'Pages', 'Testimonial']} />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700 }}>
          Our Clients Say!
        </Typography>
        <TestimonialCarousel />
      </Container>
    </div>
  );
};

export default Testimonial;