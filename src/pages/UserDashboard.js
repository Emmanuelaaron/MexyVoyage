import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Person,
  TravelExplore,
  History,
  Favorite,
  Settings,
  Logout,
  Edit,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { signOut } from '../store/slices/authSlice';
import PageHeader from '../components/PageHeader';

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(signOut());
    navigate('/login');
  };

  const menuItems = [
    { label: 'My Bookings', path: '/user/bookings', icon: <TravelExplore />, color: '#556B2F' },
    { label: 'Booking History', path: '/user/history', icon: <History />, color: '#6B8E23' },
    { label: 'Favorites', path: '/user/favorites', icon: <Favorite />, color: '#4B5320' },
    { label: 'Profile Settings', path: '/user/profile', icon: <Settings />, color: '#556B2F' },
  ];

  return (
    <Box>
      <PageHeader title="My Dashboard" breadcrumbs={['Home', 'Dashboard', 'My Account']} />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Welcome, {user?.first_name || 'User'}!
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Manage your bookings, view your travel history, and update your profile.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Logout />}
                onClick={handleLogout}
                sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Profile Card */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    width: 100,
                    height: 100,
                    mx: 'auto',
                    mb: 2,
                    fontSize: '2.5rem',
                  }}
                >
                  {user?.first_name?.[0] || 'U'}
                  {user?.last_name?.[0] || ''}
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  {user?.full_name || `${user?.first_name || ''} ${user?.last_name || ''}`.trim()}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {user?.email}
                </Typography>
                <Chip
                  label={user?.admin ? 'Admin' : 'User'}
                  color={user?.admin ? 'primary' : 'default'}
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="outlined"
                  startIcon={<Edit />}
                  fullWidth
                  onClick={() => navigate('/user/profile')}
                >
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Stats */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: '100%', boxShadow: 3 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Active Bookings
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          0
                        </Typography>
                      </Box>
                      <Avatar sx={{ bgcolor: 'primary.light', color: 'white', width: 56, height: 56 }}>
                        <TravelExplore />
                      </Avatar>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: '100%', boxShadow: 3 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Total Bookings
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          0
                        </Typography>
                      </Box>
                      <Avatar sx={{ bgcolor: 'primary.light', color: 'white', width: 56, height: 56 }}>
                        <History />
                      </Avatar>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Menu Items */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Quick Access
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
                onClick={() => navigate(item.path)}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: item.color,
                      color: 'white',
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Bookings */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Recent Bookings
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
              You don't have any bookings yet. Start exploring our amazing destinations!
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button variant="contained" onClick={() => navigate('/packages')}>
                Browse Packages
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default UserDashboard;
