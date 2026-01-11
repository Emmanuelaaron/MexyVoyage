import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // Handle form submission here
      alert('Thank you for your message! We will get back to you soon.');
      formik.resetForm();
    },
  });

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      label: '# Address',
      value: 'Plot 2 Portal Road - Entebbe, Uganda, East Africa',
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      label: '# Call Now',
      value: '+256 753 944 614',
    },
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      label: '# Mail Now',
      value: 'info@example.com',
    },
  ];

  return (
    <Box>
      <PageHeader title="Contact Us" breadcrumbs={['Home', 'Pages', 'Contact Us']} />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', bgcolor: 'grey.100', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      bgcolor: 'white',
                      borderRadius: 1,
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'primary.main', mb: 1, fontWeight: 600 }}>
                      {String(info?.label || '')}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {String(info?.value || '')}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}
            >
              # Contact Us
            </Typography>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Have Any Query? Please Contact Us!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              The contact form is currently active. Please fill out the form below and we will get
              back to you as soon as possible.
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Your Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{ bgcolor: 'grey.100' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Your Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{ bgcolor: 'grey.100' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="subject"
                    label="Subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject}
                    sx={{ bgcolor: 'grey.100' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    sx={{ bgcolor: 'grey.100' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                height: { xs: 400, lg: '100%' },
                minHeight: 400,
                borderRadius: 1,
                overflow: 'hidden',
              }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mexy Voyage Safaris Location"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;