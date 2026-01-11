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

const Animal = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const animals = [
    { image: '/img/animal-md-1.jpg', name: 'Elephant', type: 'Animal' },
    { image: '/img/animal-lg-1.jpg', name: 'Elephant', type: 'Animal' },
    { image: '/img/animal-lg-2.jpg', name: 'Elephant', type: 'Animal' },
    { image: '/img/animal-md-2.jpg', name: 'Elephant', type: 'Animal' },
    { image: '/img/animal-md-3.jpg', name: 'Elephant', type: 'Animal' },
    { image: '/img/animal-lg-3.jpg', name: 'Elephant', type: 'Animal' },
  ];

  const handleImageClick = (animal) => {
    setSelectedImage(animal);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box>
      <PageHeader title="Our Animals" breadcrumbs={['Home', 'Pages', 'Our Animals']} />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center" sx={{ mb: 5 }}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}
            >
              # Our Animals
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Let's See Our{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Mexy Voyage Safaris
              </Box>{' '}
              Awesome Animals
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ textAlign: { xs: 'left', lg: 'right' } }}>
            <Button variant="contained" size="large" sx={{ px: 5, py: 1.5 }}>
              Explore More Animals
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {animals.map((animal, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover .animal-overlay': {
                    opacity: 1,
                  },
                }}
                onClick={() => handleImageClick(animal)}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={animal.image}
                  alt={animal.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Animal';
                  }}
                />
                <Box
                  className="animal-overlay"
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
                    {String(animal?.type || 'Animal')}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {String(animal?.name || 'Unknown')}
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
                  e.target.src = 'https://via.placeholder.com/800x600?text=Animal';
                }}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Animal;