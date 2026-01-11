import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  IconButton,
  Fade,
} from '@mui/material';
import {
  CheckCircle,
  PlayArrow,
  Close,
  Phone,
  Directions,
  LocationOn,
  AccessTime,
} from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Counter from '../components/Counter';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const navigate = useNavigate();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const carouselImages = [
    '/img/carousel-1.jpg',
    '/img/carousel-2.jpg',
    '/img/carousel-3.jpg',
  ];

  const handlePlayVideo = (src) => {
    setVideoSrc(src);
    setVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setVideoModalOpen(false);
    setVideoSrc('');
  };

  const services = [
    { icon: '/img/icon/icon-2.png', title: 'Flight Booking', description: 'Book your flights to any destination worldwide with the best prices and flexible options.' },
    { icon: '/img/icon/icon-3.png', title: 'Hotel Reservations', description: 'Find and book the perfect accommodation for your stay with our extensive hotel network.' },
    { icon: '/img/icon/icon-4.png', title: 'Tour Guides', description: 'Professional local guides to help you explore and discover hidden gems in every destination.' },
    { icon: '/img/icon/icon-7.png', title: '24/7 Support', description: 'Round-the-clock customer support to assist you before, during, and after your trip.' },
    { icon: '/img/icon/icon-8.png', title: 'Custom Itineraries', description: 'Personalized travel plans tailored to your interests, budget, and preferences.' },
    { icon: '/img/icon/icon-9.png', title: 'Transportation', description: 'Airport transfers, car rentals, and local transportation arrangements for seamless travel.' },
  ];

  const destinations = [
    { image: '/img/animal-md-1.jpg', name: 'Paris, France', type: 'Europe' },
    { image: '/img/animal-lg-1.jpg', name: 'Tokyo, Japan', type: 'Asia' },
    { image: '/img/animal-lg-2.jpg', name: 'New York, USA', type: 'North America' },
    { image: '/img/animal-md-2.jpg', name: 'Bali, Indonesia', type: 'Asia' },
    { image: '/img/animal-md-3.jpg', name: 'Santorini, Greece', type: 'Europe' },
    { image: '/img/animal-lg-3.jpg', name: 'Dubai, UAE', type: 'Middle East' },
  ];

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
    <Box sx={{ overflowX: 'hidden', maxWidth: '100%' }}>
      {/* Header Section with Carousel */}
      <Box
        sx={{
          bgcolor: 'grey.900',
          position: 'relative',
          minHeight: { xs: '80vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ order: { xs: 2, lg: 1 } }}>
            <Box
              sx={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/bg-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: { xs: '50vh', lg: '90vh' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: { xs: 4, md: 8 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  mb: 4,
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                Discover Amazing Destinations Around The World
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/about')}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Read More
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    onClick={() => handlePlayVideo('/video/mercelerVideo.mp4')}
                    sx={{
                      bgcolor: 'white',
                      width: 60,
                      height: 60,
                      '&:hover': { bgcolor: 'grey.200' },
                    }}
                  >
                    <PlayArrow sx={{ color: 'primary.main', fontSize: 32 }} />
                  </IconButton>
                  <Typography variant="body1" sx={{ color: 'white', display: { xs: 'none', sm: 'block' } }}>
                    Watch Video
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ order: { xs: 1, lg: 2 } }}>
            <Box sx={{ position: 'relative', height: { xs: '40vh', lg: '90vh' } }}>
              <Slider {...carouselSettings}>
                {carouselImages.map((img, index) => (
                  <Box key={index} sx={{ height: { xs: '40vh', lg: '90vh' } }}>
                    <Box
                      component="img"
                      src={img}
                      alt={`Carousel ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x600?text=Mexy+Voyage+Safaris+Image';
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Video Modal */}
      <Modal
        open={videoModalOpen}
        onClose={handleCloseVideo}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Fade in={videoModalOpen}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              bgcolor: 'background.paper',
              borderRadius: 1,
              outline: 'none',
            }}
          >
            <IconButton
              onClick={handleCloseVideo}
              sx={{
                position: 'absolute',
                top: -40,
                right: 0,
                color: 'white',
                zIndex: 1,
              }}
            >
              <Close />
            </IconButton>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '100%',
              }}
            >
              <video
                width="100%"
                height="auto"
                controls
                autoPlay
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '90vh',
                }}
                src={videoSrc}
                title="Mexy Voyage Safaris Video"
              >
                Your browser does not support the video tag.
              </video>
            </Box>
          </Box>
        </Fade>
      </Modal>

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
              For Your Next Adventure!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Experience the world like never before with our expertly crafted travel packages. 
              We offer unforgettable journeys to the most beautiful destinations, with personalized 
              service and attention to detail that makes every trip special.
            </Typography>
            {[
              'Best Price Guarantee',
              'Expert Travel Consultants',
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
                src="/img/about.jpg"
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

      {/* Services Section */}
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
              Visitors
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

      {/* Animals Section */}
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
              Amazing Destinations
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ textAlign: { xs: 'left', lg: 'right' } }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/destinations')}
              sx={{ px: 5, py: 1.5 }}
            >
              View All Destinations
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {destinations.slice(0, 6).map((destination, index) => (
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
                    {String(destination?.type || 'Destination')}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {String(destination?.name || 'Unknown')}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Visiting Hours Section */}
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
                    <td>Office</td>
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
                      <Typography variant="body2">support@example.com</Typography>
                    </td>
                  </tr>
                </tbody>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Tour Packages Section */}
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
            <Button variant="contained" size="large" onClick={() => navigate('/packages')} sx={{ px: 5, py: 1.5 }}>
              View All Packages
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

      {/* Testimonials Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700 }}>
          What Our Travelers Say!
        </Typography>
        <TestimonialCarousel />
      </Container>
    </Box>
  );
};

export default Home;