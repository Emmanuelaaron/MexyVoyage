import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';

const Counter = ({ end = 0, duration = 2000, start = 0 }) => {
  // Ensure end is a valid number
  const endValue = typeof end === 'number' && !isNaN(end) ? end : 0;
  const startValue = typeof start === 'number' && !isNaN(start) ? start : 0;
  
  const [count, setCount] = useState(startValue);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuad);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, startValue, duration]);

  // Ensure count is always a valid number before rendering
  const displayCount = typeof count === 'number' && !isNaN(count) ? count : 0;

  return (
    <Typography
      ref={countRef}
      variant="h2"
      sx={{
        color: 'white',
        fontWeight: 700,
        mb: 1,
      }}
    >
      {String(displayCount.toLocaleString())}
    </Typography>
  );
};

export default Counter;