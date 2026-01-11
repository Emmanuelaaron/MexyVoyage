import React, { useState, useRef } from 'react';
import { Box, Typography, Avatar, Card, CardContent } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Patient Name',
    profession: 'Profession',
    image: '/img/testimonial-1.jpg',
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
  },
  {
    name: 'Patient Name',
    profession: 'Profession',
    image: '/img/testimonial-2.jpg',
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
  },
  {
    name: 'Patient Name',
    profession: 'Profession',
    image: '/img/testimonial-3.jpg',
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
  },
];

const TestimonialCarousel = () => {
  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '60px',
    beforeChange: (current, next) => setCenterIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: { xs: 0, md: '200px', lg: '300px' },
          maxWidth: { xs: 0, md: '200px', lg: '300px' },
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: { xs: 0, md: '200px', lg: '300px' },
          maxWidth: { xs: 0, md: '200px', lg: '300px' },
          background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        },
        '& .slick-slider': {
          overflow: 'hidden',
        },
        '& .slick-list': {
          overflow: 'hidden',
        },
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => {
          const isCenter = index === centerIndex;
          return (
            <div key={index}>
              <Box sx={{ textAlign: 'center', px: 2 }}>
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: 100,
                    height: 100,
                    mx: 'auto',
                    mb: 3,
                    border: '2px solid',
                    borderColor: isCenter ? 'primary.main' : 'grey.300',
                    transition: 'all 0.5s',
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100?text=User';
                  }}
                />
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    bgcolor: isCenter ? 'primary.main' : 'grey.100',
                    borderRadius: 1,
                    transform: isCenter ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.5s',
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2,
                        color: isCenter ? '#F3F4F5' : 'inherit',
                        transition: 'color 0.5s',
                      }}
                    >
                      {String(testimonial?.text || '')}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        color: isCenter ? '#F3F4F5' : 'inherit',
                        transition: 'color 0.5s',
                      }}
                    >
                      {String(testimonial?.name || 'Anonymous')}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontStyle: 'italic',
                        color: isCenter ? '#F3F4F5' : 'text.secondary',
                        transition: 'color 0.5s',
                      }}
                    >
                      {String(testimonial?.profession || 'Visitor')}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
          );
        })}
      </Slider>
    </Box>
  );
};

export default TestimonialCarousel;
