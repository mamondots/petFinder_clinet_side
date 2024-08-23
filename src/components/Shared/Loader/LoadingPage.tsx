import React from 'react';
import { Container, Typography, CircularProgress, Box, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.7;
  }
`;

const LoadingPage = () => {
  const theme = useTheme();

  return (
    <Container 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        textAlign: 'center',
        background: theme.palette.background.default,
        padding: 2
      }}
    >
      <Box sx={{ mb: 4 }}>
        <CircularProgress 
          size={60} 
          sx={{ 
            color: theme.palette.primary.main, 
            animation: `${pulse} 2s infinite` 
          }} 
        />
      </Box>
      <Typography 
        variant="h4" 
        component="h1" 
        color="text.primary" 
        sx={{ 
          mb: 2, 
          fontWeight: 600 
        }}
      >
        Loading...
      </Typography>
      <Typography 
        variant="body1" 
        color="text.secondary"
        sx={{ 
          fontSize: '1.2rem' 
        }}
      >
        Please wait while we load the content for you.
      </Typography>
    </Container>
  );
};

export default LoadingPage;
