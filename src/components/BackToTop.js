import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="large"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
        aria-label="scroll back to top"
      >
        <ArrowUpward />
      </Fab>
    </Zoom>
  );
};

export default BackToTop;