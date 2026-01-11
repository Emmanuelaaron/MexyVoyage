import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/service' },
    {
      label: 'Pages',
      path: null,
      children: [
        { label: 'Destinations', path: '/destinations' },
        { label: 'Tour Packages', path: '/packages' },
        { label: 'Travel Info', path: '/travel-info' },
        { label: 'Testimonials', path: '/testimonial' },
        { label: '404 Page', path: '/404' },
      ],
    },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}>
        Mexy Voyage Safaris
      </Typography>
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.label}>
            {item.path ? (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  selected={isActive(item.path)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemText primary={item.label} sx={{ pl: 2, fontWeight: 600 }} />
                </ListItem>
                {item.children?.map((child) => (
                  <ListItem key={child.path} disablePadding>
                    <ListItemButton
                      onClick={() => navigate(child.path)}
                      selected={isActive(child.path)}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={child.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <Button variant="contained" fullWidth startIcon={<ArrowForwardIcon />}>
              Book Now
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      sx={{
        bgcolor: 'white',
        color: 'text.primary',
        top: scrolled ? 0 : -100,
        transition: 'top 0.5s ease',
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflowX: 'hidden',
        maxWidth: '100%',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              mr: 4,
            }}
            onClick={() => navigate('/')}
          >
            <Box
              component="img"
              src="/img/icon/MexyOfficialLogo.png"
              alt="Mexy Voyage Safaris Logo"
              sx={{ height: 50, width: 'auto', display: { xs: 'none', md: 'block' } }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', m: 0 }}>
              Mexy Voyage Safaris
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                sx={{ color: '#282F34' }}
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
                {navItems.map((item) =>
                  item.path ? (
                    <Button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      sx={{
                        color: isActive(item.path) ? 'primary.main' : '#282F34',
                        fontWeight: isActive(item.path) ? 600 : 500,
                        textTransform: 'uppercase',
                        fontSize: '0.9375rem',
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: 'transparent',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Button
                      key={item.label}
                      onClick={handleMenuClick}
                      sx={{
                        color: anchorEl ? 'primary.main' : '#282F34',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        fontSize: '0.9375rem',
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: 'transparent',
                        },
                      }}
                    >
                      {item.label} ▼
                    </Button>
                  )
                )}
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                {navItems
                  .find((item) => item.label === 'Pages')
                  ?.children?.map((child) => (
                    <MenuItem
                      key={child.path}
                      onClick={() => {
                        navigate(child.path);
                        handleMenuClose();
                      }}
                      selected={isActive(child.path)}
                    >
                      {child.label}
                    </MenuItem>
                  ))}
              </Menu>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/contact')}
            >
              Book Now
            </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;