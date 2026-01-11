import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Modal,
  IconButton,
  Fade,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import PageHeader from '../components/PageHeader';

const Destinations = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const destinations = [
    { image: '/img/animal-md-1.jpg', name: 'Paris, France', type: 'Europe', description: 'The City of Light' },
    { image: '/img/animal-lg-1.jpg', name: 'Tokyo, Japan', type: 'Asia', description: 'Modern meets Traditional' },
    { image: '/img/animal-lg-2.jpg', name: 'New York, USA', type: 'North America', description: 'The Big Apple' },
    { image: '/img/animal-md-2.jpg', name: 'Bali, Indonesia', type: 'Asia', description: 'Tropical Paradise' },
    { image: '/img/animal-md-3.jpg', name: 'Santorini, Greece', type: 'Europe', description: 'Aegean Beauty' },
    { image: '/img/animal-lg-3.jpg', name: 'Dubai, UAE', type: 'Middle East', description: 'Desert Luxury' },
    { image: '/img/animal-md-1.jpg', name: 'London, UK', type: 'Europe', description: 'Historic Capital' },
    { image: '/img/animal-lg-1.jpg', name: 'Sydney, Australia', type: 'Oceania', description: 'Harbor City' },
    { image: '/img/animal-lg-2.jpg', name: 'Rome, Italy', type: 'Europe', description: 'Eternal City' },
  ];

  const handleImageClick = (destination) => {
    setSelectedImage(destination);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box>
      <PageHeader title="Destinations" breadcrumbs={['Home', 'Pages', 'Destinations']} />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center" sx={{ mb: 5 }}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}
            >
              # Our Destinations
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Explore Amazing{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Mexy Voyage Safaris
              </Box>{' '}
              Destinations
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ textAlign: { xs: 'left', lg: 'right' } }}>
            <Button variant="contained" size="large" onClick={() => window.location.href = '/packages'} sx={{ px: 5, py: 1.5 }}>
              View Tour Packages
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {destinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover .destination-overlay': {
                    opacity: 1,
                  },
                }}
                onClick={() => handleImageClick(destination)}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={destination.image}
                  alt={destination.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Destination';
                  }}
                />
                <Box
                  className="destination-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3,
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                >
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: 'white', 
                      textTransform: 'uppercase' 
                    }}
                  >
                    {String(destination?.type || 'Destination')}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {String(destination?.name || 'Unknown')}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', mt: 0.5 }}>
                    {String(destination?.description || '')}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Image Lightbox Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none',
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: -40,
                right: 0,
                color: 'white',
                zIndex: 1,
                bgcolor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <Close />
            </IconButton>
            {selectedImage && (
              <Box
                component="img"
                src={selectedImage.image}
                alt={selectedImage.name}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600?text=Destination';
                }}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Destinations;
