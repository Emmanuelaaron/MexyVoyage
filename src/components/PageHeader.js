import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const PageHeader = ({ title = '', breadcrumbs = [] }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/bg-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 8,
        mb: 5,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            mb: 3,
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          {title ? String(title) : ''}
        </Typography>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            sx={{ color: 'white', '& .MuiBreadcrumbs-separator': { color: 'white' } }}
          >
            {breadcrumbs
              .filter((crumb) => crumb != null && String(crumb).trim() !== '')
              .map((crumb, index, filteredArray) => {
                const crumbText = String(crumb);
                const isLast = index === filteredArray.length - 1;
                
                if (isLast) {
                  return (
                    <Typography key={index} variant="body1" sx={{ color: 'primary.main' }}>
                      {crumbText}
                    </Typography>
                  );
                }
                if (index === 0) {
                  return (
                    <Link
                      key={index}
                      component="button"
                      onClick={() => navigate('/')}
                      sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      {crumbText}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={index}
                    component="button"
                    sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    {crumbText}
                  </Link>
                );
              })}
          </Breadcrumbs>
        )}
      </Container>
    </Box>
  );
};

export default PageHeader;