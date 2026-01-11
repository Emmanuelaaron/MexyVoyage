import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { Container } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Spinner from './components/Spinner';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import TravelInfo from './pages/TravelInfo';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556B2F', // Army green (Olive Drab)
      light: '#6B8E23', // Lighter army green
      dark: '#4B5320', // Darker army green
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#282F34',
    },
    text: {
      primary: '#282F34', // Dark color for main text
      secondary: '#6c757d', // Muted text color
    },
    background: {
      default: '#E8EBE0', // Light army green tint (slightly darker)
      paper: '#FFFFFF', // Keep paper white for cards/containers
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    body1: {
      color: '#555', // Match Bootstrap default text color
    },
    body2: {
      color: '#555',
    },
    h1: {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 700,
      color: '#282F34',
    },
    h2: {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 700,
      color: '#282F34',
    },
    h3: {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      color: '#282F34',
    },
    h4: {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      color: '#282F34',
    },
    h5: {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      color: '#282F34',
    },
    h6: {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      color: '#282F34',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          color: '#FFFFFF',
          backgroundColor: '#556B2F', // Army green
          '&:hover': {
            backgroundColor: '#4B5320', // Darker army green on hover
            borderColor: '#4B5320',
          },
        },
        containedSecondary: {
          color: '#FFFFFF',
        },
      },
    },
  },
});

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: 'hidden', maxWidth: '100%', position: 'relative' }}>
        <Router>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Topbar />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/travel-info" element={<TravelInfo />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
              <BackToTop />
            </>
          )}
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;