import React from 'react';
import { Box, Container, Grid, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import { LocationOn, AccessTime, Phone } from '@mui/icons-material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Topbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  if (isMobile) return null;

  return (
    <Box
      sx={{
        bgcolor: 'grey.100',
        py: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflowX: 'hidden',
        maxWidth: '100%',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={7}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ color: 'primary.main', fontSize: 18 }} />
                <Typography variant="caption">Plot 2 Portal Road - Entebbe, Uganda, East Africa</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTime sx={{ color: 'primary.main', fontSize: 18 }} />
                <Typography variant="caption">Mon - Fri : 09.00 AM - 05.00 PM | Sat: 09.00 AM to 12.00 PM</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ color: 'primary.main', fontSize: 18 }} />
                <Typography variant="caption">+256 753 944 614</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {/* <IconButton size="small" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.200' } }}>
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.200' } }}>
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.200' } }}>
                  <LinkedIn fontSize="small" />
                </IconButton> */}
                <IconButton 
                  size="small" 
                  sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.200' } }}
                  onClick={() => window.open('https://www.instagram.com/mexyvoyagesafaris?igsh=MXV6cDJ2a2F3c3Zjeg%3D%3D&utm_source=qr', '_blank', 'noopener,noreferrer')}
                >
                  <Instagram fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Topbar;