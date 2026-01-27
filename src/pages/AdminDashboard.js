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
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People,
  TravelExplore,
  Assessment,
  Settings,
  Logout,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { signOut } from '../store/slices/authSlice';
import PageHeader from '../components/PageHeader';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(signOut());
    navigate('/login');
  };

  const stats = [
    { title: 'Total Users', value: '1,234', icon: <People />, color: '#556B2F' },
    { title: 'Total Bookings', value: '567', icon: <TravelExplore />, color: '#6B8E23' },
    { title: 'Revenue', value: '$45,678', icon: <Assessment />, color: '#4B5320' },
    { title: 'Active Tours', value: '23', icon: <DashboardIcon />, color: '#556B2F' },
  ];

  const quickActions = [
    { label: 'Manage Users', path: '/admin/users', icon: <People /> },
    { label: 'Manage Tours', path: '/admin/tours', icon: <TravelExplore /> },
    { label: 'View Reports', path: '/admin/reports', icon: <Assessment /> },
    { label: 'Settings', path: '/admin/settings', icon: <Settings /> },
  ];

  return (
    <Box>
      <PageHeader title="Admin Dashboard" breadcrumbs={['Home', 'Dashboard', 'Admin']} />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: 'primary.main', color: 'white' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Welcome back, {user?.first_name || 'Admin'}!
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Here's what's happening with your tours and bookings today.
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

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {stat.title}
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: stat.color }}>
                        {stat.value}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: `${stat.color}20`, color: stat.color, width: 56, height: 56 }}>
                      {stat.icon}
                    </Avatar>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Actions */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Quick Actions
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {quickActions.map((action, index) => (
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
                onClick={() => navigate(action.path)}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {action.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {action.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Activity */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Recent Activity
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
              No recent activity to display.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
