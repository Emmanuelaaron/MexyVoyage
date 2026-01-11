import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Twitter,
  Facebook,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Footer = () => {
  const navigate = useNavigate();

  const newsletterSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: newsletterSchema,
    onSubmit: (values) => {
      console.log('Newsletter signup:', values);
      formik.resetForm();
    },
  });

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'grey.300',
        pt: 8,
        pb: 4,
        mt: 8,
        overflowX: 'hidden',
        maxWidth: '100%',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
              Address
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ color: 'primary.main' }} />
                <Typography variant="body2">Plot 2 Portal Road - Entebbe, Uganda, East Africa</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ color: 'primary.main' }} />
                <Typography variant="body2">+256 753 944 614</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ color: 'primary.main' }} />
                <Typography variant="body2">info@example.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, pt: 1 }}>
                <IconButton
                  size="small"
                  sx={{
                    border: '1px solid',
                    borderColor: 'grey.700',
                    color: 'grey.300',
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                  }}
                >
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    border: '1px solid',
                    borderColor: 'grey.700',
                    color: 'grey.300',
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                  }}
                >
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    border: '1px solid',
                    borderColor: 'grey.700',
                    color: 'grey.300',
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                  }}
                >
                  <YouTube fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    border: '1px solid',
                    borderColor: 'grey.700',
                    color: 'grey.300',
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                  }}
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/about')}
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                About Us
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/contact')}
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                Contact Us
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/service')}
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                Our Services
              </Link>
              <Link
                component="button"
                variant="body2"
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                Terms & Condition
              </Link>
              <Link
                component="button"
                variant="body2"
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                Support
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
              Popular Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/about')}
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                About Us
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/contact')}
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                Contact Us
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/service')}
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                Our Services
              </Link>
              <Link
                component="button"
                variant="body2"
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                Terms & Condition
              </Link>
              <Link
                component="button"
                variant="body2"
                sx={{ color: 'grey.300', textAlign: 'left', '&:hover': { color: 'primary.main' } }}
              >
                Support
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}
            >
              <TextField
                name="email"
                placeholder="Your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'grey.800',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'grey.700',
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey.600',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
              <Button type="submit" variant="contained" sx={{ whiteSpace: 'nowrap' }}>
                SignUp
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'grey.700' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="body2" 
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              &copy;{' '}
              <Link sx={{ color: 'primary.main', textDecoration: 'none' }}>Your Site Name</Link>,
              All Right Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="body2" 
              sx={{ textAlign: { xs: 'center', md: 'right' } }}
            >
              Designed By{' '}
              <Link
                href="https://htmlcodex.com"
                target="_blank"
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                HTML Codex
              </Link>
              <br />
              Distributed By:{' '}
              <Link
                href="https://themewagon.com"
                target="_blank"
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                ThemeWagon
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;